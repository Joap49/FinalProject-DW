import Axios from "axios";
import React from "react";

function CreateReview({ userAuthInfo }) {
  function submitReview(e) {
    e.preventDefault();
    const reviewTitle = e.currentTarget.reviewTitle.value;
    const reviewText = e.currentTarget.reviewText.value;
    const reviewAuthor = e.currentTarget.reviewAuthor.value;
    const reviewAuthorId = userAuthInfo.uid;

    Axios.get(
      `https://limitless-eyrie-25092.herokuapp.com/create?reviewTitle=${reviewTitle}&reviewText=${reviewText}&reviewAuthor=${reviewAuthor}&reviewAuthorId=${reviewAuthorId}`
    )
      .then(function (response) {
        console.log({ SUCCESS: response });
      })
      .catch(function (error) {
        console.log("ERROR_CREATING_POST", error);
      });
    console.log(e.currentTarget);
    console.log("Author's ID:", reviewAuthorId);
  }

  return (
    <div className="submissionForm">
      <h1>WRITE A REVIEW</h1>
      <div className="inputContainer">
        <form onSubmit={(e) => submitReview(e)}>
        <div className="formWrapper">
          <label>
            What product are you reviewing?
          </label>
            <input type="text" name="reviewTitle" placeholder="Title" className="inputBar" />
        </div>
        <div className="formWrapper">
          <label>
            Your name
          </label>
            <input type="text" name="reviewAuthor" placeholder="Author" className="inputBar" />
        </div>
        <div className="formWrapper">
          <label>
            How do you feel about this product?
          </label>
            <input type="text" name="reviewText" placeholder="Text" className="inputBar && reviewInput" />
        </div>
          <button type="submit" className="submitButton">Submit Review</button>
        </form>
      </div>
    </div>
  );
}

export default CreateReview;
