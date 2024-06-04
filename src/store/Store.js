import {createStore} from "redux";
import {reducer} from "../reduser/Reducer.js";

export const Store = createStore(reducer)