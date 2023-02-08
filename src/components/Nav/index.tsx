import React from 'react';
import { useMediaQuery } from 'react-responsive';
import setIcons from './icons';
import { NavBar as PropsNavBar } from './interface';
import logoSidebar from '../../assets/imgs/logo.svg';
import signLight from '../../assets/imgs/signLight.svg';
import { ContainerNavbar } from './styles';

const Nav = ({ listNav, isOpenNav }: PropsNavBar) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1080px)' });
  return (
    <ContainerNavbar className={`${isTabletOrMobile ? (!isOpenNav ? 'fadeOut' : 'fadeIn') : 'fadIn'}`}>
      <div className='card'>
        <a href='/' className='link-image-logo'>
          <div className='imageCard'>
            <img src={logoSidebar} className='sig' alt='Logo do agro service' />
          </div>
        </a>

        <div className='card-body'>
          <div className='card-text'>
            <div className='space' />
            <div>
              {listNav?.map((item, key:number) => (
                <li
                  key={key}
                  className={item.isThisPage ? 'list-activity' : 'list'}
                  onClick={() => (window.location.href = item.link)}
                  aria-hidden="true"
                >
                  <span className='link icon-margin'>{setIcons(item)[0].icon(item)}</span>
                  <span className='link text-margin'>{item.title}</span>
                </li>
              ))}
            </div>
          </div>
          <div className='spaces' />
          <div className='containerButtonSign'>
            <button className='buttonSign' onClick={() => null}>
              <div className='buttonSignIconSpan'>
                <img src={signLight} alt='Icone que representa a saida' />
                <span>Sair</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </ContainerNavbar>
  );
};

export default Nav;
