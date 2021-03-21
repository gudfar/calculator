import * as actionTypes from '../constants/actionTypes';
import {CalculatorService} from "../services";

const calculatorService = new CalculatorService();

/**
 * Calculation
 */
const calculationSuccess = (payload) => ({
    type: actionTypes.CALCULATION_SUCCESS,
    payload
});

const calculationFailed = (error) => ({
    type: actionTypes.CALCULATION_FAILED,
    payload: error
});

const calculate = (dispatch, data) => {
    calculatorService.calculate(data)
        .then((data) => dispatch(calculationSuccess(data)))
        .catch((error) => dispatch(calculationFailed(error)));
};

/**
 * History
 */
const historyLoaded = (payload) => ({
    type: actionTypes.HISTORY_LOADED,
    payload
});

const historyRequested = () => ({
    type: actionTypes.HISTORY_REQUESTED,
});

const historyFailed = (error) => ({
    type: actionTypes.HISTORY_FAILED,
    payload: error
});



const fetchHistory = (dispatch) => {
    dispatch(historyRequested());
    calculatorService.history()
        .then((payload) => dispatch(historyLoaded(payload)))
        .catch((error) => dispatch(historyFailed(error)));

};

export {
    calculate,
    fetchHistory
};
