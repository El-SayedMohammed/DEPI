import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductDetails = createAsyncThunk("productDetails/getProductDetails", async (id) => {
  let { data } = await axios.get(`https://dummyjson.com/products/${id}`);
  return data;
});

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    product: null,
    isLoading: false,
    isError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetails.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getProductDetails.rejected, (state) => {
        state.isLoading = false;
        state.isError = "Error Fetching Product Details";
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoading = false;
        state.isError = null;
      }); 
  },
});

export default productDetailsSlice.reducer;
