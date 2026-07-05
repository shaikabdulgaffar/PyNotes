// Unit IV — Lists & Tuples
// This file defines the topic content for this section only.
// It merges into the global 'topics' object used by topic.js (topic-core.js).

Object.assign(topics, {
  'lists-intro': {
    title: 'Lists',
    html: `
      <h2>What is a List?</h2>
      <p>A <strong>list</strong> in Python is a built-in data structure used to store multiple items in a single variable. Lists are mutable sequences, meaning their contents can be changed after creation.</p>

      <h2>Ways to Create Lists in Python</h2>
      <p>The most common ways to create lists in Python are <strong>using square brackets <code>[]</code></strong>, <strong>the <code>list()</code> constructor</strong>, and <strong>list comprehensions</strong>. Here is a complete breakdown of all the primary methods you can use to initialize and build lists.</p>

      <h3>1. Using Square Brackets <code>[]</code></h3>
      <p>This is the most straightforward, standard, and highly efficient way to declare a list.</p>

      <h4>Empty List:</h4>
      <div class="code-example"><pre><code>empty_list = []</code></pre></div>

      <h4>Populated List:</h4>
      <div class="code-example"><pre><code>fruits = ["apple", "banana", "cherry"]</code></pre></div>

      <h4>Mixed Data Types:</h4>
      <div class="code-example"><pre><code>mixed_list = [10, "Hello", 3.14, True]</code></pre></div>

      <h3>2. Using the <code>list()</code> Constructor</h3>
      <p>The built-in <code>list()</code> function converts other iterable objects (like strings, tuples, ranges, or sets) into a new Python list.</p>

      <h4>From a String (Splits into individual characters):</h4>
      <div class="code-example"><pre><code>chars = list("Python")  # Output: ['P', 'y', 't', 'h', 'o', 'n']</code></pre></div>

      <h4>From a Tuple:</h4>
      <div class="code-example"><pre><code>numbers = list((1, 2, 3))  # Output: [1, 2, 3]</code></pre></div>

      <h4>From a Range (Excellent for generating numerical sequences quickly):</h4>
      <div class="code-example"><pre><code>countdown = list(range(1, 6))  # Output: [1, 2, 3, 4, 5]</code></pre></div>

      <h3>3. Using List Comprehensions</h3>
      <p>List comprehensions provide a concise, single-line syntax to generate a list dynamically based on an existing sequence or loop.</p>

      <h4>Basic Generation:</h4>
      <div class="code-example"><pre><code>squares = [x**2 for x in range(5)]  # Output: [0, 1, 4, 9, 16]</code></pre></div>

      <h4>With a Condition:</h4>
      <div class="code-example"><pre><code>evens = [x for x in range(10) if x % 2 == 0]  # Output: [0, 2, 4, 6, 8]</code></pre></div>

      <h3>4. Using Multiplication (Repeated Elements)</h3>
      <p>If you need to pre-allocate a list of a specific size filled with a default placeholder value, use the <code>*</code> operator.</p>

      <h4>Constant Initialization:</h4>
      <div class="code-example"><pre><code>zeros = [0] * 5  # Output: [0, 0, 0, 0, 0]</code></pre></div>
    `
  },

  'lists-properties': {
    title: 'Properties of Lists',
    html: `
      <h2>Properties of Lists</h2>
      <ul>
        <li><strong>Ordered:</strong> Elements preserve insertion order.</li>
        <li><strong>Mutable:</strong> You can change, add, or remove elements after creation.</li>
        <li><strong>Heterogeneous:</strong> Items of different types can be stored together.</li>
        <li><strong>Indexed:</strong> Elements are accessed by integer indices (supports negative indices).</li>
        <li><strong>Allow duplicates:</strong> The same value may appear multiple times.</li>
        <li><strong>Dynamic size:</strong> Lists grow and shrink as you append/pop elements.</li>
        <li><strong>Iterable:</strong> Works with loops, comprehensions, and many built-in functions.</li>
        <li><strong>Nested:</strong> Can contain other lists (multi-dimensional structures).</li>
        <li><strong>Slicing & Concatenation:</strong> Supports slice syntax and the <code>+</code> operator.</li>
        <li><strong>Rich API:</strong> Methods like <code>append</code>, <code>extend</code>, <code>insert</code>, <code>remove</code>, <code>pop</code>, <code>sort</code>, <code>reverse</code>, and <code>copy</code>.</li>
      </ul>

      <h3>Examples</h3>
      <div class="code-example"><pre><code># Ordered and indexed
items = ["a", "b", "c"]
print(items[0])      # a
print(items[-1])     # c

# Mutable
items.append("d")
items[1] = "B"
print(items)         # ['a', 'B', 'c', 'd']

# Allow duplicates and heterogeneous
mix = [1, 2, 2, "three", 4.0]
print(mix)

# Nested lists
matrix = [[1,2,3], [4,5,6]]
print(matrix[1][0])  # 4

# Slicing and concatenation
print(items[1:3])    # slice
print(items + ["x"])# concatenation
</code></pre></div>
    `
  },

  'lists-accessing': { title: 'Accessing List Items', bullets: ['Indexing, slicing', 'Nested lists'] },

  'lists-methods': { title: 'List Functions & Methods', bullets: ['len(), sum()', 'append(), extend(), insert(), remove(), pop(), sort(), reverse()'] },

  'tuples-intro': { title: 'Tuples', bullets: ['Immutable sequences', 'Create: (1,2) or tuple()'] },

  'tuples-accessing': { title: 'Accessing Tuple Items', bullets: ['Indexing, slicing', 'Tuple unpacking'] },

  'tuples-methods': { title: 'Tuple Functions & Methods', bullets: ['len(), count(), index()'] }
});

// ---- Navigation & availability control for this section ----
topicOrder.push('lists-intro', 'lists-properties', 'lists-accessing', 'lists-methods', 'tuples-intro', 'tuples-accessing', 'tuples-methods');

Object.assign(unitMapping, {
  'lists-intro': 'Unit IV',
  'lists-properties': 'Unit IV',
  'lists-accessing': 'Unit IV',
  'lists-methods': 'Unit IV',
  'tuples-intro': 'Unit IV',
  'tuples-accessing': 'Unit IV',
  'tuples-methods': 'Unit IV'
});

Object.assign(topicAvailability, {
  'lists-intro': true,
  'lists-accessing': true,
  'lists-methods': true,
  'tuples-intro': true,
  'tuples-accessing': true,
  'tuples-methods': true
});

Object.assign(unitTopicsByName, {
  'Unit IV': ['lists-intro', 'lists-accessing', 'lists-methods', 'tuples-intro', 'tuples-accessing', 'tuples-methods']
});

// Enable/disable this entire unit (Unit 4)
function enableUnit4() {
  ['lists-intro', 'lists-accessing', 'lists-methods', 'tuples-intro', 'tuples-accessing', 'tuples-methods'].forEach(id => { topicAvailability[id] = true; });
  console.log('Enabled entire Unit 4');
}
function disableUnit4() {
  ['lists-intro', 'lists-accessing', 'lists-methods', 'tuples-intro', 'tuples-accessing', 'tuples-methods'].forEach(id => { topicAvailability[id] = false; });
  console.log('Disabled entire Unit 4');
}
