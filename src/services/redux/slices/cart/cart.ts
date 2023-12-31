/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAddToCart, fetchDeleteFromCart } from "./cartAPI";
import { ICartData, ICartState } from "../../../../types/Cart.types";

export const addToCartApi = createAsyncThunk(
  "@@cart/addToCart",
  async (data: ICartData, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchAddToCart(data);
      const json = await response.json();
      // console.log(fulfillWithValue(json))
      // console.log(fulfillWithValue(json.acess))
      // return fulfillWithValue(json);
      return json;
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
      // console.log(fulfillWithValue(json))
      // console.log(fulfillWithValue(json.acess))
      // return fulfillWithValue(json);
      return json;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

// export const getUserInfo = createAsyncThunk(
//   "@@user/getUserInfo",
//   async (token: string, { fulfillWithValue, rejectWithValue }) => {
//     // console.log(token, 999);
//     try {
//       const response = await fetchGetUserInfo(token);
//       const json = await response.json();
//       //   console.log(json, 'data');
//       const userData = {
//         name: json.name,
//         surname: json.surname,
//         phone: json.phone,
//         email: json.email,
//         address: json.address,
//       };

//       return fulfillWithValue(userData);
//       //   return fulfillWithValue(json);
//     } catch (error: unknown) {
//       return rejectWithValue(error);
//     }
//   }
// );

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
        // state.cart = action.payload.product;
        state.cart = [...state.cart, action.payload.product];
      })
      .addCase(deleteFromCartApi.fulfilled, (state, action) => {
        state.status = "success";
        state.cart = state.cart.filter((item) => {
          console.log(item, item.id, 999);
          return item.id !== action.payload.productId;
        });
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
