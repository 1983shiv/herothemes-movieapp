import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {getUser} from "./userAPI"

const initialState = {
  users: [],
  userstatus: ''
};


export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, action) => {
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    },
  },
  extraReducers: (builder) => {
    builder.
      addCase(fetchUserAsync.pending, (state) => {
        state.userstatus ='loading';
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.userstatus = 'complete';
        state.users = action.payload;
        console.log('action', action.payload)
        localStorage.setItem('user', action.payload.name)
      });
  }
});

export const fetchUserAsync = createAsyncThunk(
    'movie/getUser',
    async () => {
      const response = await getUser();
      return response;
    }
  );

export const selectUsers = (state) => state.users;
export const selectUserstatus = (state) => state.userstatus;
export const { updateUsers } = userSlice.actions;
export default userSlice.reducer;

