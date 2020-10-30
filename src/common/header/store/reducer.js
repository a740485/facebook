import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    loginState: true,
    apiData: "no api data",
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.TESTACTION:
            return state.set("loginState", false);
        case constants.GET_API_DATA:
            return state.set("apiData", action.result);
        default:
            return state;
    }
};
export default reducer;
