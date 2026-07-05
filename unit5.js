// Unit V — Sets, Dictionaries & Modules
// This file defines the topic content for this section only.
// It merges into the global 'topics' object used by topic.js (topic-core.js).

Object.assign(topics, {
  'sets-intro': { title: 'Sets', bullets: ['Unordered unique elements', 'Create: {1,2} or set()'] },

  'sets-methods': { title: 'Set Functions & Methods', bullets: ['add(), update(), remove(), discard(), pop()', 'union, intersection, difference, symmetric_difference'] },

  'dict-intro': { title: 'Dictionaries', bullets: ['Key-value mapping', 'Create: {"k": "v"} or dict()'] },

  'dict-methods': { title: 'Dict Functions & Methods', bullets: ['get(), keys(), values(), items()', 'update(), pop(), setdefault()'] },

  'modules-intro': { title: 'Modules', bullets: ['Organize code across files', 'Create .py files and import'] },

  'modules-imports': { title: 'Import Patterns', bullets: ['import pkg', 'from pkg import name', 'import pkg as alias'] },

  'module-random': { title: 'Random Module', bullets: ['random(), randint(), choice(), shuffle(), sample()'] },

  'module-math': { title: 'Math Module', bullets: ['sqrt(), floor(), ceil(), pow(), pi, e'] }
});

// ---- Navigation & availability control for this section ----
topicOrder.push('sets-intro', 'sets-methods', 'dict-intro', 'dict-methods', 'modules-intro', 'modules-imports', 'module-random', 'module-math');

Object.assign(unitMapping, {
  'sets-intro': 'Unit V',
  'sets-methods': 'Unit V',
  'dict-intro': 'Unit V',
  'dict-methods': 'Unit V',
  'modules-intro': 'Unit V',
  'modules-imports': 'Unit V',
  'module-random': 'Unit V',
  'module-math': 'Unit V'
});

Object.assign(topicAvailability, {
  'sets-intro': false,
  'sets-methods': false,
  'dict-intro': false,
  'dict-methods': false,
  'modules-intro': false,
  'modules-imports': false,
  'module-random': false,
  'module-math': false
});

Object.assign(unitTopicsByName, {
  'Unit V': ['sets-intro', 'sets-methods', 'dict-intro', 'dict-methods', 'modules-intro', 'modules-imports', 'module-random', 'module-math']
});

// Enable/disable this entire unit (Unit 5)
function enableUnit5() {
  ['sets-intro', 'sets-methods', 'dict-intro', 'dict-methods', 'modules-intro', 'modules-imports', 'module-random', 'module-math'].forEach(id => { topicAvailability[id] = true; });
  console.log('Enabled entire Unit 5');
}
function disableUnit5() {
  ['sets-intro', 'sets-methods', 'dict-intro', 'dict-methods', 'modules-intro', 'modules-imports', 'module-random', 'module-math'].forEach(id => { topicAvailability[id] = false; });
  console.log('Disabled entire Unit 5');
}
