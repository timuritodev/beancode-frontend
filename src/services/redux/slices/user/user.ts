/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSignUp, fetchSignIn, fetchGetUserInfo } from "./userApi";
import { IUser, ISignInData } from "../../../../types/Auth.types";

export interface IUserState {
  status: "idle" | "success" | "loading" | "failed";
  error: unknown;
  user: IUser;
}

export const signInUser = createAsyncThunk(
  "@@user/signIn",
  async (data: ISignInData, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchSignIn(data);
      const json = await response.json();
      // console.log(fulfillWithValue(json))
      // console.log(fulfillWithValue(json.acess))
      return fulfillWithValue(json);
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

export const signUpUser = createAsyncThunk(
  "@@user/signUp",
  async (data: IUser, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchSignUp(data);
      const responseData = { status: response.status, ok: response.ok };
      return fulfillWithValue(responseData);
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

export const getUserInfo = createAsyncThunk(
  "@@user/getUserInfo",
  async (token: string, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchGetUserInfo(token);
      const json = await response.json();
      console.log(json);
      return fulfillWithValue(json);
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

const initialState: IUserState = {
  status: "idle",
  error: null,
  user: {
    name: "",
    surname: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    token: "",
  },
};

const userSlice = createSlice({
  name: "@@user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    signOut: () => initialState,
    // signOut: (state, action) => {
    //   state.user = initialState.user;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = "success";
        state.user.token = action.payload;
      })
      .addCase(signUpUser.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.status = "success";
        state.user.name = action.payload.user.name;
        state.user.surname = action.payload.user.surname;
        state.user.phone = action.payload.user.phone;
        state.user.email = action.payload.user.email;
        state.user.address = action.payload.user.address;
      })
      //   .addCase(editUserInfo.fulfilled, (state, action) => {
      //     state.status = "success";
      //     state.user.nickname = action.payload.username;
      //     state.user.dateOfBirth = action.payload.date_of_birth;
      //     state.user.sex = action.payload.sex;
      //   })
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = "failed";
          state.error = action.payload.statusText;
        }
      );
  },
});

export const { setUser, signOut } = userSlice.actions;

export const userReducer = userSlice.reducer;

export const selectUser = (state: { user: IUserState }) => state.user.user;
export const selectUserStatus = (state: { user: IUserState }) =>
  state.user.status;
