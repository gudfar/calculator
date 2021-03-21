import React, {useEffect, useState} from 'react';
import {KeyPad, ResultBar} from "../index";
import '../../../css/calculator.css';
import {useDispatch, useSelector} from "react-redux";
import {calculate} from "../../actions/calculator";

const CalculatorPage = () => {

    const dispatch = useDispatch();
    const {data} = useSelector(
        ({calculatorReducer: {data}}) => ({data})
    );
    const [result, setResult] = useState(data);

    useEffect(() => {
        if (data && data !== result) {
            setResult(data.toString());
        }
    }, [data]);

    const onClick = (button) => {
        switch(button) {
            case 'C':
                setResult("");
                break;
            case 'CE':
                setResult(result.slice(0, -1));
                break;
            case '=':
                if (!validate()) {
                    setResult("ERROR");
                    return;
                }
                calculate(dispatch, result);
                break;
            default:
                setResult(result + button);
                break;
        }
    };

    const validate = () => {
        try {
            eval(result);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    };

    return (
        <>
            <div className="calculator-body">
                <h1>Calculator</h1>
                <ResultBar result={result} />
                <KeyPad onClick={onClick}/>
            </div>
        </>
    );
};


export default CalculatorPage;
