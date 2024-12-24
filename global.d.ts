import { ExternalProvider } from '@ethersproject/providers';

declare global {
  interface Window {
    ethereum?: Web3Provider;
  }
}

export {};
