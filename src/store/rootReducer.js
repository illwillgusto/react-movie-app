import { combineReducers } from "redux";

import { useReducer } from "./users/reducer";
import { moviesReducer } from "./movies/reducer";

export default combineReducers({
    user: useReducer,
    movies: moviesReducer,
});