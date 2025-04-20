export const javascriptQuestionsTwo = [
  // 🔰 Newbie (5)
  {
    question: "What is the value of `null == undefined`?",
    options: ["true", "false", "undefined", "error"],
    correctAnswer: "true",
    topic: "Comparison",
    level: "newbie",
  },
  {
    question: "Which symbol is used for multiplication in JavaScript?",
    options: ["x", "*", "**", "%"],
    correctAnswer: "*",
    topic: "Operators",
    level: "newbie",
  },
  {
    question: "Which method is used to display something in the console?",
    options: ["log()", "alert()", "console()", "console.log()"],
    correctAnswer: "console.log()",
    topic: "Console",
    level: "newbie",
  },
  {
    question: "What is the output of `typeof []`?",
    options: ["array", "object", "list", "undefined"],
    correctAnswer: "object",
    topic: "Type Checking",
    level: "newbie",
  },
  {
    question: "Which loop will run zero or more times?",
    options: ["do...while", "while", "for", "forEach"],
    correctAnswer: "while",
    topic: "Loops",
    level: "newbie",
  },

  // 🧑‍💻 Beginner (5)
  {
    question: "Which method converts a string to uppercase?",
    options: ["toUpper()", "upperCase()", "toUpperCase()", "upper()"],
    correctAnswer: "toUpperCase()",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "Which value is returned by `typeof NaN`?",
    options: ["NaN", "number", "undefined", "object"],
    correctAnswer: "number",
    topic: "Numbers",
    level: "beginner",
  },
  {
    question: "How can you add an element to the end of an array?",
    options: ["add()", "push()", "append()", "insert()"],
    correctAnswer: "push()",
    topic: "Arrays",
    level: "beginner",
  },
  {
    question: "Which method checks if an array includes a value?",
    options: ["has()", "contains()", "includes()", "check()"],
    correctAnswer: "includes()",
    topic: "Arrays",
    level: "beginner",
  },
  {
    question: "What is the default return value of a function?",
    options: ["null", "0", "undefined", "false"],
    correctAnswer: "undefined",
    topic: "Functions",
    level: "beginner",
  },

  // 🚀 Intermediate (5)
  {
    question: "What does `Promise.resolve(5)` return?",
    options: ["Promise that resolves with 5", "5", "undefined", "Error"],
    correctAnswer: "Promise that resolves with 5",
    topic: "Promises",
    level: "intermediate",
  },
  {
    question: "Which symbol is used to spread elements?",
    options: ["...", "===", "=>", "<>"],
    correctAnswer: "...",
    topic: "Spread Operator",
    level: "intermediate",
  },
  {
    question: "How can you copy an object in JavaScript?",
    options: ["Object.copy(obj)", "{...obj}", "copy(obj)", "Object.clone(obj)"],
    correctAnswer: "{...obj}",
    topic: "Objects",
    level: "intermediate",
  },
  {
    question: "What is the result of `false || 'Hello'`?",
    options: ["false", "'Hello'", "undefined", "true"],
    correctAnswer: "'Hello'",
    topic: "Logical Operators",
    level: "intermediate",
  },
  {
    question: "What is the value of `!!0`?",
    options: ["true", "false", "undefined", "0"],
    correctAnswer: "false",
    topic: "Boolean Logic",
    level: "intermediate",
  },

  // 🧠 Advanced (4)
  {
    question: "What does `Function.prototype.call()` do?",
    options: [
      "Binds context permanently",
      "Calls function with a specified `this`",
      "Creates a new function",
      "Returns another function",
    ],
    correctAnswer: "Calls function with a specified `this`",
    topic: "Functions",
    level: "advanced",
  },
  {
    question: "How do you prevent an object from being modified?",
    options: [
      "Object.prevent()",
      "Object.freeze()",
      "lock(obj)",
      "Object.block()",
    ],
    correctAnswer: "Object.freeze()",
    topic: "Objects",
    level: "advanced",
  },
  {
    question: "Which property gives access to a function’s arguments?",
    options: ["args", "params", "arguments", "paramsList"],
    correctAnswer: "arguments",
    topic: "Functions",
    level: "advanced",
  },
  {
    question: "What is a callback function?",
    options: [
      "A function that calls itself",
      "A function passed to another function",
      "A constructor function",
      "An arrow function",
    ],
    correctAnswer: "A function passed to another function",
    topic: "Functions",
    level: "advanced",
  },

  // 💻 Code Editor Qs (4)
  {
    question: "Write a function to find the minimum in an array.",
    codeEditor: true,
    correctAnswer: "function min(arr) {\n  return Math.min(...arr);\n}",
    topic: "Math",
    level: "advanced",
  },
  {
    question:
      "Write a function to return the first non-repeating character in a string.",
    codeEditor: true,
    correctAnswer:
      "function firstUniqueChar(str) {\n  for (let char of str) {\n    if (str.indexOf(char) === str.lastIndexOf(char)) return char;\n  }\n  return null;\n}",
    topic: "Strings",
    level: "master",
  },
  {
    question:
      "Write a function to convert an object to an array of key-value pairs.",
    codeEditor: true,
    correctAnswer:
      "function objectToArray(obj) {\n  return Object.entries(obj);\n}",
    topic: "Objects",
    level: "master",
  },
  {
    question: "Write a function that filters only numbers from a mixed array.",
    codeEditor: true,
    correctAnswer:
      "function filterNumbers(arr) {\n  return arr.filter(x => typeof x === 'number');\n}",
    topic: "Arrays",
    level: "prodigy",
  },

  // 🧠🧠 Prodigy (2)
  {
    question: "What does `new Array(3).fill('a')` return?",
    options: [
      "['a','a','a']",
      "['a']",
      "[undefined, undefined, undefined]",
      "['a','undefined','undefined']",
    ],
    correctAnswer: "['a','a','a']",
    topic: "Arrays",
    level: "prodigy",
  },
  {
    question:
      "What is the output?\n```js\nlet a = 3;\nlet b = a++;\nconsole.log(b);\n```",
    options: ["3", "4", "undefined", "NaN"],
    correctAnswer: "3",
    topic: "Operators",
    level: "prodigy",
  },
];
