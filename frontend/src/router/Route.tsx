import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { RouteProps } from './routes/types';

const RouteWrapper: React.FC<RouteProps> = ({
  component: Component,
  isPrivate = false,
}) => {
  const signed = false;

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }

  if (!isPrivate && signed) {
    return <Redirect to="/profile" />;
  }

  return <Route render={props => <Component {...props} />} />;
};

export default RouteWrapper;
