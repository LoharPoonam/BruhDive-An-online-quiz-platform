// src/data/pyQuestionsOne.js
export const pythonQuestionsOne = [
  // 🔥 Enthusiast
  {
    question: "Which keyword is used to create a generator in Python?",
    options: ["yield", "generate", "return", "def"],
    correctAnswer: "yield",
    topic: "Generators",
    level: "enthusiast",
  },
  {
    question: "What is the result of `len(set('banana'))`?",
    options: ["6", "3", "1", "4"],
    correctAnswer: "3",
    topic: "Sets",
    level: "enthusiast",
  },

  // 👑 Code Master (💻 Code Editor)
  {
    question:
      "💻 Write a Python function to check if a number is a prime number.",
    codeEditor: true,
    correctAnswer:
      "def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True",
    topic: "Functions",
    level: "master",
  },

  // 👶 Newbie
  {
    question: "What will `type(42.0)` return?",
    options: ["int", "str", "float", "double"],
    correctAnswer: "float",
    topic: "Data Types",
    level: "newbie",
  },
  {
    question: "Which one is a valid way to start a Python comment?",
    options: ["#", "//", "--", "/*"],
    correctAnswer: "#",
    topic: "Syntax",
    level: "newbie",
  },

  // 🧠 Advanced
  {
    question: "What does `zip()` function do in Python?",
    options: [
      "Combines iterables element-wise",
      "Compresses files",
      "Reverses a string",
      "Filters data",
    ],
    correctAnswer: "Combines iterables element-wise",
    topic: "Built-in Functions",
    level: "advanced",
  },

  // 🧠 Beginner
  {
    question:
      "What does `dict.get('key', 'default')` return if key is missing?",
    options: ["None", "default", "KeyError", "0"],
    correctAnswer: "default",
    topic: "Dictionaries",
    level: "beginner",
  },
  {
    question: "Which method removes the last item from a list?",
    options: ["remove()", "pop()", "del()", "cut()"],
    correctAnswer: "pop()",
    topic: "Lists",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which built-in function can sort items by a key function?",
    options: ["sort()", "sorted()", "arrange()", "order()"],
    correctAnswer: "sorted()",
    topic: "Functions",
    level: "intermediate",
  },
  {
    question: "How do you define a class method in Python?",
    options: [
      "@classmethod",
      "@staticmethod",
      "class method()",
      "def classmethod()",
    ],
    correctAnswer: "@classmethod",
    topic: "OOP",
    level: "intermediate",
  },

  // 🚧 Noob Mode
  {
    question: "What is the correct extension of a Python file?",
    options: [".py", ".python", ".pt", ".txt"],
    correctAnswer: ".py",
    topic: "Basics",
    level: "noob",
  },
  {
    question: "Which symbol is used for exponentiation in Python?",
    options: ["^", "**", "//", "%%"],
    correctAnswer: "**",
    topic: "Operators",
    level: "noob",
  },

  // 🔥 Enthusiast
  {
    question: "Which built-in Python function returns the absolute value?",
    options: ["abs()", "absolute()", "fabs()", "mod()"],
    correctAnswer: "abs()",
    topic: "Functions",
    level: "enthusiast",
  },

  // 👑 Code Master (💻 Code Editor)
  {
    question:
      "💻 Write a Python function that checks if a string is a palindrome.",
    codeEditor: true,
    correctAnswer: "def is_palindrome(s):\n    return s == s[::-1]",
    topic: "Strings",
    level: "master",
  },

  // 🧠 Beginner
  {
    question: "What does `enumerate()` return?",
    options: [
      "Key-value pairs",
      "Index and value pairs",
      "Only values",
      "Only indexes",
    ],
    correctAnswer: "Index and value pairs",
    topic: "Loops",
    level: "beginner",
  },

  // 🧠 Advanced
  {
    question: "What will `eval('2 + 3')` return?",
    options: ["2 + 3", "5", "Error", "None"],
    correctAnswer: "5",
    topic: "Built-in Functions",
    level: "advanced",
  },

  // 👶 Newbie
  {
    question: "Which of these is used to get input from a user?",
    options: ["input()", "scan()", "read()", "get()"],
    correctAnswer: "input()",
    topic: "User Input",
    level: "newbie",
  },

  // 🚀 Intermediate
  {
    question: "What is the output of `'a' * 3`?",
    options: ["aaa", "a3", "Error", "['a','a','a']"],
    correctAnswer: "aaa",
    topic: "Strings",
    level: "intermediate",
  },

  // 🚧 Noob Mode
  {
    question: "How do you print text in Python?",
    options: ["echo", "console.log", "print()", "printf()"],
    correctAnswer: "print()",
    topic: "Basics",
    level: "noob",
  },

  // 🧠 Beginner
  {
    question: "Which operator checks equality?",
    options: ["=", "==", "!=", "==="],
    correctAnswer: "==",
    topic: "Operators",
    level: "beginner",
  },

  // 🔥 Enthusiast
  {
    question: "Which keyword is used to handle exceptions?",
    options: ["handle", "except", "error", "raise"],
    correctAnswer: "except",
    topic: "Error Handling",
    level: "enthusiast",
  },

  // 👑 Code Master (💻 Code Editor)
  {
    question:
      "💻 Write a function to reverse a list in Python without using reverse().",
    codeEditor: true,
    correctAnswer: "def reverse_list(lst):\n    return lst[::-1]",
    topic: "Lists",
    level: "master",
  },

  // 🧠 Advanced
  {
    question: "What is a lambda function?",
    options: [
      "Function without a name",
      "A module",
      "Loop control statement",
      "Object method",
    ],
    correctAnswer: "Function without a name",
    topic: "Functions",
    level: "advanced",
  },

  // 👑 Code Master (💻 Code Editor)
  {
    question:
      "💻 Write a recursive function to calculate factorial of a number.",
    codeEditor: true,
    correctAnswer:
      "def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n-1)",
    topic: "Recursion",
    level: "master",
  },
];
