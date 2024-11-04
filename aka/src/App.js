import { BrowserRouter as Router, Route, Routes,useLocation } from 'react-router-dom';

import{ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';


import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import MapPage from './pages/MapPage';
import InfoPage from './pages/InfoPage';
import Notification from './components/Notification';
import Weather from './components/Weather';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Router>
      <ConditionalHeader />
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}



function ConditionalHeader() {
  const location = useLocation();
  const hideHeader = location.pathname === '/' || location.pathname === '/login'; // 로딩 및 로그인 페이지에서 헤더 숨기기

  return hideHeader ? null : <Header />;
}

export default App;

