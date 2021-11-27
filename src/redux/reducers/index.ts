import { combineReducers } from 'redux';
import { timerReducer } from './timerReducer';
import { habbitReducer } from './habbitReducer';

export const rootReducer = combineReducers({
  timer: timerReducer,
  habbit: habbitReducer
});

export type RootState = ReturnType<typeof rootReducer>;