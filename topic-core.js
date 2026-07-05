// ============================================================
// TOPIC CORE ENGINE
// This file contains ONLY generic logic shared across all units
// and sections. It does NOT contain any unit-specific data or
// control functions anymore.
//
// Each unit/section file (unit1.js, unit2.js, unit3.js, unit4.js,
// unit5.js, class-ppt.js, practice-sheets.js, lab-activities.js,
// assignments.js, previous-papers.js) is now fully responsible for:
//   - its own 'topics' content
//   - its own slice of 'topicOrder' (pushed in load order)
//   - its own slice of 'unitMapping' (merged in)
//   - its own slice of 'topicAvailability' (merged in)
//   - its own entry in 'unitTopicsByName' (merged in)
//   - its own enable/disable function (e.g. enableUnit1(), disableUnit1(),
//     enableClassPPT(), disableClassPPT(), etc.)
//
// This file just declares the shared containers (empty) that those
// files populate, plus the rendering/navigation engine that reads
// from them. Load order in topic.html: this file FIRST, then every
// unit/section file.
// ============================================================

// Theme toggle
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const icon = themeToggle?.querySelector('i');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') { body.classList.add('dark-theme'); icon?.classList.remove('fa-moon'); icon?.classList.add('fa-sun'); }
  themeToggle?.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    icon?.classList.toggle('fa-moon', !isDark);
    icon?.classList.toggle('fa-sun', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});

// Safe ID normalization function
function normalizeTopicId(id) {
  if (id && topics[id]) return id;
  return topicOrder.find(tid => topics[tid]) || 'intro-programming-languages';
}

// ---- Shared containers populated by each unit/section file ----
// (Order of items in topicOrder / unitTopicsByName depends on the
// <script> load order in topic.html, so keep that order intact.)
const topicOrder = [];
const unitMapping = {};
const topics = {};
const topicAvailability = {};
const unitTopicsByName = {};

// Function to check if topic is available
function isTopicAvailable(topicId) {
  return topicAvailability[topicId] !== false;
}

// Coming soon message for disabled topics
const comingSoonMessage = {
  title: 'Coming Soon!',
  html: `
    <div class="content-card">
      <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
        <div style="font-size: 4rem; margin-bottom: 1rem;">😄</div>
        <h2 style="color: var(--accent-primary); margin-bottom: 1rem;">Oh Oh, at least let me explain the topic in class first, then you can read the notes.</h2>
        <p style="font-size: 1.1rem; line-height: 1.6; max-width: 500px; margin: 0 auto;">
          This topic will be available once we cover it in the classroom. 
          Stay tuned and don't miss the class!
        </p>
      </div>
    </div>
  `
};

// Modified renderTopic function
function renderTopic(id) {
  const safeId = normalizeTopicId(id);
  const topic = topics[safeId];
  const breadcrumb = document.getElementById('topicBreadcrumb');
  const content = document.getElementById('topicContent');
  
  // Get unit name for breadcrumb
  const unitName = unitMapping[safeId] || 'Unit I';
  
  // Update breadcrumb with unit information
  breadcrumb.innerHTML = `
    <span>Home</span>
    <span>></span>
    <span>${unitName}</span>
    <span>></span>
    <span>${topic.title}</span>
  `;
  
  // Check if topic is available
  if (!isTopicAvailable(safeId)) {
    content.innerHTML = comingSoonMessage.html;
    updateNav(safeId);
    return;
  }
  
  // Render normal content if available
  if (topic.html) {
    content.innerHTML = `
      <div class="content-card">
        ${topic.html}
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="content-card">
        <h2>📖 ${topic.title}</h2>
        <ul>${(topic.bullets || []).map(b => `<li>${b}</li>`).join('')}</ul>
      </div>
    `;
  }
  updateNav(safeId);
}

// NEW: Prev/Next navigation updater – keeps navigation within the same unit
function updateNav(currentId) {
  const prevBtn = document.getElementById('prevTopic');
  const nextBtn = document.getElementById('nextTopic');
  if (!prevBtn || !nextBtn) return;

  const unitName = unitMapping[currentId] || 'Unit I';
  let list = unitTopicsByName[unitName];

  // Fallback to global order if somehow not found
  if (!list || !Array.isArray(list)) {
    list = topicOrder;
  }

  // Only include topics that are defined and (optionally) available
  const availableList = list.filter(
    tid => topics[tid] && isTopicAvailable(tid)
  );

  const idx = availableList.indexOf(currentId);

  const hasPrev = idx > 0;
  const hasNext = idx !== -1 && idx < availableList.length - 1;

  prevBtn.disabled = !hasPrev;
  nextBtn.disabled = !hasNext;

  prevBtn.dataset.targetTopic = hasPrev ? availableList[idx - 1] : '';
  nextBtn.dataset.targetTopic = hasNext ? availableList[idx + 1] : '';
}

