import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSingleProduct = createAsyncThunk("singleProduct", async (id) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    return data;
  } catch (err) {
    console.log(err)
  }
});

export const updateSingleProduct = createAsyncThunk("updateSingleProduct", async ({ data, id }) => {
  try {
    console.log(id);
    const response = await axios.put(`/api/products/${id}`, data);
    return response.data;
  } catch (err) {
    console.log(err)
  }
});

export const createProductReview = createAsyncThunk("createProductReview", async ({ score, id }) => {
  try {
    const response = await axios.post(`/api/products/review/${id}`, score);
    return response.data;
  } catch (err) {
    console.log(err)
  }
});

export const fetchProductReview = createAsyncThunk("fetchProductReview", async ({ id }) => {
  try {
    const { data } = await axios.get(`/api/products/review/${id}`);
    return data;
  } catch (err) {
    console.log(err)
  }
});

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updateSingleProduct.fulfilled, (state, action) => {
      return action.payload
    });
    builder.addCase(createProductReview.fulfilled, (state, action) => {
      return action.payload
    });
    builder.addCase(fetchProductReview.fulfilled, (state, action) => {
      return action.payload
    });
  },
});


export default singleProductSlice.reducer;


