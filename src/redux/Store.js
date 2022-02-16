import {createStore, applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import rootreducer from "./Rootreducer";
import logger from "redux-logger";


const middlewares = [reduxThunk];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger);
}



const store = createStore(rootreducer, applyMiddleware(...middlewares));

export default store;