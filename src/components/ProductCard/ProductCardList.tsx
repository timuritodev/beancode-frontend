import { FC } from "react";
import { ProductCard } from "./ProductCard";
import { ICart } from "../../types/Cart.types";

interface ProductCardListProps {
  data: ICart[];
}

export const ProductCardList: FC<ProductCardListProps> = ({ data }) => {
  const countProducts = (products: ICart[]) => {
    const productCount: Record<string, number> = {};
    products.forEach((product) => {
      const productPrice = product.price;
      productCount[productPrice] = (productCount[productPrice] || 0) + 1;
    });
    return productCount;
  };

  const productCounts = countProducts(data);

  const uniqueData = Array.from(new Set(data.map((item) => item.price))).map(
    (price) => {
      const product = data.find((item) => item.price === price);
      return {
        ...product,
        count: productCounts[price],
      };
    }
  );

  return (
    <div className="product-card-list">
      {uniqueData.length !== 0 &&
        uniqueData.map((item) => (
          <ProductCard key={item.key} data={item as ICart} count={item.count} />
        ))}
    </div>
  );
};
