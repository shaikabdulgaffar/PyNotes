// Unit III — Control Flow & Functions
// This file defines the topic content for this section only.
// It merges into the global 'topics' object used by topic.js (topic-core.js).

Object.assign(topics, {
  'decision-making': { title: 'Decision-Making', bullets: ['if, if-else, if-elif-else', 'Nested conditionals'] },

  'loops': { title: 'Loops', bullets: ['for over iterables', 'while with condition'] },

  'transfer-statements': { title: 'Transfer Statements', bullets: ['break, continue, pass'] },

  'functions-overview': { title: 'Functions', bullets: ['def name(params):', 'Return values via return'] },

  'function-arguments': { title: 'Function Arguments', bullets: ['Positional, Keyword', 'Default', '*args, **kwargs'] },

  'variable-scope': { title: 'Variable Scope', bullets: ['Local vs Global', 'global and nonlocal keywords'] }
});

// ---- Navigation & availability control for this section ----
topicOrder.push('decision-making', 'loops', 'transfer-statements', 'functions-overview', 'function-arguments', 'variable-scope');

Object.assign(unitMapping, {
  'decision-making': 'Unit III',
  'loops': 'Unit III',
  'transfer-statements': 'Unit III',
  'functions-overview': 'Unit III',
  'function-arguments': 'Unit III',
  'variable-scope': 'Unit III'
});

Object.assign(topicAvailability, {
  'decision-making': false,
  'loops': false,
  'transfer-statements': false,
  'functions-overview': false,
  'function-arguments': false,
  'variable-scope': false
});

Object.assign(unitTopicsByName, {
  'Unit III': ['decision-making', 'loops', 'transfer-statements', 'functions-overview', 'function-arguments', 'variable-scope']
});

// Enable/disable this entire unit (Unit 3)
function enableUnit3() {
  ['decision-making', 'loops', 'transfer-statements', 'functions-overview', 'function-arguments', 'variable-scope'].forEach(id => { topicAvailability[id] = true; });
  console.log('Enabled entire Unit 3');
}
function disableUnit3() {
  ['decision-making', 'loops', 'transfer-statements', 'functions-overview', 'function-arguments', 'variable-scope'].forEach(id => { topicAvailability[id] = false; });
  console.log('Disabled entire Unit 3');
}
