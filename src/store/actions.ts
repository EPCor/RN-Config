import { SomeAction, SOME_ACTION } from './types';

export function someAction(data: number): SomeAction {
  return {
    type: SOME_ACTION,
    data,
  };
}
