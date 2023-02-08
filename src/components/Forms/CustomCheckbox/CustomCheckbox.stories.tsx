import { Meta, StoryObj } from '@storybook/react';
import { CheckboxProps } from './interface';
import CustomCheckbox from '.';

export default {
  title: 'Components/Checkbox',
  component: CustomCheckbox,
  args: {
    checked: false,
    label: 'Concordo',
    name: 'communicationAggree',
    onChange: console.log('teste'),
  },
} as Meta<CheckboxProps>;

export const Checkbox: StoryObj<CheckboxProps> = {};
