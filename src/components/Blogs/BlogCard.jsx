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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 654,
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function BlogCard({
  src,
  dp,
  bg,
  title,
  publishedAt,
  shortDescription,
  comp,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{ backgroundColor: bg }}>
            {dp}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={title}
        subheader={publishedAt}
      />
      <CardMedia className={classes.media} image={src} title={title} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {shortDescription}
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

        <IconButton aria-label="share">{comp}</IconButton>
      </CardActions>
    </Card>
  );
}
