export const SOME_ACTION = 'SOME_ACTION';

export interface SomeAction {
  type: typeof SOME_ACTION;
  data: number;
}
