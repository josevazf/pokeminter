import '@rainbow-me/rainbowkit/styles.css';
import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./styleguide.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  polygonMumbai,
  sepolia,
} from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'PokéMinter',
  projectId: '779d8ace77c78775416b20ddfec0336f',
  chains: [
    sepolia,
    polygonMumbai,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true' ? [sepolia, polygonMumbai] : []),
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
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
