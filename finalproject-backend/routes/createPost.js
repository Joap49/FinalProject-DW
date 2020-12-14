const express = require("express");
const router = express.Router();
//require firebase
const firebase = require("firebase");
const db = firebase.firestore();
const reviews = db.collection("reviews");

router.get("/", (req, res) => {
  const queryParams = req.query;

  reviews
    .doc()
    .set(queryParams)
    .then(function (doc) {
      res.send("success");
    })
    .catch(function (e) {
      console.log("ERROR", e);
      res.send([{ ERROR_SUBMITTING: e.toString() }]);
    });
});

module.exports = router;
