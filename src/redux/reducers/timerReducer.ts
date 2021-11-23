import { TimerActionTypes, SET_NEW_CONCENTRATION_TIME, SET_NEW_RELAX_TIME } from '../types/timerTypes';

interface TimerState {
    concentrationTime: number,
    relaxTime: number
}


const initialState: TimerState = {
    concentrationTime: 60,
    relaxTime: 15,
};

export const timerReducer = (state: TimerState = initialState, action: TimerActionTypes) => {
    switch(action.type) {
        case SET_NEW_CONCENTRATION_TIME:
            return {
                ...state,
                concentrationTime: action.payload
            }
        case SET_NEW_RELAX_TIME:
            return {
                ...state,
                relaxTime: action.payload
            }
        default:
            return state;
    }
}