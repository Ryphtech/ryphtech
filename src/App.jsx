import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { AdminProvider } from './contexts/AdminContext';
import UserRouter from './pages/user/UserRouter';
import AdminRouter from './pages/admin/AdminRouter';
import ScrollToTop from './components/ScrollToTop';
import PerformanceMonitor from './components/PerformanceMonitor';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>RyphTech - Modern Web Development & Technology Solutions</title>
        <meta name="description" content="RyphTech delivers cutting-edge web development, mobile apps, and AI solutions. Expert React, Next.js, and machine learning services for modern businesses." />
      </Helmet>
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
