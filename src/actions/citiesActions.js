import { ON_LOAD_CITIES_ACTIONS_TYPE, ADD_CITY_TO_LIST_ACTION} from '../constants/citiesConstants'
import {CITIES_API} from "../constants/apiConstants";
import {convertToPostCodeModel} from "../helpers/citiesHelper";
import { forEach } from "lodash";

export function onSitiesLoadAction (res) {
    return {
        type: ON_LOAD_CITIES_ACTIONS_TYPE,
        data: {...convertToPostCodeModel(res)}
    }
}

export function addCityToListAction (city) {
    return {
        type: ADD_CITY_TO_LIST_ACTION,
        city
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