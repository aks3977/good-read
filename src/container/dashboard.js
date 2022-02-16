import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loadBooks } from "../redux/Actions";
import Pagination from "../component/Dashboard/Pagination";

function Dashboard(props) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.data);
  const [loading, setLoading] = useState(false);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("login");
    history.push("/");
  };

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

  return (
    <div className="Dashboard">
      <h1>welcome to Dashboard!!!</h1>
      <button onClick={() => logout()}>Logout</button>
      <table class="table table-warning">
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
          <tr key={index}>
          {/* <th scope="row">1</th> */}
          <td>{data.title}</td>
          <td>{data.author_name}</td>
          <td>8/10</td>
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
    </div>
  );
}

export default Dashboard;
