import { ActionCreator } from 'redux';
import { INIT_CONCENTRATION_TIME, INIT_RELAX_TIME, SET_NEW_CONCENTRATION_TIME, SET_NEW_RELAX_TIME, TimerActionTypes, initConcentrationTimeInterface, initRelaxTimeInterface, concentrationTimeInterface, relaxTimeInterface } from "../types";

export const setNewConcentrationTime: ActionCreator<TimerActionTypes> = (newConcentrationTime: concentrationTimeInterface) => ({
    type: SET_NEW_CONCENTRATION_TIME,
    payload: newConcentrationTime
});

export const setNewRelaxTime: ActionCreator<TimerActionTypes> = (newRelaxTime: relaxTimeInterface) => ({
    type: SET_NEW_RELAX_TIME,
    payload: newRelaxTime
});

export const initConcentrationTime: ActionCreator<TimerActionTypes> = (concentrationTime: initConcentrationTimeInterface) => ({
    type: INIT_CONCENTRATION_TIME,
    payload: concentrationTime
});

export const initRelaxTime:  ActionCreator<TimerActionTypes> = (relaxTime: initRelaxTimeInterface) => ({
    type: INIT_RELAX_TIME,
    payload: relaxTime
});