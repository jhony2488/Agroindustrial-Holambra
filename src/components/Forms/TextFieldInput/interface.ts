import { IconsTypes } from '../icons';
import { TMasks } from '../masks';

export interface PropsTextField extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon: IconsTypes;
  name: string;
  mask?: TMasks;
  width?: string;
  error?: string;
}
