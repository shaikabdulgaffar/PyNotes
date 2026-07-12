// Unit III — Control Flow & Functions
// This file defines the topic content for this section only.
// It merges into the global 'topics' object used by topic.js (topic-core.js).

Object.assign(topics, {
  'control-flow-overview': {
    title: 'Control Flow Statements in Python',
    html: `
      <h2>Control Flow Statements in Python</h2>

      <h3>Definition</h3>
      <p><strong>Control flow</strong> refers to the order in which statements within a program execute. Normally, programs follow a <strong>sequential flow</strong> from top to bottom. However, sometimes we need more flexibility in execution.</p>

      <h3>Why Control Flow?</h3>
      <ul>
        <li>Executing a block <strong>multiple times</strong></li>
        <li>Executing code based on <strong>conditions</strong></li>
        <li><strong>Terminate</strong> or <strong>skip</strong> certain statements</li>
      </ul>

      <img src="assets/Slide3.JPG" alt="Control Flow Categories" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>Types of Control Flow Statements</h3>
      <ul>
        <li><strong>Decision Making:</strong> if, elif, else</li>
        <li><strong>Looping:</strong> for, while</li>
        <li><strong>Loop Control:</strong> break, continue, pass</li>
      </ul>
    `
  },

  'decision-making': {
    title: 'Decision-Making Statements',
    html: `
      <h2>Decision-Making Statements in Python</h2>
      <img src="assets/Slide4.JPG" alt="Decision Making Overview" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <p>Decision-making statements help a program make <strong>logical choices</strong> during execution. They evaluate a specific condition to determine whether it is <strong>True</strong> or <strong>False</strong>, and then execute the corresponding block of code based on that result.</p>

      <p><strong>If a condition is true, perform one action; otherwise, perform a different action.</strong></p>

      <h3>Types of Decision-Making Statements</h3>
      <ul>
        <li><strong>if:</strong> Executes a block only when the condition is true.</li>
        <li><strong>if-else:</strong> Provides two alternative actions based on the condition.</li>
        <li><strong>if-elif-else:</strong> Checks multiple conditions and executes the first true one.</li>
        <li><strong>Nested if:</strong> An if statement placed inside another if statement.</li>
      </ul>
    `
  },

  'if-statement': {
    title: 'Python If Statement',
    html: `
      <h2>Python If Statement</h2>
      <img src="assets/Slide5.JPG" alt="If Statement" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What is an If Statement?</h3>
      <p>The <strong>if statement</strong> is a decision-making construct in Python. It checks a condition and executes a block of statements only if the condition is true. If the condition is false, the program skips the block and continues execution.</p>

      <h3>Syntax</h3>
      <div class="code-example"><pre><code>if condition:
    statement1
    statement2
    ...</code></pre></div>
      <p>The statements inside the block are executed only when the condition evaluates to <code>True</code>.</p>

      <h3>Example</h3>
      <div class="code-example"><pre><code>age = int(input("Enter Age: "))
if age >= 18:
    print("You are eligible for vote")
if age < 0:
    print("You entered Negative Number")</code></pre></div>

      <h4>Output (if age = 20):</h4>
      <div class="code-example"><pre><code>You are eligible for vote</code></pre></div>
    `
  },

  'if-else-statement': {
    title: 'Python if-else Statement',
    html: `
      <h2>Python if-else Statement</h2>
      <img src="assets/Slide6.JPG" alt="if-else Statement" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What is an if-else Statement?</h3>
      <p>The <strong>if-else</strong> statement is used for decision making in Python. It evaluates a condition and executes one of two blocks of code.</p>
      <ul>
        <li>If the condition is <strong>True</strong>, the <strong>if</strong> block is executed.</li>
        <li>If the condition is <strong>False</strong>, the <strong>else</strong> block is executed.</li>
      </ul>
      <p>This allows a program to take different actions based on conditions.</p>

      <h3>Syntax</h3>
      <div class="code-example"><pre><code>if condition:
    statement
else:
    statement</code></pre></div>
      <p>Only one block executes depending on whether the condition is <code>True</code> or <code>False</code>.</p>

      <h3>Example</h3>
      <div class="code-example"><pre><code>age = int(input("Enter Age: "))

if age >= 18:
    print("You are eligible for vote")
else:
    print("You are not eligible for vote")</code></pre></div>

      <h4>Output (if age = 16):</h4>
      <div class="code-example"><pre><code>You are not eligible for vote</code></pre></div>
    `
  },

  'if-elif-else': {
    title: 'Python if-elif-else Statement (Ladder)',
    html: `
      <h2>Python if-elif-else Statement</h2>
      <img src="assets/Slide7.JPG" alt="if-elif-else Ladder" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What is an if-elif-else Statement?</h3>
      <p>The <strong>if-elif-else</strong> statement is a multi-decision making construct in Python. It allows a program to check multiple conditions sequentially.</p>
      <ul>
        <li>If the first condition is <strong>True</strong>, its block is executed.</li>
        <li>If it is <strong>False</strong>, Python checks the next condition using <strong>elif</strong>.</li>
        <li>If none of the conditions are true, the <strong>else</strong> block executes.</li>
      </ul>
      <p>This structure is called an <strong>if-elif-else ladder</strong>.</p>

      <h3>Syntax</h3>
      <div class="code-example"><pre><code>if condition1:
    statement1
    statement2
elif condition2:
    statement1
    statement2
else:
    statement1
    statement2</code></pre></div>
      <p>Conditions are checked from top to bottom, and only the first true block is executed.</p>

      <h3>Example</h3>
      <div class="code-example"><pre><code>num = int(input("Enter Number: "))

if num > 0:
    print("You entered positive number")
elif num < 0:
    print("You entered negative number")
else:
    print("You entered zero")</code></pre></div>

      <h4>Output (if num = -5):</h4>
      <div class="code-example"><pre><code>You entered negative number</code></pre></div>
    `
  },

  'nested-if': {
    title: 'Python Nested if-else Statements',
    html: `
      <h2>Python Nested if-else Statements</h2>
      <img src="assets/Slide8.JPG" alt="Nested if-else" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What are Nested if-else Statements?</h3>
      <p>A <strong>nested if</strong> statement is an if-else statement placed inside another if or else block. It allows a program to check for further conditions only when an outer condition is met.</p>
      <p>This creates a <strong>hierarchy of decision-making</strong>, enabling more complex logic within a single structure.</p>

      <h3>Example</h3>
      <div class="code-example"><pre><code>num = int(input("Enter Number: "))

if num <= 0:
    if num < 0:
        print("You entered Negative number")
    else:
        print("You entered Zero")
else:
    print("You entered Positive number")</code></pre></div>

      <h4>Output (if num = -3):</h4>
      <div class="code-example"><pre><code>You entered Negative number</code></pre></div>

      <p><strong>Note:</strong> Inner blocks are indented to show their relationship to the outer blocks.</p>
    `
  },

  'largest-of-three': {
    title: 'Example: Finding the Largest of Three Numbers',
    html: `
      <h2>Finding the Largest of Three Numbers</h2>
      <img src="assets/Slide9.JPG" alt="Largest of Three Numbers" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>Problem</h3>
      <p>Write a Python program to find the largest number among three input numbers.</p>
      <p>The program uses <code>if-elif-else</code> conditional statements to compare the values and determine the largest number.</p>

      <h3>Python Program</h3>
      <div class="code-example"><pre><code>x = int(input("Enter First Number: "))
y = int(input("Enter Second Number: "))
z = int(input("Enter Third Number: "))

if (x >= y and x >= z):
    largest = x
elif (y >= x and y >= z):
    largest = y
else:
    largest = z

print(f"The largest number is: {largest}")</code></pre></div>

      <h4>Sample Output:</h4>
      <div class="code-example"><pre><code>Enter First Number: 15
Enter Second Number: 22
Enter Third Number: 18
The largest number is: 22</code></pre></div>
    `
  },

  'loops-overview': {
    title: 'Python Iteration Statements (Loops)',
    html: `
      <h2>Python Iteration Statements (Loops)</h2>
      <img src="assets/Slide10.JPG" alt="Loops Overview" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What are Iteration Statements?</h3>
      <p><strong>Iteration statements (loops)</strong> are used to execute a block of statements repeatedly based on a condition.</p>
      <ul>
        <li>The repetition continues as long as the condition evaluates to <strong>True</strong>.</li>
        <li>When the condition becomes <strong>False</strong>, the loop stops and the program continues with the next statement.</li>
      </ul>
      <p>Loops help <strong>automate tasks</strong> that require repeated execution of code.</p>

      <h3>Types of Loops in Python</h3>
      <ul>
        <li><strong>while loop</strong> – repeats while condition is true</li>
        <li><strong>for loop</strong> – iterates over sequences</li>
      </ul>

      <img src="assets/Slide11.JPG" alt="Four Parts of a Loop" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>Four Essential Parts of a Loop</h3>
      <ul>
        <li><strong>Initialization</strong> of control variable – Set the starting value</li>
        <li><strong>Condition testing</strong> – Check if the loop should continue</li>
        <li><strong>Body of loop</strong> – Statements that are executed repeatedly</li>
        <li><strong>Increment/Decrement</strong> – Update the control variable to eventually terminate the loop</li>
      </ul>
      <p>These four components ensure proper loop execution and prevent infinite loops.</p>
    `
  },

  'while-loop': {
    title: 'Python while Loop',
    html: `
      <h2>Python while Loop</h2>
      <img src="assets/Slide12.JPG" alt="while Loop" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What is a while loop?</h3>
      <p>The <strong>while loop</strong> is a conditional construct that executes a block of statements repeatedly as long as the given condition remains <strong>True</strong>. Whenever the condition becomes <strong>False</strong>, the loop terminates.</p>

      <h3>Syntax</h3>
      <div class="code-example"><pre><code>initialization of control variable
while (condition):
    statement
    updation in control variable</code></pre></div>

      <h3>Example: Print 1 to 10</h3>
      <div class="code-example"><pre><code>num = 1    # initialization
while(num <= 10):    # condition testing
    print(num, end=' ')    # Body of loop
    num += 1    # Increment</code></pre></div>

      <h4>Output:</h4>
      <div class="code-example"><pre><code>1 2 3 4 5 6 7 8 9 10</code></pre></div>

      <img src="assets/Slide13.JPG" alt="Sum of Numbers using while Loop" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>Example: Sum of Numbers from 1 to 10</h3>
      <div class="code-example"><pre><code>num = 1
sum = 0

while num <= 10:
    sum += num
    num += 1

print("The Sum of 1-10 numbers:", sum)</code></pre></div>

      <h4>Output:</h4>
      <div class="code-example"><pre><code>The Sum of 1-10 numbers: 55</code></pre></div>
    `
  },

  'range-function': {
    title: 'Python range() Function',
    html: `
      <h2>Python range() Function</h2>
      <h3>What is range()?</h3>
      <p>The <strong>range()</strong> function in Python returns a sequence of numbers.</p>
      <p>By default:</p>
      <ul>
        <li>Starts at <strong>0</strong></li>
        <li>Increments by <strong>1</strong></li>
        <li>Ends <strong>before</strong> the specified stop value</li>
      </ul>

      <h3>General Format</h3>
      <p><code>range(start, stop, step)</code></p>
      <ul>
        <li><strong>start</strong> → starting number (optional, default = 0)</li>
        <li><strong>stop</strong> → end number (exclusive, required)</li>
        <li><strong>step</strong> → increment/decrement (optional, default = 1)</li>
      </ul>
      <img src="assets/Slide14.JPG" alt="range Function" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />
      <img src="assets/Slide15.JPG" alt="range Examples" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>Examples of range()</h3>
      <div class="code-example"><pre><code>range(5)           → 0, 1, 2, 3, 4
range(2, 5)        → 2, 3, 4
range(1, 10, 2)    → 1, 3, 5, 7, 9
range(5, 0, -1)    → 5, 4, 3, 2, 1
range(0, -5)       → [] (empty list, default step = +1)
range(0, -5, -1)   → 0, -1, -2, -3, -4
range(-5, 1, 1)    → -5, -4, -3, -2, -1, 0</code></pre></div>

      <h3>Using range() with list()</h3>
      <div class="code-example"><pre><code>L = list(range(1, 20, 2))
print(L)
# Output: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]</code></pre></div>
    `
  },

  'for-loop': {
    title: 'Python for Loop',
    html: `
      <h2>Python for Loop</h2>
      <img src="assets/Slide16.JPG" alt="for Loop" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What is a for Loop?</h3>
      <p>The <strong>for loop</strong> is used to iterate over a sequence such as a list, tuple, string, or range.</p>
      <ul>
        <li>Executes a block of statements <strong>once</strong> for each element in the sequence</li>
        <li>Commonly used for counting, traversing lists, or performing repeated operations</li>
      </ul>

      <h3>Examples</h3>
      <div class="code-example"><pre><code># Example 1: Print numbers 1 to 10
for num in range(1, 11, 1):
    print(num, end=" ")
# Output: 1 2 3 4 5 6 7 8 9 10

# Example 2: Print numbers 10 to 1
for num in range(10, 0, -1):
    print(num, end=" ")
# Output: 10 9 8 7 6 5 4 3 2 1</code></pre></div>
      <p><strong>Note:</strong> <code>end=" "</code> prints numbers on the same line.</p>

      <img src="assets/Slide17.JPG" alt="for Loop Iterating Sequences" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>Iterating Over Lists and Strings</h3>
      <div class="code-example"><pre><code># Example 1: Iterate over a list
fruits = ["mango", "apple", "grapes", "cherry"]
for x in fruits:
    print(x)
# Output:
# mango
# apple
# grapes
# cherry

# Example 2: Iterate over a string
for x in "TIGER":
    print(x)
# Output:
# T
# I
# G
# E
# R</code></pre></div>

      <img src="assets/Slide18.JPG" alt="for Loop else and Nested" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>Using else with for Loop</h3>
      <p>The <strong>else</strong> block in a for loop executes after the loop finishes normally (without a <code>break</code>).</p>
      <div class="code-example"><pre><code>for x in range(4):
    print(x, end=" ")
else:
    print("\\nFinally finished!")
# Output:
# 0 1 2 3
# Finally finished!</code></pre></div>

      <h3>Nested Loops (Loop inside a Loop)</h3>
      <p>A <strong>nested loop</strong> is a loop inside another loop. It allows iteration over multiple sequences or multi-dimensional data.</p>
      <div class="code-example"><pre><code>city = ["Jaipur", "Delhi", "Mumbai"]
fruits = ["apple", "mango", "cherry"]
for x in city:
    for y in fruits:
        print(x, ":", y)</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>Jaipur : apple
Jaipur : mango
Jaipur : cherry
Delhi : apple
Delhi : mango
Delhi : cherry
Mumbai : apple
Mumbai : mango
Mumbai : cherry</code></pre></div>
    `
  },

  'loop-control': {
    title: 'Python Loop Control Statements',
    html: `
      <h2>Python Loop Control Statements</h2>
      <img src="assets/Slide19.JPG" alt="Loop Control Statements" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What are Loop Control Statements?</h3>
      <p><strong>Loop control statements</strong> in Python are special statements that help manage the execution of loops (for or while).</p>
      <p>They allow you to modify the default behavior of a loop:</p>
      <ul>
        <li>Stop it <strong>early</strong></li>
        <li><strong>Skip</strong> an iteration</li>
        <li><strong>Do nothing</strong> temporarily</li>
      </ul>

      <h3>Python Supports Three Control Statements</h3>
      <ul>
        <li><strong>break</strong> – exits the loop immediately</li>
        <li><strong>continue</strong> – skips the current iteration and moves to the next</li>
        <li><strong>pass</strong> – acts as a placeholder; does nothing</li>
      </ul>
    `
  },

  'break-statement': {
    title: 'Python break Statement',
    html: `
      <h2>Python break Statement</h2>
      <img src="assets/Slide20.JPG" alt="break Statement" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What is break?</h3>
      <p>The <strong>break</strong> statement in Python is used to exit a loop prematurely, whether it is a for loop or while loop.</p>

      <h3>Key Points</h3>
      <ul>
        <li>Stops the loop <strong>immediately</strong></li>
        <li>Control moves to the <strong>next statement</strong> after the loop</li>
        <li>Useful to end iteration <strong>early</strong> when a condition is met</li>
      </ul>

      <h3>Examples</h3>
      <div class="code-example"><pre><code># For Loop Example
for i in range(5):
    if i == 3:
        break  # Exit the loop
    print(i)
# Output:
# 0
# 1
# 2

# While Loop Example
i = 0
while i < 5:
    if i == 3:
        break  # Exit the loop
    print(i)
    i += 1
# Output:
# 0
# 1
# 2</code></pre></div>
      <p><strong>Note:</strong> <code>break</code> prevents further iteration once the condition is True.</p>
    `
  },

  'continue-statement': {
    title: 'Python continue Statement',
    html: `
      <h2>Python continue Statement</h2>
      <img src="assets/Slide21.JPG" alt="continue Statement" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What is continue?</h3>
      <p>The <strong>continue</strong> statement in Python is a loop control statement that skips the rest of the code inside the loop for the current iteration and proceeds to the next iteration.</p>

      <h3>Key Points</h3>
      <ul>
        <li>Only affects the <strong>current iteration</strong></li>
        <li>The loop <strong>continues</strong> running for remaining elements</li>
        <li>Useful to skip certain conditions without terminating the loop</li>
      </ul>

      <h3>Examples</h3>
      <div class="code-example"><pre><code># For Loop Example
for i in range(5):
    if i == 3:
        continue  # Skip iteration when i = 3
    print(i)
# Output:
# 0
# 1
# 2
# 4

# While Loop Example
count = 0
while count < 5:
    count += 1
    if count == 3:
        continue  # Skip iteration when count = 3
    print(count)
# Output:
# 1
# 2
# 4
# 5</code></pre></div>
      <p><strong>Note:</strong> <code>continue</code> skips only the current iteration, unlike <code>break</code> which stops the loop entirely.</p>
    `
  },

  'pass-statement': {
    title: 'Python pass Statement',
    html: `
      <h2>Python pass Statement</h2>
      <img src="assets/Slide22.JPG" alt="pass Statement" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What is pass?</h3>
      <p>The <strong>pass</strong> statement in Python is a <strong>null operation</strong> or placeholder.</p>
      <ul>
        <li>Does <strong>nothing</strong> when executed</li>
        <li>Used when a statement is <strong>syntactically required</strong> but you don't want any code to run</li>
        <li>Helps maintain program <strong>structure</strong></li>
      </ul>

      <h3>Examples</h3>
      <div class="code-example"><pre><code># For Loop Example
for i in range(5):
    if i == 3:
        pass  # Placeholder for future code
    print(i)
# Output:
# 0
# 1
# 2
# 3
# 4

# While Loop Example
count = 0
while count < 5:
    count += 1
    if count == 3:
        pass  # Placeholder for future code; does nothing
    print(f"Current count: {count}")
# Output:
# Current count: 1
# Current count: 2
# Current count: 3
# Current count: 4
# Current count: 5</code></pre></div>
      <p><strong>Note:</strong> <code>pass</code> does not affect loop execution; it is only a syntactic placeholder.</p>
    `
  },

  'functions-overview': {
    title: 'Functions in Python',
    html: `
      <h2>Functions in Python</h2>
      <img src="assets/Slide23.JPG" alt="Functions Overview" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What is a Function?</h3>
      <ul>
        <li>A <strong>reusable block</strong> of code that performs a specific task</li>
        <li>Executes only when it is <strong>called</strong></li>
        <li>Helps avoid repetition (<strong>DRY</strong> principle)</li>
        <li>Allows reuse of the same code with <strong>different inputs</strong></li>
      </ul>

      <img src="assets/Slide24.JPG" alt="Types of Functions" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>Types of Functions in Python</h3>
      <ul>
        <li><strong>Built-in Functions:</strong> <code>print()</code>, <code>len()</code>, <code>type()</code>, <code>id()</code>, <code>sorted()</code></li>
        <li><strong>User-Defined Functions:</strong> <code>def function_name()</code> – Custom tasks, reusable code, specific logic</li>
        <li><strong>Lambda Functions:</strong> <code>lambda x, y: x + y</code> – Anonymous, one-line expression, inline use</li>
        <li><strong>Specialized Functions:</strong> Recursive Functions, Nested/Inner Functions, Closures</li>
      </ul>

      <h3>Why Use Functions?</h3>
      <ul>
        <li><strong>Code Reusability</strong> – Write once, use multiple times</li>
        <li><strong>Modularity</strong> – Break complex problems into smaller parts</li>
        <li><strong>Readability</strong> – Code becomes easier to understand</li>
        <li><strong>Maintainability</strong> – Easier to update and debug</li>
      </ul>
    `
  },

  'defining-calling-functions': {
    title: 'Defining and Calling a Function',
    html: `
      <h2>Defining and Calling a Function in Python</h2>
      <img src="assets/Slide25.JPG" alt="Defining and Calling Functions" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>Defining a Function</h3>
      <ul>
        <li>Use the <strong>def</strong> keyword to define a function</li>
        <li>A function can take <strong>parameters</strong> as input</li>
        <li>Contains statements inside the <strong>function body</strong></li>
        <li>May <strong>return</strong> a value using <code>return</code></li>
      </ul>

      <h3>Calling a Function</h3>
      <ul>
        <li>Call a function using its <strong>name</strong></li>
        <li>Use <strong>parentheses ()</strong> after the function name</li>
        <li>Executes the <strong>function code</strong></li>
      </ul>

      <h3>Syntax</h3>
      <div class="code-example"><pre><code>def function_name(parameters):
    # statements
    return expression</code></pre></div>

      <h3>Example</h3>
      <div class="code-example"><pre><code>def yvumba():
    print("Welcome to YVU MBA")

yvumba()</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>Welcome to YVU MBA</code></pre></div>
    `
  },

  'return-statement': {
    title: 'Return Statement in Python Functions',
    html: `
      <h2>Return Statement in Python Functions</h2>
      <img src="assets/Slide26.JPG" alt="Return Statement" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What is return?</h3>
      <ul>
        <li>Ends the <strong>execution</strong> of a function</li>
        <li>Sends a <strong>value</strong> back to the caller</li>
        <li>Can <strong>return</strong> any data type</li>
        <li>Can <strong>return</strong> multiple values (as a tuple)</li>
        <li><strong>Returns None</strong> if no value is specified</li>
      </ul>

      <h3>Syntax</h3>
      <div class="code-example"><pre><code>return [expression]</code></pre></div>

      <h3>Example</h3>
      <div class="code-example"><pre><code>def sq_value(num):
    """Returns square of number"""
    return num**2

print(sq_value(2))
print(sq_value(-4))</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>4
16</code></pre></div>
      <p><strong>Note:</strong> <code>return</code> sends the result back instead of just printing it.</p>
    `
  },

  'assign-functions-to-variables': {
    title: 'Assigning Functions to Variables',
    html: `
      <h2>Assigning Functions to Variables in Python</h2>
      <img src="assets/Slide27.JPG" alt="Assigning Functions to Variables" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>Functions as First-Class Objects</h3>
      <ul>
        <li>Functions can be <strong>assigned</strong> to variables</li>
        <li>Functions can be <strong>passed</strong> as <strong>arguments</strong></li>
        <li>Functions can be <strong>returned</strong> from other functions</li>
        <li>Enables <strong>flexible</strong> and <strong>reusable</strong> code</li>
      </ul>

      <h3>Key Idea</h3>
      <p>A function can be called using a <strong>variable name</strong>.</p>

      <h3>Example</h3>
      <div class="code-example"><pre><code>def a():
    print("GFG")

var = a
var()</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>GFG</code></pre></div>
      <p><strong>Note:</strong> <code>var</code> refers to the function, not the result of the function.</p>
    `
  },

  'function-arguments': {
    title: 'Function Arguments in Python',
    html: `
      <h2>Function Arguments in Python</h2>
      <h3>What are Arguments?</h3>
      <ul>
        <li><strong>Arguments</strong> are values passed inside function parentheses</li>
        <li>Used to provide <strong>input</strong> to functions</li>
        <li>A function can have <strong>multiple</strong> arguments separated by commas</li>
      </ul>

      <h3>Syntax</h3>
      <div class="code-example"><pre><code>def function_name(parameters):
    """Docstring"""
    # body of the function
    return expression</code></pre></div>

      <h3>Example: Even or Odd</h3>
      <div class="code-example"><pre><code>def evenOdd(x):
    if (x % 2 == 0):
        return "Even"
    else:
        return "Odd"

print(evenOdd(16))
print(evenOdd(7))</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>Even
Odd</code></pre></div>
    `
  },

  'types-of-arguments': {
    title: 'Types of Arguments',
    html: `
      <h2>Types of Arguments</h2>
      <img src="assets/Slide29.JPG" alt="Types of Arguments" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>1. Positional Arguments</h3>
      <p>Assigned based on their <strong>position</strong> in the call.</p>
      <div class="code-example"><pre><code>def greet(name, age):
    print(name, age)

greet("Alice", 25)</code></pre></div>

      <h3>2. Keyword Arguments</h3>
      <p>Assigned by <strong>parameter name</strong>, out of order.</p>
      <div class="code-example"><pre><code>def describe_pet(animal, name):
    print(name, animal)

describe_pet(name="Buddy", animal="Dog")</code></pre></div>

      <h3>3. Default Arguments</h3>
      <p>Have <strong>predefined values</strong>, used if omitted.</p>
      <div class="code-example"><pre><code>def multiply(a, b=2):
    print(a * b)

multiply(5)      # 10
multiply(5, 3)   # 15</code></pre></div>

      <h3>4. Variable Length Arguments (*args)</h3>
      <p>Handle an <strong>arbitrary number</strong> of positional arguments.</p>
      <div class="code-example"><pre><code>def sum_all(*args):
    print(sum(args))

sum_all(1, 2, 3)  # 6
sum_all(1, 2, 3, 4, 5)  # 15</code></pre></div>

      <h3>5. Variable Length Keyword Arguments (**kwargs)</h3>
      <p>Handle an <strong>arbitrary number</strong> of keyword arguments.</p>
      <div class="code-example"><pre><code>def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(x=18, y=29)
# Output:
# x: 18
# y: 29</code></pre></div>
    `
  },

  'positional-arguments': {
    title: 'Positional Arguments in Python',
    html: `
      <h2>Positional Arguments in Python</h2>
      <img src="assets/Slide30.JPG" alt="Positional Arguments" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What are Positional Arguments?</h3>
      <ul>
        <li>Values are assigned based on their <strong>position</strong></li>
        <li><strong>Order</strong> of arguments must match parameters</li>
        <li>Changing <strong>order</strong> changes the output</li>
        <li>Important for correct function execution</li>
      </ul>

      <h3>Example</h3>
      <div class="code-example"><pre><code>def nameAge(name, age):
    print("Hi, I am", name)
    print("My age is", age)

print("Case-1:")
nameAge("Suraj", 27)

print("\\nCase-2:")
nameAge(27, "Suraj")</code></pre></div>

      <h4>Output:</h4>
      <div class="code-example"><pre><code>Case-1:
Hi, I am Suraj
My age is 27

Case-2:
Hi, I am 27
My age is Suraj</code></pre></div>
    `
  },

  'keyword-arguments': {
    title: 'Keyword Arguments in Python',
    html: `
      <h2>Keyword Arguments in Python</h2>
      <img src="assets/Slide31.JPG" alt="Keyword Arguments" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What are Keyword Arguments?</h3>
      <ul>
        <li>Values are passed using <strong>parameter names</strong></li>
        <li><strong>Order of arguments does not matter</strong></li>
        <li>Improves <strong>clarity</strong> and <strong>readability</strong></li>
        <li>Reduces <strong>errors</strong> in function calls</li>
      </ul>

      <h3>Example</h3>
      <div class="code-example"><pre><code>def student(fname, lname):
    print(fname, lname)

student(fname='Abdul', lname='Gaffar')
student(lname='Gaffar', fname='Abdul')</code></pre></div>

      <h4>Output:</h4>
      <div class="code-example"><pre><code>Abdul Gaffar
Abdul Gaffar</code></pre></div>
      <p><strong>Same output even when order is changed</strong></p>
    `
  },

  'default-arguments': {
    title: 'Default Arguments in Python',
    html: `
      <h2>Default Arguments in Python</h2>
      <img src="assets/Slide32.JPG" alt="Default Arguments" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What are Default Arguments?</h3>
      <ul>
        <li>A <strong>default argument</strong> has a predefined value</li>
        <li>Used when <strong>no value</strong> is provided during function call</li>
        <li>Makes parameters <strong>optional</strong></li>
        <li>Helps avoid errors and simplifies function usage</li>
      </ul>

      <h3>Example</h3>
      <div class="code-example"><pre><code>def myFun(x, y=50):
    print("x:", x)
    print("y:", y)

myFun(10)</code></pre></div>

      <h4>Output:</h4>
      <div class="code-example"><pre><code>x: 10
y: 50</code></pre></div>
      <p><strong>y takes default value since it is not passed</strong></p>
    `
  },

  'arbitrary-arguments': {
    title: 'Arbitrary Arguments in Python',
    html: `
      <h2>Arbitrary Arguments in Python</h2>

      <h3>1. What are Arbitrary Arguments?</h3>
      <ul>
        <li>Allow a function to accept a <strong>variable number</strong> of inputs</li>
        <li>Useful when the number of arguments is <strong>unknown</strong></li>
        <li>Makes function design more <strong>flexible</strong></li>
      </ul>

      <h3>2. Types</h3>
      <ul>
        <li><strong>*args</strong> – Collects extra <strong>positional</strong> arguments, stored as a <strong>tuple</strong></li>
        <li><strong>**kwargs</strong> – Collects extra <strong>keyword</strong> arguments, stored as a <strong>dictionary</strong></li>
      </ul>

      <h3>3. Purpose</h3>
      <ul>
        <li>Makes functions more <strong>flexible</strong></li>
        <li>Allows handling <strong>multiple inputs</strong> dynamically</li>
      </ul>
    `
  },

  'args-parameter': {
    title: 'Non-Keyword Arguments – *args in Python',
    html: `
      <h2>Non-Keyword Arguments – *args in Python</h2>

      <h3>What is *args?</h3>
      <ul>
        <li>Allows a function to accept <strong>any number</strong> of positional arguments</li>
        <li>Arguments are passed <strong>without parameter names</strong></li>
        <li>All values are stored as a <strong>tuple</strong></li>
        <li>Useful when number of inputs is <strong>unknown</strong></li>
      </ul>

      <h3>Examples</h3>
      <div class="code-example"><pre><code># Example 1: Printing Values
def myFun(*args):
    for arg in args:
        print(arg)

myFun('Hello', 'Welcome', 'to', 'Python')
# Output:
# Hello
# Welcome
# to
# Python

# Example 2: Multiplication
def multiply(*args):
    result = 1
    for num in args:
        result *= num
    return result

print(multiply(2, 3, 4))  # 24</code></pre></div>
      <p><strong>*args enables handling multiple values dynamically</strong></p>
    `
  },

  'kwargs-parameter': {
    title: 'Keyword Arguments – **kwargs in Python',
    html: `
      <h2>Keyword Arguments – **kwargs in Python</h2>

      <h3>What is **kwargs?</h3>
      <ul>
        <li>Allows a function to accept <strong>any number</strong> of keyword arguments</li>
        <li>Arguments are passed in the form <strong>key = value</strong></li>
        <li>Values are stored in a <strong>dictionary</strong></li>
        <li>Useful for handling <strong>named inputs</strong> dynamically</li>
      </ul>

      <h3>Examples</h3>
      <div class="code-example"><pre><code># Example 1: Using kwargs
def fun(**kwargs):
    for key, val in kwargs.items():
        print(key, "=", val)

fun(s1='Python', s2='is', s3='Awesome')
# Output:
# s1 = Python
# s2 = is
# s3 = Awesome

# Example 2: Using Both *args and **kwargs
def student_info(*args, **kwargs):
    print("Subjects:", args)
    print("Details:", kwargs)

student_info("Math", "Science", "English", Name="Alice", Age=20, City="New York")
# Output:
# Subjects: ('Math', 'Science', 'English')
# Details: {'Name': 'Alice', 'Age': 20, 'City': 'New York'}</code></pre></div>
      <p><strong>*args</strong> handles positional values, <strong>**kwargs</strong> handles named values</p>
    `
  },

  'lambda-functions': {
    title: 'Anonymous Functions (Lambda) in Python',
    html: `
      <h2>Anonymous Functions (Lambda) in Python</h2>

      <h3>What are Anonymous Functions?</h3>
      <ul>
        <li>Functions <strong>without a name</strong></li>
        <li>Created using the <strong>lambda</strong> keyword</li>
        <li>Used for <strong>short, simple</strong> operations</li>
        <li>Typically written in a <strong>single line</strong></li>
        <li>Useful when a function is needed <strong>temporarily</strong></li>
      </ul>

      <h3>Example</h3>
      <div class="code-example"><pre><code># Without lambda
def cube(x):
    return x*x*x

# With lambda
cube_1 = lambda x: x*x*x

print(cube(7))
print(cube_1(7))</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>343
343</code></pre></div>
      <p>Both functions give the same result, but <strong>lambda</strong> is shorter.</p>
    `
  },

  'recursive-functions': {
    title: 'Recursive Functions in Python',
    html: `
      <h2>Recursive Functions in Python</h2>
      <img src="assets/Slide37.JPG" alt="Recursive Functions" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What is Recursion?</h3>
      <ul>
        <li>A function that <strong>calls itself</strong> to solve a problem</li>
        <li>Breaks a problem into <strong>smaller subproblems</strong></li>
        <li>Commonly used in mathematical and divide-and-conquer problems</li>
        <li>Must include a <strong>base case</strong> to stop recursion</li>
        <li>Without a base case, it leads to <strong>infinite recursion</strong></li>
      </ul>

      <img src="assets/Slide38.JPG" alt="Core Concept of Recursion" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>Core Concept</h3>
      <p><strong>Recursion is a technique where a function solves a problem by calling itself on smaller inputs until it reaches a base case.</strong></p>

      <h3>Example: Factorial</h3>
      <div class="code-example"><pre><code>def factorial(n):
    if n == 0:
        return 1  # Base case
    else:
        return n * factorial(n - 1)

print(factorial(4))</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>24</code></pre></div>
      <p><strong>Function keeps calling itself until <code>base case (n == 0)</code> is reached</strong></p>
    `
  },

  'nested-functions': {
    title: 'Function within Functions (Nested Functions)',
    html: `
      <h2>Function within Functions (Nested Functions)</h2>
      <img src="assets/Slide39.JPG" alt="Nested Functions" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>What are Nested Functions?</h3>
      <ul>
        <li>A function defined <strong>inside another function</strong></li>
        <li>Also called an <strong>inner</strong> or <strong>nested function</strong></li>
        <li>Can access variables from the <strong>outer (enclosing) function</strong></li>
        <li>Helps organize and <strong>protect</strong> logic</li>
        <li>Improves code <strong>structure</strong> and <strong>readability</strong></li>
      </ul>

      <h3>Example</h3>
      <div class="code-example"><pre><code>def f1():
    s = 'I love GeeksforGeeks'
    def f2():
        print(s)
    f2()

f1()</code></pre></div>
      <h4>Output:</h4>
      <div class="code-example"><pre><code>I love GeeksforGeeks</code></pre></div>
      <p><strong>Note:</strong> Inner function can access outer function variables (closure concept).</p>
    `
  },

  'variable-scope': {
    title: 'Scope of Variables in Python (LEGB Rule)',
    html: `
      <h2>Scope of Variables in Python (LEGB Rule)</h2>
      <img src="assets/Slide40.JPG" alt="LEGB Rule" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>1. What is Variable Scope?</h3>
      <ul>
        <li>Scope defines <strong>where</strong> a variable can be accessed</li>
        <li>Determines the <strong>visibility</strong> of variables in a program</li>
        <li>Python follows a specific order to search for variables</li>
      </ul>

      <h3>2. LEGB Rule</h3>
      <ul>
        <li><strong>L</strong> → <strong>Local</strong> (inside a function)</li>
        <li><strong>E</strong> → <strong>Enclosing</strong> (inside outer function)</li>
        <li><strong>G</strong> → <strong>Global</strong> (entire script)</li>
        <li><strong>B</strong> → <strong>Built-in</strong> (Python reserved names)</li>
      </ul>

      <h3>3. Key Idea</h3>
      <p>Python searches variables in this order:</p>
      <p><strong>Local → Enclosing → Global → Built-in</strong></p>

      <h3>Types of Variable Scope</h3>

      <h4>1. Local Variables</h4>
      <p>Defined inside a function, accessible only within that function.</p>
      <div class="code-example"><pre><code>def test():
    x = 10
    print(x)

test()</code></pre></div>

      <h4>2. Global Variables</h4>
      <p>Defined <strong>outside</strong> all functions, accessible throughout the program.</p>
      <div class="code-example"><pre><code>x = 20

def show():
    print(x)

show()</code></pre></div>

      <h4>3. Nonlocal Variables</h4>
      <p>Used in <strong>nested</strong> functions, refers to variables in the outer function.</p>
      <div class="code-example"><pre><code>def outer():
    x = 5
    def inner():
        nonlocal x
        x = 10
    inner()
    print(x)

outer()  # Output: 10</code></pre></div>

      <h3>Modifying Variable Scope with Keywords</h3>

      <h4>1. global Keyword</h4>
      <p>Used to modify global variables inside a function.</p>
      <div class="code-example"><pre><code>global x
# Allows access to variables defined outside the function</code></pre></div>

      <h4>2. nonlocal Keyword</h4>
      <p>Used to modify variables in the <strong>enclosing (outer) function</strong>.</p>
      <p>Works only with <strong>nested functions</strong>.</p>

      <div class="code-example"><pre><code>def outer():
    x = 5
    def inner():
        nonlocal x
        x = 15
    inner()
    print(x)

outer()  # Output: 15</code></pre></div>
    `
  }
});

