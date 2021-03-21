import * as actionTypes from '../constants/actionTypes';

const initialState = {
    records: [],
    loading: true,
    error: null
};

/**
 * @param state
 * @param action
 */
const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HISTORY_LOADED:
            return {
                records: action.payload,
                loading: false,
                error: null
            };
        case actionTypes.HISTORY_REQUESTED:
            return {
                records: [],
                loading: true,
                error: null
            };
        case actionTypes.HISTORY_FAILED:
            return {
                records: [],
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default historyReducer;
