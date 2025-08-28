import { useState, useEffect } from 'react';
import { Users, Briefcase, FileText, MessageSquare, Plus, Edit, Trash2, Database } from 'lucide-react';
import { listRows } from '../../utils/crudService';
import { addSampleTeamMembers } from '../../utils/sampleData';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    team: 0,
    services: 0,
    projects: 0,
    blog: 0,
    testimonials: 0
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [team, services, projects, blog, testimonials] = await Promise.all([
        listRows('team'),
        listRows('services'),
        listRows('projects'),
        listRows('blog'),
        listRows('testimonials')
      ]);

      setStats({
        team: team.length,
        services: services.length,
        projects: projects.length,
        blog: blog.length,
        testimonials: testimonials.length
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const handleAddSampleData = async () => {
    if (!confirm('This will add sample team members to your database. Continue?')) {
      return;
    }
    
    setLoading(true);
    try {
      await addSampleTeamMembers();
      await loadStats(); // Refresh stats
      alert('Sample team members added successfully!');
    } catch (error) {
      console.error('Error adding sample data:', error);
      alert('Error adding sample data. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { name: 'Team Members', count: stats.team, icon: Users, href: '/admin/team', color: 'bg-blue-500' },
    { name: 'Services', count: stats.services, icon: Briefcase, href: '/admin/services', color: 'bg-green-500' },
    { name: 'Projects', count: stats.projects, icon: Briefcase, href: '/admin/projects', color: 'bg-purple-500' },
    { name: 'Blog Posts', count: stats.blog, icon: FileText, href: '/admin/blog', color: 'bg-orange-500' },
    { name: 'Testimonials', count: stats.testimonials, icon: MessageSquare, href: '/admin/testimonials', color: 'bg-pink-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Welcome to your RyphTech admin dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {statCards.map((stat) => (
          <div key={stat.name} className="bg-white dark:bg-dark-800 rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.count}</p>
              </div>
            </div>
            <div className="mt-4">
              <a
                href={stat.href}
                className="text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Manage →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-dark-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="/admin/team"
            className="flex items-center p-4 border border-gray-200 dark:border-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
          >
            <Plus className="w-5 h-5 text-primary-600 mr-3" />
            <span className="text-gray-900 dark:text-white">Add Team Member</span>
          </a>
          <a
            href="/admin/services"
            className="flex items-center p-4 border border-gray-200 dark:border-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
          >
            <Plus className="w-5 h-5 text-primary-600 mr-3" />
            <span className="text-gray-900 dark:text-white">Add Service</span>
          </a>
          <a
            href="/admin/projects"
            className="flex items-center p-4 border border-gray-200 dark:border-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
          >
            <Plus className="w-5 h-5 text-primary-600 mr-3" />
            <span className="text-gray-900 dark:text-white">Add Project</span>
          </a>
          <a
            href="/admin/blog"
            className="flex items-center p-4 border border-gray-200 dark:border-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
          >
            <Plus className="w-5 h-5 text-primary-600 mr-3" />
            <span className="text-gray-900 dark:text-white">Add Blog Post</span>
          </a>
          <a
            href="/admin/testimonials"
            className="flex items-center p-4 border border-gray-200 dark:border-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
          >
            <Plus className="w-5 h-5 text-primary-600 mr-3" />
            <span className="text-gray-900 dark:text-white">Add Testimonial</span>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 border border-gray-200 dark:border-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
          >
            <Edit className="w-5 h-5 text-primary-600 mr-3" />
            <span className="text-gray-900 dark:text-white">View Public Site</span>
          </a>
        </div>
      </div>

      {/* Sample Data Section */}
      <div className="bg-white dark:bg-dark-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Development Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            onClick={handleAddSampleData}
            disabled={loading}
            className="flex items-center p-4 border border-gray-200 dark:border-dark-700 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors disabled:opacity-50"
          >
            <Database className="w-5 h-5 text-green-600 mr-3" />
            <span className="text-gray-900 dark:text-white">
              {loading ? 'Adding...' : 'Add Sample Team Data'}
            </span>
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Add sample team members to test the frontend display. This is useful for development and testing.
        </p>
      </div>
    </div>
  );
}
