//Show one Post
const express = require("express");
const router = express.Router();

//require firebase
const firebase = require("firebase");
//Initialize firebase
const db = firebase.firestore();
//reference a specific collection
const blogposts = db.collection("blogposts");
// If no ID provided, send this
router.get("/", (req, res) => res.send("No Id Provided"));

router.get("/:id", (req, res) => {
  // get the query parameter from the URL and set it to a variable
  const queryId = req.params.id;
  blogposts
    .doc(queryId) // looking up doc by ID
    .get()
    .then(function (doc) {
      if (doc.exists) {
        const data = doc.data(); //assigning the document data to a variable
        return res.send(data); // send data to use who queries
      } else {
        // if no document exists, send message
        return res.send("No document exists");
      }
    })
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;
