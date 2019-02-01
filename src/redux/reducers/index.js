import { combineReducers } from 'redux';

import { NavigationReducer } from './navigation';
import { StatusReducer } from './status';
import { UIReducer } from './ui';

const rootReducer = combineReducers({
  navigation: NavigationReducer,
  status: StatusReducer,
  ui: UIReducer,
});

type Reducers = typeof rootReducer;
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
type State = $ObjMap<Reducers, $ExtractFunctionReturn>;

export type { rootReducer as RootReducer, State };

export { rootReducer };
