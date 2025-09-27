import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { AdminProvider } from './contexts/AdminContext';
import { JobsAuthProvider } from './contexts/JobsAuthContext';
import UserRouter from './pages/user/UserRouter';
import AdminRouter from './pages/admin/AdminRouter';
import JobsRouter from './pages/jobs/JobsRouter';
import ScrollToTop from './components/ScrollToTop';
import PerformanceMonitor from './components/PerformanceMonitor';

function App() {
  useEffect(() => {
    // Set default title
    document.title = 'RyphTech - Modern Web Development & Technology Solutions';
  }, []);

  return (
    <AdminProvider>
      <JobsAuthProvider>
        <Router>
          <ScrollToTop />
          <PerformanceMonitor />
          <Routes>
            {/* Admin routes */}
            <Route path="/admin/*" element={<AdminRouter />} />
            
            {/* Jobs routes - completely separate */}
            <Route path="/jobs/*" element={<JobsRouter />} />
            
            {/* User routes */}
            <Route path="/*" element={<UserRouter />} />
          </Routes>
        </Router>
      </JobsAuthProvider>
    </AdminProvider>
  );
}

export default App;
