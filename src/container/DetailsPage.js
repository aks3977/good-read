import axios from "axios";
import React, { useEffect, useState } from "react";
import MainHeader from "../utils/mainHeader";

function DetailsPage(props) {
  const [detailsData, setDetailsData] = useState({});
  console.log(props);

  const fetchDetailsData = () => {
    axios
      .get(`https://openlibrary.org${props.location.state.selectedKey}.json`)
      .then((response) => {
        console.log(response);
        setDetailsData(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchDetailsData();
  }, []);
  console.log(detailsData);

  return (
    <div className="details">
      <MainHeader />
      {/* {detailsData.length!=0 && detailsData.map((data)=>{ */}
      <div className="container my-details">
        <h1 className="mb-5 mt-5">
          <span>Book Name: </span>
          {detailsData.title}
        </h1>
        <img
          src={`https://covers.openlibrary.org/b/isbn/${props.location.state.selectedIsbn}-M.jpg`}
        />

        <h1 className="mt-5">
          Author Name: {props && props.location.state.selectedAuthor}{" "}
        </h1>
        <h1 className="mt-5">
          ISBN: <span>{props && props.location.state.selectedIsbn}</span>{" "}
        </h1>
        <h1 className="mt-5">
          Published Year:{" "}
          <span>
            {detailsData.first_publish_date && detailsData.first_publish_date}
          </span>{" "}
        </h1>
        <h1 className="mt-5">Description: </h1>
        <p className="h2">
          {detailsData.description && detailsData.description.value}
        </p>
      </div>

      {/* })} */}

      {/* {detailsData && detailsData.map((data,index)=>(
        <div className="container" key={index}>
        <h1 className='mb-5'><span>Book Name: </span>{data.title && data.title}</h1>
        <img src={`https://covers.openlibrary.org/b/isbn/${props.location.state.selectedIsbn}-M.jpg`}/>
        <h1 className='mt-5'>Author Name: { props && props.location.state.selectedAuthor} </h1>
        <h1 className='mt-5'>ISBN: <span>{ props && props.location.state.selectedIsbn}</span> </h1>
        <h1 className='mt-5'>Published Year: <span>{data.first_publish_date && data.first_publish_date}</span> </h1>
        <h1 className='mt-5'>Description: </h1>
        <p className='h2'>{data.description&&data.description}</p>
    </div>

        ))} */}
    </div>
  );
}

export default DetailsPage;
