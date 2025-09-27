import { Routes, Route } from 'react-router-dom';
import Jobs from '../Jobs';
import JobsDashboard from '../JobsDashboard';

export default function JobsRouter() {
  return (
    <Routes>
      <Route path="/" element={<Jobs />} />
      <Route path="/dashboard" element={<JobsDashboard />} />
    </Routes>
  );
}
