import { ICart } from "./Cart.types";

export interface IOrder {
  id: number;
  number: number;
  info: string;
  delivery: string;
}

export interface IOrderProps {
  data: IOrder[];
}

export interface IOrderCardProps {
  data: ICart[];
}
