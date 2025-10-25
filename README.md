# SUSA Design Comparison Viewer

Interactive comparison viewer showcasing 5 different design variations for the SUSA shapewear e-commerce mobile app.

## Live Demo

🔗 **GitHub Repository**: https://github.com/vguardtechnologies/susa-mockup-viewer

## Design Variations

1. **Original** - Stone/neutral elegant design
2. **South African Fusion** - Vibrant SA-inspired colors (emerald, teal, amber)
3. **Authentic Fusion** - Soft brand colors with warmth
4. **Rich African Vibes** - Brand colors + African-inspired patterns
5. **Vibrant Rich** - Saturated, bold, energetic palette

## Features

- **4 Comparison Modes**: Single view, 2-column, 3-column, and All 5
- **Interactive Selection**: Click to switch between design variations
- **Mobile Mockup Screens**: Splash, Home, Catalog, Product Detail
- **African-Inspired Patterns**: Decorative circles and geometric elements
- **Responsive Scaling**: Optimized viewing at different grid layouts

## Tech Stack

- **React** 19.1.1
- **Vite** 7.1.7
- **Tailwind CSS** 3.4.18
- **Lucide React** 0.548.0 (icons)

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (port 5175)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.jsx                      # Main app component
├── ComparisonView.jsx           # Comparison grid & controls
├── susa-original.jsx            # Original design
├── susa-south-african-fusion.jsx
├── susa-authentic-fusion.jsx
├── susa-rich-african-vibes.jsx
└── susa-vibrant-rich-vibes.jsx
```

## Deployment

### Railway
1. Connect this repository to Railway
2. Railway will auto-detect Vite and deploy
3. No additional configuration needed

### Manual Deploy
```bash
npm run build
# Deploy the 'dist' folder to your hosting provider
```

## License

Private project for SUSA brand development.

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
