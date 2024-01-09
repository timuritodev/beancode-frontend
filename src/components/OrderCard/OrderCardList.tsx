import "./OrderCard.css";
import { FC } from "react";
import { IOrderCardProps } from "../../types/Order.types";
import { OrderCard } from "./OrderCard";
import { ICart } from "../../types/Cart.types";

export const OrderCardList: FC<IOrderCardProps> = ({ data }) => {
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
    <div className="order-cardlist">
      {uniqueData.length !== 0 &&
        uniqueData.map((item) => (
          <OrderCard key={item.id} data={item as ICart} count={item.count} />
        ))}
    </div>
  );
};


// export const OrderCardList: FC<IOrderCardProps> = ({ data }) => {
//   return (
//     <div className="order-cardlist">
//       {data.length !== 0 &&
//         data.map((item) => <OrderCard key={item.id} data={item} />)}
//     </div>
//   );
// };
