import React from "react";

function LoginForm({ LoginFunction }) {
  return (
    <div className="inputContainer && formWrapper">
      <form className="SignupForm" onSubmit={(e) => LoginFunction(e)}>
        <label htmlFor="loginEmail">Email</label>
        <input type="email" name="loginEmail" className="inputBar" />

        <label htmlFor="loginPassword">Password</label>
        <input type="password" name="loginPassword" className="inputBar" />

        <button className="loginButton">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
