import { User, ShieldCheck , Files,CaretDown} from 'phosphor-react';
import { Icons } from './interfaces';
const icons = [
  {
    item: {
      title: 'Meus dados',
    },
    icon: (item: Icons) => (
      <User size={item.iconSize ? item.iconSize : 24} color='#5C6170' weight={'light'} />
    ),
  },
  {
    item: {
      title: 'Política e Privacidade',
    },
    icon: (item: Icons) => (
      <ShieldCheck
        size={item.iconSize ? item.iconSize : 24} color='#5C6170' weight={'light'}
      />
    ),
  },
  {
    item: {
      title: 'Termos e condições',
    },
    icon: (item: Icons) => (
      <Files
        size={item.iconSize ? item.iconSize : 24} color='#5C6170' weight={'light'}
      />
    ),
  },

  {
    item: {
      title: 'arrow down',
    },
    icon: (item: Icons) => (
      <CaretDown
        size={item.iconSize ? item.iconSize : 24} color='#373942' weight={'light'}
      />
    ),
  },
];
export default (item: Icons) => {
  return icons.filter((itemIcon) => {
    return item.title === itemIcon.item.title;
  });
};