// ---- Navigation & availability control for this section ----
topicOrder.push(
  'control-flow-overview',
  'decision-making',
  'if-statement',
  'if-else-statement',
  'if-elif-else',
  'nested-if',
  'largest-of-three',
  'loops-overview',
  'while-loop',
  'range-function',
  'for-loop',
  'loop-control',
  'break-statement',
  'continue-statement',
  'pass-statement',
  'functions-overview',
  'defining-calling-functions',
  'return-statement',
  'assign-functions-to-variables',
  'function-arguments',
  'types-of-arguments',
  'positional-arguments',
  'keyword-arguments',
  'default-arguments',
  'arbitrary-arguments',
  'args-parameter',
  'kwargs-parameter',
  'lambda-functions',
  'recursive-functions',
  'nested-functions',
  'variable-scope'
);

Object.assign(unitMapping, {
  'control-flow-overview': 'Unit III',
  'decision-making': 'Unit III',
  'if-statement': 'Unit III',
  'if-else-statement': 'Unit III',
  'if-elif-else': 'Unit III',
  'nested-if': 'Unit III',
  'largest-of-three': 'Unit III',
  'loops-overview': 'Unit III',
  'while-loop': 'Unit III',
  'range-function': 'Unit III',
  'for-loop': 'Unit III',
  'loop-control': 'Unit III',
  'break-statement': 'Unit III',
  'continue-statement': 'Unit III',
  'pass-statement': 'Unit III',
  'functions-overview': 'Unit III',
  'defining-calling-functions': 'Unit III',
  'return-statement': 'Unit III',
  'assign-functions-to-variables': 'Unit III',
  'function-arguments': 'Unit III',
  'types-of-arguments': 'Unit III',
  'positional-arguments': 'Unit III',
  'keyword-arguments': 'Unit III',
  'default-arguments': 'Unit III',
  'arbitrary-arguments': 'Unit III',
  'args-parameter': 'Unit III',
  'kwargs-parameter': 'Unit III',
  'lambda-functions': 'Unit III',
  'recursive-functions': 'Unit III',
  'nested-functions': 'Unit III',
  'variable-scope': 'Unit III'
});

