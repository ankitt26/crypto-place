import { createSlice } from '@reduxjs/toolkit';

const SearchCoin = createSlice({
    name: 'Search Coin',
    initialState : {
        searchkey:'',
    },
    reducers:{
        setSearchKey:(state,action)=>({
            ...state,
            searchkey : action.payload
    })
}
})

export default SearchCoin.reducer ;
export const { setSearchKey} = SearchCoin.actions;