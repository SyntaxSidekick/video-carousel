# 🎥 Video Carousel

A modern, responsive video carousel featuring educational content from Google Developers. Built with vanilla JavaScript, optimized for performance and accessibility.

![Video Carousel Demo](https://img.shields.io/badge/demo-live-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![CSS](https://img.shields.io/badge/CSS-Material%20Design%203-blue)
![Performance](https://img.shields.io/badge/Performance-Optimized-green)

## ✨ Features

- **🎯 Interactive Video Player** - Click-to-play with smooth overlay transitions
- **📱 Responsive Design** - Seamless experience across desktop, tablet, and mobile
- **⚡ Performance Optimized** - DOM caching, lazy loading, and efficient animations
- **♿ Accessibility First** - ARIA labels, keyboard navigation, and reduced motion support
- **🎨 Material Design 3** - Modern Google-inspired UI with smooth animations
- **🔄 Auto-play Carousel** - Optional autoplay with manual navigation controls
- **📊 Real Educational Content** - Curated JavaScript, CSS, and web development videos

<img width="1896" height="913" alt="video-carousel" src="https://github.com/user-attachments/assets/157b1e08-bf34-4d3a-8ae7-02193c706288" />

## � Demo https://syntaxsidekick.github.io/video-carousel/

Experience the carousel with real Google Developer videos covering:
- JavaScript Fundamentals & ES6+ Features
- CSS Grid & Modern Layout Techniques
- Progressive Web Apps (PWAs)
- Web Components & Material Design
- Chrome DevTools Tips & Performance Optimization

## 🛠️ Technologies

- **Frontend**: Vanilla JavaScript (ES6+), CSS3, HTML5
- **Design System**: Material Design 3
- **Performance**: RequestIdleCallback, Intersection Observer, DOM Caching
- **Accessibility**: ARIA attributes, Keyboard navigation, Reduced motion
- **Video Platform**: YouTube Embed API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/syntaxsidekick/video-carousel.git
   cd video-carousel
   ```

2. **Serve the files**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

## 🎮 Usage

### Basic Navigation
- **Play Video**: Click the play button overlay
- **Navigate Carousel**: Use arrow buttons or keyboard arrows
- **Page Navigation**: Click pagination dots
- **Auto-play**: Toggle the autoplay switch

### Keyboard Shortcuts
- `←/→` - Navigate carousel pages
- `↑/↓` - Select different videos
- `Space` - Toggle autoplay

### Touch Gestures
- **Swipe left/right** - Navigate carousel on mobile devices

## 🔧 Customization

### Adding New Videos
Update the `videoData` array in `script.js`:

```javascript
const videoData = [
  {
    id: 'YOUTUBE_VIDEO_ID',
    title: 'Your Video Title',
    channel: 'Channel Name',
    views: '1.2M views',
    duration: '10:30',
    uploadDate: '1 week ago'
  },
  // ... more videos
];
```

### Styling
Modify CSS custom properties in `styles.css`:

```css
:root {
  --primary: #4285f4;          /* Primary color */
  --surface: #fefbff;          /* Background color */
  --border-radius-lg: 16px;    /* Card border radius */
  --transition-fast: 150ms;    /* Animation speed */
}
```

## ⚡ Performance Features

- **DOM Caching** - All elements cached for faster access
- **Lazy Loading** - Images and iframe load when needed
- **Passive Event Listeners** - Better scroll performance
- **RequestIdleCallback** - Non-blocking initialization
- **Document Fragments** - Efficient DOM manipulation
- **Resource Preloading** - Critical CSS and JS preloaded

## 📱 Browser Support

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🧪 Performance Metrics

- **First Contentful Paint**: ~800ms
- **Largest Contentful Paint**: ~1.2s
- **Cumulative Layout Shift**: <0.1
- **Time to Interactive**: ~1.5s

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ES6+ standards
- Maintain accessibility standards
- Test across devices and browsers
- Keep performance optimizations
- Document new features

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Developers** - For the educational video content
- **Material Design Team** - For the design system
- **YouTube** - For the embed API
- **Web Platform** - For modern web APIs

## 📊 Project Stats

![Lines of Code](https://img.shields.io/badge/Lines%20of%20Code-~1000-blue)
![File Size](https://img.shields.io/badge/Total%20Size-~25KB-green)
![Dependencies](https://img.shields.io/badge/Dependencies-0-brightgreen)

## 🔮 Roadmap

- [ ] Add video search functionality
- [ ] Implement playlist creation
- [ ] Add video bookmarking
- [ ] Dark/Light theme toggle
- [ ] Video quality selection
- [ ] Subtitles support
- [ ] Social sharing features

---

**Built with ❤️ by [syntaxsidekick](https://github.com/syntaxsidekick)**

*Showcase modern web development techniques with educational video content*
