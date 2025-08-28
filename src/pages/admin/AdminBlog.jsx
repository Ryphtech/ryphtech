import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X, FileText, Eye } from 'lucide-react';
import { listRows, createRow, updateRow, deleteRow } from '../../utils/crudService';
import { deleteFile } from '../../utils/uploadService';
import FileUpload from '../../components/admin/FileUpload';

export default function AdminBlog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    cover_url: ''
  });

  useEffect(() => {
    loadBlogPosts();
  }, []);

  const loadBlogPosts = async () => {
    try {
      const data = await listRows('blog');
      setBlogPosts(data);
    } catch (error) {
      console.error('Error loading blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateRow('blog', editingId, formData);
      } else {
        await createRow('blog', formData);
      }
      
      setFormData({
        title: '',
        content: '',
        author: '',
        cover_url: ''
      });
      setEditingId(null);
      await loadBlogPosts();
    } catch (error) {
      console.error('Error saving blog post:', error);
    }
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setFormData({
      title: post.title || '',
      content: post.content || '',
      author: post.author || '',
      cover_url: post.cover_url || ''
    });
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      // Find the post to get its cover URL for deletion
      const post = blogPosts.find(p => p.id === id);
      if (post?.cover_url) {
        try {
          await deleteFile(post.cover_url);
        } catch (error) {
          console.error('Error deleting cover image:', error);
        }
      }
      
      await deleteRow('blog', id);
      await loadBlogPosts();
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      title: '',
      content: '',
      author: '',
      cover_url: ''
    });
  };

  const handleCoverUpload = (url) => {
    setFormData({ ...formData, cover_url: url });
  };

  const handleCoverRemove = () => {
    setFormData({ ...formData, cover_url: '' });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Blog Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your blog posts and articles</p>
        </div>
        <div className="flex items-center space-x-2">
          <FileText className="w-6 h-6 text-primary-600" />
          <span className="text-sm text-gray-500">{blogPosts.length} posts</span>
        </div>
      </div>

      {/* Add/Edit Form */}
      <div className="bg-white dark:bg-dark-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {editingId ? 'Edit Blog Post' : 'Add New Blog Post'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
              placeholder="Enter blog post title"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Author
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              className="w-full rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
              placeholder="Enter author name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Content
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={8}
              className="w-full rounded-lg border border-gray-300 dark:border-dark-600 px-3 py-2 bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
              placeholder="Write your blog post content here..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Cover Image
            </label>
            <FileUpload
              onUpload={handleCoverUpload}
              currentImage={formData.cover_url}
              onRemove={handleCoverRemove}
              className="mt-1"
            />
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>{editingId ? 'Update' : 'Add'} Blog Post</span>
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

      {/* Blog Posts List */}
      <div className="bg-white dark:bg-dark-800 rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Blog Posts</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-700">
            <thead className="bg-gray-50 dark:bg-dark-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Cover
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Content Preview
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-dark-800 divide-y divide-gray-200 dark:divide-dark-700">
              {blogPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-dark-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={post.cover_url || 'https://via.placeholder.com/60x40'}
                      alt={post.title}
                      className="w-15 h-10 rounded object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {post.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {post.author}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500 dark:text-gray-400 max-w-xs truncate">
                      {post.content}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
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
