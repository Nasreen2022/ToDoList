import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeather } from '../api';

export const getWeather = createAsyncThunk('weather/getWeather', async (city) => {
  const response = await fetchWeather(city);
  return response.data;
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: { data: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
