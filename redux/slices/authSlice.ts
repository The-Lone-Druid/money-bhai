import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface AuthState {
  jwtToken: string | null;
  id: number | string | null;
  customerId: number | string | null;
  data: {} | any | null;
}

const initialState: AuthState = {
  jwtToken: null,
  id: null,
  customerId: null,
  data: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (
      state,
      action: PayloadAction<{
        jwtToken: string | null;
        id: string | number | null;
        data: {} | null;
        customerId: string | number | null;
      }>
    ) => {
      state.jwtToken = action.payload.jwtToken;
      state.id = action.payload.id;
      state.customerId = action.payload.customerId;
      state.data = action.payload;
    },
    resetAuth: (state) => {
      state.jwtToken = null;
      state.id = null;
      state.data = null;
      state.customerId = null;
    }
  }
});

export const { setAuth, resetAuth } = authSlice.actions;

export const authJwtToken = (state: RootState) => state.auth.jwtToken;
export const authId = (state: RootState) => state.auth.id;
export const authData = (state: RootState) => state.auth.data;

export default authSlice.reducer;
