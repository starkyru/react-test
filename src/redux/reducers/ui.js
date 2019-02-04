// @flow

import { createReducer } from '../../utils/reduxUtils';

import type { UIAction } from '../actions/ui';
import { SET_IMPERIAL, SET_VIDEO, SET_SELECTED_VIDEO } from '../actions/ui';
import { PLAYLIST } from '../../utils/const';

const initialState = {
  video: null,
  selectedVideo: PLAYLIST[0].id,
  master: '',
  imperial: false,
};

type UIState = typeof initialState;
// eslint-disable-next-line
const UIReducer = createReducer<UIState, typeof UIReducer>(initialState, {
  [SET_SELECTED_VIDEO]: (state: UIState, action: UIAction) => ({
    ...state,
    selectedVideo: action.payload,
  }),
  [SET_VIDEO]: (state: UIState, action: UIAction) => ({
    ...state,
    video: { ...action.payload.video, seed: Math.random() },
    master: action.payload.master,
  }),
  [SET_IMPERIAL]: (state: UIState, action: UIAction) => ({
    ...state,
    imperial: action.payload,
  }),
});

export { UIReducer };
export type { UIState, UIAction };
