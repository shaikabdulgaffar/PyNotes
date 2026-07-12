// Unit V — Sets, Dictionaries & Modules
// This file defines the topic content for this section only.
// It merges into the global 'topics' object used by topic.js (topic-core.js).

Object.assign(topics, {
  'sets-intro': {
    title: 'Set and its Properties',
    html: `
      <h2>What is a Set?</h2>
      <p>A <strong>set</strong> is a built-in data structure used to store an unordered collection of unique items. Sets are mutable, but the elements inside a set must be immutable (hashable). Sets are one of the most useful data structures when you need to eliminate duplicates or perform mathematical set operations.</p>

      <h2>Core Properties of Python Sets</h2>
      <ul>
        <li><strong>Mutable:</strong> The set itself can be modified (add or remove elements).</li>
        <li><strong>Immutable Items:</strong> Elements stored in a set must be immutable (hashable). You cannot store lists or other sets inside a set.</li>
        <li><strong>Unordered:</strong> Elements have no defined order. You cannot access elements by index.</li>
        <li><strong>No Indexing:</strong> Sets do not support indexing or slicing because they are unordered.</li>
        <li><strong>Unique Values:</strong> Sets automatically eliminate duplicate values. Each element appears only once.</li>
        <li><strong>Fast Membership Testing:</strong> Checking if an element exists in a set is very fast (O(1) average time).</li>
        <li><strong>Heterogeneous:</strong> A set can store elements of different immutable data types.</li>
      </ul>

      <h3>Example Demonstrating Set Properties</h3>
      <div class="code-example"><pre><code># Creating a set
my_set = {1, 2, 3, "Python", 3.14, True}

# Mutable - can add and remove
my_set.add(4)
my_set.remove(2)
print(my_set)  # {1, 3, 4, 3.14, 'Python'} (order may vary)

# Unique values - duplicates are automatically removed
duplicate_set = {1, 2, 3, 2, 1, 4, 3}
print(duplicate_set)  # {1, 2, 3, 4}

# No indexing - trying to access by index gives error
# print(my_set[0])  # TypeError: 'set' object is not subscriptable

# Fast membership testing
print(3 in my_set)   # True
print(10 in my_set)  # False

# Immutable items required
# my_set.add([1, 2])  # TypeError: unhashable type: 'list'
my_set.add((1, 2))    # Tuple is immutable, works fine

# Heterogeneous - different data types
mixed_set = {1, "hello", 3.14, (1, 2), True}
print(mixed_set)</code></pre></div>

      <h3>Important Points to Remember</h3>
      <ul>
        <li>Sets are <strong>unordered</strong>, so the order of elements is not guaranteed.</li>
        <li>Elements must be <strong>hashable</strong> (immutable). Lists, dictionaries, and other sets cannot be stored in a set.</li>
        <li>Sets are <strong>mutable</strong> - you can add or remove elements.</li>
        <li>Sets automatically handle <strong>duplicate elimination</strong>.</li>
        <li>Sets provide <strong>mathematical operations</strong> like union, intersection, etc.</li>
      </ul>
    `
  },

  'creating-set': {
    title: 'Creating Set',
    html: `
      <h2>Creating Sets in Python</h2>
      <p>Sets can be created using curly braces <code>{}</code> or the <code>set()</code> constructor. There is an important distinction between creating an empty set and an empty dictionary.</p>

      <h3>1. Using Curly Braces (Set Literals)</h3>
      <p>Items are placed inside curly braces separated by commas. This method creates a set with elements.</p>
      <div class="code-example"><pre><code># Populated Set
fruits = {"apple", "banana", "cherry", "apple"}  # Duplicate removed
print(fruits)  # {'apple', 'banana', 'cherry'}

# Set with different data types
mixed_set = {1, "hello", 3.14, True, (1, 2)}
print(mixed_set)  # {1, 3.14, 'hello', (1, 2)} (True is treated as 1)

# Important: Empty braces {} create a dictionary, NOT a set
empty_dict = {}
print(type(empty_dict))  # dict</code></pre></div>

      <h3>2. Using the set() Constructor</h3>
      <p>The <code>set()</code> function creates a set from any iterable object. This is the only way to create an empty set.</p>
      <div class="code-example"><pre><code># Empty Set (using set() constructor)
empty_set = set()
print(empty_set)        # set()
print(type(empty_set))  # set

# From a List
set_from_list = set([1, 2, 3, 2, 1])
print(set_from_list)  # {1, 2, 3}

# From a String (creates set of characters)
set_from_string = set("hello")
print(set_from_string)  # {'h', 'e', 'l', 'o'}

# From a Tuple
set_from_tuple = set((1, 2, 3, 2))
print(set_from_tuple)  # {1, 2, 3}

# From a Range
set_from_range = set(range(5))
print(set_from_range)  # {0, 1, 2, 3, 4}

# From a Dictionary (creates set of keys)
dict_data = {"a": 1, "b": 2, "c": 3}
set_from_dict = set(dict_data)
print(set_from_dict)  # {'a', 'b', 'c'}

# From a Set (creates a copy)
original = {1, 2, 3}
copy_set = set(original)
print(copy_set)  # {1, 2, 3}</code></pre></div>

      <h3>3. Set Comprehensions</h3>
      <p>Similar to list comprehensions, sets can be created using set comprehensions.</p>
      <div class="code-example"><pre><code># Basic set comprehension - squares of numbers
squares = {x**2 for x in range(5)}
print(squares)  # {0, 1, 4, 9, 16}

# Set comprehension with condition - even squares
even_squares = {x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # {0, 4, 16, 36, 64}

# Set comprehension from another iterable
text = "hello world"
vowels = {char for char in text if char in 'aeiou'}
print(vowels)  # {'e', 'o'}</code></pre></div>

      <h3>Important: Empty Set vs Empty Dictionary</h3>
      <table>
        <thead>
          <tr>
            <th>Syntax</th>
            <th>Result</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>{}</code></td>
            <td>Creates an empty dictionary</td>
            <td><code>dict</code></td>
          </tr>
          <tr>
            <td><code>set()</code></td>
            <td>Creates an empty set</td>
            <td><code>set</code></td>
          </tr>
          <tr>
            <td><code>{1, 2, 3}</code></td>
            <td>Creates a set with elements</td>
            <td><code>set</code></td>
          </tr>
          <tr>
            <td><code>{"a": 1, "b": 2}</code></td>
            <td>Creates a dictionary</td>
            <td><code>dict</code></td>
          </tr>
        </tbody>
      </table>
    `
  },

  'accessing-set-items': {
    title: 'Accessing Set Items',
    html: `
      <h2>Accessing Set Items</h2>
      <p>Since sets are unordered, they do not support indexing or slicing. However, there are several ways to access, iterate through, and work with set elements.</p>

      <h3>1. Iteration (Looping)</h3>
      <p>You can iterate through all elements of a set using a <code>for</code> loop. The order is not guaranteed.</p>
      <div class="code-example"><pre><code># Basic iteration
fruits = {"apple", "banana", "cherry", "date"}

print("Iterating through set:")
for fruit in fruits:
    print(fruit)
# Output (order may vary):
# apple
# banana
# cherry
# date

# Iteration with enumerated values
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
# Output (order may vary):
# 0: apple
# 1: banana
# 2: cherry
# 3: date</code></pre></div>

      <h3>2. Membership Testing</h3>
      <p>Checking if an element exists in a set is very fast and the most common way to "access" set data.</p>
      <div class="code-example"><pre><code># Membership testing
numbers = {10, 20, 30, 40, 50}

print(30 in numbers)   # True
print(25 in numbers)   # False
print(50 not in numbers) # False
print(100 not in numbers) # True

# Using membership in condition
if 30 in numbers:
    print("30 is present in the set")

# Membership testing with strings
colors = {"red", "green", "blue"}
print("red" in colors)   # True
print("yellow" in colors) # False</code></pre></div>

      <h3>3. Converting to List (for Indexing Access)</h3>
      <p>If you need ordered access, convert the set to a list or tuple.</p>
      <div class="code-example"><pre><code># Convert to list for ordered access
my_set = {"a", "b", "c", "d"}
list_from_set = list(my_set)
tuple_from_set = tuple(my_set)

print(list_from_set)   # ['a', 'b', 'c', 'd'] (order may vary)
print(tuple_from_set)  # ('a', 'b', 'c', 'd') (order may vary)

# Now you can use indexing
print(list_from_set[0])  # First element
print(list_from_set[-1]) # Last element

# Sorting the set for consistent order
sorted_list = sorted(my_set)
print(sorted_list)       # ['a', 'b', 'c', 'd'] (sorted order)</code></pre></div>

      <h3>4. Using pop() to Retrieve and Remove</h3>
      <p>The <code>pop()</code> method removes and returns an arbitrary element from the set.</p>
      <div class="code-example"><pre><code># Using pop() - removes arbitrary element
my_set = {1, 2, 3, 4, 5}
element = my_set.pop()
print(f"Removed: {element}")
print(f"Remaining: {my_set}")

# Continue popping until set is empty
my_set = {1, 2, 3, 4, 5}
while my_set:
    print(my_set.pop())
# Output: 1, 2, 3, 4, 5 (order may vary)</code></pre></div>

      <h3>5. Using List Comprehensions with Sets</h3>
      <p>You can transform set elements using comprehensions.</p>
      <div class="code-example"><pre><code># Set comprehension for transformation
numbers = {1, 2, 3, 4, 5}
squared = {x**2 for x in numbers}
print(squared)  # {16, 1, 4, 25, 9} (order may vary)

# Filtering with comprehension
numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
evens = {x for x in numbers if x % 2 == 0}
print(evens)  # {2, 4, 6, 8, 10}</code></pre></div>

      <h3>Summary of Access Methods</h3>
      <ul>
        <li><strong>Iteration:</strong> Use <code>for item in set:</code></li>
        <li><strong>Membership Testing:</strong> Use <code>item in set</code></li>
        <li><strong>Convert to List:</strong> Use <code>list(set)</code> for indexing</li>
        <li><strong>Convert to Tuple:</strong> Use <code>tuple(set)</code> for immutable ordered access</li>
        <li><strong>Sort:</strong> Use <code>sorted(set)</code> for ordered iteration</li>
        <li><strong>pop():</strong> Removes and returns an arbitrary element</li>
      </ul>
    `
  },

  'builtin-methods-set': {
    title: 'Built-in Methods of Set',
    html: `
      <h2>Built-in Methods of Set</h2>
      <p>Sets come with several built-in methods for adding, removing, and performing mathematical set operations. Here are the most important methods:</p>

      <h3>1. Adding Elements</h3>
      <ul>
        <li><strong>add(x):</strong> Adds element x to the set. If x already exists, nothing happens.</li>
        <li><strong>update(iterable):</strong> Adds all elements from an iterable to the set.</li>
      </ul>
      <div class="code-example"><pre><code># add() - adds a single element
my_set = {1, 2, 3}
my_set.add(4)
print(my_set)  # {1, 2, 3, 4}

my_set.add(2)  # Duplicate - no change
print(my_set)  # {1, 2, 3, 4}

# update() - adds multiple elements from an iterable
my_set.update([5, 6, 7])
print(my_set)  # {1, 2, 3, 4, 5, 6, 7}

# update() with string (adds each character)
my_set.update("abc")
print(my_set)  # {1, 2, 3, 4, 5, 6, 7, 'a', 'b', 'c'}

# update() with another set
set2 = {8, 9, 10}
my_set.update(set2)
print(my_set)  # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c'}</code></pre></div>

      <h3>2. Removing Elements</h3>
      <ul>
        <li><strong>remove(x):</strong> Removes element x from the set. Raises KeyError if not found.</li>
        <li><strong>discard(x):</strong> Removes element x from the set. Does nothing if not found (no error).</li>
        <li><strong>pop():</strong> Removes and returns an arbitrary element. Raises KeyError if set is empty.</li>
        <li><strong>clear():</strong> Removes all elements from the set.</li>
      </ul>
      <div class="code-example"><pre><code># remove() - removes element, raises error if not found
fruits = {"apple", "banana", "cherry"}
fruits.remove("banana")
print(fruits)  # {'apple', 'cherry'}

# fruits.remove("mango")  # KeyError: 'mango'

# discard() - removes element, no error if not found
fruits.discard("apple")
print(fruits)  # {'cherry'}

fruits.discard("mango")  # No error
print(fruits)  # {'cherry'}

# pop() - removes and returns arbitrary element
my_set = {1, 2, 3, 4, 5}
element = my_set.pop()
print(f"Removed: {element}")  # Removed: 1 (may vary)
print(f"Remaining: {my_set}")

# clear() - removes all elements
my_set.clear()
print(my_set)  # set()</code></pre></div>

      <h3>3. Set Operations</h3>
      <ul>
        <li><strong>union(set2):</strong> Returns a new set with elements from both sets (| operator).</li>
        <li><strong>intersection(set2):</strong> Returns a new set with elements common to both sets (&amp; operator).</li>
        <li><strong>difference(set2):</strong> Returns a new set with elements in first set but not in second (- operator).</li>
        <li><strong>symmetric_difference(set2):</strong> Returns a new set with elements in either set but not both (^ operator).</li>
      </ul>
      <div class="code-example"><pre><code># Define two sets
set_a = {1, 2, 3, 4, 5}
set_b = {4, 5, 6, 7, 8}

# Union - all elements from both sets
print(set_a.union(set_b))  # {1, 2, 3, 4, 5, 6, 7, 8}
print(set_a | set_b)       # {1, 2, 3, 4, 5, 6, 7, 8}

# Intersection - common elements
print(set_a.intersection(set_b))  # {4, 5}
print(set_a & set_b)              # {4, 5}

# Difference - elements in set_a but not in set_b
print(set_a.difference(set_b))  # {1, 2, 3}
print(set_a - set_b)            # {1, 2, 3}

# Symmetric Difference - elements in either set but not both
print(set_a.symmetric_difference(set_b))  # {1, 2, 3, 6, 7, 8}
print(set_a ^ set_b)                      # {1, 2, 3, 6, 7, 8}

# Methods with multiple sets
set_c = {1, 2, 9, 10}
print(set_a.union(set_b, set_c))  # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}</code></pre></div>

      <h3>4. Relationship Methods</h3>
      <ul>
        <li><strong>issubset(set2):</strong> Checks if all elements of first set are in second set (<= operator).</li>
        <li><strong>issuperset(set2):</strong> Checks if all elements of second set are in first set (>= operator).</li>
        <li><strong>isdisjoint(set2):</strong> Checks if two sets have no common elements.</li>
        <li><strong>isinstance(obj, type):</strong> Checks if an object is of a specific type (built-in function).</li>
      </ul>
      <div class="code-example"><pre><code># issubset() - checks if set is subset of another
set_a = {1, 2, 3}
set_b = {1, 2, 3, 4, 5}
set_c = {1, 2, 6}

print(set_a.issubset(set_b))  # True
print(set_a <= set_b)         # True
print(set_c.issubset(set_b))  # False

# issuperset() - checks if set is superset of another
print(set_b.issuperset(set_a))  # True
print(set_b >= set_a)           # True

# isdisjoint() - checks if sets have no common elements
set_a = {1, 2, 3}
set_b = {4, 5, 6}
set_c = {3, 4, 5}

print(set_a.isdisjoint(set_b))  # True
print(set_a.isdisjoint(set_c))  # False

# isinstance() - checks object type (built-in function)
my_set = {1, 2, 3}
print(isinstance(my_set, set))   # True
print(isinstance(my_set, dict))  # False
print(isinstance([1, 2], list))  # True</code></pre></div>

      <h3>Summary Table of Set Methods</h3>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>add(x)</code></td>
            <td>Adds element x</td>
            <td><code>set.add(5)</code></td>
          </tr>
          <tr>
            <td><code>update(iterable)</code></td>
            <td>Adds all elements from iterable</td>
            <td><code>set.update([1,2])</code></td>
          </tr>
          <tr>
            <td><code>remove(x)</code></td>
            <td>Removes x (error if not found)</td>
            <td><code>set.remove(5)</code></td>
          </tr>
          <tr>
            <td><code>discard(x)</code></td>
            <td>Removes x (no error if not found)</td>
            <td><code>set.discard(5)</code></td>
          </tr>
          <tr>
            <td><code>pop()</code></td>
            <td>Removes and returns arbitrary element</td>
            <td><code>set.pop()</code></td>
          </tr>
          <tr>
            <td><code>clear()</code></td>
            <td>Removes all elements</td>
            <td><code>set.clear()</code></td>
          </tr>
          <tr>
            <td><code>union(set2)</code></td>
            <td>Returns union of sets</td>
            <td><code>set.union(set2)</code></td>
          </tr>
          <tr>
            <td><code>intersection(set2)</code></td>
            <td>Returns intersection of sets</td>
            <td><code>set.intersection(set2)</code></td>
          </tr>
          <tr>
            <td><code>difference(set2)</code></td>
            <td>Returns difference of sets</td>
            <td><code>set.difference(set2)</code></td>
          </tr>
          <tr>
            <td><code>symmetric_difference(set2)</code></td>
            <td>Returns symmetric difference</td>
            <td><code>set.symmetric_difference(set2)</code></td>
          </tr>
          <tr>
            <td><code>issubset(set2)</code></td>
            <td>Checks if set is subset</td>
            <td><code>set.issubset(set2)</code></td>
          </tr>
          <tr>
            <td><code>issuperset(set2)</code></td>
            <td>Checks if set is superset</td>
            <td><code>set.issuperset(set2)</code></td>
          </tr>
          <tr>
            <td><code>isdisjoint(set2)</code></td>
            <td>Checks if sets are disjoint</td>
            <td><code>set.isdisjoint(set2)</code></td>
          </tr>
        </tbody>
      </table>
    `
  },

  'builtin-functions-set': {
    title: 'Built-in Functions of Set',
    html: `
      <h2>Built-in Functions Used with Sets</h2>
      <p>Sets can be used with various built-in functions for information, transformation, and validation.</p>

      <h3>1. Information Functions</h3>
      <ul>
        <li><strong>len(set):</strong> Returns the number of elements in the set.</li>
        <li><strong>min(set):</strong> Returns the smallest element in the set.</li>
        <li><strong>max(set):</strong> Returns the largest element in the set.</li>
        <li><strong>sum(set):</strong> Returns the sum of all numerical elements in the set.</li>
        <li><strong>type(object):</strong> Returns the type of the object.</li>
      </ul>
      <div class="code-example"><pre><code># len() - number of elements
my_set = {10, 20, 30, 40, 50}
print(len(my_set))  # 5

# min() - smallest element
print(min(my_set))  # 10

# max() - largest element
print(max(my_set))  # 50

# sum() - sum of all elements
print(sum(my_set))  # 150

# type() - type of object
print(type(my_set))  # set</code></pre></div>

      <h3>2. Sorting and Ordering</h3>
      <ul>
        <li><strong>sorted(iterable, reverse=False):</strong> Returns a new sorted list from the set.</li>
        <li><strong>reversed(iterable):</strong> Returns a reverse iterator (works on sorted set).</li>
      </ul>
      <div class="code-example"><pre><code># sorted() - returns sorted list
my_set = {30, 10, 50, 20, 40}
sorted_set = sorted(my_set)
print(sorted_set)  # [10, 20, 30, 40, 50]
print(my_set)      # {10, 20, 30, 40, 50} (original unchanged)

# sorted() with reverse
sorted_desc = sorted(my_set, reverse=True)
print(sorted_desc)  # [50, 40, 30, 20, 10]

# reversed() - works on sorted set
for item in reversed(sorted(my_set)):
    print(item)  # 50, 40, 30, 20, 10</code></pre></div>

      <h3>3. Conversion Functions</h3>
      <ul>
        <li><strong>list(iterable):</strong> Converts set to a list.</li>
        <li><strong>tuple(iterable):</strong> Converts set to a tuple.</li>
        <li><strong>set(iterable):</strong> Converts iterable to a set.</li>
        <li><strong>frozenset(iterable):</strong> Converts iterable to an immutable set.</li>
      </ul>
      <div class="code-example"><pre><code># list() - convert to list
my_set = {1, 2, 3, 4, 5}
list_from_set = list(my_set)
print(list_from_set)  # [1, 2, 3, 4, 5] (order may vary)

# tuple() - convert to tuple
tuple_from_set = tuple(my_set)
print(tuple_from_set)  # (1, 2, 3, 4, 5) (order may vary)

# set() - create set from iterable
list_data = [1, 2, 2, 3, 3, 4]
set_from_list = set(list_data)
print(set_from_list)  # {1, 2, 3, 4}

# frozenset() - create immutable set
frozen_set = frozenset(my_set)
print(frozen_set)  # frozenset({1, 2, 3, 4, 5})

# frozenset properties - immutable
# frozen_set.add(6)  # AttributeError: 'frozenset' object has no attribute 'add'</code></pre></div>

      <h3>4. Iteration and Validation</h3>
      <ul>
        <li><strong>any(iterable):</strong> Returns True if at least one element is truthy.</li>
        <li><strong>all(iterable):</strong> Returns True if all elements are truthy.</li>
        <li><strong>enumerate(iterable):</strong> Returns index-value pairs (order not guaranteed).</li>
      </ul>
      <div class="code-example"><pre><code># any() - checks if any element is truthy
set1 = {0, False, "hello", ""}
print(any(set1))  # True (because of "hello")

set2 = {0, False, "", None}
print(any(set2))  # False (all are falsy)

# all() - checks if all elements are truthy
set3 = {True, 1, "yes"}
print(all(set3))  # True

set4 = {True, 1, 0}
print(all(set4))  # False (0 is falsy)

# enumerate() - pairs index with value (order may vary)
colors = {"red", "green", "blue"}
for index, color in enumerate(colors):
    print(f"{index}: {color}")
# Output (order may vary):
# 0: red
# 1: green
# 2: blue

# zip() - combine multiple sets
set_a = {1, 2, 3}
set_b = {"a", "b", "c"}
zipped = zip(set_a, set_b)
print(list(zipped))  # [(1, 'a'), (2, 'b'), (3, 'c')] (order may vary)</code></pre></div>

      <h3>Summary Table of Built-in Functions for Sets</h3>
      <table>
        <thead>
          <tr>
            <th>Function</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>len(set)</code></td>
            <td>Returns number of elements</td>
            <td><code>len({1,2,3}) → 3</code></td>
          </tr>
          <tr>
            <td><code>min(set)</code></td>
            <td>Returns smallest element</td>
            <td><code>min({3,1,2}) → 1</code></td>
          </tr>
          <tr>
            <td><code>max(set)</code></td>
            <td>Returns largest element</td>
            <td><code>max({3,1,2}) → 3</code></td>
          </tr>
          <tr>
            <td><code>sum(set)</code></td>
            <td>Sums numerical elements</td>
            <td><code>sum({1,2,3}) → 6</code></td>
          </tr>
          <tr>
            <td><code>sorted(set)</code></td>
            <td>Returns sorted list</td>
            <td><code>sorted({3,1,2}) → [1,2,3]</code></td>
          </tr>
          <tr>
            <td><code>list(set)</code></td>
            <td>Converts to list</td>
            <td><code>list({1,2,3}) → [1,2,3]</code></td>
          </tr>
          <tr>
            <td><code>tuple(set)</code></td>
            <td>Converts to tuple</td>
            <td><code>tuple({1,2,3}) → (1,2,3)</code></td>
          </tr>
          <tr>
            <td><code>frozenset(set)</code></td>
            <td>Converts to immutable set</td>
            <td><code>frozenset({1,2,3})</code></td>
          </tr>
          <tr>
            <td><code>any(set)</code></td>
            <td>True if any element is truthy</td>
            <td><code>any({0,1}) → True</code></td>
          </tr>
          <tr>
            <td><code>all(set)</code></td>
            <td>True if all elements are truthy</td>
            <td><code>all({1,2}) → True</code></td>
          </tr>
          <tr>
            <td><code>enumerate(set)</code></td>
            <td>Returns index-value pairs</td>
            <td><code>list(enumerate({'a','b'}))</code></td>
          </tr>
          <tr>
            <td><code>zip(set1, set2)</code></td>
            <td>Combines sets element-wise</td>
            <td><code>zip({1,2},{'a','b'})</code></td>
          </tr>
          <tr>
            <td><code>type(object)</code></td>
            <td>Returns type of object</td>
            <td><code>type({1,2}) → set</code></td>
          </tr>
        </tbody>
      </table>
    `
  },

  'dict-intro': {
    title: 'Dictionary and its Properties',
    html: `
      <h2>What is a Dictionary?</h2>
      <p>A <strong>dictionary</strong> is a built-in data structure used to store data in <strong>key-value pairs</strong>. Each key is unique and maps to a value. Dictionaries are one of the most powerful and commonly used data structures in Python.</p>

      <h2>Core Properties of Python Dictionaries</h2>
      <ul>
        <li><strong>Key-Value Pairs:</strong> Each element is a pair consisting of a key and its associated value.</li>
        <li><strong>Ordered (Python 3.7+):</strong> Dictionaries maintain the insertion order of keys (guaranteed in Python 3.7 and later).</li>
        <li><strong>Mutable:</strong> Dictionaries can be modified - you can add, remove, or update key-value pairs.</li>
        <li><strong>Unique Keys:</strong> Each key can appear only once. Duplicate keys overwrite previous values.</li>
        <li><strong>Hashable Keys:</strong> Keys must be immutable (hashable). Strings, numbers, and tuples can be keys.</li>
        <li><strong>Heterogeneous Values:</strong> Values can be of any data type, including lists, sets, and other dictionaries.</li>
        <li><strong>Indexed by Keys:</strong> Access values using keys, not numeric indices.</li>
        <li><strong>Fast Lookup:</strong> Accessing values by key is very fast (O(1) average time).</li>
      </ul>

      <h3>Example Demonstrating Dictionary Properties</h3>
      <div class="code-example"><pre><code># Creating a dictionary
student = {
    "name": "Rahul",
    "age": 20,
    "course": "Python",
    "grades": [85, 92, 78]
}

# Key-Value Pairs
print(student["name"])   # Rahul
print(student["age"])    # 20

# Ordered - maintains insertion order (Python 3.7+)
print(student.keys())  # dict_keys(['name', 'age', 'course', 'grades'])

# Mutable - can modify
student["age"] = 21
student["city"] = "Mumbai"  # Add new key
del student["course"]       # Remove key
print(student)

# Unique Keys - duplicate overwrites
student["name"] = "Ravi"  # Updates existing key
print(student["name"])    # Ravi

# Hashable Keys - keys must be immutable
# student[[1, 2]] = "value"  # TypeError: unhashable type: 'list'
student[(1, 2)] = "tuple key"  # Tuple is hashable, works

# Heterogeneous Values
mixed_dict = {
    "string": "hello",
    "number": 42,
    "float": 3.14,
    "boolean": True,
    "list": [1, 2, 3],
    "tuple": (1, 2, 3),
    "dict": {"nested": "value"}
}
print(mixed_dict)

# Fast Lookup
print("name" in student)  # True (O(1) lookup)</code></pre></div>

      <h3>Important Points to Remember</h3>
      <ul>
        <li>Keys must be <strong>immutable</strong> (strings, numbers, tuples). Lists and dictionaries cannot be keys.</li>
        <li>Values can be <strong>any data type</strong> (mutable or immutable).</li>
        <li>Dictionaries are <strong>ordered</strong> in Python 3.7+ (maintain insertion order).</li>
        <li>Accessing a non-existent key raises a <strong>KeyError</strong>.</li>
        <li>Use <code>get()</code> method to safely access values with a default.</li>
      </ul>
    `
  },

  'creating-dictionary': {
    title: 'Creating Dictionary',
    html: `
      <h2>Creating Dictionaries in Python</h2>
      <p>Dictionaries can be created using curly braces <code>{}</code> with key-value pairs, or using the <code>dict()</code> constructor in various ways.</p>

      <h3>1. Using Curly Braces (Dictionary Literals)</h3>
      <p>This is the most common and readable way to create dictionaries. Keys and values are separated by colons <code>:</code> and pairs are separated by commas.</p>
      <div class="code-example"><pre><code># Empty Dictionary
empty_dict = {}
print(empty_dict)  # {}
print(type(empty_dict))  # dict

# Populated Dictionary
student = {
    "name": "Rahul",
    "age": 20,
    "course": "Python"
}
print(student)  # {'name': 'Rahul', 'age': 20, 'course': 'Python'}

# Dictionary with mixed data types
mixed = {
    "name": "Alice",
    "age": 25,
    "is_student": True,
    "grades": [85, 92, 78],
    "address": {"city": "Mumbai", "pincode": 400001}
}
print(mixed)

# Dictionary with numeric keys
numeric_keys = {
    1: "one",
    2: "two",
    3: "three"
}
print(numeric_keys)  # {1: 'one', 2: 'two', 3: 'three'}</code></pre></div>

      <h3>2. Using the dict() Constructor</h3>
      <p>The <code>dict()</code> constructor provides several ways to create dictionaries.</p>

      <h4>a) From Keyword Arguments</h4>
      <div class="code-example"><pre><code># Using keyword arguments
student = dict(name="Rahul", age=20, course="Python")
print(student)  # {'name': 'Rahul', 'age': 20, 'course': 'Python'}

# Note: Keys must be valid Python identifiers (no spaces, etc.)</code></pre></div>

      <h4>b) From a List of Tuples (Key-Value Pairs)</h4>
      <div class="code-example"><pre><code># From list of tuples
pairs = [("name", "Rahul"), ("age", 20), ("course", "Python")]
student = dict(pairs)
print(student)  # {'name': 'Rahul', 'age': 20, 'course': 'Python'}

# From tuple of tuples
pairs = (("name", "Rahul"), ("age", 20))
student = dict(pairs)
print(student)  # {'name': 'Rahul', 'age': 20}</code></pre></div>

      <h4>c) Using zip() with Two Sequences</h4>
      <div class="code-example"><pre><code># Using zip() to combine two sequences
keys = ["name", "age", "course"]
values = ["Rahul", 20, "Python"]
student = dict(zip(keys, values))
print(student)  # {'name': 'Rahul', 'age': 20, 'course': 'Python'}</code></pre></div>

      <h4>d) Empty Dictionary with dict()</h4>
      <div class="code-example"><pre><code># Empty dictionary using dict()
empty_dict = dict()
print(empty_dict)  # {}</code></pre></div>

      <h3>3. Using Dictionary Comprehensions</h3>
      <p>Similar to list comprehensions, dictionaries can be created using dictionary comprehensions.</p>
      <div class="code-example"><pre><code># Basic dictionary comprehension - squares
squares = {x: x**2 for x in range(5)}
print(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Dictionary comprehension with condition
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# Swapping keys and values
original = {"a": 1, "b": 2, "c": 3}
swapped = {value: key for key, value in original.items()}
print(swapped)  # {1: 'a', 2: 'b', 3: 'c'}</code></pre></div>

      <h3>4. Using fromkeys() Method</h3>
      <p>The <code>fromkeys()</code> method creates a new dictionary with specified keys and a default value.</p>
      <div class="code-example"><pre><code># fromkeys() - creates dictionary with default value
keys = ["name", "age", "course"]
student = dict.fromkeys(keys, "Unknown")
print(student)  # {'name': 'Unknown', 'age': 'Unknown', 'course': 'Unknown'}

# Without default value (defaults to None)
student = dict.fromkeys(keys)
print(student)  # {'name': None, 'age': None, 'course': None}</code></pre></div>

      <h3>Summary of Dictionary Creation Methods</h3>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Syntax</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Curly Braces</td>
            <td><code>{key: value}</code></td>
            <td><code>{"a": 1, "b": 2}</code></td>
          </tr>
          <tr>
            <td>Keyword Arguments</td>
            <td><code>dict(key=value)</code></td>
            <td><code>dict(a=1, b=2)</code></td>
          </tr>
          <tr>
            <td>List of Tuples</td>
            <td><code>dict([(k,v)])</code></td>
            <td><code>dict([("a",1),("b",2)])</code></td>
          </tr>
          <tr>
            <td>zip()</td>
            <td><code>dict(zip(keys, values))</code></td>
            <td><code>dict(zip(["a","b"], [1,2]))</code></td>
          </tr>
          <tr>
            <td>Comprehension</td>
            <td><code>{k: v for k, v in iterable}</code></td>
            <td><code>{x: x**2 for x in range(5)}</code></td>
          </tr>
          <tr>
            <td>fromkeys()</td>
            <td><code>dict.fromkeys(keys, value)</code></td>
            <td><code>dict.fromkeys(["a","b"], 0)</code></td>
          </tr>
          <tr>
            <td>Empty</td>
            <td><code>{}</code> or <code>dict()</code></td>
            <td><code>{}</code> or <code>dict()</code></td>
          </tr>
        </tbody>
      </table>
    `
  },

  'accessing-dict-items': {
    title: 'Accessing Dictionary Items',
    html: `
      <h2>Accessing Dictionary Items</h2>
      <p>Dictionaries provide several ways to access, iterate through, and work with key-value pairs.</p>

      <h3>1. Accessing Values by Key (Direct Indexing)</h3>
      <p>Use square brackets <code>[]</code> with the key to get its value. Raises KeyError if key doesn't exist.</p>
      <div class="code-example"><pre><code># Direct indexing
student = {
    "name": "Rahul",
    "age": 20,
    "course": "Python",
    "grades": [85, 92, 78]
}

print(student["name"])     # Rahul
print(student["age"])      # 20
print(student["grades"])   # [85, 92, 78]
print(student["grades"][1]) # 92 (nested access)

# KeyError - accessing non-existent key
# print(student["city"])  # KeyError: 'city'</code></pre></div>

      <h3>2. Using get() Method (Safe Access)</h3>
      <p>The <code>get()</code> method returns the value for a key, or a default value if the key doesn't exist. No KeyError is raised.</p>
      <div class="code-example"><pre><code># get() - returns value or None if key not found
student = {"name": "Rahul", "age": 20}

print(student.get("name"))     # Rahul
print(student.get("course"))   # None
print(student.get("city"))     # None

# get() with default value
print(student.get("course", "Not enrolled"))  # Not enrolled
print(student.get("city", "Mumbai"))          # Mumbai

# get() with default when key exists
print(student.get("name", "Unknown"))  # Rahul (ignores default)</code></pre></div>

      <h3>3. Using setdefault() Method</h3>
      <p>The <code>setdefault()</code> method returns the value for a key. If the key doesn't exist, it adds the key with a default value.</p>
      <div class="code-example"><pre><code># setdefault() - returns value, adds default if key doesn't exist
student = {"name": "Rahul", "age": 20}

# Key exists - returns value
print(student.setdefault("name", "Unknown"))  # Rahul

# Key doesn't exist - adds with default value
print(student.setdefault("course", "Python"))  # Python
print(student)  # {'name': 'Rahul', 'age': 20, 'course': 'Python'}

# Key doesn't exist - adds with None (no default specified)
print(student.setdefault("city"))  # None
print(student)  # {'name': 'Rahul', 'age': 20, 'course': 'Python', 'city': None}</code></pre></div>

      <h3>4. Iterating Through Keys, Values, and Items</h3>
      <p>Dictionaries can be iterated to access keys, values, or both.</p>
      <div class="code-example"><pre><code>student = {
    "name": "Rahul",
    "age": 20,
    "course": "Python",
    "city": "Mumbai"
}

# Iterating through keys (default)
print("Keys:")
for key in student:
    print(key)
# name, age, course, city

# Iterating through keys (using keys() method)
print("\\nKeys using keys():")
for key in student.keys():
    print(f"{key}: {student[key]}")

# Iterating through values
print("\\nValues:")
for value in student.values():
    print(value)
# Rahul, 20, Python, Mumbai

# Iterating through key-value pairs
print("\\nKey-Value Pairs:")
for key, value in student.items():
    print(f"{key}: {value}")
# name: Rahul, age: 20, course: Python, city: Mumbai</code></pre></div>

      <h3>5. Checking if a Key Exists</h3>
      <p>Use the <code>in</code> operator to check if a key exists in a dictionary.</p>
      <div class="code-example"><pre><code># Using 'in' operator
student = {"name": "Rahul", "age": 20, "course": "Python"}

print("name" in student)      # True
print("city" in student)      # False
print("age" not in student)   # False

# Conditional access
if "course" in student:
    print(f"Course: {student['course']}")
else:
    print("Course not found")

# Using get() for conditional access
course = student.get("course", "Not enrolled")
print(course)  # Python</code></pre></div>

      <h3>6. Accessing Nested Dictionary Values</h3>
      <p>Dictionaries can contain other dictionaries, requiring chained indexing.</p>
      <div class="code-example"><pre><code># Nested dictionary
student = {
    "name": "Rahul",
    "age": 20,
    "address": {
        "city": "Mumbai",
        "state": "Maharashtra",
        "pincode": 400001
    },
    "grades": [85, 92, 78]
}

# Accessing nested values
print(student["address"]["city"])      # Mumbai
print(student["address"]["state"])     # Maharashtra
print(student["grades"][1])            # 92

# Safe nested access using get()
city = student.get("address", {}).get("city")
print(city)  # Mumbai

# Using try-except for nested access
try:
    print(student["address"]["country"])
except KeyError:
    print("Country not found")</code></pre></div>

      <h3>Summary of Access Methods</h3>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>dict[key]</code></td>
            <td>Direct access (raises KeyError)</td>
            <td><code>student["name"]</code></td>
          </tr>
          <tr>
            <td><code>dict.get(key, default)</code></td>
            <td>Safe access with default value</td>
            <td><code>student.get("name", "Unknown")</code></td>
          </tr>
          <tr>
            <td><code>dict.setdefault(key, default)</code></td>
            <td>Returns value, adds key if missing</td>
            <td><code>student.setdefault("course", "Python")</code></td>
          </tr>
          <tr>
            <td><code>key in dict</code></td>
            <td>Checks if key exists</td>
            <td><code>"name" in student</code></td>
          </tr>
          <tr>
            <td><code>dict.keys()</code></td>
            <td>Returns all keys</td>
            <td><code>student.keys()</code></td>
          </tr>
          <tr>
            <td><code>dict.values()</code></td>
            <td>Returns all values</td>
            <td><code>student.values()</code></td>
          </tr>
          <tr>
            <td><code>dict.items()</code></td>
            <td>Returns key-value pairs</td>
            <td><code>student.items()</code></td>
          </tr>
        </tbody>
      </table>
    `
  },

  'builtin-methods-dict': {
    title: 'Built-in Methods of Dictionary',
    html: `
      <h2>Built-in Methods of Dictionary</h2>
      <p>Dictionaries come with several built-in methods for adding, removing, and manipulating key-value pairs.</p>

      <h3>1. Adding and Updating</h3>
      <ul>
        <li><strong>update(iterable):</strong> Updates the dictionary with key-value pairs from another dictionary or iterable.</li>
        <li><strong>setdefault(key, default):</strong> Returns value for key, adds key with default if missing.</li>
      </ul>
      <div class="code-example"><pre><code># update() - merges another dictionary
student = {"name": "Rahul", "age": 20}
new_data = {"course": "Python", "city": "Mumbai"}

student.update(new_data)
print(student)  # {'name': 'Rahul', 'age': 20, 'course': 'Python', 'city': 'Mumbai'}

# update() with keyword arguments
student.update(grade="A", semester=1)
print(student)  # ... 'grade': 'A', 'semester': 1

# update() with list of tuples
student.update([("phone", "1234567890")])
print(student)  # ... 'phone': '1234567890'

# setdefault() - adds key if missing
student = {"name": "Rahul"}
student.setdefault("age", 20)     # Adds age: 20
student.setdefault("age", 25)     # Returns 20 (existing value unchanged)
print(student)  # {'name': 'Rahul', 'age': 20}</code></pre></div>

      <h3>2. Removing Elements</h3>
      <ul>
        <li><strong>pop(key, default):</strong> Removes and returns the value for the key. Raises KeyError if not found (unless default provided).</li>
        <li><strong>popitem():</strong> Removes and returns the last inserted key-value pair (LIFO order in Python 3.7+).</li>
        <li><strong>clear():</strong> Removes all key-value pairs from the dictionary.</li>
      </ul>
      <div class="code-example"><pre><code># pop() - removes and returns value
student = {"name": "Rahul", "age": 20, "course": "Python"}

age = student.pop("age")
print(age)       # 20
print(student)   # {'name': 'Rahul', 'course': 'Python'}

# pop() with default (no error if key not found)
city = student.pop("city", "Mumbai")
print(city)      # Mumbai (default value)
print(student)   # {'name': 'Rahul', 'course': 'Python'}

# popitem() - removes and returns last key-value pair
student = {"name": "Rahul", "age": 20, "course": "Python"}
last_pair = student.popitem()
print(last_pair)  # ('course', 'Python')
print(student)    # {'name': 'Rahul', 'age': 20}

# clear() - removes all items
student.clear()
print(student)  # {}</code></pre></div>

      <h3>3. Copying</h3>
      <ul>
        <li><strong>copy():</strong> Returns a shallow copy of the dictionary.</li>
      </ul>
      <div class="code-example"><pre><code># copy() - creates shallow copy
original = {"name": "Rahul", "age": 20, "address": {"city": "Mumbai"}}
copied = original.copy()

copied["name"] = "Ravi"  # Modifies copy only
copied["address"]["city"] = "Delhi"  # Modifies both (shallow copy)

print(original)  # {'name': 'Rahul', 'age': 20, 'address': {'city': 'Delhi'}}
print(copied)    # {'name': 'Ravi', 'age': 20, 'address': {'city': 'Delhi'}}

# Deep copy (using copy module)
import copy
deep_copied = copy.deepcopy(original)
deep_copied["address"]["city"] = "Mumbai"
print(original)      # {'name': 'Rahul', 'age': 20, 'address': {'city': 'Delhi'}}
print(deep_copied)   # {'name': 'Rahul', 'age': 20, 'address': {'city': 'Mumbai'}}</code></pre></div>

      <h3>4. Getting Keys, Values, and Items</h3>
      <ul>
        <li><strong>keys():</strong> Returns a view object of all keys.</li>
        <li><strong>values():</strong> Returns a view object of all values.</li>
        <li><strong>items():</strong> Returns a view object of all key-value pairs.</li>
      </ul>
      <div class="code-example"><pre><code>student = {"name": "Rahul", "age": 20, "course": "Python"}

# keys() - get all keys
keys = student.keys()
print(keys)  # dict_keys(['name', 'age', 'course'])
print(list(keys))  # ['name', 'age', 'course']

# values() - get all values
values = student.values()
print(values)  # dict_values(['Rahul', 20, 'Python'])

# items() - get all key-value pairs
items = student.items()
print(items)  # dict_items([('name', 'Rahul'), ('age', 20), ('course', 'Python')])

# Converting to lists
print(list(student.keys()))    # ['name', 'age', 'course']
print(list(student.values()))  # ['Rahul', 20, 'Python']
print(list(student.items()))   # [('name', 'Rahul'), ('age', 20), ('course', 'Python')]</code></pre></div>

      <h3>5. Getting Values with Default</h3>
      <ul>
        <li><strong>get(key, default):</strong> Returns value for key, or default if key doesn't exist.</li>
        <li><strong>setdefault(key, default):</strong> Returns value for key, sets default if key doesn't exist.</li>
      </ul>
      <div class="code-example"><pre><code># get() vs setdefault() comparison
student = {"name": "Rahul", "age": 20}

# get() - doesn't modify dictionary
course = student.get("course", "Python")
print(course)  # Python
print(student) # {'name': 'Rahul', 'age': 20} (unchanged)

# setdefault() - modifies dictionary if key missing
course = student.setdefault("course", "Python")
print(course)  # Python
print(student) # {'name': 'Rahul', 'age': 20, 'course': 'Python'} (updated)</code></pre></div>

      <h3>Summary Table of Dictionary Methods</h3>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>clear()</code></td>
            <td>Removes all items</td>
            <td><code>dict.clear()</code></td>
          </tr>
          <tr>
            <td><code>copy()</code></td>
            <td>Returns a shallow copy</td>
            <td><code>dict.copy()</code></td>
          </tr>
          <tr>
            <td><code>fromkeys(seq, value)</code></td>
            <td>Creates dict from keys</td>
            <td><code>dict.fromkeys(['a','b'], 0)</code></td>
          </tr>
          <tr>
            <td><code>get(key, default)</code></td>
            <td>Returns value or default</td>
            <td><code>dict.get('key', 'default')</code></td>
          </tr>
          <tr>
            <td><code>items()</code></td>
            <td>Returns key-value pairs</td>
            <td><code>dict.items()</code></td>
          </tr>
          <tr>
            <td><code>keys()</code></td>
            <td>Returns all keys</td>
            <td><code>dict.keys()</code></td>
          </tr>
          <tr>
            <td><code>values()</code></td>
            <td>Returns all values</td>
            <td><code>dict.values()</code></td>
          </tr>
          <tr>
            <td><code>pop(key, default)</code></td>
            <td>Removes and returns value</td>
            <td><code>dict.pop('key', 'default')</code></td>
          </tr>
          <tr>
            <td><code>popitem()</code></td>
            <td>Removes and returns last pair</td>
            <td><code>dict.popitem()</code></td>
          </tr>
          <tr>
            <td><code>setdefault(key, default)</code></td>
            <td>Returns value, sets if missing</td>
            <td><code>dict.setdefault('key', 0)</code></td>
          </tr>
          <tr>
            <td><code>update(iterable)</code></td>
            <td>Updates with key-value pairs</td>
            <td><code>dict.update({'a':1})</code></td>
          </tr>
        </tbody>
      </table>
    `
  },

  'builtin-functions-dict': {
    title: 'Built-in Functions of Dictionary',
    html: `
      <h2>Built-in Functions Used with Dictionaries</h2>
      <p>Dictionaries can be used with various built-in functions. Most functions operate on the <strong>keys</strong> of the dictionary, not the values.</p>

      <h3>1. Information Functions</h3>
      <ul>
        <li><strong>len(dict):</strong> Returns the number of key-value pairs.</li>
        <li><strong>type(object):</strong> Returns the type of the object.</li>
        <li><strong>id(object):</strong> Returns the unique identifier (memory address) of the object.</li>
      </ul>
      <div class="code-example"><pre><code># len() - number of key-value pairs
student = {"name": "Rahul", "age": 20, "course": "Python"}
print(len(student))  # 3

# type() - type of object
print(type(student))  # dict

# id() - unique identifier
print(id(student))  # some number (memory address)</code></pre></div>

      <h3>2. Sorting and Ordering (Operates on Keys)</h3>
      <ul>
        <li><strong>sorted(iterable, reverse=False):</strong> Returns a sorted list of keys.</li>
        <li><strong>min(iterable):</strong> Returns the smallest key (lexicographically).</li>
        <li><strong>max(iterable):</strong> Returns the largest key (lexicographically).</li>
        <li><strong>reversed(iterable):</strong> Returns reverse iterator on keys.</li>
      </ul>
      <div class="code-example"><pre><code># sorted() - returns sorted list of keys
student = {"name": "Rahul", "age": 20, "course": "Python", "city": "Mumbai"}
sorted_keys = sorted(student)
print(sorted_keys)  # ['age', 'city', 'course', 'name']

# sorted() with reverse
sorted_desc = sorted(student, reverse=True)
print(sorted_desc)  # ['name', 'course', 'city', 'age']

# min() - smallest key
print(min(student))  # age (lexicographically smallest)

# max() - largest key
print(max(student))  # name (lexicographically largest)

# Sorting by values
sorted_by_values = sorted(student, key=student.get)
print(sorted_by_values)  # Sorted by values</code></pre></div>

      <h3>3. Iteration and Validation</h3>
      <ul>
        <li><strong>any(iterable):</strong> Returns True if any key is truthy.</li>
        <li><strong>all(iterable):</strong> Returns True if all keys are truthy.</li>
        <li><strong>enumerate(iterable):</strong> Returns index-key pairs.</li>
      </ul>
      <div class="code-example"><pre><code># any() - checks if any key is truthy
dict1 = {"": "empty", "name": "Rahul"}
print(any(dict1))  # True (because 'name' is truthy)

dict2 = {"": "empty", "0": "zero"}
print(any(dict2))  # True (both keys are truthy strings)

# any() with empty dictionary
empty = {}
print(any(empty))  # False

# all() - checks if all keys are truthy
dict3 = {"name": "Rahul", "age": 20}
print(all(dict3))  # True (both keys are truthy)

dict4 = {"": "empty", "name": "Rahul"}
print(all(dict4))  # False ('' is falsy)

# enumerate() - pairs index with key
for index, key in enumerate(student):
    print(f"{index}: {key}")
# 0: name
# 1: age
# 2: course
# 3: city</code></pre></div>

      <h3>4. Combining Dictionaries (zip)</h3>
      <ul>
        <li><strong>zip(*iterables):</strong> Combines multiple dictionaries or iterables.</li>
      </ul>
      <div class="code-example"><pre><code># Combining two dictionaries' keys
dict_a = {"a": 1, "b": 2, "c": 3}
dict_b = {"x": 10, "y": 20, "z": 30}

# zip() on dictionary keys
for key_a, key_b in zip(dict_a, dict_b):
    print(f"{key_a}: {dict_a[key_a]}, {key_b}: {dict_b[key_b]}")
# a: 1, x: 10
# b: 2, y: 20
# c: 3, z: 30

# zip() on values
for val_a, val_b in zip(dict_a.values(), dict_b.values()):
    print(val_a + val_b)  # 11, 22, 33

# Creating dictionary from two lists using zip
keys = ["name", "age", "course"]
values = ["Rahul", 20, "Python"]
new_dict = dict(zip(keys, values))
print(new_dict)  # {'name': 'Rahul', 'age': 20, 'course': 'Python'}</code></pre></div>

      <h3>Important Note</h3>
      <p><strong>Most built-in functions operate on the keys of the dictionary, not the values.</strong> When you call <code>min()</code>, <code>max()</code>, <code>sorted()</code>, etc., on a dictionary, they work with the keys.</p>
      <div class="code-example"><pre><code># Demonstrating functions work on keys
student = {"name": "Rahul", "age": 20, "course": "Python"}

# min() on dictionary - compares keys
print(min(student))  # age (lexicographically smallest key)

# To compare values, use key parameter
print(min(student, key=student.get))  # age (assuming age has smallest value)

# max() on dictionary - compares keys
print(max(student))  # name (lexicographically largest key)

# To get value with max, use key parameter
print(max(student, key=student.get))  # course (assuming "Python" is largest value)</code></pre></div>

      <h3>Summary Table of Built-in Functions for Dictionaries</h3>
      <table>
        <thead>
          <tr>
            <th>Function</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>len(dict)</code></td>
            <td>Returns number of key-value pairs</td>
            <td><code>len({"a":1, "b":2}) → 2</code></td>
          </tr>
          <tr>
            <td><code>type(dict)</code></td>
            <td>Returns type of object</td>
            <td><code>type({"a":1}) → dict</code></td>
          </tr>
          <tr>
            <td><code>id(dict)</code></td>
            <td>Returns unique identifier</td>
            <td><code>id({"a":1}) → number</code></td>
          </tr>
          <tr>
            <td><code>sorted(dict)</code></td>
            <td>Returns sorted list of keys</td>
            <td><code>sorted({"b":2, "a":1}) → ['a','b']</code></td>
          </tr>
          <tr>
            <td><code>min(dict)</code></td>
            <td>Returns smallest key</td>
            <td><code>min({"b":2, "a":1}) → 'a'</code></td>
          </tr>
          <tr>
            <td><code>max(dict)</code></td>
            <td>Returns largest key</td>
            <td><code>max({"b":2, "a":1}) → 'b'</code></td>
          </tr>
          <tr>
            <td><code>reversed(dict)</code></td>
            <td>Reverse iterator on keys</td>
            <td><code>list(reversed({"a":1,"b":2})) → ['b','a']</code></td>
          </tr>
          <tr>
            <td><code>any(dict)</code></td>
            <td>True if any key is truthy</td>
            <td><code>any({"a":1}) → True</code></td>
          </tr>
          <tr>
            <td><code>all(dict)</code></td>
            <td>True if all keys are truthy</td>
            <td><code>all({"a":1, "":2}) → False</code></td>
          </tr>
          <tr>
            <td><code>enumerate(dict)</code></td>
            <td>Returns index-key pairs</td>
            <td><code>list(enumerate({"a":1,"b":2})) → [(0,'a'),(1,'b')]</code></td>
          </tr>
          <tr>
            <td><code>zip(dict1, dict2)</code></td>
            <td>Combines keys from dictionaries</td>
            <td><code>zip({"a":1},{"b":2})</code></td>
          </tr>
        </tbody>
      </table>
    `
  },

  'set-vs-dict': {
    title: 'Set vs Dictionary',
    html: `
      <h2>Set vs Dictionary: A Detailed Comparison</h2>
      <p>Sets and dictionaries are both built-in data structures in Python that use curly braces, but they serve very different purposes. Understanding their differences is crucial for choosing the right data structure.</p>

      <h3>Key Differences</h3>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Set</th>
            <th>Dictionary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Data Structure</strong></td>
            <td>Collection of unique elements</td>
            <td>Collection of key-value pairs</td>
          </tr>
          <tr>
            <td><strong>Syntax</strong></td>
            <td><code>{1, 2, 3}</code></td>
            <td><code>{"a": 1, "b": 2}</code></td>
          </tr>
          <tr>
            <td><strong>Elements</strong></td>
            <td>Single values</td>
            <td>Key-value pairs</td>
          </tr>
          <tr>
            <td><strong>Uniqueness</strong></td>
            <td>All elements are unique</td>
            <td>Keys are unique, values can repeat</td>
          </tr>
          <tr>
            <td><strong>Access</strong></td>
            <td>No indexing (unorderd)</td>
            <td>Access by keys</td>
          </tr>
          <tr>
            <td><strong>Mutability</strong></td>
            <td>Mutable (elements must be immutable)</td>
            <td>Mutable (keys must be immutable)</td>
          </tr>
          <tr>
            <td><strong>Order</strong></td>
            <td>Unordered</td>
            <td>Ordered (Python 3.7+)</td>
          </tr>
          <tr>
            <td><strong>Use Case</strong></td>
            <td>Membership testing, deduplication</td>
            <td>Key-value mapping, data organization</td>
          </tr>
          <tr>
            <td><strong>Memory</strong></td>
            <td>Less memory (stores only values)</td>
            <td>More memory (stores keys and values)</td>
          </tr>
          <tr>
            <td><strong>Methods</strong></td>
            <td><code>add()</code>, <code>update()</code>, set operations</td>
            <td><code>get()</code>, <code>keys()</code>, <code>values()</code>, <code>items()</code></td>
          </tr>
        </tbody>
      </table>

      <h3>Examples Showing Differences</h3>
      <div class="code-example"><pre><code># Creating set vs dictionary
my_set = {1, 2, 3, 4, 5}
my_dict = {"a": 1, "b": 2, "c": 3}

print(my_set)   # {1, 2, 3, 4, 5}
print(my_dict)  # {'a': 1, 'b': 2, 'c': 3}

# Accessing elements
# Set - membership testing
print(3 in my_set)   # True
# Set cannot be accessed by index
# print(my_set[0])   # TypeError

# Dictionary - access by key
print(my_dict["a"])  # 1
print(my_dict.get("b"))  # 2

# Adding elements
my_set.add(6)
my_dict["d"] = 4
print(my_set)   # {1, 2, 3, 4, 5, 6}
print(my_dict)  # {'a': 1, 'b': 2, 'c': 3, 'd': 4}

# Duplicate handling
my_set.add(3)  # No change (already exists)
my_dict["a"] = 99  # Updates existing key
print(my_set)   # {1, 2, 3, 4, 5, 6}
print(my_dict)  # {'a': 99, 'b': 2, 'c': 3, 'd': 4}

# Iteration
for element in my_set:
    print(element)  # prints elements (order may vary)

for key, value in my_dict.items():
    print(f"{key}: {value}")  # prints key-value pairs</code></pre></div>

      <h3>When to Use Which?</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:12px 0;">
        <div style="background:var(--bg-secondary);padding:16px;border-radius:8px;border-left:4px solid #28a745;">
          <h4 style="color:#28a745;margin-top:0;">Use Set When:</h4>
          <ul style="margin:0;padding-left:20px;">
            <li>You need to eliminate duplicates</li>
            <li>You need fast membership testing</li>
            <li>You need set operations (union, intersection, etc.)</li>
            <li>Order of elements doesn't matter</li>
            <li>You only need to store values, not relationships</li>
          </ul>
        </div>
        <div style="background:var(--bg-secondary);padding:16px;border-radius:8px;border-left:4px solid #667eea;">
          <h4 style="color:#667eea;margin-top:0;">Use Dictionary When:</h4>
          <ul style="margin:0;padding-left:20px;">
            <li>You need to store key-value relationships</li>
            <li>You need to access data by a meaningful identifier</li>
            <li>You need fast lookup by key</li>
            <li>You need to maintain order (Python 3.7+)</li>
            <li>You have structured data with attributes</li>
          </ul>
        </div>
      </div>

      <h3>Practical Examples</h3>
      <div class="code-example"><pre><code># Set example - removing duplicates
students = ["Rahul", "Priya", "Rahul", "Amit", "Priya"]
unique_students = set(students)
print(unique_students)  # {'Priya', 'Amit', 'Rahul'}

# Set example - finding common elements
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}
common = set_a.intersection(set_b)
print(common)  # {3, 4}

# Dictionary example - student records
student_records = {
    "Rahul": {"age": 20, "course": "Python", "grades": [85, 92]},
    "Priya": {"age": 22, "course": "Java", "grades": [90, 88]},
    "Amit": {"age": 21, "course": "Python", "grades": [78, 85]}
}

# Access by key
print(student_records["Rahul"]["course"])  # Python

# Update
student_records["Rahul"]["age"] = 21
print(student_records["Rahul"])  # {'age': 21, 'course': 'Python', 'grades': [85, 92]}

# Finding all Python students
python_students = {name for name, data in student_records.items() if data["course"] == "Python"}
print(python_students)  # {'Rahul', 'Amit'}</code></pre></div>
    `
  },

  'modules-intro': {
    title: 'Modules Introduction',
    html: `
      <h2>What is a Module?</h2>
      <p>A <strong>module</strong> is a file containing Python definitions and statements. Modules allow you to organize related code into separate files, making it easier to manage, reuse, and share code.</p>

      <h2>Definition</h2>
      <p>A module is a Python file (with the <code>.py</code> extension) that contains functions, classes, and variables. It allows you to logically organize your Python code into reusable components.</p>

      <h2>Advantages of Using Modules</h2>
      <ul>
        <li><strong>Code Reusability:</strong> Write once, use multiple times across different programs.</li>
        <li><strong>Organization:</strong> Keep related functions and classes in a single file for better structure.</li>
        <li><strong>Namespace Management:</strong> Avoid naming conflicts between functions and variables.</li>
        <li><strong>Maintainability:</strong> Easier to update and debug code when it's organized into modules.</li>
        <li><strong>Collaboration:</strong> Multiple developers can work on different modules simultaneously.</li>
        <li><strong>Performance:</strong> Modules are compiled only once and cached for faster execution.</li>
      </ul>

      <h2>Types of Modules</h2>

      <h3>1. Built-in Modules</h3>
      <p>These modules come pre-installed with Python and provide a wide range of functionality. Examples include <code>math</code>, <code>random</code>, <code>os</code>, <code>sys</code>, <code>datetime</code>, and <code>json</code>.</p>
      <div class="code-example"><pre><code># Using built-in modules
import math
import random
import os

print(math.pi)        # 3.141592653589793
print(random.randint(1, 10))  # Random number between 1 and 10
print(os.getcwd())    # Current working directory</code></pre></div>

      <h3>2. Third-Party Modules</h3>
      <p>These modules are developed by the Python community and can be installed using package managers like <code>pip</code>. Examples include <code>numpy</code>, <code>pandas</code>, <code>requests</code>, and <code>matplotlib</code>.</p>
      <div class="code-example"><pre><code># Installing and using third-party modules
# pip install numpy requests

# import numpy as np
# import requests

# Using the installed modules
# arr = np.array([1, 2, 3])
# response = requests.get("https://api.example.com")</code></pre></div>

      <h3>3. Local Modules (User-defined)</h3>
      <p>These are modules you create yourself for your own projects. Simply create a <code>.py</code> file with your functions and classes, and import it in your main program.</p>
      <div class="code-example"><pre><code># my_module.py (file content)
# def greet(name):
#     return f"Hello, {name}!"

# def add(a, b):
#     return a + b

# main.py (using the module)
# import my_module
# print(my_module.greet("Rahul"))  # Hello, Rahul!</code></pre></div>

      <h3>4. Packages</h3>
      <p>A package is a collection of related modules organized in directories. Each package must contain a special <code>__init__.py</code> file (can be empty) to indicate it's a package.</p>
      <div class="code-example"><pre><code># Package structure
# my_package/
#     __init__.py
#     module1.py
#     module2.py
#     sub_package/
#         __init__.py
#         module3.py

# Importing from package
# from my_package import module1
# from my_package.sub_package import module3</code></pre></div>

      <h3>Module Search Path</h3>
      <p>When you import a module, Python searches for it in the following order:</p>
      <ol>
        <li>The current directory (where your script is located)</li>
        <li>The <code>PYTHONPATH</code> environment variable directories</li>
        <li>The standard Python library directories</li>
        <li>The site-packages directory (for third-party modules)</li>
      </ol>
      <div class="code-example"><pre><code>import sys
print(sys.path)  # Prints the list of directories Python searches for modules</code></pre></div>
    `
  },

  'modules-imports': {
    title: 'Import Patterns',
    html: `
      <h2>Importing Modules in Python</h2>
      <p>Python provides several ways to import modules, each with its own syntax and use cases. Here are the most common import patterns:</p>

      <h3>1. Using import (Standard Import)</h3>
      <p>Imports the entire module. You need to prefix the module name to access its contents.</p>
      <div class="code-example"><pre><code># Import the entire module
import math

# Access functions using module name
print(math.sqrt(25))      # 5.0
print(math.pi)            # 3.141592653589793
print(math.floor(3.7))    # 3

# Import multiple modules
import math, random, os

print(random.randint(1, 10))
print(os.getcwd())</code></pre></div>

      <h3>2. Using import with Alias</h3>
      <p>Imports the module with a shorter alias to reduce typing.</p>
      <div class="code-example"><pre><code># Import with alias
import math as m
import random as r

print(m.sqrt(16))     # 4.0
print(m.pi)           # 3.141592653589793
print(r.randint(1, 6))  # Random number between 1 and 6

# Common aliases in Python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt</code></pre></div>

      <h3>3. Using from ... import</h3>
      <p>Imports specific functions, classes, or variables from a module directly into the current namespace. No module prefix needed.</p>
      <div class="code-example"><pre><code># Import specific functions
from math import sqrt, pi, floor

# Use directly without prefix
print(sqrt(25))    # 5.0
print(pi)          # 3.141592653589793
print(floor(3.7))  # 3

# Import multiple items
from math import sin, cos, tan
print(sin(0))      # 0.0
print(cos(0))      # 1.0

# Import everything (NOT recommended - pollutes namespace)
# from math import *</code></pre></div>

      <h3>4. Using from ... import with Alias</h3>
      <p>Imports specific items with custom names.</p>
      <div class="code-example"><pre><code># Import with alias for specific items
from math import sqrt as square_root
from math import pi as PI_VALUE

print(square_root(100))  # 10.0
print(PI_VALUE)          # 3.141592653589793</code></pre></div>

      <h3>5. Creating Your Own Module</h3>
      <p>To create a module, simply save a Python file with a <code>.py</code> extension in the same directory or in Python's search path.</p>
      <div class="code-example"><pre><code># my_utils.py (Create this file)
# def greet(name):
#     return f"Hello, {name}!"
#
# def add(a, b):
#     return a + b
#
# def multiply(a, b):
#     return a * b
#
# PI = 3.14159

# my_program.py (Import and use the module)
import my_utils

print(my_utils.greet("Rahul"))      # Hello, Rahul!
print(my_utils.add(5, 3))           # 8
print(my_utils.multiply(4, 2))      # 8
print(my_utils.PI)                  # 3.14159

# Using from ... import with custom module
from my_utils import greet, add
print(greet("Priya"))   # Hello, Priya!
print(add(10, 20))      # 30</code></pre></div>

      <h3>6. Importing from Packages</h3>
      <p>When modules are organized in directories (packages), use dot notation.</p>
      <div class="code-example"><pre><code># Package structure
# my_package/
#     __init__.py
#     module1.py
#     module2.py

# Import module from package
import my_package.module1
# or
from my_package import module1
# or
from my_package.module1 import function_name</code></pre></div>

      <h3>Important Rules</h3>
      <ul>
        <li><strong>Place import statements at the top</strong> of your Python file (after the shebang line and docstring).</li>
        <li>Group imports in order: standard library, third-party, local modules.</li>
        <li>Avoid using <code>from module import *</code> as it pollutes the namespace and makes code less readable.</li>
        <li>Use <code>if __name__ == "__main__":</code> guard to prevent code from running when imported.</li>
      </ul>

      <div class="code-example"><pre><code># Example of proper import organization
#!/usr/bin/env python3
\"\"\"This is a module docstring.\"\"\"

# 1. Standard library imports
import os
import sys
from math import pi, sqrt

# 2. Third-party imports
# import numpy as np
# import pandas as pd

# 3. Local imports
# import my_utils

# Guard for script execution
if __name__ == "__main__":
    print("This code runs only when the script is executed directly")
    print(f"Pi value: {pi}")</code></pre></div>
    `
  },

  'module-random': {
    title: 'Random Module',
    html: `
      <h2>Random Module in Python</h2>
      <p>The <code>random</code> module provides functions for generating random numbers and performing random selections. It is widely used in games, simulations, testing, and security applications.</p>

      <h3>How to Import the Random Module</h3>
      <div class="code-example"><pre><code># Import the random module
import random

# Or import specific functions
from random import randint, choice, shuffle</code></pre></div>

      <h3>Common Functions in Random Module</h3>

      <h4>1. random() - Random Float between 0 and 1</h4>
      <p>Returns a random floating-point number between 0.0 and 1.0 (exclusive).</p>
      <div class="code-example"><pre><code>import random

# random() - float between 0.0 and 1.0
value = random.random()
print(value)  # 0.123456789 (example)

# Generate multiple random floats
for i in range(5):
    print(random.random())</code></pre></div>

      <h4>2. randint(a, b) - Random Integer in Range</h4>
      <p>Returns a random integer N such that <code>a <= N <= b</code> (inclusive).</p>
      <div class="code-example"><pre><code>import random

# randint(a, b) - random integer between a and b
dice_roll = random.randint(1, 6)
print(f"Dice roll: {dice_roll}")

# Random age between 18 and 65
age = random.randint(18, 65)
print(f"Random age: {age}")

# Generate 10 random numbers between 1 and 100
for i in range(10):
    print(random.randint(1, 100), end=" ")</code></pre></div>

      <h4>3. randrange(start, stop, step) - Random from Range</h4>
      <p>Returns a random element from the range generated by <code>range(start, stop, step)</code>.</p>
      <div class="code-example"><pre><code>import random

# randrange(stop)
print(random.randrange(10))  # 0 to 9

# randrange(start, stop)
print(random.randrange(5, 15))  # 5 to 14

# randrange(start, stop, step)
print(random.randrange(0, 20, 2))  # 0, 2, 4, 6, 8, 10, 12, 14, 16, 18

# Use to generate random even numbers
even_number = random.randrange(2, 20, 2)
print(f"Random even: {even_number}")</code></pre></div>

      <h4>4. choice(sequence) - Random Choice from Sequence</h4>
      <p>Returns a randomly selected element from a non-empty sequence (list, tuple, string, etc.).</p>
      <div class="code-example"><pre><code>import random

# choice() from list
fruits = ["apple", "banana", "cherry", "date", "elderberry"]
print(random.choice(fruits))  # Random fruit

# choice() from string
letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
print(random.choice(letters))  # Random uppercase letter

# choice() from tuple
colors = ("red", "green", "blue", "yellow")
print(random.choice(colors))  # Random color

# Random winner
participants = ["Alice", "Bob", "Charlie", "Diana"]
winner = random.choice(participants)
print(f"The winner is: {winner}")</code></pre></div>

      <h4>5. shuffle(sequence) - Shuffle Sequence in Place</h4>
      <p>Randomly shuffles the elements of a sequence in place (modifies the original list).</p>
      <div class="code-example"><pre><code>import random

# shuffle() - shuffles list in place
cards = ["A♠", "K♠", "Q♠", "J♠", "10♠", "9♠", "8♠", "7♠", "6♠", "5♠", "4♠", "3♠", "2♠"]
print("Original:", cards)
random.shuffle(cards)
print("Shuffled:", cards)

# Shuffle a deck for a game
deck = list(range(1, 53))  # 1-52
random.shuffle(deck)
print(f"Top card: {deck[0]}")
print(f"Bottom card: {deck[-1]}")</code></pre></div>

      <h4>6. sample(population, k) - Random Sample without Replacement</h4>
      <p>Returns a list of k unique elements chosen from the population without replacement.</p>
      <div class="code-example"><pre><code>import random

# sample() - selects k unique items
participants = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"]
winners = random.sample(participants, 3)  # Select 3 unique winners
print(winners)

# Lottery numbers
numbers = list(range(1, 50))
lottery = random.sample(numbers, 6)  # Select 6 unique numbers
print(f"Lottery numbers: {sorted(lottery)}")</code></pre></div>

      <h4>7. uniform(a, b) - Random Float between a and b</h4>
      <p>Returns a random floating-point number between a and b (inclusive of both ends).</p>
      <div class="code-example"><pre><code>import random

# uniform(a, b) - float between a and b
temperature = random.uniform(20.0, 35.0)
print(f"Random temperature: {temperature:.2f}°C")

price = random.uniform(10.50, 100.75)
print(f"Random price: \${price:.2f}")</code></pre></div></code></pre></div>
    `
  },

  'module-math': {
    title: 'Math Module',
    html: `
      <h2>Math Module in Python</h2>
      <p>The <code>math</code> module provides mathematical functions and constants for performing mathematical operations. It is used in scientific computing, engineering, statistics, and general programming.</p>

      <h3>How to Import the Math Module</h3>
      <div class="code-example"><pre><code># Import the math module
import math

# Or import specific functions
from math import pi, sqrt, ceil, floor</code></pre></div>

      <h3>Constants in Math Module</h3>

      <h4>1. pi (π)</h4>
      <p>The mathematical constant pi (approximately 3.14159).</p>
      <div class="code-example"><pre><code>import math

print(math.pi)          # 3.141592653589793
print(f"π = {math.pi:.10f}")

# Calculate circumference
radius = 5
circumference = 2 * math.pi * radius
print(f"Circumference: {circumference}")</code></pre></div>

      <h4>2. e (Euler's Number)</h4>
      <p>The base of natural logarithms (approximately 2.71828).</p>
      <div class="code-example"><pre><code>import math

print(math.e)           # 2.718281828459045
print(f"e = {math.e:.10f}")

# Natural exponential
print(math.exp(1))      # 2.718281828459045 (same as e)</code></pre></div>

      <h4>3. inf (Infinity)</h4>
      <p>Represents positive infinity. Used for comparisons and representing unbounded values.</p>
      <div class="code-example"><pre><code>import math

print(math.inf)         # inf
print(float('inf'))     # inf

# Comparisons with infinity
print(math.inf > 1000)  # True
print(math.inf + 5)     # inf</code></pre></div>

      <h4>4. nan (Not a Number)</h4>
      <p>Represents an undefined or unrepresentable value (e.g., 0/0).</p>
      <div class="code-example"><pre><code>import math

print(math.nan)         # nan

# Checking for nan
value = float('nan')
print(math.isnan(value))  # True
print(math.isnan(10))     # False</code></pre></div>

      <h3>Common Functions in Math Module</h3>

      <h4>1. ceil(x) - Ceiling Function</h4>
      <p>Returns the smallest integer greater than or equal to x (rounds up).</p>
      <div class="code-example"><pre><code>import math

print(math.ceil(3.2))   # 4
print(math.ceil(3.0))   # 3
print(math.ceil(3.9))   # 4
print(math.ceil(-3.2))  # -3
print(math.ceil(-3.9))  # -3</code></pre></div>

      <h4>2. floor(x) - Floor Function</h4>
      <p>Returns the largest integer less than or equal to x (rounds down).</p>
      <div class="code-example"><pre><code>import math

print(math.floor(3.2))   # 3
print(math.floor(3.9))   # 3
print(math.floor(3.0))   # 3
print(math.floor(-3.2))  # -4
print(math.floor(-3.9))  # -4</code></pre></div>

      <h4>3. sqrt(x) - Square Root</h4>
      <p>Returns the square root of x. Raises ValueError for negative numbers.</p>
      <div class="code-example"><pre><code>import math

print(math.sqrt(25))    # 5.0
print(math.sqrt(2))     # 1.4142135623730951
print(math.sqrt(100))   # 10.0

# Calculate distance
x1, y1 = 0, 0
x2, y2 = 3, 4
distance = math.sqrt((x2-x1)**2 + (y2-y1)**2)
print(f"Distance: {distance}")  # 5.0

# math.sqrt(-1)  # ValueError: math domain error</code></pre></div>

      <h4>4. pow(x, y) - Power Function</h4>
      <p>Returns x raised to the power of y. Similar to <code>x ** y</code>.</p>
      <div class="code-example"><pre><code>import math

print(math.pow(2, 3))    # 8.0
print(math.pow(5, 2))    # 25.0
print(math.pow(2, 0.5))  # 1.4142135623730951 (sqrt of 2)
print(math.pow(10, -1))  # 0.1

# Compare with ** operator
print(2 ** 3)            # 8
print(math.pow(2, 3))    # 8.0 (always returns float)</code></pre></div>

      <h4>5. log(x, base) - Logarithm</h4>
      <p>Returns the logarithm of x to the specified base. Default is natural logarithm (base e).</p>
      <div class="code-example"><pre><code>import math

# Natural logarithm (base e)
print(math.log(10))          # 2.302585092994046
print(math.log(math.e))      # 1.0

# Logarithm with specified base
print(math.log(100, 10))     # 2.0 (log base 10)
print(math.log(8, 2))        # 3.0 (log base 2)

# Common logarithms
print(math.log10(100))       # 2.0 (base 10)
print(math.log2(8))          # 3.0 (base 2)</code></pre></div>

      <h4>6. factorial(x) - Factorial</h4>
      <p>Returns the factorial of x (x! = x * (x-1) * (x-2) * ... * 1).</p>
      <div class="code-example"><pre><code>import math

print(math.factorial(5))    # 120 (5*4*3*2*1)
print(math.factorial(0))    # 1 (by definition)
print(math.factorial(10))   # 3628800

# Calculate permutations
n = 5
r = 3
permutations = math.factorial(n) // math.factorial(n - r)
print(f"P(5,3) = {permutations}")  # 60</code></pre></div>

      <h3>Additional Useful Math Functions</h3>

      <h4>Trigonometric Functions</h4>
      <div class="code-example"><pre><code>import math

# Angle in radians
angle = math.radians(45)  # Convert 45° to radians

print(math.sin(angle))    # 0.7071067811865475
print(math.cos(angle))    # 0.7071067811865476
print(math.tan(angle))    # 0.9999999999999999

# Convert radians to degrees
degrees = math.degrees(math.pi / 4)
print(degrees)            # 45.0</code></pre></div>

      <h4>Absolute Value</h4>
      <div class="code-example"><pre><code>import math

print(math.fabs(-5.5))     # 5.5
print(math.fabs(3.2))      # 3.2</code></pre></div>

      <h4>Rounding and Truncation</h4>
      <div class="code-example"><pre><code>import math

print(math.trunc(3.7))     # 3 (removes decimal part)
print(math.trunc(-3.7))    # -3 (removes decimal part)</code></pre></div></code></pre></div>
    `
  }
});

