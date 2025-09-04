# Thin CSS: The Last Framework You'll Ever **Not** Need

[![Netlify Status](https://api.netlify.com/api/v1/badges/f15414d8-3a5f-4ba5-a146-fda1c9fa4784/deploy-status)](https://app.netlify.com/sites/thin/deploys)

A lightweight, utility-first CSS framework built with modern Sass and PostCSS.

## 🚀 Features

- **Utility-first approach** - Build layouts quickly with utility classes
- **Modern Sass** - Uses latest Sass features and best practices
- **Optimized output** - PostCSS processing with autoprefixer and cssnano
- **Source maps** - Better debugging experience
- **Responsive design** - Mobile-first responsive utilities
- **Type scale** - Mathematical type scaling system

## 📦 Installation

```bash
npm install thin.css
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Development build (no cleanup)
npm run dev

# Watch for changes
npm run watch

# Clean build directory
npm run clean
```

## 🔧 Build Process

- **Sass compilation** with source maps
- **PostCSS processing** with autoprefixer
- **CSS optimization** with cssnano
- **Modern tooling** with latest dependencies

## 📁 Project Structure

```
src/
├── 2.0/           # Main framework source
│   ├── _grd.scss  # Grid system
│   ├── _typ.scss  # Typography
│   ├── _flx.scss  # Flexbox utilities
│   └── index.scss # Main entry point
└── 1.0/           # Legacy version
```

## 🌐 CDN

```html
<link rel="stylesheet" href="https://unpkg.com/thin.css@2.0.3/dist/thin.css">
```

## 📄 License

ISC License
