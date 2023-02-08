import { Meta, StoryObj } from '@storybook/react';
import { NavBar as NavBarProps } from './interfaces';
import { listNavBar } from '../../utils/nav/list'
import NavBar from './index';

export default {
  title: 'Components/Navigation/NavBar',
  component: NavBar,
  args: {
    listNav: listNavBar,
    imageProfile: 'https://img.elo7.com.br/product/original/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg',
    nameUser: 'user name'
  },
} as Meta<NavBarProps>;

export const NavBarList: StoryObj<NavBarProps> = {

};
