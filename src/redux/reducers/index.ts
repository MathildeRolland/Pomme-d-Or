import { combineReducers } from 'redux';
import { timerReducer } from './timerReducer';

export const rootReducer = combineReducers({
  timer: timerReducer
});

export type RootState = ReturnType<typeof rootReducer>;