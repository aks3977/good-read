import React from "react";
import goodread from "../images/goodread_home.png";
import BlankHeader from "../utils/blankHeader";

function Home(props) {
  return (
    <div className="home">
      <BlankHeader />
      <div
        className="card home-card"
      >
        <div className="card-body">
          <h5 className="card-title h1 text-center">Discover And Read More</h5>
          <a
            href="#"
            className="btn btn-dark signup-btn"
            onClick={()=>props.history.push("/signup")}
          >
            Sign Up with Email
          </a>
          <p className="card-text h1 text-center">or</p>
          <p className="card-text h1 text-center text-primary">
            Already a member ?
          </p>
          <a
            // href="#"
            className="btn btn-danger signin-btn"
            onClick={()=>props.history.push("/login")}

          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