// ---- Navigation & availability control for this section ----
topicOrder.push(
  'sets-intro',
  'creating-set',
  'accessing-set-items',
  'builtin-methods-set',
  'builtin-functions-set',
  'dict-intro',
  'creating-dictionary',
  'accessing-dict-items',
  'builtin-methods-dict',
  'builtin-functions-dict',
  'set-vs-dict',
  'modules-intro',
  'modules-imports',
  'module-random',
  'module-math'
);

Object.assign(unitMapping, {
  'sets-intro': 'Unit V',
  'creating-set': 'Unit V',
  'accessing-set-items': 'Unit V',
  'builtin-methods-set': 'Unit V',
  'builtin-functions-set': 'Unit V',
  'dict-intro': 'Unit V',
  'creating-dictionary': 'Unit V',
  'accessing-dict-items': 'Unit V',
  'builtin-methods-dict': 'Unit V',
  'builtin-functions-dict': 'Unit V',
  'set-vs-dict': 'Unit V',
  'modules-intro': 'Unit V',
  'modules-imports': 'Unit V',
  'module-random': 'Unit V',
  'module-math': 'Unit V'
});

Object.assign(topicAvailability, {
  'sets-intro': true,
  'creating-set': true,
  'accessing-set-items': true,
  'builtin-methods-set': true,
  'builtin-functions-set': true,
  'dict-intro': true,
  'creating-dictionary': true,
  'accessing-dict-items': true,
  'builtin-methods-dict': true,
  'builtin-functions-dict': true,
  'set-vs-dict': true,
  'modules-intro': true,
  'modules-imports': true,
  'module-random': true,
  'module-math': true
});

