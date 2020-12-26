import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '@store/types';

const Hello: React.FC = () => {
  const { name } = useSelector((state: ApplicationState) => state.user);

  return <h1>Hello, {name}!</h1>;
};

export default Hello;
