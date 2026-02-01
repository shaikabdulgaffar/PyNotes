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

const topicOrder = [
  'what-is-python','features-advantages','history-versions','applications',
  'first-program','comments','indentation','keywords','escape-sequence','variables',
  'basic-datatypes','advanced-datatypes',
  'operators-overview','input-function','type-conversion','print-formatting','strings-basics','string-methods','string-indexing-slicing',
  'decision-making','loops','transfer-statements','functions-overview','function-arguments','variable-scope',
  'lists-intro','lists-accessing','lists-methods',
  'tuples-intro','tuples-accessing','tuples-methods',
  'sets-intro','sets-methods','dict-intro','dict-methods',
  'modules-intro','modules-imports','module-random','module-math'
];

const topics = {
  'what-is-python': { title: 'What is Python', bullets: ['High-level, interpreted language', 'Emphasizes readability and rapid development'] },
  'features-advantages': { title: 'Features & Advantages', bullets: ['Simple syntax', 'Large standard library', 'Cross-platform', 'Community & packages (PyPI)'] },
  'history-versions': { title: 'History & Versions', bullets: ['Created by Guido van Rossum (1991)', 'Major branches: Python 2 (EOL), Python 3'] },
  'applications': { title: 'Applications', bullets: ['Web, Data Science/ML, Automation/Scripting', 'Systems, Networking, Game dev, Education'] },

  'first-program': { title: 'First Python Program', bullets: ['Use print("Hello, World!")', 'Run via python file.py or REPL'] },
  'comments': { title: 'Comments', bullets: ['Single-line: #', 'Docstrings: """..."""'] },
  'indentation': { title: 'Indentation', bullets: ['Indent blocks with spaces (PEP 8: 4 spaces)', 'No braces; indentation defines scope'] },
  'keywords': { title: 'Keywords', bullets: ['Reserved words (if, else, for, while, def, class, return, True, False, None, etc.)'] },
  'escape-sequence': { title: 'Escape Sequence', bullets: ['Common: \\n, \\t, \\\\', 'Raw strings: r"text"'] },
  'variables': { title: 'Variables', bullets: ['Dynamic typing', 'Naming: snake_case', 'Assignment uses ='] },
  'basic-datatypes': { title: 'Basic Data Types', bullets: ['int, float, str, complex, bool'] },
  'advanced-datatypes': { title: 'Advanced Data Types', bullets: ['list, tuple, set, dict'] },

  'operators-overview': { title: 'Operators', bullets: ['Arithmetic + - * / // % **', 'Assignment = += -= etc.', 'Comparison == != < <= > >=', 'Logical and or not', 'Bitwise & | ^ ~ << >>', 'Identity is is not', 'Membership in not in'] },
  'input-function': { title: 'input()', bullets: ['Reads string from stdin', 'Prompt via input("Prompt: ")'] },
  'type-conversion': { title: 'Type Conversion', bullets: ['int(), float(), str(), bool()', 'list(), tuple(), set(), dict()'] },
  'print-formatting': { title: 'print() & Formatting', bullets: ['print(*args, sep, end)', 'f-strings: f"{x=}"', 'format(): "{:.2f}".format(x)'] },
  'strings-basics': { title: 'Strings Basics', bullets: ['Immutable sequences of Unicode', 'Create via quotes'] },
  'string-methods': { title: 'String Methods', bullets: ['lower(), upper(), strip(), split(), join()', 'find(), replace(), startswith(), endswith()'] },
  'string-indexing-slicing': { title: 'Indexing & Slicing', bullets: ['s[i], s[a:b], s[a:b:c]', 'Negative indices supported'] },

  'decision-making': { title: 'Decision-Making', bullets: ['if, if-else, if-elif-else', 'Nested conditionals'] },
  'loops': { title: 'Loops', bullets: ['for over iterables', 'while with condition'] },
  'transfer-statements': { title: 'Transfer Statements', bullets: ['break, continue, pass'] },
  'functions-overview': { title: 'Functions', bullets: ['def name(params):', 'Return values via return'] },
  'function-arguments': { title: 'Function Arguments', bullets: ['Positional, Keyword', 'Default', '*args, **kwargs'] },
  'variable-scope': { title: 'Variable Scope', bullets: ['Local vs Global', 'global and nonlocal keywords'] },

  'lists-intro': { title: 'Lists', bullets: ['Mutable sequences', 'Create: [1,2,3] or list()'] },
  'lists-accessing': { title: 'Accessing List Items', bullets: ['Indexing, slicing', 'Nested lists'] },
  'lists-methods': { title: 'List Functions & Methods', bullets: ['len(), sum()', 'append(), extend(), insert(), remove(), pop(), sort(), reverse()'] },

  'tuples-intro': { title: 'Tuples', bullets: ['Immutable sequences', 'Create: (1,2) or tuple()'] },
  'tuples-accessing': { title: 'Accessing Tuple Items', bullets: ['Indexing, slicing', 'Tuple unpacking'] },
  'tuples-methods': { title: 'Tuple Functions & Methods', bullets: ['len(), count(), index()'] },

  'sets-intro': { title: 'Sets', bullets: ['Unordered unique elements', 'Create: {1,2} or set()'] },
  'sets-methods': { title: 'Set Functions & Methods', bullets: ['add(), update(), remove(), discard(), pop()', 'union, intersection, difference, symmetric_difference'] },
  'dict-intro': { title: 'Dictionaries', bullets: ['Key-value mapping', 'Create: {"k": "v"} or dict()'] },
  'dict-methods': { title: 'Dict Functions & Methods', bullets: ['get(), keys(), values(), items()', 'update(), pop(), setdefault()'] },

  'modules-intro': { title: 'Modules', bullets: ['Organize code across files', 'Create .py files and import'] },
  'modules-imports': { title: 'Import Patterns', bullets: ['import pkg', 'from pkg import name', 'import pkg as alias'] },
  'module-random': { title: 'Random Module', bullets: ['random(), randint(), choice(), shuffle(), sample()'] },
  'module-math': { title: 'Math Module', bullets: ['sqrt(), floor(), ceil(), pow(), pi, e'] }
};

function renderTopic(id) {
  const topic = topics[id] || topics[topicOrder[0]];
  const breadcrumb = document.getElementById('topicBreadcrumb');
  const content = document.getElementById('topicContent');
  breadcrumb.textContent = topic.title;
  content.innerHTML = `
    <div class="content-card">
      <h2>📖 ${topic.title}</h2>
      <ul>${topic.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      <div class="code-example"><pre># Example\nprint("${topic.title}")</pre></div>
    </div>
  `;
  updateNav(id);
}

function updateNav(currentId) {
  const idx = topicOrder.indexOf(currentId);
  const prevBtn = document.getElementById('prevTopic');
  const nextBtn = document.getElementById('nextTopic');
  prevBtn.disabled = idx <= 0;
  nextBtn.disabled = idx >= topicOrder.length - 1;
  prevBtn.onclick = () => { if (idx > 0) { const id = topicOrder[idx - 1]; localStorage.setItem('selectedTopic', id); renderTopic(id); } };
  nextBtn.onclick = () => { if (idx < topicOrder.length - 1) { const id = topicOrder[idx + 1]; localStorage.setItem('selectedTopic', id); renderTopic(id); } };
}

document.addEventListener('DOMContentLoaded', () => {
  const selected = localStorage.getItem('selectedTopic') || topicOrder[0];
  renderTopic(selected);
});