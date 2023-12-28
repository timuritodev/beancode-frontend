import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../services/typeHooks";
import { getProductsApi } from "../../services/redux/slices/product/product";
import { ProductList } from "../../components/Product/ProductList";
import { IProduct } from "../../types/Product.types";

export const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [filters, setFilters] = useState({
    title: "",
    minPrice: "",
    maxPrice: "",
    minWeight: "",
    maxWeight: "",
    minAcidity: "",
    maxAcidity: "",
    minDensity: "",
    maxDensity: "",
  });

  useEffect(() => {
    dispatch(getProductsApi());
  }, [dispatch]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const price = parseFloat(product.price);
      const weight = parseFloat(product.weight);

      return (
        (product.title.toLowerCase().includes(filters.title.toLowerCase()) ||
          filters.title === "") &&
        (price >= parseFloat(filters.minPrice) || filters.minPrice === "") &&
        (price <= parseFloat(filters.maxPrice) || filters.maxPrice === "") &&
        (weight >= parseFloat(filters.minWeight) || filters.minWeight === "") &&
        (weight <= parseFloat(filters.maxWeight) || filters.maxWeight === "") &&
        (product.acidity >= parseFloat(filters.minAcidity) || filters.minAcidity === "") &&
        (product.acidity <= parseFloat(filters.maxAcidity) || filters.maxAcidity === "") &&
        (product.density >= parseFloat(filters.minDensity) || filters.minDensity === "") &&
        (product.density <= parseFloat(filters.maxDensity) || filters.maxDensity === "")
      );
    })

    setFilteredProducts(filtered);
  }, [products, filters]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };
  

  return (
    <section className="catalog">
      <div className="catalog__container">
        <h1 className="catalog__title">Интернет-магазин</h1>
        <form>
          <label>
            Название:
            <input type="text" name="title" value={filters.title} onChange={handleFilterChange} />
          </label>
          <label>
            Мин. Цена:
            <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} />
          </label>
          <label>
            Макс. Цена:
            <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} />
          </label>
        </form>
        <ProductList data={filteredProducts} />
      </div>
    </section>
  );
};
