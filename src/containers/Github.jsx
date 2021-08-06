import React, { useState, useEffect, Suspense } from "react";
import Loading from "../components/Loading";
import { openSource } from "../portfolio";
import { get } from "axios";
import classnames from "classnames";
// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  Container,
  CardColumns,
  TabPane,
} from "reactstrap";

import FollowersCard from "../components/FollowersCard";
import GithubRepoCard from "../components/GithubRepo/GithubRepoCard";

const Github = () => {
  const [state, setState] = useState({ tabs: 1 });
  const [followers, setFollowers] = useState([]);
  const [repo, setRepo] = useState([
    {
      name: "",
      description: "",
      language: "",
      forks_count: 0,
      stargazers_count: 0,
      size: 0,
    },
  ]);

  const repoUrl = `https://api.github.com/users/${openSource.githubUserName}/repos`;

  async function getProfileData() {
    //"https://api.github.com/users/SonuKumar81800/followers"
    await get(
      `https://api.github.com/users/${openSource.githubUserName}/followers`
    )
      .then((res) => setFollowers(res.data))
      .catch((err) => console.log(err));
  }

  async function getRepoData(u) {
    await get(u)
      .then((res) => setRepo(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getProfileData();
    getRepoData(repoUrl);
  }, [state, repoUrl]);

  const toggleNavs = (e, state, index) => {
    e.preventDefault();
    setState({
      [state]: index,
    });
  };

  return (
    <>
      <Container className="mt-3">
        <div className="nav-wrapper">
          <Nav
            className="nav-fill flex-column flex-md-row"
            id="tabs-icons-text"
            pills
            role="tablist"
          >
            <NavItem>
              <NavLink
                aria-selected={state.tabs === 1}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: state.tabs === 1,
                })}
                onClick={(e) => toggleNavs(e, "tabs", 1)}
                href="#pablo"
                role="tab"
              >
                <i className="fa fa-user mr-2" />
                Followers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                aria-selected={state.tabs === 2}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: state.tabs === 2,
                })}
                onClick={(e) => toggleNavs(e, "tabs", 2)}
                href="#pablo"
                role="tab"
              >
                <i className="ni ni-cloud-upload-96 mr-2" />
                Repositories
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                aria-selected={state.tabs === 3}
                className={classnames("mb-sm-3 mb-md-0", {
                  active: state.tabs === 3,
                })}
                onClick={(e) => toggleNavs(e, "tabs", 3)}
                href="#pablo"
                role="tab"
              >
                <i className="fa fa-bar-chart mr-2" />
                Statistics
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Card className="shadow">
          <CardBody>
            <TabContent activeTab={"tabs" + state.tabs}>
              <TabPane tabId="tabs1">
                <CardColumns>
                  <Suspense fallback={<Loading />}>
                    {followers.map((follower) => (
                      <FollowersCard
                        key={follower.id}
                        follower={follower.login}
                      />
                    ))}
                  </Suspense>
                </CardColumns>
              </TabPane>
              <TabPane tabId="tabs2">
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {repo.map((v) => {
                    return <GithubRepoCard key={v.id} repo={v} />;
                  })}
                </div>
              </TabPane>
              <TabPane tabId="tabs3">
                <p className="description">
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua, retro synth master
                  cleanse. Mustache cliche tempor, williamsburg carles vegan
                  helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher
                  synth.
                </p>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default Github;
