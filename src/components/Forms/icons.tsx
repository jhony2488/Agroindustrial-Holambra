import {
  Buildings,
  CalendarBlank,
  Envelope,
  FileSearch,
  HashStraight,
  HouseLine,
  Info,
  Lightning,
  ListChecks,
  MagnifyingGlass,
  MapPin,
  MapTrifold,
  Pencil,
  Phone,
  Timer,
  User,
  UserList,
  UserRectangle,
  UsersThree,
  WhatsappLogo,
} from 'phosphor-react';

export const Icons = {
  user: <User size={24} weight='regular' color='#5C6170' />,
  userList: <UserList size={24} weight='regular' color='#5C6170' />,
  calendarBlank: <CalendarBlank size={24} weight='regular' color='#5C6170' />,
  envelope: <Envelope size={24} weight='regular' color='#5C6170' />,
  whatsappLogo: <WhatsappLogo size={24} weight='regular' color='#5C6170' />,
  fileSearch: <FileSearch size={24} weight='regular' color='#5C6170' />,
  buildings: <Buildings size={24} weight='regular' color='#5C6170' />,
  phone: <Phone size={24} weight='regular' color='#5C6170' />,
  pencil: <Pencil size={24} weight='regular' color='#5C6170' />,
  hashStraight: <HashStraight size={24} weight='regular' color='#5C6170' />,
  mapTrifold: <MapTrifold size={24} weight='regular' color='#5C6170' />,
  mapPin: <MapPin size={24} weight='regular' color='#5C6170' />,
  houseLine: <HouseLine size={24} weight='regular' color='#5C6170' />,
  userRectangle: <UserRectangle size={24} weight='regular' color='#5C6170' />,
  info: <Info size={24} weight='regular' color='#5C6170' />,
  timer: <Timer size={24} weight='regular' color='#5C6170' />,
  listChecks: <ListChecks size={24} weight='regular' color='#5C6170' />,
  lightning: <Lightning size={24} weight='regular' color='#5C6170' />,
  usersThree: <UsersThree size={24} weight='regular' color='#5C6170' />,
  magnifyingGlass: <MagnifyingGlass size={24} weight='regular' color='#5C6170' />,
};

export type IconsTypes =
  | 'buildings'
  | 'calendarBlank'
  | 'envelope'
  | 'fileSearch'
  | 'hashStraight'
  | 'houseLine'
  | 'info'
  | 'lightning'
  | 'listChecks'
  | 'magnifyingGlass'
  | 'mapTrifold'
  | 'mapPin'
  | 'pencil'
  | 'phone'
  | 'timer'
  | 'user'
  | 'userList'
  | 'userRectangle'
  | 'usersThree'
  | 'whatsappLogo';
