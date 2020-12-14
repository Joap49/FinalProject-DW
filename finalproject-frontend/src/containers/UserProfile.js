import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//Components
import reviewCard from "../components/reviewCard";

function UserProfile() {
  const [userProfileData, setUserProfileData] = useState({});
  const [userReviewData, setUserReviewData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/reviews/${id}`) // THis will link to your Heroku deploy
      .then(function (response) {
        setUserReviewData(response);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="Title">
      <h1>User Profile</h1>
      <h2>{"name"} Reviews:</h2>
      {userReviewData.map((review, i) => (
        <reviewCard reviewData={review} key={i} />
      ))}
    </div>
  );
}

export default UserProfile;
