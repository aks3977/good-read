import axios from "axios";
import * as types from "./ActionTypes";

const getBooks = (books) => ({
    type: types.GET_BOOKS,
    payload: books
})

export const loadBooks = () => {
    return function(dispatch){
        axios.get("http://openlibrary.org/search.json?author=tolkien")
        .then((resp)=>{
            console.log("response",resp)
            dispatch(getBooks(resp.data.docs))
        }).catch((error)=>console.log(error));
    }
}


