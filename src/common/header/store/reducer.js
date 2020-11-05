import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
    loginState: false,
    userInfo: {},
});

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case constants.GET_USER_DATA:
            return state.merge({
                loginState: action.loginState,
                userInfo: action.userInfo,
            });
        default:
            return state;
    }
};
export default reducer;
