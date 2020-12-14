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
      `http://localhost:4000/create?reviewTitle=${reviewTitle}&reviewText=${reviewText}&reviewAuthor=${reviewAuthor}&reviewAuthorId=${reviewAuthorId}`
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
    <div>
      <h1>Create Review</h1>
      <form onSubmit={(e) => submitReview(e)}>
        <label>
          Subject of Review
          <input type="text" name="title" placeholder="Title" />
        </label>
        <label>
          Who are you?
          <input type="text" name="author" placeholder="Author" />
        </label>
        <label>
          What would you like to say?
          <input type="text" name="text" placeholder="Text" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateReview;
