import {
    TimerActionTypes,
    SET_NEW_CONCENTRATION_TIME,
    SET_NEW_RELAX_TIME,
} from '../types/timerTypes';

interface TimerState {
    initConcentrationTime: number,
    initRelaxTime: number,
}


const initialState: TimerState = {
    initConcentrationTime: 1500,
    initRelaxTime: 300,
};

export const timerReducer = (state: TimerState = initialState, action: TimerActionTypes) => {
    switch(action.type) {
        case SET_NEW_CONCENTRATION_TIME: 
            return {
                ...state,
                initConcentrationTime: action.payload
            }
        case SET_NEW_RELAX_TIME:
            return {
                ...state,
                initRelaxTime: action.payload
            }
        default:
            return state;
    }
}