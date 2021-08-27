import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import YouTubeIcon from "@material-ui/icons/YouTube";
import MongoDB from "./MongoDB";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 654,
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    backgroundColor: "#14aa53",
  },
}));

export default function BlogCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            DB
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="MongoDB Cheatsheet"
        subheader="August 27, 2021"
      />
      <CardMedia
        className={classes.media}
        image="https://1.bp.blogspot.com/-ZP56Swt5XhA/X5lpmXhJpII/AAAAAAAAkF4/wKmWVIpiCsk_2b_nOjAaVvXsqRltXFrmQCLcBGAsYHQ/w400-h225/MongoDB%2BEssentials%2B-%2BUnderstand%2Bthe%2BBasics%2Bof%2BMongoDB%2B-%2BFree%2BUdemy%2Bcourse.png"
        title="Mongodb Essentials"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          In this post, we will see a comprehensive list of all the MongoDB
          commands you will ever need as a MongoDB beginner. This list covers
          almost all the most used commands in MongoDB.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <a
            style={{ color: "inherit" }}
            href="https://www.youtube.com/channel/UCTZbxmX_heRWbbopfPvoHQA"
          >
            <YouTubeIcon />
          </a>
        </IconButton>

        <IconButton aria-label="share">
          <MongoDB />
        </IconButton>
      </CardActions>
    </Card>
  );
}
