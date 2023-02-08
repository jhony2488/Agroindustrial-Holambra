import React, { useState } from 'react';
import { List, X } from 'phosphor-react';
import { Props } from './interfaces';
import NavBar from '../Nav';
import { Container } from './styles';

const Sidebar = ({ listNav }: Props) => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <Container>
      <div className='nav-button-mobile'>
        <button className='button-mobile' onClick={() => setIsOpenNav(!isOpenNav)}>
          {!isOpenNav ? (
            <List size={32} color='#f1eaea' weight='fill' />
          ) : (
            <X size={32} color='#f1eaea' weight='fill' />
          )}
        </button>
      </div>
      <NavBar listNav={listNav} isOpenNav={isOpenNav} />
    </Container>
  );
};

export default Sidebar;
