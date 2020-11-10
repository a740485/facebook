import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";

export const login = (account, password) => {
    return (dispatch) => {
        axios
            .get("/api/login.json?accout=" + account + "&password" + password)
            .then((res) => {
                dispatch(changeUserData(res.data));
            });
    };
};

const changeUserData = (data) => ({
    type: constants.CHANGE_USER_DATA,
    loginState: data.loginState,
    userInfo: fromJS(data.userInfo),
});

export const accountLogout = () => ({
    type: constants.ACCOUNT_LOGOUT,
});
