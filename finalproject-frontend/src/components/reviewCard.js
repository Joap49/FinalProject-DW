import React from "react";

function ReviewCard({ reviewData }) {
  return (
    <div className="ReviewCard">
      <h2>{reviewData.reviewTitle}</h2>
      {/* Create this link */}
      <h3>
        <a href={`/user/${reviewData.reviewAuthorId}`}>
          by {reviewData.reviewAuthor}
        </a>
      </h3>
      <h3>{reviewData.reviewText}</h3>
    </div>
  );
}

export default ReviewCard;
