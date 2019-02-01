// @flow
import { createReducer } from '../../utils/reduxUtils';

import type { UIAction } from '../actions/ui';
import { SET_IMPERIAL, SET_VIDEO } from '../actions/ui';

const initialState = {
  video: null,
  imperial: false,
};

type UIState = typeof initialState;
// eslint-disable-next-line
const UIReducer = createReducer<UIState, typeof UIReducer>(initialState, {
  [SET_VIDEO]: (state: UIState, action: UIAction) => ({
    ...state,
    video: action.payload,
  }),
  [SET_IMPERIAL]: (state: UIState, action: UIAction) => ({
    ...state,
    imperial: action.payload,
  }),
});

export { UIReducer };
export type { UIState, UIAction };