Object.assign(topicAvailability, {
  'control-flow-overview': true,
  'decision-making': true,
  'if-statement': true,
  'if-else-statement': true,
  'if-elif-else': true,
  'nested-if': true,
  'largest-of-three': true,
  'loops-overview': true,
  'while-loop': true,
  'range-function': true,
  'for-loop': true,
  'loop-control': true,
  'break-statement': true,
  'continue-statement': true,
  'pass-statement': true,
  'functions-overview': true,
  'defining-calling-functions': true,
  'return-statement': true,
  'assign-functions-to-variables': true,
  'function-arguments': true,
  'types-of-arguments': true,
  'positional-arguments': true,
  'keyword-arguments': true,
  'default-arguments': true,
  'arbitrary-arguments': true,
  'args-parameter': true,
  'kwargs-parameter': true,
  'lambda-functions': true,
  'recursive-functions': true,
  'nested-functions': true,
  'variable-scope': true
});

Object.assign(unitTopicsByName, {
  'Unit III': [
    'control-flow-overview',
    'decision-making',
    'if-statement',
    'if-else-statement',
    'if-elif-else',
    'nested-if',
    'largest-of-three',
    'loops-overview',
    'while-loop',
    'range-function',
    'for-loop',
    'loop-control',
    'break-statement',
    'continue-statement',
    'pass-statement',
    'functions-overview',
    'defining-calling-functions',
    'return-statement',
    'assign-functions-to-variables',
    'function-arguments',
    'types-of-arguments',
    'positional-arguments',
    'keyword-arguments',
    'default-arguments',
    'arbitrary-arguments',
    'args-parameter',
    'kwargs-parameter',
    'lambda-functions',
    'recursive-functions',
    'nested-functions',
    'variable-scope'
  ]
});

