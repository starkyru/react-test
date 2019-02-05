/**
 * Current run status
 *
 * @flow
 */
import { createReducer } from '../../utils/reduxUtils';

import type { StatusAction } from '../actions/status';
import { SET_STATUS } from '../actions/status';

type StatusState = {|
  duration: number,
  duration_countdown: number,
  calories: number,
  speed: number,
  grade: number,
  heart_rate: number,
  pace: number,
  distance: number,
|};

const initialState: StatusState = {
  duration: 0, // seconds
  duration_countdown: 0, // seconds
  calories: 0,
  speed: 0, // km/h
  grade: 0.0, // percents
  heart_rate: 127.0,
  pace: 0, // seconds
  distance: 0, // km
};

// eslint-disable-next-line
const statusReducer = createReducer<StatusState, typeof statusReducer>(initialState, {
    [SET_STATUS]: (state: StatusState, action: StatusAction) => ({
      ...state,
      ...action.payload,
    }),
  }
);

export { statusReducer };
export type { StatusState, StatusAction };
