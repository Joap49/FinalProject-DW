import React from "react";
import LoginForm from "../components/LoginForm";

function Login({ LoginFunction }) {
  return (
    <div className="loginPage">
      <h1>Login</h1>
      <LoginForm LoginFunction={LoginFunction} />
    </div>
  );
}

export default Login;
