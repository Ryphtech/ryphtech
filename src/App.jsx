import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AdminProvider } from './contexts/AdminContext';
import UserRouter from './pages/user/UserRouter';
import AdminRouter from './pages/admin/AdminRouter';
import ScrollToTop from './components/ScrollToTop';
import PerformanceMonitor from './components/PerformanceMonitor';

function App() {
  return (
    <HelmetProvider>
      <AdminProvider>
        <Router>
          <ScrollToTop />
          <PerformanceMonitor />
          <Routes>
            {/* Admin routes */}
            <Route path="/admin/*" element={<AdminRouter />} />
            
            {/* User routes */}
            <Route path="/*" element={<UserRouter />} />
          </Routes>
        </Router>
      </AdminProvider>
    </HelmetProvider>
  );
}

export default App;
