import { Routes, Route, Navigate } from 'react-router-dom';
import { useAdmin } from '../../contexts/AdminContext';
import AdminLayout from '../../components/admin/AdminLayout';
import AdminDashboard from '../../components/admin/AdminDashboard';
import AdminTeam from './AdminTeam';
import AdminServices from './AdminServices';
import AdminProjects from './AdminProjects';
import AdminBlog from './AdminBlog';
import AdminTestimonials from './AdminTestimonials';
import AdminLogin from '../../components/AdminLogin';

export default function AdminRouter() {
  const { isAdmin, loading } = useAdmin();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return <AdminLogin />;
  }

  return (
    <Routes>
      <Route path="/" element={
        <AdminLayout currentPage="dashboard">
          <AdminDashboard />
        </AdminLayout>
      } />
      <Route path="/team" element={
        <AdminLayout currentPage="team">
          <AdminTeam />
        </AdminLayout>
      } />
      <Route path="/services" element={
        <AdminLayout currentPage="services">
          <AdminServices />
        </AdminLayout>
      } />
      <Route path="/projects" element={
        <AdminLayout currentPage="projects">
          <AdminProjects />
        </AdminLayout>
      } />
      <Route path="/blog" element={
        <AdminLayout currentPage="blog">
          <AdminBlog />
        </AdminLayout>
      } />
      <Route path="/testimonials" element={
        <AdminLayout currentPage="testimonials">
          <AdminTestimonials />
        </AdminLayout>
      } />
      {/* Add more admin routes here as needed */}
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
}
