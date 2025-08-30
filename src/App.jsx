import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext';
import UserRouter from './pages/user/UserRouter';
import AdminRouter from './pages/admin/AdminRouter';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <AdminProvider>
      <Router>
        <ScrollToTop />
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
