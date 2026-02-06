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
  'intro-programming-languages',
  'what-is-python','features-advantages','history-versions','applications',
  'first-program','comments','indentation','keywords','escape-sequence','variables',
  'basic-datatypes','advanced-datatypes',
  'operators-overview','input-function','type-conversion','print-formatting','strings-basics','string-methods','string-indexing-slicing',
  'decision-making','loops','transfer-statements','functions-overview','function-arguments','variable-scope',
  'lists-intro','lists-accessing','lists-methods',
  'tuples-intro','tuples-accessing','tuples-methods',
  'sets-intro','sets-methods','dict-intro','dict-methods',
  'modules-intro','modules-imports','module-random','module-math',
  'prev-2025' // added Previous Paper July 2025
];

// Unit mapping for breadcrumb navigation
const unitMapping = {
  'intro-programming-languages': 'Unit I',
  'what-is-python': 'Unit I',
  'features-advantages': 'Unit I',
  'history-versions': 'Unit I',
  'applications': 'Unit I',
  'first-program': 'Unit I',
  'comments': 'Unit I',
  'indentation': 'Unit I',
  'keywords': 'Unit I',
  'escape-sequence': 'Unit I',
  'variables': 'Unit I',
  'basic-datatypes': 'Unit I',
  'advanced-datatypes': 'Unit I',
  
  'operators-overview': 'Unit II',
  'input-function': 'Unit II',
  'type-conversion': 'Unit II',
  'print-formatting': 'Unit II',
  'strings-basics': 'Unit II',
  'string-methods': 'Unit II',
  'string-indexing-slicing': 'Unit II',
  
  'decision-making': 'Unit III',
  'loops': 'Unit III',
  'transfer-statements': 'Unit III',
  'functions-overview': 'Unit III',
  'function-arguments': 'Unit III',
  'variable-scope': 'Unit III',
  
  'lists-intro': 'Unit IV',
  'lists-accessing': 'Unit IV',
  'lists-methods': 'Unit IV',
  'tuples-intro': 'Unit IV',
  'tuples-accessing': 'Unit IV',
  'tuples-methods': 'Unit IV',
  
  'sets-intro': 'Unit V',
  'sets-methods': 'Unit V',
  'dict-intro': 'Unit V',
  'dict-methods': 'Unit V',
  'modules-intro': 'Unit V',
  'modules-imports': 'Unit V',
  'module-random': 'Unit V',
  'module-math': 'Unit V',
  'prev-2025': 'Previous Papers' // mapping for new topic
};

