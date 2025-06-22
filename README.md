# Designer & Photographer Portfolio

A modern, bilingual portfolio website for a creative professional, built with Vite, vanilla JavaScript, and SCSS.

## Features

### 🌐 Bilingual Support
- English (default) and French language options
- Dynamic content switching
- Seamless language toggle functionality

### 📱 Responsive Design
- Mobile-first approach
- Modern CSS Grid and Flexbox layouts
- Optimized for all device sizes

### 🎨 Portfolio Showcase
- Interactive portfolio grid with 6 project samples
- Hover effects and smooth animations
- Categories: Photography and Design work

### 📧 Contact System
- Contact form with validation
- Required fields: Name, Phone, Email, Message
- Form submission with loading states and success feedback

### 🗺️ Location Integration
- Google Maps integration ready
- Address: 3 Pl. Rossetti, 06300 Nice, France
- Interactive map placeholder

### ❓ FAQ Section
- Expandable/collapsible FAQ items
- Professional service information
- Smooth toggle animations

### 🎯 Additional Features
- Smooth scrolling navigation
- Mobile hamburger menu
- Google Fonts integration (Roboto family)
- Modern color scheme
- Professional typography

## Tech Stack

- **Build Tool**: Vite
- **Styling**: SCSS with modern CSS features
- **JavaScript**: Vanilla ES6+
- **Fonts**: Google Fonts (Roboto)
- **Icons**: SVG-based placeholders

## Color Scheme

- **Primary**: #2C3E50 (Dark Blue-Gray)
- **Secondary**: #E74C3C (Red)
- **Accent**: #3498DB (Blue)
- **Text Dark**: #2C3E50
- **Text Light**: #7F8C8D
- **Background**: #FFFFFF / #F8F9FA

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd designer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
designer/
├── public/
│   ├── images/          # Portfolio and content images
│   └── vite.svg        # Vite logo
├── src/
│   ├── main.js         # Main JavaScript functionality
│   └── styles.scss     # SCSS styling
├── index.html          # Homepage (English)
├── about.html          # About page
└── package.json        # Dependencies and scripts
```

## Development

### Adding New Images
Replace the placeholder SVG files in `/public/images/` with actual high-quality images:
- `hero-bg.jpg` - Hero section background
- `about-photo.jpg` - Personal photo for about page
- `portfolio-1.jpg` through `portfolio-6.jpg` - Portfolio showcase images

### Customizing Content
- **Languages**: Edit the `translations` object in `src/main.js`
- **Styles**: Modify variables in `src/styles.scss`
- **Colors**: Update CSS custom properties in the `:root` selector

### Google Maps Integration
To enable Google Maps:
1. Get a Google Maps API key
2. Replace `YOUR_API_KEY` in `src/main.js`
3. Uncomment the Google Maps initialization code

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Android Chrome (latest)

## License

This project is created as a portfolio template. Feel free to customize and use for your own portfolio needs.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

**Note**: This is a template project. Replace placeholder content, images, and contact information with your actual details before deployment.
