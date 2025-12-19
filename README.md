# Quilt Craft - Long Arm Quilting Website

A professional, minimalistic website for a long arm quilting business.

## Features

- **Home Page**: Showcases services and features
- **Gallery**: Displays all quilt photos in a beautiful grid with lightbox functionality
- **Contact Form**: Collects comprehensive customer information for project inquiries
- **Legal Pages**: Terms & Conditions and Privacy Policy
- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Minimalistic Design**: Clean, easy-to-navigate interface

## Color Scheme

The website uses a warm, professional color palette:
- Primary: Warm brown (#8B6F47)
- Secondary: Soft beige (#D4A574)
- Accent: Golden tan (#C9A96B)
- Background: Light cream (#F8F6F3)

## File Structure

```
VPW/
├── index.html          # Home page
├── gallery.html        # Gallery page
├── contact.html        # Contact form page
├── terms.html          # Terms & Conditions
├── privacy.html        # Privacy Policy
├── styles.css          # Main stylesheet
├── script.js           # Navigation and general scripts
├── gallery.js          # Gallery functionality
├── contact.js          # Contact form handling
└── Quilt Pictures copy/ # Image folder
```

## Setup Instructions

1. **Local Development**: Simply open `index.html` in a web browser, or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

2. **Contact Form Setup**: The contact form currently logs data to the console. To make it functional, you'll need to:
   - Set up a backend server (Node.js, PHP, Python, etc.)
   - Use a form service like:
     - [Formspree](https://formspree.io/)
     - [Netlify Forms](https://www.netlify.com/products/forms/)
     - [EmailJS](https://www.emailjs.com/)
   - Or configure your own email service (SendGrid, Mailgun, AWS SES, etc.)

   See the comments in `contact.js` for implementation guidance.

3. **Deployment**: Upload all files to your web hosting service. Make sure to maintain the folder structure, especially the `Quilt Pictures copy/` folder.

## Customization

- **Company Name**: Replace "Quilt Craft" throughout all HTML files
- **Colors**: Modify the CSS variables in `styles.css` (lines 3-11)
- **Content**: Update text content in HTML files to match your business
- **Images**: The gallery automatically loads all images from the `Quilt Pictures copy/` folder

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All images in the `Quilt Pictures copy/` folder are automatically loaded into the gallery
- The website is fully responsive and mobile-friendly
- Navigation includes a hamburger menu for mobile devices
- Gallery includes keyboard navigation (arrow keys) and click navigation

