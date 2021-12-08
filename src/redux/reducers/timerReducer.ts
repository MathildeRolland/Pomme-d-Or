import {
    TimerActionTypes,
    INIT_CONCENTRATION_TIME,
    INIT_RELAX_TIME,
    SET_IS_CONCENTRATION_MODE_ON,
    SET_IS_RELAX_MODE_ON
} from '../types/timerTypes';

interface TimerState {
    initConcentrationTime: number,
    initRelaxTime: number,
    isConcentrationModeOn: boolean,
    isRelaxModeOn: boolean
}


const initialState: TimerState = {
    initConcentrationTime: 0,
    initRelaxTime: 0,
    isConcentrationModeOn: false,
    isRelaxModeOn: false,
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
        case SET_IS_CONCENTRATION_MODE_ON:
            return {
                ...state,
                isConcentrationModeOn: action.payload
            }
        case SET_IS_RELAX_MODE_ON:
            return {
                ...state,
                isRelaxModeOn: action.payload
            }
        default:
            return state;
    }
}