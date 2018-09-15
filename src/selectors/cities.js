import { createSelector } from 'reselect'
import { get, reduce, map, concat } from 'lodash'
import { CITIES_LIST_STATE_PATH } from '../constants/citiesConstants'

export const getCitiesSelector = createSelector(
    state => get(state, CITIES_LIST_STATE_PATH),
    postcodes => reduce(postcodes, (memo, {places, postCode}) => {
        const mapCodes = map(places, place => {
            place.postCode = postCode
            return place
        })
        return concat(memo, mapCodes)
    }, [])
)
