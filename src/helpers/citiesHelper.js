import {POST_CODE_REQUEST_MAP, POST_CODE_FIELD, PLACES_FIELD, PLACES_REQUEST_MAP, PLACE_NAME_FIELD,
    PLACE_STATE_ABBREVIATION_FIELD
} from "../constants/citiesConstants";
import { get, omit, map } from "lodash";

export function convertPlaceToModel (place) {
    const placeName = get(place, PLACES_REQUEST_MAP[PLACE_NAME_FIELD])
    const stateAbbreviation = get(place, PLACES_REQUEST_MAP[PLACE_STATE_ABBREVIATION_FIELD])
    const omitProps = [PLACES_REQUEST_MAP[PLACE_NAME_FIELD], PLACES_REQUEST_MAP[PLACE_STATE_ABBREVIATION_FIELD]]

    return {
        ...omit(place, omitProps),
        placeName,
        stateAbbreviation
    }
}

export function convertToPostCodeModel (req) {
    const postCode = get(req, POST_CODE_REQUEST_MAP[POST_CODE_FIELD])
    const places = map(get(req, POST_CODE_REQUEST_MAP[PLACES_FIELD]), convertPlaceToModel)

    return {
        postCode,
        places
    }
}