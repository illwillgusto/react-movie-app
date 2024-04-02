import {
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    REGISTER_STARTED,
} from "./types";

import axios from "../../axios-instance";

export const checkUserAuthentication = () => {
    return (dispatch) => {
        const wwToken = localStorage.getItem("wwToken") || null;
    }
}