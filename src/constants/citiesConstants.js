export const ON_LOAD_CITIES_ACTIONS_TYPE = "ON_LOAD_CITIES_ACTIONS_TYPE"
export const ADD_CITY_TO_LIST_ACTION = "ADD_CITY_TO_LIST_ACTION"
export const CITIES_LIST_STATE_PATH = "cities"
export const POST_CODE_FIELD = "POST_CODE_FIELD"
export const PLACES_FIELD = "PLACES_FIELD"
export const PLACE_NAME_FIELD = "PLACE_NAME_FIELD"
export const PLACE_STATE_ABBREVIATION_FIELD = "PLACE_STATE_ABBREVIATION_FIELD"

export const POST_CODE_REQUEST_MAP = Object.freeze({
    [POST_CODE_FIELD]: "post code",
    [PLACES_FIELD]: "places"
})

export const PLACES_REQUEST_MAP = Object.freeze({
    [PLACE_NAME_FIELD] : "place name",
    [PLACE_STATE_ABBREVIATION_FIELD]: "state abbreviation"
})