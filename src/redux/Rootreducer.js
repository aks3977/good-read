import {combineReducers} from "redux";
import bookReducers from "./Reducer";

const rootReducer = combineReducers({
    data: bookReducers
})

export default rootReducer;