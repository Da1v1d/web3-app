import { MouseEventHandler } from "react";

export interface IButton {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}
