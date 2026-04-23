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

// Safe ID normalization function
function normalizeTopicId(id) {
  if (id && topics[id]) return id;
  return topicOrder.find(tid => topics[tid]) || 'intro-programming-languages';
}

const topicOrder = [
  'intro-programming-languages',
  'what-is-python','features-advantages','history-versions','applications',
  'installation-ide',
  'first-program','comments','indentation','keywords','escape-sequence','variables',
  'datatypes','basic-datatypes','advanced-datatypes',
  
  'operators-overview',
  'arithmetic-operator',
  'assignment-overview',
  'comparision-overview',
  'logical-overview',
  'bitwise-overview',
  'identity-overview',
  'membership-overview',
  'input-function','type-conversion','print-formatting','output-formatting',
  'strings-basics','string-methods','string-indexing-slicing',
  
  'decision-making','loops','transfer-statements','functions-overview','function-arguments','variable-scope',
  'lists-intro','lists-accessing','lists-methods',
  'tuples-intro','tuples-accessing','tuples-methods',
  'sets-intro','sets-methods','dict-intro','dict-methods',
  'modules-intro','modules-imports','module-random','module-math',
  'class-ppt-unit-1','class-ppt-unit-2',
  'lab-1','lab-2','lab-3','lab-4','lab-5','lab-6','lab-7',
  'assignments-overview',
  'prev-2025'
];

