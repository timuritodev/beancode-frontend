import "./SearchCard.css";
import { FC } from "react";
import { IProduct } from "../../types/Product.types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../services/typeHooks";
import { getProductbyidApi } from "../../services/redux/slices/productbyid/productbyid";

export interface SearchCardProps {
  data: IProduct;
  isClose: () => void;
}

export const SearchCard: FC<SearchCardProps> = ({ data, isClose }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate("/product-page");
    dispatch(getProductbyidApi(id));
    isClose();
    window.scrollTo(0, 0);
  };

  const backendBaseUrl = "https://bean-code.ru";

  const imageUrl = backendBaseUrl + data.h_picture;

  return (
    <div
      key={data.id}
      onClick={() => handleClick(data.id)}
      className="search__card"
    >
      <img className="search__card-poster" src={imageUrl} alt="" />
      <article className="search__card-desc">
        <p className="search__card-name">{data.title}</p>
        <div className="search__card-info">
          <p className="search__card-year">{data.price} ₽</p>
          <p className="search__card-year">{data.weight}</p>
        </div>
      </article>
    </div>
  );
};
