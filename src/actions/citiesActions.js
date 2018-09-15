import { ON_LOAD_CITIES_ACTIONS_TYPE, REPLACE_SELECTED_POSTCODE, SET_SELECTED_POST_CODE_ACTION} from '../constants/citiesConstants'
import {CITIES_API} from "../constants/apiConstants";
import {convertToPostCodeModel} from "../helpers/citiesHelper";
import { forEach } from "lodash";

export function onCitiesLoadAction (res) {
    return {
        type: ON_LOAD_CITIES_ACTIONS_TYPE,
        data: {...convertToPostCodeModel(res)}
    }
}

export function replaceSelectedPostCodesAction (res, postCode) {
    return {
        type: REPLACE_SELECTED_POSTCODE,
        data: {...convertToPostCodeModel(res)},
        postCode
    }
}

export function setSelectedPostCodeAction(code) {
    return {
        type: SET_SELECTED_POST_CODE_ACTION,
        code
    }
}

export function loadCitiesAction (zipCode, handlerChain) {
    return (dispatch) => {
        const promise = fetch(`${CITIES_API}/${zipCode}`)
            .then(res => res.json())
        forEach(handlerChain, (handler) => {
            promise.then(value => handler(value))
        })
    }
}