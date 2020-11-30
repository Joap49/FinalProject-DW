//Create Post
const express = require("express");
const router = express.Router();

//require firebase
const firebase = require("firebase");
//Initialize firebase
const db = firebase.firestore();
//reference a specific collection
const blogposts = db.collection("blogposts");

const form = `
<form action="/create/submit"> 
    <input info="text" name="title" placeholder="Title of the Post" />
    <input info="text" name="text" placeholder="Text of the Post" />
    <input info="text" name="author" placeholder="Author of the Post" />
    <button type="submit">Submit Post</button>
</form>
`;
//Default route serves form
router.get("/", (req, res) => res.send(form));
//Route for submitting the form
router.get("/submit", (req, res) => {
  const queryParams = req.query;

  //custom id for our posts
  const idFromTitle = queryParams.title.replace(/\s+/g, "-").toLowerCase(); //any spaces, replace with dash

  blogposts
    .doc(idFromTitle) // alows you to create new posts or update them
    .set(queryParams)
    .then(function (doc) {
      res.send("Successful Submission");
    })
    .catch(function (error) {
      console.log("error", error);
      res.send("Failed Submission");
    });
});

module.exports = router;
