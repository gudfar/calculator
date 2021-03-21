import { combineReducers } from 'redux'
import authReducer from "./authReducer";
import calculatorReducer from "./calculatorReducer";
import historyReducer from "./historyReducer";

export default combineReducers({
    authReducer,
    historyReducer,
    calculatorReducer
})
