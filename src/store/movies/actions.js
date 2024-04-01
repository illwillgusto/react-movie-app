import {
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAILED,
    CHANGE_MOVIE_FILTER,
} from "./types";

import axios from "../../axios-movie-instance"

const API_KEY = "e0b4355ea16e8f54e3163c98fa64f1c7"

export const getMovies = (filterType, currentPage = 1) => {
    return (dispatch) => {
        axios
            .get(`/movie/${filterType}`, {
                params: {api_key: API_KEY, page: currentPage},
            })
            .then((res) => {
                dispatch(getMoviesSuccess(res.data));
            })
            .catch((err) => {
                console.log(err.message);
                dispatch(getMoviesFailed(err));
            });
    };
};

export const changeMovieFilterType = (filterType) => ({
    type: CHANGE_MOVIE_FILTER,
    payload: filterType,
});

const getMoviesSuccess = (responseData) => ({
    type: GET_MOVIES_SUCCESS,
    payload: responseData,
});

const getMoviesFailed = (err) => ({
    type: GET_MOVIES_FAILED,
});