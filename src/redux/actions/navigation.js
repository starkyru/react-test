/**
 * Navigation actions
 *
 * @flow
 */
import type { Tab } from '../reducers/navigation';

const SET_TAB: 'SET_TAB' = 'SET_TAB';

type SetTabAction = {|
  type: typeof SET_TAB,
  payload: Tab,
|};

type SetTabActionCreator = (
  $PropertyType<SetTabAction, 'payload'>
) => SetTabAction;

const setTab = (tab: Tab): SetTabAction => {
  return {
    type: SET_TAB,
    payload: tab,
  };
};

type NavigationAction = SetTabAction; // | another_action

export type { NavigationAction, SetTabActionCreator, SetTabAction };
export { SET_TAB, setTab };
