import {CITY_INPUT_CHANGE_ACTION} from "../constants/controllConstants";
export function changeCityInputAction (value) {
    return {
        type: CITY_INPUT_CHANGE_ACTION,
        value
    }
}