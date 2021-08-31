import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Code from "../Code";
import "./vscode.css";
import snippet from "./snippets.json";

import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    color: "#fff",
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function VSExtension() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Read Article
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Create Your Own VS Code Extension
            </Typography>
          </Toolbar>
        </AppBar>

        <div className="container">
          <h1 className="articleHead">
            Step by Step tutorial for developing VS Code Extension
          </h1>
          <br />
          <p className="description">
            Visual Studio Code is built with extensibility in mind. From the UI
            to the editing experience, almost every part of VS Code can be
            customized and enhanced through the Extension API.In fact, many core
            features of VS Code are built as extensions and use the same
            Extension API.
          </p>
          <p className="description">
            In this topic, we'll teach you the fundamental concepts for building
            extensions. Make sure you have
            <a href="https://nodejs.org/en/"> Node.js </a> and
            <a href="https://git-scm.com/"> Git </a> installed, then install
            <a href="https://yeoman.io/"> Yeoman </a>
            and
            <a href="https://www.npmjs.com/package/generator-code">
              VS Code Extension Generator
            </a>
            with:
          </p>
          <div className="youtube">
            <iframe
              src="https://www.youtube.com/embed/4EAboKLg6BE"
              title="How to create vs code extension"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <br />
          <h3 className="title">Step 1 : Install Dependencies</h3>
          <Code code="npm install -g yo generator-code" />

          <h3 className="title">Step 2 : Create Boilerplate</h3>

          <p className="description">
            Open Terminal and run {`yo code`} and select New Code Snippets
          </p>
          <Code
            language="bash"
            code={` yo code

     _-----_     ╭──────────────────────────╮
    |       |    │   Welcome to the Visual  │
    |--(o)--|    │   Studio Code Extension  │
   \`---------´   │        generator!        │
    ( _´U\`_ )    ╰──────────────────────────╯
    /___A___\\   /
     |  ~  |     
   __'.___.'__   
 ´   \`  |° ´ Y \` 

? What type of extension do you want to create? 
  New Extension (TypeScript) 
  New Extension (JavaScript) 
  New Color Theme 
  New Language Support 
❯ New Code Snippets 
  New Keymap 
  New Extension Pack 
  New Language Pack (Localization) 
  New Notebook Renderer (TypeScript) 

`}
          />
          <br />

          <p className="description">
            After that, you have to answer these questions properly.
          </p>

          <Code
            language="bash"
            code={`? What type of extension do you want to create? New Code Snippets
Folder location that contains Text Mate (.tmSnippet) and Sublime snippets (.sublime-snippet) or press ENTER to start with a new snippet file.
? Folder name for import or none for new: 
? What's the name of your extension? ES-Support
? What's the identifier of your extension? es-support
? What's the description of your extension? This Extension provides code snippets used in ES6 and above for React, 
Redux, Node, Express and Javascript.
Enter the language for which the snippets should appear. The id is an identifier and is single, lower-case name such as 'php', 'javascript'
? Language id: javascript
? Initialize a git repository? No

`}
          />

          <br />

          <p className="description">
            Now you will have a director named as your Extension Name eg:
            es-support
          </p>

          <br />

          <h3 className="title">
            Step 3: Create Snippets according to your need
          </h3>
          <p className="description">
            Go to your project and open it in Visual Studio Code by the
            following command
          </p>

          <Code language="bash" code={`cd es-support && code .`} />
          <br />
          <p className="description">
            A new Visual Studio Code instance will open with the Boilerplate
            just we have created. Go to the package.json file and update it to
            given below :
          </p>
          <Code
            language="json"
            code={`{
  "name": "es-support",
  "displayName": "ES-Support",
  "description": "This Extension provides code snippets used in ES6 and above for React, Redux, Node, Express and Javascript.",
  "version": "0.0.1",
  "engines": {
    "vscode": "^1.59.0"
  },
  "categories": [
    "Snippets"
  ],
  "contributes": {
    "snippets": [
      {
        "language": "javascript",
        "path": "./snippets/snippets.json"
      },
      {
        "language": "javascriptreact",
        "path": "./snippets/snippets.json"
      }
    ]
  }
}`}
          />
          <br />

          <p className="description">
            Go to the snippets folder and rename the file from snippets.
            code-snippets to snippets.json and open it in the editor window
          </p>

          <p className="description">
            Stick the Following Code in the snippets.json file and Save the
            file.
          </p>

          <div className="snippets">
            <Code
              language="json"
              code={JSON.stringify(snippet, undefined, 4)}
            />
          </div>

          <br />
          <p className="description">
            Now, your Extension is ready. Just paste the complete folder{" "}
            <code>es-support</code> to the vs code extension's path, in my case
            it is <code>/home/exploit/.vscode/extensions/ </code> <br />
            Now, Restart your visual studio code and check if the extension is
            installed or not? If it is installed, you are good to go. Reload
            your vs code instance by <code>ctrl + shift + p</code> and type
            <Code code={`>Developer: Reload Window`} />
            and hit Enter, Your Extension is Ready for use now.
          </p>

          <AppBar position="static" color="inherit">
            <Container maxWidth="md">
              <Toolbar>
                <Typography variant="body1" color="secondary">
                  2021 © Sonu Kumar
                </Typography>
              </Toolbar>
            </Container>
          </AppBar>
        </div>
      </Dialog>
    </div>
  );
}
