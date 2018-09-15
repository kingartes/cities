import {SET_SELECTED_POST_CODE_ACTION} from "../../constants/citiesConstants";

export function selectedCodeReducer(state=null, action) {
    switch (action.type) {
        case SET_SELECTED_POST_CODE_ACTION: {
            return action.code
        }
    }
    return state
}