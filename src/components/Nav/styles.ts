import styled from 'styled-components';

export const ContainerNavbar = styled.div`
  height: 100%;
  width: 18.5%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #181925;
  overflow-x: hidden;
  transition: 4s ease-out;
  color: white;
  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (min-width: 480px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
  }
  .space {
    height: 3rem;
    @media (max-width: 1080px) {
      height: 2rem;
    }
  }

  .spaces {
    height: 14rem;
    @media (max-width: 1080px) {
      height: 2rem;
    }
  }

  .sig {
    width: 55%;
  }

  .card {
    border: none;
    width: 100%;
    background-color: #181925;
    padding-top: 48px;
    .card-body {
      width: 100%;
      display: grid;
      justify-items: center;
      .card-text {
        width: 82%;
      }
    }
    @media (min-width: 480px) and (max-width: 1080px) {
      width: 60%;
    }
  }
  .imageCard,
  .containerButtonSign {
    width: 100%;
    display: flex;
    justify-content: center;
    @media (min-width: 760px) and (max-width: 1080px) {
      width: 70%;
    }
  }
  .buttonSign {
    background: transparent;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    span {
      margin-left: 10px;
    }
  }
  .buttonSignIconSpan {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: 30px;
    cursor: pointer;
  }

  .link,
  .link-activity {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 1.05rem;
    line-height: 1;
    color: white;
    height: 100%;
  }

  .list {
    border: none;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 14px;
    padding-left: 10px;
    width: 90%;
  }

  .list-activity,
  .list:hover {
    border: none;
    background: #e54d2e;
    width: 90%;
    border-radius: 8px;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 15px;
    padding-top: 16px;
    padding-bottom: 14px;
    padding-left: 10px;
    display: flex;
    align-items: center;
  }
  .text-margin {
    margin-left: 10px;
  }
  ul {
    background: green;
    display: grid;
    justify-content: center;
  }
  li {
    border: none;
  }
  .link-image-logo {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
