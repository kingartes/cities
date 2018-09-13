import { combineReducers } from 'redux'
import { citiesReducer as cities } from './cities'
import { formReducer as form } from './form'

export default combineReducers({
    cities,
    form
})
