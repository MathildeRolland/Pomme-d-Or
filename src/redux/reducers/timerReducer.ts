import { TimerActionTypes, INIT_CONCENTRATION_TIME, INIT_RELAX_TIME, SET_NEW_CONCENTRATION_TIME, SET_NEW_RELAX_TIME } from '../types/timerTypes';

interface TimerState {
    initConcentrationTime: number,
    initRelaxTime: number,
    concentrationTime: number | null,
    relaxTime: number | null
}


const initialState: TimerState = {
    initConcentrationTime: 0,
    initRelaxTime: 0,
    // When app open, put init values down below
    concentrationTime: null,
    relaxTime: null,
};

export const timerReducer = (state: TimerState = initialState, action: TimerActionTypes) => {
    switch(action.type) {
        case INIT_CONCENTRATION_TIME:
            return {
                ...state,
                initConcentrationTime: action.payload
            }
        case INIT_RELAX_TIME:
            return {
                ...state,
                initRelaxTime: action.payload
            }
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