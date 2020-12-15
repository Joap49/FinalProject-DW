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
    <div className="Homepage">
      <h1>REVIEWS</h1>
      <div className="homeReviews">
        {reviewAPIData.map((review, i) => (
          <div key={i} className="homeText">
            <h2 className="homeText">{review.reviewTitle}</h2>
            <h3 className="homeText">{review.reviewAuthor}</h3>
            <p className="homeText">{review.reviewText}</p>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Home;
