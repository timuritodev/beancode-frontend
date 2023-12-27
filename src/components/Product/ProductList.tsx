import "./Product.css";
import { IProductProp } from "../../types/Product.types";
import { Product } from "./Product";
import { FC } from "react";

export const ProductList: FC<IProductProp> = ({ data }) => {
  return (
    <div className="productlist">
      {data.length !== 0 &&
        data.map((item) => <Product key={item.id} data={item} />)}
    </div>
  );
};
