import { TimerActionTypes, SET_NEW_CONCENTRATION_TIME, SET_NEW_RELAX_TIME } from '../types/timerTypes';

interface TimerState {
    initConcentrationTime: number,
    initRelaxTime: number,
    concentrationTime: number,
    relaxTime: number
}


const initialState: TimerState = {
    initConcentrationTime: 3600,
    initRelaxTime: 600,
    // When app open, put init values down below
    concentrationTime: 10,
    relaxTime: 5,
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