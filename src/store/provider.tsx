'use client';

import { Provider } from 'react-redux';
import { store } from '.';
import { FC, ReactElement, ReactNode } from 'react';

export const Providers: FC<{ children: ReactElement }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