// Enable/disable this entire unit (Unit 3)
function enableUnit3() {
  [
    'control-flow-overview',
    'decision-making',
    'if-statement',
    'if-else-statement',
    'if-elif-else',
    'nested-if',
    'largest-of-three',
    'loops-overview',
    'while-loop',
    'range-function',
    'for-loop',
    'loop-control',
    'break-statement',
    'continue-statement',
    'pass-statement',
    'functions-overview',
    'defining-calling-functions',
    'return-statement',
    'assign-functions-to-variables',
    'function-arguments',
    'types-of-arguments',
    'positional-arguments',
    'keyword-arguments',
    'default-arguments',
    'arbitrary-arguments',
    'args-parameter',
    'kwargs-parameter',
    'lambda-functions',
    'recursive-functions',
    'nested-functions',
    'variable-scope'
  ].forEach(id => { topicAvailability[id] = true; });
  console.log('Enabled entire Unit 3');
}
function disableUnit3() {
  [
    'control-flow-overview',
    'decision-making',
    'if-statement',
    'if-else-statement',
    'if-elif-else',
    'nested-if',
    'largest-of-three',
    'loops-overview',
    'while-loop',
    'range-function',
    'for-loop',
    'loop-control',
    'break-statement',
    'continue-statement',
    'pass-statement',
    'functions-overview',
    'defining-calling-functions',
    'return-statement',
    'assign-functions-to-variables',
    'function-arguments',
    'types-of-arguments',
    'positional-arguments',
    'keyword-arguments',
    'default-arguments',
    'arbitrary-arguments',
    'args-parameter',
    'kwargs-parameter',
    'lambda-functions',
    'recursive-functions',
    'nested-functions',
    'variable-scope'
  ].forEach(id => { topicAvailability[id] = false; });
  console.log('Disabled entire Unit 3');
}