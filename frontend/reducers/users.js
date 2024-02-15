import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: {token: null, username: null, firstname: null},
};

export const usersSlice = createSlice({
 name: 'user',
    
  initialState,
 reducers: {
   login: (state, action) => {
     state.value.token = action.payload.token;
     state.value.username = action.payload.username;
     state.value.firstname = action.payload.firstname;
   },
   logout: (state) => {
    state.value.token = null;
    state.value.firstname = null;
    state.value.username = null;
   }
 },
});

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;