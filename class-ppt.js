// Class PPTs
// This file defines the topic content for this section only.
// It merges into the global 'topics' object used by topic.html (topic-core.js).

Object.assign(topics, {
  'class-ppt-unit-1': {
    title: 'Class PPT - Unit 1',
    html: `
      <h2>Class PPT - Unit 1</h2>
      <p>This section displays the Unit 1 classroom PPT from your <code>assets</code> folder.</p>
      <p>Keep your PDF at <code>assets/unit-1-ppt.pdf</code> and it will be shown below inside the app.</p>

      <div class="pdf-actions">
        <a class="pdf-link-btn" href="assets/unit-1-ppt.pdf" target="_blank" rel="noopener noreferrer">
          <i class="fa-solid fa-up-right-from-square"></i>
          Open PDF in New Tab
        </a>
      </div>

      <div class="pdf-viewer-card">
        <iframe
          class="pdf-viewer-frame"
          src="assets/unit-1-ppt.pdf#toolbar=1&navpanes=0&scrollbar=1"
          title="Unit 1 PPT PDF Viewer"
          loading="lazy">
        </iframe>
      </div>
    `
  },

  'class-ppt-unit-2': {
    title: 'Class PPT - Unit 2',
    html: `
      <h2>Class PPT - Unit 2</h2>
      <p>Unit 2 PPT card has been added.</p>
      <p>When you are ready, place the PDF in <code>assets/unit-2-ppt.pdf</code> and we can show it here the same way as Unit 1.</p>

      <div class="pdf-placeholder">
        <i class="fa-solid fa-file-powerpoint"></i>
        <p>Unit 2 PDF not added yet.</p>
      </div>
    `
  }
});

// ---- Navigation & availability control for this section ----
topicOrder.push('class-ppt-unit-1', 'class-ppt-unit-2');

Object.assign(unitMapping, {
  'class-ppt-unit-1': 'Class PPT',
  'class-ppt-unit-2': 'Class PPT'
});

Object.assign(topicAvailability, {
  'class-ppt-unit-1': true,
  'class-ppt-unit-2': true
});

Object.assign(unitTopicsByName, {
  'Class PPT': ['class-ppt-unit-1', 'class-ppt-unit-2']
});

// Enable/disable this entire section (Class PPT)
function enableClassPPT() {
  ['class-ppt-unit-1', 'class-ppt-unit-2'].forEach(id => { topicAvailability[id] = true; });
  console.log('Enabled entire section: Class PPT');
}
function disableClassPPT() {
  ['class-ppt-unit-1', 'class-ppt-unit-2'].forEach(id => { topicAvailability[id] = false; });
  console.log('Disabled entire section: Class PPT');
}