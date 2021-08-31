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
import "./vscode.css";

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
            In this post, we will see a comprehensive list of all the MongoDB
            commands you will ever need as a MongoDB beginner. This list covers
            almost all the most used commands in MongoDB.{" "}
          </p>
          <p className="description">
            I will assume that you are working inside a collection named
            'collection' on a MongoDB database of your choice
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

          <h1>HELP</h1>
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
