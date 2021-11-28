import { UtilsActionsTypes, SWITCH_THEME } from '../types'

interface UtilsState {
    theme: string
};

const initialState: UtilsState = {
    theme: "light",
};

export const utilsReducer = (state: UtilsState = initialState, action: UtilsActionsTypes) => {
    switch(action.type) {
        case SWITCH_THEME: 
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}