// Lab Activities
// This file defines the topic content for this section only.
// It merges into the global 'topics' object used by topic.html (topic-core.js).

Object.assign(topics, {
  'lab-1': { 
    title: 'Lab 1: Key Syntax and Concepts',
    html: `
      <h2>Lab 1: Key Syntax and Concepts</h2>

      <h3>Aim</h2>
      <p>To write a Python program that demonstrates basic syntax, comments, indentation, variables, escape sequences and basic data types (int, float, str, complex, bool).</p>
      <h3>Description<h3>
      <div class="lab-description">
        <p>
          This program explains the fundamental structure of Python programming. It demonstrates:
        </p>
        <ul>
          <li>Use of comments (<code>#</code>)</li>
          <li>Variable declaration</li>
          <li>Basic data types (<code>int</code>, <code>float</code>, <code>str</code>, <code>complex</code>, <code>bool</code>)</li>
          <li>Escape sequences (<code>\\n</code>, <code>\\t</code>)</li>
          <li>Importance of indentation in decision-making statements</li>
        </ul>
        <p>
          The program stores student details in different data types and displays them using formatted output.
        </p>
      </div>
      <h3>Source Code</h3>
      <div class="code-example"><pre><code># Lab Activity 1
# This program demonstrates basic Python syntax and data types

# Variable declaration
student_name = "Abdul"
roll_no = 101
percentage = 85.75
complex_number = 3 + 4j
is_pass = True

# Printing values with escape sequences
print("Student Details:\\n")
print("Name:\\t", student_name)
print("Roll No:\\t", roll_no)
print("Percentage:\\t", percentage)
print("Complex Number:\\t", complex_number)
print("Pass Status:\\t", is_pass)

# Indentation example
if is_pass:
    print("\\nResult: Student has PASSED")
else:
    print("\\nResult: Student has FAILED")</code></pre></div>

      <h3>Output</h3>
      <div class="code-example"><pre><code>Student Details:

Name:	 Abdul
Roll No:	 101
Percentage:	 85.75
Complex Number:	 (3+4j)
Pass Status:	 True

Result: Student has PASSED</code></pre></div>
    `
  },

  'lab-2': { 
    title: 'Lab 2: Demonstration of Advanced Data Types (List, Tuple, Set, Dictionary)',
    html: `
      <h2>Lab 2: Demonstration of Advanced Data Types</h2>
      <h3>Aim</h3>
      <p>To write a Python program that demonstrates advanced data types: List, Tuple, Set and Dictionary.</p>
      <h3>Description<h3>
      <div class="lab-description">
        <p>
          This program demonstrates Python’s advanced data structures:
        </p>
        <ul>
          <li>List – Mutable and ordered collection</li>
          <li>Tuple – Immutable and ordered collection</li>
          <li>Set – Unordered collection without duplicate values</li>
          <li>Dictionary – Key-value pair collection</li>
        </ul>
        <p>The program creates examples of each data type and displays them.</p>
      </div>

      <h3>Source Code</h3>
      <div class="code-example"><pre><code># Lab Activity 2
# Program to demonstrate advanced data types

# List (Mutable)
subjects = ["Python", "DBMS", "Data Visualization"]
subjects.append("AI")

# Tuple (Immutable)
marks = (85, 78, 90)

# Set (No duplicate values)
unique_numbers = {1, 2, 3, 2, 1}

# Dictionary (Key-Value pairs)
student = {
    "name": "Abdul",
    "roll_no": 101,
    "course": "MCA"
}

# Printing all data types
print("List (Subjects):", subjects)
print("Tuple (Marks):", marks)
print("Set (Unique Numbers):", unique_numbers)
print("Dictionary (Student Details):", student)</code></pre></div>

      <h3>Output</h3>
      <div class="code-example"><pre><code>List (Subjects): ['Python', 'DBMS', 'Data Visualization', 'AI']
Tuple (Marks): (85, 78, 90)
Set (Unique Numbers): {1, 2, 3}
Dictionary (Student Details): {'name': 'Abdul', 'roll_no': 101, 'course': 'MCA'}</code></pre></div>
    `
  },

  'lab-3': {
    title: 'Lab 3: Demonstration of Operators & I/O',
    html: `
      <h2>Lab 3: Demonstration of Operators & I/O</h2>

      <h3>Aim</h3>
      <p>To write a Python program demonstrating various operators and input/output statements.</p>

      <h3>Description</h3>
      <p>This program demonstrates arithmetic, comparison, logical, bitwise, identity and membership operators along with input(), type conversion and formatted output.</p>

      <h3>Source Code</h3>
      <div class="code-example"><pre><code># Lab Activity 3
# Demonstration of Operators and Input/Output

# Taking input from user
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

# Arithmetic Operators
print("\\nArithmetic Operators:")
print("Addition:", num1 + num2)
print("Subtraction:", num1 - num2)
print("Multiplication:", num1 * num2)
print("Division:", num1 / num2)
print("Modulus:", num1 % num2)

# Comparison Operators
print("\\nComparison Operators:")
print("Equal:", num1 == num2)
print("Not Equal:", num1 != num2)
print("Greater than:", num1 > num2)

# Logical Operators
print("\\nLogical Operators:")
print("Logical AND:", num1 > 0 and num2 > 0)
print("Logical OR:", num1 > 0 or num2 > 0)

# Bitwise Operators
print("\\nBitwise Operators:")
print("Bitwise AND:", num1 & num2)
print("Bitwise OR:", num1 | num2)

# Identity Operators
a = num1
b = num1
print("\\nIdentity Operators:")
print("a is b:", a is b)

# Membership Operators
numbers = [1, 2, 3, 4, 5]
print("\\nMembership Operators:")
print("Is num1 in list?", num1 in numbers)</code></pre></div>

      <h3>Sample Output</h3>
      <div class="code-example"><pre><code>Enter first number: 10
Enter second number: 5

Arithmetic Operators:
Addition: 15
Subtraction: 5
Multiplication: 50
Division: 2.0
Modulus: 0

Comparison Operators:
Equal: False
Not Equal: True
Greater than: True

Logical Operators:
Logical AND: True
Logical OR: True

Bitwise Operators:
Bitwise AND: 0
Bitwise OR: 15

Identity Operators:
a is b: True

Membership Operators:
Is num1 in list? False</code></pre></div>
    `
  },

  'lab-4': {
    title: 'Lab 4: String Operations, Indexing & Slicing',
    html: `
      <h2>Lab 4: String Operations, Indexing, Slicing & Methods</h2>

      <h3>Aim</h3>
      <p>To write a Python program demonstrating string creation, indexing, slicing, built-in string methods, and formatted output.</p>

      <h3>Description</h3>
      <p>This program demonstrates:</p>
      <ul>
        <li>Creating strings</li>
        <li>Taking string input</li>
        <li>String indexing</li>
        <li>String slicing</li>
        <li>Built-in string methods</li>
        <li>Output formatting</li>
      </ul>

      <h3>Source Code</h3>
      <div class="code-example"><pre><code># Lab Activity 4
# Demonstration of Strings in Python

# Taking string input
name = input("Enter a name: ")
age = int(input("Enter your age: "))

print("\\nOriginal String:", name)

# String Indexing
print("First Character:", name[0])
print("Last Character:", name[-1])

# String Slicing
print("First 3 Characters:", name[0:3])
print("Last 3 Characters:", name[-3:])

# Built-in String Methods
print("Uppercase:", name.upper())
print("Lowercase:", name.lower())
print("Length of String:", len(name))
print("Is Alphanumeric:", name.isalnum())

# Formatted Output
print("\\nFormatted Output:")
print("My name is {} and I am {} years old.".format(name, age))</code></pre></div>

      <h3>Sample Output</h3>
      <div class="code-example"><pre><code>Enter a name: Shaik Abdul Gaffar
Enter your age: 23

Original String: Shaik Abdul Gaffar
First Character: S
Last Character: r
First 3 Characters: Sha
Last 3 Characters: far
Uppercase: SHAIK ABDUL GAFFAR
Lowercase: shaik abdul gaffar
Length of String: 18
Is Alphanumeric: False

Formatted Output:
My name is Shaik Abdul Gaffar and I am 23 years old.</code></pre></div>
    `
  },

  'lab-5': {
    title: 'Lab 5: Decision-Making Statements in Python',
    html: `
      <h2>Lab 5: Decision-Making Statements in Python</h2>

      <h3>Aim</h3>
      <p>To understand and implement decision-making statements in Python using:</p>
      <ul>
        <li><code>if</code></li>
        <li><code>if-else</code></li>
        <li><code>if-elif-else</code></li>
        <li>Nested if statements</li>
      </ul>

      <h3>Description</h3>
      <p>Decision-making statements allow a program to make choices based on conditions. These conditions evaluate to either True or False, and based on that, different blocks of code are executed.</p>
      <p>In this lab, students will:</p>
      <ul>
        <li>Learn how conditions work</li>
        <li>Write programs using different types of decision statements</li>
        <li>Understand real-time scenarios using logic</li>
      </ul>

      <h3>1. Program using if statement</h3>
      <p><strong>Problem:</strong> Check whether a number is positive.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>num = int(input("Enter a number: "))

if num > 0:
    print("The number is positive")</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>Enter a number: 5
The number is positive</code></pre></div>

      <h3>2. Program using if-else statement</h3>
      <p><strong>Problem:</strong> Check whether a number is even or odd.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>num = int(input("Enter a number: "))

if num % 2 == 0:
    print("Even number")
else:
    print("Odd number")</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>Enter a number: 7
Odd number</code></pre></div>

      <h3>3. Program using if-elif-else statement</h3>
      <p><strong>Problem:</strong> Find the grade of a student based on marks.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>marks = int(input("Enter your marks: "))

if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 50:
    print("Grade C")
else:
    print("Fail")</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>Enter your marks: 82
Grade B</code></pre></div>

      <h3>4. Program using Nested if statement</h3>
      <p><strong>Problem:</strong> Check whether a number is positive and even.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>num = int(input("Enter a number: "))

if num > 0:
    if num % 2 == 0:
        print("Positive Even number")
    else:
        print("Positive Odd number")
else:
    print("Number is not positive")</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>Enter a number: 6
Positive Even number</code></pre></div>
    `
  },

  'lab-6': {
    title: 'Lab 6: Looping & Transfer Statements in Python',
    html: `
      <h2>Lab 6: Looping & Transfer Statements in Python</h2>

      <h3>Aim</h3>
      <p>To understand and implement:</p>
      <ul>
        <li>Looping statements: <code>for</code>, <code>while</code></li>
        <li>Transfer statements: <code>break</code>, <code>continue</code>, <code>pass</code></li>
      </ul>

      <h3>Description</h3>
      <p>Loops are used to execute a block of code repeatedly based on a condition. Python provides two main looping constructs:</p>
      <ul>
        <li><code>for</code> loop → used when the number of iterations is known</li>
        <li><code>while</code> loop → used when the condition decides repetition</li>
      </ul>
      <p>Transfer statements control the flow of loops:</p>
      <ul>
        <li><code>break</code> → exits the loop immediately</li>
        <li><code>continue</code> → skips the current iteration</li>
        <li><code>pass</code> → does nothing (placeholder)</li>
      </ul>

      <h3>1. Program using for loop</h3>
      <p><strong>Problem:</strong> Print numbers from 1 to 5.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>for i in range(1, 6):
    print(i)</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>1
2
3
4
5</code></pre></div>

      <h3>2. Program using while loop</h3>
      <p><strong>Problem:</strong> Print numbers from 1 to 5 using while loop.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>i = 1

while i <= 5:
    print(i)
    i += 1</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>1
2
3
4
5</code></pre></div>

      <h3>3. Program using break statement</h3>
      <p><strong>Problem:</strong> Stop printing numbers when the number becomes 3.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>for i in range(1, 6):
    if i == 3:
        break
    print(i)</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>1
2</code></pre></div>

      <h3>4. Program using continue statement</h3>
      <p><strong>Problem:</strong> Skip printing number 3.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>for i in range(1, 6):
    if i == 3:
        continue
    print(i)</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>1
2
4
5</code></pre></div>

      <h3>5. Program using pass statement</h3>
      <p><strong>Problem:</strong> Demonstrate use of pass inside a loop.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>for i in range(1, 6):
    if i == 3:
        pass
    print(i)</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>1
2
3
4
5</code></pre></div>
    `
  },

  'lab-7': {
    title: 'Lab 7: Functions in Python',
    html: `
      <h2>Lab 7: Functions in Python</h2>

      <h3>Aim</h3>
      <p>To understand and implement:</p>
      <ul>
        <li>Defining and calling functions</li>
        <li>Types of arguments:
          <ul>
            <li>Positional Arguments</li>
            <li>Keyword Arguments</li>
            <li>Default Arguments</li>
            <li>Variable Length Arguments</li>
          </ul>
        </li>
      </ul>

      <h3>Description</h3>
      <p>A function is a reusable block of code that performs a specific task. Functions help in:</p>
      <ul>
        <li>Reducing code repetition</li>
        <li>Improving readability</li>
        <li>Making programs modular</li>
      </ul>
      <p>In Python, functions are defined using the <code>def</code> keyword and can accept different types of arguments for flexibility.</p>

      <h3>1. Defining and Calling a Function</h3>
      <p><strong>Problem:</strong> Create a function to display a welcome message.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>def welcome():
    print("Welcome to Python Lab!")

welcome()</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>Welcome to Python Lab!</code></pre></div>

      <h3>2. Function with Positional Arguments</h3>
      <p><strong>Problem:</strong> Add two numbers using positional arguments.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>def add(a, b):
    print("Sum:", a + b)

add(5, 3)</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>Sum: 8</code></pre></div>

      <h3>3. Function with Keyword Arguments</h3>
      <p><strong>Problem:</strong> Display student details using keyword arguments.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>def student(name, age):
    print("Name:", name)
    print("Age:", age)

student(age=20, name="Rahul")</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>Name: Rahul
Age: 20</code></pre></div>

      <h3>4. Function with Default Arguments</h3>
      <p><strong>Problem:</strong> Create a function with a default country name.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>def greet(name, country="India"):
    print("Hello", name, "from", country)

greet("Aman")
greet("John", "USA")</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>Hello Aman from India
Hello John from USA</code></pre></div>

      <h3>5. Function with Variable Length Arguments (*args)</h3>
      <p><strong>Problem:</strong> Find the sum of multiple numbers.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>def total_sum(*numbers):
    total = 0
    for num in numbers:
        total += num
    print("Total:", total)

total_sum(1, 2, 3)
total_sum(5, 10, 15, 20)</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>Total: 6
Total: 50</code></pre></div>

      <h3>6. Function with Variable Length Keyword Arguments (**kwargs)</h3>
      <p><strong>Problem:</strong> Display multiple details using keyword arguments.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>def details(**info):
    for key, value in info.items():
        print(key, ":", value)

details(name="Abhi", age=22, course="MCA")</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>name : Abhi
age : 22
course : MCA</code></pre></div>
    `
  },

  'lab-8': {
        title: 'Lab 8: Lists in Python',
        html: `
      <h2>Lab Activity: Lists in Python</h2>

      <h3>Aim</h3>
      <p>To understand the creation and manipulation of lists in Python using various built-in functions and methods.</p>

      <h3>Description</h3>
      <p>A list is an ordered, mutable collection of items. Lists can store multiple values and support operations such as adding, removing, sorting, and counting elements.</p>

      <h3>1. Create a List of Five Subjects and Display All Elements</h3>
      <h4>Source Code</h4>
      <div class="code-example"><pre><code>subjects = ["English", "Mathematics", "Physics", "Chemistry", "Computer Science"]

    print("Subjects:", subjects)</code></pre></div>
      <h4>Output</h4>
      <div class="code-example"><pre><code>Subjects: ['English', 'Mathematics', 'Physics', 'Chemistry', 'Computer Science']</code></pre></div>

      <h3>2. Find the Largest and Smallest Number in a List</h3>
      <h4>Source Code</h4>
      <div class="code-example"><pre><code>numbers = [45, 12, 89, 23, 67]

    print("Largest Number:", max(numbers))
    print("Smallest Number:", min(numbers))</code></pre></div>
      <h4>Output</h4>
      <div class="code-example"><pre><code>Largest Number: 89
    Smallest Number: 12</code></pre></div>

      <h3>3. Add a New Item to a List Using append()</h3>
      <h4>Source Code</h4>
      <div class="code-example"><pre><code>fruits = ["Apple", "Banana", "Mango"]

    fruits.append("Orange")

    print(fruits)</code></pre></div>
      <h4>Output</h4>
      <div class="code-example"><pre><code>['Apple', 'Banana', 'Mango', 'Orange']</code></pre></div>

      <h3>4. Remove an Element from a List Using remove()</h3>
      <h4>Source Code</h4>
      <div class="code-example"><pre><code>colors = ["Red", "Blue", "Green"]

    colors.remove("Blue")

    print(colors)</code></pre></div>
      <h4>Output</h4>
      <div class="code-example"><pre><code>['Red', 'Green']</code></pre></div>

      <h3>5. Sort a List of Numbers in Ascending Order</h3>
      <h4>Source Code</h4>
      <div class="code-example"><pre><code>numbers = [50, 10, 40, 20, 30]

    numbers.sort()

    print(numbers)</code></pre></div>
      <h4>Output</h4>
      <div class="code-example"><pre><code>[10, 20, 30, 40, 50]</code></pre></div>

      <h3>6. Count the Number of Occurrences of an Item in a List</h3>
      <h4>Source Code</h4>
      <div class="code-example"><pre><code>items = [1, 2, 3, 2, 4, 2, 5]

    count = items.count(2)

    print("Occurrences of 2:", count)</code></pre></div>
      <h4>Output</h4>
      <div class="code-example"><pre><code>Occurrences of 2: 3</code></pre></div>
        `
      },

  'lab-9': {
        title: 'Lab 9: Tuples in Python',
        html: `
      <h2>Lab Activity: Tuples in Python</h2>

      <h3>Aim</h3>
      <p>To understand the creation and manipulation of tuples in Python using built-in functions and methods.</p>

      <h3>Description</h3>
      <p>A tuple is an ordered and immutable collection of items. Tuples can store multiple values and support operations such as accessing elements, finding length, counting occurrences, and locating items.</p>

      <h3>1. Create a Tuple and Display All Elements</h3>
      <h4>Source Code</h4>
      <div class="code-example"><pre><code>subjects = ("English", "Mathematics", "Physics", "Chemistry", "Computer Science")

    print("Subjects:", subjects)</code></pre></div>
      <h4>Output</h4>
      <div class="code-example"><pre><code>Subjects: ('English', 'Mathematics', 'Physics', 'Chemistry', 'Computer Science')</code></pre></div>

      <h3>2. Demonstrate Tuple Characteristics</h3>
      <h4>Source Code</h4>
      <div class="code-example"><pre><code>data = (10, "Python", 3.14, True, 10)

    print(data)</code></pre></div>
      <h4>Output</h4>
      <div class="code-example"><pre><code>(10, 'Python', 3.14, True, 10)</code></pre></div>

      <h3>3. Access Tuple Items</h3>
      <h4>Source Code</h4>
      <div class="code-example"><pre><code>fruits = ("Apple", "Banana", "Mango", "Orange")

    print("First Fruit:", fruits[0])
    print("Last Fruit:", fruits[-1])</code></pre></div>
      <h4>Output</h4>
      <div class="code-example"><pre><code>First Fruit: Apple
    Last Fruit: Orange</code></pre></div>

      <h3>4. Find the Length of a Tuple</h3>
      <h4>Source Code</h4>
      <div class="code-example"><pre><code>numbers = (10, 20, 30, 40, 50)

    print("Length:", len(numbers))</code></pre></div>
      <h4>Output</h4>
      <div class="code-example"><pre><code>Length: 5</code></pre></div>

      <h3>5. Count the Number of Occurrences of an Item</h3>
      <h4>Source Code</h4>
      <div class="code-example"><pre><code>items = (1, 2, 3, 2, 4, 2, 5)

    print("Occurrences of 2:", items.count(2))</code></pre></div>
      <h4>Output</h4>
      <div class="code-example"><pre><code>Occurrences of 2: 3</code></pre></div>

      <h3>6. Find the Index of an Item</h3>
      <h4>Source Code</h4>
      <div class="code-example"><pre><code>colors = ("Red", "Blue", "Green", "Yellow")

    print("Index of Green:", colors.index("Green"))</code></pre></div>
      <h4>Output</h4>
      <div class="code-example"><pre><code>Index of Green: 2</code></pre></div>

      <h3>7. Find the Largest and Smallest Number in a Tuple</h3>
      <h4>Source Code</h4>
      <div class="code-example"><pre><code>numbers = (45, 12, 89, 23, 67)

    print("Largest Number:", max(numbers))
    print("Smallest Number:", min(numbers))</code></pre></div>
      <h4>Output</h4>
      <div class="code-example"><pre><code>Largest Number: 89
    Smallest Number: 12</code></pre></div>
        `
      },

    'lab-10': {

    title: 'Lab 10: Random and Math Module',
    html: `
      <h2>Lab 10: Random and Math Module</h2>

      <h3>Aim</h3>
      <p>To understand and implement functions from the <code>random</code> and <code>math</code> modules in Python.</p>

      <h3>Description</h3>
      <p>Python provides powerful built-in modules for mathematical and random operations. This lab explores:</p>
      <ul>
        <li><strong>Math Module:</strong> Provides mathematical functions like <code>ceil()</code>, <code>floor()</code>, <code>pow()</code>, <code>log()</code>, <code>factorial()</code>, and constants like <code>pi</code>, <code>e</code>, <code>inf</code>, and <code>nan</code>.</li>
        <li><strong>Random Module:</strong> Used to generate pseudo-random numbers and perform random operations like <code>random()</code>, <code>randint()</code>, <code>randrange()</code>, <code>shuffle()</code>, and <code>choice()</code>.</li>
      </ul>

      <h3>1. Using the math Module</h3>
      <p><strong>Problem:</strong> Demonstrate various mathematical functions and constants.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>import math

# Constants
print("Math Constants:")
print("Value of Pi:", math.pi)
print("Value of e:", math.e)
print("Infinity:", math.inf)
print("Not a Number (NaN):", math.nan)

# Mathematical Functions
print("\\nMathematical Functions:")
num = -5.8
print("Original Number:", num)
print("Ceiling:", math.ceil(num))   # Rounds up to nearest integer
print("Floor:", math.floor(num))    # Rounds down to nearest integer

base = 2
exponent = 3
print("\\nPower and Logarithmic Functions:")
print("Power (2^3):", math.pow(base, exponent))
print("Square Root of 16:", math.sqrt(16))
print("Natural Log of e:", math.log(math.e))
print("Log base 10 of 100:", math.log10(100))

# Factorial
print("\\nFactorial:")
print("Factorial of 5:", math.factorial(5))</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>Math Constants:
Value of Pi: 3.141592653589793
Value of e: 2.718281828459045
Infinity: inf
Not a Number (NaN): nan

Mathematical Functions:
Original Number: -5.8
Ceiling: -5
Floor: -6

Power and Logarithmic Functions:
Power (2^3): 8.0
Square Root of 16: 4.0
Natural Log of e: 1.0
Log base 10 of 100: 2.0

Factorial:
Factorial of 5: 120</code></pre></div>

      <h3>2. Using the random Module</h3>
      <p><strong>Problem:</strong> Demonstrate random number generation and operations.</p>
      <h4>Source Code:</h4>
      <div class="code-example"><pre><code>import random

# Random Number Generation
print("Random Number Generation:")
print("Random float (0 to 1):", random.random())
print("Random integer (1 to 10):", random.randint(1, 10))
print("Random range (0 to 50, step 5):", random.randrange(0, 50, 5))

# Random Operations on Sequences
fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"]
print("\\nRandom Operations on List:")
print("Original List:", fruits)
print("Random Choice:", random.choice(fruits))

# Shuffle the list
random.shuffle(fruits)
print("Shuffled List:", fruits)</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>Random Number Generation:
Random float (0 to 1): 0.7854217923098564
Random integer (1 to 10): 7
Random range (0 to 50, step 5): 35

Random Operations on List:
Original List: ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes']
Random Choice: Mango
Shuffled List: ['Grapes', 'Apple', 'Orange', 'Banana', 'Mango']</code></pre></div></code></pre></div>
    `
  },
});

