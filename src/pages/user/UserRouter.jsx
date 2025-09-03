import { Routes, Route } from 'react-router-dom';
import UserLayout from '../../components/user/UserLayout';
import Home from '../Home';
import About from '../About';
import Services from '../Services';
import Projects from '../Projects';
import ProjectDetails from '../ProjectDetails';
import Blog from '../Blog';
import Team from '../Team';
import Testimonials from '../Testimonials';
import Contact from '../Contact';
import Careers from '../Careers';
import Privacy from '../Privacy';
import Terms from '../Terms';


export default function UserRouter() {
  return (
    <UserLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />


       </Routes>
    </UserLayout>
  );
}



