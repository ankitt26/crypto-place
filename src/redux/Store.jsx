import { configureStore } from '@reduxjs/toolkit';
import CoinSlice from './Coins/CoinSlice';
import SearchSlice from './Coins/SearchSlice';
const Store = configureStore({
    reducer: {
        Coins : CoinSlice,
        Search : SearchSlice
    },
})

export default Store ;