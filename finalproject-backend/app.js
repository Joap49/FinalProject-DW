const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// Configuration Values for Firebase
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY, // replace with .env file API reference
  authDomain: "final-project-dw2020.firebaseapp.com",
  databaseURL: "https://final-project-dw2020.firebaseio.com",
  projectId: "final-project-dw2020",
  storageBucket: "final-project-dw2020.appspot.com",
  messagingSenderId: "978674596080",
  appId: "1:978674596080:web:e671f444cc0e36c66cea35",
};

//Firebase
const firebase = require("firebase");
firebase.initializeApp(firebaseConfig);

//Routes Import
const indexRoute = require("./route/index.js");
const postRoute = require("./route/post.js");
const createRoute = require("./route/createBlogpost.js");
//Routes
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () =>
  console.log(`Exercise Four is running at localhost:${port}`)
);
