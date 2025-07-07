import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;