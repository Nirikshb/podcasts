import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    podcasts: [], // Initial state with an empty array for podcasts
};

const podcastSlice = createSlice({
    name: "podcasts", // Slice name for Redux DevTools
    initialState, // Initial state for the slice
    reducers: {
        setPodcasts: (state, action) => {
            state.podcasts = action.payload; // Update podcasts with payload data
        },
    },
});

export const { setPodcasts } = podcastSlice.actions; // Action creator
export default podcastSlice.reducer; // Reducer function