Object.assign(unitTopicsByName, {
  'Unit V': [
    'sets-intro',
    'creating-set',
    'accessing-set-items',
    'builtin-methods-set',
    'builtin-functions-set',
    'dict-intro',
    'creating-dictionary',
    'accessing-dict-items',
    'builtin-methods-dict',
    'builtin-functions-dict',
    'set-vs-dict',
    'modules-intro',
    'modules-imports',
    'module-random',
    'module-math'
  ]
});

// Enable/disable this entire unit (Unit 5)
function enableUnit5() {
  [
    'sets-intro',
    'creating-set',
    'accessing-set-items',
    'builtin-methods-set',
    'builtin-functions-set',
    'dict-intro',
    'creating-dictionary',
    'accessing-dict-items',
    'builtin-methods-dict',
    'builtin-functions-dict',
    'set-vs-dict',
    'modules-intro',
    'modules-imports',
    'module-random',
    'module-math'
  ].forEach(id => { topicAvailability[id] = true; });
  console.log('Enabled entire Unit 5');
}
function disableUnit5() {
  [
    'sets-intro',
    'creating-set',
    'accessing-set-items',
    'builtin-methods-set',
    'builtin-functions-set',
    'dict-intro',
    'creating-dictionary',
    'accessing-dict-items',
    'builtin-methods-dict',
    'builtin-functions-dict',
    'set-vs-dict',
    'modules-intro',
    'modules-imports',
    'module-random',
    'module-math'
  ].forEach(id => { topicAvailability[id] = false; });
  console.log('Disabled entire Unit 5');
}