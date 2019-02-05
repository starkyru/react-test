/**
 * UI actions
 *
 * @flow
 */
import type { VideoItem } from '../../utils/const';
import { UUID } from '../../utils/const';

const SET_VIDEO = 'SET_VIDEO';
type SetVideoAction = {|
  type: typeof SET_VIDEO,
  payload: {|
    video: VideoItem,
    master: string,
  |},
|};

type SetVideoActionCreator = (
  $PropertyType<SetVideoAction, 'payload'>
) => SetVideoAction;

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
type SetSelectedVideoAction = {|
  type: typeof SET_SELECTED_VIDEO,
  payload: $PropertyType<VideoItem, 'id'>,
|};

type SetSelectedVideoActionCreator = (
  $PropertyType<SetSelectedVideoAction, 'payload'>
) => SetSelectedVideoAction;

const setSelectedVideo = (
  videoId: $PropertyType<VideoItem, 'id'>
): SetSelectedVideoAction => {
  return {
    type: SET_SELECTED_VIDEO,
    payload: videoId,
  };
};

const SET_IMPERIAL = 'SET_IMPERIAL';
type SetImperialAction = {|
  type: typeof SET_IMPERIAL,
  payload: {
    imperial: boolean,
  },
|};

type SetImperialActionCreator = (
  $PropertyType<SetImperialAction, 'payload'>
) => SetImperialAction;

const setImperial = (imperial: boolean): SetImperialAction => {
  return {
    type: SET_IMPERIAL,
    payload: {
      imperial,
    },
  };
};

type UIAction = SetVideoAction | SetSelectedVideoAction | SetImperialAction;

export type {
  UIAction,
  SetImperialAction,
  SetVideoAction,
  SetSelectedVideoAction,
  SetVideoActionCreator,
  SetImperialActionCreator,
  SetSelectedVideoActionCreator,
};
export {
  setVideo,
  SET_VIDEO,
  setImperial,
  SET_IMPERIAL,
  setSelectedVideo,
  SET_SELECTED_VIDEO,
};
