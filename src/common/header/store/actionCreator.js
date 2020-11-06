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

export const changePageIn = (page) => {
    let pageIn = {
        home: false,
        watch: false,
        market: false,
        societies: false,
        game: false,
        userInfo: false,
    };
    switch (page) {
        case "home":
            pageIn.home = true;
            break;
        case "watch":
            pageIn.watch = true;
            break;
        case "market":
            pageIn.market = true;
            break;
        case "societies":
            pageIn.societies = true;
            break;
        case "game":
            pageIn.game = true;
            break;
        case "userInfo":
            pageIn.userInfo = true;
            break;
        default:
            break;
    }
    return (dispatch) => {
        dispatch(changePageInData(pageIn));
    };
};

const changePageInData = (page) => {
    return {
        type: constants.CHANGE_PAGE_DATA,
        page,
    };
};

export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS,
});

export const getSeachHistory = () => {
    let list = ["1", "2"];
    return {
        type: constants.GET_SEARCH_HISTORY,
        list,
    };
};

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR,
});