const topics = {
  'intro-programming-languages': {
    title: 'Introduction to Programming Languages',
    html: `
      <h2>What is a Programming Language?</h2>
      <p>At its core, a programming language is a <strong>communication tool</strong>. Since computers don't understand English or any other human language, we use these sets of instructions to tell them exactly what tasks to perform.</p>
      <p>Think of it like a recipe: you provide the ingredients (data) and the steps (code), and the computer produces the result.</p>
      <hr>
      <h3>The Five Generations of Programming Languages</h3>
      <p>As technology advanced, programming languages became more "human-friendly." This evolution focuses on three goals: making them <strong>easier to use</strong>, more <strong>efficient</strong>, and more <strong>abstract</strong> (hiding the complex technical details from the user).</p>
      <h4>1GL: Machine Language (The "Native" Tongue)</h4>
      <ul>
        <li><strong>The Language:</strong> Written entirely in binary code (<strong>0s and 1s</strong>).</li>
        <li><strong>The Good:</strong> Computers understand it instantly, so it is incredibly fast.</li>
        <li><strong>The Bad:</strong> It is extremely difficult for humans to read or write. It is "machine dependent".</li>
        <li><strong>Example:</strong> <code>10101010</code></li>
      </ul>
      <h4>2GL: Assembly Language (The First Shortcut)</h4>
      <ul>
        <li><strong>The Language:</strong> Replaces 1s and 0s with short words called <strong>mnemonics</strong>.</li>
        <li><strong>The Bridge:</strong> Needs an <strong>Assembler</strong> to turn these words back into binary.</li>
        <li><strong>The Bad:</strong> Still technical and machine dependent.</li>
        <li><strong>Examples:</strong> <code>MOV</code>, <code>ADD</code>, <code>SUB</code></li>
      </ul>
      <h4>3GL: High-Level Languages (The Turning Point)</h4>
      <ul>
        <li><strong>The Language:</strong> Uses English-like words and symbols; what most people think of as "coding".</li>
        <li><strong>The Good:</strong> Easier to learn and generally machine independent.</li>
        <li><strong>The Bridge:</strong> Uses a <strong>Compiler</strong> or <strong>Interpreter</strong> to translate to machine code.</li>
        <li><strong>Examples:</strong> C, C++, Java, Python</li>
      </ul>
      <h4>4GL: Very High-Level Languages (The Problem Solvers)</h4>
      <ul>
        <li><strong>The Language:</strong> Focuses on <em>what</em> to achieve rather than <em>how</em> to do it.</li>
        <li><strong>The Good:</strong> Requires very little code and automates many tasks; common in data management.</li>
        <li><strong>Examples:</strong> SQL, MATLAB</li>
      </ul>
      <h4>5GL: AI & Logic-Based Languages (The Future)</h4>
      <ul>
        <li><strong>The Language:</strong> Based on logic, constraints, and rules instead of explicit steps.</li>
        <li><strong>The Good:</strong> Programmer defines the problem; system finds solutions (used in AI).</li>
        <li><strong>Examples:</strong> Prolog, Mercury</li>
      </ul>
      <hr>
      <h3>Special Purpose Languages</h3>
      <p>Not every language is meant to build full software. Some are designed for specific jobs:</p>
      <table>
        <thead><tr><th>Category</th><th>Purpose</th><th>Examples</th></tr></thead>
        <tbody>
          <tr><td><strong>Scripting</strong></td><td>Automating small tasks</td><td>JavaScript, Python, Ruby</td></tr>
          <tr><td><strong>Command</strong></td><td>OS commands</td><td>Bash, Sh</td></tr>
          <tr><td><strong>Document Formatting</strong></td><td>Text/document layout</td><td>TeX, LaTeX</td></tr>
          <tr><td><strong>Web Display</strong></td><td>Web structure and styling</td><td>HTML, CSS, XML</td></tr>
        </tbody>
      </table>
      <hr>
      <h3>Comparison of Language Levels</h3>
      <p>To visualize "Abstraction":</p>
      <ol>
        <li><strong>Low-Level (1GL, 2GL):</strong> Close to hardware — fast but hard for humans.</li>
        <li><strong>High-Level (3GL, 4GL, 5GL):</strong> Closer to humans — easier to write, requires translation.</li>
      </ol>
    `
  },
  'what-is-python': { title: 'What is Python', bullets: ['High-level, interpreted language', 'Emphasizes readability and rapid development'] },
  'features-advantages': { 
    title: 'Features & Advantages', 
    html: `
      <h2>Features & Advantages</h2>
      <img src="assets/python features.png" alt="Features & Advantages" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />
      <h3>Core Features of Python</h3>
      <ol>
        <li><strong>High-Level Language</strong><br>
            Python is designed to be easy for humans to read and write. It uses English-like words, so you don't have to worry about the complex technical details of the computer's hardware.
        </li>
        <li><strong>Interpreted</strong><br>
            Python executes code line-by-line. This makes it very easy to test small pieces of code and find errors quickly.<br><br>
            <em>Example:</em> If there is an error on line 10, Python will run lines 1–9 and then stop, telling you exactly where the problem is.
        </li>
        <li><strong>Dynamic Typing</strong><br>
            In Python, you don't need to declare what type of data a variable holds (like a number or text) before using it. The language "figures it out" automatically while the program is running.
        </li>
        <li><strong>General-Purpose</strong><br>
            Python isn't limited to just one type of task. It can be used for web development, data analysis, artificial intelligence, scientific research, and more.
        </li>
        <li><strong>Large Standard Library</strong><br>
            Python comes with a "built-in toolkit". This library contains pre-written code for many common tasks—like connecting to web servers or reading files—so you don't have to write everything from scratch.
        </li>
      </ol>

      <h3>Flexibility and Accessibility</h3>
      <ol start="6">
        <li><strong>Open Source</strong><br>
            Python is free to use, and its original source code is available for anyone to see, modify, and improve. This has created a massive global community that constantly updates the language.
        </li>
        <li><strong>Portable / Cross-Platform</strong><br>
            Python code is "write once, run anywhere". A program written on a Windows computer will usually run on a Mac or a Linux system without needing major changes.
        </li>
        <li><strong>Multi-Paradigm</strong><br>
            Python supports different "styles" of programming. Whether you want to use Object-Oriented programming (organizing code into objects) or Procedural programming (a list of steps), Python allows you to choose the best fit for your project.
        </li>
      </ol>

      <h3>Advanced Capabilities</h3>
      <ol start="9">
        <li><strong>GUI Programming</strong><br>
            Python can be used to create Graphical User Interfaces (GUIs). This means you can build desktop applications with windows, buttons, and menus rather than just text-based programs.<br><br>
            <em>Example:</em> Apps like a calculator or a simple photo editor.
        </li>
        <li><strong>Scalable</strong><br>
            Python is "scalable," meaning it can handle small, simple scripts just as well as it handles massive, complex systems used by giant companies like Google or Netflix.
        </li>
      </ol>
    ` 
  },
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
  'module-math': { title: 'Math Module', bullets: ['sqrt(), floor(), ceil(), pow(), pi, e'] },

  // NEW: Practice Sheets – Practice 1 (Basics)
  'practice-1': {
    title: 'Practice 1: Basics',
    html: `
      <h2>Practice 1: Basics</h2>
      <p>Practice questions on printing, comments, indentation, variables, data types, and basic collections. Each question includes sample code and expected output.</p>

      <hr>
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

      <hr>
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

      <hr>
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

      <hr>
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

      <hr>
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

      <hr>
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

      <hr>
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

      <hr>
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

      <hr>
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

      <hr>
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

      <hr>
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
  },

  // OPTIONAL: simple placeholders so other practice/lab links don't break
  'practice-2': { title: 'Practice 2: Operators & I/O', html: `<h2>Practice 2</h2><p>Coming soon.</p>` },
  'practice-3': { title: 'Practice 3: Control Flow', html: `<h2>Practice 3</h2><p>Coming soon.</p>` },
  'practice-4': { title: 'Practice 4: Data Structures', html: `<h2>Practice 4</h2><p>Coming soon.</p>` },

  'lab-1': { 
    title: 'Lab 1: Key Syntax and Concepts',
    html: `
      <h2>Lab 1: Key Syntax and Concepts</h2>
      <h3>Aim</h3>
      <p>To write a Python program that demonstrates basic syntax, comments, indentation, variables, escape sequences and basic data types (int, float, str, complex, bool).</p>

      <h3>Program</h3>
      <div class="code-example"><pre><code># Lab Activity 1
# This program demonstrates basic Python syntax and data types

# Variable declaration
student_name = "Ayaan"
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

      <h3>Expected Output (Execute and check)</h3>
      <div class="code-example"><pre><code>Student Details:

Name:	 Ayaan
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

      <h3>Program</h3>
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
    "name": "Ayaan",
    "roll_no": 101,
    "course": "MCA"
}

# Printing all data types
print("List (Subjects):", subjects)
print("Tuple (Marks):", marks)
print("Set (Unique Numbers):", unique_numbers)
print("Dictionary (Student Details):", student)</code></pre></div>

      <h3>Expected Output (Execute and check)</h3>
      <div class="code-example"><pre><code>List (Subjects): ['Python', 'DBMS', 'Data Visualization', 'AI']
Tuple (Marks): (85, 78, 90)
Set (Unique Numbers): {1, 2, 3}
Dictionary (Student Details): {'name': 'Ayaan', 'roll_no': 101, 'course': 'MCA'}</code></pre></div>
    `
  },
  'lab-3': { title: 'Lab 3: Modules & Packages', html: `<h2>Lab 3</h2><p>Coming soon.</p>` },
  'lab-4': { title: 'Lab 4: Mini Project', html: `<h2>Lab 4</h2><p>Coming soon.</p>` },

  'prev-2025': {
    title: 'Previous Paper - July 2025',
    html: `
      <h2>Previous Paper - July 2025</h2>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <img src="assets/prev-2025-page1.jpg" alt="Previous Paper July 2025 - Page 1" style="max-width:100%;height:auto;border:1px solid var(--border-color);border-radius:8px;" />
        <img src="assets/prev-2025-page2.jpg" alt="Previous Paper July 2025 - Page 2" style="max-width:100%;height:auto;border:1px solid var(--border-color);border-radius:8px;" />
      </div>
    `
  }
};

function renderTopic(id) {
  const topic = topics[id] || topics[topicOrder[0]];
  const breadcrumb = document.getElementById('topicBreadcrumb');
  const content = document.getElementById('topicContent');
  
  // Get unit name for breadcrumb
  const unitName = unitMapping[id] || 'Unit I';
  
  // Update breadcrumb with unit information
  breadcrumb.innerHTML = `
    <a href="index.html">Home</a>
    <span>></span>
    <span>${unitName}</span>
    <span>></span>
    <span>${topic.title}</span>
  `;
  
  if (topic.html) {
    content.innerHTML = `
      <div class="content-card">
        ${topic.html}
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="content-card">
        <h2>📖 ${topic.title}</h2>
        <ul>${(topic.bullets || []).map(b => `<li>${b}</li>`).join('')}</ul>
      </div>
    `;
  }
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