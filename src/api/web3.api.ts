export const connectWallet: () => Promise<string[]> = async () => {
  if (typeof window.ethereum === "undefined") {
    alert("MetaMask is not installed. Please install it.");
    return;
  }

  try {
    return await window.ethereum.request({ method: "eth_requestAccounts" });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getBalance: (account: string) => Promise<string> = async (
  account: string
) => {
  return await window.ethereum.request({
    method: "eth_getBalance",
    params: [account, "latest"],
  });
};
