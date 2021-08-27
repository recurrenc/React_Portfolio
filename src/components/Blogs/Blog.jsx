import React from "react";
import { Container } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BlogCard from "./BlogCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Blog = () => {
  const classes = useStyles();

  return (
    <>
      <Container className="mt-3">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <BlogCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BlogCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BlogCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BlogCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BlogCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BlogCard />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Blog;
