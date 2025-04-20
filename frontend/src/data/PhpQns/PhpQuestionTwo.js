export const phpQuestionsTwo = [
  // 🛧 Noob Mode
  {
    question: "Which symbol is used to start a PHP block?",
    options: ["<?php", "<?", "<script>", "<?="],
    correctAnswer: "<?php",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "Which keyword is used to create a function in PHP?",
    options: ["function", "func", "define", "method"],
    correctAnswer: "function",
    topic: "Functions",
    level: "newbie",
  },
  {
    question: "Which operator is used for string concatenation in PHP?",
    options: ["+", "&", ".", "++"],
    correctAnswer: ".",
    topic: "Operators",
    level: "newbie",
  },
  {
    question: "How do you add a comment in PHP?",
    options: ["// comment", "# comment", "/* comment */", "All of the above"],
    correctAnswer: "All of the above",
    topic: "Syntax",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which function returns the length of a string?",
    options: ["strlen()", "count()", "size()", "length()"],
    correctAnswer: "strlen()",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "What does `isset()` check?",
    options: [
      "If variable is set and not NULL",
      "If variable is a string",
      "If variable exists in database",
      "If file exists",
    ],
    correctAnswer: "If variable is set and not NULL",
    topic: "Variables",
    level: "beginner",
  },
  {
    question: "Which superglobal is used for GET data?",
    options: ["$_POST", "$GET", "$_GET", "$_DATA"],
    correctAnswer: "$_GET",
    topic: "Forms",
    level: "beginner",
  },
  {
    question: "What is the correct way to declare an array?",
    options: [
      "$arr = [1, 2, 3];",
      "$arr = {1,2,3};",
      "arr = (1,2,3);",
      "$arr = (1,2,3);",
    ],
    correctAnswer: "$arr = [1, 2, 3];",
    topic: "Arrays",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a PHP function to return the cube of a number.",
    codeEditor: true,
    correctAnswer: "function cube($n) {\n  return $n * $n * $n;\n}",
    topic: "Functions",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What does `explode()` function do?",
    options: [
      "Splits a string into an array",
      "Joins array into string",
      "Removes whitespace",
      "Creates explosion",
    ],
    correctAnswer: "Splits a string into an array",
    topic: "Strings",
    level: "intermediate",
  },
  {
    question: "Which function checks if a file exists?",
    options: ["file_check()", "exists()", "file_exists()", "check_file()"],
    correctAnswer: "file_exists()",
    topic: "File Handling",
    level: "intermediate",
  },
  {
    question: "Which keyword is used to define a class?",
    options: ["object", "new", "class", "define"],
    correctAnswer: "class",
    topic: "OOP",
    level: "intermediate",
  },
  {
    question: "How do you loop through an associative array?",
    options: ["for", "foreach", "loop", "map"],
    correctAnswer: "foreach",
    topic: "Loops",
    level: "intermediate",
  },
  {
    question: "Which function removes whitespace from both ends of a string?",
    options: ["strip()", "trim()", "chop()", "removeSpace()"],
    correctAnswer: "trim()",
    topic: "Strings",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a PHP function to reverse a string.",
    codeEditor: true,
    correctAnswer: "function reverseStr($str) {\n  return strrev($str);\n}",
    topic: "Strings",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "Which OOP concept allows method overriding?",
    options: ["Inheritance", "Encapsulation", "Abstraction", "Composition"],
    correctAnswer: "Inheritance",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which keyword is used to inherit a class?",
    options: ["extend", "extends", "inherits", "use"],
    correctAnswer: "extends",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "What does `final` keyword do in PHP?",
    options: [
      "Prevents method override",
      "Defines last element",
      "Ends script",
      "None",
    ],
    correctAnswer: "Prevents method override",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which function is used to serialize a PHP object?",
    options: ["json_encode()", "serialize()", "pack()", "flatten()"],
    correctAnswer: "serialize()",
    topic: "Data Handling",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question: "Write a PHP function to calculate factorial using loop.",
    codeEditor: true,
    correctAnswer:
      "function factorial($n) {\n  $f = 1;\n  for ($i = 1; $i <= $n; $i++) {\n    $f *= $i;\n  }\n  return $f;\n}",
    topic: "Loops",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which design pattern ensures only one instance of a class?",
    options: ["Factory", "Observer", "Singleton", "Adapter"],
    correctAnswer: "Singleton",
    topic: "Design Patterns",
    level: "prodigy",
  },
  {
    question: "Which interface is used for custom iteration?",
    options: ["Countable", "ArrayAccess", "Iterator", "Seekable"],
    correctAnswer: "Iterator",
    topic: "Interfaces",
    level: "prodigy",
  },
  {
    question: "What is the use of `__get()` magic method?",
    options: [
      "Overload static call",
      "Access private properties",
      "Serialize object",
      "Auto-create objects",
    ],
    correctAnswer: "Access private properties",
    topic: "OOP",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question: "Write a recursive PHP function to calculate power (x^n).",
    codeEditor: true,
    correctAnswer:
      "function power($x, $n) {\n  if ($n == 0) return 1;\n  return $x * power($x, $n - 1);\n}",
    topic: "Recursion",
    level: "prodigy",
  },
];
