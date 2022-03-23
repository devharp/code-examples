import { combineReducers } from "redux";
import performer from "./performer";

const reducers = combineReducers({
    value: performer
});

export default reducers;