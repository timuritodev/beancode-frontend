import { FC } from "react";
import "./ProductCard.css";
import img from "../../images/product.jpg";
import { IProduct } from "../../types/Product.types";

interface ProductCardProps {
  data: IProduct;
  count: number;
}

export const ProductCard: FC<ProductCardProps> = ({ data, count }) => {
  return (
    <div className="product-card">
      <img className="product-card__img" src={img} alt={data.title} />
      <div className="product-card__text-container">
        <h3 className="product-card__title">{data.title}</h3>
        <p className="product-card__text">{data.weight}</p>
      </div>
      <p className="product-card__price">{data.price}</p>
      {count > 1 && <p className="product-card__count">Count: {count}</p>}
    </div>
  );
};
