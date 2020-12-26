import { UserState } from './types';

const INITIAL_STATE: UserState = {
  name: 'Victor Batalha',
};

export default function user(state = INITIAL_STATE, action: any) {
  return state;
}
