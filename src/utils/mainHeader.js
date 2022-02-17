import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Goodreads from "../images/Goodreads_logo.png";


function MainHeader(props) {
    const history = useHistory();
    const logout = () => {
        localStorage.removeItem("login");
        history.push("/");
      };
    
  return (
    <nav class="navbar navbar-light bg-light main-header">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">
          <img
            src={Goodreads}
            style={{ maxWidth: "15rem" }}
            // onClick={() => history.push("/")}
          />
          <span className="header-nav" onClick={()=>history.push("/dashboard")}>Dashboard</span>
        </span>
        <button type="button" class="btn btn-dark header-btn" onClick={()=>logout()}>Logout</button>
      </div>
    </nav>
  );
}

export default MainHeader;
