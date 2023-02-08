import React, { useState } from 'react';
import ButtonNotification from '../ButtonNotification';
import setIcons from './icons';
import { NavBar as PropsNavBar } from './interfaces';
import { ContainerNavbar } from './styles';

const NavBar = ({ listNav, imageProfile, nameUser }: PropsNavBar) => {
  const [isDropNav, setIsDropNav] = useState(false);
  const nameUserGet: string = localStorage.getItem('@service:user') || '{}';
  const name = nameUser ? `${nameUser?.split(' ')[0]} ${nameUser?.split(' ')[1]}` : JSON.parse(nameUserGet).name;
  return (
    <ContainerNavbar>
      <div className='profile-nav'>
        <div className='profile-nav-notification'>
          <ButtonNotification
            containsNotification={true}
            onPress={() => {
              // analitic();
              // window.location.href = '/';
            }}
          />
        </div>
        <button className='profile-nav-profile' onClick={() => setIsDropNav(!isDropNav)}>
          <img src={imageProfile} alt='Sua foto de perfil' />
          <p>{name}</p>
          <div className='profile-nav-profile-nav'>
            <div className='profile-nav-profile-nav-button-arrow'>
              {setIcons({
                title: 'arrow down',
                iconSize: 26,
              })[0]?.icon({
                title: 'arrow down',
                iconSize: 26,
              })}
            </div>
            {isDropNav && (
              <div className='profile-nav-profile-nav-list' id='overlay'>
                {listNav?.map((item, key) => (
                  <li
                    key={key}
                    className={'list'}
                    onClick={() => (window.location.href = item.link)}
                    aria-hidden='true'
                  >
                    <span className='link icon-margin'>{setIcons(item)[0]?.icon(item)}</span>
                    <span className='link text-margin'>{item.title}</span>
                  </li>
                ))}
              </div>
            )}
          </div>
        </button>
      </div>
    </ContainerNavbar>
  );
};

export default NavBar;
