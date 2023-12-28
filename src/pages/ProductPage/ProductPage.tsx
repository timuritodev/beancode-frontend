import "./ProductPage.css";
import { useAppSelector } from "../../services/typeHooks";
import img from "../../images/product.jpg";

export const ProductPage = () => {
  const product = useAppSelector((state) => state.productbyid.product);

  return (
    <div className="product">
      <div className="product__container">
        <img
          className="product__image"
          src={img}
          alt={product.h_picture}
        />
        <h2 className="product__title">{product.title}</h2>
        <p className="product__description">{product.description}</p>
        <div className="product__wrapper">
          <p className="product__info">Кислотность</p>
          <p className="product__info">Плотность</p>
        </div>
        <div className="product__wrapper">
          <div className="product__price__container">
            <p className="product__price">{product.price} ₽/</p>
            <p className="product__weight"> {product.weight}</p>
          </div>

          <button type="submit" className="product__button">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};
