import { createSlice } from '@reduxjs/toolkit';
import fetchDetails from './detailsThunk';

const initialState = {
  details: [],
  status: 'idle',
};
// TODO: Add different states for loading, error, etc.

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchDetails.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.details = payload;
      state.status = 'succeeded';
    },
    [fetchDetails.pending]: (state) => {
      state.status = 'loading';
    },
  },
});

export default detailsSlice.reducer;
