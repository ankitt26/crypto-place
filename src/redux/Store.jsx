import { configureStore } from '@reduxjs/toolkit';
import CoinSlice from './Coins/CoinSlice';
const Store = configureStore({
    reducer: {
        Coins : CoinSlice,
    },
})

export default Store ;