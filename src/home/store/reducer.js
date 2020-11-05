// home
import { fromJS } from "immutable";
import * as constants from "./contants";
const defaultState = fromJS({
    friendList: [],
    mainData: [],
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.set("mainData", action.data);
        case constants.GET_FRIEND_LIST:
            return state.set("friendList", action.data);
        default:
            return state;
    }
};
export default reducer;
