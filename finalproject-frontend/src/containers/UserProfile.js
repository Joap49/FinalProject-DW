import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//Components
import reviewCard from "../components/ReviewCard";

function UserProfile() {
  const [userReviewData, setUserReviewData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://limitless-eyrie-25092.herokuapp.com/reviews/${id}`) // THis will link to your Heroku deploy
      .then(function (response) {
        setUserReviewData(response.data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);
  console.log({ userReviewData });

  return (
    <div className="UserProfile">
      <h1>USER PROFILE</h1>
      <div className="profileReviews">
        <h1 className="profileText">Your Reviews</h1>
        {userReviewData.map((review, i) => (
          <div key={i} className="profileText">
            <h2 className="profileText">{review.reviewTitle}</h2>
            <p className="profileText">{review.reviewText}</p>
          </div>
      ))}
      </div>
    </div>
  );
}

export default UserProfile;
