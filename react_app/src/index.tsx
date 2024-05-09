import '@rainbow-me/rainbowkit/styles.css';
import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./styleguide.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getDefaultConfig, lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  baseSepolia,
  sepolia,
} from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'PokéMinter',
  projectId: '779d8ace77c78775416b20ddfec0336f',
  chains: [
    sepolia,
    baseSepolia,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true' ? [sepolia, baseSepolia] : []),
  ],
});

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={lightTheme({
          accentColor: '#3B4CCA',
          accentColorForeground: 'white',
          borderRadius: 'medium',
        })}>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);

reportWebVitals();
