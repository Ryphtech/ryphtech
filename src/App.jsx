import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { AdminProvider } from './contexts/AdminContext';
import UserRouter from './pages/user/UserRouter';
import AdminRouter from './pages/admin/AdminRouter';
import ScrollToTop from './components/ScrollToTop';
import PerformanceMonitor from './components/PerformanceMonitor';

function App() {
  useEffect(() => {
    // Set default title
    document.title = 'RyphTech - Modern Web Development & Technology Solutions';
  }, []);

  return (
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
  );
}

export default App;
