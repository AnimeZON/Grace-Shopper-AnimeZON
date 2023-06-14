import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

const initialState={
  lineItems: []
}

export const fetchCart = createAsyncThunk("fetchCart", async()=>{
  try{
    const token = window.localStorage.getItem('token');
    const response = await axios.get('/api/orders/cart', {
      headers: {
        authorization: token
      }
    });
    return response.data;
  }catch(err){
    console.log(err)
  }
})

export const removeItem = createAsyncThunk("removeItem", async(payload)=>{
  try{
    const token = window.localStorage.getItem('token');
    const response = await axios.put('/api/orders/cart', payload, {
      headers: {
        authorization: token
      }
    });
    return response.data;
  }catch(er){
    console.log(er);
  }
})

export const addItem = createAsyncThunk("addItem", async(payload)=>{
  try{
    const token = window.localStorage.getItem('token');
    const response = await axios.post('/api/orders/cart', payload, {
      headers:{
        authorization: token
      }
    });
    return response.data;
  }catch(er){
    console.log(er);
  }
})

export const updateItem = createAsyncThunk("updateItem", async(payload)=>{
  try{
    console.log(payload)
    const token = window.localStorage.getItem('token');
    const response = await axios.put('/api/orders/item', payload, {
      headers:{
        authorization: token
      }
    });
    return response.data;
  }catch(er){
    console.log(er);
  }
})

const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(fetchCart.fulfilled, (state, action)=>{
      return action.payload;
    }),
    builder.addCase(removeItem.fulfilled, (state, action) => {
      return action.payload;
    }),
    builder.addCase(addItem.fulfilled, (state, action ) => {
      return action.payload;
    }),
    builder.addCase(updateItem.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export default cartSlice.reducer;
