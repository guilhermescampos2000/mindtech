import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubscribePage from './pages/SubscribePage';
import ConfirmPage from './pages/ConfirmPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubscribePage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
