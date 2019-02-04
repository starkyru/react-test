import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStateSyncMiddleware } from 'redux-state-sync';

import { SET_VIDEO, SET_SELECTED_VIDEO } from './actions/ui';
import { SET_TAB } from './actions/navigation';

const syncConfig = {
  channel: 'test_app_channel',
  whitelist: [SET_VIDEO, SET_TAB, SET_SELECTED_VIDEO],
  broadcastChannelOption: { type: 'native' },
};

const middlewares = [thunkMiddleware, createStateSyncMiddleware(syncConfig)];

const middleware = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, middleware);

export { store };
