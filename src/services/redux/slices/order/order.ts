/* eslint-disable @typescript-eslint/no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCreateOrder } from "./orderAPI";
import {
  IOrderDetails,
  IOrderDetailsState,
} from "../../../../types/Order.types";

export const createOrderApi = createAsyncThunk(
  "@@order/createOrder",
  async (data: IOrderDetails, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchCreateOrder(data);
      const json = await response.json();
      return fulfillWithValue(json);
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

const initialState: IOrderDetailsState = {
  status: "idle",
  error: null,
  info: [],
};

const orderSlice = createSlice({
  name: "@@order",
  initialState,
  reducers: {
    resetOrders: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderApi.fulfilled, (state, action) => {
        state.status = "success";
        state.info = [...state.info, action.payload];
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

export const { resetOrders } = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
