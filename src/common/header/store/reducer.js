import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    searchFocus: false,
    searchBodyMouseIn: false,
    showAccountView: false,
    accountViewMouseIn: false,
    searchHistory: [],
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
        case constants.SEARCH_FOCUS:
            return state.set("searchFocus", true);
        case constants.GET_SEARCH_HISTORY:
            return state.set("searchHistory", action.list);
        case constants.CHANGE_PAGE_DATA:
            return state.set("pageIn", action.page);
        case constants.SEARCH_BLUR:
            return state.set("searchFocus", false);
        case constants.SEARCH_BODY_MOUSE_ENTER:
            return state.set("searchBodyMouseIn", true);
        case constants.SEARCH_BODY_MOUSE_LEAVE:
            return state.set("searchBodyMouseIn", false);
        case constants.SHOW_ACCOUNT_VIEW:
            return state.set("showAccountView", action.showFlag);
        case constants.ACCOUNT_VIEW_ENTER:
            return state.set("accountViewMouseIn", true);
        case constants.ACCOUNT_VIEW_LEAVE:
            return state.set("accountViewMouseIn", false);

        default:
            return state;
    }
};
export default reducer;
