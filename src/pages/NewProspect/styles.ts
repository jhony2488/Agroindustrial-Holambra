import styled from 'styled-components';

export const Wrap = styled.div`
  padding-top: 3rem;

  background: ${({ theme }) => theme?.palette?.background?.default || '#F9F8F9'};
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  .row {
    padding-left: 18.5%;
    display: flex;
    grid-templates-columns: 1fr 2fr 1fr;
  }
  .content {
    padding-top: 3rem;
  }
`;

export const WrapOSContainer = styled.div`
  flex: 0.68;
  padding-left: 2rem;
`;

export const WrapResearchContainer = styled.div`
  flex: 0.3;
`;
