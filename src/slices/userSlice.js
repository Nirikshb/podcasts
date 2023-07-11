//manage all data related to user. Main base for info on user data
//a unifed data which will go to store.js 

//already an inbuilt import from redux
import {createSlice} from "@reduxjs/toolkit";

//create an initialState 
const initialState = {
    user : null,
};

// Define a Redux slice called "userSlice"
const userSlice = createSlice({
    name: "user", // Name of the slice
    initialState, // Initial state of the slice
    reducers: {
      // Action creator to set the user
      setUser: (state, action) => {
        state.user = action.payload; // Update the user state with the payload
      },
      // Action creator to clear the user
      clearUser: (state) => {
        state.user = null; // Clear the user state
      },
    },
  });
  
  // Export the action creators as named exports
  export const { setUser, clearUser } = userSlice.actions;
  
  // Export the reducer as the default export
  export default userSlice.reducer;