import { ActionCreator } from 'redux';
import { SET_NEW_HABBIT, newHabbitInterface, HabbitActionsTypes } from '../types';

export const setNewHabbit: ActionCreator<HabbitActionsTypes> = (newHabbit: newHabbitInterface) => ({
    type: SET_NEW_HABBIT,
    payload: newHabbit
});