import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loadBooks } from "../redux/Actions";
import Pagination from "../component/Dashboard/Pagination";
import Modal from "../component/Dashboard/Modal";
import MainHeader from "../utils/mainHeader";

function Dashboard(props) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.data);
  const [loading, setLoading] = useState(false);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    setLoading(true);
    dispatch(loadBooks());
    setLoading(false);
  }, []);


  console.log("books------->", books);

  const indexOfTheLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfTheLastRecord - recordsPerPage;
  const currentPost = books.slice(indexOfFirstRecord, indexOfTheLastRecord);

  //change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  console.log("modalData",modalData);

  return (
    <>
    <MainHeader/>
        <div className="Dashboard">
      <table class="table table-light">
        <thead>
          <tr>
            {/* <th scope="col">Sl. no.</th> */}
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">Ratings</th>
          </tr>
        </thead>
        <tbody>
            {currentPost.map((data,index)=>(
          <tr key={data.key}>
          {/* <th scope="row">1</th> */}
          <td><a type="button" onClick={()=>setModalData(data)} data-toggle="modal"  data-target="#exampleModalCenter">{data.title}</a></td>
          <td>{data.author_name}</td>
          <td>8/10</td>
          {/* <Modal index={index}/> */}

        </tr>

            ))}
        </tbody>
      </table>
      <div className="container" style={{display:"flex",justifyContent:"center"}}>
      <Pagination 
      recordsPerPage={recordsPerPage} 
      totalRecords={books.length}
      paginate={paginate}
      />
      </div>
      <Modal modalData={modalData}/>

    </div>
    </>

  );
}

export default Dashboard;
