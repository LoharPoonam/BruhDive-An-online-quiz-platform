export const phpQuestionsOne = [
  // 🛧 Noob Mode
  {
    question: "Which symbol is used to start a variable in PHP?",
    options: ["$", "#", "&", "%"],
    correctAnswer: "$",
    topic: "Variables",
    level: "newbie",
  },
  {
    question: "Which tag is used to write PHP code?",
    options: ["<script>", "<?php ?>", "<php>", "<? ?>"],
    correctAnswer: "<?php ?>",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "How do you print in PHP?",
    options: ["print()", "write()", "echo", "console.log()"],
    correctAnswer: "echo",
    topic: "Output",
    level: "newbie",
  },
  {
    question: "Which of these is a valid PHP data type?",
    options: ["int", "real", "decimal", "floaty"],
    correctAnswer: "int",
    topic: "Data Types",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "What will `echo 5 + '5 cars';` output?",
    options: ["10", "5 cars", "55", "Error"],
    correctAnswer: "10",
    topic: "Type Juggling",
    level: "beginner",
  },
  {
    question: "Which superglobal is used to collect form data via POST?",
    options: ["$_POST", "$POST", "$_FORM", "$_DATA"],
    correctAnswer: "$_POST",
    topic: "Forms",
    level: "beginner",
  },
  {
    question: "Which function is used to get the length of a string?",
    options: ["length()", "strlen()", "count()", "size()"],
    correctAnswer: "strlen()",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "Which PHP function checks if a variable is empty?",
    options: ["is_empty()", "isset()", "empty()", "null()"],
    correctAnswer: "empty()",
    topic: "Variables",
    level: "beginner",
  },
  {
    question: "Which symbol is used for concatenation in PHP?",
    options: [".", "+", "&", ","],
    correctAnswer: ".",
    topic: "Strings",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a PHP function to return the square of a number.",
    codeEditor: true,
    correctAnswer: "function square($n) {\n  return $n * $n;\n}",
    topic: "Functions",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What does the `include` statement do?",
    options: [
      "Includes another PHP file",
      "Imports CSS",
      "Starts a session",
      "Echoes content",
    ],
    correctAnswer: "Includes another PHP file",
    topic: "File Handling",
    level: "intermediate",
  },
  {
    question: "Which function is used to start a session in PHP?",
    options: ["start_session()", "begin()", "session_start()", "init()"],
    correctAnswer: "session_start()",
    topic: "Sessions",
    level: "intermediate",
  },
  {
    question: "How do you check if a key exists in an array?",
    options: ["array_has_key()", "isset()", "key_exists()", "in_array()"],
    correctAnswer: "key_exists()",
    topic: "Arrays",
    level: "intermediate",
  },
  {
    question: "Which function reads a file into a string?",
    options: ["read()", "readfile()", "file_get_contents()", "open()"],
    correctAnswer: "file_get_contents()",
    topic: "File Handling",
    level: "intermediate",
  },
  {
    question: "Which of the following is used for error handling?",
    options: ["try/catch", "do/catch", "error_catch", "guard"],
    correctAnswer: "try/catch",
    topic: "Error Handling",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a PHP function to check if a number is odd.",
    codeEditor: true,
    correctAnswer: "function isOdd($n) {\n  return $n % 2 !== 0;\n}",
    topic: "Operators",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is the use of `final` keyword in PHP?",
    options: [
      "Marks a variable as constant",
      "Prevents function overriding",
      "Ends a loop",
      "Closes PHP script",
    ],
    correctAnswer: "Prevents function overriding",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which method is automatically called in a class constructor?",
    options: ["__init()", "__construct()", "__start()", "__begin()"],
    correctAnswer: "__construct()",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "What does PDO stand for?",
    options: [
      "PHP Data Operations",
      "PHP Data Object",
      "Programming Data Object",
      "Predefined Data Object",
    ],
    correctAnswer: "PHP Data Object",
    topic: "Databases",
    level: "advanced",
  },
  {
    question: "Which function ends script execution in PHP?",
    options: ["stop()", "exit()", "break()", "return()"],
    correctAnswer: "exit()",
    topic: "Flow Control",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question: "Write a PHP class with a constructor that sets a name.",
    codeEditor: true,
    correctAnswer:
      "class Person {\n  public $name;\n  function __construct($name) {\n    $this->name = $name;\n  }\n}",
    topic: "OOP",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which keyword is used to implement interfaces in PHP?",
    options: ["use", "extends", "implements", "require"],
    correctAnswer: "implements",
    topic: "OOP",
    level: "prodigy",
  },
  {
    question: "Which PHP feature allows passing functions as arguments?",
    options: ["callable", "invoke", "lambda", "closure"],
    correctAnswer: "callable",
    topic: "Functions",
    level: "prodigy",
  },
  {
    question: "Which of the following is used for dependency injection?",
    options: ["traits", "interfaces", "constructors", "DI container"],
    correctAnswer: "constructors",
    topic: "Architecture",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question: "Write a PHP closure that returns square of a number.",
    codeEditor: true,
    correctAnswer: "$square = function($x) {\n  return $x * $x;\n};",
    topic: "Closures",
    level: "prodigy",
  },
];
