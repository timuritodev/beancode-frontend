import { IProduct } from "../../types/Product.types";
import { FC } from "react";
import { ProductCard } from "./ProductCard";

interface ProductCardListProps {
  data: IProduct[];
}

export const ProductCardList: FC<ProductCardListProps> = ({ data }) => {

  const countProducts = (products: IProduct[]) => {
    const productCount: Record<number, number> = {};
    products.forEach((product) => {
      const productId = product.id;
      productCount[productId] = (productCount[productId] || 0) + 1;
    });
    return productCount;
  };

  const productCounts = countProducts(data);

  const uniqueData = Array.from(new Set(data.map((item) => item.id))).map(
    (id) => {
      const product = data.find((item) => item.id === id);
      return {
        ...product,
        count: productCounts[id],
      };
    }
  );

  return (
    <div className="product-card-list">
      {uniqueData.length !== 0 &&
        uniqueData.map((item) => (
          <ProductCard
            key={item.id}
            data={item as IProduct}
            count={item.count}
          />
        ))}
    </div>
  );
};
