import axios from "axios";
import * as types from "./ActionTypes";

export const getBooks = (books) => ({
    type: types.GET_BOOKS,
    payload: books
})

export const ownedBooksAdded = (books) => ({
    type: types.ADD_OWNED_BOOKS,
    payload:books
})


// export const loadBooks = () => {
//     return function(dispatch){
//         axios.get("http://openlibrary.org/search.json?author=tolkien")
//         .then((resp)=>{
//             console.log("response",resp)
//             dispatch(getBooks(resp.data.docs))
//         }).catch((error)=>console.log(error));
//     }
// }

// export const addOwnedBooks = (book) => {
//     return function(dispatch){
//         axios.post(`http://localhost:4000/ownedBooks`, book)
//         .then((resp)=>{
//             console.log("response",resp)
//             dispatch(ownedBooksAdded());
//             // dispatch(loadTasks);
//         }).catch((error)=>console.log(error));
//     }
// }



