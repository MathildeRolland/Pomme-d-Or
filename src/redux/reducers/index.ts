import { combineReducers } from 'redux';
import { timerReducer } from './timerReducer';
import { habbitReducer } from './habbitReducer';
import { utilsReducer } from './utilsReducer';

export const rootReducer = combineReducers({
  timer: timerReducer,
  habbit: habbitReducer,
  utils: utilsReducer
});

export type RootState = ReturnType<typeof rootReducer>;