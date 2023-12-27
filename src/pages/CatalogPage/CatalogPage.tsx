import "./CatalogPage.css";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { getProductsApi } from "../../services/redux/slices/product/product";
import { ProductList } from "../../components/Product/ProductList";
import { useEffect } from "react";

export const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProductsApi());
  }, [dispatch]);

  return (
    <section className="catalog">
      <div className="catalog__container">
        <ProductList data={products} />
      </div>
    </section>
  );
};
