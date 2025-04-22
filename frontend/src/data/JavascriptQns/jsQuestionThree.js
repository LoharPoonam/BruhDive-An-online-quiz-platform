export const javascriptQuestionsThree = [
  // 🔰 Newbie
  {
    question: "What keyword is used to define a constant in JavaScript?",
    options: ["const", "constant", "define", "let"],
    correctAnswer: "const",
    topic: "Variables",
    level: "newbie",
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["number", "string", "float", "boolean"],
    correctAnswer: "float",
    topic: "Data Types",
    level: "newbie",
  },
  // 🚀 Intermediate
  {
    question: "What does the `Array.prototype.map()` method return?",
    options: [
      "The first element that passes a test",
      "A new array with transformed elements",
      "The original array modified",
      "A single reduced value",
    ],
    correctAnswer: "A new array with transformed elements",
    topic: "Arrays",
    level: "intermediate",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["==", "===", "=", "=>"],
    correctAnswer: "=",
    topic: "Operators",
    level: "newbie",
  },
  {
    question: "How do you create a single-line comment in JavaScript?",
    options: ["// comment", "<!-- comment -->", "# comment", "/* comment */"],
    correctAnswer: "// comment",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "Which method can be used to find the length of a string?",
    options: [".length()", "length", ".size()", "strLength()"],
    correctAnswer: "length",
    topic: "Strings",
    level: "newbie",
  },

  // 🧑‍💻 Beginner
  {
    question: "How can you convert a string to a number in JavaScript?",
    options: ["Number()", "parseInt()", "+str", "All of the above"],
    correctAnswer: "All of the above",
    topic: "Type Conversion",
    level: "beginner",
  },
  {
    question: "What is the result of `'10' - 5`?",
    options: ["'5'", "5", "NaN", "105"],
    correctAnswer: "5",
    topic: "Type Coercion",
    level: "beginner",
  },
  {
    question: "What is the output of `Boolean('false')`?",
    options: ["true", "false", "NaN", "undefined"],
    correctAnswer: "true",
    topic: "Boolean",
    level: "beginner",
  },
  {
    question: "Which keyword is used to skip an iteration in a loop?",
    options: ["skip", "continue", "break", "pass"],
    correctAnswer: "continue",
    topic: "Loops",
    level: "beginner",
  },
  {
    question: "Which of the following is NOT a loop in JavaScript?",
    options: ["for", "while", "foreach", "loop"],
    correctAnswer: "loop",
    topic: "Loops",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What does `JSON.stringify()` do?",
    options: [
      "Parses a string to object",
      "Converts object to JSON string",
      "Creates an empty object",
      "Sends JSON to server",
    ],
    correctAnswer: "Converts object to JSON string",
    topic: "JSON",
    level: "intermediate",
  },
  {
    question: "Which keyword is used to declare a block-scoped variable?",
    options: ["let", "var", "int", "def"],
    correctAnswer: "let",
    topic: "Variables",
    level: "intermediate",
  },
  {
    question: "What will `typeof null` return?",
    options: ["null", "object", "undefined", "NaN"],
    correctAnswer: "object",
    topic: "Type Checking",
    level: "intermediate",
  },
  {
    question: "What is the purpose of the `break` statement?",
    options: [
      "Skips current iteration",
      "Stops the loop entirely",
      "Restarts the loop",
      "Breaks the variable",
    ],
    correctAnswer: "Stops the loop entirely",
    topic: "Loops",
    level: "intermediate",
  },
  {
    question: "How do you merge two arrays in JavaScript?",
    options: [
      "arr1 + arr2",
      "merge(arr1, arr2)",
      "[...arr1, ...arr2]",
      "arr1.concat(arr2[])",
    ],
    correctAnswer: "[...arr1, ...arr2]",
    topic: "Arrays",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What does the `bind()` method do?",
    options: [
      "Calls a function",
      "Returns a new function with bound context",
      "Links two variables",
      "Pauses execution",
    ],
    correctAnswer: "Returns a new function with bound context",
    topic: "Functions",
    level: "advanced",
  },
  {
    question: "Which statement about `setTimeout` is true?",
    options: [
      "It blocks execution until timeout ends",
      "It is synchronous",
      "It executes code after delay",
      "It executes immediately",
    ],
    correctAnswer: "It executes code after delay",
    topic: "Asynchronous JS",
    level: "advanced",
  },
  {
    question: "What is the purpose of `Object.keys(obj)`?",
    options: [
      "Returns values of object",
      "Returns keys of object",
      "Deletes keys from object",
      "Checks if key exists",
    ],
    correctAnswer: "Returns keys of object",
    topic: "Objects",
    level: "advanced",
  },
  {
    question: "How do you declare a class in JavaScript?",
    options: [
      "function MyClass() {}",
      "class MyClass {}",
      "create class MyClass {}",
      "MyClass = new Class()",
    ],
    correctAnswer: "class MyClass {}",
    topic: "OOP",
    level: "advanced",
  },

  // 💻 Code Editor Qs
  {
    question: "Write a function to reverse a string.",
    codeEditor: true,
    correctAnswer:
      "function reverseStr(str) {\n  return str.split('').reverse().join('');\n}",
    topic: "Strings",
    level: "advanced",
  },
  {
    question: "Write a function that returns true if a number is even.",
    codeEditor: true,
    correctAnswer: "function isEven(n) {\n  return n % 2 === 0;\n}",
    topic: "Math",
    level: "intermediate",
  },

  // 🧠🧠 Prodigy
  {
    question: "What is the output?\n```js\n!![]\n```",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "true",
    topic: "Truthy/Falsy",
    level: "prodigy",
  },
  {
    question: "Which built-in method sorts elements of an array?",
    options: ["sort()", "order()", "arrange()", "organize()"],
    correctAnswer: "sort()",
    topic: "Arrays",
    level: "prodigy",
  },
  {
    question:
      "What will be logged?\n```js\n(function() {\n  var a = b = 5;\n})();\nconsole.log(b);\n```",
    options: ["undefined", "5", "ReferenceError", "NaN"],
    correctAnswer: "5",
    topic: "Scope",
    level: "prodigy",
  },
  {
    question: "What does `[].constructor === Array` return?",
    options: ["true", "false", "undefined", "error"],
    correctAnswer: "true",
    topic: "Arrays",
    level: "prodigy",
  },
];
