# Rendercode Studios Landing Page

A production-ready, single-page website for Rendercode Studios digital agency. Built with React, Vite, and Tailwind CSS.

## 🎯 Marketing Copy (Hero Section)

Use these three lines for your hero section:

```
Branding, Websites & Videos for Tech-first Startups
Productized retainers that turn website bugs into trust — and consistent revenue into growth.
Fast, modern, and conversion-focused digital solutions.
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd rendercode

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the site.

### Build for Production

```bash
# Build the site
npm run build

# Preview the production build
npm run preview
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
rendercode/
├── api/                    # Vercel serverless functions
│   └── contact.js
├── netlify/
│   └── functions/          # Netlify serverless functions
│       └── contact.js
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProblemPromise.jsx
│   │   ├── DevelopersAdvantage.jsx
│   │   ├── Packages.jsx
│   │   ├── Workflow.jsx
│   │   ├── CaseStudy.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   ├── ContactForm.jsx
│   │   └── __tests__/      # Component tests
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   ├── index.css           # Global styles
│   └── setupTests.js       # Test setup
├── .github/workflows/      # CI/CD workflows
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.cjs     # Tailwind configuration
└── README.md               # This file
```

## 🎨 Customization Guide

### Replace Brand Name

1. **Logo**: Update the logo in `src/components/Header.jsx` (line ~25)
   ```jsx
   // Replace this:
   Rendercode Studios
   // With your logo image or text
   ```

2. **Site-wide**: Search and replace "Rendercode Studios" across all files if you want to rebrand:
   ```bash
   # Use your IDE's find and replace feature
   # Or use command line:
   find src -type f -name "*.jsx" -exec sed -i '' 's/Rendercode Studios/YourBrand/g' {} +
   ```

### Update Brand Colors

Edit `tailwind.config.cjs` to change the color scheme:

```javascript
colors: {
  primary: {
    // Replace with your brand colors
    500: '#0ea5e9',  // Main brand color
    600: '#0284c7',  // Hover states
    // ... etc
  },
}
```

Then update any hardcoded color classes in components if needed.

### Replace Case Study Assets

1. **Case Study Section**: Update `src/components/CaseStudy.jsx`
   - Replace "UrbanFuel Coffee" with your case study name
   - Update before/after images (lines ~20-40)
   - Update testimonial content (lines ~45-60)

2. **Hero Badge**: Update the case study link in `src/components/Hero.jsx` (line ~15)

### Update Package Prices and Content

Edit `src/components/Packages.jsx` to update:
- Package names and descriptions
- Pricing (₹ symbols can be changed to $ or other currencies)
- Deliverables lists
- "Who it's for" descriptions

### Replace Loom Video Links

1. **Hero Section**: Update `src/components/Hero.jsx` (line ~70)
   - Replace the placeholder with your Loom video embed or thumbnail
   - Add onClick handler to open Loom video

2. **Developer's Advantage**: Update `src/components/DevelopersAdvantage.jsx` (line ~40)
   - Replace placeholder with actual Loom embed

### Update Testimonials

Edit `src/components/Testimonials.jsx` to:
- Replace testimonial quotes
- Update author names and roles
- Add company logos (replace placeholder text)

### Update FAQ

Edit `src/components/FAQ.jsx` to modify questions and answers in the `faqs` array.

## 🔌 Contact Form Integration

### Development

The contact form will attempt to POST to `/api/contact`. In development, this won't work without a server. The form will show an error, but this is expected.

### Production (Vercel)

The contact form automatically uses `/api/contact.js` when deployed to Vercel. To integrate with external services:

1. **Zapier Integration**:
   ```javascript
   // In api/contact.js
   const zapierResponse = await fetch('YOUR_ZAPIER_WEBHOOK_URL', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ name, email, company, message, package: packageName }),
   })
   ```

2. **Email Service (SendGrid)**:
   ```javascript
   // Install: npm install @sendgrid/mail
   const sgMail = require('@sendgrid/mail')
   sgMail.setApiKey(process.env.SENDGRID_API_KEY)
   await sgMail.send({
     to: 'hello@rendercodestudios.com',
     from: email,
     subject: 'New Contact Form Submission',
     text: message,
   })
   ```

3. **Razorpay Payment Integration**:
   ```javascript
   // Install: npm install razorpay
   const Razorpay = require('razorpay')
   const instance = new Razorpay({
     key_id: process.env.RAZORPAY_KEY_ID,
     key_secret: process.env.RAZORPAY_KEY_SECRET,
   })
   const order = await instance.orders.create({
     amount: 50000, // Amount in paise
     currency: 'INR',
   })
   ```

### Production (Netlify)

Update `netlify/functions/contact.js` with the same integration code. Set environment variables in Netlify dashboard.

## 📊 Analytics

### Google Analytics

Uncomment the Google Analytics script in `index.html` (lines ~30-38) and replace `GA_MEASUREMENT_ID` with your tracking ID.

### Plausible Analytics

Uncomment the Plausible script in `index.html` (lines ~40-42) and update the data-domain attribute.

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run accessibility tests
npm run test:a11y
```

