// Unit IV — Lists & Tuples
// This file defines the topic content for this section only.
// It merges into the global 'topics' object used by topic.js (topic-core.js).

Object.assign(topics, {
  'lists-intro': {
    title: 'List and its Properties',
    html: `
      <h2>What is a List?</h2>
      <p>A <strong>list</strong> is a built-in data structure used to store an ordered collection of items. They are dynamic, resizable and capable of storing multiple data types. It is one of the most versatile and heavily used built-in sequence data types in the language.</p>

      <h2>Core Properties of Python Lists</h2>
      <ul>
        <li><strong>Ordered:</strong> Items maintain their exact insertion sequence unless explicitly reordered.</li>
        <li><strong>Mutable:</strong> Elements can be added, updated, or removed after creation.</li>
        <li><strong>Heterogeneous:</strong> A single list can simultaneously store integers, strings, booleans, or other lists.</li>
        <li><strong>Indexed:</strong> Elements are zero-indexed, meaning the first element starts at position 0.</li>
        <li><strong>Allows Duplicates:</strong> The same value can occur multiple times at different indices.</li>
        <li><strong>Dynamic Size:</strong> The list automatically expands or shrinks in memory as you add or delete items.</li>
        <li><strong>Nestable:</strong> Lists can contain other lists as elements, enabling multidimensional structures.</li>
        <li><strong>Iterable:</strong> You can traverse through the elements using standard for loops or list comprehensions.</li>
        <li><strong>Slicable:</strong> Subsections can be extracted using the standard <code>list[start:stop:step]</code> colon syntax.</li>
      </ul>

      <h3>Example Demonstrating List Properties</h3>
      <div class="code-example"><pre><code># Creating a list showing various properties
my_list = [10, "Python", 3.14, True, 10, [1, 2, 3]]

# Ordered - elements maintain insertion order
print(my_list)  # [10, 'Python', 3.14, True, 10, [1, 2, 3]]

# Mutable - can change elements
my_list[1] = "Java"
print(my_list)  # [10, 'Java', 3.14, True, 10, [1, 2, 3]]

# Heterogeneous - different data types
print(type(my_list[0]))  # int
print(type(my_list[1]))  # str
print(type(my_list[2]))  # float

# Indexed - access by position
print(my_list[0])   # 10 (first element)
print(my_list[-1])  # [1, 2, 3] (last element)

# Allows duplicates
print(my_list.count(10))  # 2 (10 appears twice)

# Dynamic size - can grow or shrink
my_list.append("New Item")
print(len(my_list))  # 7 (original size was 6)

# Nestable - list containing another list
print(my_list[5][1])  # 2 (access nested list element)

# Slicable
print(my_list[1:4])  # ['Java', 3.14, True]</code></pre></div>
    `
  },

  'creating-list': {
    title: 'Creating List',
    html: `
      <h2>Creating Lists in Python</h2>
      <p>In Python, the list data type can be created in several distinct ways depending on your specific programming needs. The most common and direct method is using square brackets <code>[]</code>.</p>

      <h3>1. Using Square Brackets (List Literals)</h3>
      <p>This is the standard and fastest way to define a list. You place items separated by commas inside square brackets.</p>
      <div class="code-example"><pre><code># Empty List
empty_list = []

# Populated List
numbers = [1, 2, 3, 4, 5]

# Mixed Data Types
mixed = [1, "Hello", 3.14, True]

# Nested List (List inside List)
nested = [[1, 2], [3, 4], [5, 6]]

print("Empty List:", empty_list)
print("Numbers:", numbers)
print("Mixed:", mixed)
print("Nested:", nested)</code></pre></div>

      <h3>2. Using the list() Constructor</h3>
      <p>The <code>list()</code> function initializes an empty list or converts an existing iterable object (like strings, tuples, or sets) into a list data type.</p>
      <div class="code-example"><pre><code># From a String (splits into individual characters)
chars = list("abc")
print(chars)  # ['a', 'b', 'c']

# From a Tuple
nums = list((1, 2, 3))
print(nums)   # [1, 2, 3]

# From a Range
range_list = list(range(5))
print(range_list)  # [0, 1, 2, 3, 4]

# From a Set
set_to_list = list({10, 20, 30})
print(set_to_list)  # [10, 20, 30] (order may vary)

# Empty Constructor
empty_list = list()
print(empty_list)  # []</code></pre></div>

      <h3>3. Using List Comprehensions</h3>
      <p>This is a highly optimized, single-line technique used to generate or filter data dynamically.</p>
      <div class="code-example"><pre><code># Basic Generation - squares of numbers 0 to 4
squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# With Condition - even numbers only
evens = [x for x in range(10) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]</code></pre></div>

      <h3>4. Using the Multiplication Operator (*)</h3>
      <p>If you need to initialize a fixed-size list with identical or placeholder elements, you can repeat a single-item list.</p>
      <div class="code-example"><pre><code># Zeros List
zeros = [0] * 5
print(zeros)  # [0, 0, 0, 0, 0]

# Repeating a pattern
pattern = [1, 2] * 3
print(pattern)  # [1, 2, 1, 2, 1, 2]</code></pre></div>
    `
  },

  'accessing-list-items': {
    title: 'Accessing List Items',
    html: `
      <h2>Accessing List Items</h2>
      <p>Accessing means retrieving one or more specific data values stored inside a list container using its position or structure. There are various methods to access list elements.</p>

      <h3>1. Indexing (Positive & Negative)</h3>
      <p>Retrieves a single item based on its exact, unique position number.</p>
      <ul>
        <li><strong>Positive Indexing:</strong> Counts from left to right, starting at 0.</li>
        <li><strong>Negative Indexing:</strong> Counts from right to left, starting at -1.</li>
      </ul>
      <div class="code-example"><pre><code># Setup
colors = ["red", "green", "blue"]

# Positive Indexing
print(colors[0])   # Output: "red"   (First item)
print(colors[2])   # Output: "blue"  (Third item)

# Negative Indexing
print(colors[-1])  # Output: "blue"  (Last item)
print(colors[-2])  # Output: "green" (Second-to-last item)

# IndexError Example (trying to access out of range)
# print(colors[3])  # IndexError: list index out of range</code></pre></div>

      <h3>2. Slicing</h3>
      <p>Extracts a sublist (subset of elements) using a specific range.</p>
      <p><strong>Syntax:</strong> <code>list[start:stop:step]</code></p>
      <ul>
        <li><strong>start:</strong> Initial index (included). Defaults to 0.</li>
        <li><strong>stop:</strong> Upper boundary index (excluded). Defaults to end of list.</li>
        <li><strong>step:</strong> Number of increments to skip forward or backward. Defaults to 1.</li>
      </ul>
      <div class="code-example"><pre><code>nums = [10, 20, 30, 40, 50]

# Basic Slice
print(nums[1:4])   # Output: [20, 30, 40] (Indices 1, 2, 3)

# Omitted Boundaries
print(nums[:3])    # Output: [10, 20, 30] (Start to index 2)
print(nums[3:])    # Output: [40, 50]     (Index 3 to end)
print(nums[:])     # Output: [10, 20, 30, 40, 50] (Full copy)

# Step Slicing
print(nums[::2])   # Output: [10, 30, 50] (Every second item)
print(nums[::3])   # Output: [10, 40]     (Every third item)
print(nums[::-1])  # Output: [50, 40, 30, 20, 10] (Reverses list)

# Slicing with negative indices
print(nums[-4:-1]) # Output: [20, 30, 40] (Indices -4, -3, -2)</code></pre></div>

      <h3>3. Iteration</h3>
      <p>Traverses and processes every element sequentially using loops.</p>
      <ul>
        <li><strong>Direct loop:</strong> Safest for reading values only.</li>
        <li><strong>enumerate() loop:</strong> Tracks both the index number and the item simultaneously.</li>
      </ul>
      <div class="code-example"><pre><code>animals = ["cat", "dog", "bird", "fish"]

# Direct iteration
print("Direct iteration:")
for pet in animals:
    print(pet)
Output:
  cat
  dog
  bird
  fish

# Enumerate iteration
print("\\nEnumerate iteration:")
for index, pet in enumerate(animals):
    print(f"{index}: {pet}")
Output:
0: cat
1: dog
2: bird
3: fish

# Iteration with index using range
print("\\nUsing range:")
for i in range(len(animals)):
    print(f"{i}: {animals[i]}")</code></pre></div>

      <h3>4. Unpacking</h3>
      <p>Unpacks elements directly into distinct variables in a single operation. Use <code>*</code> to capture leftover items into a dynamic sublist.</p>
      <div class="code-example"><pre><code>skills = ["Python", "SQL", "Git", "Docker"]

# Exact unpacking (must match number of elements)
a, b, c, d = skills
print(a)  # "Python"
print(b)  # "SQL"
print(c)  # "Git"
print(d)  # "Docker"

# Extended unpacking using *
leader, *tools = skills
print(leader)  # Output: "Python"
print(tools)   # Output: ["SQL", "Git", "Docker"]</code></pre></div>

      <h3>5. Chained Indexing (Multi-Dimensional Data)</h3>
      <p>Accesses items within nested structures (lists inside lists, or matrices). Each additional set of square brackets <code>[]</code> moves one layer deeper into the data structure.</p>
      <p><strong>Syntax:</strong> <code>matrix[row_index][column_index]</code></p>
      <div class="code-example"><pre><code># 2D Grid Matrix (Rows and Columns)
matrix = [
    [1, 2, 3],  # Row 0
    [4, 5, 6],  # Row 1
    [7, 8, 9]   # Row 2
]

# Access entire row
print(matrix[1])       # Output: [4, 5, 6]

# Chained indexing for a specific element
print(matrix[0][2])    # Output: 3 (Row 0, Column 2)
print(matrix[2][1])    # Output: 8 (Row 2, Column 1)

# 3D List Example
three_d = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
]
print(three_d[1][0][1])  # Output: 6

# Modifying nested elements
matrix[1][1] = 99
print(matrix)  # [[1, 2, 3], [4, 99, 6], [7, 8, 9]]</code></pre></div>
    `
  },

  'builtin-methods-functions': {
    title: 'Built-in Methods vs Built-in Functions',
    html: `
      <h2>Built-in Methods vs Built-in Functions</h2>
      <p>The primary difference lies in how they are called and what they belong to. <strong>Functions</strong> are standalone blocks of code, while <strong>methods</strong> are functions that belong specifically to an object (like a list).</p>

      <h3>Key Differences</h3>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Built-in Functions</th>
            <th>Built-in Methods</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Definition</strong></td>
            <td>Standalone global functions available anywhere.</td>
            <td>Functions defined inside a specific class (like list).</td>
          </tr>
          <tr>
            <td><strong>Syntax</strong></td>
            <td><code>function_name(object)</code></td>
            <td><code>object.method_name()</code></td>
          </tr>
          <tr>
            <td><strong>Ownership</strong></td>
            <td>Independent.</td>
            <td>Bound to a specific data type object.</td>
          </tr>
          <tr>
            <td><strong>Modification</strong></td>
            <td>Often returns a new object, leaves original intact.</td>
            <td>Often modifies the original object in-place.</td>
          </tr>
        </tbody>
      </table>

      <h3>When to Use Which?</h3>
      <ul>
        <li><strong>Use functions</strong> (like <code>sorted()</code>) when you want to protect your original data and get a new copy back.</li>
        <li><strong>Use methods</strong> (like <code>.sort()</code>) when you want to change your data directly to save memory.</li>
      </ul>
    `
  },

  'builtin-methods-list': {
    title: 'Built-in Methods of List',
    html: `
      <h2>Built-in Methods of List</h2>
      <p>Built-in methods are pre-programmed functions attached to list objects that allow you to modify data, search items, or reorder elements.</p>

      <h3>1. Adding Elements</h3>
      <p>Methods used to insert new items into a list.</p>
      <ul>
        <li><strong>append(x):</strong> Adds item x to the very end of the list.</li>
        <li><strong>extend(iterable):</strong> Appends all items from an iterable (like another list or tuple) to the end.</li>
        <li><strong>insert(index, x):</strong> Inserts item x at a specific position index, shifting remaining items to the right.</li>
      </ul>
      <div class="code-example"><pre><code># Setup
nums = [1, 2]

# Append - adds to the end
nums.append(4)
print(nums)  # [1, 2, 4]

# Insert - adds at specific position
nums.insert(2, 3)  # Insert 3 at index 2
print(nums)        # [1, 2, 3, 4]

# Extend - adds multiple items from another list
nums.extend([5, 6])
print(nums)  # [1, 2, 3, 4, 5, 6]

# Extend with string (adds each character)
nums.extend("7")
print(nums)  # [1, 2, 3, 4, 5, 6, '7']

# Extend with tuple
nums.extend((8, 9))
print(nums)  # [1, 2, 3, 4, 5, 6, '7', 8, 9]</code></pre></div>

      <h3>2. Removing Elements</h3>
      <p>Methods used to delete items from a list.</p>
      <ul>
        <li><strong>pop([index]):</strong> Removes and returns the item at the given index. If no index is specified, it removes and returns the last item.</li>
        <li><strong>remove(x):</strong> Searches for and removes the first occurrence of value x. Raises a ValueError if the item is not found.</li>
        <li><strong>clear():</strong> Deletes every single item from the list, leaving it completely empty.</li>
      </ul>
      <div class="code-example"><pre><code>fruits = ["apple", "banana", "cherry", "banana", "date"]

# Pop by index - removes and returns item
popped_item = fruits.pop(1)  # Removes "banana" at index 1
print(popped_item)           # "banana"
print(fruits)                # ['apple', 'cherry', 'banana', 'date']

# Pop without index - removes last item
last_item = fruits.pop()
print(last_item)             # "date"
print(fruits)                # ['apple', 'cherry', 'banana']

# Remove by value - removes first occurrence
fruits.remove("banana")
print(fruits)                # ['apple', 'cherry']

# Remove non-existent value (raises ValueError)
# fruits.remove("mango")     # ValueError: list.remove(x): x not in list

# Clear - removes all items
fruits.clear()
print(fruits)                # []</code></pre></div>

      <h3>3. Utility & Searching</h3>
      <p>Methods used to locate elements or gather details about list values without modifying them.</p>
      <ul>
        <li><strong>index(x):</strong> Returns the position index of the first occurrence of value x. Raises a ValueError if missing.</li>
        <li><strong>count(x):</strong> Returns the total number of times value x appears in the list.</li>
      </ul>
      <div class="code-example"><pre><code>letters = ["a", "b", "c", "b", "a", "d"]

# Index search - finds first occurrence
print(letters.index("c"))    # 2
print(letters.index("b"))    # 1 (first occurrence)

# Index with start and end parameters
print(letters.index("b", 2)) # 3 (search starting from index 2)
print(letters.index("a", 1, 5)) # 4 (search between indices 1 and 5)

# Count occurrences
print(letters.count("b"))    # 2
print(letters.count("z"))    # 0
print(letters.count("a"))    # 2

# Non-existent value (raises ValueError)
# print(letters.index("z"))  # ValueError: 'z' is not in list</code></pre></div>

      <h3>4. Ordering & Copying</h3>
      <p>Methods used to rearrange the sequence of elements or duplicate the list container.</p>
      <ul>
        <li><strong>sort(key=None, reverse=False):</strong> Rearranges the list items in-place (ascending order by default). Modifies the original list directly.</li>
        <li><strong>reverse():</strong> Flips the order of elements in-place from back to front.</li>
        <li><strong>copy():</strong> Generates a shallow duplicate copy of the list.</li>
      </ul>
      <div class="code-example"><pre><code>data = [10, 30, 20, 40, 15]

# Sort - ascending (default)
data.sort()
print(data)  # [10, 15, 20, 30, 40]

# Sort - descending
data.sort(reverse=True)
print(data)  # [40, 30, 20, 15, 10]

# Sort with key parameter
words = ["banana", "apple", "cherry", "date"]
words.sort(key=len)  # Sort by length
print(words)  # ['date', 'apple', 'banana', 'cherry']

words.sort(key=lambda x: x[-1])  # Sort by last letter
print(words)  # ['banana', 'apple', 'cherry', 'date']

# Reverse - flips order
items = ["first", "second", "third"]
items.reverse()
print(items)  # ['third', 'second', 'first']

# Copy - creates a shallow copy
original = [1, 2, [3, 4]]
backup = original.copy()
backup[0] = 99
backup[2][0] = 99
print(original)  # [1, 2, [99, 4]] - nested list still shared
print(backup)    # [99, 2, [99, 4]]

# Alternative copy methods
copy1 = original[:]        # Slicing
copy2 = list(original)     # list() constructor</code></pre></div>

      <h3>Summary Table of List Methods</h3>
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
            <td><code>append(x)</code></td>
            <td>Adds x to the end</td>
            <td><code>list.append(5)</code></td>
          </tr>
          <tr>
            <td><code>extend(iterable)</code></td>
            <td>Adds all items from iterable</td>
            <td><code>list.extend([1,2])</code></td>
          </tr>
          <tr>
            <td><code>insert(i, x)</code></td>
            <td>Inserts x at index i</td>
            <td><code>list.insert(0, x)</code></td>
          </tr>
          <tr>
            <td><code>remove(x)</code></td>
            <td>Removes first occurrence of x</td>
            <td><code>list.remove(5)</code></td>
          </tr>
          <tr>
            <td><code>pop([i])</code></td>
            <td>Removes and returns item at i</td>
            <td><code>list.pop()</code></td>
          </tr>
          <tr>
            <td><code>clear()</code></td>
            <td>Removes all items</td>
            <td><code>list.clear()</code></td>
          </tr>
          <tr>
            <td><code>index(x)</code></td>
            <td>Returns index of first occurrence</td>
            <td><code>list.index(5)</code></td>
          </tr>
          <tr>
            <td><code>count(x)</code></td>
            <td>Counts occurrences of x</td>
            <td><code>list.count(5)</code></td>
          </tr>
          <tr>
            <td><code>sort([reverse])</code></td>
            <td>Sorts in-place</td>
            <td><code>list.sort()</code></td>
          </tr>
          <tr>
            <td><code>reverse()</code></td>
            <td>Reverses in-place</td>
            <td><code>list.reverse()</code></td>
          </tr>
          <tr>
            <td><code>copy()</code></td>
            <td>Returns a shallow copy</td>
            <td><code>list.copy()</code></td>
          </tr>
        </tbody>
      </table>
    `
  },

  'builtin-functions-list': {
    title: 'Built-in Functions of List',
    html: `
      <h2>Built-in Functions Used with Lists</h2>
      <p>Unlike list methods, built-in functions are standalone utilities. They accept the list as an argument inside parentheses—<code>function(list)</code>—and typically return a new value or object without changing the original list.</p>

      <h3>1. Information & Aggregation</h3>
      <ul>
        <li><strong>len(list):</strong> Returns the total number of elements.</li>
        <li><strong>sum(list, start=0):</strong> Adds all numerical elements together.</li>
        <li><strong>min(list):</strong> Extracts the smallest item in the list.</li>
        <li><strong>max(list):</strong> Extracts the largest item in the list.</li>
      </ul>
      <div class="code-example"><pre><code>nums = [10, 20, 30, 40, 50]

# len() - length of list
print(len(nums))  # 5

# sum() - sum of all elements
print(sum(nums))  # 150

# sum() with start value
print(sum(nums, 10))  # 160

# min() - smallest element
print(min(nums))  # 10

# max() - largest element
print(max(nums))  # 50

# With mixed data types (must be comparable)
mixed = [10, 20, 30]
print(min(mixed))  # 10
print(max(mixed))  # 30

# For strings (alphabetical comparison)
words = ["apple", "banana", "cherry"]
print(min(words))  # "apple"
print(max(words))  # "cherry"</code></pre></div>

      <h3>2. Ordering & Transformations</h3>
      <ul>
        <li><strong>sorted(iterable, reverse=False):</strong> Generates a brand new sorted list leaving the original completely unaltered.</li>
        <li><strong>reversed(list):</strong> Returns a memory-efficient iterator that reads items backward. Wrap it in <code>list()</code> to print it.</li>
      </ul>
      <div class="code-example"><pre><code>letters = ["c", "a", "b", "e", "d"]

# sorted() - returns new sorted list
sorted_letters = sorted(letters)
print(sorted_letters)  # ['a', 'b', 'c', 'd', 'e']
print(letters)         # ['c', 'a', 'b', 'e', 'd'] (Untouched!)

# sorted() with reverse parameter
sorted_desc = sorted(letters, reverse=True)
print(sorted_desc)     # ['e', 'd', 'c', 'b', 'a']

# sorted() with key parameter
words = ["banana", "apple", "cherry", "date"]
sorted_by_len = sorted(words, key=len)
print(sorted_by_len)   # ['date', 'apple', 'banana', 'cherry']

# reversed() - returns an iterator
data = [1, 2, 3, 4, 5]
rev_iter = reversed(data)
print(list(rev_iter))  # [5, 4, 3, 2, 1]
print(data)            # [1, 2, 3, 4, 5] (Untouched!)

# Using reversed() in a loop
for item in reversed(data):
    print(item)        # 5, 4, 3, 2, 1</code></pre></div>

      <h3>3. Iteration & Element Validation</h3>
      <ul>
        <li><strong>any(list):</strong> Returns <code>True</code> if at least one item in the list evaluates to <code>True</code> (non-zero, non-empty, or <code>True</code>).</li>
        <li><strong>all(list):</strong> Returns <code>True</code> only if every single item in the list evaluates to <code>True</code>.</li>
        <li><strong>enumerate(list):</strong> Couples each item with its sequential index number, yielding an iterable of index-value pairs.</li>
      </ul>
      <div class="code-example"><pre><code># any() - checks if any element is truthy
flags = [0, False, "hello", ""]
print(any(flags))  # True (because of "hello")

flags2 = [0, False, "", None]
print(any(flags2))  # False (all are falsy)

# all() - checks if all elements are truthy
checks = [True, 1, "yes"]
print(all(checks))  # True

checks2 = [True, 1, 0]
print(all(checks2))  # False (0 is falsy)

# enumerate() - pairs index with value
tasks = ["code", "test", "deploy"]
for index, task in enumerate(tasks):
    print(f"{index}: {task}")
# Output:
# 0: code
# 1: test
# 2: deploy

# enumerate() with start parameter
for index, task in enumerate(tasks, start=1):
    print(f"{index}: {task}")
# Output:
# 1: code
# 2: test
# 3: deploy

# list of enumerate pairs
print(list(enumerate(tasks)))  # [(0, 'code'), (1, 'test'), (2, 'deploy')]</code></pre></div>

      <h3>4. Data Type Conversion</h3>
      <ul>
        <li><strong>list(iterable):</strong> Converts other data types (like strings, tuples, or sets) into a standard Python list.</li>
        <li><strong>zip(*iterables):</strong> Takes multiple lists (or other iterables) and aggregates their corresponding elements into tuples. Stops at the length of the shortest list.</li>
      </ul>
      <div class="code-example"><pre><code># list() conversion
word = "AI"
print(list(word))  # ['A', 'I']

tuple_data = (1, 2, 3)
print(list(tuple_data))  # [1, 2, 3]

range_data = range(5)
print(list(range_data))  # [0, 1, 2, 3, 4]

# zip() - combines multiple lists element-wise
names = ["Alice", "Bob", "Charlie"]
scores = [85, 92, 78]
grades = ["A", "B", "C"]

# Combine lists
zipped_data = zip(names, scores, grades)
print(list(zipped_data))
# Output: [('Alice', 85, 'A'), ('Bob', 92, 'B'), ('Charlie', 78, 'C')]

# zip() with uneven lengths (stops at shortest)
names2 = ["Alice", "Bob", "Charlie", "David"]
scores2 = [85, 92]
zipped2 = zip(names2, scores2)
print(list(zipped2))  # [('Alice', 85), ('Bob', 92)]

# Unzipping with zip(*)
pairs = [('Alice', 85), ('Bob', 92), ('Charlie', 78)]
names_unzipped, scores_unzipped = zip(*pairs)
print(names_unzipped)   # ('Alice', 'Bob', 'Charlie')
print(scores_unzipped)  # (85, 92, 78)</code></pre></div>

      <h3>Summary Table of Built-in Functions for Lists</h3>
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
            <td><code>len(list)</code></td>
            <td>Returns number of elements</td>
            <td><code>len([1,2,3]) → 3</code></td>
          </tr>
          <tr>
            <td><code>sum(list)</code></td>
            <td>Sums numerical elements</td>
            <td><code>sum([1,2,3]) → 6</code></td>
          </tr>
          <tr>
            <td><code>min(list)</code></td>
            <td>Returns smallest element</td>
            <td><code>min([3,1,2]) → 1</code></td>
          </tr>
          <tr>
            <td><code>max(list)</code></td>
            <td>Returns largest element</td>
            <td><code>max([3,1,2]) → 3</code></td>
          </tr>
          <tr>
            <td><code>sorted(list)</code></td>
            <td>Returns new sorted list</td>
            <td><code>sorted([3,1,2]) → [1,2,3]</code></td>
          </tr>
          <tr>
            <td><code>reversed(list)</code></td>
            <td>Returns reverse iterator</td>
            <td><code>list(reversed([1,2,3])) → [3,2,1]</code></td>
          </tr>
          <tr>
            <td><code>any(list)</code></td>
            <td>True if any element is truthy</td>
            <td><code>any([0,1]) → True</code></td>
          </tr>
          <tr>
            <td><code>all(list)</code></td>
            <td>True if all elements are truthy</td>
            <td><code>all([1,2]) → True</code></td>
          </tr>
          <tr>
            <td><code>enumerate(list)</code></td>
            <td>Returns index-value pairs</td>
            <td><code>list(enumerate(['a','b'])) → [(0,'a'),(1,'b')]</code></td>
          </tr>
          <tr>
            <td><code>list(iterable)</code></td>
            <td>Converts to list</td>
            <td><code>list('abc') → ['a','b','c']</code></td>
          </tr>
          <tr>
            <td><code>zip(*iterables)</code></td>
            <td>Combines iterables element-wise</td>
            <td><code>zip([1,2],['a','b']) → [(1,'a'),(2,'b')]</code></td>
          </tr>
        </tbody>
      </table>
    `
  },

  'tuples-intro': {
    title: 'Tuple and its Properties',
    html: `
      <h2>What is a Tuple?</h2>
      <p>A <strong>tuple</strong> is a built-in data structure used to store an ordered collection of items. Tuples are <strong>immutable</strong>, meaning once created, they cannot be modified (no addition, removal, or replacement of elements).</p>

      <h2>Core Properties of Python Tuples</h2>
      <ul>
        <li><strong>Ordered:</strong> Items maintain their exact insertion sequence.</li>
        <li><strong>Immutable:</strong> Elements cannot be added, updated, or removed after creation.</li>
        <li><strong>Heterogeneous:</strong> A single tuple can store different data types.</li>
        <li><strong>Indexed:</strong> Elements are zero-indexed, starting at position 0.</li>
        <li><strong>Allows Duplicates:</strong> The same value can appear multiple times.</li>
        <li><strong>Fixed Size:</strong> The tuple size is fixed at creation and cannot change.</li>
        <li><strong>Nestable:</strong> Tuples can contain other tuples or lists.</li>
        <li><strong>Iterable:</strong> Can be traversed using loops.</li>
        <li><strong>Slicable:</strong> Subsections can be extracted using colon syntax.</li>
        <li><strong>Hashable:</strong> Tuples can be used as dictionary keys (if all elements are hashable).</li>
      </ul>

      <h3>Example Demonstrating Tuple Properties</h3>
      <div class="code-example"><pre><code># Creating a tuple
my_tuple = (10, "Python", 3.14, True, 10, (1, 2, 3))

# Ordered - maintains insertion order
print(my_tuple)  # (10, 'Python', 3.14, True, 10, (1, 2, 3))

# Immutable - cannot change elements
# my_tuple[1] = "Java"  # TypeError: 'tuple' object does not support item assignment

# Heterogeneous - different data types
print(type(my_tuple[0]))  # int
print(type(my_tuple[1]))  # str
print(type(my_tuple[2]))  # float

# Indexed - access by position
print(my_tuple[0])   # 10 (first element)
print(my_tuple[-1])  # (1, 2, 3) (last element)

# Allows duplicates
print(my_tuple.count(10))  # 2 (10 appears twice)

# Fixed size - cannot grow or shrink
print(len(my_tuple))  # 6

# Nestable - tuple containing another tuple
print(my_tuple[5][1])  # 2

# Slicable
print(my_tuple[1:4])  # ('Python', 3.14, True)

# Hashable - can be used as dictionary key
my_dict = {(1, 2): "coordinates"}
print(my_dict)  # {(1, 2): 'coordinates'}</code></pre></div>

      <h3>When to Use Tuples vs Lists?</h3>
      <ul>
        <li><strong>Use tuples when:</strong> Data should not change (e.g., coordinates, configuration values, days of the week).</li>
        <li><strong>Use lists when:</strong> Data needs to be modified (e.g., user input, dynamic collections).</li>
        <li>Tuples are faster and use less memory than lists.</li>
        <li>Tuples can be used as dictionary keys (lists cannot).</li>
      </ul>
    `
  },

  'creating-tuple': {
    title: 'Creating Tuple',
    html: `
      <h2>Creating Tuples in Python</h2>
      <p>Tuples can be created using parentheses <code>()</code> or the <code>tuple()</code> constructor. Here are various ways to create tuples:</p>

      <h3>1. Using Parentheses (Tuple Literals)</h3>
      <p>This is the standard way to define a tuple. Items are placed inside parentheses separated by commas.</p>
      <div class="code-example"><pre><code># Empty Tuple
empty_tuple = ()
print(empty_tuple)  # ()

# Single Element Tuple (note the trailing comma)
single_tuple = (5,)
print(single_tuple)  # (5,)
# Without comma, it's just a number, not a tuple
not_a_tuple = (5)
print(type(not_a_tuple))  # int

# Multiple Elements
numbers = (1, 2, 3, 4, 5)
print(numbers)  # (1, 2, 3, 4, 5)

# Mixed Data Types
mixed = (1, "Hello", 3.14, True)
print(mixed)  # (1, 'Hello', 3.14, True)

# Nested Tuple
nested = ((1, 2), (3, 4), (5, 6))
print(nested)  # ((1, 2), (3, 4), (5, 6))

# Tuple without parentheses (tuple packing)
packed = 1, 2, 3
print(packed)          # (1, 2, 3)
print(type(packed))    # tuple</code></pre></div>

      <h3>2. Using the tuple() Constructor</h3>
      <p>The <code>tuple()</code> function converts other iterable objects into tuples.</p>
      <div class="code-example"><pre><code># From a String
char_tuple = tuple("abc")
print(char_tuple)  # ('a', 'b', 'c')

# From a List
list_to_tuple = tuple([1, 2, 3])
print(list_to_tuple)  # (1, 2, 3)

# From a Range
range_tuple = tuple(range(5))
print(range_tuple)  # (0, 1, 2, 3, 4)

# From a Set
set_to_tuple = tuple({10, 20, 30})
print(set_to_tuple)  # (10, 20, 30) (order may vary)

# Empty Tuple Constructor
empty_tuple = tuple()
print(empty_tuple)  # ()</code></pre></div>

      <h3>3. Tuple Packing and Unpacking</h3>
      <div class="code-example"><pre><code># Tuple Packing - creating tuple without parentheses
packed = 10, 20, 30
print(packed)  # (10, 20, 30)

# Tuple Unpacking - assigning tuple elements to variables
a, b, c = packed
print(a)  # 10
print(b)  # 20
print(c)  # 30

# Unpacking with *
first, *rest = packed
print(first)  # 10
print(rest)   # [20, 30]

# Swapping variables using tuples (Pythonic)
x = 5
y = 10
x, y = y, x
print(x, y)  # 10 5</code></pre></div>
    `
  },

  'accessing-tuple-items': {
    title: 'Accessing Tuple Items',
    html: `
      <h2>Accessing Tuple Items</h2>
      <p>Accessing tuple items is similar to lists because tuples are also sequence types. However, since tuples are immutable, you cannot modify elements after creation.</p>

      <h3>1. Indexing (Positive & Negative)</h3>
      <p>Retrieves a single item based on its exact position number.</p>
      <div class="code-example"><pre><code># Setup
colors = ("red", "green", "blue", "yellow")

# Positive Indexing
print(colors[0])   # "red"   (First item)
print(colors[2])   # "blue"  (Third item)

# Negative Indexing
print(colors[-1])  # "yellow" (Last item)
print(colors[-2])  # "blue"   (Second-to-last item)

# IndexError Example (trying to access out of range)
# print(colors[4])  # IndexError: tuple index out of range</code></pre></div>

      <h3>2. Slicing</h3>
      <p>Extracts a subtuple (subset of elements) using a specific range.</p>
      <div class="code-example"><pre><code>nums = (10, 20, 30, 40, 50)

# Basic Slice
print(nums[1:4])   # (20, 30, 40) (Indices 1, 2, 3)

# Omitted Boundaries
print(nums[:3])    # (10, 20, 30) (Start to index 2)
print(nums[3:])    # (40, 50)     (Index 3 to end)
print(nums[:])     # (10, 20, 30, 40, 50) (Full copy)

# Step Slicing
print(nums[::2])   # (10, 30, 50) (Every second item)
print(nums[::-1])  # (50, 40, 30, 20, 10) (Reverses tuple)</code></pre></div>

      <h3>3. Iteration</h3>
      <p>Traverses every element sequentially using loops.</p>
      <div class="code-example"><pre><code>animals = ("cat", "dog", "bird", "fish")

# Direct iteration
print("Direct iteration:")
for pet in animals:
    print(pet)
# Output:
# cat
# dog
# bird
# fish

# Enumerate iteration
print("\\nEnumerate iteration:")
for index, pet in enumerate(animals):
    print(f"{index}: {pet}")
# Output:
# 0: cat
# 1: dog
# 2: bird
# 3: fish</code></pre></div>

      <h3>4. Unpacking</h3>
      <p>Unpacks elements directly into distinct variables.</p>
      <div class="code-example"><pre><code>skills = ("Python", "SQL", "Git", "Docker")

# Exact unpacking
a, b, c, d = skills
print(a)  # "Python"
print(b)  # "SQL"
print(c)  # "Git"
print(d)  # "Docker"

# Extended unpacking with *
leader, *tools = skills
print(leader)  # "Python"
print(tools)   # ["SQL", "Git", "Docker"]

# Unpacking with underscore for unused values
numbers = (10, 20, 30, 40)
x, _, y, _ = numbers
print(x)  # 10
print(y)  # 30</code></pre></div>

      <h3>5. Chained Indexing (Multi-Dimensional Data)</h3>
      <p>Accesses items within nested tuple structures.</p>
      <div class="code-example"><pre><code># 2D Tuple
matrix = (
    (1, 2, 3),  # Row 0
    (4, 5, 6),  # Row 1
    (7, 8, 9)   # Row 2
)

# Access entire row
print(matrix[1])       # (4, 5, 6)

# Chained indexing for a specific element
print(matrix[0][2])    # 3 (Row 0, Column 2)
print(matrix[2][1])    # 8 (Row 2, Column 1)

# Mixed nested structures (tuple containing lists)
mixed = (1, [2, 3], (4, 5))
print(mixed[1][1])     # 3 (accessing list inside tuple)
print(mixed[2][0])     # 4 (accessing nested tuple)</code></pre></div>
    `
  },

  'builtin-methods-tuples': {
    title: 'Built-in Methods of Tuples',
    html: `
      <h2>Built-in Methods of Tuples</h2>
      <p>Tuples have only two built-in methods because they are immutable. Unlike lists, tuples do not have methods like <code>append()</code>, <code>extend()</code>, <code>insert()</code>, <code>remove()</code>, <code>pop()</code>, <code>clear()</code>, <code>sort()</code>, <code>reverse()</code>, or <code>copy()</code>.</p>

      <h3>1. count() Method</h3>
      <p>Returns the number of times a specified value appears in the tuple.</p>
      <div class="code-example"><pre><code># count() - returns number of occurrences
colors = ("red", "blue", "red", "green", "red", "yellow")

print(colors.count("red"))    # 3
print(colors.count("blue"))   # 1
print(colors.count("purple")) # 0

# With mixed data types
mixed = (1, "hello", 1, 3.14, 1, True)
print(mixed.count(1))  # 3 (counts both 1 and True)</code></pre></div>

      <h3>2. index() Method</h3>
      <p>Returns the index of the first occurrence of a specified value. Raises a ValueError if not found.</p>
      <div class="code-example"><pre><code># index() - returns first occurrence index
colors = ("red", "blue", "green", "blue", "yellow")

print(colors.index("green"))   # 2
print(colors.index("blue"))    # 1 (first occurrence)

# index() with start and end parameters
print(colors.index("blue", 2))  # 3 (search from index 2)
print(colors.index("blue", 2, 4))  # 3 (search between 2 and 4)

# Non-existent value (raises ValueError)
# print(colors.index("purple"))  # ValueError: tuple.index(x): x not in tuple</code></pre></div>

      <h3>Summary Table of Tuple Methods</h3>
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
            <td><code>count(x)</code></td>
            <td>Returns number of occurrences of x</td>
            <td><code>tuple.count(5)</code></td>
          </tr>
          <tr>
            <td><code>index(x)</code></td>
            <td>Returns index of first occurrence of x</td>
            <td><code>tuple.index(5)</code></td>
          </tr>
        </tbody>
      </table>

      <h3>Important Note</h3>
      <p>Since tuples are immutable, they do not have methods that modify the tuple. All operations that appear to modify a tuple actually create a new tuple.</p>
      <div class="code-example"><pre><code># These operations create NEW tuples, they don't modify the original
t = (1, 2, 3)

# Concatenation creates a new tuple
new_t = t + (4, 5)
print(t)      # (1, 2, 3) - original unchanged
print(new_t)  # (1, 2, 3, 4, 5)

# Repetition creates a new tuple
repeated = t * 2
print(repeated)  # (1, 2, 3, 1, 2, 3)

# Slicing creates a new tuple
sliced = t[1:3]
print(sliced)  # (2, 3)</code></pre></div>
    `
  },

  'builtin-functions-tuples': {
    title: 'Built-in Functions of Tuples',
    html: `
      <h2>Built-in Functions Used with Tuples</h2>
      <p>Similar to lists, tuples can be used with various built-in functions. Since tuples are sequence types, most functions that work with lists also work with tuples.</p>

      <h3>1. Information & Aggregation</h3>
      <ul>
        <li><strong>len(tuple):</strong> Returns the total number of elements.</li>
        <li><strong>sum(tuple, start=0):</strong> Adds all numerical elements together.</li>
        <li><strong>min(tuple):</strong> Extracts the smallest item in the tuple.</li>
        <li><strong>max(tuple):</strong> Extracts the largest item in the tuple.</li>
      </ul>
      <div class="code-example"><pre><code>nums = (10, 20, 30, 40, 50)

# len() - length of tuple
print(len(nums))  # 5

# sum() - sum of all elements
print(sum(nums))  # 150

# sum() with start value
print(sum(nums, 10))  # 160

# min() - smallest element
print(min(nums))  # 10

# max() - largest element
print(max(nums))  # 50

# With strings (alphabetical comparison)
words = ("apple", "banana", "cherry")
print(min(words))  # "apple"
print(max(words))  # "cherry"</code></pre></div>

      <h3>2. Ordering & Transformations</h3>
      <ul>
        <li><strong>sorted(iterable, reverse=False):</strong> Generates a brand new sorted list from the tuple (leaves original unchanged).</li>
        <li><strong>reversed(tuple):</strong> Returns a memory-efficient iterator that reads items backward.</li>
      </ul>
      <div class="code-example"><pre><code>letters = ("c", "a", "b", "e", "d")

# sorted() - returns new list (not tuple)
sorted_letters = sorted(letters)
print(sorted_letters)  # ['a', 'b', 'c', 'd', 'e']
print(letters)         # ('c', 'a', 'b', 'e', 'd') (Untouched!)

# Convert back to tuple
sorted_tuple = tuple(sorted(letters))
print(sorted_tuple)    # ('a', 'b', 'c', 'd', 'e')

# reversed() - returns an iterator
data = (1, 2, 3, 4, 5)
rev_iter = reversed(data)
print(tuple(rev_iter))  # (5, 4, 3, 2, 1)
print(data)             # (1, 2, 3, 4, 5) (Untouched!)</code></pre></div>

      <h3>3. Iteration & Element Validation</h3>
      <ul>
        <li><strong>any(tuple):</strong> Returns <code>True</code> if at least one item is truthy.</li>
        <li><strong>all(tuple):</strong> Returns <code>True</code> only if every single item is truthy.</li>
        <li><strong>enumerate(tuple):</strong> Couples each item with its index number.</li>
      </ul>
      <div class="code-example"><pre><code># any() - checks if any element is truthy
flags = (0, False, "hello", "")
print(any(flags))  # True (because of "hello")

# all() - checks if all elements are truthy
checks = (True, 1, "yes")
print(all(checks))  # True

checks2 = (True, 1, 0)
print(all(checks2))  # False (0 is falsy)

# enumerate() - pairs index with value
tasks = ("code", "test", "deploy")
for index, task in enumerate(tasks):
    print(f"{index}: {task}")
# Output:
# 0: code
# 1: test
# 2: deploy

# enumerate() with start parameter
for index, task in enumerate(tasks, start=1):
    print(f"{index}: {task}")
# Output:
# 1: code
# 2: test
# 3: deploy</code></pre></div>

      <h3>4. Data Type Conversion</h3>
      <ul>
        <li><strong>tuple(iterable):</strong> Converts other data types into a standard Python tuple.</li>
        <li><strong>zip(*iterables):</strong> Aggregates corresponding elements from multiple iterables into tuples.</li>
      </ul>
      <div class="code-example"><pre><code># tuple() conversion
word = "AI"
print(tuple(word))  # ('A', 'I')

list_data = [1, 2, 3]
print(tuple(list_data))  # (1, 2, 3)

range_data = range(5)
print(tuple(range_data))  # (0, 1, 2, 3, 4)

# zip() - combines multiple iterables
names = ("Alice", "Bob", "Charlie")
scores = (85, 92, 78)

zipped_data = zip(names, scores)
print(tuple(zipped_data))
# Output: (('Alice', 85), ('Bob', 92), ('Charlie', 78))

# zip() with uneven lengths (stops at shortest)
names2 = ("Alice", "Bob", "Charlie", "David")
scores2 = (85, 92)
zipped2 = zip(names2, scores2)
print(tuple(zipped2))  # (('Alice', 85), ('Bob', 92))</code></pre></div>

      <h3>Summary Table of Built-in Functions for Tuples</h3>
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
            <td><code>len(tuple)</code></td>
            <td>Returns number of elements</td>
            <td><code>len((1,2,3)) → 3</code></td>
          </tr>
          <tr>
            <td><code>sum(tuple)</code></td>
            <td>Sums numerical elements</td>
            <td><code>sum((1,2,3)) → 6</code></td>
          </tr>
          <tr>
            <td><code>min(tuple)</code></td>
            <td>Returns smallest element</td>
            <td><code>min((3,1,2)) → 1</code></td>
          </tr>
          <tr>
            <td><code>max(tuple)</code></td>
            <td>Returns largest element</td>
            <td><code>max((3,1,2)) → 3</code></td>
          </tr>
          <tr>
            <td><code>sorted(tuple)</code></td>
            <td>Returns new sorted list</td>
            <td><code>sorted((3,1,2)) → [1,2,3]</code></td>
          </tr>
          <tr>
            <td><code>reversed(tuple)</code></td>
            <td>Returns reverse iterator</td>
            <td><code>tuple(reversed((1,2,3))) → (3,2,1)</code></td>
          </tr>
          <tr>
            <td><code>any(tuple)</code></td>
            <td>True if any element is truthy</td>
            <td><code>any((0,1)) → True</code></td>
          </tr>
          <tr>
            <td><code>all(tuple)</code></td>
            <td>True if all elements are truthy</td>
            <td><code>all((1,2)) → True</code></td>
          </tr>
          <tr>
            <td><code>enumerate(tuple)</code></td>
            <td>Returns index-value pairs</td>
            <td><code>list(enumerate(('a','b'))) → [(0,'a'),(1,'b')]</code></td>
          </tr>
          <tr>
            <td><code>tuple(iterable)</code></td>
            <td>Converts to tuple</td>
            <td><code>tuple('abc') → ('a','b','c')</code></td>
          </tr>
          <tr>
            <td><code>zip(*iterables)</code></td>
            <td>Combines iterables element-wise</td>
            <td><code>zip((1,2),('a','b')) → ((1,'a'),(2,'b'))</code></td>
          </tr>
        </tbody>
      </table>
    `
  },

  'list-vs-tuple': {
    title: 'List vs Tuple',
    html: `
      <h2>List vs Tuple: A Detailed Comparison</h2>
      <p>Understanding the differences between lists and tuples is crucial for writing efficient and appropriate Python code.</p>

      <h3>Key Differences</h3>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>List</th>
            <th>Tuple</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Mutability</strong></td>
            <td>Mutable (can be modified)</td>
            <td>Immutable (cannot be modified)</td>
          </tr>
          <tr>
            <td><strong>Syntax</strong></td>
            <td><code>[ ]</code> square brackets</td>
            <td><code>( )</code> parentheses</td>
          </tr>
          <tr>
            <td><strong>Memory Usage</strong></td>
            <td>More memory (larger)</td>
            <td>Less memory (smaller)</td>
          </tr>
          <tr>
            <td><strong>Speed</strong></td>
            <td>Slower (due to mutability overhead)</td>
            <td>Faster (optimized)</td>
          </tr>
          <tr>
            <td><strong>Methods</strong></td>
            <td>Many methods (<code>append</code>, <code>pop</code>, etc.)</td>
            <td>Only <code>count</code> and <code>index</code></td>
          </tr>
          <tr>
            <td><strong>Use as Dictionary Key</strong></td>
            <td>No (unhashable)</td>
            <td>Yes (hashable)</td>
          </tr>
          <tr>
            <td><strong>Size</strong></td>
            <td>Dynamic (can grow/shrink)</td>
            <td>Fixed (cannot resize)</td>
          </tr>
          <tr>
            <td><strong>Representation</strong></td>
            <td>Best for dynamic data</td>
            <td>Best for fixed data</td>
          </tr>
        </tbody>
      </table>

      <h3>Examples Showing Differences</h3>
      <div class="code-example"><pre><code># Mutability Comparison
my_list = [1, 2, 3]
my_tuple = (1, 2, 3)

# List - can be modified
my_list[0] = 99
my_list.append(4)
print(my_list)  # [99, 2, 3, 4]

# Tuple - cannot be modified
# my_tuple[0] = 99  # TypeError
# Cannot append, pop, insert, etc.

# Memory Usage (approximate)
import sys
list_data = [1, 2, 3, 4, 5]
tuple_data = (1, 2, 3, 4, 5)
print(sys.getsizeof(list_data))   # Larger
print(sys.getsizeof(tuple_data))  # Smaller

# Speed (tuples are faster)
import timeit
list_time = timeit.timeit('x = [1,2,3,4,5]', number=1000000)
tuple_time = timeit.timeit('x = (1,2,3,4,5)', number=1000000)
print(f"List time: {list_time:.4f} sec")
print(f"Tuple time: {tuple_time:.4f} sec")

# Methods Available
print(dir(list))  # Shows all list methods
print(dir(tuple)) # Shows only count and index

# Dictionary Keys
dict_with_tuple = {(1, 2): "valid"}  # Works
# dict_with_list = {[1, 2]: "invalid"}  # TypeError</code></pre></div>

      <h3>When to Use Which?</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:12px 0;">
        <div style="background:var(--bg-secondary);padding:16px;border-radius:8px;border-left:4px solid #28a745;">
          <h4 style="color:#28a745;margin-top:0;">Use Lists When:</h4>
          <ul style="margin:0;padding-left:20px;">
            <li>Data needs to change (add, remove, update)</li>
            <li>Storing user input</li>
            <li>Building dynamic collections</li>
            <li>Performance is not critical</li>
            <li>Need sorting or reversing in-place</li>
          </ul>
        </div>
        <div style="background:var(--bg-secondary);padding:16px;border-radius:8px;border-left:4px solid #667eea;">
          <h4 style="color:#667eea;margin-top:0;">Use Tuples When:</h4>
          <ul style="margin:0;padding-left:20px;">
            <li>Data should never change (constants)</li>
            <li>Storing coordinates or fixed values</li>
            <li>Dictionary keys are needed</li>
            <li>Memory efficiency is important</li>
            <li>Performance is critical</li>
            <li>Data represents a record/row</li>
          </ul>
        </div>
      </div>

      <h3>Practical Examples</h3>
      <div class="code-example"><pre><code># Real-world examples

# Use tuple for fixed data
days_of_week = ("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")
rgb_colors = (255, 128, 0)  # Orange
coordinates = (40.7128, -74.0060)  # NYC coordinates

# Use list for dynamic data
shopping_cart = []  # Empty cart
shopping_cart.append("apple")
shopping_cart.append("banana")
shopping_cart.remove("apple")
# Users can add/remove items freely

# Tuple as dictionary key (list would fail)
location_data = {}
location_data[(40.7128, -74.0060)] = "New York City"
print(location_data)  # {(40.7128, -74.006): 'New York City'}</code></pre></div>

      <h3>Converting Between List and Tuple</h3>
      <div class="code-example"><pre><code># List to Tuple
my_list = [1, 2, 3, 4, 5]
my_tuple = tuple(my_list)
print(my_tuple)  # (1, 2, 3, 4, 5)

# Tuple to List
my_tuple = (1, 2, 3, 4, 5)
my_list = list(my_tuple)
print(my_list)  # [1, 2, 3, 4, 5]

# Use this when you need to modify a tuple temporarily
data_tuple = (1, 2, 3)
data_list = list(data_tuple)
data_list.append(4)
data_list[0] = 99
data_tuple = tuple(data_list)
print(data_tuple)  # (99, 2, 3, 4)</code></pre></div>

      <h3>Performance Comparison</h3>
      <p>Tuples are generally faster and more memory-efficient than lists. Here's why:</p>
      <ul>
        <li><strong>Memory:</strong> Tuples allocate exactly the memory needed; lists allocate extra space for growth.</li>
        <li><strong>Creation:</strong> Tuples are faster to create.</li>
        <li><strong>Access:</strong> Both have O(1) access time, but tuples are slightly faster.</li>
        <li><strong>Iteration:</strong> Tuples iterate faster due to smaller memory footprint.</li>
      </ul>
    `
  }
});

