import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchOrders = createAsyncThunk("fetchOrders", async()=>{
  try{
    const token = window.localStorage.getItem('token');
    const response = await axios.get('/api/orders', {
      headers: {
        authorization: token
      }
    });
    console.log(response.data);
    return response.data;
  }catch(err){
    console.log(err)
  }
})

export const createOrder = createAsyncThunk("createOrder", async()=>{
  try{
    const token = window.localStorage.getItem('token');
    const response = await axios.post('/api/orders', null, {
      headers: {
        authorization: token
      }
    });
    return response.data;
  }catch(err){
    console.log(err)
  }
})

const ordersSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(fetchOrders.fulfilled, (state, action)=>{
      return action.payload;
    });
    builder.addCase(createOrder.fulfilled, (state, action)=>{
      return [...state, action.payload];
    })
  }
})

export default ordersSlice.reducer;
