import React from "react";
import userProfileComponent from "../components/userProfileComponent";

function userProfile({ userAuthInfo }) {
  return (
    <div className="Title">
      <h1>User Profile</h1>
      <userProfileComponent userAuthInfo={userAuthInfo} />
    </div>
  );
}

export default userProfile;
