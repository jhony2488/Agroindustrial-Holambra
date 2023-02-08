import { House, Plus } from 'phosphor-react';
import { Icons } from './interface';
const icons = [
  {
    item: {
      title: 'Início',
    },
    icon: (item: Icons) => (
      <House size={item.iconSize ? item.iconSize : 24} color='#f2f2f2' weight={item.isThisPage ? 'fill' : 'light'} />
    ),
  },
  {
    item: {
      title: 'Novo Prospecto',
    },
    icon: (item: Icons) => (
      <Plus
        size={item.iconSize ? item.iconSize : 24}
        color='#f2f2f2'
        weight={item.isThisPage ? 'fill' : 'light'}
      />
    ),
  },
];
export default (item: Icons) => {
  return icons.filter((itemIcon) => {
    return item.title === itemIcon.item.title;
  });
};
