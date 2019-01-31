import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunkMiddleware];

const middleware = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(rootReducer, middleware);

export { store };
