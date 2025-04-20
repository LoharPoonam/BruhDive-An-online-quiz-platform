export const javascriptQuestionsFour = [
  // 🔰 Newbie (5)
  {
    question: "What is the default value of an uninitialized variable?",
    options: ["0", "null", "undefined", "false"],
    correctAnswer: "undefined",
    topic: "Variables",
    level: "newbie",
  },
  {
    question: "Which character is used to end a statement in JavaScript?",
    options: [";", ".", ":", "!"],
    correctAnswer: ";",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "What is the correct way to write a string in JavaScript?",
    options: [`"Hello"`, `Hello`, `<Hello>`, `@Hello`],
    correctAnswer: `"Hello"`,
    topic: "Data Types",
    level: "newbie",
  },
  {
    question: "Which method adds an element at the beginning of an array?",
    options: ["push()", "shift()", "unshift()", "prepend()"],
    correctAnswer: "unshift()",
    topic: "Arrays",
    level: "newbie",
  },
  {
    question: "Which function shows a popup for user input?",
    options: ["alert()", "confirm()", "prompt()", "input()"],
    correctAnswer: "prompt()",
    topic: "Browser APIs",
    level: "newbie",
  },

  // 🧑‍💻 Beginner (5)
  {
    question: "Which operator returns true if either condition is true?",
    options: ["&&", "||", "!", "??"],
    correctAnswer: "||",
    topic: "Logic",
    level: "beginner",
  },
  {
    question: "Which of these is a template literal?",
    options: ["'Hello'", '"Hello"', "`Hello ${name}`", "#Hello"],
    correctAnswer: "`Hello ${name}`",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "How can you check if a value is NaN?",
    options: ["value == NaN", "value === NaN", "isNaN(value)", "NaN(value)"],
    correctAnswer: "isNaN(value)",
    topic: "Validation",
    level: "beginner",
  },
  {
    question: "What is `typeof undefined`?",
    options: ["'null'", "'undefined'", "'object'", "'NaN'"],
    correctAnswer: "'undefined'",
    topic: "Type Checking",
    level: "beginner",
  },
  {
    question: "Which method converts an array to string?",
    options: ["join()", "split()", "stringify()", "toStr()"],
    correctAnswer: "join()",
    topic: "Arrays",
    level: "beginner",
  },

  // 🚀 Intermediate (5)
  {
    question: "What does `Array.isArray([])` return?",
    options: ["true", "false", "undefined", "Error"],
    correctAnswer: "true",
    topic: "Arrays",
    level: "intermediate",
  },
  {
    question: "Which method is used to loop over object keys?",
    options: [
      "Object.each()",
      "Object.map()",
      "Object.keys().forEach()",
      "obj.loop()",
    ],
    correctAnswer: "Object.keys().forEach()",
    topic: "Objects",
    level: "intermediate",
  },
  {
    question: "Which symbol is used for optional chaining?",
    options: [".?", "?.", "?!", "::"],
    correctAnswer: "?.",
    topic: "Objects",
    level: "intermediate",
  },
  {
    question: "What does `let [a, b] = [1, 2]` do?",
    options: [
      "Swaps variables",
      "Destructures array",
      "Creates objects",
      "Creates a tuple",
    ],
    correctAnswer: "Destructures array",
    topic: "Destructuring",
    level: "intermediate",
  },
  {
    question: "What is the purpose of the `??` operator?",
    options: [
      "Nullish coalescing",
      "Logical OR",
      "Check for undefined",
      "Compare types",
    ],
    correctAnswer: "Nullish coalescing",
    topic: "Operators",
    level: "intermediate",
  },

  // 🧠 Advanced (4)
  {
    question: "What will this return?\n```js\n[NaN].includes(NaN)\n```",
    options: ["true", "false", "undefined", "Error"],
    correctAnswer: "true",
    topic: "Arrays",
    level: "advanced",
  },
  {
    question: "What is the result of `Object.values({a:1, b:2})`?",
    options: ["[a, b]", "[1, 2]", "[[a,1],[b,2]]", "[‘a’,1,‘b’,2]"],
    correctAnswer: "[1, 2]",
    topic: "Objects",
    level: "advanced",
  },
  {
    question: "Which method calls a function after a delay?",
    options: ["setTimeout()", "setDelay()", "callLater()", "pause()"],
    correctAnswer: "setTimeout()",
    topic: "Async",
    level: "advanced",
  },
  {
    question: "Which statement best describes event bubbling?",
    options: [
      "Events trigger from target to root",
      "Events trigger from root to target",
      "Events skip parent nodes",
      "Events only affect child elements",
    ],
    correctAnswer: "Events trigger from target to root",
    topic: "DOM",
    level: "advanced",
  },

  // 💻 Code Editor Qs (4)
  {
    question: "Write a function to check if a number is prime.",
    codeEditor: true,
    correctAnswer:
      "function isPrime(n) {\n  if (n < 2) return false;\n  for (let i = 2; i <= Math.sqrt(n); i++) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}",
    topic: "Math",
    level: "advanced",
  },
  {
    question: "Write a function that removes duplicates from an array.",
    codeEditor: true,
    correctAnswer:
      "function removeDuplicates(arr) {\n  return [...new Set(arr)];\n}",
    topic: "Arrays",
    level: "master",
  },
  {
    question:
      "Write a function that capitalizes the first letter of each word.",
    codeEditor: true,
    correctAnswer:
      "function capitalizeWords(str) {\n  return str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');\n}",
    topic: "Strings",
    level: "master",
  },
  {
    question: "Write a function to flatten a nested array.",
    codeEditor: true,
    correctAnswer: "function flatten(arr) {\n  return arr.flat(Infinity);\n}",
    topic: "Arrays",
    level: "prodigy",
  },

  // 🧠🧠 Prodigy (2)
  {
    question: "What is the result of `[,,,].length`?",
    options: ["3", "0", "undefined", "2"],
    correctAnswer: "3",
    topic: "Arrays",
    level: "prodigy",
  },
  {
    question:
      "What is the output?\n```js\nlet a = 1;\n(() => { a = 2; })();\nconsole.log(a);\n```",
    options: ["1", "2", "undefined", "error"],
    correctAnswer: "2",
    topic: "Scope",
    level: "prodigy",
  },
];
