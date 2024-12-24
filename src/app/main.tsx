import { createRoot } from 'react-dom/client';
import '../index.css';
import Index from '../page/main';
import { WalletProvider } from './providers/WalletProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <WalletProvider>
    <Index />
  </WalletProvider>,
);
