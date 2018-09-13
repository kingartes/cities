import {ON_LOAD_CITIES_ACTIONS_TYPE, ADD_CITY_TO_LIST_ACTION} from '../../constants/citiesConstants'

export const citiesReducer = (state = [], action) => {
    switch (action.type) {
        case ON_LOAD_CITIES_ACTIONS_TYPE: {
            const {cities: {places}} = action

            return [
                ...state,
                ...places
            ]
        }
        case ADD_CITY_TO_LIST_ACTION: {
            const {city} = action

            return [
                ...state,
                city
            ]
        }
    }
    return state
}