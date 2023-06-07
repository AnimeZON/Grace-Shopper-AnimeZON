import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchUsers = createAsyncThunk("fetchUsers", async()=>{
  try{
    const response = await axios.get('/api/users');
    return response.data;
  }catch(err){
    console.log(err)
  }
})

const usersSlice = createSlice({
  name:"user",
  initialState: [],
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(fetchUsers.fulfilled, (state, action)=>{
      return action.payload;
    })
  }
})

export default usersSlice.reducer;