// Generic function to enable a specific list of topic IDs.
// Unit-specific enable/disable (e.g. enableUnit1(), enableClassPPT())
// live in their own files and call this internally.
function enableTopics(topicIds) {
  topicIds.forEach(id => {
    topicAvailability[id] = true;
  });
  console.log(`Enabled topics: ${topicIds.join(', ')}`);
}

// Generic function to disable a specific list of topic IDs.
function disableTopics(topicIds) {
  topicIds.forEach(id => {
    topicAvailability[id] = false;
  });
  console.log(`Disabled topics: ${topicIds.join(', ')}`);
}

// Function to get status of all topics
function getTopicStatus() {
  console.table(topicAvailability);
  return topicAvailability;
}

document.addEventListener('DOMContentLoaded', () => {
  const selected = normalizeTopicId(localStorage.getItem('selectedTopic'));
  localStorage.setItem('selectedTopic', selected);
  renderTopic(selected);

  const prevBtn = document.getElementById('prevTopic');
  const nextBtn = document.getElementById('nextTopic');

  prevBtn?.addEventListener('click', () => {
    const target = prevBtn.dataset.targetTopic;
    if (target) {
      localStorage.setItem('selectedTopic', target);
      renderTopic(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  nextBtn?.addEventListener('click', () => {
    const target = nextBtn.dataset.targetTopic;
    if (target) {
      localStorage.setItem('selectedTopic', target);
      renderTopic(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

// Smart Scroll Button Functionality (same as in script.js)
document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.getElementById('smartScrollBtn');
    if (!scrollBtn) return;

    const icon = scrollBtn.querySelector('i');
    let isAtTop = true;
    let isVisible = false;
    let ticking = false;

    // Throttled scroll handler for better performance
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(updateScrollButton);
            ticking = true;
        }
    }

    function updateScrollButton() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );

        // Show button if not near the very top (after 200px)
        const shouldShow = scrollTop > 200;
        
        // Determine if user is closer to top or bottom
        const distanceFromTop = scrollTop;
        const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
        const newIsAtTop = distanceFromTop < distanceFromBottom;

        // Update button visibility
        if (shouldShow !== isVisible) {
            isVisible = shouldShow;
            scrollBtn.classList.toggle('visible', shouldShow);
        }

        // Update button direction and tooltip
        if (newIsAtTop !== isAtTop) {
            isAtTop = newIsAtTop;
            
            if (isAtTop) {
                // User is closer to top, show down arrow (scroll to bottom)
                icon.className = 'fas fa-chevron-down';
                scrollBtn.setAttribute('aria-label', 'Scroll to bottom');
                scrollBtn.setAttribute('title', 'Go to bottom');
                scrollBtn.classList.add('rotate-icon');
            } else {
                // User is closer to bottom, show up arrow (scroll to top)
                icon.className = 'fas fa-chevron-up';
                scrollBtn.setAttribute('aria-label', 'Scroll to top');
                scrollBtn.setAttribute('title', 'Go to top');
                scrollBtn.classList.remove('rotate-icon');
            }
        }

        ticking = false;
    }

    // Smooth scroll function
    function smoothScrollTo(target) {
        const start = window.pageYOffset;
        const distance = target - start;
        const duration = Math.min(1000, Math.abs(distance) / 2); // Max 1 second
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Easing function (ease-in-out)
            const ease = progress < 0.5 
                ? 2 * progress * progress 
                : -1 + (4 - 2 * progress) * progress;

            window.scrollTo(0, start + (distance * ease));

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    // Click handler
    scrollBtn.addEventListener('click', function() {
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );

        if (isAtTop) {
            // Scroll to bottom
            smoothScrollTo(documentHeight - window.innerHeight);
        } else {
            // Scroll to top
            smoothScrollTo(0);
        }

        // Add click feedback
        scrollBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            scrollBtn.style.transform = '';
        }, 150);
    });

    // Keyboard accessibility
    scrollBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollBtn.click();
        }
    });

    // Initialize scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    updateScrollButton();

    // Handle window resize (may affect document height)
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateScrollButton, 150);
    });
});
