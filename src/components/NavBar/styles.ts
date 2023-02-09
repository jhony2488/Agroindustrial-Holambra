import styled from 'styled-components';

export const ContainerNavbar = styled.div`
  height: 11vh;
  width: 100%;
  overflow-x: hidden;
  transition: 4s ease-out;
  color: #373942;
  padding-right: 50px;
  @media (min-width: 480px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
  }
  display: flex;
  justify-content: flex-end;
  .profile-nav {
    display: flex;
    align-items: center;
    position: absolute;
    top: 2.5%;
    @media (max-width: 760px) {
      left: 30%;
    }
  }
  .profile-nav-profile {
    cursor: pointer;
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    img {
      width: 42px;
      height: 42px;
      border-radius: 100%;
      margin-left: 27px;
      @media (max-width: 760px) {
        margin-left: 8px;
      }
    }
    p {
      margin-left: 4px;
      margin-right: 4px;
      font-family: Manrope;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      color: #373942;
    }
  }
  .profile-nav-notification {
    margin-top: 3px;
  }
  .profile-nav-notification:hover {
    cursor: pointer;
  }
  .profile-nav-profile-nav {
    z-index: 3;
    &-button-arrow {
      margin-top: 4px;
    }
    &-list {
      position: absolute;
      right: 2%;
      margin-top: 10px;
      z-index: 3;
      width: 100%;
      @media (max-width: 760px) {
        width: 115%;
      }
      background: #ffffff;
      /* Shadows/Aila */

      box-shadow: -5px 20px 20px rgba(57, 57, 57, 0.07);
      border-radius: 8px;
      .link,
      .link-activity {
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1;
        color: #373942;
        height: 100%;
      }

      .list {
        border: none;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        padding-top: 10px;
        padding-left: 10px;
        width: 90%;
      }

      .list-activity,
      .list:hover {
        border: none;
        border-radius: 8px;
        text-decoration: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        transform: scale(1.1);
        transition: 1.5s;
      }
      li {
        text-decoration: none;
      }
      .text-margin {
        margin-left: 10px;
      }
    }
  }
`;
