import { ActionCreator } from 'redux';
import {
    INIT_CONCENTRATION_TIME,
    INIT_RELAX_TIME,
    SET_IS_CONCENTRATION_MODE_ON,
    SET_IS_RELAX_MODE_ON,
    TimerActionTypes,
    initConcentrationTimeInterface,
    initRelaxTimeInterface,
    isConcentrationModeOnInterface,
    isRelaxModeOnInterface
} from "../types";


export const initConcentrationTime: ActionCreator<TimerActionTypes> = (concentrationTime: initConcentrationTimeInterface) => ({
    type: INIT_CONCENTRATION_TIME,
    payload: concentrationTime
});

export const initRelaxTime:  ActionCreator<TimerActionTypes> = (relaxTime: initRelaxTimeInterface) => ({
    type: INIT_RELAX_TIME,
    payload: relaxTime
});

export const setIsConcentrationModeOn: ActionCreator<TimerActionTypes> = (isConcentationModeOn: isConcentrationModeOnInterface) => ({
    type: SET_IS_CONCENTRATION_MODE_ON,
    payload: isConcentationModeOn,
});

export const setIsRelaxModeOn: ActionCreator<TimerActionTypes> = (isRelaxModeOn: isRelaxModeOnInterface) => ({
    type: SET_IS_RELAX_MODE_ON,
    payload: isRelaxModeOn
});