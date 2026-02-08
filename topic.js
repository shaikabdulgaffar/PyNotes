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
  'datatypes': 'Unit I',
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
  'prev-2025': 'Previous Papers'
};

const topics = {
  'intro-programming-languages': {
    title: 'Introduction to Programming Languages',
    html: `
      <h2>The Building Blocks</h2>
      <h3>Instruction</h3>
      <p>An instruction is the smallest unit of work in a computer program. It's a single command that tells the processor to perform a task (for example: add two numbers or store a value).</p>
      <p><strong>Definition:</strong> A specific direction that tells the processor to perform a task.</p>
      <p><strong>Analogy:</strong> In a recipe, one instruction would be: "Add two cups of flour."</p>
      <p><strong>Example in Python:</strong> <code>x = 5</code> — store number 5 in a variable named <code>x</code>.</p>


      <h2>Program: The Collection</h2>
      <p>A program is a sequence of instructions written in a specific order to achieve a particular result.</p>
      <p><strong>Definition:</strong> A set of instructions stored in a file that can be executed by a computer to perform a specific function.</p>
      <p><strong>How it works:</strong> Computers typically read programs top-to-bottom. If the order is wrong the program may fail or produce incorrect output.</p>
      <p><strong>Analogy:</strong> A single instruction is an ingredient; the whole recipe card (the program) allows you to bake a cake.</p>
      <p><strong>Examples:</strong> The calculator on your phone, a web browser (Chrome), a Python script that calculates student grades.</p>


      <h2>Programming: The Process</h2>
      <p>Programming is designing, writing, testing, and maintaining the instructions that make up a program.</p>
      <p>Computers speak binary (0s and 1s). Programming languages (Python, Java, C++) let humans write instructions at a higher level which are then translated to machine code.</p>
      <h3>Typical Workflow</h3>
      <ol>
        <li><strong>Problem Solving:</strong> Decide what you want to achieve.</li>
        <li><strong>Writing Code:</strong> Type the instructions in a programming language.</li>
        <li><strong>Debugging:</strong> Find and fix errors (bugs).</li>
        <li><strong>Maintaining:</strong> Update and improve the code over time.</li>
      </ol>
      <p><strong>Goal:</strong> Automate tasks and solve problems efficiently.</p>


      <h2>Generations of Programming Languages</h2>
      <img src="assets/generations.png" alt="Features & Advantages" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />
      <p>Programming languages evolved through generations (1GL → 5GL) to become more human-friendly, efficient, and abstract.</p>

      <img src="assets/programming-generations.png" alt="Features & Advantages" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>1GL — Machine Language</h3>
      <ul>
        <li>Written in binary (0s and 1s).</li>
        <li>Very fast for computers, but extremely hard for humans.</li>
        <li>Example: <code>10101010</code></li>
      </ul>

      <h3>2GL — Assembly Language</h3>
      <ul>
        <li>Uses mnemonics (MOV, ADD, SUB) instead of raw binary.</li>
        <li>Requires an assembler to convert to machine code.</li>
        <li>Still low-level and machine dependent.</li>
      </ul>

      <h3>3GL — High-Level Languages</h3>
      <ul>
        <li>English-like syntax; easier to learn and (mostly) machine independent.</li>
        <li>Uses compilers or interpreters to translate to machine code.</li>
        <li>Examples: C, C++, Java, Python.</li>
      </ul>

      <h3>4GL — Very High-Level Languages</h3>
      <ul>
        <li>Focus on what to achieve rather than how to do it.</li>
        <li>Often used for data management and rapid development.</li>
        <li>Examples: SQL, MATLAB.</li>
      </ul>

      <h3>5GL — AI & Logic-Based Languages</h3>
      <ul>
        <li>Programmer defines the problem; the system finds solutions using logic/constraints.</li>
        <li>Examples: Prolog, Mercury.</li>
      </ul>

      <p>As technology advanced, languages became easier to use, more efficient, and more abstract (hiding low-level details).</p>


      <h2>Types of Programming Languages</h2>
      <p>Different languages exist for different purposes. Examples:</p>
      <ul>
        <li><strong>Scripting Languages:</strong> JavaScript, VBScript, PHP, Python, Perl, Ruby</li>
        <li><strong>Command Languages:</strong> Bash, sh, ch</li>
        <li><strong>Document Formatting:</strong> TeX, PostScript, LaTeX</li>
        <li><strong>Web Display:</strong> HTML, CSS, XML</li>
      </ul>


      <h2>Conclusion</h2>
      <ul>
        <li>An <strong>instruction</strong> is a single command (e.g., <code>x = 5</code>).</li>
        <li>A <strong>program</strong> is a sequence of instructions that achieves a goal.</li>
        <li><strong>Programming</strong> is the process of creating, testing, and maintaining programs.</li>
        <li>Languages evolved from 1GL (machine) → 5GL (logic/AI) to improve usability, efficiency, and abstraction.</li>
      </ul>
    `
  },
  'what-is-python': { title: 'What is Python?', html: `
      <h2>What is Python?</h2>
      <p>Python is a general-purpose, dynamic, high-level, interpreted, object-oriented programming language that is easy to learn and widely used in modern technologies.</p>
      <div style="text-align:center;margin:12px 0;">
        <img src="assets/guido_van_rossum.png" alt="Guido van Rossum" style="max-width:220px;border-radius:8px;display:block;margin:0 auto;" />
      </div>
      <p>Developed by Guido van Rossum at Centrum Wiskunde &amp; Informatica (CWI) in the Netherlands, development began in 1989 and Python was officially released in 1991.</p>

      <h2>Why it's called "Python"</h2>
      <p>It is a common mistake to think Python was named after the snake! In reality, the name has a much more "comedic" origin.</p>

      <h3>The Real Story</h3>
      <p>Python was created by a Dutch programmer named Guido van Rossum in the late 1980s. At the time, he was reading published scripts from "Monty Python’s Flying Circus," a famous BBC comedy sketch show from the 1970s.</p>
      <p>When he needed a name for his new language, he wanted something that was:</p>
      <ul>
        <li>Short</li>
        <li>Unique</li>
        <li>Slightly mysterious</li>
      </ul>
      <p>Being a big fan of the comedy troupe, he chose Python. He wanted to capture the "fun" and "irreverent" spirit of the show rather than the image of a scary reptile.</p>

      <h3>If it's not a snake, why the snake logo?</h3>
      <p>Even though the name comes from a TV show, the community eventually embraced the snake theme.</p>
      <ul>
        <li><strong>The Logo:</strong> The official Python logo features two interlocking snakes (usually blue and yellow).</li>
        <li><strong>The Terms:</strong> We use terms like "Snake Case" (writing_code_like_this) and "Anaconda" (a popular distribution for data science).</li>
      </ul>

      <h3>Fun Fact</h3>
      <p>Because of the Monty Python connection, you will often find references to the show in Python tutorials. For example, instead of using the standard "foo" and "bar" as placeholder names, Python documentation often uses "spam" and "eggs" (a nod to a famous Monty Python sketch).</p>

      <h2>Background &amp; Need for Python</h2>
      <p>In the late 1980s and early 1990s, many popular languages had trade-offs:</p>
      <ul>
        <li><strong>C / C++</strong> — powerful but complex syntax and manual memory management.</li>
        <li><strong>Perl</strong> — great for scripting but often hard to read and maintain.</li>
      </ul>
      <p>There was a need for a language that was simple and readable, powerful like C, flexible like scripting languages, and suitable for both small scripts and large applications. Python was designed to bridge the gap between system-level languages and scripting languages.</p>

      <h2>Influences on Python's Design</h2>
      <ul>
        <li><strong>ABC</strong> — inspired simple syntax and indentation-based structure.</li>
        <li><strong>C</strong> — influenced core design and extension via C modules.</li>
        <li><strong>Modula-3</strong> — provided ideas for modules and exception handling.</li>
        <li><strong>Perl</strong> — influenced scripting capabilities and string handling.</li>
        <li><strong>Lisp</strong> — contributed functional programming concepts and dynamic typing.</li>
      </ul>

      <h2>Trending Growth &amp; Demand (2026)</h2>
      <p>As of 2026, Python continues to be widely adopted across industries, driven by its role in AI, data, automation, and cloud tooling.</p>
      <ol>
        <li>
          <strong>Artificial Intelligence &amp; Machine Learning</strong><br>
          Python is the primary language for modern AI and deep learning, powering frameworks like PyTorch and TensorFlow and tooling for Explainable AI (XAI) such as SHAP and LIME.
        </li>
        <li>
          <strong>Performance &amp; Technical Evolution</strong><br>
          Recent improvements have addressed historic performance concerns:
          <ul>
            <li><strong>NoGIL</strong> — removal of the Global Interpreter Lock enables true parallelism on multi-core systems.</li>
            <li><strong>JIT Compilation</strong> — Just-In-Time compilation boosts execution speed.</li>
            <li><strong>Edge Computing</strong> — frameworks like TensorFlow Lite and PyTorch Mobile enable Python models on devices and wearables.</li>
          </ul>
        </li>
        <li>
          <strong>Market Demand &amp; Careers</strong><br>
          Strong demand for Python skills in AI, data science, automation, and DevOps. Roles include AI Engineers, ML Engineers, Data Scientists, and Cloud/Automation specialists.
        </li>
      </ol>
    `
  },
  'features-advantages': { 
    title: 'Features, Advantages & Disadvantages', 
    html: `
      <h2>Features, Advantages & Disadvantages</h2>
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

      <h2>Advantages of Python</h2>
      <h4>1. Easy to Learn and Use</h4>
      <p>Python has a very simple and readable syntax. Its code looks almost like normal English, so beginners can easily understand it. There is no need to use complex symbols or brackets like in other programming languages. Because of this, students can focus more on logic rather than syntax rules. Python is widely used as a first programming language for beginners.</p>

      <h4>2. Versatile and Flexible</h4>
      <p>Python can be used in many different fields such as web development, data science and data analysis, artificial intelligence and machine learning, automation and scripting, and game development. The same Python language can be used for small programs as well as large applications. This makes Python a multi-purpose and flexible language.</p>

      <h4>3. Improved Productivity</h4>
      <p>Python allows developers to write programs with fewer lines of code compared to languages like C or Java. This reduces development time and effort. Many ready-made libraries and frameworks are available, so developers do not need to write everything from scratch. As a result, work can be completed faster and productivity increases.</p>

      <h4>4. Highly Secure</h4>
      <p>Python provides good support for secure coding practices. It has built-in features that help in writing safe and reliable programs. Many security tools and libraries are available in Python to handle encryption, authentication, and secure communication. Because of this, Python is also used in cybersecurity applications.</p>

      <h4>5. Strong Community Support</h4>
      <p>Python has a very large and active community of developers. If a programmer faces any problem, solutions are easily available online. There are many tutorials, documentation, videos, and discussion forums. Continuous updates and improvements are made because of strong community support.</p>


      <h2>Disadvantages of Python</h2>
      <h4>1. Slow Speed</h4>
      <p>Python is an interpreted language, which means it executes code line by line. This makes Python slower compared to compiled languages like C or C++. For applications that require very high performance, Python may not be the best choice.</p>

      <h4>2. Memory Inefficient</h4>
      <p>Python programs use more memory compared to other programming languages. This is because Python stores extra information about data types and objects. Due to high memory usage, Python is not suitable for applications with limited memory.</p>

      <h4>3. Weak Mobile Computation</h4>
      <p>Python is not commonly used for mobile application development. Languages like Java, Kotlin, and Swift are preferred for Android and iOS apps. Although some frameworks exist, Python is still weak in mobile computing.</p>

      <h4>4. Poor Database Access</h4>
      <p>Python’s database access layer is not as strong as some other languages. It may be slower while working with very large and complex databases. For heavy database-driven applications, other languages may perform better.</p>

      <h4>5. Runtime Errors</h4>
      <p>Python checks errors only during program execution (runtime). Errors are not detected during compilation because Python has no compilation step. If the programmer is not careful, runtime errors may occur while running the program.</p>
    ` 
  },
  'history-versions': { 
    title: 'History & Versions',
    html: `
      <h2>Major Versions of Python</h2>
      <img src="assets/python-versions.png" alt="Python Versions Timeline" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <p>Python has evolved through multiple<br>
      Each major version introduced new features and improvements<br>
      The versions are mainly classified as:<br>
      Python 1.x (1991)<br>
      Python 2.x (2000)<br>
      Python 3.x (2008 - Present)</p>

      <h3>Python 1.x (1991)</h3>
      <ul>
        <li>First official release of the Python programming language</li>
        <li>Focused on simplicity, readability, and ease of use</li>
        <li>Laid the foundation for future Python versions</li>
      </ul>

      <h4>Key Features</h4>
      <ul>
        <li>Supported core data types: Numbers, strings, and lists</li>
        <li>Provided: Functions and modular programming, Basic exception handling</li>
        <li>Suitable for: Small programs, Scripting tasks</li>
        <li>Mainly used in: Academic environments, Research-based applications</li>
        <li>Had limited library support compared to later versions</li>
      </ul>

      <h3>Python 2.x (2000)</h3>
      <ul>
        <li>Released to improve performance and usability over Python 1.x</li>
        <li>Became the most widely adopted version of Python for many years</li>
        <li>Extensively used in:</li>
        <ul>
          <li>Industry applications</li>
          <li>Web development</li>
          <li>System scripting</li>
        </ul>
      </ul>

      <h4>Key Improvements</h4>
      <ul>
        <li>Introduced important features:</li>
        <ul>
          <li>List comprehensions</li>
          <li>Automatic garbage collection</li>
          <li>Limited Unicode support</li>
        </ul>
        <li>Faster execution compared to Python 1.x</li>
        <li>Supported a large number of third-party libraries</li>
      </ul>

      <h4>End of Python 2.x & Language Changes</h4>
      <ul>
        <li>Python 2.7 was the final release in the 2.x series</li>
        <li>Backward compatibility:</li>
        <ul>
          <li>Slowed innovation and modernization</li>
        </ul>
        <li>Official support ended in January 2020</li>
        <li>Developers were encouraged to migrate to Python 3</li>
      </ul>

      <h4>Syntax Differences (Python 2 → Python 3)</h4>
      <ul>
        <li>Input handling:</li>
        <ul>
          <li>Python 2: raw_input() and input()</li>
          <li>Python 3: only input()</li>
        </ul>
        <li>Print statement:</li>
        <ul>
          <li>Python 2: print "Hello"</li>
          <li>Python 3: print("Hello") (function)</li>
        </ul>
      </ul>

      <h3>Python 3.x (2008 – Present)</h3>
      <ul>
        <li>Designed to overcome the limitations of Python 2</li>
        <li>Focused on:</li>
        <ul>
          <li>Long-term improvement</li>
          <li>Code clarity and consistency</li>
        </ul>
        <li>Not backward compatible with Python 2</li>
        <li>Represents a major redesign of the Python language</li>
      </ul>

      <h4>Key Improvements</h4>
      <ul>
        <li>Unicode support by default</li>
        <li>Improved standard libraries</li>
        <li>Better performance and stronger security</li>
        <li>Suitable for modern and large-scale applications</li>
      </ul>

      <h4>Major Python 3 Versions & Enhancements</h4>
      <ul>
        <li>Python 3.6: Introduced f-strings for easy string formatting</li>
        <li>Python 3.8: Introduced Walrus operator (:=) for assignment in expressions</li>
        <li>Python 3.9: Added dictionary merge and update operators</li>
        <li>Python 3.10: Introduced Structural Pattern Matching</li>
        <li>Python 3.11: Major performance improvements</li>
        <li>Python 3.12+: Cleaner internal architecture, Further speed and efficiency enhancements</li>
      </ul>

      <h4>Python 3 Present & Future</h4>
      <ul>
        <li>All new features are released only in Python 3</li>
        <li>Widely used in:</li>
        <ul>
          <li>Web development</li>
          <li>Data science</li>
          <li>Artificial Intelligence</li>
          <li>Automation and cybersecurity</li>
        </ul>
        <li>Considered the official and future version of Python</li>
      </ul>
    `
  },
  'applications': { 
    title: 'Applications of Python in Various Fields',
    html: `
      <h2>Applications of Python in Various Fields</h2>
      <p>Python is a high-level, easy-to-learn programming language. Because of its simplicity and powerful libraries, Python is used in many fields. One language → many uses.</p>

      <img src="assets/applications of python.png" alt="Python Applications" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <div class="content-card">
        <section>
          <h3>1. Education & Teaching</h3>
          <p><strong>Uses:</strong> Teaching programming, simple programs & assignments, quizzes, online learning platforms.</p>
          <p><strong>Why:</strong> Easy syntax, less boilerplate, students focus on concepts.</p>
        </section>

        <section>
          <h3>2. Business & Finance</h3>
          <p><strong>Uses:</strong> Data analysis & reporting, sales/profit prediction, financial calculations, task automation.</p>
          <p><strong>Why:</strong> Powerful libraries (NumPy, pandas), automation saves time, aids decision making.</p>
        </section>

        <section>
          <h3>3. Healthcare & Medical</h3>
          <p><strong>Uses:</strong> Medical data analysis, patient records, disease prediction, medical image processing.</p>
          <p><strong>Why:</strong> Handles large data, strong ML support, used in research and diagnostics.</p>
        </section>

        <section>
          <h3>4. Entertainment & Media</h3>
          <p><strong>Uses:</strong> Animation & VFX, game development, audio/video processing, recommendation systems.</p>
          <p><strong>Why:</strong> Fast development, integrates with graphics tools and pipelines.</p>
        </section>

        <section>
          <h3>5. Banking & Government</h3>
          <p><strong>Uses:</strong> Banking software, fraud detection, secure transactions, government portals.</p>
          <p><strong>Why:</strong> Robust libraries, scalability, strong security practices.</p>
        </section>

        <section>
          <h3>6. Space & Defense</h3>
          <p><strong>Uses:</strong> Space research simulations, satellite data analysis, defense modeling, scientific calculations.</p>
          <p><strong>Why:</strong> High accuracy, used by research organisations, supports complex computations.</p>
        </section>

        <section>
          <h3>7. Robotics & Embedded Systems</h3>
          <p><strong>Uses:</strong> Robot control, sensor interfacing, automation systems, IoT.</p>
          <p><strong>Why:</strong> Simple control logic, many hardware libraries, rapid prototyping.</p>
        </section>

        <section>
          <h3>8. Manufacturing & Industry</h3>
          <p><strong>Uses:</strong> Machine automation, production monitoring, quality control, predictive maintenance.</p>
          <p><strong>Why:</strong> Improves accuracy, reduces human effort, cost & time savings.</p>
        </section>

        <section>
          <h3>9. Agriculture</h3>
          <p><strong>Uses:</strong> Crop-yield prediction, weather analysis, smart irrigation, farm-data analytics.</p>
          <p><strong>Why:</strong> Enables data-driven decisions, uses AI for productivity gains.</p>
        </section>

        <section>
          <h3>10. Science & Research</h3>
          <p><strong>Uses:</strong> Scientific experiments, data visualization, mathematical modeling, simulations.</p>
          <p><strong>Why:</strong> Extensive research libraries, easy prototyping, academic acceptance.</p>
        </section>
      </div>
    `
  },

  'installation-ide': {
    title: "Installation Setup & IDE's",
    html: `
      <h2>Setting up your environment</h2>
      <p>Preparing your system is the first step to writing and running Python code.</p>

      <h3>Installing Python</h3>
      <ol>
        <li><strong>Download:</strong> Visit <a href="https://python.org" target="_blank" rel="noopener">python.org</a> and download the latest installer for your OS.</li>
        <li><strong>"Add to PATH" (Crucial on Windows):</strong> During installation check the box "Add Python to PATH". If you skip this, the <code>python</code> command won't work in Command Prompt.</li>
        <li><strong>Verify:</strong> Open Command Prompt (Windows) or Terminal (macOS/Linux) and run: <code>python --version</code></li>
      </ol>

      <h3>What is an IDE?</h3>
      <p>An IDE (Integrated Development Environment) or code editor helps you write, run, and debug code more efficiently.</p>
      <p><strong>Code Editor:</strong> Lightweight editor focused on editing (e.g., VS Code).<br>
      <strong>IDE:</strong> Full-featured environment with debugger, project tools, and integrations (e.g., PyCharm).</p>

      <h3>Popular Python Editors &amp; IDEs</h3>
      <ul>
        <li><strong>A. IDLE</strong> — Simple editor that comes with Python. Good for absolute beginners.</li>
        <li><strong>B. VS Code</strong> — Lightweight, extensible. Install the "Python" extension by Microsoft for autocompletion, linting, and debugging.</li>
        <li><strong>C. PyCharm</strong> — Full-featured IDE (Community &amp; Professional). Great for large projects; uses more RAM.</li>
        <li><strong>D. Jupyter Notebook</strong> — Best for data analysis and reports; lets you mix code cells with markdown and visuals.</li>
      </ul>

      <h3>Quick Setup Tips</h3>
      <ul>
        <li>Always check "Add to PATH" on Windows.</li>
        <li>Use a virtual environment: <code>python -m venv venv</code> to isolate project dependencies.</li>
        <li>Install editor extensions: linters (flake8), formatters (black), and the Python extension for VS Code.</li>
      </ul>

      <h3>Verify Workflow</h3>
      <p>Open your editor/IDE, create <code>hello.py</code> with <code>print("Hello, Python")</code>, then run <code>python hello.py</code> in a terminal to confirm everything works.</p>
    `
  },

  'first-program': { 
    title: 'Basic Syntax & First Python Program',
    html: `
      <h2>Basic Syntax of Python</h2>
      <p><strong>Simple Definition:</strong> Syntax is the correct way of writing Python code so that Python can understand and execute it.</p>

      <h3>Why Python Syntax is Special?</h3>
      <ul>
        <li>Simple</li>
        <li>English-like</li>
        <li>Less symbols</li>
        <li>Easy for beginners and non-tech students</li>
      </ul>

      <h3>Basic Elements of Syntax</h3>
      <ul>
        <li>Comments</li>
        <li>Keywords</li>
        <li>Variables</li>
        <li>Data Types</li>
        <li>Indentation</li>
        <li>Functions</li>
        <li>Escape Sequences</li>
        <li>Control Statements</li>
        <li>Operators</li>
      </ul>

      <h2>Writing Your First Python Program</h2>
      <p>Example:</p>
      <div class="code-example"><pre><code class="language-python">print("Hello, World!")</code></pre></div>

      <p>Explanation:</p>
      <ul>
        <li><code>print()</code> — a built-in function that outputs text to the screen.</li>
        <li><code>"Hello, World!"</code> — a string (text inside quotes).</li>
        <li>This single line instructs Python to display the provided text.</li>
      </ul>
    `
  },
  'comments': { 
    title: 'Comments',
    html: `
      <h2>What is a Comment?</h2>
      <p>In Python, a <strong>comment</strong> is a piece of text inside your code that the computer completely ignores. It’s written in plain English (or any language) to explain what the code is doing.</p>
      <p><strong>Formal Definition:</strong> A comment is a line of text ignored by the Python interpreter, used to make code easier for humans to read and understand.</p>

      <h2>Why Are Comments Important?</h2>
      <p>Coding is rarely a solo, one-time task. You need comments because:</p>
      <ul>
        <li><strong>For You:</strong> They help you keep track of your logic while you write.</li>
        <li><strong>For Your Team:</strong> If someone else looks at your code, they can understand your "why" without having to guess.</li>
        <li><strong>For Future You:</strong> If you open your code after 6 months, you might forget why you wrote a specific line. Comments act as a "note to self."</li>
        <li><strong>Interview Prep:</strong> Being able to explain your code clearly is a key skill; comments help you structure those explanations.</li>
      </ul>
      <p><strong>The Risk of No Comments:</strong><br>No comments make code a "black box"—confusing to fix, hard to maintain, and difficult to explain to others.</p>

      <h2>Single-Line Comments</h2>
      <p>These are the most common types of comments. They are used for quick, short explanations.</p>

      <h3>Method 1: Standard Single-Line</h3>
      <p>You start the line with the hash symbol (<code>#</code>). Everything after the <code>#</code> on that line is ignored.</p>
      <p><strong>Syntax:</strong> <code># Your comment here</code></p>
      <p><strong>Example:</strong></p>
      <div class="code-example"><pre><code class="language-python"># This program greets the students
print("Hello MBA Students")</code></pre></div>

      <h3>Method 2: Inline Comment</h3>
      <p>Placed on the <strong>same line</strong> as the code, usually at the end. Great for explaining a specific variable.</p>
      <div class="code-example"><pre><code class="language-python">marks = 75  # This variable stores the student's marks</code></pre></div>

      <h2>Multi-Line Comments</h2>
      <p>When you need a longer explanation or a paragraph, you have two main options:</p>

      <h3>Method 1: Multiple <code>#</code> Symbols (Recommended)</h3>
      <p>Put a <code>#</code> at the start of every new line.</p>
      <div class="code-example"><pre><code class="language-python"># This program 
# calculates the 
# total marks of a student</code></pre></div>

      <h3>Method 2: Triple Quotes (<code>'''</code> or <code>"""</code>)</h3>
      <p>Technically these are string literals, but Python ignores them if they aren't assigned to a variable. Often used for high-level documentation (docstrings).</p>
      <div class="code-example"><pre><code class="language-python">"""
This program calculates 
total and average marks 
for the final semester.
"""</code></pre></div>
    `
  },
  'indentation': {
    title: 'Indentation',
    html: `
      <h2>What is Indentation?</h2>
      <p>In real-world writing, we use paragraphs and bullet points to organize our thoughts. In Python, we use <strong>Indentation</strong>.</p>
      <p><strong>Formal Definition:</strong> Indentation refers to the spaces at the beginning of a code line that define the structure and "blocks" of a program.</p>
      <p><strong>Simple Definition:</strong> It is the "gap" or spacing you leave before a line of code to show Python which lines belong together as a group.</p>
      <p><strong>Key Rule:</strong> In Python, indentation is mandatory. Unlike languages like C or Java that use curly brackets <code>{ }</code>, Python uses blank space to understand your code's logic.</p>

      <h2>Why Does Python Use Indentation?</h2>
      <ul>
        <li><strong>Readability:</strong> It makes code look clean and organized, almost like reading English.</li>
        <li><strong>No Messy Brackets:</strong> It removes the need for extra symbols like <code>{ }</code>, making the code less "noisy."</li>
        <li><strong>Discipline:</strong> It forces every programmer to follow a neat, consistent format.</li>
      </ul>

      <h2>How to Indent Correctly</h2>
      <p>When you start a block of code (like an <code>if</code> statement or a loop), the next line must be shifted to the right.</p>
      <p><strong>Standard Rule:</strong> Use 4 spaces for every level of indentation.</p>
      <p><strong>The Colon Rule:</strong> Almost every time you see a colon (<code>:</code>), the very next line must be indented.</p>

      <h3>Example: Correct vs Incorrect</h3>
      <div class="code-example"><pre><code class="language-python"># Correct (Works)
if marks > 50:
    print("Pass")

# Incorrect (Error)
if marks > 50:
print("Pass")  # Python knows the print belongs to the if. Error: expected an indented block</code></pre></div>

      <h2>Understanding "Code Blocks"</h2>
      <p>A <strong>Code Block</strong> is a group of statements that run together. Python creates blocks for:</p>
      <ul>
        <li>Decisions: <code>if</code>, <code>else</code></li>
        <li>Loops: <code>for</code>, <code>while</code></li>
        <li>Functions: <code>def</code></li>
      </ul>
      <p><strong>Example of a block:</strong></p>
      <div class="code-example"><pre><code class="language-python">if sales > 100000:
    bonus = 5000         # Line 1 of block
    print("Approved")    # Line 2 of block

# This line is NOT in the block because it's not indented</code></pre></div>

      <h2>Nested Indentation (Level-by-Level)</h2>
      <p>Sometimes you have a "decision inside a decision." This is called Nested Indentation. Each new level moves further to the right.</p>
      <div class="code-example"><pre><code class="language-python">if marks >= 50:
    if marks >= 75:
        print("Distinction")  # Level 2 indentation
    else:
        print("Pass")         # Level 2 indentation</code></pre></div>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li><strong>Mixing Tabs and Spaces:</strong> Always stick to one. Prefer spaces (PEP 8: 4 spaces).</li>
        <li><strong>Wrong Alignment:</strong> If two lines are in the same block, they must start at the exact same column.</li>
        <li><strong>Missing Indentation:</strong> Forgetting to indent after a <code>if</code> or <code>for</code> will cause an <strong>IndentationError</strong>.</li>
      </ul>
    `
  },
  'keywords': {
    title: 'Keywords',
    html: `
      <h2>What are Keywords?</h2>
      <p>Keywords are the "reserved words" of the Python language. They have a permanent, built-in meaning that the Python interpreter already understands.</p>
      <p><strong>Formal Definition:</strong> Reserved words with a predefined meaning that cannot be used as identifiers (names for variables or functions).</p>
      <p><strong>Simple Definition:</strong> These are the special "command words" that form the grammar of Python.</p>

      <h2>Why do we need them?</h2>
      <p>Keywords provide structure: make decisions (<code>if</code>, <code>else</code>), repeat tasks (<code>for</code>, <code>while</code>), combine logic (<code>and</code>, <code>or</code>, <code>not</code>), define functions (<code>def</code>, <code>return</code>), and import libraries (<code>import</code>).</p>

      <h2>Key Categories</h2>
      <h3>Decision Making (Conditional)</h3>
      <ul><li><code>if</code>, <code>elif</code>, <code>else</code></li></ul>

      <h3>Loops (Repetition)</h3>
      <ul><li><code>for</code>, <code>while</code></li></ul>

      <h3>Logical & Boolean</h3>
      <ul><li><code>and</code>, <code>or</code>, <code>not</code>, <code>True</code>, <code>False</code>, <code>None</code></li></ul>

      <h3>Structure & Functions</h3>
      <ul><li><code>def</code>, <code>return</code>, <code>import</code></li></ul>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li><strong>Case-Sensitivity:</strong> Keywords are lowercase (only <code>True</code>, <code>False</code>, <code>None</code> are capitalized).</li>
        <li><strong>Variable Name Trap:</strong> Don't use a keyword as a variable name (e.g., <code>pass = "Accepted"</code> causes an error).</li>
      </ul>

      <h2>How many keywords?</h2>
      <p>At present there are 35 keywords (this count can change between Python versions).</p>

      <img src="assets/keywords.png" alt="Python Versions Timeline" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

    `
  },
  'escape-sequence': {
    title: 'Escape Sequences',
    html: `
      <h2>What is an Escape Sequence?</h2>
      <p>An escape sequence is a special combination of characters that tells Python to "escape" from normal text processing and perform a formatting action.</p>
      <p><strong>Formal Definition:</strong> A combination of characters starting with a backslash (<code>\\</code>) used to represent special characters or formatting inside a string.</p>
      <p><strong>Simple Definition:</strong> Shortcodes used inside quotes to control how text looks (like adding a new line or a quote mark).</p>
      <p><strong>The Secret Key:</strong> Every escape sequence starts with a backslash (<code>\\</code>).</p>

      <h2>Why Do We Need Them?</h2>
      <p>Certain characters confuse Python if used directly inside the same quotes (for example, a double-quote inside a double-quoted string). Escape sequences let you include those characters safely.</p>
      <div class="code-example"><pre><code class="language-python"># Problem -> Syntax error
print("He said, "Hello"")

# Solution -> use escape sequence for inner quotes
print("He said, \"Hello\"")</code></pre></div>

      <h2>Common Escape Sequences ("Big 5")</h2>

      <div class="escape-list" style="gap:12px;display:flex;flex-direction:column;">
        <div class="escape-item">
          <strong><code>\\n</code></strong> — New line<br>
          <em>Example:</em> <code>"Hello\\nWorld"</code>
        </div>

        <div class="escape-item">
          <strong><code>\\t</code></strong> — Tab space (useful for columns)<br>
          <em>Example:</em> <code>"Name\\tAge"</code>
        </div>

        <div class="escape-item">
          <strong><code>\\\"</code></strong> — Double quote inside a double-quoted string<br>
          <em>Example:</em> <code>"She said \\\"Yes\\\""</code>
        </div>

        <div class="escape-item">
          <strong><code>\\'</code></strong> — Single quote inside a single-quoted string<br>
          <em>Example:</em> <code>'It\\'s raining'</code>
        </div>

        <div class="escape-item">
          <strong><code>\\\\</code></strong> — Backslash character (useful in file paths)<br>
          <em>Example:</em> <code>"C:\\\\Users\\\\PC"</code>
        </div>
      </div>

      <h3>Advanced: Carriage Return (<code>\\r</code>)</h3>
      <p><code>\\r</code> moves the cursor to the start of the current line; subsequent text can overwrite the existing text.</p>
      <div class="code-example"><pre><code class="language-python">print("Hello\\rWorld")  # Output often: World</code></pre></div>

      <h2>Important Rules</h2>
      <ul>
        <li><strong>Inside Strings Only:</strong> Escape sequences must be inside quotes (<code>" "</code> or <code>' '</code>).</li>
        <li><strong>Backslash Direction:</strong> Use backslash (<code>\\</code>), not forward slash (<code>/</code>).</li>
        <li><strong>Case Sensitive:</strong> <code>\\n</code> is newline; <code>\\N</code> is different or invalid.</li>
      </ul>
    `
  },
  'variables': {
    title: 'Variables',
    html: `
      <h2>What is a Variable?</h2>
      <p>A variable is a name given to a memory location where data is stored.</p>
      <p><strong>Formal Definition:</strong> A named memory location used to store data values that can change during program execution.</p>
      <p><strong>Simple Definition:</strong> A "labeled jar" or container to hold information (like sales figures or names).</p>

      <h2>How Variables Work</h2>
      <p>When you write <code>profit = 50000</code>:</p>
      <ol>
        <li>Memory is reserved for the value.</li>
        <li>The value <code>50000</code> is stored there.</li>
        <li>The name <code>profit</code> points to that memory location.</li>
      </ol>
      <p><strong>Dynamic Typing:</strong> Python infers the data type automatically (e.g., <code>100</code> → integer).</p>

      <h2>Rules for Naming Variables</h2>
      <ul>
        <li>Must start with a letter (a–z) or underscore (<code>_</code>).</li>
        <li>Can contain letters, numbers, and underscores.</li>
        <li>Cannot start with a number (e.g., <code>1total</code> is invalid).</li>
        <li>No spaces or hyphens (use underscores instead).</li>
        <li>Cannot use a Python keyword (e.g., <code>if</code>, <code>for</code>).</li>
        <li>Case-sensitive: <code>Age</code>, <code>age</code>, and <code>AGE</code> are different.</li>
      </ul>

      <h2>Variable Naming Conventions</h2>
      <ul>
        <li><strong>snake_case</strong> (recommended in Python): <code>student_total_marks</code></li>
        <li><strong>SCREAMING_SNAKE_CASE</strong> (constants): <code>MAX_LOGIN_ATTEMPTS</code></li>
        <li><strong>camelCase</strong> (common in JS/Java): <code>studentMarks</code></li>
        <li><strong>PascalCase</strong> (classes): <code>StudentProfile</code></li>
      </ul>

      <h2>Variable Values Can Change</h2>
      <div class="code-example"><pre><code class="language-python">count = 10
count = count + 5  # count is now 15</code></pre></div>

      <h2>Multiple Assignments</h2>
      <p>Assign different values to multiple variables at once:</p>
      <div class="code-example"><pre><code class="language-python">a, b, c = 10, 20, 30  # a=10, b=20, c=30</code></pre></div>
      <p>Assign the same value to multiple variables:</p>
      <div class="code-example"><pre><code class="language-python">x = y = z = 100  # all three hold 100</code></pre></div>

      <h3>Quick Tips</h3>
      <ul>
        <li>Use descriptive names for clarity (e.g., <code>monthly_revenue</code>).</li>
        <li>Avoid single-letter names except for counters (e.g., <code>i</code> in loops).</li>
        <li>Follow the team's naming convention consistently.</li>
      </ul>
    `
  },

  'datatypes': {
    title: 'Data Type in Python',
    html: `
      <h2>What is a Data Type?</h2>
      <p>In programming, just as you wouldn't store water in a sack or rice in a bottle, you must use the correct "container" for different kinds of information. These containers are known as <strong>Data Types</strong>.</p>
      <p><strong>Formal Definition:</strong> A data type defines the type of value a variable can hold and determines what operations (like addition or subtraction) can be performed on that value.</p>
      <p><strong>Simple Definition:</strong> It tells Python if a piece of information is a number, a piece of text, a simple Yes/No, or a large collection of items.</p>

      <h2>Why Do We Need Data Types?</h2>
      <ul>
        <li><strong>Preventing Mistakes:</strong> You cannot add text and numbers together (e.g., "Rahul" + 5).</li>
        <li><strong>Guiding Operations:</strong> They tell Python whether to perform math (numbers) or join text (strings).</li>
        <li><strong>Accuracy:</strong> Ensure business reports and calculations use correct precision.</li>
      </ul>

      <h2>Python’s Special Feature: Dynamic Typing</h2>
      <p>In many older languages you must declare types. In Python you simply write <code>x = 10</code> and Python infers the type automatically. This is called <strong>dynamic typing</strong>.</p>

      <h2>Classification of Data Types</h2>
      <img src="assets/data-types.png" alt="Features & Advantages" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />
      
      <h3>A. Numeric Types</h3>
      <ul>
        <li><strong>Integer (int):</strong> Whole numbers (e.g., 100, -5).</li>
        <li><strong>Float:</strong> Numbers with decimals (e.g., 99.99, 3.14).</li>
        <li><strong>Complex:</strong> Complex numbers for advanced math (e.g., 3 + 5j).</li>
      </ul>

      <h3>B. Sequence Types</h3>
      <ul>
        <li><strong>String (str):</strong> Text in quotes (e.g., "Hello MBA").</li>
        <li><strong>List:</strong> Mutable ordered collection (e.g., [10, 20, 30]).</li>
        <li><strong>Tuple:</strong> Immutable ordered collection (e.g., (1, 2, 3)).</li>
      </ul>

      <h3>C. Other Important Types</h3>
      <ul>
        <li><strong>Boolean:</strong> Logical values <code>True</code> or <code>False</code>.</li>
        <li><strong>Dictionary (dict):</strong> Key → value mapping (like a phonebook).</li>
        <li><strong>Set:</strong> Unordered collection of unique items (no duplicates).</li>
      </ul>

      <h3>Quick Examples</h3>
      <div class="code-example"><pre><code class="language-python"># Numeric
a = 100        # int
b = 3.14       # float
z = 2 + 3j     # complex

# Sequences
name = "Rahul"         # str
scores = [85, 78, 90]  # list
coords = (10, 20)      # tuple

# Others
flag = True            # bool
person = {"name":"Rahul","age":20}  # dict
unique_ids = {1,2,3}                # set</code></pre></div>
    `
  },
  
  'basic-datatypes': {
    title: 'Basic Data Types',
    html: `
      <h2>Basic Data Types</h2>
      <img src="assets/datatypes-classification.png" alt="basic-datatypes" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <p>Basic Data Types are the fundamental "containers" that tell Python what kind of information a variable holds and what operations are valid.</p>

      <img src="assets/basic-datatypes.png" alt="basic-datatypes" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>1. Integer (int)</h3>
      <p>Stores whole numbers (no decimal). Can be positive, negative or zero. No size limit.</p>
      <div class="code-example"><pre><code class="language-python">age = 22
employees = 150
loss = -5000
balance = 0</code></pre></div>
      <p>Real-life examples: number of employees, units sold, daily transactions.</p>

      <h3>2. Float (float)</h3>
      <p>Stores numbers with fractional parts (decimal points).</p>
      <div class="code-example"><pre><code class="language-python">price = 99.75
profit_percentage = 12.5
interest_rate = 8.25</code></pre></div>
      <p>Note: <code>10</code> is int, <code>10.0</code> is float.</p>

      <h3>3. String (str)</h3>
      <p>Stores text enclosed in single or double quotes.</p>
      <div class="code-example"><pre><code class="language-python">name = "Ravi"
company = 'TCS'
message = "Welcome to Python"</code></pre></div>
      <p>Common use: customer names, product names, addresses. Beware: <code>"85"</code> is a string, not a number.</p>

      <h3>4. Complex (complex)</h3>
      <p>Numbers with real and imaginary parts; format <code>a + bj</code>. Mostly for scientific/engineering use.</p>
      <div class="code-example"><pre><code class="language-python">z = 3 + 4j
a = 2.5 + 1.8j</code></pre></div>
      <p>Rare in business examples but included for completeness.</p>

      <h3>5. Boolean (bool)</h3>
      <p>Represents truth values: <code>True</code> or <code>False</code>. Used in conditions and logic.</p>
      <div class="code-example"><pre><code class="language-python">is_pass = True
is_available = False
loan_approved = True</code></pre></div>
      <p>Important: <code>True</code> and <code>False</code> must be capitalized.</p>

      <h3>How to Check a Variable's Type</h3>
      <div class="code-example"><pre><code class="language-python">x = 10
print(type(x))      # &lt;class 'int'&gt;

y = 10.5
print(type(y))      # &lt;class 'float'&gt;

name = "Python"
print(type(name))   # &lt;class 'str'&gt;

z = 3 + 4j
print(type(z))      # &lt;class 'complex'&gt;

flag = True
print(type(flag))   # &lt;class 'bool'&gt;</code></pre></div>

      <h3>In Short</h3>
      <ul>
        <li><strong>int</strong> — whole numbers</li>
        <li><strong>float</strong> — decimal numbers</li>
        <li><strong>str</strong> — text</li>
        <li><strong>complex</strong> — real + imaginary numbers</li>
        <li><strong>bool</strong> — True / False</li>
      </ul>
    `
  },

  'advanced-datatypes': {
    title: 'Advanced Data Types',
    html: `
      <h2>Advanced Data Types in Python</h2>

      <h3>Introduction</h3>
      <p>Advanced Data Types help us store and organize multiple related values in one variable (e.g., lists of employees, product catalogs, student records).</p>

      <img src="assets/datatypes-classification.png" alt="basic-datatypes" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>Formal Definition</h3>
      <p>"Advanced data types in Python are used to store collections of data and provide methods to organize, access, and manipulate multiple values efficiently."</p>

      <h3>Simple Definition</h3>
      <p>They allow us to store and manage more than one value in a single variable.</p>

      <img src="assets/advanced-datatypes.png" alt="basic-datatypes" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" />

      <h3>Types</h3>
      <ul>
        <li>List</li>
        <li>Tuple</li>
        <li>Set</li>
        <li>Dictionary</li>
      </ul>

      <h3>1. LIST (list)</h3>
      <p>Ordered, mutable collection enclosed in square brackets <code>[]</code>. Can store mixed types.</p>
      <div class="code-example"><pre><code class="language-python">marks = [70, 80, 90]
employee_names = ["Ravi", "Priya", "Amit"]
mixed_list = ["Apple", 10, 99.99, True]</code></pre></div>
      <p>Common operations:</p>
      <div class="code-example"><pre><code class="language-python">sales = [100, 200, 150, 300]
print(sales[0])        # 100
sales[1] = 250
sales.append(400)
sales.insert(2, 175)
sales.remove(150)
sales.pop(0)</code></pre></div>

      <h3>2. TUPLE (tuple)</h3>
      <p>Ordered, immutable collection enclosed in parentheses <code>()</code>. Faster and used for fixed data.</p>
      <div class="code-example"><pre><code class="language-python">days = ("Mon", "Tue", "Wed", "Thu", "Fri")
company_details = ("TCS", 1968, "IT")</code></pre></div>
      <p>Tuples cannot be modified; can be concatenated to form a new tuple.</p>

      <h3>3. SET (set)</h3>
      <p>Unordered collection of unique items enclosed in curly braces <code>{}</code>. No duplicates, fast membership tests.</p>
      <div class="code-example"><pre><code class="language-python">departments = {"HR", "IT", "Finance", "Marketing"}
unique_ids = {101, 102, 103, 101}  # duplicates removed</code></pre></div>
      <div class="code-example"><pre><code class="language-python">skills = {"Python", "Excel", "Statistics"}
skills.add("Communication")
skills.remove("Excel")

set1 = {1,2,3}
set2 = {3,4,5}
print(set1.union(set2))        # {1,2,3,4,5}
print(set1.intersection(set2)) # {3}
print(set1.difference(set2))   # {1,2}</code></pre></div>

      <h3>4. DICTIONARY (dict)</h3>
      <p>Stores key → value pairs in curly braces <code>{key: value}</code>. Ordered (Python 3.7+), mutable, fast lookups by key.</p>
      <div class="code-example"><pre><code class="language-python">employee = {
    "name": "Ravi Sharma",
    "age": 30,
    "department": "Marketing",
    "salary": 75000
}

print(employee["name"])        # Ravi Sharma
print(employee.get("salary"))  # 75000
employee["age"] = 31
employee["location"] = "Mumbai"
employee.pop("department")</code></pre></div>

      <h3>Comparison - Advanced Types</h3>
      <table>
        <tr><th>Feature</th><th>List</th><th>Tuple</th><th>Set</th><th>Dictionary</th></tr>
        <tr><td>Syntax</td><td>[ ]</td><td>( )</td><td>{ }</td><td>{key: value}</td></tr>
        <tr><td>Ordered</td><td>Yes</td><td>Yes</td><td>No</td><td>Yes</td></tr>
        <tr><td>Mutable</td><td>Yes</td><td>No</td><td>Yes</td><td>Yes</td></tr>
        <tr><td>Indexing</td><td>Yes</td><td>Yes</td><td>No</td><td>By key</td></tr>
        <tr><td>Duplicates</td><td>Allowed</td><td>Allowed</td><td>Not allowed</td><td>No duplicate keys</td></tr>
      </table>

      <h3>When to Use Which?</h3>
      <ul>
        <li>Use LIST for ordered collections you will modify (shopping cart, monthly sales).</li>
        <li>Use TUPLE for fixed data that should not change (coordinates, config values).</li>
        <li>Use SET when you need unique elements and set operations (unique emails, tags).</li>
        <li>Use DICTIONARY for labeled data and fast lookups (employee records, product catalog).</li>
      </ul>

      <h3>Practical Examples</h3>
      <div class="code-example"><pre><code class="language-python"># LIST - Employees
employees = ["Ravi", "Priya", "Amit", "Sneha"]

# TUPLE - Company details
company = ("TCS", 1968, "Mumbai", "IT")

# SET - Unique skills
skills = {"Python", "SQL", "Excel", "Leadership"}

# DICTIONARY - Employee record
employee_record = {
    "id": "E001",
    "name": "Ravi Sharma",
    "department": "Marketing",
    "salary": 75000,
    "skills": ["Digital Marketing", "Analytics", "Communication"]
}</code></pre></div>

      <h3>Why Advanced Types Matter</h3>
      <p>They let you model real-world collections efficiently, perform bulk operations, ensure data integrity (sets/dicts), and structure complex information (dictionaries) used across applications and data analysis.</p>
    `
  },

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
      <h3>Aim</h2>
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
        <img src="assets/prev-2025-page1.png" alt="Previous Paper July 2025 - Page 1" style="max-width:100%;height:auto;border:1px solid var(--border-color);border-radius:8px;" />
        <img src="assets/prev-2025-page2.png" alt="Previous Paper July 2025 - Page 2" style="max-width:100%;height:auto;border:1px solid var(--border-color);border-radius:8px;" />
      </div>
    `
  }
};

// Topic availability control system
const topicAvailability = {
  // Unit I topics - all enabled
  'intro-programming-languages': true,
  'what-is-python': true,
  'features-advantages': true,
  'history-versions': true,
  'applications': true,
  'first-program': true,
  'comments': true,
  'indentation': true,
  'keywords': true,
  'escape-sequence': true,
  'variables': true,
  'basic-datatypes': true,
  'advanced-datatypes': true,
  
  // Unit II - disabled (will be enabled as topics are covered in class)
  'operators-overview': false,
  'input-function': false,
  'type-conversion': false,
  'print-formatting': false,
  'strings-basics': false,
  'string-methods': false,
  'string-indexing-slicing': false,
  
  // Unit III - disabled
  'decision-making': false,
  'loops': false,
  'transfer-statements': false,
  'functions-overview': false,
  'function-arguments': false,
  'variable-scope': false,
  
  // Unit IV - disabled
  'lists-intro': false,
  'lists-accessing': false,
  'lists-methods': false,
  'tuples-intro': false,
  'tuples-accessing': false,
  'tuples-methods': false,
  
  // Unit V - disabled
  'sets-intro': false,
  'sets-methods': false,
  'dict-intro': false,
  'dict-methods': false,
  'modules-intro': false,
  'modules-imports': false,
  'module-random': false,
  'module-math': false,

  // Special sections - always enabled
  'practice-1': true,
  'practice-2': true,
  'practice-3': true,
  'practice-4': true,
  'lab-1': true,
  'lab-2': true,
  'lab-3': true,
  'lab-4': true,
  'assignments-overview': true,
  'prev-2025': true
};

// Function to check if topic is available
function isTopicAvailable(topicId) {
  return topicAvailability[topicId] !== false;
}

// Coming soon message for disabled topics
const comingSoonMessage = {
  title: 'Coming Soon!',
  html: `
    <div class="content-card">
      <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
        <div style="font-size: 4rem; margin-bottom: 1rem;">😄</div>
        <h2 style="color: var(--accent-primary); margin-bottom: 1rem;">Oh Oh, at least let me explain the topic in class first, then you can read the notes.</h2>
        <p style="font-size: 1.1rem; line-height: 1.6; max-width: 500px; margin: 0 auto;">
          This topic will be available once we cover it in the classroom. 
          Stay tuned and don't miss the class!
        </p>
      </div>
    </div>
  `
};

// Modified renderTopic function
function renderTopic(id) {
  const topic = topics[id] || topics[topicOrder[0]];
  const breadcrumb = document.getElementById('topicBreadcrumb');
  const content = document.getElementById('topicContent');
  
  // Get unit name for breadcrumb
  const unitName = unitMapping[id] || 'Unit I';
  
  // Update breadcrumb with unit information
  breadcrumb.innerHTML = `
    <span>Home</span>
    <span>></span>
    <span>${unitName}</span>
    <span>></span>
    <span>${topic.title}</span>
  `;
  
  // Check if topic is available
  if (!isTopicAvailable(id)) {
    content.innerHTML = comingSoonMessage.html;
    updateNav(id);
    return;
  }
  
  // Render normal content if available
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

// Function to enable topics (for easy management)
function enableTopics(topicIds) {
  topicIds.forEach(id => {
    topicAvailability[id] = true;
  });
  console.log(`Enabled topics: ${topicIds.join(', ')}`);
}

// Function to disable topics (for easy management)
function disableTopics(topicIds) {
  topicIds.forEach(id => {
    topicAvailability[id] = false;
  });
  console.log(`Disabled topics: ${topicIds.join(', ')}`);
}

// Function to enable entire unit
function enableUnit(unitNumber) {
  const unitTopics = {
    1: ['intro-programming-languages', 'what-is-python', 'features-advantages', 'history-versions', 'applications', 'first-program', 'comments', 'indentation', 'keywords', 'escape-sequence', 'variables', 'basic-datatypes', 'advanced-datatypes'],
    2: ['operators-overview', 'input-function', 'type-conversion', 'print-formatting', 'strings-basics', 'string-methods', 'string-indexing-slicing'],
    3: ['decision-making', 'loops', 'transfer-statements', 'functions-overview', 'function-arguments', 'variable-scope'],
    4: ['lists-intro', 'lists-accessing', 'lists-methods', 'tuples-intro', 'tuples-accessing', 'tuples-methods'],
    5: ['sets-intro', 'sets-methods', 'dict-intro', 'dict-methods', 'modules-intro', 'modules-imports', 'module-random', 'module-math']
  };
  
  if (unitTopics[unitNumber]) {
    enableTopics(unitTopics[unitNumber]);
    console.log(`Enabled entire Unit ${unitNumber}`);
  }
}

// Function to disable entire unit
function disableUnit(unitNumber) {
  const unitTopics = {
    1: ['intro-programming-languages', 'what-is-python', 'features-advantages', 'history-versions', 'applications', 'first-program', 'comments', 'indentation', 'keywords', 'escape-sequence', 'variables', 'basic-datatypes', 'advanced-datatypes'],
    2: ['operators-overview', 'input-function', 'type-conversion', 'print-formatting', 'strings-basics', 'string-methods', 'string-indexing-slicing'],
    3: ['decision-making', 'loops', 'transfer-statements', 'functions-overview', 'function-arguments', 'variable-scope'],
    4: ['lists-intro', 'lists-accessing', 'lists-methods', 'tuples-intro', 'tuples-accessing', 'tuples-methods'],
    5: ['sets-intro', 'sets-methods', 'dict-intro', 'dict-methods', 'modules-intro', 'modules-imports', 'module-random', 'module-math']
  };
  
  if (unitTopics[unitNumber]) {
    disableTopics(unitTopics[unitNumber]);
    console.log(`Disabled entire Unit ${unitNumber}`);
  }
}

// Function to get status of all topics
function getTopicStatus() {
  console.table(topicAvailability);
  return topicAvailability;
}

document.addEventListener('DOMContentLoaded', () => {
  const selected = localStorage.getItem('selectedTopic') || topicOrder[0];
  renderTopic(selected);
});