// Unit mapping for breadcrumb navigation
const unitMapping = {
  'intro-programming-languages': 'Unit I',
  'what-is-python': 'Unit I',
  'features-advantages': 'Unit I',
  'history-versions': 'Unit I',
  'applications': 'Unit I',
  'installation-ide': 'Unit I',
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

  // Class PPT / Labs / Assignments / Previous Papers
  'class-ppt-unit-1': 'Class PPT',
  'class-ppt-unit-2': 'Class PPT',
  'lab-1': 'Lab Activities',
  'lab-2': 'Lab Activities',
  'lab-3': 'Lab Activities',
  'lab-4': 'Lab Activities',
  'lab-5': 'Lab Activities',
  'lab-6': 'Lab Activities',
  'lab-7': 'Lab Activities',
  'assignments-overview': 'Assignments',
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

      <h3>Introduction</h2>
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
company_details = ("TCS", 1968, "Mumbai", "IT")</code></pre></div>
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
      <div class="code-example"><pre><code># LIST - Employees
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
},
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
  'class-ppt-unit-1': {
    title: 'Class PPT - Unit 1',
    html: `
      <h2>Class PPT - Unit 1</h2>
      <p>This section displays the Unit 1 classroom PPT from your <code>assets</code> folder.</p>
      <p>Keep your PDF at <code>assets/unit-1-ppt.pdf</code> and it will be shown below inside the app.</p>

      <div class="pdf-actions">
        <a class="pdf-link-btn" href="assets/unit-1-ppt.pdf" target="_blank" rel="noopener noreferrer">
          <i class="fa-solid fa-up-right-from-square"></i>
          Open PDF in New Tab
        </a>
      </div>

      <div class="pdf-viewer-card">
        <iframe
          class="pdf-viewer-frame"
          src="assets/unit-1-ppt.pdf#toolbar=1&navpanes=0&scrollbar=1"
          title="Unit 1 PPT PDF Viewer"
          loading="lazy">
        </iframe>
      </div>
    `
  },
  'class-ppt-unit-2': {
    title: 'Class PPT - Unit 2',
    html: `
      <h2>Class PPT - Unit 2</h2>
      <p>Unit 2 PPT card has been added.</p>
      <p>When you are ready, place the PDF in <code>assets/unit-2-ppt.pdf</code> and we can show it here the same way as Unit 1.</p>

      <div class="pdf-placeholder">
        <i class="fa-solid fa-file-powerpoint"></i>
        <p>Unit 2 PDF not added yet.</p>
      </div>
    `
  },

  // NEW: Practice Sheets – Practice 1 (Basics)
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
  },
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
  'prev-2025': {
    title: 'Previous Paper - July 2025',
    html: `
      <h2>Previous Paper - July 2025</h2>
      <div style="display:flex;flex-direction:column;gap:12px;">
        <img src="assets/prev-2025-page1.png" alt="Previous Paper July 2025 - Page 1" style="max-width:100%;height:auto;border:1px solid var(--border-color);border-radius:8px;" />
        <img src="assets/prev-2025-page2.png" alt="Previous Paper July 2025 - Page 2" style="max-width:100%;height:auto;border:1px solid var(--border-color);border-radius:8px;" />
      </div>
    `
  },

  // NEW: Assignments overview stub so topic loads correctly
  'assignments-overview': {
    title: 'Assignment for Internal 1',
    html: `
        <h2>Unit I</h2>
        <ol>
          <li>What is Python? Explain its features and advantages in detail.</li>
          <li>Explain the history of Python and describe its applications in various fields.</li>
          <li>Explain Comments, Indentation and Escape Sequences with examples.</li>
          <li>Discuss Keywords and Variables in Python.</li>
          <li>Explain the Basic and Advanced Data Types in Python.</li>
        </ol>

        <h2>Unit II</h2>
        <ol>
          <li>Explain different types of operators in Python with suitable examples.</li>
          <li>What is type conversion in Python? Explain Implicit & Explicit type conversion with examples.</li>
          <li>Explain input() and print() function in python in detail.</li>
          <li>Explain how strings are created in Python. Explain any 10 string Built-in methods.</li>
          <li>What is a string indexing and slicing. Explain with examples.</li>
        </ol>
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
  'installation-ide': true,
  'first-program': true,
  'comments': true,
  'indentation': true,
  'keywords': true,
  'escape-sequence': true,
  'variables': true,
  'datatypes': true,
  'basic-datatypes': true,
  'advanced-datatypes': true,
  
  // Unit II - all enabled
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
  'string-indexing-slicing': true,
  
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
  'class-ppt-unit-1': true,
  'class-ppt-unit-2': true,
  'practice-1': true,
  'lab-1': true,
  'lab-2': true,
  'lab-3': true,
  'lab-4': true,
  'lab-5': true,
  'lab-6': true,
  'lab-7': true,
  'assignments-overview': true,
  'prev-2025': true
};

// Ordered topic lists per unit (used for Prev/Next navigation)
const unitTopicsByName = {
  'Unit I': [
    'intro-programming-languages',
    'what-is-python',
    'features-advantages',
    'history-versions',
    'applications',
    'installation-ide',
    'first-program',
    'comments',
    'indentation',
    'keywords',
    'escape-sequence',
    'variables',
    'datatypes',
    'basic-datatypes',
    'advanced-datatypes'
  ],
  'Unit II': [
    'operators-overview',
    'arithmetic-operator',
    'assignment-overview',
    'comparision-overview',
    'logical-overview',
    'bitwise-overview',
    'identity-overview',
    'membership-overview',
    'input-function',
    'type-conversion',
    'print-formatting',
    'output-formatting',
    'strings-basics',
    'string-methods',
    'string-indexing-slicing'
  ],
  'Unit III': [
    'decision-making',
    'loops',
    'transfer-statements',
    'functions-overview',
    'function-arguments',
    'variable-scope'
  ],
  'Unit IV': [
    'lists-intro',
    'lists-accessing',
    'lists-methods',
    'tuples-intro',
    'tuples-accessing',
    'tuples-methods'
  ],
  'Unit V': [
    'sets-intro',
    'sets-methods',
    'dict-intro',
    'dict-methods',
    'modules-intro',
    'modules-imports',
    'module-random',
    'module-math'
  ],
  'Class PPT': ['class-ppt-unit-1', 'class-ppt-unit-2'],
  'Practice Sheets': ['practice-1'],
  'Assignments': ['assignments-overview'],
  'Lab Activities': ['lab-1', 'lab-2', 'lab-3', 'lab-4', 'lab-5', 'lab-6', 'lab-7'],
  'Previous Papers': ['prev-2025']
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
  const safeId = normalizeTopicId(id);
  const topic = topics[safeId];
  const breadcrumb = document.getElementById('topicBreadcrumb');
  const content = document.getElementById('topicContent');
  
  // Get unit name for breadcrumb
  const unitName = unitMapping[safeId] || 'Unit I';
  
  // Update breadcrumb with unit information
  breadcrumb.innerHTML = `
    <span>Home</span>
    <span>></span>
    <span>${unitName}</span>
    <span>></span>
    <span>${topic.title}</span>
  `;
  
  // Check if topic is available
  if (!isTopicAvailable(safeId)) {
    content.innerHTML = comingSoonMessage.html;
    updateNav(safeId);
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
  updateNav(safeId);
}

// NEW: Prev/Next navigation updater – keeps navigation within the same unit
function updateNav(currentId) {
  const prevBtn = document.getElementById('prevTopic');
  const nextBtn = document.getElementById('nextTopic');
  if (!prevBtn || !nextBtn) return;

  const unitName = unitMapping[currentId] || 'Unit I';
  let list = unitTopicsByName[unitName];

  // Fallback to global order if somehow not found
  if (!list || !Array.isArray(list)) {
    list = topicOrder;
  }

  // Only include topics that are defined and (optionally) available
  const availableList = list.filter(
    tid => topics[tid] && isTopicAvailable(tid)
  );

  const idx = availableList.indexOf(currentId);

  const hasPrev = idx > 0;
  const hasNext = idx !== -1 && idx < availableList.length - 1;

  prevBtn.disabled = !hasPrev;
  nextBtn.disabled = !hasNext;

  prevBtn.dataset.targetTopic = hasPrev ? availableList[idx - 1] : '';
  nextBtn.dataset.targetTopic = hasNext ? availableList[idx + 1] : '';
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
    1: ['intro-programming-languages', 'what-is-python', 'features-advantages', 'history-versions', 'applications', 'installation-ide', 'first-program', 'comments', 'indentation', 'keywords', 'escape-sequence', 'variables', 'datatypes', 'basic-datatypes', 'advanced-datatypes'],
    2: ['operators-overview', 'arithmetic-operator', 'assignment-overview', 'comparision-overview', 'logical-overview', 'bitwise-overview', 'identity-overview', 'membership-overview', 'input-function', 'type-conversion', 'print-formatting', 'output-formatting', 'strings-basics', 'string-methods', 'string-indexing-slicing'],
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
    1: ['intro-programming-languages', 'what-is-python', 'features-advantages', 'history-versions', 'applications', 'installation-ide', 'first-program', 'comments', 'indentation', 'keywords', 'escape-sequence', 'variables', 'datatypes', 'basic-datatypes', 'advanced-datatypes'],
    2: ['operators-overview', 'arithmetic-operator', 'assignment-overview', 'comparision-overview', 'logical-overview', 'bitwise-overview', 'identity-overview', 'membership-overview', 'input-function', 'type-conversion', 'print-formatting', 'output-formatting', 'strings-basics', 'string-methods', 'string-indexing-slicing'],
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
  const selected = normalizeTopicId(localStorage.getItem('selectedTopic'));
  localStorage.setItem('selectedTopic', selected);
  renderTopic(selected);

  const prevBtn = document.getElementById('prevTopic');
  const nextBtn = document.getElementById('nextTopic');

  prevBtn?.addEventListener('click', () => {
    const target = prevBtn.dataset.targetTopic;
    if (target) {
      localStorage.setItem('selectedTopic', target);
      renderTopic(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  nextBtn?.addEventListener('click', () => {
    const target = nextBtn.dataset.targetTopic;
    if (target) {
      localStorage.setItem('selectedTopic', target);
      renderTopic(target);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

// Smart Scroll Button Functionality (same as in script.js)
document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.getElementById('smartScrollBtn');
    if (!scrollBtn) return;

    const icon = scrollBtn.querySelector('i');
    let isAtTop = true;
    let isVisible = false;
    let ticking = false;

    // Throttled scroll handler for better performance
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(updateScrollButton);
            ticking = true;
        }
    }

    function updateScrollButton() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );

        // Show button if not near the very top (after 200px)
        const shouldShow = scrollTop > 200;
        
        // Determine if user is closer to top or bottom
        const distanceFromTop = scrollTop;
        const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
        const newIsAtTop = distanceFromTop < distanceFromBottom;

        // Update button visibility
        if (shouldShow !== isVisible) {
            isVisible = shouldShow;
            scrollBtn.classList.toggle('visible', shouldShow);
        }

        // Update button direction and tooltip
        if (newIsAtTop !== isAtTop) {
            isAtTop = newIsAtTop;
            
            if (isAtTop) {
                // User is closer to top, show down arrow (scroll to bottom)
                icon.className = 'fas fa-chevron-down';
                scrollBtn.setAttribute('aria-label', 'Scroll to bottom');
                scrollBtn.setAttribute('title', 'Go to bottom');
                scrollBtn.classList.add('rotate-icon');
            } else {
                // User is closer to bottom, show up arrow (scroll to top)
                icon.className = 'fas fa-chevron-up';
                scrollBtn.setAttribute('aria-label', 'Scroll to top');
                scrollBtn.setAttribute('title', 'Go to top');
                scrollBtn.classList.remove('rotate-icon');
            }
        }

        ticking = false;
    }

    // Smooth scroll function
    function smoothScrollTo(target) {
        const start = window.pageYOffset;
        const distance = target - start;
        const duration = Math.min(1000, Math.abs(distance) / 2); // Max 1 second
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);

            // Easing function (ease-in-out)
            const ease = progress < 0.5 
                ? 2 * progress * progress 
                : -1 + (4 - 2 * progress) * progress;

            window.scrollTo(0, start + (distance * ease));

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        }

        requestAnimationFrame(animation);
    }

    // Click handler
    scrollBtn.addEventListener('click', function() {
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );

        if (isAtTop) {
            // Scroll to bottom
            smoothScrollTo(documentHeight - window.innerHeight);
        } else {
            // Scroll to top
            smoothScrollTo(0);
        }

        // Add click feedback
        scrollBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            scrollBtn.style.transform = '';
        }, 150);
    });

    // Keyboard accessibility
    scrollBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollBtn.click();
        }
    });

    // Initialize scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    updateScrollButton();

    // Handle window resize (may affect document height)
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(updateScrollButton, 150);
    });
});
