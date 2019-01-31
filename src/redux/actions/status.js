/**
 * Dashboard status and Fake API
 */

const SET_STATUS = 'SET_STATUS';

type SetStatusAction = $Call<typeof setStatus>;

// TODO: add Flowtype for message
const setStatus = (message: Object): SetTabAction => {
  return {
    type: SET_STATUS,
    payload: message,
  };
};

let _timer = null;
let _timeout = Date.now();
let _startTime = Date.now();

const THIRTY_MINUTES = 30 * 60 * 1000;
const FREQUENCY = 500;

const startFakeApi = (timeout: number = THIRTY_MINUTES) => (dispatch) => {
  clearInterval(_timer);
  _timeout = Date.now() + timeout;
  _startTime = Date.now();
  _timer = setInterval(() => {
    const now = Date.now();
    if (now > _timeout) {
      stopFakeApi();
    } else {
      dispatch(fakeApiSendMessage(now - _startTime, _timeout - now));
    }
  }, FREQUENCY);
  dispatch(fakeApiSendMessage());
};

const fakeApiSendMessage = (time: number, timeLeft: number) => setStatus({
  'duration': time / 1000, // time passed in seconds
  'duration_countdown': timeLeft/1000, // time left in seconds
  'calories': 0.1875*time/1000,
  'speed': 9,
  'grade': 0.0,
  'heart_rate': 127.0,
  'pace': 12.42,
  'distance': time*9/(1000*60*60),
});

const stopFakeApi = () => {
  clearInterval(_timer);
};

type StatusAction = SetStatusAction; // | another_action

export type {StatusAction};
export {SET_STATUS, startFakeApi, stopFakeApi, setStatus};
