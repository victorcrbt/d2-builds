import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '@store/types';
import { useTranslation } from 'react-i18next';

import { HELLO_USER } from '@constants/i18n/general';

import { Title } from './styles';

const Hello: React.FC = () => {
  const { t } = useTranslation();

  const { name } = useSelector((state: ApplicationState) => state.user);

  return <Title>{t(HELLO_USER, { name })}</Title>;
};

export default Hello;
