export const phpQuestionsThree = [
  // 🛧 Noob Mode
  {
    question: "Which extension is typically used for PHP files?",
    options: [".html", ".js", ".php", ".xml"],
    correctAnswer: ".php",
    topic: "Basics",
    level: "newbie",
  },
  {
    question: "How do you write a single-line comment in PHP?",
    options: ["//", "/* */", "#", "Both // and #"],
    correctAnswer: "Both // and #",
    topic: "Comments",
    level: "newbie",
  },
  {
    question: "What does PHP stand for?",
    options: [
      "Preprocessed Hypertext Pages",
      "Private Hypertext Processor",
      "PHP: Hypertext Preprocessor",
      "Personal Home Page",
    ],
    correctAnswer: "PHP: Hypertext Preprocessor",
    topic: "Basics",
    level: "newbie",
  },
  {
    question: "Which PHP function is used to terminate script execution?",
    options: ["die()", "exit()", "end()", "Both die() and exit()"],
    correctAnswer: "Both die() and exit()",
    topic: "Flow Control",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "What is the result of `true && false` in PHP?",
    options: ["true", "false", "1", "0"],
    correctAnswer: "false",
    topic: "Booleans",
    level: "beginner",
  },
  {
    question: "Which PHP keyword is used to define a constant?",
    options: ["define", "const", "constant", "static"],
    correctAnswer: "define",
    topic: "Constants",
    level: "beginner",
  },
  {
    question: "Which function is used to split a string into an array?",
    options: ["explode()", "split()", "implode()", "str_split()"],
    correctAnswer: "explode()",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "Which operator checks both value and type?",
    options: ["==", "=", "===", "!="],
    correctAnswer: "===",
    topic: "Operators",
    level: "beginner",
  },
  {
    question: "Which function is used to include files only once?",
    options: ["require()", "include_once()", "load()", "fetch()"],
    correctAnswer: "include_once()",
    topic: "File Inclusion",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a PHP function to return the absolute value of a number.",
    codeEditor: true,
    correctAnswer: "function absolute($n) {\n  return $n < 0 ? -$n : $n;\n}",
    topic: "Math",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which function checks if a variable exists?",
    options: ["isset()", "exists()", "defined()", "isnull()"],
    correctAnswer: "isset()",
    topic: "Variables",
    level: "intermediate",
  },
  {
    question: "Which of the following is used to destroy a session?",
    options: [
      "session_destroy()",
      "session_end()",
      "destroy_session()",
      "unset_session()",
    ],
    correctAnswer: "session_destroy()",
    topic: "Sessions",
    level: "intermediate",
  },
  {
    question: "Which function counts elements in an array?",
    options: ["count()", "length()", "sizeof()", "Both count() and sizeof()"],
    correctAnswer: "Both count() and sizeof()",
    topic: "Arrays",
    level: "intermediate",
  },
  {
    question: "Which superglobal holds uploaded file data?",
    options: ["$_POST", "$_FILES", "$_INPUT", "$_UPLOAD"],
    correctAnswer: "$_FILES",
    topic: "File Handling",
    level: "intermediate",
  },
  {
    question: "What is the default port for MySQL with PHP?",
    options: ["3306", "80", "8080", "21"],
    correctAnswer: "3306",
    topic: "Databases",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a PHP function to check if a string is a palindrome.",
    codeEditor: true,
    correctAnswer:
      "function isPalindrome($str) {\n  return $str === strrev($str);\n}",
    topic: "Strings",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is the use of `namespace` in PHP?",
    options: [
      "To store files",
      "To define variable scope",
      "To avoid name collisions",
      "To define constants",
    ],
    correctAnswer: "To avoid name collisions",
    topic: "Namespaces",
    level: "advanced",
  },
  {
    question: "Which OOP principle allows a class to inherit from another?",
    options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    correctAnswer: "Inheritance",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which function connects to a MySQL database using PDO?",
    options: ["mysqli_connect()", "new PDO()", "connect()", "mysql_connect()"],
    correctAnswer: "new PDO()",
    topic: "Databases",
    level: "advanced",
  },
  {
    question: "Which function is used to hash a password securely?",
    options: ["md5()", "sha1()", "password_hash()", "crypt()"],
    correctAnswer: "password_hash()",
    topic: "Security",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question:
      "Write a PHP function that returns the factorial of a number using recursion.",
    codeEditor: true,
    correctAnswer:
      "function factorial($n) {\n  if ($n <= 1) return 1;\n  return $n * factorial($n - 1);\n}",
    topic: "Recursion",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "What is the output of `var_dump(null == false);`?",
    options: ["true", "false", "null", "0"],
    correctAnswer: "false",
    topic: "Type Comparison",
    level: "prodigy",
  },
  {
    question:
      "Which keyword makes a method belong to the class rather than an object?",
    options: ["static", "final", "abstract", "global"],
    correctAnswer: "static",
    topic: "OOP",
    level: "prodigy",
  },
  {
    question: "Which operator is used for error control?",
    options: ["!", "?", "@", "&"],
    correctAnswer: "@",
    topic: "Error Control",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question: "Write a PHP function using arrow syntax to double a number.",
    codeEditor: true,
    correctAnswer: "$double = fn($x) => $x * 2;",
    topic: "Arrow Functions",
    level: "prodigy",
  },
];
