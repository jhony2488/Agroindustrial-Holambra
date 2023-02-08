import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.15px;
    margin-left: 0.5rem;

    a {
      color: ${({ theme }) => theme.palette.primary.main };
      text-decoration: none;
    }
  }
`

export const Container = styled.div`
  max-width: 28rem;
`;

interface CheckContainerProps {
  checked: boolean
}

export const CheckContainer = styled.div<CheckContainerProps>`
    height: 24px;
    width: 24px;
    border: 2px solid ${({ checked, theme }) => checked ? theme.palette.primary.main : theme.palette.grey[400] };
    border-radius: 5px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ checked, theme }) => checked ? theme.palette.primary.main : theme.palette.background.paper};

    &:hover {
      opacity: 0.5;
    }
`

export const ErrorMessage = styled.span`
  margin-top: 0.5rem;
  position: absolute;
  color: #F44336;
  font-family: 'Manrope';
  font-size: 0.7rem;
`
