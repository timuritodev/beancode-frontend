import "./Order.css";
// import { useNavigate } from "react-router";
// import { useAppDispatch } from "../../services/typeHooks";
import {  IOrderDetails } from "../../types/Order.types";
import { Link } from "react-router-dom";

export const Order = ({ data }: { data: IOrderDetails }) => {
  //   const dispatch = useAppDispatch();
  //   const navigate = useNavigate();

  return (
    <div className="order">
      <p className="order__number">№{data.orderNumber}</p>
      {/* <div className="order__text_wrapper">
        <p className="order__info">{data.info}</p>
        <p className="order_delivery">{data.delivery}</p>
      </div> */}
      <Link className="order__link" to="/">
        Детали
      </Link>
      <Link className="order__link" to="/">
        Оставить отзыв
      </Link>
    </div>
  );
};
