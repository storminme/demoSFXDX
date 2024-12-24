import { useWalletProvider } from '../app/providers/WalletProvider.tsx';
import metaMaskLogo from '../assets/metamask_logo_1.svg';
import copy from '../assets/copy.svg';

const ConnectButton = () => {
  const { walletAddress, isConnected, connectWallet } = useWalletProvider();

  const shortenAddress = (address: string): string => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const copyToClipboard = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress);
      alert('Wallet address copied to clipboard!');
    }
  };

  return (
    <>
      {isConnected ? (
        <button
          className="flex items-center gap-2 border min-w-[155px] border-black tablet:border-0 bg-white tablet:text-desktop-text-l text-desktop-text-xs text-accent1-primary tablet:py-[12px] tablet:px-[32px] py-[10px] px-[12px] rounded-[20px] shadow-z100 text-nowrap"
          onClick={copyToClipboard}
        >
          <img src={metaMaskLogo} alt="Wallet" className="w-[18px] h-[18px]" />
          <span>{shortenAddress(walletAddress || '')}</span>
          <img
            src={copy}
            alt="Copy"
            className="w-[16px] h-[16px] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard();
            }}
          />
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className="flex items-center gap-2 bg-accent1-primary tablet:text-desktop-text-l text-desktop-text-xs text-white tablet:py-[12px] tablet:px-[32px] py-[10px] px-[12px] rounded-button shadow-z100 text-nowrap"
        >
          <span>Connect Wallet</span>
        </button>
      )}
    </>
  );
};

export default ConnectButton;
