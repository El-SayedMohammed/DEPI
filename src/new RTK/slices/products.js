import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  let { data } = await axios.get("https://dummyjson.com/products");
  return data.products;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = "Error Fetching Data";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.isError = null;
      });
  },
});

export default productsSlice.reducer;
 