import { FC } from "react";
import "./ProductCard.css";
import img from "../../images/product.jpg";
import { IProduct } from "../../types/Product.types";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { addToCartApi, deleteFromCartApi } from "../../services/redux/slices/cart/cart";
import { selectUser } from "../../services/redux/slices/user/user";

interface ProductCardProps {
  data: IProduct;
  count: number;
}

export const ProductCard: FC<ProductCardProps> = ({ data, count }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const userId = user.id;
  const productId = data.id;

  const handleClickPlus = () => {
    dispatch(addToCartApi({ userId, productId }));
  };

  const handleClickMinus = () => {
    dispatch(deleteFromCartApi({userId, productId}));
  }
  return (
    <div className="product-card">
      <img className="product-card__img" src={img} alt={data.title} />
      <div className="product-card__text-container">
        <h3 className="product-card__title">{data.title}</h3>
        <p className="product-card__text">{data.weight}</p>
      </div>
      <div className="product-card__count-container">
        <button onClick={handleClickMinus}>-</button>
        <p className="product-card__count">{count}</p>
        <button onClick={handleClickPlus}>+</button>
      </div>
      <p className="product-card__price">{data.price}</p>
    </div>
  );
};
