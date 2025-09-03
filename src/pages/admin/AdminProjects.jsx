import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X, FolderOpen } from 'lucide-react';
import { listRows, createRow, updateRow, deleteRow } from '../../utils/crudService';
import { deleteFile } from '../../utils/uploadService';
import FileUpload from '../../components/admin/FileUpload';

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: 'web',
    description: '',
    image_url: '',
    additional_images: [],
    technologies: '',
    live_url: '',
    github_url: '',
    features: ''
  });

  const categories = [
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'App Development' },
    { id: 'ai', label: 'Machine Learning' },
    { id: 'college', label: 'College Projects' }
  ];

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await listRows('projects');
      setProjects(data);
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert comma-separated strings to arrays
      const projectData = {
        ...formData,
        technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech),
        features: formData.features.split(',').map(feature => feature.trim()).filter(feature => feature)
      };

      if (editingId) {
        await updateRow('projects', editingId, projectData);
      } else {
        await createRow('projects', projectData);
      }
      
      setFormData({
        title: '',
        category: 'web',
        description: '',
        image_url: '',
        additional_images: [],
        technologies: '',
        live_url: '',
        github_url: '',
        features: ''
      });
      setEditingId(null);
      await loadProjects();
    } catch (error) {
      console.error('Error saving project:', error);
    }
  };

  const handleEdit = (project) => {
    setEditingId(project.id);
    setFormData({
      title: project.title || '',
      category: project.category || 'web',
      description: project.description || '',
      image_url: project.image_url || '',
      additional_images: project.additional_images || [],
      technologies: Array.isArray(project.technologies) ? project.technologies.join(', ') : project.technologies || '',
      live_url: project.live_url || '',
      github_url: project.github_url || '',
      features: Array.isArray(project.features) ? project.features.join(', ') : project.features || ''
    });
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      // Find the project to get its image URL for deletion
      const project = projects.find(p => p.id === id);
      if (project?.image_url) {
        try {
          await deleteFile(project.image_url);
        } catch (error) {
          console.error('Error deleting image:', error);
        }
      }
      
      await deleteRow('projects', id);
      await loadProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      title: '',
      category: 'web',
      description: '',
      image_url: '',
      technologies: '',
      live_url: '',
      github_url: '',
      features: ''
    });
  };

  const handleImageUpload = (url) => {
    setFormData({ ...formData, image_url: url });
  };

  const handleImageRemove = () => {
    setFormData({ ...formData, image_url: '' });
  };

  const handleAdditionalImageUpload = (imageUrl) => {
    setFormData({ 
      ...formData, 
      additional_images: [...formData.additional_images, imageUrl] 
    });
  };

  const handleAdditionalImageRemove = (indexToRemove) => {
    setFormData({ 
      ...formData, 
      additional_images: formData.additional_images.filter((_, index) => index !== indexToRemove) 
    });
  };

  const handleAdditionalImageReorder = (fromIndex, toIndex) => {
    const newImages = [...formData.additional_images];
    const [movedImage] = newImages.splice(fromIndex, 1);
    newImages.splice(toIndex, 0, movedImage);
    setFormData({ ...formData, additional_images: newImages });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Project Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your portfolio projects</p>
        </div>
        <div className="flex items-center space-x-2">
          <FolderOpen className="w-6 h-6 text-primary-600" />
          <span className="text-sm text-gray-500">{projects.length} projects</span>
        </div>
      </div>

      {/* Add/Edit Form */}
      <div className="bg-white dark:bg-dark-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {editingId ? 'Edit Project' : 'Add New Project'}
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
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
              required
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
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
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Technologies (comma-separated)
            </label>
            <input
              type="text"
              value={formData.technologies}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
              placeholder="React, Node.js, MongoDB"
              className="w-full rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Features (comma-separated)
            </label>
            <input
              type="text"
              value={formData.features}
              onChange={(e) => setFormData({ ...formData, features: e.target.value })}
              placeholder="User Authentication, Payment Processing"
              className="w-full rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Live URL
            </label>
            <input
              type="url"
              value={formData.live_url}
              onChange={(e) => setFormData({ ...formData, live_url: e.target.value })}
              placeholder="https://project-demo.com"
              className="w-full rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              GitHub URL
            </label>
            <input
              type="url"
              value={formData.github_url}
              onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
              placeholder="https://github.com/username/project"
              className="w-full rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Project Image
            </label>
            <FileUpload
              onUpload={handleImageUpload}
              currentImage={formData.image_url}
              onRemove={handleImageRemove}
              className="mt-1"
            />
          </div>
          
          {/* Additional Images Section */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Additional Images
            </label>
            <div className="space-y-4">
              {/* Add New Image */}
              <div className="flex items-center space-x-3">
                <FileUpload
                  onUpload={handleAdditionalImageUpload}
                  currentImage=""
                  onRemove={() => {}}
                  className="flex-1"
                  placeholder="Upload additional image..."
                />
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {formData.additional_images.length} images
                </span>
              </div>
              
              {/* Display Additional Images */}
              {formData.additional_images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {formData.additional_images.map((imageUrl, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={imageUrl}
                        alt={`Additional image ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg border border-gray-200 dark:border-dark-600"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-2">
                          <button
                            type="button"
                            onClick={() => handleAdditionalImageRemove(index)}
                            className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                            title="Remove image"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="absolute top-1 left-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Drag & Drop Instructions */}
              {formData.additional_images.length === 0 && (
                <div className="text-center py-6 border-2 border-dashed border-gray-300 dark:border-dark-600 rounded-lg">
                  <div className="text-gray-500 dark:text-gray-400">
                    <svg className="mx-auto h-12 w-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Upload additional project images</p>
                    <p className="text-xs mt-1">Drag and drop or click to upload</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="md:col-span-2 flex space-x-3">
            <button
              type="submit"
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>{editingId ? 'Update' : 'Add'} Project</span>
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

      {/* Projects List */}
      <div className="bg-white dark:bg-dark-800 rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Projects</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-700">
            <thead className="bg-gray-50 dark:bg-dark-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Images
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Technologies
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-dark-800 divide-y divide-gray-200 dark:divide-dark-700">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-dark-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {/* Main Image */}
                      <img
                        src={project.image_url || 'https://via.placeholder.com/60x40'}
                        alt={project.title}
                        className="w-15 h-10 rounded object-cover"
                      />
                      
                      {/* Additional Images Indicator */}
                      {Array.isArray(project.additional_images) && project.additional_images.length > 0 && (
                        <div className="flex items-center space-x-1">
                          <span className="text-xs text-gray-500 dark:text-gray-400">+</span>
                          {project.additional_images.slice(0, 2).map((img, index) => (
                            <img
                              key={index}
                              src={img.url || img}
                              alt={`Additional ${index + 1}`}
                              className="w-8 h-6 rounded object-cover border border-gray-200 dark:border-dark-600"
                            />
                          ))}
                          {project.additional_images.length > 2 && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              +{project.additional_images.length - 2}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {project.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {categories.find(c => c.id === project.category)?.label || project.category}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {Array.isArray(project.technologies) 
                        ? project.technologies.slice(0, 3).join(', ') + (project.technologies.length > 3 ? '...' : '')
                        : project.technologies}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => handleEdit(project)}
                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
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
