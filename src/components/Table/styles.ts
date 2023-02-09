import styled from 'styled-components'

export const ActionButton = styled.div`
  margin-left: 5px;
  &:hover{
  cursor: pointer;
  transform: scale(1.1);
  transition: 2s ;
}
`;

export const ActionButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  &:hover{
  cursor: pointer ;
}
`;
