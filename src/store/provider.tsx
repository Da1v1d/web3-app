'use client';

import { Provider } from 'react-redux';
import { store } from '.';
import { FC, ReactNode } from 'react';

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
