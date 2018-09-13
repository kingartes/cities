import { createSelector } from 'reselect'
import { get } from 'lodash'
import { CITIES_LIST_STATE_PATH } from '../constants/citiesConstants'

export const getCitiesSelector = createSelector(
    state => get(state, CITIES_LIST_STATE_PATH),
    cities => cities
)