// Optimized Video Data
const videoData = [
  {
    id: 'hdI2bqOjy3c',
    title: 'JavaScript Fundamentals Course',
    channel: 'Google Chrome Developers',
    views: '2.1M views',
    duration: '12:45',
    uploadDate: '2 weeks ago'
  },
  {
    id: 'AX7uybwukkk',
    title: 'Web Components Crash Course',
    channel: 'Google Developers',
    views: '856K views',
    duration: '15:32',
    uploadDate: '1 month ago'
  },
  {
    id: 'jV8B24rSN5o',
    title: 'CSS Grid Complete Guide',
    channel: 'Google Chrome Developers',
    views: '1.5M views',
    duration: '18:20',
    uploadDate: '3 weeks ago'
  },
  {
    id: 'cuHDQhDhvPE',
    title: 'Progressive Web Apps Guide',
    channel: 'Google Developers',
    views: '3.2M views',
    duration: '22:15',
    uploadDate: '1 week ago'
  },
  {
    id: 'NCwa_xi0Uuc',
    title: 'JavaScript ES6 Features Overview',
    channel: 'Google Chrome Developers',
    views: '2.8M views',
    duration: '16:40',
    uploadDate: '5 days ago'
  },
  {
    id: 'SzA2YODtgK4',
    title: 'Material Design 3 Principles',
    channel: 'Material Design',
    views: '1.9M views',
    duration: '14:25',
    uploadDate: '2 weeks ago'
  },
  {
    id: 'ff4fgQxPaO0',
    title: 'Web Performance Best Practices',
    channel: 'Google Chrome Developers',
    views: '1.3M views',
    duration: '20:30',
    uploadDate: '1 month ago'
  },
  {
    id: 'YJGCZCaIZkQ',
    title: 'Chrome DevTools Tips & Tricks',
    channel: 'Google Chrome Developers',
    views: '987K views',
    duration: '13:45',
    uploadDate: '3 days ago'
  }
];

// Cache DOM elements
const domElements = {
  playButton: null,
  carouselPrev: null,
  carouselNext: null,
  autoplayToggle: null,
  carouselTrack: null,
  carouselPagination: null,
  mainIframe: null,
  videoTitle: null,
  videoOverlay: null,
  loadingOverlay: null,
  carouselWrapper: null
};

// Initialize DOM cache
function cacheDomElements() {
  domElements.playButton = document.getElementById('play-button');
  domElements.carouselPrev = document.getElementById('carousel-prev');
  domElements.carouselNext = document.getElementById('carousel-next');
  domElements.autoplayToggle = document.getElementById('autoplay-toggle');
  domElements.carouselTrack = document.getElementById('carousel-track');
  domElements.carouselPagination = document.getElementById('carousel-pagination');
  domElements.mainIframe = document.getElementById('main-iframe');
  domElements.videoTitle = document.getElementById('video-title');
  domElements.videoOverlay = document.getElementById('video-overlay');
  domElements.loadingOverlay = document.getElementById('loading-overlay');
  domElements.carouselWrapper = document.getElementById('carousel-wrapper');
}

