/**
 * Dashboard status and Fake API
 */

const SET_VIDEO = 'SET_VIDEO';
type SetVideoAction = $Call<typeof setVideo>;

// TODO: add Flowtype for message
const setVideo = (message: Object): SetVideoAction => {
  return {
    type: SET_VIDEO,
    payload: message,
  };
};

const SET_IMPERIAL = 'SET_IMPERIAL';
type SetImperialAction = $Call<typeof setImperial>;

const setImperial = (imperial: boolean): SetImperialAction => {
  return {
    type: SET_IMPERIAL,
    payload: imperial,
  };
};

type UIAction = SetVideoAction | SetImperialAction;

export type { UIAction, SetImperialAction, SetVideoAction };
export { setVideo, SET_VIDEO, setImperial, SET_IMPERIAL };
