import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToHome = ({ className = '' }) => {
  return (
    <div className={`container-custom ${className}`}>
      <Link
        to="/"
        className="group inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
        aria-label="Back to Home"
      >
        <span className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </span>
        <span className="opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-200">
          Back to Home
        </span>
      </Link>
    </div>
  );
};

export default BackToHome;


