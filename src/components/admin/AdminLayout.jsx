import { useAdmin } from '../../contexts/AdminContext';
import { LogOut, Settings, Users, Briefcase, FileText, MessageSquare, Home, Info } from 'lucide-react';

export default function AdminLayout({ children, currentPage }) {
  const { signOut } = useAdmin();

  const navItems = [
    { name: 'Dashboard', icon: Home, href: '/admin', current: currentPage === 'dashboard' },
    { name: 'Team', icon: Users, href: '/admin/team', current: currentPage === 'team' },
    { name: 'Services', icon: Briefcase, href: '/admin/services', current: currentPage === 'services' },
    { name: 'Projects', icon: Briefcase, href: '/admin/projects', current: currentPage === 'projects' },
    { name: 'Blog', icon: FileText, href: '/admin/blog', current: currentPage === 'blog' },
    { name: 'Testimonials', icon: MessageSquare, href: '/admin/testimonials', current: currentPage === 'testimonials' },
    { name: 'About', icon: Info, href: '/admin/about', current: currentPage === 'about' },
    { name: 'Contact', icon: MessageSquare, href: '/admin/contact', current: currentPage === 'contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      {/* Admin Header */}
      <header className="bg-white dark:bg-dark-800 shadow-sm border-b border-gray-200 dark:border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  RyphTech <span className="text-primary-600">Admin</span>
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                View Site
              </a>
              <button
                onClick={signOut}
                className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Admin Sidebar */}
        <nav className="w-64 bg-white dark:bg-dark-800 shadow-sm border-r border-gray-200 dark:border-dark-700">
          <div className="h-full px-3 py-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`flex items-center p-2 text-sm font-medium rounded-lg transition-colors ${
                      item.current
                        ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300'
                        : 'text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-dark-700'
                    }`}
                  >
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}



