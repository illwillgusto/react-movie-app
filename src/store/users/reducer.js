import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGIN_STARTED,
    LOGOUT_SUCCESS,
    REGISTER_STARTED,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
} from "./types"

const initialState = {
    wwToken: "",
    username: "",
    fullName: "",
    watchlist: [],
    authentication: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return loginSuccess(state, action.payload);
        case LOGIN_FAILED:
            return loginFailed(state, action.payload);
        case LOGIN_STARTED:
            return loginStarted(state, action.payload);
        case LOGOUT_SUCCESS:
            return logoutSuccess(state, action.payload);
        case REGISTER_STARTED:
            return registerStarted(state, action.payload);
        case REGISTER_SUCCESS:
            return registerSuccess(state, action.payload);
        case REGISTER_FAILED:
            return registerFailed(state, action.payload);
        default:
            return state;
    }
};

const loginSuccess = (state, data) => {
    const {fullName, user} = data;

    localStorage.setItem("wwToken", user.token);
    localStorage.setItem("username", user.username);

    return {
        ...state,
        wwToken: user.token,
        username: user.username,
        fullName: fullName,
        authenticated: user.authenticated,
    };
};

const loginFailed = (state, error) => {
    console.log(error);
    return state;
};

const loginStarted = (state) => {
    return state;
};