// ---- Navigation & availability control for this section ----
topicOrder.push(
  'lists-intro', 
  'creating-list', 
  'accessing-list-items', 
  'builtin-methods-functions',
  'builtin-methods-list', 
  'builtin-functions-list',
  'tuples-intro', 
  'creating-tuple', 
  'accessing-tuple-items',
  'builtin-methods-tuples',
  'builtin-functions-tuples',
  'list-vs-tuple'
);

Object.assign(unitMapping, {
  'lists-intro': 'Unit IV',
  'creating-list': 'Unit IV',
  'accessing-list-items': 'Unit IV',
  'builtin-methods-functions': 'Unit IV',
  'builtin-methods-list': 'Unit IV',
  'builtin-functions-list': 'Unit IV',
  'tuples-intro': 'Unit IV',
  'creating-tuple': 'Unit IV',
  'accessing-tuple-items': 'Unit IV',
  'builtin-methods-tuples': 'Unit IV',
  'builtin-functions-tuples': 'Unit IV',
  'list-vs-tuple': 'Unit IV'
});

Object.assign(topicAvailability, {
  'lists-intro': true,
  'creating-list': true,
  'accessing-list-items': true,
  'builtin-methods-functions': true,
  'builtin-methods-list': true,
  'builtin-functions-list': true,
  'tuples-intro': true,
  'creating-tuple': true,
  'accessing-tuple-items': true,
  'builtin-methods-tuples': true,
  'builtin-functions-tuples': true,
  'list-vs-tuple': true
});

