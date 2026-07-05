// Unit II — Operators, I/O & Strings
// This file defines the topic content for this section only.
// It merges into the global 'topics' object used by topic.js (topic-core.js).

Object.assign(topics, {
  'operators-overview': { 
    title: 'Operators',
    html: `
      <h2>Operators in Python</h2>
      <p>In Python programming, operators are special symbols or keywords that are used to perform operations on values and variables.</p>

      <h3>What is an Operator?</h3>
      <p>An operator is a special symbol such as: <code>+  -  *  /  //  %  **  ==  !=  &gt;  &lt;  &gt;=  &lt;=  and  or  not  is  in  &amp;  |  ^  ~  &lt;&lt;  &gt;&gt;</code>.</p>
      <p>These symbols tell Python to perform a specific operation.</p>

      <h3>What is an Operand?</h3>
      <p>An operand is the value or variable on which the operator acts.</p>

      <h3>Example</h3>
      <div class="code-example"><pre><code>5 + 3
# + is the operator
# 5 and 3 are operands
</code></pre></div>

      <p>So, operators perform operations on operands.</p>

      <h3>Types of Operators in Python</h3>
      <img src="assets/types-of-operators.png" alt="Types of operators" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <p>Python operators are categorized into several groups based on the type of operation they perform.</p>

      <ol>
        <li>
          <strong>Arithmetic Operators</strong><br>
          Used to perform mathematical calculations.<br>
          <em>Examples:</em> <code>+ (Addition), - (Subtraction), * (Multiplication), / (Division), // (Floor Division), % (Modulus), ** (Exponentiation)</code>
        </li>

        <li>
          <strong>Assignment Operators</strong><br>
          Used to assign values to variables.<br>
          <em>Examples:</em> <code>= (Simple assignment), +=, -=, *=, /= (Compound assignment), := (Walrus operator)</code>
        </li>

        <li>
          <strong>Comparison Operators</strong><br>
          Used to compare two values and determine relationships between them.<br>
          <em>Examples:</em> <code>== (Equal to), != (Not equal to), &gt; (&gt;), &lt; (&lt;), &gt;=, &lt;=</code>
        </li>

        <li>
          <strong>Logical Operators</strong><br>
          Used to combine conditional expressions.<br>
          <em>Examples:</em> <code>and, or, not</code>
        </li>

        <li>
          <strong>Identity Operators</strong><br>
          Used to check whether two variables refer to the same object.<br>
          <em>Examples:</em> <code>is, is not</code>
        </li>

        <li>
          <strong>Membership Operators</strong><br>
          Used to check whether a value exists within a sequence.<br>
          <em>Examples:</em> <code>in, not in</code>
        </li>

        <li>
          <strong>Bitwise Operators</strong><br>
          Used to perform operations at the binary (bit) level.<br>
          <em>Examples:</em> <code>&, |, ^, ~, &lt;&lt;, &gt;&gt;</code>
        </li>
      </ol>
    `
  },

  'arithmetic-operator': {
    title: 'Python Arithmetic Operators',
    html: `
        <h2>Python Arithmetic Operators</h2>
        <p>Python operators are fundamental for performing mathematical calculations...</p>
        
        <table>
            <thead>
                <tr>
                    <th>Operator</th>
                    <th>Description</th>
                    <th>Syntax</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>+</td>
                    <td>Addition: adds two operands</td>
                    <td>x + y</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>Subtraction: subtracts second operand from first</td>
                    <td>x - y</td>
                </tr>
                <tr>
                    <td>*</td>
                    <td>Multiplication: multiplies two operands</td>
                    <td>x * y</td>
                </tr>
                <tr>
                    <td>/</td>
                    <td>Division (float): divides and returns float</td>
                    <td>x / y</td>
                </tr>
                <tr>
                    <td>//</td>
                    <td>Division (floor): divides and returns floored quotient</td>
                    <td>x // y</td>
                </tr>
                <tr>
                    <td>%</td>
                    <td>Modulus: remainder of division</td>
                    <td>x % y</td>
                </tr>
                <tr>
                    <td>**</td>
                    <td>Exponentiation: first raised to power of second</td>
                    <td>x ** y</td>
                </tr>
            </tbody>
        </table>
        
        <h3>Addition Operator</h3>
        <div class="code-example">
            <pre><code>val1 = 2
val2 = 3

# using the addition operator
res = val1 + val2
print(res)
# Output:
# 5
</code></pre></div>
        
        <h3>Subtraction Operator</h3>
        <div class="code-example">
            <pre><code>val1 = 2
val2 = 3

res = val1 - val2
print(res)
# Output:
# -1
</code></pre></div>
        
        <h3>Multiplication Operator</h3>
        <div class="code-example">
            <pre><code>val1 = 2
val2 = 3

res = val1 * val2
print(res)
# Output:
# 6
</code></pre></div>
        
        <h3>Division Operators</h3>
        <div class="code-example">
            <pre><code>print(5/5)
print(10/2)
print(-10/2)
print(20.0/2)
# Output:
# 1.0
# 5.0
# -5.0
# 10.0
</code></pre></div>
        
        <h4>Floor (integer) division</h4>
        <div class="code-example">
            <pre><code>print(10//3)
print(-5//2)
print(5.0//2)
print(-5.0//2)
# Output:
# 3
# -3
# 2.0
# -3.0
</code></pre></div>
        
        <h3>Modulus Operator</h3>
        <div class="code-example">
            <pre><code>val1 = 3
val2 = 2

res = val1 % val2
print(res)
# Output:
# 1
</code></pre></div>
        
        <h3>Exponentiation Operator</h3>
        <div class="code-example">
            <pre><code>val1 = 2
val2 = 3

res = val1 ** val2
print(res)
# Output:
# 8
</code></pre></div>
    `
  },

  'assignment-overview': {
  title: 'Assignment Operators',
  html: `
    <h2>Assignment Operators in Python</h2>
    <p>
      Assignment operators are used to assign values to variables. Some assignment operators
      also perform calculations while assigning. They help write shorter and cleaner code.
    </p>

    <h3>1) Simple Assignment Operator (<code>=</code>)</h3>
    <p><code>=</code> assigns a value to a variable.</p>
    <p><strong>Syntax:</strong> <code>variable = value</code></p>
    <div class="code-example"><pre><code>a = 5
print(a)  # Output: 5
</code></pre></div>
    <ul>
      <li>Value <code>5</code> is assigned to variable <code>a</code></li>
      <li><code>a</code> now stores the value <code>5</code></li>
    </ul>

    <h3>2) Add and Assign (<code>+=</code>)</h3>
    <p><strong>Meaning:</strong> <code>a += 3</code> is same as <code>a = a + 3</code></p>
    <div class="code-example"><pre><code>a = 5
a += 3
print(a)  # Output: 8
</code></pre></div>
    <ul>
      <li>Initially <code>a = 5</code></li>
      <li><code>a += 3</code> means <code>a = 5 + 3</code></li>
      <li>New value becomes <code>8</code></li>
    </ul>

    <h3>3) Subtract and Assign (<code>-=</code>)</h3>
    <p><strong>Meaning:</strong> <code>a -= 2</code> is same as <code>a = a - 2</code></p>
    <div class="code-example"><pre><code>a = 5
a -= 2
print(a)  # Output: 3
</code></pre></div>

    <h3>4) Multiply and Assign (<code>*=</code>)</h3>
    <p><strong>Meaning:</strong> <code>a *= 2</code> is same as <code>a = a * 2</code></p>
    <div class="code-example"><pre><code>a = 5
a *= 2
print(a)  # Output: 10
</code></pre></div>

    <h3>5) Divide and Assign (<code>/=</code>)</h3>
    <p><strong>Meaning:</strong> <code>a /= 2</code> is same as <code>a = a / 2</code></p>
    <p><strong>Important:</strong> In Python 3, division results in a float.</p>
    <div class="code-example"><pre><code>a = 10
a /= 2
print(a)  # Output: 5.0
</code></pre></div>

    <h3>6) Modulus and Assign (<code>%=</code>)</h3>
    <p><strong>Meaning:</strong> <code>a %= b</code> is same as <code>a = a % b</code></p>
    <div class="code-example"><pre><code>a = 3
b = 5
a %= b
print(a)  # Output: 3
</code></pre></div>
    <ul>
      <li><code>3 % 5</code> gives remainder <code>3</code> (quotient 0, remainder 3)</li>
    </ul>

    <h3>Summary Table</h3>
    <table>
      <thead>
        <tr>
          <th>Operator</th>
          <th>Example</th>
          <th>Equivalent</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><code>=</code></td><td><code>a = 5</code></td><td>Assign value</td></tr>
        <tr><td><code>+=</code></td><td><code>a += 3</code></td><td><code>a = a + 3</code></td></tr>
        <tr><td><code>-=</code></td><td><code>a -= 2</code></td><td><code>a = a - 2</code></td></tr>
        <tr><td><code>*=</code></td><td><code>a *= 2</code></td><td><code>a = a * 2</code></td></tr>
        <tr><td><code>/=</code></td><td><code>a /= 2</code></td><td><code>a = a / 2</code></td></tr>
        <tr><td><code>%=</code></td><td><code>a %= b</code></td><td><code>a = a % b</code></td></tr>
      </tbody>
    </table>
  `
},

  'comparision-overview': {
  title: 'Comparision Operators (Relational Operators)',
  html: `
    <h2>Relational (Comparison) Operators</h2>
    <p>
      Relational operators (also called <strong>Comparison Operators</strong>) are used to compare two values.
      They always return a Boolean result: <code>True</code> or <code>False</code>.
    </p>

    <h3>Python supports comparison between</h3>
    <ul>
      <li>Numbers</li>
      <li>Strings</li>
      <li>Booleans</li>
    </ul>

    <p><strong>Note:</strong> String comparison is based on lexicographic (alphabetical) order.</p>

    <h3>Types of Relational Operators</h3>
    <table>
      <thead>
        <tr>
          <th>Operator</th>
          <th>Name</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><code>==</code></td><td>Equality</td><td><code>a == b</code></td></tr>
        <tr><td><code>!=</code></td><td>Inequality</td><td><code>a != b</code></td></tr>
        <tr><td><code>&gt;</code></td><td>Greater Than</td><td><code>a &gt; b</code></td></tr>
        <tr><td><code>&lt;</code></td><td>Less Than</td><td><code>a &lt; b</code></td></tr>
        <tr><td><code>&gt;=</code></td><td>Greater Than or Equal To</td><td><code>a &gt;= b</code></td></tr>
        <tr><td><code>&lt;=</code></td><td>Less Than or Equal To</td><td><code>a &lt;= b</code></td></tr>
      </tbody>
    </table>

    <h2>Examples</h2>

    <h3>1) Equality Operator (<code>==</code>)</h3>
    <p>Checks whether two values are exactly the same.</p>
    <div class="code-example"><pre><code>a = 9
b = 5
c = 9

print(a == b)  # Output: False
print(a == c)  # Output: True
</code></pre></div>

    <h3>2) Inequality Operator (<code>!=</code>)</h3>
    <p>Checks whether two values are not equal.</p>
    <div class="code-example"><pre><code>a = 9
b = 5
c = 9

print(a != b)  # Output: True
print(a != c)  # Output: False
</code></pre></div>

    <h3>3) Greater Than Operator (<code>&gt;</code>)</h3>
    <div class="code-example"><pre><code>a = 9
b = 5

print(a &gt; b)  # Output: True
print(b &gt; a)  # Output: False
</code></pre></div>

    <h3>4) Less Than Operator (<code>&lt;</code>)</h3>
    <div class="code-example"><pre><code>a = 9
b = 5

print(a &lt; b)  # Output: False
print(b &lt; a)  # Output: True
</code></pre></div>

    <h3>5) Greater Than or Equal To (<code>&gt;=</code>)</h3>
    <div class="code-example"><pre><code>a = 9
b = 5
c = 9

print(a &gt;= b)  # Output: True
print(a &gt;= c)  # Output: True
print(b &gt;= a)  # Output: False
</code></pre></div>

    <h3>6) Less Than or Equal To (<code>&lt;=</code>)</h3>
    <div class="code-example"><pre><code>a = 9
b = 5
c = 9

print(a &lt;= b)  # Output: False
print(a &lt;= c)  # Output: True
print(b &lt;= a)  # Output: True
</code></pre></div>

    

    <h2>Chaining Comparison Operators</h2>
    <p>Python allows multiple comparisons in a single statement (more readable and Pythonic).</p>

    <p>Instead of:</p>
    <div class="code-example"><pre><code>1 &lt; a and a &lt; 10</code></pre></div>

    <p>You can write:</p>
    <div class="code-example"><pre><code>1 &lt; a &lt; 10</code></pre></div>

    <h3>Examples of chaining</h3>
    <div class="code-example"><pre><code>a = 5

print(1 &lt; a &lt; 10)            # Output: True
print(10 &gt; a &lt;= 9)           # Output: True
print(5 != a &gt; 4)            # Output: False
print(a &lt; 10 &lt; a*10 == 50)    # Output: True
</code></pre></div>
  `
},

  'logical-overview': {
  title: 'Logical Operators',
  html: `
    <h2>Logical Operators in Python</h2>
    <p>
      Logical operators are used to combine conditional statements. They work with Boolean values
      (<code>True</code> and <code>False</code>). The output is always <code>True</code> or <code>False</code>.
    </p>

    <h3>Types of Logical Operators</h3>
    <table>
      <thead>
        <tr>
          <th>Operator</th>
          <th>Meaning</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>and</code></td>
          <td>Returns True if both conditions are True</td>
          <td><code>a &gt; 5 and a &lt; 10</code></td>
        </tr>
        <tr>
          <td><code>or</code></td>
          <td>Returns True if at least one condition is True</td>
          <td><code>a &gt; 5 or a &lt; 3</code></td>
        </tr>
        <tr>
          <td><code>not</code></td>
          <td>Reverses the result</td>
          <td><code>not(a &gt; 5)</code></td>
        </tr>
      </tbody>
    </table>

    

    <h2>1) Logical AND (<code>and</code>)</h2>
    <p>
      The <code>and</code> operator returns <code>True</code> only if both conditions are <code>True</code>.
      If any one condition is <code>False</code>, the result is <code>False</code>.
    </p>

    <h3>Truth Table</h3>
    <table>
      <thead>
        <tr><th>A</th><th>B</th><th>A and B</th></tr>
      </thead>
      <tbody>
        <tr><td>True</td><td>True</td><td>True</td></tr>
        <tr><td>True</td><td>False</td><td>False</td></tr>
        <tr><td>False</td><td>True</td><td>False</td></tr>
        <tr><td>False</td><td>False</td><td>False</td></tr>
      </tbody>
    </table>

    <h3>Example</h3>
    <div class="code-example"><pre><code>a = 7

print(a &gt; 5 and a &lt; 10)   # Output: True
print(a &gt; 10 and a &lt; 20)  # Output: False
</code></pre></div>

    <p><strong>Explanation:</strong></p>
    <ul>
      <li><code>a &gt; 5</code> → True and <code>a &lt; 10</code> → True → True</li>
      <li><code>a &gt; 10</code> → False and <code>a &lt; 20</code> → True → False</li>
    </ul>

    

    <h2>2) Logical OR (<code>or</code>)</h2>
    <p>
      The <code>or</code> operator returns <code>True</code> if at least one condition is <code>True</code>.
      It returns <code>False</code> only when both conditions are <code>False</code>.
    </p>

    <h3>Truth Table</h3>
    <table>
      <thead>
        <tr><th>A</th><th>B</th><th>A or B</th></tr>
      </thead>
      <tbody>
        <tr><td>True</td><td>True</td><td>True</td></tr>
        <tr><td>True</td><td>False</td><td>True</td></tr>
        <tr><td>False</td><td>True</td><td>True</td></tr>
        <tr><td>False</td><td>False</td><td>False</td></tr>
      </tbody>
    </table>

    <h3>Example</h3>
    <div class="code-example"><pre><code>a = 7

print(a &gt; 5 or a &lt; 3)    # Output: True
print(a &gt; 10 or a &lt; 3)   # Output: False
</code></pre></div>

    <p><strong>Explanation:</strong></p>
    <ul>
      <li>At least one True → result True</li>
      <li>Both False → result False</li>
    </ul>

    

    <h2>3) Logical NOT (<code>not</code>)</h2>
    <p>The <code>not</code> operator reverses the Boolean result (True ↔ False).</p>

    <h3>Truth Table</h3>
    <table>
      <thead>
        <tr><th>A</th><th>not A</th></tr>
      </thead>
      <tbody>
        <tr><td>True</td><td>False</td></tr>
        <tr><td>False</td><td>True</td></tr>
      </tbody>
    </table>

    <h3>Example</h3>
    <div class="code-example"><pre><code>a = 7

print(not(a &gt; 5))  # Output: False
print(not(a &lt; 5))  # Output: True
</code></pre></div>

    

    <h2>Logical Operators with Comparison Operators</h2>
    <p>Logical operators are often used with comparison operators to form complex conditions.</p>

    <div class="code-example"><pre><code>age = 18
print(age &gt;= 18 and age &lt;= 25)  # Output: True
</code></pre></div>

    <p><strong>Explanation:</strong> Checks whether age is between 18 and 25 (inclusive).</p>
  `
},

  'bitwise-overview': {
  title: 'Bitwise Operators',
  html: `
    <h2>Bitwise Operators in Python</h2>
    <p>
      Bitwise operators perform operations at the <strong>bit level</strong> on <strong>integers only</strong>.
    </p>

    <h3>Process</h3>
    <ol>
      <li>Numbers are converted into binary form</li>
      <li>Operations are applied on each bit</li>
      <li>The final result is converted back to decimal</li>
    </ol>

    <p><strong>Important:</strong> Bitwise operators work only on integers (not on floats or strings).</p>

    <h3>Types of Bitwise Operators</h3>
    <table>
      <thead>
        <tr>
          <th>Operator</th>
          <th>Description</th>
          <th>Syntax</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><code>&amp;</code></td><td>Bitwise AND</td><td><code>x &amp; y</code></td></tr>
        <tr><td><code>|</code></td><td>Bitwise OR</td><td><code>x | y</code></td></tr>
        <tr><td><code>~</code></td><td>Bitwise NOT</td><td><code>~x</code></td></tr>
        <tr><td><code>^</code></td><td>Bitwise XOR</td><td><code>x ^ y</code></td></tr>
        <tr><td><code>&lt;&lt;</code></td><td>Bitwise Left Shift</td><td><code>x &lt;&lt; n</code></td></tr>
        <tr><td><code>&gt;&gt;</code></td><td>Bitwise Right Shift</td><td><code>x &gt;&gt; n</code></td></tr>
      </tbody>
    </table>

    

    <h2>1) Bitwise AND (<code>&amp;</code>)</h2>
    <p>The AND operator compares bits of two numbers.</p>
    <p><strong>Rule:</strong> Result bit is 1 only if both bits are 1; otherwise 0.</p>

    <h3>Truth Table</h3>
    <table>
      <thead><tr><th>Bit A</th><th>Bit B</th><th>A &amp; B</th></tr></thead>
      <tbody>
        <tr><td>0</td><td>0</td><td>0</td></tr>
        <tr><td>0</td><td>1</td><td>0</td></tr>
        <tr><td>1</td><td>0</td><td>0</td></tr>
        <tr><td>1</td><td>1</td><td>1</td></tr>
      </tbody>
    </table>

    <h3>Manual Example</h3>
    <p><code>X = 7 = (111)₂</code>, <code>Y = 4 = (100)₂</code></p>
    <div class="code-example"><pre><code>  111
& 100
-----
  100  → (100)₂ = 4</code></pre></div>

    <h3>Code Example</h3>
    <div class="code-example"><pre><code>a = 10
b = 4
print(a & b)  # Output: 0</code></pre></div>

    

    <h2>2) Bitwise OR (<code>|</code>)</h2>
    <p><strong>Rule:</strong> Result bit is 0 only if both bits are 0; otherwise 1.</p>

    <h3>Truth Table</h3>
    <table>
      <thead><tr><th>Bit A</th><th>Bit B</th><th>A | B</th></tr></thead>
      <tbody>
        <tr><td>0</td><td>0</td><td>0</td></tr>
        <tr><td>0</td><td>1</td><td>1</td></tr>
        <tr><td>1</td><td>0</td><td>1</td></tr>
        <tr><td>1</td><td>1</td><td>1</td></tr>
      </tbody>
    </table>

    <h3>Manual Example</h3>
    <p><code>X = 7 = (111)₂</code>, <code>Y = 4 = (100)₂</code></p>
    <div class="code-example"><pre><code>  111
| 100
-----
  111  → (111)₂ = 7</code></pre></div>

    <h3>Code Example</h3>
    <div class="code-example"><pre><code>a = 10
b = 4
print(a | b)  # Output: 14</code></pre></div>

    

    <h2>3) Bitwise NOT (<code>~</code>)</h2>
    <p>
      The NOT operator is unary (one operand). It flips bits (1→0, 0→1).
      Python uses 2’s complement, so the result is negative.
    </p>
    <p><strong>Rule:</strong> <code>~x = -(x + 1)</code></p>

    <h3>Manual Example</h3>
    <p><code>X = 5 = (101)₂</code> → <code>~101 = 010</code></p>

    <h3>Code Example</h3>
    <div class="code-example"><pre><code>a = 10
print(~a)  # Output: -11

# Explanation:
# ~10 = -(10 + 1) = -11</code></pre></div>

    

    <h2>4) Bitwise Shift Operators (<code>&lt;&lt;</code>, <code>&gt;&gt;</code>)</h2>
    <p>
      Shift operators move bits left or right. They help in multiplying/dividing by powers of 2.
    </p>

    <h3>A) Left Shift (<code>&lt;&lt;</code>)</h3>
    <p><strong>Syntax:</strong> <code>x &lt;&lt; n</code></p>
    <ul>
      <li>Bits move left; zeros are added on the right</li>
      <li>Equivalent to: <code>x &lt;&lt; n = x × 2ⁿ</code></li>
    </ul>

    <h4>Example 1: <code>5 &lt;&lt; 1</code></h4>
    <div class="code-example"><pre><code>5 = 00000101
5 << 1 = 00001010  = 10
# Because: 5 × 2¹ = 10</code></pre></div>

    <h4>Example 2: <code>7 &lt;&lt; 2</code></h4>
    <div class="code-example"><pre><code>7 = 00000111
7 << 2 = 00011100  = 28
# Because: 7 × 2² = 28</code></pre></div>

    <h3>B) Right Shift (<code>&gt;&gt;</code>)</h3>
    <p><strong>Syntax:</strong> <code>x &gt;&gt; n</code></p>
    <ul>
      <li>Bits move right; rightmost bits are removed</li>
      <li>For positive numbers, zeros are added on the left</li>
      <li>Equivalent (positive): <code>x &gt;&gt; n = x ÷ 2ⁿ</code> (integer division behavior)</li>
    </ul>

    <h4>Example 1: <code>8 &gt;&gt; 1</code></h4>
    <div class="code-example"><pre><code>8 = 00001000
8 >> 1 = 00000100  = 4
# Because: 8 ÷ 2¹ = 4</code></pre></div>

    <h4>Example 2: <code>20 &gt;&gt; 2</code></h4>
    <div class="code-example"><pre><code>20 = 00010100
20 >> 2 = 00000101  = 5
# Because: 20 ÷ 2² = 5</code></pre></div>

    <h3>Right Shift with Negative Numbers</h3>
    <ul>
      <li>Python uses <strong>sign extension</strong> for negative numbers (fills left with 1s)</li>
      <li>Mathematical behavior: <code>x &gt;&gt; n = floor(x ÷ 2ⁿ)</code></li>
      <li>For negative numbers, Python uses floor division behavior</li>
    </ul>
  `
},

  'identity-overview': {
    title: 'Identity Operators',
    html: `
      <h2>Identity Operators in Python</h2>

      <h3>What are identity operators?</h3>
      <p>Identity operators check whether two variables refer to the <strong>same object in memory</strong>, not just whether their values are equal.</p>
      <p>They compare <strong>object identity</strong> (memory address), not data content.</p>

      <h3>Available identity operators</h3>
      <ul>
        <li><code>is</code> &rarr; <code>True</code> if both variables refer to the same object in memory.</li>
        <li><code>is not</code> &rarr; <code>True</code> if both variables refer to different objects in memory.</li>
      </ul>
      <p>These are used when you care about whether two references point to exactly the same underlying object (for example with <code>None</code>, singletons, or cached objects).</p>

      <h3>Difference between <code>==</code> and <code>is</code></h3>
      <ul>
        <li><code>==</code> &rarr; checks <strong>equality of values</strong> (same content?).</li>
        <li><code>is</code> &rarr; checks <strong>identity</strong> (same object in memory?).</li>
      </ul>
      <p>Remember:</p>
      <ul>
        <li><code>==</code> &rarr; “Are the <strong>values</strong> equal?”</li>
        <li><code>is</code> &rarr; “Is this the <strong>same object</strong>?”</li>
      </ul>
      <p>Two different objects can be <code>==</code> (same value) but <code>is</code> will be <code>False</code> because their memory locations differ.</p>

      <h3>Example 1 – <code>is</code> returning True</h3>
      <div class="code-example"><pre><code class="language-python">a = [1, 2, 3]
b = a

print(a is b)   # True
print(a == b)   # True</code></pre></div>
      <ul>
        <li><code>b = a</code> does <strong>not</strong> create a new list; both refer to the same list object.</li>
        <li>So <code>a is b</code> is <code>True</code>.</li>
        <li>Any change via <code>a</code> is visible via <code>b</code>, because there is only one list object.</li>
      </ul>

      <h3>Example 2 – <code>is</code> vs <code>==</code> with different objects</h3>
      <div class="code-example"><pre><code class="language-python">x = [10, 20]
y = [10, 20]

print(x is y)   # False
print(x == y)   # True</code></pre></div>
      <ul>
        <li><code>x</code> and <code>y</code> are two <strong>separate</strong> list objects with the same contents.</li>
        <li><code>x is y</code> &rarr; <code>False</code> (different objects in memory).</li>
        <li><code>x == y</code> &rarr; <code>True</code> (values are equal).</li>
      </ul>

      <h3>Typical use cases</h3>
      <ul>
        <li>Checking against <code>None</code> (recommended style):
          <div class="code-example"><pre><code class="language-python">value = None

if value is None:
    print("No value set yet")

if value is not None:
    print("Got a value")</code></pre></div>
        </li>
        <li>Checking singletons or unique objects where only one instance should exist.</li>
      </ul>
    `
  },

  'membership-overview': {
  title: 'Membership Operators',
  html: `
    <h2>Membership Operators in Python</h2>
    <p>
      Membership operators are used to check whether a value exists inside a sequence.
      They return a Boolean result: <code>True</code> or <code>False</code>.
    </p>

    <h3>Types of Membership Operators</h3>
    <table>
      <thead>
        <tr>
          <th>Operator</th>
          <th>Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>in</code></td>
          <td>Returns True if the value is present in the sequence</td>
        </tr>
        <tr>
          <td><code>not in</code></td>
          <td>Returns True if the value is NOT present in the sequence</td>
        </tr>
      </tbody>
    </table>

    <h3>Where do membership operators work?</h3>
    <ul>
      <li>Strings</li>
      <li>Lists</li>
      <li>Tuples</li>
      <li>Sets</li>
      <li>Dictionaries (checks only <strong>keys</strong>, not values)</li>
    </ul>

    <h3>Simple meaning</h3>
    <ul>
      <li><code>in</code> → “Is it inside?”</li>
      <li><code>not in</code> → “Is it NOT inside?”</li>
    </ul>

    

    <h2>Examples</h2>

    <h3>Example 1: Using <code>in</code> with a List</h3>
    <div class="code-example"><pre><code>numbers = [10, 20, 30, 40]
print(20 in numbers)  # Output: True
</code></pre></div>
    <ul>
      <li>Python checks if <code>20</code> is present in the list</li>
      <li><code>20</code> exists inside <code>[10, 20, 30, 40]</code> → result is <code>True</code></li>
    </ul>

    <h3>Example 2: Using <code>not in</code> with a String</h3>
    <div class="code-example"><pre><code>text = "hello world"
print("z" not in text)  # Output: True
</code></pre></div>
    <ul>
      <li>Python checks if <code>"z"</code> is NOT present in the string</li>
      <li><code>"z"</code> is not inside <code>"hello world"</code> → result is <code>True</code></li>
    </ul>

    

    <h2>Important behavior with different data types</h2>

    <h3>1) With Strings</h3>
    <p>In strings, membership operators check for characters or substrings.</p>
    <div class="code-example"><pre><code>print("he" in "hello")  # Output: True
</code></pre></div>
    <p><strong>Explanation:</strong> <code>"he"</code> exists inside <code>"hello"</code> as a substring.</p>

    <h3>2) With Dictionaries (special case)</h3>
    <p>In dictionaries, membership operators check only <strong>keys</strong>, not values.</p>
    <div class="code-example"><pre><code>student = {"name": "Ali", "age": 22}

print("name" in student)  # Output: True
print("Ali" in student)   # Output: False
</code></pre></div>
    <ul>
      <li><code>"name"</code> is a key → <code>True</code></li>
      <li><code>"Ali"</code> is a value → <code>False</code> (because it checks keys)</li>
    </ul>
  `
},

  'input-function': {
    title: 'input()',
    html: `
      <h2>input() Function in Python</h2>
      <p>The <code>input()</code> function is used to accept user input from the keyboard. When called, the program pauses until the user types a response and presses <strong>Enter</strong>. The returned value is always a <code>str</code>.</p>

      <h3>Purpose & Behaviour</h3>
      <ul>
        <li>Pauses program execution and waits for keyboard input.</li>
        <li>If a prompt string is provided it is displayed before waiting for input.</li>
        <li>Always returns the entered value as a string.</li>
      </ul>

      <h3>Syntax</h3>
      <div class="code-example"><pre><code>variable = input(prompt)</code></pre></div>
      <p><strong>Parameter:</strong> <code>prompt</code> (optional) — a string shown to the user.</p>

      <h3>Important — input() Always Returns a String</h3>
      <p>No matter what the user types (numbers, floats, text), <code>input()</code> returns a <code>str</code>. For example, if the user types <code>25</code>, the value received is <code>'25'</code>, not the integer <code>25</code>.</p>

      <h3>Examples</h3>
      <h4>Getting a name</h4>
      <div class="code-example"><pre><code>name = input('What is your name? ')
# User types: Emily
# name -> 'Emily' (str)</code></pre></div>

      <h4>Getting an age (note the type)</h4>
      <div class="code-example"><pre><code>age = input('Enter your age: ')
print(type(age))  # &lt;class 'str'&gt;</code></pre></div>

      <h3>Type Conversion (When You Need Numbers)</h3>
      <p>To use numeric input in arithmetic, convert the string returned by <code>input()</code> to the desired type.</p>
      <div class="code-example"><pre><code>age = int(input('Enter your age: '))     # convert to int
price = float(input('Enter the price: '))  # convert to float</code></pre></div>

      <h4>Common conversion functions</h4>
      <ul>
        <li><code>int()</code> — integer</li>
        <li><code>float()</code> — floating-point number</li>
        <li><code>str()</code> — string</li>
        <li><code>bool()</code> — boolean</li>
      </ul>

      <h3>Why input() Returns a String?</h3>
      <ul>
        <li>Safety — avoids automatic errors from invalid conversions.</li>
        <li>Flexibility — the programmer decides how to interpret the input.</li>
        <li>Consistency — predictable return type (<code>str</code>).</li>
      </ul>

      <h3>Golden Rule</h3>
      <p><strong>input() → Always returns → String</strong><br>Wrap <code>input()</code> in conversion functions like <code>int()</code> or <code>float()</code> when numeric types are required.</p>
    `
  },

  'type-conversion': {
    title: 'Type Conversion',
    html: `
      <h2>Type Conversion in Python</h2>
      <p><strong>Type conversion</strong> (type casting) is the process of changing a value from one data type to another. It ensures correct operations and calculations.</p>

      <h3>Why Type Conversion Matters</h3>
      <ul>
        <li>Ensures correct operations and calculations</li>
        <li>Prevents type-related runtime errors</li>
        <li>Two kinds: <strong>Implicit</strong> and <strong>Explicit</strong></li>
      </ul>
      <img src="assets/type-conversion.png" alt="Type Conversion" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>1. Implicit Conversion (Automatic)</h3>
      <p>Python automatically converts a smaller data type to a larger one when needed to prevent data loss (e.g., int → float).</p>
      <div class="code-example"><pre><code>// Example (conceptual)
x = 10    # int
y = 10.6  # float
z = x + y  # x implicitly converted to 10.0, result 20.6 (float)
</code></pre></div>

      <h4>Important Points</h4>
      <ul>
        <li>Performed automatically by Python at runtime</li>
        <li>Conversion direction: smaller type → larger type</li>
        <li>Common: int → float (also int/float → complex)</li>
      </ul>

      <h3>2. Explicit Conversion (Type Casting)</h3>
      <p>Programmer manually converts types using built-in functions like <code>int()</code>, <code>float()</code>, <code>str()</code>, <code>bool()</code>, etc.</p>

      <h4>Common Functions</h4>
      <ul>
        <li><code>int(x)</code> — to integer</li>
        <li><code>float(x)</code> — to floating point</li>
        <li><code>str(x)</code> — to string</li>
        <li><code>bool(x)</code> — to boolean</li>
        <li><code>list(x), tuple(x), set(x), dict(x)</code> — to collections</li>
        <li><code>complex(x[, y])</code> — to complex number</li>
        <li><code>int(s, base)</code> — parse string in given base (e.g. base=2 for binary)</li>
      </ul>

      <h4>Examples</h4>
      <div class="code-example"><pre><code># int() - truncates decimal part
x = 5.8
print(int(x))   # 5

# int() with base (binary string)
s = "10010"
print(int(s, 2))  # 18

# float()
print(float(10))    # 10.0
print(float("3.14"))# 3.14

# str()
print(str(100))     # "100"

# bool()
print(bool(0))      # False
print(bool("hi"))   # True

# complex()
print(complex(1,2)) # (1+2j)
</code></pre></div>

      <h3>Converting Between Collections and Strings</h3>
      <ul>
        <li><code>tuple('geeks')</code> → ('g','e','e','k','s')</li>
        <li><code>list('geeks')</code> → ['g','e','e','k','s']</li>
        <li><code>set('geeks')</code> → unique chars, order not guaranteed</li>
        <li><code>dict((('a',1),('b',2)))</code> → {'a':1,'b':2}</li>
      </ul>

      <h3>Invalid Conversions</h3>
      <p>Some conversions raise <code>ValueError</code> (e.g., converting non-numeric string to int/float).</p>
      <div class="code-example"><pre><code>int("hello")    # ValueError: invalid literal for int() with base 10: 'hello'
int("3.14")      # ValueError (use float() first)
</code></pre></div>

      <h3>Quick Rules</h3>
      <ul>
        <li>Use explicit casting when Python does not convert automatically</li>
        <li>Remember <code>int()</code> truncates, not rounds</li>
        <li>When parsing strings with different bases use the <code>base</code> argument in <code>int()</code></li>
        <li>Validate input before converting to avoid exceptions</li>
      </ul>
    `
  },

  'print-formatting': {
    title: 'print() Function',
    html: `
      <h2>print() Function in Python</h2>
      <p>The <code>print()</code> function displays output to the console, converts objects to strings, and supports formatting via parameters.</p>
      <img src="assets/print-function.png" alt="Print Function" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>Purpose and Basic Behavior</h3>
      <ul>
        <li>Displays output to console/terminal</li>
        <li>Converts objects to strings automatically</li>
        <li>Prints single or multiple values</li>
        <li>Supports formatting through optional parameters</li>
      </ul>

      <h3>Syntax</h3>
      <p><code>print(*objects, sep=' ', end='\\n', file=sys.stdout, flush=False)</code></p>

      <h3>Parameters</h3>
      <ul>
        <li><strong>*objects</strong> — Values to print (required)</li>
        <li><strong>sep</strong> — Separator between values (default: space)</li>
        <li><strong>end</strong> — String appended after last value (default: newline)</li>
        <li><strong>file</strong> — File-like object to write to (default: sys.stdout)</li>
        <li><strong>flush</strong> — Whether to forcibly flush the stream (default: False)</li>
      </ul>

      <h3>Basic Printing</h3>
      <div class="code-example"><pre><code># Printing a string
print("Hello World")

# Printing multiple values (automatic space separator)
print("Hello", "Gaffar")
</code></pre></div>

      <h3>Printing Different Data Types</h3>
      <div class="code-example"><pre><code>print(10)          # int
print(5.5)         # float
print(True)        # boolean
print([1, 2, 3])   # list
print(("A","B"))   # tuple
</code></pre></div>

      <h3>The <code>sep</code> Parameter</h3>
      <p>Controls what appears between multiple values. Default is a single space.</p>
      <div class="code-example"><pre><code>print("2026", "02", "12", sep="-")    # 2026-02-12
print("A", "B", "C", sep=" | ")         # A | B | C
</code></pre></div>

      <h3>The <code>end</code> Parameter</h3>
      <p>Controls what is printed at the end of the output (default is newline).</p>
      <div class="code-example"><pre><code>print("Hello")
print("World")                 # prints on two lines

print("Hello", end=" ")
print("World")                 # prints on same line: Hello World

print("Python", end=" ---> END")  # Python ---> END
</code></pre></div>

      <h3>Combining <code>sep</code> and <code>end</code></h3>
      <div class="code-example"><pre><code>print("Item1", "Item2", "Item3", sep=" | ", end=" <END>\\n")
# Output: Item1 | Item2 | Item3 <END>
</code></pre></div>

      <h3>Key Points</h3>
      <ul>
        <li><code>print()</code> auto-converts objects to strings for display</li>
        <li>Use <code>sep</code> to control value separators and <code>end</code> to control line endings</li>
        <li>Use <code>file</code> to redirect output and <code>flush=True</code> to force immediate write</li>
      </ul>
    `
  },

  'output-formatting': {
    title: 'Output Formatting',
    html: `
      <h2>Output Formatting in Python</h2>
      <p>Displaying data in a clean, readable way. Common uses: reports, aligning numbers, decimal precision, combining text with variables.</p>

      <h3>Methods</h3>
      <ol>
        <li>String Modulo Operator (%) — old method (not recommended)</li>
        <li><code>.format()</code> method — flexible</li>
        <li>f-Strings — modern recommended method (Python 3.6+)</li>
      </ol>

      <h3>1. Modulo Operator (%)</h3>
      <p>Older, C-style formatting. Avoid for new code.</p>
      <div class="code-example"><pre><code>print("Hello %s" % "Gaffar")        # Hello Gaffar
print("Age: %d" % 23)                # Age: 23
print("Val: %f" % 3.14)              # Val: 3.140000
print("Price: %.2f" % 99.4567)       # Price: 99.46
</code></pre></div>

      <h3>2. <code>.format()</code> Method</h3>
      <p>More readable and flexible than % operator.</p>
      <div class="code-example"><pre><code>print("My name is {} and I am {} years old.".format("Gaffar", 23))
print("My name is {0} and I am {1} years old.".format("Gaffar", 23))
print("My name is {n} and I am {a} years old.".format(n="Gaffar", a=23))

pi = 3.14159
print("Value of pi is {:.2f}".format(pi))   # Value of pi is 3.14
</code></pre></div>

      <h3>3. f-Strings (Formatted String Literals)</h3>
      <p>Recommended: concise, readable, supports expressions.</p>
      <div class="code-example"><pre><code>name = "Gaffar"
print(f"My name is {name}")                 # My name is Gaffar

age = 23
print(f"I am {age} years old.")             # I am 23 years old.

pi = 3.14159
print(f"Value of pi: {pi:.2f}")             # Value of pi: 3.14

a, b = 10, 20
print(f"Sum is {a + b}")                    # Sum is 30

name = "gaffar"
print(f"{name.upper()}")                    # GAFFAR
</code></pre></div>

      <ul>
        <li>Prefer f-Strings for new code (readable and fast)</li>
        <li>Use <code>.format()</code> when needing advanced formatting separation</li>
        <li>Avoid % formatting for modern codebases</li>
      </ul>
    `
  },

  'strings-basics': {
  title: 'Strings Basics',
  html: `
    <h2>Strings in Python</h2>

    <h3>Definition</h3>
    <p>
      A <strong>String</strong> is a sequence of characters in Python. Strings are
      <strong>immutable</strong>, which means once a string is created, it cannot be changed
      or modified directly. Any operation that appears to modify a string actually creates
      a new string object.
    </p>

    <h3>Key Characteristics</h3>
    <ul>
      <li><strong>Immutable Nature:</strong> Once created, the characters in a string cannot be altered</li>
      <li><strong>Sequence Type:</strong> Strings are ordered collections of characters</li>
      <li><strong>Indexed Access:</strong> Each character can be accessed using its position (index)</li>
    </ul>

    <h3>Example</h3>
    <div class="code-example"><pre><code>name = "Gaffar"</code></pre></div>
    <p>
      In this example, the text <code>"Gaffar"</code> inside quotes becomes a string object containing the
      sequence of characters: G, a, f, f, a, r.
    </p>

    <h3>String Object Representation</h3>
    <p>A string like <code>"PYTHON"</code> is stored as a sequence of characters:</p>
    <table>
      <tbody>
        <tr>
          <td>P</td><td>Y</td><td>T</td><td>H</td><td>O</td><td>N</td>
        </tr>
      </tbody>
    </table>
    <p>Each character occupies a specific position in the sequence.</p>

    

    <h2>2. Creating Strings in Python</h2>

    <h3>2.1 Using Single Quotes</h3>
    <div class="code-example"><pre><code>s1 = 'Hello'</code></pre></div>
    <p>Single quotes can be used to create strings.</p>

    <h3>2.2 Using Double Quotes</h3>
    <div class="code-example"><pre><code>s2 = "Python"</code></pre></div>
    <p>Double quotes work exactly the same as single quotes in Python.</p>

    <p>
      <strong>Important Note:</strong> Both single and double quotes produce identical results.
      The choice depends on your content (e.g., if your string contains quotes).
    </p>

    <p><strong>Equivalence Example:</strong></p>
    <div class="code-example"><pre><code>'Hello' == "Hello"  # True</code></pre></div>

    <h3>2.3 Using Triple Quotes (Multi-line Strings)</h3>
    <div class="code-example"><pre><code>s3 = """This is
multi-line
string"""</code></pre></div>

    <p><strong>Purpose of Triple Quotes:</strong></p>
    <ul>
      <li>Used for creating multi-line strings</li>
      <li>Used for documentation strings (docstrings) in functions and classes</li>
      <li>Preserves line breaks and formatting</li>
    </ul>

    <p><strong>Multi-line Example:</strong></p>
    <div class="code-example"><pre><code>text = """Line 1
Line 2
Line 3"""</code></pre></div>
    <p>This will preserve all three lines exactly as written.</p>

    

    <h2>3. Special String Operations in Python</h2>

    <h3>3.1 Creating an Empty String</h3>
    <p><strong>Method 1:</strong> Using Empty Quotes</p>
    <div class="code-example"><pre><code>s = ""</code></pre></div>

    <p><strong>Method 2:</strong> Using <code>str()</code> Function</p>
    <div class="code-example"><pre><code>s = str()</code></pre></div>

    <p>Both methods create an empty string with length = 0.</p>

    <p><strong>Verification:</strong></p>
    <div class="code-example"><pre><code>s = ""
print(len(s))  # Output: 0</code></pre></div>

    <h3>3.2 Raw Strings</h3>
    <p>
      <strong>Definition:</strong> A raw string is used to ignore escape sequences.
      Raw strings are created by prefixing the string with <code>r</code> or <code>R</code>.
    </p>

    <p><strong>Syntax:</strong></p>
    <div class="code-example"><pre><code>path = r"C:\\Users\\Gaffar"</code></pre></div>

    <h4>Difference Between Normal and Raw Strings</h4>

    <p><strong>Normal String:</strong></p>
    <div class="code-example"><pre><code>path = "C:\\Users\\Gaffar"</code></pre></div>
    <ul>
      <li>Python interprets <code>\\U</code> as an escape sequence</li>
      <li>This may cause errors or unexpected behavior</li>
      <li>The backslash is treated as a special character</li>
    </ul>

    <p><strong>Raw String:</strong></p>
    <div class="code-example"><pre><code>path = r"C:\\Users\\Gaffar"</code></pre></div>
    <ul>
      <li>Python treats backslashes as normal characters</li>
      <li>All characters are taken literally</li>
      <li>No escape sequence interpretation</li>
    </ul>

    <h4>Common Use Cases for Raw Strings</h4>
    <ol>
      <li>
        <strong>File Paths</strong> (Windows paths contain backslashes)
        <div class="code-example"><pre><code>path = r"D:\\Projects\\Python\\main.py"</code></pre></div>
      </li>
      <li>
        <strong>Regular Expressions</strong> (regex patterns often contain backslashes)
        <div class="code-example"><pre><code>pattern = r"\\d+\\.\\d+"</code></pre></div>
      </li>
      <li>
        <strong>LaTeX Strings</strong> (math expressions with backslashes)
        <div class="code-example"><pre><code>latex = r"\\frac{1}{2}"</code></pre></div>
      </li>
    </ol>

    <h3>3.3 String Repetition</h3>
    <p>
      <strong>Syntax:</strong> Using the <code>*</code> operator with a string and an integer repeats the string.
    </p>
    <div class="code-example"><pre><code>print("Hi" * 3)
# Output:
# HiHiHi</code></pre></div>

    <h3>4. String Concatenation</h3>
    <p>
      <strong>Definition:</strong> Concatenation means joining two or more strings together using the <code>+</code> operator.
    </p>
    <div class="code-example"><pre><code>first = "Hello"
second = "World"
print(first + " " + second)
# Output:
# Hello World</code></pre></div>
  `
},

  'string-methods': {
  title: 'String Methods',
  html: `
    <h2>What are String Methods?</h2>
    <p>
      String methods are built-in functions applied to strings to perform operations such as
      changing case, searching, replacing, splitting/joining, and formatting.
    </p>

    <h3>Important Concept: Immutability</h3>
    <p>
      Strings are <strong>immutable</strong> — the original string does not change when a method is used.
      Most methods return a <strong>new</strong> string.
    </p>

    <div class="code-example"><pre><code>s = "hello"
print(s.upper())  # Output: HELLO
print(s)          # Output: hello
</code></pre></div>

    <p><strong>Visual idea:</strong> <code>"hello" → s.upper() → "HELLO"</code> (new string created)</p>

    

    <h2>Built-in String Methods (Common List)</h2>
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Methods</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Case Changing</td>
          <td><code>upper()</code>, <code>lower()</code>, <code>title()</code>, <code>capitalize()</code>, <code>swapcase()</code></td>
        </tr>
        <tr>
          <td>Checking</td>
          <td><code>startswith()</code>, <code>endswith()</code>, <code>isalpha()</code>, <code>isdigit()</code>, <code>isalnum()</code>, <code>islower()</code>, <code>isupper()</code></td>
        </tr>
        <tr>
          <td>Searching</td>
          <td><code>find()</code>, <code>index()</code>, <code>count()</code>, <code>rfind()</code>, <code>rindex()</code></td>
        </tr>
        <tr>
          <td>Modifying (returns new string)</td>
          <td><code>replace()</code>, <code>strip()</code>, <code>lstrip()</code>, <code>rstrip()</code></td>
        </tr>
        <tr>
          <td>Splitting / Joining</td>
          <td><code>split()</code>, <code>join()</code>, <code>rsplit()</code>, <code>splitlines()</code></td>
        </tr>
        <tr>
          <td>Formatting / Alignment</td>
          <td><code>center()</code>, <code>ljust()</code>, <code>rjust()</code>, <code>format()</code></td>
        </tr>
      </tbody>
    </table>

    

    <h2>Case Changing Methods</h2>

    <h3>1) <code>upper()</code></h3>
    <p>Converts all characters to uppercase letters.</p>
    <div class="code-example"><pre><code>s = "python"
print(s.upper())  # Output: PYTHON
</code></pre></div>

    <h3>2) <code>lower()</code></h3>
    <p>Converts all characters to lowercase letters.</p>
    <div class="code-example"><pre><code>print("PYTHON".lower())  # Output: python
</code></pre></div>

    <h3>3) <code>title()</code></h3>
    <p>Capitalizes the first letter of each word.</p>
    <div class="code-example"><pre><code>print("hello world".title())  # Output: Hello World
</code></pre></div>

    <h3>4) <code>capitalize()</code></h3>
    <p>Capitalizes only the first letter of the entire string.</p>
    <div class="code-example"><pre><code>print("hello world".capitalize())  # Output: Hello world
</code></pre></div>

    

    <h2>Checking Methods (True / False)</h2>

    <h3><code>startswith()</code></h3>
    <div class="code-example"><pre><code>s = "Python Programming"
print(s.startswith("Python"))  # Output: True
</code></pre></div>
    <ul>
      <li>Returns <code>True</code> if the string starts with the substring</li>
      <li>Returns <code>False</code> otherwise</li>
    </ul>

    <h3><code>endswith()</code></h3>
    <div class="code-example"><pre><code>s = "Python Programming"
print(s.endswith("ing"))  # Output: True
</code></pre></div>

    <h3><code>len()</code> (built-in function)</h3>
    <p>Returns the total number of characters in the string.</p>
    <div class="code-example"><pre><code>print(len("Python"))  # Output: 6
</code></pre></div>

    <h3><code>isalpha()</code>, <code>isdigit()</code>, <code>isalnum()</code></h3>
    <div class="code-example"><pre><code>print("Python".isalpha())     # True  (only letters)
print("123".isdigit())        # True  (only digits)
print("Python123".isalnum())  # True  (letters + digits)
</code></pre></div>

    <h3><code>islower()</code> and <code>isupper()</code></h3>
    <div class="code-example"><pre><code>print("hello".islower())  # True
print("HELLO".isupper())  # True
</code></pre></div>

    

    <h2>Searching Methods</h2>

    <h3><code>find()</code></h3>
    <p>Returns the starting index of the substring. If not found, returns <code>-1</code>.</p>
    <div class="code-example"><pre><code>s = "hello world"
print(s.find("world"))  # Output: 6
print(s.find("xyz"))    # Output: -1
</code></pre></div>

    <h3><code>index()</code></h3>
    <p>Like <code>find()</code>, but raises <code>ValueError</code> if not found.</p>
    <div class="code-example"><pre><code>s = "hello world"
print(s.index("world"))  # Output: 6
# print(s.index("xyz"))  # ValueError
</code></pre></div>

    <h3><code>count()</code></h3>
    <p>Returns the number of times a substring appears.</p>
    <div class="code-example"><pre><code>print("banana".count("a"))  # Output: 3
</code></pre></div>

    

    <h2>Replace Method</h2>

    <h3><code>replace()</code></h3>
    <p>Replaces a specified substring with a new substring (returns a new string).</p>
    <div class="code-example"><pre><code>print("Hello World".replace("World", "Python"))  # Output: Hello Python
</code></pre></div>
    <p><strong>Syntax:</strong> <code>string.replace(old_value, new_value)</code></p>

    

    <h2>Splitting and Joining Methods</h2>

    <h3><code>split()</code></h3>
    <p>Divides a string into a list based on a separator.</p>
    <div class="code-example"><pre><code>s = "apple, banana, orange"
print(s.split(","))  # Output: ['apple', ' banana', ' orange']
</code></pre></div>

    <h3><code>join()</code></h3>
    <p>Combines elements of a list into a single string using a separator.</p>
    <div class="code-example"><pre><code>lst = ["apple", "banana", "orange"]
print("-".join(lst))  # Output: apple-banana-orange
</code></pre></div>

    

    <h2>Removing Spaces Methods</h2>

    <h3><code>strip()</code></h3>
    <p>Removes all leading and trailing spaces.</p>
    <div class="code-example"><pre><code>s = "  hello  "
print(s.strip())  # Output: hello
</code></pre></div>

    <h3><code>lstrip()</code></h3>
    <p>Removes spaces only from the left side.</p>
    <div class="code-example"><pre><code>s = "  hello  "
print(s.lstrip())  # Output: hello  
</code></pre></div>

    <h3><code>rstrip()</code></h3>
    <p>Removes spaces only from the right side.</p>
    <div class="code-example"><pre><code>s = "  hello  "
print(s.rstrip())  # Output:   hello
</code></pre></div>
  `
},

  'string-indexing-slicing': {
  title: 'Indexing & Slicing',
  html: `
    <h2>String Indexing</h2>
    <p>
      Every character in a string has a position number called an <strong>index</strong>.
      Indexing starts from <strong>0</strong> in Python.
    </p>

    <p><strong>Example String:</strong> <code>s = "PYTHON"</code> (contains 6 characters)</p>

    <h3>Index Table</h3>
    <table>
      <thead>
        <tr>
          <th>Character</th>
          <th>P</th><th>Y</th><th>T</th><th>H</th><th>O</th><th>N</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Positive Index</th>
          <td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td>
        </tr>
        <tr>
          <th>Negative Index</th>
          <td>-6</td><td>-5</td><td>-4</td><td>-3</td><td>-2</td><td>-1</td>
        </tr>
      </tbody>
    </table>

    <h3>Key Points</h3>
    <ul>
      <li><strong>Positive indexing</strong>: starts from the beginning (0 to 5)</li>
      <li><strong>Negative indexing</strong>: starts from the end (-1 to -6)</li>
      <li>Positive indexing moves left to right</li>
      <li>Negative indexing moves right to left</li>
    </ul>

    <h3>Accessing Characters Using Indexing</h3>

    <h4>Positive Indexing Examples</h4>
    <div class="code-example"><pre><code>s = "PYTHON"
print(s[0])  # Output: P
print(s[3])  # Output: H
</code></pre></div>
    <ul>
      <li><code>s[0]</code> → First character → <code>P</code></li>
      <li><code>s[3]</code> → Fourth character → <code>H</code></li>
    </ul>

    <h4>Negative Indexing Examples</h4>
    <div class="code-example"><pre><code>s = "PYTHON"
print(s[-1])  # Output: N
print(s[-3])  # Output: H
</code></pre></div>
    <ul>
      <li><code>s[-1]</code> → Last character → <code>N</code></li>
      <li><code>s[-3]</code> → Third character from end → <code>H</code></li>
    </ul>
    <h2>String Slicing</h2>
    <p>
      Extracting a part of a string (called a <strong>substring</strong>) is known as <strong>slicing</strong>.
    </p>

    <h3>Syntax</h3>
    <p><code>string[start : end : step]</code></p>

    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>start</code></td>
          <td>Position from where slicing begins</td>
        </tr>
        <tr>
          <td><code>end</code></td>
          <td>Position before which slicing stops (not included)</td>
        </tr>
        <tr>
          <td><code>step</code></td>
          <td>Gap between characters (optional, default = 1)</td>
        </tr>
      </tbody>
    </table>

    <h3>Basic String Slicing</h3>
    <h4>Example 1: Basic Slice</h4>
    <div class="code-example"><pre><code>s = "PYTHON"
print(s[0:3])  # Output: PYT
</code></pre></div>
    <p>
      Start index = 0, End index = 3 (not included). Included indices: 0, 1, 2.
      The end index is <strong>not</strong> included in slicing.
    </p>

    <h3>Slicing Without Start or End</h3>

    <h4>Without Start Index</h4>
    <div class="code-example"><pre><code>s = "PYTHON"
print(s[:4])  # Output: PYTH
</code></pre></div>
    <p>Start is omitted → slicing starts at index 0. End index = 4 (not included).</p>

    <h4>Without End Index</h4>
    <div class="code-example"><pre><code>s = "PYTHON"
print(s[2:])  # Output: THON
</code></pre></div>
    <p>End is omitted → slicing continues until the end of the string.</p>

    <h4>Full String Slice</h4>
    <div class="code-example"><pre><code>s = "PYTHON"
print(s[:])  # Output: PYTHON
</code></pre></div>
    <p><code>s[:]</code> selects the entire string (a full slice).</p>

    <h3>Step Value in Slicing</h3>
    <p>The step value determines the gap between selected characters.</p>

    <div class="code-example"><pre><code>s = "PYTHON"
print(s[0:6:2])  # Output: PTO
</code></pre></div>
    <p>
      Start = 0, End = 6 (not included), Step = 2 → selected indices: 0 → 2 → 4
      → selected characters: P, T, O.
    </p>

    <h4>Step Value Rules</h4>
    <ul>
      <li>Step = 1 (default) → every character is selected</li>
      <li>Step = 2 → every second character is selected</li>
      <li>Step controls the gap/direction of traversal</li>
    </ul>

    <h3>Reverse String Using Slicing</h3>
    <div class="code-example"><pre><code>s = "PYTHON"
print(s[::-1])  # Output: NOTHYP
</code></pre></div>
    <p>Step = -1 moves right to left, reversing the string.</p>

    <h3>Negative Slicing</h3>
    <div class="code-example"><pre><code>s = "PYTHON"
print(s[-4:-1])  # Output: THO
</code></pre></div>
    <p>
      Start = -4, End = -1 (not included). Selected indices: -4, -3, -2 → T, H, O.
      The end index is not included even in negative slicing.
    </p>
  `
}
});

