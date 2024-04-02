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

        if (wwToken) {
            axios
                .get("/checkUserAuthentication")
                    .then((res) => {
                        const userData = {
                            fullName: res.data.user.firstName + " " + res.data.user.lastName,
                            user: {
                                token: wwToken,
                                username: res.data.user.username,
                                authentication: true,
                            },
                        };
                        dispatch(loginSuccess(userData));
                    })
                    .catch((err) => {
                        console.log(err);

                        dispatch(loginFailed(err.message));
                    });
        }
    };
};

export const login = (username, password, history) => {
    return (dispatch) => {
        dispatch(loginStarted());
    }
}