// ---- Navigation & availability control for this section ----
topicOrder.push('lab-1', 'lab-2', 'lab-3', 'lab-4', 'lab-5', 'lab-6', 'lab-7', 'lab-8', 'lab-9', 'lab-10');

Object.assign(unitMapping, {
  'lab-1': 'Lab Activities',
  'lab-2': 'Lab Activities',
  'lab-3': 'Lab Activities',
  'lab-4': 'Lab Activities',
  'lab-5': 'Lab Activities',
  'lab-6': 'Lab Activities',
  'lab-7': 'Lab Activities',
  'lab-8': 'Lab Activities',
  'lab-9': 'Lab Activities',
  'lab-10': 'Lab Activities'
});

Object.assign(topicAvailability, {
  'lab-1': true,
  'lab-2': true,
  'lab-3': true,
  'lab-4': true,
  'lab-5': true,
  'lab-6': true,
  'lab-7': true,
  'lab-8': true,
  'lab-9': true,
  'lab-10': true
});

Object.assign(unitTopicsByName, {
  'Lab Activities': ['lab-1', 'lab-2', 'lab-3', 'lab-4', 'lab-5', 'lab-6', 'lab-7', 'lab-8', 'lab-9', 'lab-10']
});

// Enable/disable this entire section (Lab Activities)
function enableLabActivities() {
  ['lab-1', 'lab-2', 'lab-3', 'lab-4', 'lab-5', 'lab-6', 'lab-7', 'lab-8', 'lab-9', 'lab-10'].forEach(id => { topicAvailability[id] = true; });
  console.log('Enabled entire section: Lab Activities');
}
function disableLabActivities() {
  ['lab-1', 'lab-2', 'lab-3', 'lab-4', 'lab-5', 'lab-6', 'lab-7', 'lab-8', 'lab-9', 'lab-10'].forEach(id => { topicAvailability[id] = false; });
  console.log('Disabled entire section: Lab Activities');
}