"use client";

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets
} from '@rainbow-me/rainbowkit';

import {
    argentWallet,
    trustWallet,
    ledgerWallet
} from "@rainbow-me/rainbowkit/wallets";

import { WagmiProvider } from 'wagmi';

import {
  sepolia
} from 'wagmi/chains';

import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const { wallets } = getDefaultWallets();

const config = getDefaultConfig({
  appName: 'LearnWeb3Punks',
  projectId: '39bd5243a88bb707767be0b4482103dd',
  wallets: [
    ...wallets,
    {
        groupName: 'Others',
        wallets: [argentWallet, trustWallet, ledgerWallet]
    }
  ],
  chains: [sepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});



const queryClient = new QueryClient();

export const Providers = ({children}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme()}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

