import React from "react";
import BlankHeader from "../utils/blankHeader";
import Loginform from "../component/Login/loginForm";

function login(props) {
  return (
    <div className="login">
      <BlankHeader />
      <Loginform/>
    </div>
  );
}

export default login;
