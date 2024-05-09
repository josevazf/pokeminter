import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Home></Home>
      <Analytics></Analytics>
    </>

  );
}

export default App;
