import React from "react";

function userProfileComponent({ userAuthInfo }) {
  return (
    <div className="SignupForm">
      <p>
        <strong>UID:</strong> {userAuthInfo.uid}
      </p>
      <p>
        <strong>Email:</strong> {userAuthInfo.email}
      </p>
    </div>
  );
}

export default userProfileComponent;
