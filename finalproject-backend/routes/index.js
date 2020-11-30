//Show all posts
const express = require("express");
const router = express.Router();
//Require Firebase
const firebase = require("firebase");
//Initialize firebase
const db = firebase.firestore();
//reference a specific collection
const blogposts = db.collection("blogposts");

router.get("/", (req, res) => {
  // Inside this arrow funciton, we can do anything we want as long as we return at the end
  const blogpostsArray = [];
  blogposts
    .get()
    .then((querySnapshot) => {
      //loop through quert snapshot and push into array
      console.log("querySnapshot", querySnapshot);
      querySnapshot.forEach((doc) => {
        blogpostsArray.push(doc.data());
      });
      //return array
      return res.send(blogpostsArray);
    })
    .catch(function (e) {
      console.warn("error:", e);
      return res.send(error);
    });
});

module.exports = router;
