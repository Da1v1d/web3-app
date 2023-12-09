'use client';

import { FC } from 'react';
import { IButton } from './Button.types';

export const Button: FC<IButton> = ({ onClick, text }) => {
  return (
    <button
      className={`p-[12px] h-max bg-amber-200 text-slate-900 rounded-[12px] px-5 mx-2 font-semibold hover:opacity-[90%] uppercase`}
      onClick={onClick}>
      {text}
    </button>
  );
};
