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

