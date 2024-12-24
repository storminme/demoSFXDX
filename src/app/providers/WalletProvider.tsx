import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ethers } from 'ethers';

interface WalletContextType {
  walletAddress: string | null;
  isConnected: boolean;
  connectWallet: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(() => {
    return localStorage.getItem('walletAddress');
  });
  const [isConnected, setIsConnected] = useState<boolean>(!!walletAddress); // Если адрес есть, то считаем подключенным

  const AMOY_POLYGON_RPC_URL = 'https://rpc-amoy.polygon.technology';

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await (window.ethereum as any).request({
          method: 'eth_accounts',
        });
        if (accounts.length > 0) {
          const address = accounts[0];
          setWalletAddress(address);
          setIsConnected(true);
          localStorage.setItem('walletAddress', address); // Сохраняем в localStorage
        } else {
          await (window.ethereum as any).request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x13882', // Chain ID в шестнадцатеричной форме
                chainName: 'Polygon Amoy Testnet',
                rpcUrls: [AMOY_POLYGON_RPC_URL],
                nativeCurrency: { name: 'POL', symbol: 'POL', decimals: 18 },
                blockExplorerUrls: ['https://amoy.polygonscan.com/'],
              },
            ],
          });

          await (window.ethereum as any).request({
            method: 'eth_requestAccounts',
          });

          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();

          setWalletAddress(address);
          setIsConnected(true);
          localStorage.setItem('walletAddress', address);
        }
      } catch (error) {
        console.error('Ошибка подключения к кошельку:', error);
      }
    } else {
      alert('MetaMask не установлен!');
    }
  };

  return (
    <WalletContext.Provider
      value={{ walletAddress, isConnected, connectWallet }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletProvider = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWalletProvider must be used within a WalletProvider');
  }
  return context;
};
