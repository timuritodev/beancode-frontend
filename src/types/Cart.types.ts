import { IProduct } from "./Product.types";

export interface ICartData {
    userId: number;
    productId: number;
}

export interface ICartState {
    status: "idle" | "success" | "loading" | "failed";
    error: unknown;
    // cart: {
    //     userId: number,
    //     productsId: [],
    // }
    cart: IProduct[],
}