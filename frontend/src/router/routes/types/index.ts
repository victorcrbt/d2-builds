import { RouteProps as ReactRouterProps } from 'react-router-dom';

interface Route {
  isPrivate?: boolean;
}

export type RouteProps = ReactRouterProps & Route;
