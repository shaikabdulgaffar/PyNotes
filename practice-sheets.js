// Practice Sheets
// This file defines the topic content for this section only.
// It merges into the global 'topics' object used by topic.html (topic-core.js).

Object.assign(topics, {
  'practice-1': {
    title: 'Practice 1: Basics',
    html: `
      <h2>Practice 1: Basics</h2>
      <p>Practice questions on printing, comments, indentation, variables, data types, and basic collections. Each question includes sample code and expected output.</p>

      
      <h3>1. Write a program to print: <code>Hello, Python</code></h3>
      <div class="code-example"><pre><code>print("Hello, Python")</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>Hello, Python</code></pre></div>

      <h3>2. Write a program to print your name.</h3>
      <div class="code-example"><pre><code>print("Rahul")  # Replace with your name</code></pre></div>
      <p><strong>Output (example):</strong></p>
      <div class="code-example"><pre><code>Rahul</code></pre></div>

      <h3>3. Write a program to print your college name on a new line.</h3>
      <div class="code-example"><pre><code>print("ABC College")  # Replace with your college name</code></pre></div>
      <p><strong>Output (example):</strong></p>
      <div class="code-example"><pre><code>ABC College</code></pre></div>

      <h3>4. Print the following using one print statement:</h3>
      <pre><code>Name: Rahul
Course: Python</code></pre>
      <div class="code-example"><pre><code>print("Name: Rahul\\nCourse: Python")</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>Name: Rahul
Course: Python</code></pre></div>

      <h3>5. Print any three sentences, each on a new line.</h3>
      <div class="code-example"><pre><code>print("Python is powerful.")
print("Python is easy to learn.")
print("Python is popular.")</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>Python is powerful.
Python is easy to learn.
Python is popular.</code></pre></div>

      
      <h3>6. One line is a comment and one line prints a message.</h3>
      <div class="code-example"><pre><code># This line is a comment
print("This line prints a message")</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>This line prints a message</code></pre></div>

      <h3>7. Use a comment to explain what this line does: <code>print("Welcome")</code></h3>
      <div class="code-example"><pre><code># This line prints the word Welcome on the screen
print("Welcome")</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>Welcome</code></pre></div>

      <h3>8. One single-line comment, one multi-line comment, and one print statement.</h3>
      <div class="code-example"><pre><code># This is a single-line comment

"""
This is a multi-line comment.
You can write multiple lines here.
"""

print("Comments example")</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>Comments example</code></pre></div>

      
      <h3>9. Program using <code>if True:</code> and print a message inside it.</h3>
      <div class="code-example"><pre><code>if True:
    print("This will always run because the condition is True")</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>This will always run because the condition is True</code></pre></div>

      <h3>10. Remove indentation and observe the error.</h3>
      <div class="code-example"><pre><code># Correct code:
if True:
    print("Inside if block")

# If you remove the indentation before print, like this:
# if True:
# print("Inside if block")
# you will get: IndentationError: expected an indented block</code></pre></div>

      
      <h3>11. If a number is greater than 10, print "Big Number", else "Small Number".</h3>
      <div class="code-example"><pre><code>num = 12  # Try changing this value

if num &gt; 10:
    print("Big Number")
else:
    print("Small Number")</code></pre></div>
      <p><strong>Output (for 12):</strong></p>
      <div class="code-example"><pre><code>Big Number</code></pre></div>

      <h3>12. Use <code>True</code> and <code>False</code> in a program and print their values.</h3>
      <div class="code-example"><pre><code>a = True
b = False

print(a)
print(b)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>True
False</code></pre></div>

      <h3>13. Write a program using <code>if</code> and <code>else</code>.</h3>
      <div class="code-example"><pre><code>marks = 75

if marks &gt;= 50:
    print("Pass")
else:
    print("Fail")</code></pre></div>
      <p><strong>Output (for 75):</strong></p>
      <div class="code-example"><pre><code>Pass</code></pre></div>

      <h3>14. Check whether a number is positive or negative.</h3>
      <div class="code-example"><pre><code>num = -3

if num &gt;= 0:
    print("Positive")
else:
    print("Negative")</code></pre></div>
      <p><strong>Output (for -3):</strong></p>
      <div class="code-example"><pre><code>Negative</code></pre></div>

      
      <h3>15. Print your name and course on two lines using <code>\\n</code>.</h3>
      <div class="code-example"><pre><code>print("Rahul\\nPython Course")</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>Rahul
Python Course</code></pre></div>

      <h3>16. Print a sentence with double quotes inside it.</h3>
      <div class="code-example"><pre><code>print('He said "Hello" to everyone.')</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>He said "Hello" to everyone.</code></pre></div>

      <h3>17. Print exactly: <code>Python\\Programming</code></h3>
      <div class="code-example"><pre><code>print("Python\\\\Programming")</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>Python\Programming</code></pre></div>

      
      <h3>18. Create a variable <code>age</code> and print it.</h3>
      <div class="code-example"><pre><code>age = 20
print(age)</code></pre></div>
      <p><strong>Output (example):</strong></p>
      <div class="code-example"><pre><code>20</code></pre></div>

      <h3>19. Create two variables and print their sum.</h3>
      <div class="code-example"><pre><code>a = 5
b = 7
print("Sum:", a + b)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>Sum: 12</code></pre></div>

      <h3>20. Swap two numbers using a third variable.</h3>
      <div class="code-example"><pre><code>a = 10
b = 20

temp = a
a = b
b = temp

print("a =", a)
print("b =", b)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>a = 20
b = 10</code></pre></div>

      <h3>21. Swap two numbers without using a third variable.</h3>
      <div class="code-example"><pre><code>a = 10
b = 20

a, b = b, a

print("a =", a)
print("b =", b)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>a = 20
b = 10</code></pre></div>

      
      <h3>22. Store two integers and print their sum, difference, and product.</h3>
      <div class="code-example"><pre><code>x = 8
y = 3

print("Sum:", x + y)
print("Difference:", x - y)
print("Product:", x * y)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>Sum: 11
Difference: 5
Product: 24</code></pre></div>

      <h3>23. Store <code>price = 99.50</code> and <code>tax = 5.25</code>. Print total price.</h3>
      <div class="code-example"><pre><code>price = 99.50
tax = 5.25

total = price + tax
print("Total price:", total)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>Total price: 104.75</code></pre></div>

      <h3>24. Store your name in a variable and print the first and last character.</h3>
      <div class="code-example"><pre><code>name = "Rahul"

print("First character:", name[0])
print("Last character:", name[-1])</code></pre></div>
      <p><strong>Output (for "Rahul"):</strong></p>
      <div class="code-example"><pre><code>First character: R
Last character: l</code></pre></div>

      <h3>25. Create a complex number and print its real and imaginary parts.</h3>
      <div class="code-example"><pre><code>z = 3 + 4j

print("Real part:", z.real)
print("Imaginary part:", z.imag)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>Real part: 3.0
Imaginary part: 4.0</code></pre></div>

      <h3>26. Store the result of <code>10 &gt; 5</code> in a variable and print it.</h3>
      <div class="code-example"><pre><code>result = 10 &gt; 5
print(result)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>True</code></pre></div>

      <h3>27. Check whether <code>5 == 10</code> and print the result.</h3>
      <div class="code-example"><pre><code>result = (5 == 10)
print(result)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>False</code></pre></div>

      
      <h3>28. Create a list of five numbers and print it.</h3>
      <div class="code-example"><pre><code>numbers = [10, 20, 30, 40, 50]
print(numbers)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>[10, 20, 30, 40, 50]</code></pre></div>

      <h3>29. Print the first and last element of the list.</h3>
      <div class="code-example"><pre><code>numbers = [10, 20, 30, 40, 50]

print("First:", numbers[0])
print("Last:", numbers[-1])</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>First: 10
Last: 50</code></pre></div>

      <h3>30. Add a new element to the list.</h3>
      <div class="code-example"><pre><code>numbers = [10, 20, 30, 40, 50]
numbers.append(60)
print(numbers)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>[10, 20, 30, 40, 50, 60]</code></pre></div>

      <h3>31. Remove one element from the list.</h3>
      <div class="code-example"><pre><code>numbers = [10, 20, 30, 40, 50]
numbers.remove(30)  # removes the value 30
print(numbers)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>[10, 20, 40, 50]</code></pre></div>

      
      <h3>32. Create a tuple of three fruits and print it.</h3>
      <div class="code-example"><pre><code>fruits = ("apple", "banana", "cherry")
print(fruits)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>('apple', 'banana', 'cherry')</code></pre></div>

      <h3>33. Try changing one value in the tuple and observe the result.</h3>
      <div class="code-example"><pre><code>fruits = ("apple", "banana", "cherry")

# This line will cause an error because tuples are immutable:
# fruits[0] = "mango"

print("Tuples are immutable. Trying to change fruits[0] gives:")
print("TypeError: 'tuple' object does not support item assignment")</code></pre></div>

      <h3>34. Create a set of five numbers.</h3>
      <div class="code-example"><pre><code>nums = {1, 2, 3, 4, 5}
print(nums)</code></pre></div>
      <p><strong>Output (order may vary):</strong></p>
      <div class="code-example"><pre><code>{1, 2, 3, 4, 5}</code></pre></div>

      <h3>35. Print the set.</h3>
      <p>Already done above – printing the set displays all elements (order not guaranteed).</p>

      <h3>36. Add a new element to the set.</h3>
      <div class="code-example"><pre><code>nums = {1, 2, 3, 4, 5}
nums.add(6)
print(nums)</code></pre></div>
      <p><strong>Output (example):</strong></p>
      <div class="code-example"><pre><code>{1, 2, 3, 4, 5, 6}</code></pre></div>

      <h3>37. Remove an element from the set.</h3>
      <div class="code-example"><pre><code>nums = {1, 2, 3, 4, 5}
nums.remove(3)
print(nums)</code></pre></div>
      <p><strong>Output (example):</strong></p>
      <div class="code-example"><pre><code>{1, 2, 4, 5}</code></pre></div>

      
      <h3>38. Create a dictionary with keys <code>name</code>, <code>age</code>, and <code>course</code>.</h3>
      <div class="code-example"><pre><code>student = {
    "name": "Rahul",
    "age": 20,
    "course": "Python"
}
print(student)</code></pre></div>
      <p><strong>Output (example):</strong></p>
      <div class="code-example"><pre><code>{'name': 'Rahul', 'age': 20, 'course': 'Python'}</code></pre></div>

      <h3>39. Print the value of <code>course</code> from the dictionary.</h3>
      <div class="code-example"><pre><code>student = {
    "name": "Rahul",
    "age": 20,
    "course": "Python"
}

print(student["course"])</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>Python</code></pre></div>

      <h3>40. Update the <code>age</code> value in the dictionary.</h3>
      <div class="code-example"><pre><code>student = {
    "name": "Rahul",
    "age": 20,
    "course": "Python"
}

student["age"] = 21
print(student)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>{'name': 'Rahul', 'age': 21, 'course': 'Python'}</code></pre></div>

      <h3>41. Add a new key <code>college</code> to the dictionary.</h3>
      <div class="code-example"><pre><code>student = {
    "name": "Rahul",
    "age": 21,
    "course": "Python"
}

student["college"] = "ABC College"
print(student)</code></pre></div>
      <p><strong>Output (example):</strong></p>
      <div class="code-example"><pre><code>{'name': 'Rahul', 'age': 21, 'course': 'Python', 'college': 'ABC College'}</code></pre></div>

      
      <h3>42. Create a list of student names and print them one by one.</h3>
      <div class="code-example"><pre><code>students = ["Rahul", "Priya", "Aman"]

for name in students:
    print(name)</code></pre></div>
      <p><strong>Output:</strong></p>
      <div class="code-example"><pre><code>Rahul
Priya
Aman</code></pre></div>

      <h3>43. Create a dictionary of a student and print all keys and values.</h3>
      <div class="code-example"><pre><code>student = {
    "name": "Rahul",
    "age": 21,
    "course": "Python",
    "college": "ABC College"
}

print("Keys:")
for key in student.keys():
    print(key)

print("\\nValues:")
for value in student.values():
    print(value)</code></pre></div>
      <p><strong>Output (example):</strong></p>
      <div class="code-example"><pre><code>Keys:
name
age
course
college

Values:
Rahul
21
Python
ABC College</code></pre></div>
    `
  }
});

// ---- Navigation & availability control for this section ----
// Note: 'practice-1' is intentionally NOT part of topicOrder or unitMapping
// (this matches the original topic.js, where Practice Sheets had no Prev/Next
// chain entry and no breadcrumb unit-name mapping — preserved as-is here).

Object.assign(topicAvailability, {
  'practice-1': true
});

Object.assign(unitTopicsByName, {
  'Practice Sheets': ['practice-1']
});

// Enable/disable this entire section (Practice Sheets)
function enablePracticeSheets() {
  ['practice-1'].forEach(id => { topicAvailability[id] = true; });
  console.log('Enabled entire section: Practice Sheets');
}
function disablePracticeSheets() {
  ['practice-1'].forEach(id => { topicAvailability[id] = false; });
  console.log('Disabled entire section: Practice Sheets');
}
