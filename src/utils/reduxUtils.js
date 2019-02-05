/**
 * Redux related utils
 *
 * @flow
 */

type Reducer<State> = (State, Action: any) => State;
type Action = any;

const createReducer = <State: Object>(
  initialState: State,
  handlers: { [key: string]: Reducer<State> }
): Reducer<State> => {
  return (state: State = initialState, action: Action): State => {
    return handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, (action: typeof action))
      : state;
  };
};

export { createReducer };
