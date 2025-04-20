export const javascriptQuestionsOne = [
  // 🔰 Newbie
  {
    question: "Which tag is used to link JavaScript in HTML?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    correctAnswer: "<script>",
    topic: "HTML Integration",
    level: "newbie",
  },
  {
    question: "Which keyword is used to declare constants in JavaScript?",
    options: ["let", "const", "var", "static"],
    correctAnswer: "const",
    topic: "Variables",
    level: "newbie",
  },
  {
    question: "Which of the following is a string?",
    options: ["true", "'123'", "123", "undefined"],
    correctAnswer: "'123'",
    topic: "Data Types",
    level: "newbie",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "msgBox('Hello World');",
      "alertBox('Hello World');",
      "alert('Hello World');",
      "prompt('Hello World');",
    ],
    correctAnswer: "alert('Hello World');",
    topic: "Browser APIs",
    level: "newbie",
  },
  {
    question: "Which value is falsy in JavaScript?",
    options: ["0", "'false'", "[]", "{}"],
    correctAnswer: "0",
    topic: "Truthy/Falsy",
    level: "newbie",
  },

  // 🧑‍💻 Beginner
  {
    question: "What does the `length` property do for a string?",
    options: [
      "Returns last character",
      "Returns number of characters",
      "Returns memory size",
      "Returns string reversed",
    ],
    correctAnswer: "Returns number of characters",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "How do you convert a number to a string?",
    options: [
      "toString()",
      "parseString()",
      "Stringify()",
      "convertToString()",
    ],
    correctAnswer: "toString()",
    topic: "Type Conversion",
    level: "beginner",
  },
  {
    question: "Which method removes the last element of an array?",
    options: ["pop()", "shift()", "remove()", "delete()"],
    correctAnswer: "pop()",
    topic: "Arrays",
    level: "beginner",
  },
  {
    question: "How do you check if two values are equal in value and type?",
    options: ["==", "=", "===", "equals()"],
    correctAnswer: "===",
    topic: "Comparison Operators",
    level: "beginner",
  },
  {
    question: "What does `isNaN('hello')` return?",
    options: ["true", "false", "NaN", "undefined"],
    correctAnswer: "true",
    topic: "Type Checking",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What is the result of `'5' + 2`?",
    options: ["7", "'52'", "'7'", "NaN"],
    correctAnswer: "'52'",
    topic: "Type Coercion",
    level: "intermediate",
  },
  {
    question: "How do you clone an object using spread syntax?",
    options: [
      "clone(obj)",
      "{...obj}",
      "Object.copy(obj)",
      "Object.clone(obj)",
    ],
    correctAnswer: "{...obj}",
    topic: "Objects",
    level: "intermediate",
  },
  {
    question: "Which of the following is a valid arrow function?",
    options: [
      "=> function() {}",
      "(a) => a * 2",
      "function => (a) { return a }",
      "() -> {}",
    ],
    correctAnswer: "(a) => a * 2",
    topic: "Functions",
    level: "intermediate",
  },
  {
    question: "What will this return?\n`[1,2,3].filter(x => x > 1)`",
    options: ["[2,3]", "[1,2]", "[1,3]", "[3]"],
    correctAnswer: "[2,3]",
    topic: "Array Methods",
    level: "intermediate",
  },
  {
    question: "What is the purpose of the `default` keyword in switch-case?",
    options: [
      "To handle all unmatched cases",
      "To declare default variable",
      "To exit the switch",
      "To define default value for variable",
    ],
    correctAnswer: "To handle all unmatched cases",
    topic: "Control Flow",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is the output of `[].length`?",
    options: ["undefined", "null", "0", "1"],
    correctAnswer: "0",
    topic: "Arrays",
    level: "advanced",
  },
  {
    question: "Which is true about `let` and `var`?",
    options: [
      "`let` is function scoped",
      "`var` is block scoped",
      "`let` is block scoped",
      "`var` is safer than `let`",
    ],
    correctAnswer: "`let` is block scoped",
    topic: "Scope",
    level: "advanced",
  },
  {
    question:
      "What will `console.log(a)` print?\n```js\nlet a;\nconsole.log(a);\n```",
    options: ["null", "0", "undefined", "ReferenceError"],
    correctAnswer: "undefined",
    topic: "Variables",
    level: "advanced",
  },
  {
    question: "Which keyword prevents object properties from being added?",
    options: ["seal()", "freeze()", "lock()", "prevent()"],
    correctAnswer: "freeze()",
    topic: "Objects",
    level: "advanced",
  },

  // 💻 Code Editor Qs
  {
    question:
      "Write a function that takes an array and returns the sum of its elements.",
    codeEditor: true,
    correctAnswer:
      "function sum(arr) {\n  return arr.reduce((acc, val) => acc + val, 0);\n}",
    topic: "Arrays",
    level: "advanced",
  },
  {
    question: "Write a function to convert Celsius to Fahrenheit.",
    codeEditor: true,
    correctAnswer:
      "function toFahrenheit(celsius) {\n  return celsius * 9/5 + 32;\n}",
    topic: "Math",
    level: "master",
  },

  // 🧠🧠 Prodigy
  {
    question:
      "What is the output?\n```js\nconst x = {};\nconsole.log(x.__proto__ === Object.prototype);\n```",
    options: ["true", "false", "undefined", "error"],
    correctAnswer: "true",
    topic: "Prototypes",
    level: "prodigy",
  },
  {
    question: "What will this log?\n```js\nconsole.log(typeof typeof 1);\n```",
    options: ["number", "string", "object", "undefined"],
    correctAnswer: "string",
    topic: "Typeof",
    level: "prodigy",
  },

  {
    question:
      "Write a JavaScript function to find the factorial of a number recursively.",
    codeEditor: true,
    correctAnswer:
      "function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}",
    topic: "Recursion",
    level: "prodigy",
  },

  {
    question: "What does the following return?\n```js\n!!''\n```",
    options: ["true", "false", "undefined", "null"],
    correctAnswer: "false",
    topic: "Boolean Logic",
    level: "prodigy",
  },
];
