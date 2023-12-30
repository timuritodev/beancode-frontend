import "./ProductCard.css";
import { IProductsProp } from "../../types/Product.types";
import { FC } from "react";
import { ProductCard } from "./ProductCard";

export const ProductCardList: FC<IProductsProp> = ({ data }) => {
  return (
    <div className="product-card-list">
      {data.length !== 0 &&
        data.map((item) => <ProductCard key={item.id} data={item} />)}
    </div>
  );
};
