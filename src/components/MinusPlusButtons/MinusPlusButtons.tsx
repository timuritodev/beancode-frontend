import "./MinusPlusButtons.css";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { selectUser } from "../../services/redux/slices/user/user";
import minus from "../../images/minus_white.svg";
import plus from "../../images/plus_white.svg";
import { IProduct } from "../../types/Product.types";
import { FC, useEffect, useState } from "react";
import {
  addToCartApi,
  deleteFromCartApi,
} from "../../services/redux/slices/cart/cart";
import { PopupChanges } from "../Popups/PopupChanges";
import { PopupErrorAdd } from "../Popups/PopupErrorAdd";

interface MinusPlusButtonsProps {
  data: IProduct;
  product_price: string;
  product_weight: string;
}

export const MinusPlusButtons: FC<MinusPlusButtonsProps> = ({
  data,
  product_price,
  product_weight,
}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const cartproduct = useAppSelector((state) => state.cart.cart);

  const userId = user.id;
  const productId = data.id;

  const [isSavedPopupOpened, setIsSavedPopupOpened] = useState<boolean>(false);

  const productCountInCart = cartproduct.filter(
    (item) => item.id === productId
  ).length;

  const handleClickPlus = () => {
    dispatch(
      addToCartApi({ userId, productId, product_price, product_weight })
    );
  };

  const handleClickMinus = () => {
    dispatch(
      deleteFromCartApi({ userId, productId, product_price, product_weight })
    );
  };

  const handleClickButton = () => {
    if (user.token) {
      dispatch(
        addToCartApi({ userId, productId, product_price, product_weight })
      );
    } else {
      setIsSavedPopupOpened(true);
    }
  };

  useEffect(() => {
    setIsSavedPopupOpened(false);
  }, []);

  return (
    <>
      {productCountInCart === 0 ? (
        <button
          type="submit"
          className="product__button"
          onClick={handleClickButton}
        >
          В корзину
        </button>
      ) : (
        <div className="minus-plus__count-container">
          <button
            className="minus-plus__button minus-plus__button_minus"
            onClick={handleClickMinus}
          >
            <img className="minus-plus__button__img_minus" src={minus} />
          </button>
          <p className="minus-plus__count">{productCountInCart}</p>
          <button
            className="minus-plus__button minus-plus__button_plus"
            onClick={handleClickPlus}
          >
            <img className="minus-plus__button__img_plus" src={plus} />
          </button>
        </div>
      )}
      <PopupErrorAdd
        isOpened={isSavedPopupOpened}
        setIsOpened={setIsSavedPopupOpened}
      />
    </>
  );
};
