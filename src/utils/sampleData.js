import { createRow } from './crudService';

export const sampleTeamMembers = [
  {
    name: 'Thanzeer J',
    role: 'Co-Founder & CEO',
    photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin_url: 'https://linkedin.com/in/thanzeer-j'
  },
  {
    name: 'Devdarsh M',
    role: 'Co-Founder & CTO',
    photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    linkedin_url: 'https://linkedin.com/in/devdarsh-m'
  },
  {
    name: 'Sarah Johnson',
    role: 'Senior Web Developer',
    photo_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    linkedin_url: 'https://linkedin.com/in/sarah-johnson'
  },
  {
    name: 'Michael Chen',
    role: 'Mobile App Developer',
    photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin_url: 'https://linkedin.com/in/michael-chen'
  },
  {
    name: 'Emily Rodriguez',
    role: 'UI/UX Designer',
    photo_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    linkedin_url: 'https://linkedin.com/in/emily-rodriguez'
  },
  {
    name: 'David Kim',
    role: 'Machine Learning Engineer',
    photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    linkedin_url: 'https://linkedin.com/in/david-kim'
  }
];

export async function addSampleTeamMembers() {
  try {
    console.log('Adding sample team members...');
    
    for (const member of sampleTeamMembers) {
      await createRow('team', member);
      console.log(`Added: ${member.name}`);
    }
    
    console.log('Sample team members added successfully!');
    return true;
  } catch (error) {
    console.error('Error adding sample team members:', error);
    return false;
  }
}

export default {
  sampleTeamMembers,
  addSampleTeamMembers
};



