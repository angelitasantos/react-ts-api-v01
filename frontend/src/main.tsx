import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import App from './App';
import ConnectionTest from './pages/ConnectionTest/ConnectionTest';

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/connection-test' element={<ConnectionTest />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);