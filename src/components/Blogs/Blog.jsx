import React from "react";
import { Container } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BlogCard from "./BlogCard";
import MongoDB from "./MongoDB/MongoDB";
import VSExtension from "./VSCodeExtension/VSExtension";

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
              <BlogCard
                dp="DB"
                bg="#14aa53"
                title="Mongodb Essentials"
                publishedAt="August 27, 2021"
                shortDescription="In this post, we will see a comprehensive list of all the MongoDB commands you will ever need as a MongoDB beginner. This list covers almost all the most used commands in MongoDB."
                src="https://1.bp.blogspot.com/-ZP56Swt5XhA/X5lpmXhJpII/AAAAAAAAkF4/wKmWVIpiCsk_2b_nOjAaVvXsqRltXFrmQCLcBGAsYHQ/w400-h225/MongoDB%2BEssentials%2B-%2BUnderstand%2Bthe%2BBasics%2Bof%2BMongoDB%2B-%2BFree%2BUdemy%2Bcourse.png"
                comp={<MongoDB />}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <BlogCard
                dp="VS"
                bg="#0066b8"
                title="Create Your Own VS Code Extension"
                publishedAt="August 31, 2021"
                shortDescription="In this post, we will discuss, how we can create our visual studio code extension from scratch. we have also its video tutorial available in this blog."
                src="https://simonblackbourn.net/content/blog/20190725-vscode-extensions/vs-code-extensions.png"
                comp={<VSExtension />}
              />
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Blog;
