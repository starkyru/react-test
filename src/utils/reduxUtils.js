/**
 * Redux related utils
 *
 * @flow
 */

type Reducer<State, Action> = (State, Action) => State;

const createReducer = <State, Action>(
  initialState: State,
  handlers: { [key: string]: Reducer<State, Action> }
): Reducer<State, Action> => {
  return (state: State = initialState, action: Action): State => {
    // $FlowFixMe
    return handlers.hasOwnProperty(action.type)
      ? // $FlowFixMe
      handlers[action.type](state, action)
      : state;
  };
};

export { createReducer };
