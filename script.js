// Loading Screen Animation (fixed: show only on first visit; skip on back/home)
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');

    if (!loadingScreen || !mainContent) return;

    const splashShown = localStorage.getItem('splashShown') === 'true';

    // If splash was already shown, skip it (useful when navigating Back/Home)
    if (splashShown) {
        loadingScreen.style.display = 'none';
        mainContent.style.visibility = 'visible';
        mainContent.style.opacity = '1';
        return;
    }

    // First-time load: show splash then fade out and mark shown
    mainContent.style.visibility = 'hidden';
    loadingScreen.classList.remove('fade-out');

    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');

        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.style.visibility = 'visible';
            mainContent.style.opacity = '1';
            localStorage.setItem('splashShown', 'true');
        }, 500);
    }, 3000);
});

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle?.querySelector('i');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        icon?.classList.remove('fa-moon');
        icon?.classList.add('fa-sun');
    }

    themeToggle?.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        if (icon) {
            icon.classList.toggle('fa-moon', !isDark);
            icon.classList.toggle('fa-sun', isDark);
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});

// Unit Expansion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const unitHeaders = document.querySelectorAll('.unit-header');
    
    unitHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const unitId = header.getAttribute('data-unit');
            const unitContent = document.getElementById(unitId);
            const arrow = header.querySelector('.unit-arrow');
            
            // Close all other units
            unitHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    const otherId = otherHeader.getAttribute('data-unit');
                    const otherContent = document.getElementById(otherId);
                    const otherArrow = otherHeader.querySelector('.unit-arrow');
                    
                    otherHeader.classList.remove('active');
                    otherContent.classList.remove('expanded');
                    otherArrow.classList.remove('rotated');
                }
            });
            
            // Toggle current unit
            if (unitContent.classList.contains('expanded')) {
                header.classList.remove('active');
                unitContent.classList.remove('expanded');
                arrow.classList.remove('rotated');
            } else {
                header.classList.add('active');
                unitContent.classList.add('expanded');
                arrow.classList.add('rotated');
                
                // Smooth scroll to unit
                setTimeout(() => {
                    header.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 200);
            }
        });
    });

    // NEW: Open unit by URL (?unit=unit5) or hash (#unit5)
    const params = new URLSearchParams(window.location.search);
    const unitParam = params.get('unit') || (window.location.hash ? window.location.hash.slice(1) : null);
    if (unitParam) {
        const header = document.querySelector(`.unit-header[data-unit="${unitParam}"]`);
        const unitContent = document.getElementById(unitParam);
        const arrow = header?.querySelector('.unit-arrow');
        if (header && unitContent && arrow) {
            // Close all
            unitHeaders.forEach(h => {
                const id = h.getAttribute('data-unit');
                document.getElementById(id)?.classList.remove('expanded');
                h.classList.remove('active');
                h.querySelector('.unit-arrow')?.classList.remove('rotated');
            });
            // Open target
            header.classList.add('active');
            unitContent.classList.add('expanded');
            arrow.classList.add('rotated');
            setTimeout(() => {
                header.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 200);
        }
    }
});

// Topic Navigation (click topic -> topic.html)
document.addEventListener('DOMContentLoaded', function() {
    const topicCards = document.querySelectorAll('.topic-card');

    topicCards.forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-topic');
            if (id) {
                localStorage.setItem('selectedTopic', id);
                window.location.href = 'topic.html';
            }
        });

        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });

        card.setAttribute('tabindex', '0');
    });
});

// Add ripple effect to buttons (exclude topic cards to keep simple)
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.unit-header');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = button.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
            button.appendChild(ripple);
            ripple.addEventListener('animationend', () => ripple.remove());
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .unit-header, .topic-card {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Convert "SAG" in footer to LinkedIn link (opens in new tab)
document.addEventListener('DOMContentLoaded', function () {
    const footerPs = document.querySelectorAll('.footer p');
    footerPs.forEach(p => {
        if (!p.querySelector('.sag-link')) {
            p.innerHTML = p.innerHTML.replace(
                /\bSAG\b/g,
                '<a href="https://www.linkedin.com/in/shaikabdulgaffar" target="_blank" rel="noopener noreferrer" class="sag-link" aria-label="Open SAG LinkedIn">SAG</a>'
            );
        }
    });
});

// Prevent text selection (except inputs/textarea/contenteditable)
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('selectstart', (e) => {
        const t = e.target;
        const tag = t.tagName?.toLowerCase();
        const editable = t.isContentEditable || tag === 'input' || tag === 'textarea';
        if (!editable) e.preventDefault();
    });
});

