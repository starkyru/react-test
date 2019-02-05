/**
 * Combined app reducer
 *
 * @flow
 */
import { combineReducers } from 'redux';

import { navigationReducer } from './navigation';
import { statusReducer } from './status';
import { uiReducer } from './ui';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  status: statusReducer,
  ui: uiReducer,
});

type Reducers = typeof rootReducer;
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
type State = $ObjMap<Reducers, $ExtractFunctionReturn>;

export type { rootReducer as RootReducer, State };

export { rootReducer };
