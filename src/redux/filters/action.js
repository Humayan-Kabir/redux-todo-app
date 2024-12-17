import * as actionTypes from "./actionTypes";

export const statusChanged = (status) => {
    return {
        type: actionTypes.STATUSCHANGED,
        payload: status
    }
};

export const colorChanged = (color) => {
    return {
        type: actionTypes.COLORCHANGED,
        payload: color
    };
};