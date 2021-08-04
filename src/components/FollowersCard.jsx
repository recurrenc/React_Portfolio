import React, { useState, useEffect } from "react";
import { get } from "axios";

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
  const [followerProfile, setFollowerProfile] = useState([]);
  async function getProfileData() {
    //"https://api.github.com/users/SonuKumar81800/followers"
    await get(`https://api.github.com/users/${follower}`)
      .then((res) => setFollowerProfile(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getProfileData();
  }, []);
  console.log(followerProfile);
  return (
    <>
      <Card>
        <CardImg
          top
          width="100%"
          src={followerProfile.avatar_url}
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
