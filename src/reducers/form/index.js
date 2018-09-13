import {CITY_INPUT_CHANGE_ACTION} from "../../constants/controllConstants";

export const formReducer = (state = {}, action) => {
    switch (action.type) {
        case CITY_INPUT_CHANGE_ACTION: {
            const {value} = action

            return {
                ...state,
                cityInputValue: value
            }
        }
    }
    return state
}