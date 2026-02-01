// Loading Screen Animation
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('mainContent');
    
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.add('show');
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
                '<a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" class="sag-link" aria-label="Open SAG LinkedIn">SAG</a>'
            );
        }
    });
});