import "./CatalogPage.css"
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { getProductsApi } from "../../services/redux/slices/product/product";
import { ProductList } from "../../components/Product/ProductList";
import { IProduct } from "../../types/Product.types";
import { getCartApi } from "../../services/redux/slices/cart/cart";
import { selectUser } from "../../services/redux/slices/user/user";

export const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  
  const products = useAppSelector((state) => state.products.products);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    dispatch(getProductsApi());
    dispatch(getCartApi(user.id));
  }, [dispatch, user.id]);

  useEffect(() => {
    const sortedProducts = [...products];

    switch (sortOption) {
      case "name":
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "maxPrice":
        sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "minPrice":
        sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "acidity":
        sortedProducts.sort((a, b) => a.acidity - b.acidity);
        break;
      case "density":
        sortedProducts.sort((a, b) => a.density - b.density);
        break;
      default:
        break;
    }

    setFilteredProducts(sortedProducts);
  }, [products, sortOption]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  return (
    <section className="catalog">
      <div className="catalog__container">
        <h1 className="catalog__title">Интернет-магазин</h1>
        <form className="catalog__form">
            <select
              id="sortDropdown"
              className="catalog__dropdown"
              name="sortOption"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="">Выберите опцию сортировки</option>
              <option value="name">Названию (в алфавитном порядке)</option>
              <option value="maxPrice">Макс. Цене (по убыванию)</option>
              <option value="minPrice">Мин. Цене (по возрастанию)</option>
              <option value="acidity">Кислотности</option>
              <option value="density">Плотности</option>
            </select>
        </form>
        <ProductList data={filteredProducts} />
      </div>
    </section>
  );
};
