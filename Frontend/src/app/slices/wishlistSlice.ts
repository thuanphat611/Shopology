import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { WishListService } from "@/api/wishList";
import { apiErrorHandler } from "@/utils/functions";

export interface WishListState {
  amount: number;
  status: "idle" | "loading" | "failed";
}

const initialState: WishListState = {
  amount: 0,
  status: "idle",
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishListCount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWishListCount.fulfilled, (state, action) => {
        state.status = "idle";
        state.amount = action.payload;
      })
      .addCase(fetchWishListCount.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const fetchWishListCount = createAsyncThunk(
  "wishlist/fetchCount",
  async () => {
    try {
      const data = await WishListService.getCount();

      return data.count;
    } catch (error) {
      apiErrorHandler(error);
    }
  }
);

export default wishlistSlice.reducer;

export const selectWishListCount = (state: RootState) => state.wishlist.amount;
