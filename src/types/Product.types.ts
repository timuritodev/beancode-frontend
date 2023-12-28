export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: string;
  weight: string;
  h_picture: string;
  v_picture: string;
  acidity: number;
  density: number;
}

export interface IProductState {
  status: "idle" | "success" | "loading" | "failed";
  error: string | undefined;
  products: Array<IProduct>;
}

export interface IProductbyIdState {
  status: "idle" | "success" | "loading" | "failed";
  error: string | undefined;
  product: IProduct;
}

export interface IProductProp {
  data: IProduct[];
}
