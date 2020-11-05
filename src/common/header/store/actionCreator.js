import axios from "axios";
import * as constants from "./constants";
import { fromJS } from "immutable";

export const getUserInfo = () => {
    return (dispatch) => {
        axios.get("/api/login.json").then(function (res) {
            const result = res.data;
            dispatch(changeUserData(result));
        });
    };
};
const changeUserData = (data) => ({
    type: constants.GET_USER_DATA,
    loginState: data.loginState,
    userInfo: fromJS(data.userInfo),
});
