import { SelectChangeEvent } from '@mui/material';
import { IconsTypes } from '../icons';

export interface SelectInputProps {
  icon: IconsTypes;
  label: string;
  name: string;
  value: string;
  onChange: (value: SelectChangeEvent) => void;
  options?: string[];
  placeholder: string;
  error?: string;
}
