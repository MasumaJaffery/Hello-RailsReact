import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGreetings = createAsyncThunk(
  'greetings/getGreetings',
  async () => {
    try {
      const response = await axios.get('/api/greetings');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
);

const initialState = {
  greetings: [],
  loading: false,
  hasErrors: false,
};

// Create a slice of the application state
const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getGreetings.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGreetings.fulfilled, (state, { payload }) => {
        state.greetings = payload;
        state.loading = false;
        state.hasErrors = false;
      })
      .addCase(getGreetings.rejected, (state) => {
        state.loading = false;
        state.hasErrors = true;
      });
  }
});

export default greetingsSlice.reducer;