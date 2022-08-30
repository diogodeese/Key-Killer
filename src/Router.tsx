import { Route, Routes } from 'react-router-dom';

import GamePage from './pages/GamePage';
import SettingsPage from './pages/SettingsPage';

import Keyboard from './components/Keyboard';

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<GamePage />}
      />
      <Route
        path="settings"
        element={<SettingsPage />}
      />
      <Route
        path="*"
        element={<Keyboard />}
      />
    </Routes>
  );
}
