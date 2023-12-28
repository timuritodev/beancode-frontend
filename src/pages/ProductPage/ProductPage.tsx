import "./ProductPage.css";
import { useAppSelector } from "../../services/typeHooks";
import img from "../../images/product.jpg";

export const ProductPage = () => {
  const product = useAppSelector((state) => state.productbyid.product);

  return (
    <div className="products">
      <div className="products__container">
        <div className="products__info__container">
          <h2 className="products__title">{product.title}</h2>
          <p className="products__description">{product.description}</p>
          <div className="products__wrapper">
            <div className="grains__container">
              <div className="products__grains">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`grain ${
                      index < product.acidity ? "filled" : "empty"
                    }`}
                  ></span>
                ))}
              </div>
              <p className="products__info">Кислотность</p>
            </div>
            <div className="grains__container">
              <div className="products__grains">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`grain ${
                      index < product.density ? "filled" : "empty"
                    }`}
                  ></span>
                ))}
              </div>
              <p className="products__info">Плотность</p>
            </div>
          </div>
        </div>
        <div className="products__info__container">
          <img className="products__image" src={img} alt={product.h_picture} />
          <div className="products__wrapper">
            <div className="products__price__container">
              <p className="products__price">{product.price} ₽&nbsp;</p>
              <p className="products__weight"> {product.weight}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
