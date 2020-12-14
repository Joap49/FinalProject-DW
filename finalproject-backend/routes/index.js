//should be identical to exercise 4
//Show all posts
const express = require("express");
const router = express.Router();
const firebase = require("firebase");
const db = firebase.firestore();
const reviews = db.collection("reviews");

router.get("/reviews/:id", (req, res) => {
  const reviewsArray = [];
  //Get ID
  const queryId = req.params.id;
  //Figure out how to refine our search to the reviewAuthorId

  reviews
    .where("reviewAuthorId", "==", queryId)
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

router.get("/all-reviews", (req, res) => {
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
