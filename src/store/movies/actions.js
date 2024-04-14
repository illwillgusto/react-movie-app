import {
    GET_MOVIES_SUCCESS,
    GET_MOVIES_FAILED,
    CHANGE_MOVIES_FILTER,
} from "./types";

import instance from "../../axios-movie-instance"

const API_KEY = "e0b4355ea16e8f54e3163c98fa64f1c7";
// const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovies = (filterType = 'popular', currentPage = 1) => {
    return (dispatch) => {
        instance
            .get(`/movie/${filterType}?api_key${API_KEY}&page=${currentPage}`)
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
    type: CHANGE_MOVIES_FILTER,
    payload: filterType,
});

const getMoviesSuccess = (responseData) => ({
    type: GET_MOVIES_SUCCESS,
    payload: responseData,
});

const getMoviesFailed = (err) => ({
    type: GET_MOVIES_FAILED,
});