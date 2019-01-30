/**
 * Navigation actions
 */
import type {Tab} from '../reducers/navigation'

const SET_TAB = 'SET_TAB';

type SetTabAction = $Call<typeof setTab>;

const setTab = (tab: Tab): SetTabAction => {
  return {
    type: SET_TAB,
    payload: tab,
  };
};

type NavigationAction = SetTabAction; // | another_action

export type { NavigationAction };
export { SET_TAB, setTab };
