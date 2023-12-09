'use client';

import { Suspense, useEffect } from 'react';
import { ConnectButton } from '../Buttons/ConnectButton';
import { useAppDispatch, useAppSelector } from '@/store';
import { connectToWallet, getWalletBalance } from '@/store/slices/web3Slice';
import { parseWei } from '@/utils/web3';

export function Header() {
  const { address, balance } = useAppSelector((state) => state.web3);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleConnect = async () => {
      if (localStorage.getItem('account')) {
        const address = await dispatch(connectToWallet());
        await dispatch(getWalletBalance(address.payload as string));
      }
    };
    handleConnect();
  }, []);

  return (
    <header className='flex justify-between p-4 '>
      <div></div>
      {balance && parseWei(balance as string)}
      <Suspense fallback={null}>
        {address}
        {!localStorage.getItem('account') && <ConnectButton />}
      </Suspense>
    </header>
  );
}
