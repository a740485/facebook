import axios from "axios";
import * as constants from "./constants";

export const testAction = () => ({
    type: constants.TESTACTION,
});

function getData(data) {
    return {
        type: constants.GET_API_DATA,
        result: data,
    };
}
const get = (data) => ({
    type: constants.GET_API_DATA,
    result: data,
});
export const getDataInfo = () => {
    return (dispatch) => {
        axios.get("/api/home.json").then(function (res) {
            const result = res.data.data;
            const action = {
                type: constants.GET_API_DATA,
                result,
            };
            console.log(getData(result));
            console.log(get(result));
            console.log(action);
            dispatch(getData(result));
        });
    };
};
