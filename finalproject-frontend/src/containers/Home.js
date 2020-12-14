import React, { useState, useEffect } from "react";
import axios from "axios";
import reviewCard from "../components/reviewCard";

function Home() {
  const [reviewAPIData, setReviewAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/`) // THis will link to your Heroku deploy
      .then(function (response) {
        if (response.data) {
          setReviewAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.warn("error", error);
      });
  }, []);

  return (
    <div>
      <h1>ALL REVIEWS:</h1>
      {reviewAPIData.map((review, i) => (
        <reviewCard reviewData={review} key={i} />
      ))}
    </div>
  );
}

export default Home;
