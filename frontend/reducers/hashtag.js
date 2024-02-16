import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: false,
};

export const hashtagsSlice = createSlice({
 name: 'hashtag',
                
  initialState,
 reducers: {
   update_hashtag: (state) => {
    state.value = !state.value;
   }
 },
});

export const { update_hashtag } = hashtagsSlice.actions;
export default hashtagsSlice.reducer;