import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProducts = createAsyncThunk("fetchProducts", async()=>{
  try{
    const response = await axios.get('/api/products');
    return response.data;
  }catch(err){
    console.log(err)
  }
})

export const updateSingleProduct = createAsyncThunk("updateSingleProduct", async ({ data, id }) => {
  try {
    console.log(id);
    const response = await axios.put(`/api/products/${id}`, data);
    return response.data;
  } catch (err) {
    console.log(err)
  }
});

const productsSlice = createSlice({
  name:"product",
  initialState: [],
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(fetchProducts.fulfilled, (state, action)=>{
      return action.payload;
    });
    builder.addCase(updateSingleProduct.fulfilled, (state, action) => {
      return state.map(product => product.id == action.payload.id ? action.payload: product)
    });
  }
})

export default productsSlice.reducer;