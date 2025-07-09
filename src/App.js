import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <ThemeProvider>
      <Toaster />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;