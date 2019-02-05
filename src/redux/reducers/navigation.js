/**
 * Navigation reducer
 *
 * @flow
 */
import { createReducer } from '../../utils/reduxUtils';

import type { NavigationAction, SetTabAction } from '../actions/navigation';
import { SET_TAB } from '../actions/navigation';
import type { Tab } from '../../utils/const';
import { TABS } from '../../utils/const';

type NavigationState = {|
  tab: Tab,
|};

const initialState: NavigationState = {
  tab: Object.keys(TABS)[0],
};

// eslint-disable-next-line
const navigationReducer = createReducer<NavigationState, NavigationAction>(initialState, {
    [SET_TAB]: (state: NavigationState, action: SetTabAction) => ({
      ...state,
      tab: (action: SetTabAction).payload,
    }),
  }
);

export { navigationReducer };
export type { NavigationAction, NavigationState, Tab };
