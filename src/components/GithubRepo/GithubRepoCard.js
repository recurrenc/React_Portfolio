import React from "react";
import "./GithubRepoCard.css";
import Grid from "@material-ui/core/Grid";
import { Fade } from "react-reveal";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function GithubRepoCard({ repo, isDark }) {
  // console.log(repo);
  const [date, setDate] = useState();

  useEffect(() => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = repo.updated_at
      ? new Date(repo.updated_at).toLocaleDateString("en-IN", options)
      : "Loding...";
    setDate(date);
  }, [repo]);
  // if(repo.updated_at) const date = new Date(repo.updated_at) "Loading...";
  // function openRepoinNewTab(url) {
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }

  return (
    <Grid item xs={12} sm={6}>
      <Fade bottom duration={1000} distance="20px">
        <div
          className={isDark ? "dark-card-mode repo-card-div" : "repo-card-div"}
          key={repo.id}
          // onClick={() => openRepoinNewTab({repo.html_url})}
        >
          <div className="repo-name-div">
            <svg
              aria-hidden="true"
              className="octicon repo-svg"
              height="20"
              role="img"
              viewBox="0 0 12 16"
              width="14"
            >
              <path
                fill-rule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-name">{repo.name}</p>
          </div>
          <p className="repo-description">{repo.description}</p>
          {/* <p>{`${date.getHours()}: ${date.getMinutes()}`}</p> */}
          <p>Last Update: {date}</p>
          <div className="repo-stats">
            <div className="repo-left-stat">
              {"repo.language" !== null && (
                <span>
                  <div
                    className="language-color"
                    // style={{ backgroundColor: repo.node.primaryLanguage.color }}
                  ></div>
                  <p>{repo.language}</p>
                </span>
              )}
              <span>
                <svg
                  aria-hidden="true"
                  className="octicon repo-star-svg"
                  height="20"
                  role="img"
                  viewBox="0 0 10 16"
                  width="12"
                  fill="rgb(106, 115, 125)"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                  ></path>
                </svg>
                <p>{repo.forks_count}</p>
              </span>
              <span>
                <svg
                  aria-hidden="true"
                  className="octicon repo-star-svg"
                  height="20"
                  role="img"
                  viewBox="0 0 14 16"
                  width="14"
                  fill="rgb(106, 115, 125)"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                  ></path>
                </svg>
                <p>{repo.stargazers_count}</p>
              </span>
            </div>
            <div className="repo-right-stat">
              <p>{repo.size} KB</p>
            </div>
          </div>
          <Button
            className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
            color="default"
            href={repo.html_url}
          >
            <span className="btn-inner--icon mr-1">
              <i className="fa fa-github" />
            </span>
            <span className="btn-inner--text">Visit Repository</span>
          </Button>
        </div>
      </Fade>
    </Grid>
  );
}
