import MaskedInput from 'react-text-mask';
import styled from 'styled-components';

interface ContainerProps {
  width?: string;
  error?: string;
  disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 8px;
  border: 1px solid ${({ theme, error }) => error ?  '#F44336'  : theme.palette.grey[300]};
  width: ${({ width }) => width};

  background: ${({ theme, disabled }) => disabled ? theme.palette.grey[100] : ''};

  padding-left: 1.063rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.grey[800]};

  display: block;
  margin-bottom: 4px;
`;

export const Input = styled(MaskedInput)`
  border-radius: 8px;
  padding: 1.063rem 1.063rem 1.063rem 0;
  padding-left: 0.5rem;
  border: none;
  outline: none;
  width: 100%;

  font-family: 'Manrope';
  font-size: 0.875rem;
  font-weight: 400;

  &::placeholder {
    color: ${({ theme }) => theme.palette.grey[300]};
  };
`;

export const ErrorMessage = styled.span`
  position: absolute;
  color: #F44336;
  font-family: 'Manrope';
  font-size: 0.7rem;
`
