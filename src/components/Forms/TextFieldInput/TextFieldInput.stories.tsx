import { Meta, StoryObj } from '@storybook/react';
import { PropsTextField } from './interface';
import { TextFieldInput } from '.';

export default {
  title: 'Components/forms/TextFieldInput',
  component: TextFieldInput,
  args: {
    label: 'Label',
    icon: 'buildings',
    name: 'nomeDoInput',
    width: '16rem',
    placeholder: 'nome do campo'
  },
} as Meta<PropsTextField>;

export const Default: StoryObj<PropsTextField> = {};

