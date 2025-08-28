import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X, Briefcase } from 'lucide-react';
import { listRows, createRow, updateRow, deleteRow } from '../../utils/crudService';

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: ''
  });

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const data = await listRows('services');
      setServices(data);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateRow('services', editingId, formData);
      } else {
        await createRow('services', formData);
      }
      setFormData({ title: '', description: '', icon: '' });
      setEditingId(null);
      await loadServices();
    } catch (error) {
      console.error('Error saving service:', error);
    }
  };

  const handleEdit = (service) => {
    setEditingId(service.id);
    setFormData({
      title: service.title || '',
      description: service.description || '',
      icon: service.icon || ''
    });
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    try {
      await deleteRow('services', id);
      await loadServices();
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ title: '', description: '', icon: '' });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Services Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your services</p>
        </div>
        <div className="flex items-center space-x-2">
          <Briefcase className="w-6 h-6 text-primary-600" />
          <span className="text-sm text-gray-500">{services.length} services</span>
        </div>
      </div>

      {/* Add/Edit Form */}
      <div className="bg-white dark:bg-dark-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {editingId ? 'Edit Service' : 'Add New Service'}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Icon
            </label>
            <input
              type="text"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              className="w-full rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
              placeholder="Icon name or URL"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              className="w-full rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
              required
            />
          </div>
          <div className="md:col-span-2 flex space-x-3">
            <button
              type="submit"
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>{editingId ? 'Update' : 'Add'} Service</span>
            </button>
            {editingId && (
              <button
                type="button"
                onClick={handleCancel}
                className="flex items-center space-x-2 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
                <span>Cancel</span>
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Services List */}
      <div className="bg-white dark:bg-dark-800 rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Services</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-700">
            <thead className="bg-gray-50 dark:bg-dark-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Icon
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-dark-800 divide-y divide-gray-200 dark:divide-dark-700">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-gray-50 dark:hover:bg-dark-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {service.title}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400 max-w-xs truncate">
                      {service.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {service.icon || 'No icon'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => handleEdit(service)}
                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


