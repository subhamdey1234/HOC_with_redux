import {legacy_createStore, combineReducers} from "redux"
import countreducer from "./countreducer";

let rootreducer=combineReducers({countreducer});
const store=legacy_createStore(rootreducer);

export default store;