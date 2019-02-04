// @flow
import { createReducer } from '../../utils/reduxUtils';

import type { StatusAction } from '../actions/status';
import { SET_STATUS } from '../actions/status';

const initialState = {
  duration: 0,
  duration_countdown: 0,
  calories: 0,
  speed: 0,
  grade: 0.0,
  heart_rate: 127.0,
  pace: 0,
  distance: 0,
};

type StatusState = typeof initialState;
// eslint-disable-next-line
const StatusReducer = createReducer<StatusState, typeof StatusReducer>(initialState, {
    [SET_STATUS]: (state: StatusState, action: StatusAction) => ({
      ...state,
      ...action.payload,
    }),
  }
);

export { StatusReducer };
export type { StatusState, StatusAction };
