import React from "react";

function CreateAccountForm({ CreateAccountFunction }) {
  return (
    <div className="inputContainer && formWrapper">
      <form className="SignupForm" onSubmit={(e) => CreateAccountFunction(e)}>
        <label htmlFor="createEmail">Email</label>
        <input type="email" name="createEmail" className="inputBar" />

        <label htmlFor="createPassword">Password</label>
        <input type="password" name="createPassword" className="inputBar" />
        <button className="loginButton">Submit</button>
      </form>
    </div>
  );
}

export default CreateAccountForm;
