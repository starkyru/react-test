// @flow
import { createReducer } from '../../utils/reduxUtils';

import type { NavigationAction } from '../actions/navigation';
import { SET_TAB } from '../actions/navigation';
import type {Tab} from '../../utils/const';
import {TABS} from '../../utils/const';

const initialState = {
  tab: Object.keys(TABS)[0],
};

type NavigationState = typeof initialState;
// eslint-disable-next-line
const NavigationReducer = createReducer<NavigationState, typeof NavigationReducer>(initialState, {
  [SET_TAB]: (state: NavigationState, action: NavigationAction) => ({
    ...state,
    tab: action.payload,
  }),
});

export { NavigationReducer };
export type { NavigationAction, NavigationState, Tab };
