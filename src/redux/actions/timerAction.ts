import { ActionCreator } from 'redux';
import { SET_NEW_CONCENTRATION_TIME, SET_NEW_RELAX_TIME, TimerActionTypes, concentrationTimeInterface, relaxTimeInterface } from "../types";

export const setNewConcentrationTime: ActionCreator<TimerActionTypes> = (newConcentrationTime: concentrationTimeInterface) => ({
    type: SET_NEW_CONCENTRATION_TIME,
    payload: newConcentrationTime
});

export const setNewRelaxTime: ActionCreator<TimerActionTypes> = (newRelaxTime: relaxTimeInterface) => ({
    type: SET_NEW_RELAX_TIME,
    payload: newRelaxTime
});