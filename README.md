# RyphTech - IT Services Company Website

A modern, professional multi-page website for RyphTech, an IT services company founded by Thanzeer J and Devdarsh M. The website showcases web development, app development, and machine learning services.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light mode support
- **Responsive**: Fully responsive design that works on all devices
- **Multi-page**: 8 comprehensive pages covering all aspects of the business
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Contact Form**: Functional contact form with EmailJS integration
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Admin CMS**: Full admin interface with Supabase backend
- **File Uploads**: Real photo uploads with drag-and-drop functionality

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
- **Backend**: Supabase (Database + Storage + Auth)
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

### Supabase Setup (Required)

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings → API
3. Create `.env.local` in the project root:
   ```
   VITE_SUPABASE_URL=your-project-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

### Database Tables

Run this SQL in Supabase SQL Editor:

```sql
-- Enable pgcrypto for UUIDs
create extension if not exists pgcrypto;

-- Team table
create table if not exists team (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  photo_url text,
  linkedin_url text,
  created_at timestamptz default now()
);

-- Services table
create table if not exists services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  icon text,
  created_at timestamptz default now()
);

-- Projects table
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default 'web',
  description text not null,
  image_url text,
  technologies text[],
  live_url text,
  github_url text,
  features text[],
  created_at timestamptz default now()
);

-- Blog table
create table if not exists blog (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  author text not null,
  cover_url text,
  created_at timestamptz default now()
);

-- Testimonials table
create table if not exists testimonials (
  id uuid primary key default gen_random_uuid(),
  author text not null,
  quote text not null,
  company text,
  created_at timestamptz default now()
);

-- About table
create table if not exists about (
  id uuid primary key default gen_random_uuid(),
  headline text not null,
  content text not null,
  image_url text,
  created_at timestamptz default now()
);

-- Contact table
create table if not exists contact (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  phone text,
  address text,
  created_at timestamptz default now()
);
```

### Storage Setup

1. In Supabase Dashboard, go to Storage
2. Create a new bucket called `images`
3. Set the bucket to public (for image access)
4. Add this RLS policy for the bucket:
   ```sql
   -- Allow authenticated users to upload files
   create policy "Allow authenticated uploads" on storage.objects
   for insert with check (auth.role() = 'authenticated');
   
   -- Allow public read access to images
   create policy "Allow public read" on storage.objects
   for select using (true);
   ```

### Row Level Security (RLS)

Enable RLS and add policies for development:

```sql
-- Enable RLS on all tables
alter table team enable row level security;
alter table services enable row level security;
alter table projects enable row level security;
alter table blog enable row level security;
alter table testimonials enable row level security;
alter table about enable row level security;
alter table contact enable row level security;

-- Development policies (allow all operations)
create policy "dev all team" on team for all using (true) with check (true);
create policy "dev all services" on services for all using (true) with check (true);
create policy "dev all projects" on projects for all using (true) with check (true);
create policy "dev all blog" on blog for all using (true) with check (true);
create policy "dev all testimonials" on testimonials for all using (true) with check (true);
create policy "dev all about" on about for all using (true) with check (true);
create policy "dev all contact" on contact for all using (true) with check (true);
```

### Authentication Setup

1. In Supabase → Authentication → Providers, enable Email/Password
2. Create an admin user or use the auto-signup feature
3. For production, replace the permissive policies with authenticated-only ones

## 🗄️ Admin Interface

### Access
- **URL**: `/admin`
- **Credentials**: 
  - Email: `ryphtech@gmail.com`
  - Password: `Dtryph@0103`

### Features
- **Dashboard**: Overview with stats and quick actions
- **Team Management**: Add/edit/delete team members with photo uploads
- **Services Management**: Manage service offerings
- **Projects Management**: Portfolio project management
- **Blog Management**: Content management for blog posts
- **Testimonials**: Client testimonial management
- **About Management**: Company information management
- **Contact Management**: Contact information management

### File Uploads
- **Drag & Drop**: Upload images by dragging files
- **Click to Upload**: Traditional file picker
- **Preview**: See uploaded images before saving
- **Validation**: File type and size validation
- **Auto-delete**: Old images are automatically removed when replaced

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Add environment variables in Vercel dashboard

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard

## 📝 Customization Guide

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/pages/user/UserRouter.jsx`
3. Update the navigation in `src/components/Navbar.jsx`

### Styling Changes
- Global styles: `src/index.css`
- Component styles: Use Tailwind classes
- Custom CSS: Add to `src/index.css` with `@layer` directives

### Content Updates
- Use the admin interface at `/admin` to manage all content
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