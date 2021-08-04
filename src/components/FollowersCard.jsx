import React, { useState, useEffect, Suspense } from "react";
import { openSource } from "../portfolio";
import { get } from "axios";
import Loading from "../components/Loading";

import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";

const FollowersCard = ({ follower }) => {
  const [prof, setProf] = useState({});
  async function getProfileData() {
    await get(`https://api.github.com/users/${openSource.githubUserName}`)
      .then((res) => setProf(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getProfileData();
  });

  return (
    <>
      <Card>
        <CardImg
          top
          width="100%"
          src="../assets/img/google.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
          <Button className="bg-gradient-blue text-white">Profile</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default FollowersCard;
