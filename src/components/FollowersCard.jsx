import React, { useState, useEffect } from "react";
import { get } from "axios";
import "./FollowerCard.css";

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
  const query = `https://api.github.com/users/${follower}`;
  const [followerProfile, setFollowerProfile] = useState([]);
  const getFollowerData = async (q) => {
    //"https://api.github.com/users/SonuKumar81800/followers"
    await get(q)
      .then((res) => setFollowerProfile(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getFollowerData(query);
  }, [query]);

  return (
    <>
      <Card>
        <CardImg
          top
          width="90%"
          style={{ borderRadius: "50%", padding: "30px 30px 0px 30px" }}
          src={followerProfile.avatar_url}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">
            {followerProfile.name
              ? followerProfile.name
              : followerProfile.login}
          </CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {followerProfile.login}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {followerProfile.location
              ? followerProfile.location
              : "Unknown Location"}
          </CardSubtitle>
          <CardText>
            <p className="descriptionPara">
              {followerProfile.bio
                ? followerProfile.bio
                : `Hey, I am a creative person with enthusiasm for computer-related stuff. I am a computer science and engineering undergraduate with a curiosity for learning new technology`}
            </p>
          </CardText>
          <p>
            {`${followerProfile.followers} ${followerProfile.followers === 1 ? "Follower" : "Followers"}, ${followerProfile.following} Following`}
          </p>
          <p>
            {followerProfile.public_repos ?
              `${followerProfile.public_repos} Public ${followerProfile.public_repos === 1 ? "Repository" : "Repositories"}` :
              "No Public Repositories"}
          </p>
          <Button
            href={followerProfile.html_url}
            className="bg-gradient-blue text-white"
          >
            Visit Profile
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default FollowersCard;
