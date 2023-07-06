import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=60&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en';
const FetchData = createAsyncThunk('Fetch Data', async () => {
  try {
    const response = await axios.get(url);
    const { data } = response;
    // console.log(data);
    return data;
  } catch (error) {
    throw new Error('Something went wrong! :', error);
  }
});

FetchData();

const CoinSlice = createSlice({
  name: 'Coins',
  initialState: {
    CoinList: [],
    Loading: true,
    Error: undefined,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(FetchData.pending, (state) => ({
      ...state,
      Loading: true,
      Error: undefined,
    }));
    builder.addCase(FetchData.rejected, (state) => ({
      ...state,
      loading: false,
      Error: true,
    }));
    builder.addCase(FetchData.fulfilled, (state, action) => ({
      ...state,
      CoinList: action.payload,
      Loading: false,
      Error: undefined,
    }));
  },
});

export default CoinSlice.reducer;
export { FetchData };
