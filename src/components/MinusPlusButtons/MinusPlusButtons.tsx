import "./MinusPlusButtons.css";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { selectUser } from "../../services/redux/slices/user/user";
import minus from "../../images/minus_white.svg";
import plus from "../../images/plus_white.svg";
import { IProduct } from "../../types/Product.types";
import { FC } from "react";
import {
    addToCartApi,
    deleteFromCartApi,
} from "../../services/redux/slices/cart/cart";

interface MinusPlusButtonsProps {
    data: IProduct;
    product_price: string;
    product_weight: string;
}

export const MinusPlusButtons: FC<MinusPlusButtonsProps> = ({ data, product_price, product_weight }) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);

    const cartproduct = useAppSelector(state => state.cart.cart);

    const userId = user.id;
    const productId = data.id;

    const productCountInCart = cartproduct.filter(item => item.id === productId).length;

    const handleClickPlus = () => {
        dispatch(addToCartApi({ userId, productId, product_price, product_weight }));
    };

    const handleClickMinus = () => {
        dispatch(deleteFromCartApi({ userId, productId, product_price, product_weight }));
    };

    return (
        <>
            {productCountInCart === 0 ? <button
                type="submit"
                className="product__button"
                onClick={() => dispatch(addToCartApi({ userId, productId, product_price, product_weight }))}
            >
                В корзину
            </button> : <div className="minus-plus__count-container">
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
            }
        </>

    );
};
