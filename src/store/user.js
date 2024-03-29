import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { createDispatchHook } from "react-redux";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const response = await axios.get('/api/users');
    return response.data;
  } catch (err) {
    console.log(err)
  }
})

export const addUser = createAsyncThunk("createuser", async ({ data }) => {
  try {
    const response = await axios.post('/api/users', data)
    return response.data;
  } catch (err) {
    console.log(err)
  }
})

export const updateUser = createAsyncThunk("updateUsers", async ({ data, id }) => {
  try {
    console.log(id);
    const response = await axios.put(`/api/users/${id}`, data);
    return response.data;
  } catch (err) {
    console.log(err)
  }
})

const usersSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      return action.payload;
    })
    builder.addCase(addUser.fulfilled, (state, action) => {
      return action.payload;
    })
  }
})

export default usersSlice.reducer;