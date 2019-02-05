/**
 * UI Status
 * current tab, selected video, current video
 *
 * @flow
 */
import { createReducer } from '../../utils/reduxUtils';

import type {
  SetImperialAction,
  SetSelectedVideoAction,
  SetVideoAction,
  UIAction,
} from '../actions/ui';
import { SET_IMPERIAL, SET_VIDEO, SET_SELECTED_VIDEO } from '../actions/ui';
import { PLAYLIST } from '../../utils/const';
import type { VideoItem } from '../../utils/const';

type UIState = {|
  video: ?VideoItem,
  selectedVideo: string,
  master: string, // UUID of app set current video object
  seed: number, // Updated with random on every SET_VIDEO
  imperial: boolean,
|};

const initialState: UIState = {
  video: null,
  selectedVideo: PLAYLIST[0].id,
  master: '',
  seed: 0,
  imperial: false,
};

// eslint-disable-next-line
const uiReducer = createReducer<UIState>(initialState, {
  [SET_SELECTED_VIDEO]: (state: UIState, action: SetSelectedVideoAction) => ({
    ...state,
    selectedVideo: action.payload,
  }),
  [SET_VIDEO]: (state: UIState, action: SetVideoAction) => ({
    ...state,
    video: { ...action.payload.video },
    seed: Math.random(),
    master: action.payload.master,
  }),
  [SET_IMPERIAL]: (state: UIState, action: SetImperialAction) => ({
    ...state,
    imperial: action.payload.imperial,
  }),
});

export { uiReducer };
export type { UIState, UIAction };
