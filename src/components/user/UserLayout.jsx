import Navbar from '../Navbar';
import Footer from '../Footer';

export default function UserLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}