// Professional Announcement Banner
document.addEventListener('DOMContentLoaded', () => {
  const tickerContainer = document.getElementById('tickerContainer');
  const tickerTrack = document.getElementById('tickerTrack');
  const tickerProgress = document.getElementById('tickerProgress');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (!tickerContainer || !tickerTrack) return;
  
  const items = Array.from(tickerTrack.querySelectorAll('.ticker-item'));
  const totalItems = items.length;
  
  if (totalItems === 0) return;
  
  let currentIndex = 0;
  let autoPlayInterval = null;
  let progressInterval = null;
  let isPaused = false;
  const DISPLAY_DURATION = 4000; // 4 seconds
  const PROGRESS_INTERVAL = 50; // Update progress every 50ms
  
  // Initialize
  function init() {
    if (totalItems <= 1) {
      // Hide controls if only one item
      document.querySelector('.ticker-controls')?.style.setProperty('display', 'none');
      return;
    }
    
    updateDisplay();
    startAutoPlay();
    setupEventListeners();
  }
  
  // Update display to show current item
  function updateDisplay() {
    const translateX = currentIndex * -100;
    tickerTrack.style.transform = `translateX(${translateX}%)`;
    
    // Update button states
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    
    // Reset progress
    resetProgress();
  }
  
  // Start auto-play
  function startAutoPlay() {
    if (totalItems <= 1) return;
    
    autoPlayInterval = setInterval(() => {
      if (!isPaused) {
        nextItem();
      }
    }, DISPLAY_DURATION);
    
    startProgress();
  }
  
  // Stop auto-play
  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
    stopProgress();
  }
  
  // Start progress indicator
  function startProgress() {
    if (totalItems <= 1) return;
    
    let progress = 0;
    const increment = (PROGRESS_INTERVAL / DISPLAY_DURATION) * 100;
    
    progressInterval = setInterval(() => {
      if (!isPaused) {
        progress += increment;
        tickerProgress.style.width = `${Math.min(progress, 100)}%`;
        
        if (progress >= 100) {
          progress = 0;
        }
      }
    }, PROGRESS_INTERVAL);
  }
  
  // Stop progress indicator
  function stopProgress() {
    if (progressInterval) {
      clearInterval(progressInterval);
      progressInterval = null;
    }
  }
  
  // Reset progress
  function resetProgress() {
    tickerProgress.style.width = '0%';
  }
  
  // Go to next item
  function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateDisplay();
  }
  
  // Go to previous item
  function prevItem() {
    currentIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
    updateDisplay();
  }
  
  // Pause functionality
  function pause() {
    isPaused = true;
    tickerContainer.classList.add('paused');
  }
  
  // Resume functionality
  function resume() {
    isPaused = false;
    tickerContainer.classList.remove('paused');
  }
  
  // Setup event listeners
  function setupEventListeners() {
    // Manual navigation
    prevBtn.addEventListener('click', () => {
      prevItem();
      // Restart auto-play from current position
      stopAutoPlay();
      startAutoPlay();
    });
    
    nextBtn.addEventListener('click', () => {
      nextItem();
      // Restart auto-play from current position
      stopAutoPlay();
      startAutoPlay();
    });
    
    // Pause on hover
    tickerContainer.addEventListener('mouseenter', pause);
    tickerContainer.addEventListener('mouseleave', resume);
    
    // Pause on focus (accessibility)
    tickerContainer.addEventListener('focusin', pause);
    tickerContainer.addEventListener('focusout', resume);
    
    // Keyboard navigation
    tickerContainer.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevItem();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextItem();
          break;
        case ' ':
          e.preventDefault();
          isPaused ? resume() : pause();
          break;
      }
    });
    
    // Respect reduced motion preference
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      stopAutoPlay();
      tickerProgress.style.display = 'none';
    }
  }
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    stopAutoPlay();
  });
  
  // Initialize the banner
  init();
});

