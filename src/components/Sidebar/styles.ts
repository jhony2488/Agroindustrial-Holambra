import styled from 'styled-components'

export const Container = styled.div`

.nav-button-mobile{
  position: fixed;
  z-index: 2;
  top: 2%;
  left: 3%;
  transition: 1s;
  border: none;
  .button-mobile,button-mobile-modify{
    background-color: #181925;
    border-radius: 100%;
    padding: 10px;
    transition: 0.5s;
  }
  .button-mobile-modify{
    padding: 30px;
  }
  @media (min-width: 1080px) {
    display: none;
  }
}

.fadeOut{
  width:0;
  height:0;
  transition: width 0.5s 0.5s, height 0.5s 0.5s;
  position: fixed;
  top: 4%;
  left: 4%;
}
.fadeIn{
  height: 100%;
  width: 100%;
  transition: width 1.5s, height 1.5s, opacity 1.5s 1.5s;
}

.fadeIn{
  height: 100%;
  width: 100%;
  transition: width 1.5s, height 1.5s, opacity 1.5s 1.5s;
}
`
