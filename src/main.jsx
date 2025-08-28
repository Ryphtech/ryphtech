import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Add global function for development/testing
if (import.meta.env.DEV) {
  window.addSampleTeamData = async () => {
    try {
      const { addSampleTeamMembers } = await import('./utils/sampleData');
      await addSampleTeamMembers();
      console.log('✅ Sample team data added! Refresh the page to see the changes.');
    } catch (error) {
      console.error('❌ Error adding sample data:', error);
    }
  };
  
  console.log('🚀 Development mode: Use window.addSampleTeamData() to add sample team members');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
