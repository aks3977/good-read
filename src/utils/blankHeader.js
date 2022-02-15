import React from "react";
import Goodreads from "../images/Goodreads_logo.png";

function BlankHeader(props) {
  return (
    // <div className="container">
      <nav class="navbar navbar-light bg-light main-header">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">
              <img src={Goodreads} style={{maxWidth:"15rem"}}/>
          </span>
        </div>
      </nav>
    // </div>
  );
}

export default BlankHeader;
