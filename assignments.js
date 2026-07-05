// Assignments
// This file defines the topic content for this section only.
// It merges into the global 'topics' object used by topic.html (topic-core.js).

Object.assign(topics, {
  'assignments-overview': {
    title: 'Assignment for Internal 1',
    html: `
        <h2>Unit I</h2>
        <ol>
          <li>What is Python? Explain its features and advantages in detail.</li>
          <li>Explain the history of Python and describe its applications in various fields.</li>
          <li>Explain Comments, Indentation and Escape Sequences with examples.</li>
          <li>Discuss Keywords and Variables in Python.</li>
          <li>Explain the Basic and Advanced Data Types in Python.</li>
        </ol>

        <h2>Unit II</h2>
        <ol>
          <li>Explain different types of operators in Python with suitable examples.</li>
          <li>What is type conversion in Python? Explain Implicit & Explicit type conversion with examples.</li>
          <li>Explain input() and print() function in python in detail.</li>
          <li>Explain how strings are created in Python. Explain any 10 string Built-in methods.</li>
          <li>What is a string indexing and slicing. Explain with examples.</li>
        </ol>
    `
  },

  'assignments-internal-2': {
    title: 'Assignment for Internal 2',
    html: `
        <h2>Unit III</h2>
        <ol>
          <li>Explain Control Flow in Python in detail.</li>
          <li>Discuss about Looping (for, while) and Loop Control (break, continue, pass) Statements in Python.</li>
          <li>What is function()? Explain function arguments with example.</li>
        </ol>

        <h2>Unit IV</h2>
        <ol>
          <li>Differentiate between list[] and tuple().</li>
          <li>Explain list[] built-in functions and methods with simple example.</li>
          <li>How tuple() is accessed. Explain tuple() built-in functions and methods.</li>
        </ol>

        <h2>Unit V</h2>
        <ol>
          <li>Compare set{} vs dict{}.</li>
          <li>Explain set{} built-in functions and methods with simple example.</li>
          <li>How dict{} is accessed. Explain its built-in functions and methods.</li>
          <li>What is module in Python? Explain various modules in Python.</li>
        </ol>
    `
  }
});

// ---- Navigation & availability control for this section ----
topicOrder.push('assignments-overview', 'assignments-internal-2');

Object.assign(unitMapping, {
  'assignments-overview': 'Assignments',
  'assignments-internal-2': 'Assignments'
});

Object.assign(topicAvailability, {
  'assignments-overview': true,
  'assignments-internal-2': true
});

Object.assign(unitTopicsByName, {
  'Assignments': ['assignments-overview', 'assignments-internal-2']
});

// Enable/disable this entire section (Assignments)
function enableAssignments() {
  ['assignments-overview', 'assignments-internal-2'].forEach(id => { topicAvailability[id] = true; });
  console.log('Enabled entire section: Assignments');
}
function disableAssignments() {
  ['assignments-overview', 'assignments-internal-2'].forEach(id => { topicAvailability[id] = false; });
  console.log('Disabled entire section: Assignments');
}
