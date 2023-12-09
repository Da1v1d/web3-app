import { connectWallet, getBalance } from '@/utils/web3';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IWeb3 {
  address: string | null;
  balance: string | null;
}

const initialState: IWeb3 = { address: null, balance: null };

export const connectToWallet = createAsyncThunk(
  'wallet/connectAsync',
  async () => {
    const [account] = await connectWallet();
    localStorage.setItem('account', account);
    return account;
  }
);

export const getWalletBalance = createAsyncThunk(
  'wallet/getBalance',
  async (account: string) => {
    const balance = await getBalance(account);
    return balance;
  }
);

const web3Slice = createSlice({
  name: 'web3',
  initialState,
  reducers: {
    // incrementByAmount(state, action: PayloadAction<number>) {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(connectToWallet.fulfilled, (state, action) => {
      state.address = action.payload;
    });
    builder.addCase(getWalletBalance.fulfilled, (state, action) => {
      state.balance = action.payload;
    });
  },
});

export default web3Slice.reducer;
