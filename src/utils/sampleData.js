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

export const sampleProjects = [
  {
    title: 'E-Commerce Platform',
    category: 'web',
    description: 'A modern, responsive e-commerce platform built with React and Node.js. Features include user authentication, product management, shopping cart, and payment integration.',
    image_url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    additional_images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    live_url: 'https://example-ecommerce.com',
    github_url: 'https://github.com/example/ecommerce',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filters',
      'Shopping cart and checkout process',
      'Payment integration with Stripe',
      'Admin dashboard for product management',
      'Responsive design for all devices'
    ]
  },
  {
    title: 'Mobile Fitness App',
    category: 'mobile',
    description: 'A comprehensive fitness tracking mobile application that helps users monitor workouts, track nutrition, and achieve their fitness goals.',
    image_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    additional_images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
    ],
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    live_url: 'https://play.google.com/store/apps/details?id=com.example.fitness',
    github_url: 'https://github.com/example/fitness-app',
    features: [
      'Workout tracking and planning',
      'Nutrition and calorie tracking',
      'Progress analytics and charts',
      'Social features and challenges',
      'Offline workout support',
      'Integration with fitness devices'
    ]
  },
  {
    title: 'AI Chatbot Assistant',
    category: 'ai',
    description: 'An intelligent chatbot powered by machine learning that provides customer support and answers frequently asked questions.',
    image_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    additional_images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
    ],
    technologies: ['Python', 'TensorFlow', 'NLP', 'Flask', 'PostgreSQL'],
    live_url: 'https://chatbot.example.com',
    github_url: 'https://github.com/example/ai-chatbot',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Integration with CRM systems',
      'Analytics and reporting',
      'Customizable responses',
      '24/7 availability'
    ]
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

export async function addSampleProjects() {
  try {
    console.log('Adding sample projects...');
    
    for (const project of sampleProjects) {
      await createRow('projects', project);
      console.log(`Added: ${project.title}`);
    }
    
    console.log('Sample projects added successfully!');
    return true;
  } catch (error) {
    console.error('Error adding sample projects:', error);
    return false;
  }
}

export default {
  sampleTeamMembers,
  sampleProjects,
  addSampleTeamMembers,
  addSampleProjects
};



