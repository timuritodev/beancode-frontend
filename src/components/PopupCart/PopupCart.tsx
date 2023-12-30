/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAppSelector } from '../../services/typeHooks';
import { FC } from 'react';
import './PopupCart.css'
import { ProductCardList } from '../ProductCard/ProductCardList';

interface PopupCartProps {
    isPopupOpen: boolean;
    switchPopupTrailer: () => void;
}


export const PopupCart: FC<PopupCartProps> = ({
    isPopupOpen,
    switchPopupTrailer,
}) => {
    const cartproducts = useAppSelector((state) => state.cart.cart);

    return (
        <div className={`popupTrailer ${isPopupOpen ? 'popupTrailer_opened' : ''}`}>
            <div className="popupTrailer__content">
                <ProductCardList data={cartproducts} />
            </div>
        </div>
    );
};

