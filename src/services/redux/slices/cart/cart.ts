/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchAddToCart,
  fetchDeleteAll,
  fetchDeleteFromCart,
  fetchGetCart,
} from "./cartAPI";
import { ICartData, ICartState } from "../../../../types/Cart.types";

export const addToCartApi = createAsyncThunk(
  "@@cart/addToCart",
  async (data: ICartData, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchAddToCart(data);
      const json = await response.json();
      return fulfillWithValue(json);
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

export const deleteFromCartApi = createAsyncThunk(
  "@@cart/deleteFromCart",
  async (data: ICartData, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchDeleteFromCart(data);
      const json = await response.json();
      return fulfillWithValue(json);
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

export const deleteAllApi = createAsyncThunk(
  "@@cart/deleteAll",
  async (userId: number, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchDeleteAll(userId);
      const json = await response;
      return fulfillWithValue(json);
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

// export const getCartApi = createAsyncThunk(
//   "@@cart/getCart",
//   async (userId: number, { fulfillWithValue, rejectWithValue }) => {
//     try {
//       const response = await fetchGetCart(userId);
//       // const json = await response;
//       return fulfillWithValue(response);
//     } catch (error: unknown) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const getCartApi = createAsyncThunk(
  "@@cart/getCart",
  async (userId: number, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchGetCart(userId);
      const cartWithKeys = response.map(item => ({ ...item, key: generateUniqueKey(item.title, item.weight, item.id) }));
      return fulfillWithValue(cartWithKeys);
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

const generateUniqueKey = (title:string, weight:string, id:number) => {
  return `${title}_${weight}_${id}`;
};

const initialState: ICartState = {
  status: "idle",
  error: null,
  cart: [],
};

const cartSlice = createSlice({
  name: "@@cart",
  initialState,
  reducers: {
    resetCart: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartApi.fulfilled, (state, action) => {
        state.status = "success";
        state.cart = [...state.cart, action.payload];
      })
      .addCase(deleteFromCartApi.fulfilled, (state, action) => {
        state.status = "success";
        const indexToDelete = state.cart.findIndex(
          (item) => item.price === action.payload.price
        );
        if (indexToDelete !== -1) {
          state.cart = [
            ...state.cart.slice(0, indexToDelete),
            ...state.cart.slice(indexToDelete + 1),
          ];
        }
      })
      .addCase(deleteAllApi.fulfilled, (state) => {
        state.status = "success";
        state.cart = [];
      })
      .addCase(getCartApi.fulfilled, (state, action) => {
        state.status = "success";
        state.cart = action.payload;
      })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = "failed";
          state.error = action.payload.statusText;
        }
      );
  },
});

export const { resetCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
