import { Route, Routes } from 'react-router-dom';

import GamePage from './pages/GamePage';
import SettingsPage from './pages/SettingsPage';
import RankingPage from './pages/RankingPage';
import NotFoundPage from './pages/NotFoundPage';

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
        path="ranking"
        element={<RankingPage />}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}
