import React from "react";
import MainHeader from "../utils/mainHeader";

function ownedBook(props) {
  console.log(props);
  return (
    <>
      <MainHeader />
      <div className="ownedbook">
        <div className="container ownedbook-container">
          <h1>List of Owned Books</h1>

          <ul className="list-group mt-5">
            {props.location.state.selectedstate.map((data, index) => (
              <li class="list-group-item mylist" key={index}>
                {data.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ownedBook;
