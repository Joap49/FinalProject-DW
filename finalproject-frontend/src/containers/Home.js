import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

function Home() {
  const [reviewAPIData, setReviewAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://limitless-eyrie-25092.herokuapp.com/all-reviews`) // THis will link to your Heroku deploy
      .then(function (response) {
        if (response.data) {
          setReviewAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.warn("error", error);
      });
  }, []);

  console.log({ reviewAPIData });

  return (
    <div>
      <h1>ALL REVIEWS:</h1>
      {reviewAPIData.map((review, i) => (
        <div key={i}>
          <h2>{review.reviewTitle}</h2>
          <h3>By: {review.reviewAuthor}</h3>
        </div>
      ))}
    </div>
  );
}

export default Home;
