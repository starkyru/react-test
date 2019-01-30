// @flow
import { createReducer } from '../../utils/reduxUtils';
import type { NavigationAction } from '../actions/navigation';
import { SET_TAB } from '../actions/navigation';
import type {Tab} from '../../utils/const';
import {TABS} from '../../utils/const';

const initialState = {
  tab: Object.values(TABS)[0],
};

type NavigationState = typeof initialState;

// type Reducer<State, Payload> = (state: State, action: Action<Payload>) => State;

// const LocalizationReducer: Reducer<LocalizationState, NavigationAction> = (state, action) => {
//   switch (action.type) {
//     [SET_TAB]: return {
//       ...state,
//       locale: action.payload,
//     };
//     default:
//       return state;
//   }
// }

const NavigationReducer = createReducer<NavigationState, typeof NavigationReducer>(initialState, {
  [SET_TAB]: (state: NavigationState, action: NavigationAction) => ({
    ...state,
    tab: action.payload,
  }),
});

export { NavigationReducer };
export type { NavigationAction, NavigationState, Tab };
