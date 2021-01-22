import { IPointGroupReducerState } from '../interfaces/index';

const INITIAL_STATE: IPointGroupReducerState = {
  data: [],
};

export const pointGroupReducer = (state = INITIAL_STATE, action: any) => {
  switch (action) {
    default:
      return state;
  }
};
