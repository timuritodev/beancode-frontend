import { ICart } from "./Cart.types";

export interface IOrder {
  id: number;
  number: number;
  info: string;
  delivery: string;
}

export interface IOrderDetails {
  // id: number;
  userId: number;
  phone: string;
  email: string;
  address: string;
  city: string;
  sum: number;
  product_ids: string;
  product_titles: string;
  product_quantity: number;
}
export interface IOrderDetailsState {
  status: "idle" | "success" | "loading" | "failed";
  error: unknown;
  info: IOrderDetails[];
}

export interface IOrderProps {
  data: IOrder[];
}

export interface IOrderCardProps {
  data: ICart[];
}
