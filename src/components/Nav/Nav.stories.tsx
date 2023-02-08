import { Meta, StoryObj } from '@storybook/react';
import {  NavBar  } from './interface';
import {listNav} from '../../utils/nav/list'
import Nav from './index';

export default {
  title: 'Components/Navigation/Nav',
  component: Nav,
  args: {
    listNav
  },
} as Meta<NavBar>;

export const NavList: StoryObj<NavBar> = {
  args: {
    listNav,

  },
};
