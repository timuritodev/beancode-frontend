import { useState } from "react";
import { IProduct } from "../../types/Product.types";
import "./Product.css";
import img from "../../images/product.jpg";
import { useNavigate } from "react-router";
import { getProductbyidApi } from "../../services/redux/slices/productbyid/productbyid";
import { useAppDispatch } from "../../services/typeHooks";
import { MinusPlusButtons } from "../MinusPlusButtons/MinusPlusButtons";

export const Product = ({ data }: { data: IProduct }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedPrice, setSelectedPrice] = useState(data.price);
  const [selectedWeight, setSelectedWeight] = useState(data.weight);

  const handleClickImage = () => {
    navigate("/product-page");
    dispatch(getProductbyidApi(data.id));
  };

  const handleChange = (price: string, weight: string) => {
    setSelectedPrice(price);
    setSelectedWeight(weight);
  };

  //   const handleWeightChange = (weight: string) => {
  //     setSelectedWeight(weight);
  //   };

  console.log(selectedPrice,213123)
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
          <div className="product__price__wrapper">
            <div
              className={`product__price ${
                selectedPrice === data.price ? "" : "not-selected"
              }`}
              onClick={() => handleChange(data.price, data.weight)}
            >
              <p className="product__price">{data.price} ₽/</p>
              <p className="product__weight"> {data.weight}</p>
            </div>
            <div
              className={`product__price ${
                selectedPrice === data.low_price ? "" : "not-selected"
              }`}
              onClick={() => handleChange(data.low_price, data.low_weight)}
            >
              <p className="product__price">{data.low_price} ₽/</p>
              <p className="product__weight"> {data.low_weight}</p>
            </div>
          </div>
          <MinusPlusButtons data={data} product_price={selectedPrice} product_weight={selectedWeight}/>
        </div>
      </div>
    </div>
  );
};
