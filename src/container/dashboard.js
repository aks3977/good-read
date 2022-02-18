import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addOwnedBooks, ownedBooksAdded, getBooks } from "../redux/Actions";
import Pagination from "../component/Dashboard/Pagination";
import Modal from "../component/Dashboard/Modal";
import MainHeader from "../utils/mainHeader";
import Download from "../images/download.png";

function Dashboard(props) {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.data);
  const [loading, setLoading] = useState(false);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory();
  const [modalData, setModalData] = useState({});
  const [ownedBook, setOwnedBooks] = useState([]);
  const ownedBooksCollection = useSelector(
    (state) => state.data.ownedBooksCollection
  );

  useEffect(() => {
    const loadBooks = () => {
      setLoading(true);
      axios
        .get("http://openlibrary.org/search.json?author=tolkien")

        .then((response) => {
          dispatch(getBooks(response.data.docs));
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    };
    loadBooks();
  }, []);

  console.log("books------->", books);

  const indexOfTheLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfTheLastRecord - recordsPerPage;
  const currentPost = books.slice(indexOfFirstRecord, indexOfTheLastRecord);

  //change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log("modalData", modalData);

  const handleAdd = (e, id, data) => {
    if (e.target.checked) {
      const temp = [...ownedBooksCollection, data];
      console.log("temp", temp);

      dispatch(ownedBooksAdded(temp));
    } else {
      let temp = ownedBooksCollection.filter((item) => item.key !== data.key);
      dispatch(ownedBooksAdded(temp));
    }
  };

  console.log(ownedBooksCollection);

  return (
    <>
      <MainHeader />
      <div className="Dashboard">
        {!loading && (
          <button
            className="btn btn-danger customise-btn mb-5"
            onClick={() =>
              history.push({
                pathname: "/ownedbook",
                state: { selectedstate: ownedBooksCollection },
              })
            }
          >
            check Owned Books
          </button>
        )}
        {!loading && (
          <table class="table table-light">
            <thead>
              <tr>
                {/* <th scope="col">Sl. no.</th> */}
                <th scope="col">Book Name</th>
                <th scope="col">Author Name</th>
                <th scope="col">Ratings</th>
                <th scope="col">Owned Books</th>
              </tr>
            </thead>
            <tbody>
              {currentPost.map((data, index) => (
                <tr key={data.key}>
                  {/* <th scope="row">1</th> */}
                  <td>
                    <a
                      type="button"
                      onClick={() => setModalData(data)}
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                    >
                      {data.title}
                    </a>
                  </td>
                  <td>{data.author_name.join(", ")}</td>
                  <td>8/10</td>
                  <td>
                    <span className="ownedcheckbox">
                      <input
                        type="checkbox"
                        value={data}
                        onChange={(e) => handleAdd(e, index, data)}
                        defaultChecked={
                          ownedBooksCollection.filter(
                            (item) => item.key == data.key
                          ).length > 0
                        }
                      />
                    </span>
                  </td>

                  {/* <Modal index={index}/> */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {loading === true && (
          <div className="container text-center loader">
            <img src={Download} />
          </div>
        )}

        <div
          className="container pagination-div"
        >
          {!loading &&
          <Pagination
            recordsPerPage={recordsPerPage}
            totalRecords={books.length}
            paginate={paginate}
          />
          }
        </div>
        <Modal modalData={modalData} />
      </div>
    </>
  );
}

export default Dashboard;