// Enhanced Announcement Banner Functionality
document.addEventListener('DOMContentLoaded', () => {
  const bannerToggle = document.getElementById('bannerToggle');
  const updatesContainer = document.getElementById('updatesContainer');
  const announcementBanner = document.querySelector('.announcement-banner');
  const updateItems = document.querySelectorAll('.update-item');
  
  // Toggle banner collapse/expand
  if (bannerToggle && updatesContainer && announcementBanner) {
    bannerToggle.addEventListener('click', () => {
      const isCollapsed = announcementBanner.classList.contains('collapsed');
      
      if (isCollapsed) {
        announcementBanner.classList.remove('collapsed');
        updatesContainer.style.maxHeight = updatesContainer.scrollHeight + 'px';
        bannerToggle.innerHTML = '<i class="fas fa-chevron-up"></i>';
      } else {
        announcementBanner.classList.add('collapsed');
        updatesContainer.style.maxHeight = '0px';
        bannerToggle.innerHTML = '<i class="fas fa-chevron-down"></i>';
      }
    });
  }
  
  // Add click handlers for update items
  updateItems.forEach(item => {
    item.addEventListener('click', () => {
      // Add a subtle feedback animation
      item.style.transform = 'scale(0.98)';
      setTimeout(() => {
        item.style.transform = '';
      }, 150);
      
      // You can add navigation or modal logic here
      const updateType = item.getAttribute('data-type');
      const updateTitle = item.querySelector('.update-title').textContent;
      
      console.log(`Clicked on ${updateType}: ${updateTitle}`);
      // Example: showUpdateDetails(updateTitle, updateType);
    });
    
    // Add keyboard accessibility
    item.setAttribute('tabindex', '0');
    item.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.click();
      }
    });
  });
  
  // Auto-collapse banner on mobile for better UX
  function handleMobileCollapse() {
    if (window.innerWidth <= 768 && announcementBanner && !announcementBanner.classList.contains('collapsed')) {
      // Auto-collapse on mobile, but allow user to expand
      // announcementBanner.classList.add('collapsed');
    }
  }
  
  // Initial check and on resize
  handleMobileCollapse();
  window.addEventListener('resize', handleMobileCollapse);
  
  // Add subtle animation on load
  setTimeout(() => {
    updateItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.4s ease';
        
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 50);
      }, index * 100);
    });
  }, 500);
});

// Enhanced Announcement Banner Functionality with Marquee
document.addEventListener('DOMContentLoaded', () => {
  const bannerToggle = document.getElementById('bannerToggle');
  const updatesContainer = document.getElementById('updatesContainer');
  const announcementBanner = document.querySelector('.announcement-banner');
  const marqueeContent = document.getElementById('marqueeContent');
  
  // Toggle banner collapse/expand
  if (bannerToggle && updatesContainer && announcementBanner) {
    bannerToggle.addEventListener('click', () => {
      const isCollapsed = announcementBanner.classList.contains('collapsed');
      
      if (isCollapsed) {
        announcementBanner.classList.remove('collapsed');
        bannerToggle.innerHTML = '<i class="fas fa-chevron-up"></i>';
        // Resume marquee animation
        if (marqueeContent) {
          marqueeContent.style.animationPlayState = 'running';
        }
      } else {
        announcementBanner.classList.add('collapsed');
        bannerToggle.innerHTML = '<i class="fas fa-chevron-down"></i>';
        // Pause marquee animation
        if (marqueeContent) {
          marqueeContent.style.animationPlayState = 'paused';
        }
      }
    });
  }
  
  // Add click handlers for marquee items
  const marqueeItems = document.querySelectorAll('.marquee-item');
  marqueeItems.forEach(item => {
    item.addEventListener('click', () => {
      // Add a subtle feedback animation
      item.style.transform = 'scale(0.95)';
      setTimeout(() => {
        item.style.transform = '';
      }, 150);
      
      const updateType = item.getAttribute('data-type');
      const updateText = item.textContent.trim();
      
      console.log(`Clicked on ${updateType}: ${updateText}`);
      
      // Optional: Show more details in a modal or navigate somewhere
      // showUpdateModal(updateText, updateType);
    });
  });
  
  // Duplicate marquee content for seamless loop (guarded)
  if (marqueeContent && !marqueeContent.dataset.dupe) {
    const originalContent = marqueeContent.innerHTML.trim();
    marqueeContent.innerHTML = originalContent + originalContent;
    marqueeContent.dataset.dupe = 'true';
  }

  // Set a consistent slower speed; avoid auto-speeding up
  function adjustMarqueeSpeed() {
    if (marqueeContent) {
      const baseSpeed = 120; // slower for readability
      marqueeContent.style.animationDuration = baseSpeed + 's';
    }
  }
  adjustMarqueeSpeed();

  // Pause/resume marquee on hover
  const marqueeContainer = document.querySelector('.marquee-container');
  if (marqueeContainer && marqueeContent) {
    marqueeContainer.addEventListener('mouseenter', () => {
      marqueeContent.style.animationPlayState = 'paused';
    });
    
    marqueeContainer.addEventListener('mouseleave', () => {
      if (!announcementBanner.classList.contains('collapsed')) {
        marqueeContent.style.animationPlayState = 'running';
      }
    });
  }
});