Tests are located in `src/components/__tests__/`:
- `Header.test.jsx` - Component unit tests
- `Header.a11y.test.jsx` - Accessibility tests using axe-core

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:a11y` - Run accessibility tests

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Vite and deploy
   - The `/api/contact.js` function will work automatically

3. **Environment Variables** (if needed):
   - Add environment variables in Vercel dashboard
   - Use `process.env.VARIABLE_NAME` in serverless functions

### Netlify

1. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Deploy**:
   - Connect your GitHub repository to Netlify
   - Netlify will use `netlify.toml` for configuration
   - The `/netlify/functions/contact.js` function will work automatically

3. **Environment Variables** (if needed):
   - Add in Netlify dashboard: Site settings → Environment variables

### Manual Deployment

```bash
# Build the site
npm run build

# Upload the dist/ directory to your hosting provider
# For static hosting (S3, Cloudflare Pages, etc.)
```

## 📝 Deployment Checklist

### 3 Steps to Go Live on Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Click "Deploy" (Vercel auto-detects Vite)

3. **Configure Domain** (optional):
   - Add your custom domain in Vercel dashboard
   - Update DNS records as instructed
   - Update `index.html` meta tags with your domain

## 🔒 SEO Optimization

The site includes:
- Semantic HTML5 elements
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Canonical URL
- Proper heading hierarchy
- Alt text placeholders (add actual alt text to images)

## ♿ Accessibility

The site follows WCAG 2.1 Level AA guidelines:
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Color contrast ratios
- Screen reader friendly

Run `npm run test:a11y` to check for accessibility issues.

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Contact Form Not Working

- **Development**: This is expected. The API only works in production.
- **Production**: Check serverless function logs in Vercel/Netlify dashboard.
- **CORS Issues**: Ensure your serverless function handles CORS correctly.

### Styles Not Loading

- Ensure Tailwind is configured correctly in `tailwind.config.cjs`
- Check that `index.css` imports Tailwind directives
- Run `npm run build` to verify Tailwind purge is working

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)

## 📄 License

This project is proprietary. All rights reserved.

## 👥 Adding a Project Manager User (Future)

If you later add user authentication:

1. Install an auth library (e.g., Auth0, Supabase Auth)
2. Create a login component
3. Add protected routes for admin/project manager dashboard
4. Store user roles in a database
5. Implement role-based access control

## 🎯 Git Commit History

```
Initial commit - Project setup and configuration
feat: Add Header component with navigation and mobile menu
feat: Add Hero section with CTA buttons
feat: Add Problem & Promise section
feat: Add Developer's Advantage section
feat: Add Packages section with three pricing tiers
feat: Add Workflow section with 4-step process
feat: Add Case Study section
feat: Add Testimonials section
feat: Add FAQ section with accordion
feat: Add Footer with contact form
feat: Add ContactForm component with validation
feat: Add serverless API endpoints for Vercel and Netlify
test: Add unit tests for Header component
test: Add accessibility tests
ci: Add GitHub Actions workflow
docs: Add comprehensive README
```

## 🎨 Design Notes

- Mobile-first responsive design
- Uses Tailwind utility classes for styling
- No external CSS frameworks (except Tailwind)
- Icons from lucide-react
- Smooth scroll navigation
- Sticky header with scroll effect
- Accessible color contrast ratios
- Performance optimized (lazy loading, code splitting)

## 🔄 Converting to Next.js (Future)

The codebase is modular and can be easily converted to Next.js:

1. Install Next.js: `npx create-next-app@latest`
2. Move components to `components/` directory
3. Convert to Next.js pages or app directory structure
4. Update API routes to Next.js API routes
5. Update image optimization to use Next.js Image component
6. Update meta tags to use Next.js Head component

---

**Ready to deploy?** Follow the [Deployment Checklist](#-deployment-checklist) above!

