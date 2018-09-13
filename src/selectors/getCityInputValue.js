import {createSelector} from 'reselect'
import {get} from 'lodash'
import {CITY_INTPUT_VALUE_STATE_PATH} from "../constants/controllConstants";

export const getCityInputValue = createSelector(
    state => get(state, CITY_INTPUT_VALUE_STATE_PATH),
    value => value
)

