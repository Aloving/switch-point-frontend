import { combineReducers, Reducer } from 'redux';

import { pointGroupReducer as pointGroup } from './pointGroup';

import { ISoreState } from '../interfaces/index';

export const rootReducer: Reducer<ISoreState> = combineReducers({
  pointGroup,
});
