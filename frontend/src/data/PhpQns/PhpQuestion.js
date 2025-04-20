export const phpQuestions = [
  // 🛧 Noob Mode
  {
    question: "Which symbol is used to start a PHP block?",
    options: ["<?php", "<script>", "<php>", "<?="],
    correctAnswer: "<?php",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "Which function outputs text in PHP?",
    options: ["print()", "echo()", "console.log()", "say()"],
    correctAnswer: "echo()",
    topic: "Output",
    level: "newbie",
  },
  {
    question: "What is the correct way to end a PHP statement?",
    options: [".", ":", ";", ","],
    correctAnswer: ";",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "Which symbol is used to declare a variable in PHP?",
    options: ["$", "&", "#", "@"],
    correctAnswer: "$",
    topic: "Variables",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which function gets the length of a string?",
    options: ["strlen()", "count()", "length()", "size()"],
    correctAnswer: "strlen()",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "What is the output of `echo 3 + '3';` in PHP?",
    options: ["6", "33", "3", "Error"],
    correctAnswer: "6",
    topic: "Type Conversion",
    level: "beginner",
  },
  {
    question: "What does `isset()` check for?",
    options: ["Variable existence", "Null value", "Type", "Length"],
    correctAnswer: "Variable existence",
    topic: "Variables",
    level: "beginner",
  },
  {
    question: "Which keyword is used to define a function in PHP?",
    options: ["function", "def", "func", "method"],
    correctAnswer: "function",
    topic: "Functions",
    level: "beginner",
  },
  {
    question: "Which superglobal is used for form data via POST?",
    options: ["$_GET", "$POST", "$_FORM", "$_POST"],
    correctAnswer: "$_POST",
    topic: "Forms",
    level: "beginner",
  },

  // 💻 Code Editor (random)
  {
    question: "Write a PHP function that returns the square of a number.",
    codeEditor: true,
    correctAnswer: "function square($n) {\n  return $n * $n;\n}",
    topic: "Functions",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "How do you include another file in PHP?",
    options: ["require()", "include()", "use()", "Both A and B"],
    correctAnswer: "Both A and B",
    topic: "File Handling",
    level: "intermediate",
  },
  {
    question: "What does `explode()` do in PHP?",
    options: [
      "Splits a string into an array",
      "Joins an array to string",
      "Deletes an array",
      "Compresses a string",
    ],
    correctAnswer: "Splits a string into an array",
    topic: "Strings",
    level: "intermediate",
  },
  {
    question: "Which loop is guaranteed to run at least once?",
    options: ["for", "while", "do...while", "foreach"],
    correctAnswer: "do...while",
    topic: "Loops",
    level: "intermediate",
  },
  {
    question: "What is the correct way to define a class in PHP?",
    options: [
      "class MyClass {}",
      "MyClass = class {}",
      "new class {}",
      "struct MyClass {}",
    ],
    correctAnswer: "class MyClass {}",
    topic: "OOP",
    level: "intermediate",
  },

  // 💻 Code Editor (random)
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
    question: "What does `===` operator do in PHP?",
    options: ["Checks value", "Checks type", "Checks both", "Assigns value"],
    correctAnswer: "Checks both",
    topic: "Operators",
    level: "advanced",
  },
  {
    question: "What is a trait in PHP?",
    options: [
      "A type of class",
      "Reusable code in multiple classes",
      "An interface",
      "A constant",
    ],
    correctAnswer: "Reusable code in multiple classes",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which of the following supports interfaces?",
    options: ["Classes", "Arrays", "Functions", "Constants"],
    correctAnswer: "Classes",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "What is the purpose of `final` keyword in PHP?",
    options: [
      "Prevents modification",
      "Creates constants",
      "Defines inheritance",
      "Ends a script",
    ],
    correctAnswer: "Prevents modification",
    topic: "OOP",
    level: "advanced",
  },

  // 💻 Code Editor (random)
  {
    question: "Write a function to return factorial using recursion.",
    codeEditor: true,
    correctAnswer:
      "function factorial($n) {\n  if ($n <= 1) return 1;\n  return $n * factorial($n - 1);\n}",
    topic: "Recursion",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "What is the default visibility of class properties?",
    options: ["public", "private", "protected", "global"],
    correctAnswer: "public",
    topic: "OOP",
    level: "prodigy",
  },
  {
    question: "Which PHP version introduced `type declarations`?",
    options: ["PHP 5", "PHP 7", "PHP 8", "PHP 5.6"],
    correctAnswer: "PHP 7",
    topic: "Modern PHP",
    level: "prodigy",
  },

  // 💻 Code Editor (random)
  {
    question: "Write a PHP function to sort an array in descending order.",
    codeEditor: true,
    correctAnswer:
      "function sortDescending($arr) {\n  rsort($arr);\n  return $arr;\n}",
    topic: "Arrays",
    level: "prodigy",
  },
];
