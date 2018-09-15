import {ON_LOAD_CITIES_ACTIONS_TYPE, REPLACE_SELECTED_POSTCODE} from '../../constants/citiesConstants'
import { reject } from 'lodash'

export const citiesReducer = (state = [], action) => {
    switch (action.type) {
        case ON_LOAD_CITIES_ACTIONS_TYPE: {
            const { data } = action
            return [
                ...state,
                data
            ]
        }
        case REPLACE_SELECTED_POSTCODE: {
            const { data, postCode } = action
            const newState = reject(state, {postCode})

            return [
                ...newState,
                data
            ]
        }
    }
    return state
}