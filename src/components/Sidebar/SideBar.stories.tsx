import { Meta, StoryObj } from '@storybook/react';
import {  Props  } from './interfaces';
import {listNav} from '../../utils/nav/list'
import SideBar from './index';

export default {
  title: 'Components/Navigation/SideBar',
  component: SideBar,
  args: {
    listNav
  },
} as Meta<Props>;

export const SideBarBav: StoryObj<Props> = {
  args: {
    listNav
  },
};
