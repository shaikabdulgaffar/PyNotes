// Previous Papers
// This file defines the topic content for this section only.
// It merges into the global 'topics' object used by topic.html (topic-core.js).

Object.assign(topics, {
  'prev-2025': {
    title: 'Previous Paper - July 2025',
    html: `
      <h2>Previous Paper - July 2025</h2>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <img src="assets/prev-2025-page1.png" alt="Previous Paper July 2025 - Page 1" style="max-width:100%;height:auto;border:1px solid var(--border-color);border-radius:8px;" />
        <img src="assets/prev-2025-page2.png" alt="Previous Paper July 2025 - Page 2" style="max-width:100%;height:auto;border:1px solid var(--border-color);border-radius:8px;" />
      </div>
    `
  }
});

// ---- Navigation & availability control for this section ----
topicOrder.push('prev-2025');

Object.assign(unitMapping, {
  'prev-2025': 'Previous Papers'
});

Object.assign(topicAvailability, {
  'prev-2025': true
});

Object.assign(unitTopicsByName, {
  'Previous Papers': ['prev-2025']
});

// Enable/disable this entire section (Previous Papers)
function enablePreviousPapers() {
  ['prev-2025'].forEach(id => { topicAvailability[id] = true; });
  console.log('Enabled entire section: Previous Papers');
}
function disablePreviousPapers() {
  ['prev-2025'].forEach(id => { topicAvailability[id] = false; });
  console.log('Disabled entire section: Previous Papers');
}
