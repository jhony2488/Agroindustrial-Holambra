import styled from 'styled-components';

interface ButtonProps {
  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 1.25rem 6.688rem;
  background-color: ${({ theme, disabled }) => disabled ? theme.palette.primary.dark : theme.palette.primary.main };

  font-family: ${({ theme }) => theme.typography.fontFamily };
  color:  ${({ theme }) => theme.palette.background.paper };
  font-size: 0.875rem;
  font-weight: 500;

  cursor: pointer;

  border-radius: 8px;
  border: none;
  outline: none;
  box-shadow: none;
  transition: 0.2s;

  margin-bottom: 5.5rem;

  &:hover {
    opacity: 0.9;
  }
`
