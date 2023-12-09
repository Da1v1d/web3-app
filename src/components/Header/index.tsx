"use client";
import { useEffect } from "react";
import { ConnectButton } from "../Buttons/ConnectButton";
import { useAppDispatch, useAppSelector } from "@/store";
import { parseWei } from "@/utils/web3";
import { useConnect } from "@/hooks/useConnect";

export function Header() {
  const { address, balance } = useAppSelector((state) => state.web3);
  const { handleConnect } = useConnect();

  useEffect(() => {
    // handleConnect();
  }, []);

  return (
    <header className="flex justify-between p-4 ">
      <div></div>
      {balance && parseWei(balance as string)}
      {address}
      <ConnectButton />
    </header>
  );
}
