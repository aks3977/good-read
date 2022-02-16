import { bindActionCreators } from "redux";
import * as types from "./ActionTypes";

const initialState = {
    books: []
}

const bookReducers = (state=initialState, action) => {
    switch(action.type) {
        case types.GET_BOOKS:
            return{
                ...state,
                books:action.payload
            }
        default:
            return state;
    }
}

export default bookReducers;
