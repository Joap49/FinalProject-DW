import React from "react";

function Header({ LogoutFunction, loggedIn, userAuthInfo }) {
  return (
    <header className="Header">
      <nav className="Header_nav">
        {loggedIn && <a href="/">Home</a>}
        {loggedIn && <a href={`/profile/${userAuthInfo.uid}`}>Profile</a>}
        {loggedIn && <a href="/create-review">Create Review</a>}
        {!loggedIn && <a href="/create-account">Create Account</a>}
        {!loggedIn && <a href="/login">Login</a>}
        {loggedIn && (
          <a href="" onClick={() => LogoutFunction()}>
            Log Out
          </a>
        )}
      </nav>
    </header>
  );
}

export default Header;
