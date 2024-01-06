import "./ProductPage.css";
import { useAppSelector } from "../../services/typeHooks";
import img from "../../images/product.jpg";
import { ProductsSlider } from "../../components/ProductsSlider/ProductsSlider";
// import { MinusPlusButtons } from "../../components/MinusPlusButtons/MinusPlusButtons";

export const ProductPage = () => {
  const product = useAppSelector((state) => state.productbyid.product);
  const products = useAppSelector((state) => state.products.products);

  const handleDropdownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Selected Option:", e.target.value);
  };

  return (
    <div className="products">
      <div className="products__container">
        <div className="products__container__wrapper">
          <div className="products__info__container">
            <h2 className="products__title">{product.title}</h2>
            <p className="products__description">{product.description}</p>
            <p className="product__big-description">
              {product.big_description}
            </p>
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
            <select
              id="dropdown"
              className="products__dropdown"
              onChange={() => handleDropdownChange}
            >
              <option value="option1">В зернах</option>
              <option value="option2">Опция 2</option>
              <option value="option3">Опция 3</option>
            </select>
          </div>
          <div className="products__info__container">
            <img
              className="products__image"
              src={img}
              alt={product.h_picture}
            />
            <div className="products__wrapper_2">
              <div className="products__price__container">
                <p className="products__price">{product.price} ₽&nbsp;</p>
                <p className="products__weight"> {product.weight}</p>
              </div>
              {/* <MinusPlusButtons data={product} /> */}
            </div>
          </div>
        </div>
        <h2 className="products__title_slider">Вам может понравиться</h2>
        <div className="products__slider__container">
          <ProductsSlider data={products} />
        </div>
      </div>
    </div>
  );
};
