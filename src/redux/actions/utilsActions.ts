import { ActionCreator } from 'redux';
import { SWITCH_THEME, UtilsActionsTypes, themeInterface } from '../types';

export const switchTheme: ActionCreator<UtilsActionsTypes> = (newTheme: themeInterface) => ({
    type: SWITCH_THEME,
    payload: newTheme
})