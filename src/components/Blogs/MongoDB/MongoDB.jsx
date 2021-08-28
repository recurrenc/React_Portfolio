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
import { commands } from "./commands";
import CodeTemplate from "./CodeTemplate";
import "./MongoDB.css";
import { Container } from "@material-ui/core";

// const exampleCode = `
// import React, { useState } from "react";

// function Example() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
// `.trim();

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

export default function MongoDB() {
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
        Read Full Artical
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
              MongoDB Developer's Notes
            </Typography>
          </Toolbar>
        </AppBar>

        <div className="container">
          <h1 className="articleHead">
            All MongoDb commands you will ever need (MongoDb Cheatsheet)
          </h1>
          <br />
          <p className="description">
            In this post, we will see a comprehensive list of all the MongoDB
            commands you will ever need as a MongoDB beginner. This list covers
            almost all the most used commands in MongoDB.{" "}
          </p>
          <p className="description">
            I will assume that you are working inside a collection named
            'collection' on a MongoDB database of your choice
          </p>

          <h3 className="title">1. All Database Commands</h3>
          {commands?.database?.map((c, i) => (
            <CodeTemplate code={c.code} heading={c.heading} />
          ))}
          <br />
          <h3 className="title">2. All Collection Commands</h3>
          {commands?.collections?.map((c, i) => (
            <CodeTemplate code={c.code} heading={c.heading} />
          ))}

          <br />
          <h3 className="title">3. Document's CURD Operation Commands </h3>
          {commands?.document?.map((c, i) => (
            <CodeTemplate code={c.code} heading={c.heading} />
          ))}

          <br />

          {/* Find Documents with Less than and Greater than Operator  */}
          <h3 className="title">
            4. Find Documents with Less than and Greater than Operator{" "}
          </h3>
          {commands?.inequality?.map((c, i) => (
            <CodeTemplate code={c.code} heading={c.heading} />
          ))}
          {/* <br /> */}
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
