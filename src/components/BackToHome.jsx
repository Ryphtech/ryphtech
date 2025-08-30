import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToHome = ({ className = '' }) => {
  return (
    <div className={`${className}`}>
      <Link
        to="/"
        className="group inline-flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300"
        aria-label="Back to Home"
      >
        <span className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
          <ArrowLeft className="w-5 h-5" />
        </span>
        <span className="opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0 transition-all duration-300 font-medium">
          Back to Home
        </span>
      </Link>
    </div>
  );
};

export default BackToHome;


