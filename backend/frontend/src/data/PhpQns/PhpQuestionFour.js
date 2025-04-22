export const phpQuestionsFour = [
  // 🛧 Noob Mode
  {
    question: "Which tag is used to start PHP code?",
    options: ["<php>", "<?php", "<script>", "<?="],
    correctAnswer: "<?php",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "Which symbol is used to concatenate strings in PHP?",
    options: [".", "+", "&", ","],
    correctAnswer: ".",
    topic: "Strings",
    level: "newbie",
  },
  {
    question: "Which keyword is used to declare a variable in PHP?",
    options: ["let", "$", "var", "define"],
    correctAnswer: "$",
    topic: "Variables",
    level: "newbie",
  },
  {
    question: "What will `echo 5 + '5cats';` output?",
    options: ["10", "55", "5cats", "Error"],
    correctAnswer: "10",
    topic: "Type Juggling",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "What is the default value of an uninitialized variable?",
    options: ["null", "undefined", "0", "false"],
    correctAnswer: "null",
    topic: "Variables",
    level: "beginner",
  },
  {
    question: "Which of the following is a valid array declaration?",
    options: [
      "$arr = array(1, 2, 3);",
      "array arr = [1,2,3];",
      "list arr = (1,2,3);",
      "arr = {1,2,3};",
    ],
    correctAnswer: "$arr = array(1, 2, 3);",
    topic: "Arrays",
    level: "beginner",
  },
  {
    question: "Which PHP function returns the type of a variable?",
    options: ["typeof()", "gettype()", "var_type()", "type()"],
    correctAnswer: "gettype()",
    topic: "Variables",
    level: "beginner",
  },
  {
    question: "What does `empty()` return for an empty string?",
    options: ["true", "false", "null", "0"],
    correctAnswer: "true",
    topic: "Booleans",
    level: "beginner",
  },
  {
    question: "How do you check if a value is an array?",
    options: ["is_array()", "check_array()", "array()", "gettype() == array"],
    correctAnswer: "is_array()",
    topic: "Arrays",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a PHP function that calculates the square of a number.",
    codeEditor: true,
    correctAnswer: "function square($n) {\n  return $n * $n;\n}",
    topic: "Math",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which operator is used for string comparison?",
    options: ["==", "===", "strcmp()", "equals()"],
    correctAnswer: "strcmp()",
    topic: "Strings",
    level: "intermediate",
  },
  {
    question: "What is the difference between `include` and `require`?",
    options: [
      "`require` stops script on failure",
      "`include` stops script on failure",
      "Both are identical",
      "`require` only works with functions",
    ],
    correctAnswer: "`require` stops script on failure",
    topic: "File Inclusion",
    level: "intermediate",
  },
  {
    question: "Which function reads the contents of a file into a string?",
    options: ["read()", "file_get_contents()", "fopen()", "get()"],
    correctAnswer: "file_get_contents()",
    topic: "File Handling",
    level: "intermediate",
  },
  {
    question: "Which PHP function parses a URL and returns components?",
    options: ["parse_url()", "explode_url()", "url_split()", "url_parts()"],
    correctAnswer: "parse_url()",
    topic: "Strings",
    level: "intermediate",
  },
  {
    question: "Which loop is ideal when the number of iterations is unknown?",
    options: ["for", "while", "foreach", "loop"],
    correctAnswer: "while",
    topic: "Loops",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a PHP function to count the number of vowels in a string.",
    codeEditor: true,
    correctAnswer:
      "function countVowels($str) {\n  return preg_match_all('/[aeiou]/i', $str);\n}",
    topic: "Strings",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is the purpose of `final` keyword in PHP?",
    options: [
      "Prevent overriding or inheritance",
      "Make constant value",
      "Declare static methods",
      "None of the above",
    ],
    correctAnswer: "Prevent overriding or inheritance",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which magic method is called when an object is destroyed?",
    options: ["__destroy()", "__end()", "__destruct()", "__delete()"],
    correctAnswer: "__destruct()",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which superglobal is used for cookie data?",
    options: ["$_POST", "$_COOKIE", "$_SESSION", "$_SERVER"],
    correctAnswer: "$_COOKIE",
    topic: "Cookies",
    level: "advanced",
  },
  {
    question: "Which function starts a session in PHP?",
    options: [
      "session_start()",
      "start_session()",
      "init_session()",
      "session()",
    ],
    correctAnswer: "session_start()",
    topic: "Sessions",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question: "Write a PHP function to check if a number is even.",
    codeEditor: true,
    correctAnswer: "function isEven($n) {\n  return $n % 2 === 0;\n}",
    topic: "Math",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which PHP feature allows objects to behave like arrays?",
    options: ["ArrayAccess interface", "Iterator", "Generator", "Arrayable"],
    correctAnswer: "ArrayAccess interface",
    topic: "OOP",
    level: "prodigy",
  },
  {
    question: "Which function encrypts passwords in PHP 7+ securely?",
    options: ["crypt()", "md5()", "password_hash()", "sha256()"],
    correctAnswer: "password_hash()",
    topic: "Security",
    level: "prodigy",
  },
  {
    question: "What is a closure in PHP?",
    options: [
      "A class method",
      "An anonymous function",
      "A file handler",
      "A database connection",
    ],
    correctAnswer: "An anonymous function",
    topic: "Functions",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question: "Write an anonymous PHP function that adds 2 to a number.",
    codeEditor: true,
    correctAnswer: "$addTwo = function($x) {\n  return $x + 2;\n};",
    topic: "Closures",
    level: "prodigy",
  },
];
