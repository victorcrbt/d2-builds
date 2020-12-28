import Profile from '@pages/Profile';

import { RouteProps } from './types';

export default {
  path: '/profile',
  component: Profile,
  exact: false,
  isPrivate: false,
} as RouteProps;
