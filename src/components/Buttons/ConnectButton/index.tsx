'use client';
import { useAppDispatch } from '@/store';
import { Button } from '../Button';
import { connectToWallet } from '@/store/slices/web3Slice';

export const ConnectButton = () => {
  const dispatch = useAppDispatch();
  return <Button onClick={() => dispatch(connectToWallet())} text='connect' />;
};
