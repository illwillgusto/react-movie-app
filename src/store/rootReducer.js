import { combineReducers } from "redux";

import { userReducer } from "./users/reducer";
import { moviesReducer } from "./movies/reducer";

export default combineReducers({
    user: userReducer,
    movies: moviesReducer,
});