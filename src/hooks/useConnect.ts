import { useAppDispatch } from '@/store';
import { connectToWallet, getWalletBalance } from '@/store/slices/web3Slice';
import { useCallback } from 'react';

export const useConnect = () => {
  const dispatch = useAppDispatch();

  const handleConnect = useCallback(async (): Promise<void> => {
    const { payload: address } = await dispatch(connectToWallet());
    await dispatch(getWalletBalance(address as string));
  }, []);

  return { handleConnect };
};
