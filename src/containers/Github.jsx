import React, { useState } from "react";
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

const Github = ({ prof }) => {
  const [state, setState] = useState({ tabs: 1 });

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
                  <FollowersCard />
                  <FollowersCard />
                  <FollowersCard />
                  <FollowersCard />
                  <FollowersCard />
                  <FollowersCard />
                  <FollowersCard />
                  <FollowersCard />
                  <FollowersCard />
                </CardColumns>
              </TabPane>
              <TabPane tabId="tabs2">
                <p className="description">
                  Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                  Aliquip placeat salvia cillum iphone. Seitan aliquip quis
                  cardigan american apparel, butcher voluptate nisi qui.
                </p>
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
