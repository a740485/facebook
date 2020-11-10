import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from "../common/header/store";
import { reducer as homeReducer } from "../home/store";
import { reducer as loginReducer } from "../login/store";

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    login: loginReducer,
});
