import axios from "axios";
import * as constants from "./contants";
import { fromJS } from "immutable";

export const getHomeData = () => {
    return (dispatch) => {
        axios.get("/api/home.json").then((res) => {
            const data = res.data.mainData;
            dispatch(changeHomeData(data));
        });
    };
};
const changeHomeData = (data) => ({
    type: constants.CHANGE_HOME_DATA,
    data: fromJS(data),
});

export const getFriendList = () => {
    return (dispatch) => {
        axios.get("/api/friendList.json").then((res) => {
            dispatch(changeFriendList(res.data.data));
        });
    };
};

const changeFriendList = (data) => ({
    type: constants.GET_FRIEND_LIST,
    data: fromJS(data),
});
