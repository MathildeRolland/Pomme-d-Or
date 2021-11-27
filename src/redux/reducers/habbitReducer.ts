import { HabbitActionsTypes, SET_NEW_HABBIT } from '../types/habbitTypes';

interface HabbitState {
    habbit: string
}

const initialState: HabbitState = {
    habbit: ""
};

export const habbitReducer = (state: HabbitState = initialState, action: HabbitActionsTypes) => {
    switch(action.type) {
        case SET_NEW_HABBIT:
            return {
                ...state,
                habbit: action.payload
            }
        default:
            return state;
    }
}