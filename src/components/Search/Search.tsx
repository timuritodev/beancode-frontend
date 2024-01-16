import "./Search.css";
import { useAppSelector } from "../../services/typeHooks";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../services/typeHooks";
import { getProductbyidApi } from "../../services/redux/slices/productbyid/productbyid";
// import { getProductsApi } from "../../services/redux/slices/product/product";
import { IProduct } from "../../types/Product.types";
import img from "../../images/product.jpg";

const Search = ({
  isOpenSearch,
  values,
  isClose,
}: {
  isOpenSearch: boolean;
  values: string;
  isClose: () => void;
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cards = useAppSelector((state) => state.products.products);
  const [isFiltredCards, setIsFiltredCards] = useState(false);

//   useEffect(() => {
//     dispatch(getProductsApi());
//   }, [dispatch, values]);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(values.toLowerCase())
  );

  useEffect(() => {
    if (filteredCards?.length === 0) {
      setIsFiltredCards(true);
    } else {
      setIsFiltredCards(false);
    }
  }, [filteredCards?.length, values]);

  const handleClick = (id: number) => {
    navigate("/product-page");
    dispatch(getProductbyidApi(id));
    isClose();
    // window.scrollTo(0, 0);
  };

  return (
    <div className={`search ${isOpenSearch && "search_open"}`}>
      <div className="search__cards" id="search__cards">
        {!isFiltredCards ? (
          filteredCards?.slice(0, 5).map((item: IProduct) => (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="search__card"
            >
              <img className="search__card-poster" src={img} alt="" />
              <article className="search__card-desc">
                <p className="search__card-name">{item.title}</p>
                <div className="search__card-info">
                  <p className="search__card-year">{item.price} ₽</p>
                  <p className="search__card-year">{item.weight}</p>
                </div>
              </article>
            </div>
          ))
        ) : (
          <p className="search__card-none">
            По вашему запросу ничего не найдено
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
