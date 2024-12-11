import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { CartService } from "@/api/cart";
import { apiErrorHandler } from "@/utils/functions";

export interface CartState {
  amount: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CartState = {
  amount: 0,
  status: "idle",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartCount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartCount.fulfilled, (state, action) => {
        state.status = "idle";
        state.amount = action.payload;
      })
      .addCase(fetchCartCount.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const fetchCartCount = createAsyncThunk("cart/fetchCount", async () => {
  try {
    const data = await CartService.getCount();

    return data.count;
  } catch (error) {
    apiErrorHandler(error);
  }
});

export default cartSlice.reducer;

export const selectCartCount = (state: RootState) => state.cart.amount;
