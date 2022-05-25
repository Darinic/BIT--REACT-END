import { combineReducers } from "redux";
import Todos from "./TodoReducers";

const rootReducers = combineReducers({
    todos:Todos
})

export default rootReducers