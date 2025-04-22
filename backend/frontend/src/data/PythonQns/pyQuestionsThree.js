// src/data/pyQuestionsFour.js
export const pythonQuestionsThree = [
  // 🚧 Noob Mode
  {
    question: "Which symbol is used to assign a value to a variable in Python?",
    options: ["=", "==", ":=", "=>"],
    correctAnswer: "=",
    topic: "Variables",
    level: "noob",
  },
  {
    question: "What is the extension of a Python file?",
    options: [".txt", ".py", ".java", ".python"],
    correctAnswer: ".py",
    topic: "Syntax",
    level: "noob",
  },
  {
    question: "What does `print('Hello' + 'World')` output?",
    options: ["HelloWorld", "Hello World", "Hello+World", "Error"],
    correctAnswer: "HelloWorld",
    topic: "Strings",
    level: "noob",
  },
  {
    question: "Which function prints output to the console?",
    options: ["echo()", "console()", "print()", "output()"],
    correctAnswer: "print()",
    topic: "Built-in Functions",
    level: "noob",
  },

  // 👶 Newbie
  {
    question: "Which function is used to get input from the user?",
    options: ["input()", "get()", "scan()", "read()"],
    correctAnswer: "input()",
    topic: "Input/Output",
    level: "newbie",
  },
  {
    question: "What is the output of `bool(0)`?",
    options: ["True", "False", "0", "None"],
    correctAnswer: "False",
    topic: "Boolean",
    level: "newbie",
  },
  {
    question: "What will `2 != 3` evaluate to?",
    options: ["True", "False", "Error", "None"],
    correctAnswer: "True",
    topic: "Conditionals",
    level: "newbie",
  },
  {
    question: "How do you define a function in Python?",
    options: [
      "function myFunc():",
      "def myFunc():",
      "func myFunc()",
      "create myFunc()",
    ],
    correctAnswer: "def myFunc():",
    topic: "Functions",
    level: "newbie",
  },

  // 🧠 Beginner
  {
    question: "Which operator is used to find the remainder?",
    options: ["/", "//", "%", "**"],
    correctAnswer: "%",
    topic: "Operators",
    level: "beginner",
  },
  {
    question: "What is the output of `range(3)`?",
    options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "[3, 2, 1]"],
    correctAnswer: "[0, 1, 2]",
    topic: "Loops",
    level: "beginner",
  },
  {
    question: "Which method removes the last item from a list?",
    options: ["pop()", "remove()", "delete()", "clear()"],
    correctAnswer: "pop()",
    topic: "Lists",
    level: "beginner",
  },
  {
    question: "What is the result of `len({1:'a', 2:'b'})`?",
    options: ["1", "2", "3", "Error"],
    correctAnswer: "2",
    topic: "Dictionaries",
    level: "beginner",
  },

  // 🔥 Enthusiast
  {
    question: "What does `set([1, 2, 2, 3])` return?",
    options: ["{1, 2, 3}", "[1, 2, 2, 3]", "Error", "(1, 2, 3)"],
    correctAnswer: "{1, 2, 3}",
    topic: "Sets",
    level: "enthusiast",
  },
  {
    question: "Which loop runs at least once?",
    options: ["for", "while", "do-while", "None of these"],
    correctAnswer: "None of these",
    topic: "Loops",
    level: "enthusiast",
  },
  {
    question: "Which keyword is used to handle exceptions?",
    options: ["try", "catch", "throw", "handle"],
    correctAnswer: "try",
    topic: "Error Handling",
    level: "enthusiast",
  },
  {
    question: "What does `enumerate(['a','b'])` return?",
    options: [
      "[(0, 'a'), (1, 'b')]",
      "['a', 'b']",
      "{0: 'a', 1: 'b'}",
      "Error",
    ],
    correctAnswer: "[(0, 'a'), (1, 'b')]",
    topic: "Built-in Functions",
    level: "enthusiast",
  },

  // 🚀 Intermediate
  {
    question: "What is the result of `sorted([3,1,2])`?",
    options: ["[1,2,3]", "[3,1,2]", "[2,1,3]", "[3,2,1]"],
    correctAnswer: "[1,2,3]",
    topic: "Lists",
    level: "intermediate",
  },
  {
    question: "What is the purpose of `__init__` in a class?",
    options: [
      "It initializes an object",
      "It deletes an object",
      "It prints the class",
      "It is used to call another class",
    ],
    correctAnswer: "It initializes an object",
    topic: "Classes",
    level: "intermediate",
  },
  {
    question: "How do you write a multi-line comment in Python?",
    options: [
      "''' comment '''",
      "// comment //",
      "<!-- comment -->",
      "/* comment */",
    ],
    correctAnswer: "''' comment '''",
    topic: "Syntax",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What does the `zip()` function do?",
    options: [
      "Compresses data",
      "Combines iterables into tuples",
      "Creates a dictionary",
      "Splits a string",
    ],
    correctAnswer: "Combines iterables into tuples",
    topic: "Iterators",
    level: "advanced",
  },
  {
    question: "Which Python statement is used to define an anonymous block?",
    options: ["pass", "lambda", "block", "skip"],
    correctAnswer: "pass",
    topic: "Syntax",
    level: "advanced",
  },

  // 👑 Code Master (Code Editor Questions)
  {
    question:
      "Write a function to find the factorial of a number using recursion.",
    codeEditor: true,
    correctAnswer:
      "def factorial(n):\n    if n == 0:\n        return 1\n    return n * factorial(n - 1)",
    topic: "Recursion",
    level: "master",
  },
  {
    question:
      "Write a Python function that returns the Fibonacci sequence up to n terms.",
    codeEditor: true,
    correctAnswer:
      "def fibonacci(n):\n    seq = [0, 1]\n    for i in range(2, n):\n        seq.append(seq[-1] + seq[-2])\n    return seq[:n]",
    topic: "Loops",
    level: "master",
  },
  {
    question: "Write a Python function to check if a string is a palindrome.",
    codeEditor: true,
    correctAnswer: "def is_palindrome(s):\n    return s == s[::-1]",
    topic: "Strings",
    level: "master",
  },
  {
    question:
      "Write a program to count the frequency of characters in a string.",
    codeEditor: true,
    correctAnswer:
      "def char_frequency(s):\n    freq = {}\n    for char in s:\n        freq[char] = freq.get(char, 0) + 1\n    return freq",
    topic: "Dictionaries",
    level: "master",
  },
];