// Function to add new marquee item dynamically
function addMarqueeUpdate(type, text, icon = 'fas fa-info-circle') {
  const marqueeContent = document.getElementById('marqueeContent');
  if (!marqueeContent) return;
  
  const newItem = document.createElement('div');
  newItem.className = 'marquee-item';
  newItem.setAttribute('data-type', type);
  newItem.innerHTML = `<i class="${icon}"></i>${text}`;
  
  // Add to the beginning
  marqueeContent.insertBefore(newItem, marqueeContent.firstChild);
  
  // Add click handler
  newItem.addEventListener('click', () => {
    newItem.style.transform = 'scale(0.95)';
    setTimeout(() => {
      newItem.style.transform = '';
    }, 150);
    console.log(`Clicked on ${type}: ${text}`);
  });
  
  // Maintain duplicate for seamless loop
  const duplicateItem = newItem.cloneNode(true);
  duplicateItem.addEventListener('click', () => {
    duplicateItem.style.transform = 'scale(0.95)';
    setTimeout(() => {
      duplicateItem.style.transform = '';
    }, 150);
    console.log(`Clicked on ${type}: ${text}`);
  });
  
  const midpoint = Math.floor(marqueeContent.children.length / 2);
  marqueeContent.insertBefore(duplicateItem, marqueeContent.children[midpoint]);
}

// Simple single-line marquee init (icon + one-line text)
document.addEventListener('DOMContentLoaded', () => {
    const marquee = document.getElementById('lineMarquee');
    const track = document.getElementById('lineMarqueeTrack');
    if (!marquee || !track) return;

    // Duplicate content once for seamless loop
    if (!track.dataset.dupe) {
        track.innerHTML = track.innerHTML + track.innerHTML;
        track.dataset.dupe = 'true';
    }

    // Set speed proportional to content width (keeps readable pace)
    const setSpeed = () => {
        // total width after duplication
        const total = track.scrollWidth;
        // pixels per second ~80; clamp duration between 24s and 120s
        const duration = Math.max(24, Math.min(120, total / 80));
        track.style.animationDuration = `${duration}s`;
    };
    // If fonts/styles impact width, recalc after a tick
    setTimeout(setSpeed, 0);
    window.addEventListener('resize', setSpeed);

    // Pause/resume on hover handled by CSS; add keyboard toggle (Space)
    marquee.addEventListener('keydown', (e) => {
        if (e.key === ' ') {
            e.preventDefault();
            const state = getComputedStyle(track).animationPlayState;
            track.style.animationPlayState = state === 'paused' ? 'running' : 'paused';
        }
    });

    // Reduced motion: stop animation
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        track.style.animation = 'none';
    }
});