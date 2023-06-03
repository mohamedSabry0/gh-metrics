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
  extraReducers(builder) {
    builder
      .addCase(fetchDetails.fulfilled, (state, { payload }) => ({
        ...state,
        details: payload,
        status: 'succeeded',
      }))
      .addCase(fetchDetails.pending, (state) => ({
        ...state,
        status: 'loading',
      }));
  },
});

export default detailsSlice.reducer;
