import { ReactNode } from 'react'

export type PropsModal = {
  show: boolean;
  onRequestClose?: ()=> void;
  id: number | string;
  valuesDefault: [];
}

export type PropsContainerBox = {
  isMobile: boolean;
};
