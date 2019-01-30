import { combineReducers } from 'redux';

import { NavigationReducer } from './navigation';

const rootReducer = combineReducers({
  navigation: NavigationReducer
});

type Reducers = typeof rootReducer;
type $ExtractFunctionReturn = <V>(v: (...args: any) => V) => V;
type State = $ObjMap<Reducers, $ExtractFunctionReturn>;

export type { rootReducer as RootReducer, State };

export {rootReducer}