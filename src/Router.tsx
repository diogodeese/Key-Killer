import React from 'react';
import { Route, Routes } from 'react-router-dom';

import GamePage from './pages/GamePage';

import Keyboard from './components/Keyboard';

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<GamePage />}
      />
      <Route
        path="*"
        element={<Keyboard />}
      />
    </Routes>
  );
}
