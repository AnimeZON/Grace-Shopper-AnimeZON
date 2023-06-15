import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchReviews = createAsyncThunk("fetchReviews", async () => {
    try {
        const response = await axios.get('api/reviews');
        return response.data;
    } catch (err) {
        console.log(err);
    }
})

export const createReview = createAsyncThunk("createReview", async ({product, score}) => {
    try {
        const token = window.localStorage.getItem('token');
        const response = await axios.post(`/api/reviews`, {product, score}, {
            headers: {
                authorization: token
            }
        });
        console.log(response)
        return response.data;
    } catch (err) {
        console.log(err)
    }
})


export const updateReview = createAsyncThunk("updateReview", async (review) => {
    try {
        const response = await axios.put(`/api/reviews/${review.id}`, review, {
            headers: {
                authorization: window.localStorage.getItem('token')
            }
        });
        return response.data;
    } catch (err) {
        console.log(err)
    }
})


const reviewsSlice = createSlice({
    name: "reviews",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchReviews.fulfilled, (state, action) => {
            return action.payload;
        });
        builder.addCase(updateReview.fulfilled, (state, action) => {
            return state.map(review => review.id === action.payload.id ? action.payload : review);
        });
        builder.addCase(createReview.fulfilled, (state, action) => {
            return [...state, action.payload];
        })
    }
})

export default reviewsSlice.reducer;