"use client";
import { useAppDispatch } from "@/store";
import { Button } from "../Button";
import { connectToWallet } from "@/store/slices/web3Slice";
import { useLoading } from "@/hooks/useLoading";

export const ConnectButton = () => {
  const dispatch = useAppDispatch();
  const { isLoading, handleChangeLoading } = useLoading();

  const connect = async () => {
    handleChangeLoading();
    await connectToWallet();
    
  };
  return <Button onClick={() => dispatch(connectToWallet())} text="connect" />;
};
