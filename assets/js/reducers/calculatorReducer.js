import * as actionTypes from '../constants/actionTypes';

const initialState = {
    data: "",
    error: null
};

/**
 * @param state
 * @param action
 */
const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CALCULATION_SUCCESS:
            return {
                data: action.payload,
                error: null
            };
        case actionTypes.CALCULATION_FAILED:
            return {
                data: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default calculatorReducer;
