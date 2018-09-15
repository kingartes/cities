import { combineReducers } from 'redux'
import { citiesReducer as cities } from './cities'
import { formReducer as form } from './form'
import { selectedCodeReducer as selectedPostCode } from './cities/selectedCodeReducer'

export default combineReducers({
    cities,
    form,
    selectedPostCode
})
