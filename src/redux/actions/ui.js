/**
 * Dashboard status and Fake API
 */
import type { VideoItem } from '../../utils/const';
import { UUID } from '../../utils/const';

const SET_VIDEO = 'SET_VIDEO';
type SetVideoAction = $Call<typeof setVideo>;

// TODO: add Flowtype for message
const setVideo = (video: VideoItem): SetVideoAction => {
  return {
    type: SET_VIDEO,
    payload: {
      video,
      master: UUID,
    },
  };
};

const SET_SELECTED_VIDEO = 'SET_SELECTED_VIDEO';
type SetSelectedVideoAction = $Call<typeof setSelectedVideo>;

// TODO: add Flowtype for message
const setSelectedVideo = (videoId: string): SetSelectedVideoAction => {
  return {
    type: SET_SELECTED_VIDEO,
    payload: videoId,
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
export {
  setVideo,
  SET_VIDEO,
  setImperial,
  SET_IMPERIAL,
  setSelectedVideo,
  SET_SELECTED_VIDEO,
};
