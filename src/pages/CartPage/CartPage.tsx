import "./CartPage.css"
import { useAppSelector } from "../../services/typeHooks";
import { ProductList } from "../../components/Product/ProductList";

export const CartPage = () => {
  const cartproducts = useAppSelector((state) => state.cart.cart);

  return (
    <section className="catalog">
      <div className="catalog__container">
        <h1 className="catalog__title">Ваша корзина</h1>
        <ProductList data={cartproducts} />
      </div>
    </section>
  );
};
