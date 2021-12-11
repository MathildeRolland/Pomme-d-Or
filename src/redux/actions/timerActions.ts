import { ActionCreator } from 'redux';
import {
    SET_NEW_CONCENTRATION_TIME,
    SET_NEW_RELAX_TIME,
    TimerActionTypes,
    initConcentrationTimeInterface,
    initRelaxTimeInterface,
} from "../types";


export const SetNewConcentrationTime: ActionCreator<TimerActionTypes> = (concentrationTime: initConcentrationTimeInterface) => ({
    type: SET_NEW_CONCENTRATION_TIME,
    payload: concentrationTime
});

export const SetNewRelaxTime:  ActionCreator<TimerActionTypes> = (relaxTime: initRelaxTimeInterface) => ({
    type: SET_NEW_RELAX_TIME,
    payload: relaxTime
});
