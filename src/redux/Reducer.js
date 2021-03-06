import { bindActionCreators } from "redux";
import * as types from "./ActionTypes";

const initialState = {
    books: [],
    ownedBooksCollection:[],
    ownedBook:{}
}

const bookReducers = (state=initialState, action) => {
    switch(action.type) {
        case types.GET_BOOKS:
            return{
                ...state,
                books:action.payload
            }
        case types.ADD_OWNED_BOOKS:
            return{
                ...state,
                ownedBooksCollection:action.payload
            }
        default:
            return state;
    }
}

export default bookReducers;
