import { SomeAction, SOME_ACTION } from './types';

export function someState(state: number = 1, action: SomeAction) {
  switch (action.type) {
    case SOME_ACTION:
      return action.data;
    default:
      return state;
  }
}
