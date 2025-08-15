# RyphTech - IT Services Company Website

A modern, professional multi-page website for RyphTech, an IT services company founded by Thanzeer J and Devdarsh M. The website showcases web development, app development, and machine learning services.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Multi-page**: 8 comprehensive pages covering all aspects of the business
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Contact Form**: Functional contact form with EmailJS integration
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📄 Pages

1. **Home** - Hero section, services overview, testimonials, and CTA
2. **About** - Company story, mission, values, and timeline
3. **Services** - Detailed service offerings with process explanations
4. **Projects** - Portfolio with filterable project showcase
5. **Blog** - Articles and insights with search and filtering
6. **Team** - Team members and founders profiles
7. **Testimonials** - Client testimonials and case studies
8. **Contact** - Contact form and company information

## 🛠️ Tech Stack

- **Frontend**: React.js with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: EmailJS for contact form
- **Fonts**: Google Fonts (Poppins, Inter, Urbanist)

## 🎨 Design Features

- **Color Scheme**: Modern blue gradient with purple accents
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Reusable, modular components
- **Dark Mode**: Toggle between light and dark themes
- **Animations**: Smooth scroll animations and hover effects

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ryph_tech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Configuration

### EmailJS Setup (Optional)

To enable the contact form functionality:

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the EmailJS configuration in `src/pages/Contact.jsx`:
   ```javascript
   const result = await emailjs.sendForm(
     'YOUR_SERVICE_ID', // Replace with your service ID
     'YOUR_TEMPLATE_ID', // Replace with your template ID
     formRef.current,
     'YOUR_PUBLIC_KEY' // Replace with your public key
   );
   ```

### Customization

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Content**: Replace dummy content with your actual company information
- **Images**: Replace placeholder images with your own assets
- **Contact Info**: Update contact details in the Contact page

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── About.jsx       # About page
│   ├── Services.jsx    # Services page
│   ├── Projects.jsx    # Projects page
│   ├── Blog.jsx        # Blog page
│   ├── Team.jsx        # Team page
│   ├── Testimonials.jsx # Testimonials page
│   └── Contact.jsx     # Contact page
├── assets/             # Static assets
│   └── images/         # Image files
├── utils/              # Utility functions
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## 📝 Customization Guide

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update the navigation in `src/components/Navbar.jsx`

### Styling Changes
- Global styles: `src/index.css`
- Component styles: Use Tailwind classes
- Custom CSS: Add to `src/index.css` with `@layer` directives

### Content Updates
- Replace dummy content with your actual information
- Update images, testimonials, and project details
- Modify contact information and social links

## 🔍 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Fast loading times
- Mobile-friendly design

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- **Thanzeer J** - Co-Founder & CEO
- **Devdarsh M** - Co-Founder & CTO

## 📞 Support

For support or questions:
- Email: hello@ryphtech.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by RyphTech
