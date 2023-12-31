import "./ProductCard.css";
// import { useAppSelector } from "../../services/typeHooks";
import { IProduct } from "../../types/Product.types";
import img from "../../images/product.jpg";

export const ProductCard = ({ data }: { data: IProduct }) => {
  // const cart = useAppSelector((state) => state.cart.cart);

  // const handleClickButton = () => {
  //     navigate('/cart-page')
  // }
  return (
    <div className="product-card">
      <img className="product-card__img" src={img} />
      <div className="product-card__text-container">
        <h3 className="product-card__title">{data.title}</h3>
        <p className="product-card__text">{data.weight}</p>
      </div>
      <p className="product-card__price">{data.price}</p>
    </div>
  );
};
