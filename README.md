# Beautiful Jewel - Luxury Jewelry Website

Manufacturer & Exporter of Real Diamond Jewellery since 1998.

## 🚀 Deployment Instructions for Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Add Vercel configuration"
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the Vite framework
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **For production deployment**:
   ```bash
   vercel --prod
   ```

## 🛠️ Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
bj/
├── public/           # Static assets (images, videos)
├── index.html        # Home page
├── about.html        # Our Story page
├── collections.html  # Collections page
├── bespoke.html      # Bespoke service page
├── contact.html      # Contact page
├── style.css         # Global styles
├── main.js           # JavaScript functionality
├── vite.config.js    # Vite configuration
└── vercel.json       # Vercel deployment config
```

## ✨ Features

- Premium luxury design with Italian-inspired aesthetics
- Responsive layout for all devices
- Video showcases with auto-play
- Smooth animations and transitions
- SEO optimized
- Fast loading with Vite

## 🎨 Tech Stack

- **Build Tool**: Vite
- **Styling**: Vanilla CSS
- **Fonts**: Google Fonts (Playfair Display, Montserrat)
- **Deployment**: Vercel

---

Made with ✨ for Beautiful Jewel
