import { createSelector } from 'reselect'
import { get, reduce, map, concat, findIndex } from 'lodash'
import { CITIES_LIST_STATE_PATH, SELECTED_POST_CODE_STATE_PATH} from '../constants/citiesConstants'

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

export const isPostCodeAlreadyExistSelector = createSelector(
    getCitiesSelector,
    (_, postCode) => postCode,
    (postCodes, postCode)=> !!~findIndex(postCodes, {postCode}) // ~ bitwise not convert -1 to 0, !! convert to bool
)

export const getSelectedPostCodeSelector = createSelector(
    state => get(state, SELECTED_POST_CODE_STATE_PATH),
    code => code
)