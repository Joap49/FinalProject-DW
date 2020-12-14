import React from "react";

function reviewCard({ reviewData }) {
  return (
    <div className="reviewCard">
      <h2>{reviewData.reviewTitle}</h2>
      {/* Create this link */}
      <h3>
        <a href={`/user/${reviewData.reviewAuthorId}`}>
          By: {reviewData.reviewAuthor}
        </a>
      </h3>
      <h3>{reviewData.reviewText}</h3>
    </div>
  );
}

export default reviewCard;
