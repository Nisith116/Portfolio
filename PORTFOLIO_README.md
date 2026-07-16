# Nisith Mohanty - Senior Frontend Engineer Portfolio 🚀

An interactive, animated portfolio website showcasing 9+ years of frontend development expertise with React.js, Angular, TypeScript, and performance optimization.

## ✨ Features

- **Modern & Responsive Design** - Mobile-first approach with smooth animations
- **Interactive Animations** - Smooth transitions, floating elements, and hover effects
- **Dark Theme** - Eye-catching gradient backgrounds and modern UI
- **Performance Optimized** - Fast load times, smooth 60fps animations
- **Fully Animated Sections**:
  - Hero section with animated profile and statistics
  - About section with achievement cards
  - Skills showcase with proficiency bars
  - Experience timeline with expandable details
  - Projects & achievements grid
  - Contact form with social links

## 🎨 Design Highlights

- **Color Scheme**: Indigo, Pink, Amber gradients on dark background
- **Typography**: Clean, modern sans-serif fonts
- **Animations**: Fade-in, slide-in, float, pulse, and glow effects
- **Responsive**: Fully responsive on all devices (mobile, tablet, desktop)

## 🛠️ Tech Stack

- **React.js** - UI library
- **Vite** - Lightning-fast build tool
- **CSS3** - Advanced animations and styling
- **JavaScript ES6+** - Modern JavaScript

## 📋 Setup & Installation

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation Steps

```bash
# 1. Clone or download the repository
cd my-react-app

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The portfolio will be available at `http://localhost:5173`

## 📸 Adding Your Profile Photo

To display your actual profile photo instead of the placeholder:

1. Save your profile photo as `profile.jpg` in the `src/assets/` folder
2. Open `src/components/Hero.jsx`
3. Uncomment this line:
   ```javascript
   import profileImg from '../assets/profile.jpg';
   ```
4. Comment out the placeholder line:
   ```javascript
   const profileImg = 'https://ui-avatars.com/api/?name=Nisith+Mohanty&size=280&background=6366f1&color=fff&bold=true&font-size=0.4';
   ```

## 🚀 Building for Production

```bash
# Create optimized production build
npm run build

# Output will be in the 'dist' folder
```

## 📦 Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and create a new repository named `portfolio`
2. Copy your repository URL

### Step 2: Initialize Git and Deploy

```bash
# Initialize git if not already done
git init

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Update package.json homepage (replace with your repo URL)
# In package.json, change: "homepage": "https://yourusername.github.io/portfolio"

# Install gh-pages package (already in dependencies)
npm install

# Build and deploy
npm run build
npm run deploy
```

### Step 3: Enable GitHub Pages

1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. Select `gh-pages` branch as source
4. Your portfolio will be live at: `https://yourusername.github.io/portfolio`

## 📝 Customization

### Update Your Information

Edit the data in these files:

- **Hero Section**: `src/components/Hero.jsx`
- **About Section**: `src/components/About.jsx`
- **Skills Section**: `src/components/Skills.jsx`
- **Experience Section**: `src/components/Experience.jsx`
- **Projects Section**: `src/components/Projects.jsx`
- **Contact Section**: `src/components/Contact.jsx`

### Color Scheme

Modify CSS variables in `src/App.css`:

```css
:root {
  --primary: #6366f1;      /* Main color (Indigo) */
  --secondary: #ec4899;    /* Accent color (Pink) */
  --accent: #f59e0b;       /* Secondary accent (Amber) */
  /* ... other colors ... */
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎯 Best Practices for Job Search

1. **Keep Content Updated** - Update projects and skills regularly
2. **Add Real Projects** - Include links to GitHub repositories and live demos
3. **Write Clear Descriptions** - Explain the impact of your work
4. **Optimize Performance** - Use Lighthouse to check performance
5. **Add Social Links** - Include LinkedIn, GitHub, and email
6. **Mobile Friendly** - Test on various devices
7. **Load Fast** - Images and assets should be optimized

## 📞 Contact Information

Update these in the components:

- Email: mohantynisith116@gmail.com
- Phone: +91 9769360059
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]
- Location: Bengaluru, India

## 📄 License

This portfolio template is open source and available for personal and commercial use.

## 🤝 Support

For issues or questions, feel free to reach out or create an issue in the repository.

---

**Made with ❤️ using React, Vite, and modern CSS animations**

Happy job hunting! 🚀
