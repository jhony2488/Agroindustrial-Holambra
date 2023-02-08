export interface CheckboxProps {
  name: string;
  onChange: () => void;
  label: React.ReactNode;
  checked: boolean;
  error?: string;
}
