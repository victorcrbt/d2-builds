import React, { useMemo } from 'react';
import { Switch } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { RouteProps } from './routes/types';

import Route from './Route';

const pages = require.context('./routes', false, /\.ts$/);

const Router: React.FC = () => {
  const routes: RouteProps[] = useMemo(
    () => pages.keys().map(key => pages(key)?.default),
    []
  );

  return (
    <Switch>
      {routes.map(route => (
        <Route key={nanoid()} {...route} />
      ))}
    </Switch>
  );
};

export default Router;
