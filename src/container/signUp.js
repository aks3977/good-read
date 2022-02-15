import React from "react";
import BlankHeader from "../utils/blankHeader";
import Signupform from "../component/Signup/signupForm";

function signUp(props) {
  return (
    <div className="login">
      <BlankHeader />
      <Signupform/>
    </div>
  );
}

export default signUp;
