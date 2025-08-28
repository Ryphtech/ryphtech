import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './contexts/AdminContext';
import UserRouter from './pages/user/UserRouter';
import AdminRouter from './pages/admin/AdminRouter';

function App() {
  return (
    <AdminProvider>
      <Router>
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
