/**
 * Dashboard status and Fake API
 */

import { API_FREQUENCY, WORKOUT_DURATION_MS } from '../../utils/const';

const SET_STATUS = 'SET_STATUS';

type SetStatusAction = $Call<typeof setStatus>;

// TODO: add Flowtype for message
const setStatus = (message: Object): SetStatusAction => {
  return {
    type: SET_STATUS,
    payload: message,
  };
};

let _timer = null;

const startFakeApi = (timeout: number = WORKOUT_DURATION_MS) => dispatch => {
  clearInterval(_timer);
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
  dispatch(fakeApiSendMessage());
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
  clearInterval(_timer);
};

type StatusAction = SetStatusAction; // | another_action

export type { StatusAction };
export { SET_STATUS, startFakeApi, stopFakeApi, setStatus };