// ---- Navigation & availability control for this section ----
topicOrder.push('operators-overview', 'arithmetic-operator', 'assignment-overview', 'comparision-overview', 'logical-overview', 'bitwise-overview', 'identity-overview', 'membership-overview', 'input-function', 'type-conversion', 'print-formatting', 'output-formatting', 'strings-basics', 'string-methods', 'string-indexing-slicing');

Object.assign(unitMapping, {
  'operators-overview': 'Unit II',
  'arithmetic-operator': 'Unit II',
  'assignment-overview': 'Unit II',
  'comparision-overview': 'Unit II',
  'logical-overview': 'Unit II',
  'bitwise-overview': 'Unit II',
  'identity-overview': 'Unit II',
  'membership-overview': 'Unit II',
  'input-function': 'Unit II',
  'type-conversion': 'Unit II',
  'print-formatting': 'Unit II',
  'output-formatting': 'Unit II',
  'strings-basics': 'Unit II',
  'string-methods': 'Unit II',
  'string-indexing-slicing': 'Unit II'
});

Object.assign(topicAvailability, {
  'operators-overview': true,
  'arithmetic-operator': true,
  'assignment-overview': true,
  'comparision-overview': true,
  'logical-overview': true,
  'bitwise-overview': true,
  'identity-overview': true,
  'membership-overview': true,
  'input-function': true,
  'type-conversion': true,
  'print-formatting': true,
  'output-formatting': true,
  'strings-basics': true,
  'string-methods': true,
  'string-indexing-slicing': true
});

