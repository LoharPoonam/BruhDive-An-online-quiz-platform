export const javascriptQuestions = [
  // 🔰 Newbie
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "define", "v"],
    correctAnswer: "var",
    topic: "Variables",
    level: "newbie",
  },
  {
    question: "What will `typeof 'hello'` return?",
    options: ["string", "text", "char", "object"],
    correctAnswer: "string",
    topic: "Data Types",
    level: "newbie",
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "#", "<!--", "-->"],
    correctAnswer: "//",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "What is the output of 2 + 3 * 2?",
    options: ["10", "7", "8", "6"],
    correctAnswer: "8",
    topic: "Operators",
    level: "newbie",
  },
  {
    question: "Which of the following is a valid array?",
    options: ["(1,2,3)", "{1,2,3}", "[1,2,3]", "<1,2,3>"],
    correctAnswer: "[1,2,3]",
    topic: "Arrays",
    level: "newbie",
  },

  // 🧑‍💻 Beginner
  {
    question: "Which method adds an element at the end of an array?",
    options: ["push()", "add()", "insert()", "append()"],
    correctAnswer: "push()",
    topic: "Arrays",
    level: "beginner",
  },
  {
    question: "How do you define a function in JavaScript?",
    options: [
      "function myFunc() {}",
      "def myFunc():",
      "func myFunc() {}",
      "create myFunc() {}",
    ],
    correctAnswer: "function myFunc() {}",
    topic: "Functions",
    level: "beginner",
  },
  {
    question: "What will `console.log(3 === '3')` return?",
    options: ["true", "false", "undefined", "error"],
    correctAnswer: "false",
    topic: "Strict Equality",
    level: "beginner",
  },
  {
    question: "Which keyword is used for conditional branching?",
    options: ["switch", "if", "else", "All of the above"],
    correctAnswer: "All of the above",
    topic: "Conditions",
    level: "beginner",
  },
  {
    question: "What is the result of `Boolean(0)`?",
    options: ["true", "false", "0", "null"],
    correctAnswer: "false",
    topic: "Type Conversion",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which loop is guaranteed to run at least once?",
    options: ["while", "for", "do...while", "foreach"],
    correctAnswer: "do...while",
    topic: "Loops",
    level: "intermediate",
  },
  {
    question: "What does the 'this' keyword refer to in a regular function?",
    options: [
      "The function itself",
      "Global object",
      "Parent object",
      "Depends on how the function is called",
    ],
    correctAnswer: "Depends on how the function is called",
    topic: "Functions",
    level: "intermediate",
  },
  {
    question: "What is the output of `typeof NaN`?",
    options: ["number", "NaN", "undefined", "object"],
    correctAnswer: "number",
    topic: "Data Types",
    level: "intermediate",
  },
  {
    question: "Which of these creates a Promise?",
    options: [
      "new Promise()",
      "Promise.create()",
      "makePromise()",
      "promise()",
    ],
    correctAnswer: "new Promise()",
    topic: "Async",
    level: "intermediate",
  },
  {
    question: "Which method converts JSON string to object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.toObj()", "eval()"],
    correctAnswer: "JSON.parse()",
    topic: "JSON",
    level: "intermediate",
  },
  {
    question: "What does `Array.prototype.map()` do?",
    options: [
      "Filters array",
      "Modifies array in-place",
      "Returns new array",
      "Sorts the array",
    ],
    correctAnswer: "Returns new array",
    topic: "Arrays",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What does `Object.freeze()` do?",
    options: [
      "Makes object immutable",
      "Deletes properties",
      "Hides properties",
      "Stops garbage collection",
    ],
    correctAnswer: "Makes object immutable",
    topic: "Objects",
    level: "advanced",
  },
  {
    question: "How do you handle errors in async/await?",
    options: ["try/catch", "onError", "promise.catch()", "await.catch()"],
    correctAnswer: "try/catch",
    topic: "Error Handling",
    level: "advanced",
  },
  {
    question: "What is a closure?",
    options: [
      "Function inside another function",
      "Function with private variables",
      "Function with access to outer scope",
      "Function returning another function",
    ],
    correctAnswer: "Function with access to outer scope",
    topic: "Closures",
    level: "advanced",
  },
  {
    question: "Which of these is a higher-order function?",
    options: ["map()", "sort()", "filter()", "All of the above"],
    correctAnswer: "All of the above",
    topic: "Functions",
    level: "advanced",
  },

  // 💻 Code Editor Qs
  {
    question:
      "Write a JavaScript function that returns the square of a number.",
    codeEditor: true,
    correctAnswer: "function square(n) {\n  return n * n;\n}",
    topic: "Functions",
    level: "advanced",
  },
  {
    question: "Write a function that checks if a string is a palindrome.",
    codeEditor: true,
    correctAnswer:
      "function isPalindrome(str) {\n  return str === str.split('').reverse().join('');\n}",
    topic: "Strings",
    level: "master",
  },

  // 🧠🧠 Prodigy
  {
    question:
      "What is the output of this code?\n```js\nconst a = [1, 2];\nconst b = a;\nb.push(3);\nconsole.log(a);\n```",
    options: ["[1, 2, 3]", "[3]", "[1, 2]", "Error"],
    correctAnswer: "[1, 2, 3]",
    topic: "References",
    level: "prodigy",
  },

  {
    question: "What will this return?\n```js\n[...'hello'].length\n```",
    options: ["5", "4", "1", "undefined"],
    correctAnswer: "5",
    topic: "Spread Operator",
    level: "advanced",
  },

  {
    question: "What does `Object.create(null)` return?",
    options: [
      "Object with prototype",
      "Null",
      "Object with no prototype",
      "undefined",
    ],
    correctAnswer: "Object with no prototype",
    topic: "Objects",
    level: "prodigy",
  },
];
