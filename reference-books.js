// Reference Books
// This file defines the topic content for this section only.
// It merges into the global 'topics' object used by topic.html (topic-core.js).

Object.assign(topics, {
  'reference-book-1': {
    title: 'Reference Book 1',
    html: `
      <h2>Reference Book 1</h2>
      <p>This section displays a reference book PDF from your <code>assets</code> folder.</p>
      <p>Keep your PDF at <code>assets/reference-book-1.pdf</code> and it will be shown below inside the app.</p>

      <div class="pdf-actions">
        <a class="pdf-link-btn" href="assets/reference-book-1.pdf" target="_blank" rel="noopener noreferrer">
          <i class="fa-solid fa-up-right-from-square"></i>
          Open PDF in New Tab
        </a>
      </div>

      <div class="pdf-viewer-card">
        <iframe
          class="pdf-viewer-frame"
          src="assets/reference-book-1.pdf#toolbar=1&navpanes=0&scrollbar=1"
          title="Reference Book 1 PDF Viewer"
          loading="lazy">
        </iframe>
      </div>
    `
  }
});

// ---- Navigation & availability control for this section ----
topicOrder.push('reference-book-1', 'reference-book-2');

Object.assign(unitMapping, {
  'reference-book-1': 'Reference Books',
  'reference-book-2': 'Reference Books'
});

Object.assign(topicAvailability, {
  'reference-book-1': true,
  'reference-book-2': true
});

Object.assign(unitTopicsByName, {
  'Reference Books': ['reference-book-1', 'reference-book-2']
});

// Enable/disable this entire section (Reference Books)
function enableReferenceBooks() {
  ['reference-book-1', 'reference-book-2'].forEach(id => { topicAvailability[id] = true; });
  console.log('Enabled entire section: Reference Books');
}
function disableReferenceBooks() {
  ['reference-book-1', 'reference-book-2'].forEach(id => { topicAvailability[id] = false; });
  console.log('Disabled entire section: Reference Books');
}