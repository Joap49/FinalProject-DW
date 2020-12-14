//should be identical to exercise 4
//Show all posts
const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();
const reviews = db.colelction("reviews");

router.get("all-reviews", (req, res) => {
  const reviewsArray = [];
  reviews
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // Push document into array every time query loops over existing articles
        reviewsArray.push(doc.data());
      });
      return res.send(reviewsArray);
    })
    .catch(function (error) {
      console.log("Error:", error);
      return res.send(error);
    });
});

router.get("/", (req, res) => {
  res.send(sampleJSON);
});

module.exports = router;
