export type NavItem = {
  title: string;
  link: string;
  isThisPage: boolean;
  iconSize: number;
};

export interface NavBar {
  listNav: NavItem[];
  isOpenNav?: boolean;
}

export interface Icons {
  iconSize: number;
  isThisPage: boolean;
  title: string;
  link?: string;
}