Object.assign(unitTopicsByName, {
  'Unit IV': [
    'lists-intro', 
    'creating-list', 
    'accessing-list-items', 
    'builtin-methods-functions',
    'builtin-methods-list', 
    'builtin-functions-list',
    'tuples-intro', 
    'creating-tuple', 
    'accessing-tuple-items',
    'builtin-methods-tuples',
    'builtin-functions-tuples',
    'list-vs-tuple'
  ]
});

// Enable/disable this entire unit (Unit 4)
function enableUnit4() {
  [
    'lists-intro', 
    'creating-list', 
    'accessing-list-items', 
    'builtin-methods-functions',
    'builtin-methods-list', 
    'builtin-functions-list',
    'tuples-intro', 
    'creating-tuple', 
    'accessing-tuple-items',
    'builtin-methods-tuples',
    'builtin-functions-tuples',
    'list-vs-tuple'
  ].forEach(id => { topicAvailability[id] = true; });
  console.log('Enabled entire Unit 4');
}
function disableUnit4() {
  [
    'lists-intro', 
    'creating-list', 
    'accessing-list-items', 
    'builtin-methods-functions',
    'builtin-methods-list', 
    'builtin-functions-list',
    'tuples-intro', 
    'creating-tuple', 
    'accessing-tuple-items',
    'builtin-methods-tuples',
    'builtin-functions-tuples',
    'list-vs-tuple'
  ].forEach(id => { topicAvailability[id] = false; });
  console.log('Disabled entire Unit 4');
}