import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchDeliver } from "./deliveryAPI";
import {
  IDeliverDataRes,
  IDeliveryData,
} from "../../../../types/Deliver.types";

export const deliverApi = createAsyncThunk(
  "@@deliver/register",
  async (data: IDeliveryData, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchDeliver(data);

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const text = await response.text();

      console.log("Server response:", text);

      const json = JSON.parse(text);

      return fulfillWithValue(json);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An error occurred");
      }
    }
  }
);

export interface IDeliveryState {
  status: "idle" | "success" | "loading" | "failed";
  error: unknown;
  data: IDeliverDataRes;
}

const initialState: IDeliveryState = {
  status: "idle",
  error: null,
  data: {
    entity: {
      uuid: "",
    },
    requests: [
      {
        request_uuid: "",
        type: "",
        state: "",
        date_time: "",
        errors: [],
        warnings: [],
      },
    ],
  },
};

const deliverSlice = createSlice({
  name: "@@deliver",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deliverApi.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
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

export const deliverReducer = deliverSlice.reducer;