Object.assign(unitTopicsByName, {
  'Unit II': ['operators-overview', 'arithmetic-operator', 'assignment-overview', 'comparision-overview', 'logical-overview', 'bitwise-overview', 'identity-overview', 'membership-overview', 'input-function', 'type-conversion', 'print-formatting', 'output-formatting', 'strings-basics', 'string-methods', 'string-indexing-slicing']
});

// Enable/disable this entire unit (Unit 2)
function enableUnit2() {
  ['operators-overview', 'arithmetic-operator', 'assignment-overview', 'comparision-overview', 'logical-overview', 'bitwise-overview', 'identity-overview', 'membership-overview', 'input-function', 'type-conversion', 'print-formatting', 'output-formatting', 'strings-basics', 'string-methods', 'string-indexing-slicing'].forEach(id => { topicAvailability[id] = true; });
  console.log('Enabled entire Unit 2');
}
function disableUnit2() {
  ['operators-overview', 'arithmetic-operator', 'assignment-overview', 'comparision-overview', 'logical-overview', 'bitwise-overview', 'identity-overview', 'membership-overview', 'input-function', 'type-conversion', 'print-formatting', 'output-formatting', 'strings-basics', 'string-methods', 'string-indexing-slicing'].forEach(id => { topicAvailability[id] = false; });
  console.log('Disabled entire Unit 2');
}
