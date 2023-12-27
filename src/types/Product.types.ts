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

// export interface ICompilationsTwo {
// 	id?: number;
// 	title: string;
// 	description?: string;
// 	movies: IMovieCard[];
// }

export interface IProductProp {
	data: IProduct[];
}
