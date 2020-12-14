const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const firebase = require("firebase");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY, // replace with .env file API reference
  authDomain: "final-project-dw2020.firebaseapp.com",
  databaseURL: "https://final-project-dw2020.firebaseio.com",
  projectId: "final-project-dw2020",
  storageBucket: "final-project-dw2020.appspot.com",
  messagingSenderId: "978674596080",
  appId: "1:978674596080:web:e671f444cc0e36c66cea35",
};
const indexRoute = require("./routes/index.js");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Routes
app.use("/", indexRoute);

app.listen(port, () =>
  console.log(`Final Project Backend is running at localhost:${port}`)
);
