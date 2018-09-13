import { ON_LOAD_CITIES_ACTIONS_TYPE, ADD_CITY_TO_LIST_ACTION} from '../constants/citiesConstants'
import {CITIES_API} from "../constants/apiConstants";

export function onSitiesLoadAction (cities) {
    return {
        type: ON_LOAD_CITIES_ACTIONS_TYPE,
        cities
    }
}

export function addCityToListAction (city) {
    return {
        type: ADD_CITY_TO_LIST_ACTION,
        city
    }
}

export function loadCitiesAction () {
    return (dispatch) =>
        fetch(CITIES_API)
            .then(res => res.json())
            .then(cities => {
                dispatch(onSitiesLoadAction(cities))
            })
}