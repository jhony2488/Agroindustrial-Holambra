export interface  Table {
  id: string | number;
  name: string;
  email: string;
  document: string;
  phone: string;
  address: string;
}

export interface Props {
  tableHead: string[];
  TableContent: Table[];
  openModal: ()=>void;
}
