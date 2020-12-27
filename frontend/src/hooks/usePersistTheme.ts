import { useState, useEffect, Dispatch, SetStateAction } from 'react';

import { getTheme, setTheme as setStoredTheme } from '@helpers/storedTheme';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export default function usePersistTheme<T>(initialState: T): Response<T> {
  const [theme, setTheme] = useState(() => {
    const storedTheme = getTheme();

    if (storedTheme) {
      return JSON.parse(storedTheme);
    }

    return initialState;
  });

  useEffect(() => {
    setStoredTheme(JSON.stringify(theme));
  }, [theme])

  return [theme, setTheme];
}
