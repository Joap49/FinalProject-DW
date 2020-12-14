import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import firebase from "firebase/app"; //import everything from this package as firebase
import "firebase/auth";

//Style
import "./App.css";

//Pages
import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import UserProfile from "./containers/UserProfile";
import Home from "./containers/Home";
import CreateReview from "./containers/CreateReview";

//Components
import Header from "./components/Header";

const firebaseConfig = {
  apiKey: "AIzaSyDEOFVOj0wbLsKZrOYR5RZb4EBlQ6yIpCw",
  authDomain: "final-project-dw2020.firebaseapp.com",
  databaseURL: "https://final-project-dw2020.firebaseio.com",
  projectId: "final-project-dw2020",
  storageBucket: "final-project-dw2020.appspot.com",
  messagingSenderId: "978674596080",
  appId: "1:978674596080:web:e671f444cc0e36c66cea35",
};

// if (loading) return null;
function App() {
  const [loggedIn, setloggedIn] = useState(false); //determine if logged in
  const [loading, setLoading] = useState(true); //is page loading
  const [userAuthInfo, setuserAuthInfo] = useState({});

  // Configuration Values for Firebase

  useEffect(() => {
    //initializes Firebase
    if (!firebase.apps.legnth) {
      firebase.initializeApp(firebaseConfig);
    }
  }, [firebaseConfig]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        //User is logged in
        setloggedIn(true);
        setuserAuthInfo(user);
      } else {
        setloggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  function LoginFunction(e) {
    e.preventDefault();
    const email = e.currentTarget.loginEmail.value;
    const password = e.currentTarget.loginPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
        setloggedIn(true);
      })
      .catch(function (error) {
        console.warn("Login error", error);
      });
  }

  // Function for logging out
  function LogoutFunction(e) {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setloggedIn(false);
        setuserAuthInfo({});
      })
      .catch(function (error) {
        console.warn("Logout error", error);
      });
  }

  // function for creating an account
  function CreateAccountFunction(e) {
    // what will run when you create an account
    e.preventDefault();
    const email = e.currentTarget.createEmail.value;
    const password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        console.log("VALID ACCOUNT CREATED FOR:", email, response);
        setloggedIn(true);
      })
      .catch(function (error) {
        console.log("ACCOUNT CREATION FAILED", error);
      });
  }
  console.log({ loggedIn, loading });

  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
        LogoutFunction={LogoutFunction}
        userAuthInfo={userAuthInfo}
      />
      <Router>
        <Route exact path="/login">
          {!loggedIn ? (
            <Login LoginFunction={LoginFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="create-account">
          {!loggedIn ? (
            <CreateAccount CreateAccountFunction={CreateAccountFunction} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route exact path="/create-review">
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <CreateReview userAuthInfo={userAuthInfo} />
          )}
        </Route>
        <Route exact path="/profile/:id">
          {!loggedIn ? <Redirect to="/login" /> : <UserProfile />}
        </Route>
        <Route exact path="/">
          {!loggedIn ? (
            <Redirect to="/login" />
          ) : (
            <Home userAuthInfo={userAuthInfo} />
          )}
        </Route>
      </Router>
    </div>
  );
}

export default App;
