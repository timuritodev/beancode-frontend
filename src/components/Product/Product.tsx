import { IProduct } from "../../types/Product.types";
import "./Product.css";
import img from "../../images/product.jpg";
import { useAppDispatch } from "../../services/typeHooks";
import { useNavigate } from "react-router";
import { getProductbyidApi } from "../../services/redux/slices/productbyid/productbyid";

export const Product = ({ data }: { data: IProduct }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClickImage = () => {
    navigate("/product-page");
    dispatch(getProductbyidApi(data.id));
  };

  // Функция для создания массива элементов-зерен в зависимости от значения
  //   const renderGrains = (count: number) => {
  //     const grains = [];
  //     for (let i = 0; i < count; i++) {
  //       grains.push(<span className="grain" key={i}></span>);
  //     }
  //     return grains;
  //   };

  return (
    <div className="product">
      <div className="product__container">
        <img
          className="product__image"
          src={img}
          alt={data.h_picture}
          onClick={handleClickImage}
        />
        <h2 className="product__title">{data.title}</h2>
        <p className="product__description">{data.description}</p>

        <div className="product__wrapper">
          <div className="grains__container">
            <div className="product__grains">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`grain ${
                    index < data.acidity ? "filled" : "empty"
                  }`}
                ></span>
              ))}
            </div>
            <p className="product__info">Кислотность</p>
          </div>
          <div className="grains__container">
            <div className="product__grains">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`grain ${
                    index < data.density ? "filled" : "empty"
                  }`}
                ></span>
              ))}
            </div>
            <p className="product__info">Плотность</p>
          </div>
        </div>
        <div className="product__wrapper">
          <div className="product__price__container">
            <p className="product__price">{data.price} ₽/</p>
            <p className="product__weight"> {data.weight}</p>
          </div>

          <button type="submit" className="product__button">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};
