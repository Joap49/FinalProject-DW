//Backend Application for Final Project
//import firebase from "firebase/app"; //import everything from this package as firebase
import "firebase/app/dist/index.cjs.js";
import "@firebase/auth";
import "@firebase/firestore";
//Styles

//Web app's firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY, // replace with .env file API reference
  authDomain: "final-project-dw2020.firebaseapp.com",
  databaseURL: "https://final-project-dw2020.firebaseio.com",
  projectId: "final-project-dw2020",
  storageBucket: "final-project-dw2020.appspot.com",
  messagingSenderId: "978674596080",
  appId: "1:978674596080:web:e671f444cc0e36c66cea35",
};
// const firebase = require("firebase");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

function App() {
  const [loggedIn, setloggedIn] = useState(false); //determine if logged in
  const [loading, setLoading] = useState(true); //is page loading
  //Ensure app is initialized when its ready
  useEffect(() => {
    //initializes Firebase
    if (!firebase.apps.legnth) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);
}

app.listen(port, () =>
  console.log(`Final Project is rynning at localhost:${port}`)
);

export default App;