class VideoCarousel {
  constructor() {
    this.currentVideoIndex = 0;
    this.currentCarouselPage = 0;
    this.videosPerPage = 4;
    this.autoplayEnabled = false;
    this.isInitialized = false;
    this.autoplayInterval = null;
    
    // Use requestIdleCallback for non-critical initialization
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => this.init());
    } else {
      setTimeout(() => this.init(), 0);
    }
  }
  
  async init() {
    try {
      // Cache DOM elements first
      cacheDomElements();
      
      // Show loading
      this.showLoading();
      
      // Initialize components with optimized async loading
      await this.initializeComponents();
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Hide loading
      this.hideLoading();
      
      this.isInitialized = true;
      
      // Add entrance animation with slight delay
      requestAnimationFrame(() => this.animateEntrance());
      
    } catch (error) {
      console.error('Failed to initialize video carousel:', error);
      this.hideLoading();
    }
  }
  
  async initializeComponents() {
    // Use document fragments for better performance
    this.generateCarouselItems();
    this.generatePaginationDots();
    this.updateMainVideo();
    this.updateCarouselNavigation();
    
    // Reduced loading delay
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  
  generateCarouselItems() {
    const fragment = document.createDocumentFragment();
    
    videoData.forEach((video, index) => {
      const videoCard = this.createVideoCard(video, index);
      fragment.appendChild(videoCard);
    });
    
    domElements.carouselTrack.innerHTML = '';
    domElements.carouselTrack.appendChild(fragment);
  }
  
  createVideoCard(video, index) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.dataset.index = index;
    
    const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
    
    card.innerHTML = `
      <div class="video-thumbnail">
        <img src="${thumbnailUrl}" alt="${video.title}" loading="lazy">
        <div class="video-duration">${video.duration}</div>
      </div>
      <div class="video-card-info">
        <h3 class="video-card-title">${video.title}</h3>
        <div class="video-card-meta">
          <span class="video-card-channel">${video.channel}</span>
          <span class="separator">•</span>
          <span>${video.views}</span>
          <span class="separator">•</span>
          <span>${video.uploadDate}</span>
        </div>
      </div>
    `;
    
    // Add click handler with ripple effect
    card.addEventListener('click', (e) => {
      this.addRippleEffect(e, card);
      this.selectVideo(index);
    });
    
    return card;
  }
  
  generatePaginationDots() {
    const pagination = document.getElementById('carousel-pagination');
    pagination.innerHTML = '';
    
    const totalPages = Math.ceil(videoData.length / this.videosPerPage);
    
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('button');
      dot.className = 'pagination-dot';
      dot.setAttribute('aria-label', `Go to page ${i + 1}`);
      if (i === 0) dot.classList.add('active');
      
      dot.addEventListener('click', () => this.goToCarouselPage(i));
      pagination.appendChild(dot);
    }
  }
  
  setupEventListeners() {
    // Use passive listeners where appropriate for better performance
    domElements.playButton?.addEventListener('click', () => this.playMainVideo());
    domElements.carouselPrev?.addEventListener('click', () => this.previousCarouselPage());
    domElements.carouselNext?.addEventListener('click', () => this.nextCarouselPage());
    domElements.autoplayToggle?.addEventListener('click', () => this.toggleAutoplay());
    
    // Keyboard navigation with passive listener
    document.addEventListener('keydown', (e) => this.handleKeyboardNavigation(e), { passive: true });
    
    // Optimized touch gestures
    this.setupTouchGestures();
    
    // Intersection Observer for performance
    this.setupIntersectionObserver();
  }
  
  setupTouchGestures() {
    const carouselWrapper = document.getElementById('carousel-wrapper');
    let startX = 0;
    let isDragging = false;
    
    carouselWrapper.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });
    
    carouselWrapper.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
    });
    
    carouselWrapper.addEventListener('touchend', (e) => {
      if (!isDragging) return;
      
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      
      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          this.nextCarouselPage();
        } else {
          this.previousCarouselPage();
        }
      }
      
      isDragging = false;
    });
  }
  
  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, options);
    
    // Observe video cards
    document.querySelectorAll('.video-card').forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(card);
    });
  }
  
  selectVideo(index) {
    this.currentVideoIndex = index;
    this.updateMainVideo();
    this.highlightSelectedCard();
  }
  
  playMainVideo() {
    const overlay = document.getElementById('video-overlay');
    const iframe = document.getElementById('main-iframe');
    const video = videoData[this.currentVideoIndex];
    
    // Hide the overlay
    overlay.style.display = 'none';
    
    // Update iframe source with autoplay
    iframe.src = `https://www.youtube.com/embed/${video.id}?enablejsapi=1&modestbranding=1&rel=0&autoplay=1`;
  }
  
  updateMainVideo() {
    const video = videoData[this.currentVideoIndex];
    
    // Show overlay for new video
    domElements.videoOverlay.style.display = 'flex';
    
    // Update iframe source (without autoplay)
    domElements.mainIframe.src = `https://www.youtube.com/embed/${video.id}?enablejsapi=1&modestbranding=1&rel=0`;
    
    // Update title with optimized animation
    domElements.videoTitle.style.opacity = '0';
    setTimeout(() => {
      domElements.videoTitle.textContent = video.title;
      domElements.videoTitle.style.opacity = '1';
    }, 100);
    
    // Update meta information
    this.updateVideoMeta(video);
  }
  
  playMainVideo() {
    const video = videoData[this.currentVideoIndex];
    
    // Hide the overlay
    domElements.videoOverlay.style.display = 'none';
    
    // Update iframe source with autoplay
    domElements.mainIframe.src = `https://www.youtube.com/embed/${video.id}?enablejsapi=1&modestbranding=1&rel=0&autoplay=1`;
  }
  
  updateVideoMeta(video) {
    const metaElements = document.querySelectorAll('.video-meta span');
    metaElements[0].textContent = video.channel; // channel name
    metaElements[2].textContent = video.views; // view count
    metaElements[4].textContent = video.uploadDate; // upload date
  }
  
  highlightSelectedCard() {
    // Remove existing highlights
    document.querySelectorAll('.video-card').forEach(card => {
      card.classList.remove('selected');
    });
    
    // Add highlight to current card
    const selectedCard = document.querySelector(`[data-index="${this.currentVideoIndex}"]`);
    if (selectedCard) {
      selectedCard.classList.add('selected');
    }
  }
  
  nextCarouselPage() {
    const totalPages = Math.ceil(videoData.length / this.videosPerPage);
    if (this.currentCarouselPage < totalPages - 1) {
      this.currentCarouselPage++;
      this.updateCarouselPosition();
      this.updatePaginationDots();
    }
  }
  
  previousCarouselPage() {
    if (this.currentCarouselPage > 0) {
      this.currentCarouselPage--;
      this.updateCarouselPosition();
      this.updatePaginationDots();
    }
  }
  
  goToCarouselPage(pageIndex) {
    this.currentCarouselPage = pageIndex;
    this.updateCarouselPosition();
    this.updatePaginationDots();
  }
  
  updateCarouselPosition() {
    const carouselTrack = document.getElementById('carousel-track');
    const cardWidth = 280; // Width of each card
    const gap = 16; // Gap between cards
    const translateX = -(this.currentCarouselPage * this.videosPerPage * (cardWidth + gap));
    
    carouselTrack.style.transform = `translateX(${translateX}px)`;
    this.updateCarouselNavigation();
  }
  
  updateCarouselNavigation() {
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const totalPages = Math.ceil(videoData.length / this.videosPerPage);
    
    prevBtn.disabled = this.currentCarouselPage === 0;
    nextBtn.disabled = this.currentCarouselPage === totalPages - 1;
  }
  
  updatePaginationDots() {
    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentCarouselPage);
    });
  }
  
  toggleAutoplay() {
    this.autoplayEnabled = !this.autoplayEnabled;
    const toggle = document.getElementById('autoplay-toggle');
    toggle.classList.toggle('active', this.autoplayEnabled);
    
    if (this.autoplayEnabled) {
      this.startAutoplay();
    } else {
      this.stopAutoplay();
    }
  }
  
  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      const nextIndex = (this.currentVideoIndex + 1) % videoData.length;
      this.selectVideo(nextIndex);
      
      // Adjust carousel position if needed
      const pageForVideo = Math.floor(nextIndex / this.videosPerPage);
      if (pageForVideo !== this.currentCarouselPage) {
        this.goToCarouselPage(pageForVideo);
      }
    }, 10000); // Change video every 10 seconds
  }
  
  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
  
  handleKeyboardNavigation(e) {
    if (!this.isInitialized) return;
    
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        this.previousCarouselPage();
        break;
      case 'ArrowRight':
        e.preventDefault();
        this.nextCarouselPage();
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (this.currentVideoIndex > 0) {
          this.selectVideo(this.currentVideoIndex - 1);
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (this.currentVideoIndex < videoData.length - 1) {
          this.selectVideo(this.currentVideoIndex + 1);
        }
        break;
      case ' ':
        e.preventDefault();
        this.toggleAutoplay();
        break;
    }
  }
  
  addRippleEffect(event, element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: radial-gradient(circle, rgba(66, 133, 244, 0.3) 0%, transparent 70%);
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
      z-index: 1;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
  
  animateEntrance() {
    const elements = [
      '.video-hero',
      '.carousel-header',
      '.carousel-container'
    ];
    
    elements.forEach((selector, index) => {
      const element = document.querySelector(selector);
      if (element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
          element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, index * 200);
      }
    });
  }
  
  showLoading() {
    domElements.loadingOverlay?.classList.remove('hidden');
  }
  
  hideLoading() {
    domElements.loadingOverlay?.classList.add('hidden');
  }
}

// CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
  
  .video-card.selected {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 24px rgba(66, 133, 244, 0.15);
  }
  
  .video-card.selected .video-thumbnail {
    box-shadow: 0 4px 16px rgba(66, 133, 244, 0.2);
  }
`;
document.head.appendChild(style);

// Initialize the carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Performance monitoring
  if ('performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      console.log(`Page load time: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
    });
  }
  
  new VideoCarousel();
});

// Optimized service worker registration
if ('serviceWorker' in navigator && 'caches' in window) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered successfully');
      })
      .catch(error => {
        console.log('SW registration failed');
      });
  });
}