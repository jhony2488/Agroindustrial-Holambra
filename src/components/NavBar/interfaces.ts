export type NavItem = {
  title: string;
  link: string;
  iconSize: number;
};

export interface NavBar {
  listNav: NavItem[];
  imageProfile?: string;
  nameUser?: string;
}


export interface Icons {
  iconSize: number;
  title: string;
}
