import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    loginState: false,
    userInfo: {},
    searchFocus: false,
    searchHistory: ["沒有近期搜尋紀錄"],
    pageIn: {
        home: true,
        watch: false,
        market: false,
        societies: false,
        game: false,
        userInfo: false,
    },
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_USER_DATA:
            return state.merge({
                loginState: action.loginState,
                userInfo: action.userInfo,
            });
        case constants.SEARCH_FOCUS:
            return state.set("searchFocus", true);
        case constants.GET_SEARCH_HISTORY:
            return state.set("searchHistory", action.list);
        case constants.CHANGE_PAGE_DATA:
            return state.set("pageIn", action.page);
        case constants.SEARCH_BLUR:
            return state.set("searchFocus", false);
        default:
            return state;
    }
};
export default reducer;
