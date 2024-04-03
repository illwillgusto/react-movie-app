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
            return LOGIN_SUCCESS(state, action.payload);
    }
}