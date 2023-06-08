import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSingleProduct = createAsyncThunk("singleProduct", async(id) => {
  try {
    const {data} = await axios.get(`/api/products/${id}`);
    return data;
  } catch(err) {
    console.log(err)
  }
});

export const updateSingleProduct = createAsyncThunk("updateSingleProduct", async(product) => {
  const {data} = await axios.put(`/api/products/${product.id}`, product);
  return data;
})

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled,(state,action) => {
      return action.payload;
    });
    builder.addCase(updateSingleProduct.fulfilled, (state,action) => {
      return action.payload
    })
  },
});


export default singleProductSlice.reducer;


