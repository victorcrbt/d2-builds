import Home from '@pages/Home';

import { RouteProps } from './types';

export default {
  path: '/',
  component: Home,
  exact: true,
  isPrivate: false,
} as RouteProps;
