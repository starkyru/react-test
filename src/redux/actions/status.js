/**
 * Dashboard status and Fake API
 *
 * @flow
 */
import type { Dispatch } from 'redux';
import { API_FREQUENCY, WORKOUT_DURATION_MS } from '../../utils/const';

const SET_STATUS = 'SET_STATUS';

type Status = {|
  duration: number,
  duration_countdown: number,
  calories: number,
  speed: number,
  grade: number,
  heart_rate: number,
  pace: number,
  distance: number,
|};

type SetStatusAction = {|
  type: typeof SET_STATUS,
  payload: Status,
|};

// TODO: add Flowtype for message
const setStatus = (message: Status): SetStatusAction => {
  return {
    type: SET_STATUS,
    payload: message,
  };
};

let _timer = null;

const startFakeApi = (timeout: number = WORKOUT_DURATION_MS) => (
  dispatch: Dispatch
) => {
  _timer && clearInterval(_timer);
  const _startTime = Date.now();
  const _timeout = _startTime + timeout;
  let _timeCounter = 0;
  _timer = setInterval(() => {
    const now = Date.now();
    if (now > _timeout) {
      stopFakeApi();
    } else {
      _timeCounter = _timeCounter + API_FREQUENCY; // I don't care about time drifting :)
      dispatch(fakeApiSendMessage(_timeCounter, timeout - _timeCounter));
    }
  }, API_FREQUENCY);
  dispatch(fakeApiSendMessage(_timeCounter, timeout - _timeCounter));
};

const fakeApiSendMessage = (time: number, timeLeft: number) =>
  setStatus({
    duration: Math.floor(time / 1000), // time passed in seconds
    duration_countdown: Math.ceil(timeLeft / 1000), // time left in seconds
    calories: (0.1875 * time) / 1000,
    speed: 9,
    grade: 0.0,
    heart_rate: 127.0,
    pace: 12.42,
    distance: (time * 9) / (1000 * 60 * 60),
  });

const stopFakeApi = () => {
  _timer && clearInterval(_timer);
};

type StatusAction = SetStatusAction; // | another_action

export type { StatusAction, Status };
export { SET_STATUS, startFakeApi, stopFakeApi, setStatus };
