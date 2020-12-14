import React from "react";

function Header({ LogoutFunction, isLoggedIn, userAuthInfo }) {
  return (
    <header className="Header">
      <nav className="Header_nav">
        {isLoggedIn && <a href="/">Home</a>}
        {isLoggedIn && <a href={`/profile/${userAuthInfo.uid}`}>Profile</a>}
        {isLoggedIn && <a href="/create-review">Create Review</a>}
        {!isLoggedIn && <a href="/create-account">Create Account</a>}
        {!isLoggedIn && <a href="/login">Login</a>}
        {isLoggedIn && (
          <a href="" onClick={() => LogoutFunction}>
            Log Out
          </a>
        )}
      </nav>
    </header>
  );
}

export default Header;
