export const connectWallet: () => Promise<string[]> = async () => {
  if (typeof window.ethereum === 'undefined') {
    alert('MetaMask is not installed. Please install it.');
    return;
  }

  try {
    return await window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    console.error('Error connecting to MetaMask:', error);
  }
};

export const getBalance: (account: string) => Promise<string> = async (
  account: string
) => {
  return await window.ethereum.request({
    method: 'eth_getBalance',
    params: [account, 'latest'],
  });
};

export const parseWei: (a: string) => string = (a: string) => {
  return (parseInt(a as string) / 10 ** 18).toFixed(4);
};
