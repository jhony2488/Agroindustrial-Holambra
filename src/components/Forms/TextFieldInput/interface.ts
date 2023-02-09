import { TMasks } from '../masks';

export interface PropsTextField extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  mask?: TMasks;
  width?: string;
  error?: string;
}
