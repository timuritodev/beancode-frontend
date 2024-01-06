import { IProduct } from "./Product.types";

export interface ICartData {
    userId: number;
    productId: number;
    product_price?: string;
    product_weight?: string;
}

export interface ICartState {
    status: "idle" | "success" | "loading" | "failed";
    error: unknown;
    cart: IProduct[],
}