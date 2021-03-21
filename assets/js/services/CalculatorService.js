import {ApiService} from "./index";
import {CALCULATE, HISTORY} from "../constants/routes";

export default class CalculatorService {

    apiService = new ApiService();

    calculate = async(data) => {
        return  await this.apiService.post(CALCULATE, {data});
    };

    history = async() => {
        return  await this.apiService.get(HISTORY);
    };
}
