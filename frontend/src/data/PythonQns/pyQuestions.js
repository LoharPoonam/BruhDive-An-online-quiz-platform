export const pythonQuestions = [
  // 🔰 Newbie
  {
    question: "What is the output of print(3 + 2 * 2) in Python?",
    options: ["10", "7", "5", "Error"],
    correctAnswer: "7",
    topic: "Basic Operations",
    level: "newbie",
  },
  {
    question: "Which of these is NOT a valid Python variable name?",
    options: ["my_var", "_var", "2var", "var2"],
    correctAnswer: "2var",
    topic: "Variables",
    level: "newbie",
  },
  {
    question: "What does range(3) return?",
    options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "(0, 1, 2)"],
    correctAnswer: "[0, 1, 2]",
    topic: "Loops",
    level: "newbie",
  },
  {
    question: "What keyword is used to define a function in Python?",
    options: ["func", "define", "function", "def"],
    correctAnswer: "def",
    topic: "Functions",
    level: "newbie",
  },
  {
    question: "Which of these is a Python list?",
    options: ["{1, 2, 3}", "(1, 2, 3)", "[1, 2, 3]", "<1, 2, 3>"],
    correctAnswer: "[1, 2, 3]",
    topic: "Data Types",
    level: "newbie",
  },

  // 🧑‍💻 Beginner
  {
    question: "What will 'Hello'[::-1] output?",
    options: ["'Hello'", "'olleH'", "'h'", "Error"],
    correctAnswer: "'olleH'",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "Which of the following is a Python tuple?",
    options: ["[1, 2]", "{1, 2}", "(1, 2)", "<1, 2>"],
    correctAnswer: "(1, 2)",
    topic: "Tuples",
    level: "beginner",
  },
  {
    question: "What will [x**2 for x in range(3)] return?",
    options: ["[1, 4, 9]", "[0, 1, 4]", "[0, 1, 4, 9]", "[1, 2, 3]"],
    correctAnswer: "[0, 1, 4]",
    topic: "List Comprehension",
    level: "beginner",
  },
  {
    question: "Which one is used for comments in Python?",
    options: ["//", "#", "<!-- -->", "/* */"],
    correctAnswer: "#",
    topic: "Syntax",
    level: "beginner",
  },
  {
    question: "Which function returns the length of a list?",
    options: ["length()", "count()", "len()", "size()"],
    correctAnswer: "len()",
    topic: "Built-in Functions",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What is the output of bool('False')?",
    options: ["False", "True", "None", "Error"],
    correctAnswer: "True",
    topic: "Type Conversion",
    level: "intermediate",
  },
  {
    question: "What does __init__ do in Python classes?",
    options: [
      "Starts a loop",
      "Initializes object",
      "Deletes object",
      "Inherits class",
    ],
    correctAnswer: "Initializes object",
    topic: "OOP",
    level: "intermediate",
  },
  {
    question: "What is the output of type([])?",
    options: ["<class 'tuple'>", "<class 'list'>", "<type 'list'>", "list"],
    correctAnswer: "<class 'list'>",
    topic: "Data Types",
    level: "intermediate",
  },
  {
    question: "Which is correct to open a file for both reading and writing?",
    options: [
      "open('file.txt', 'rw')",
      "open('file.txt', 'r+')",
      "open('file.txt', 'rw+')",
      "open('file.txt', 'w+')",
    ],
    correctAnswer: "open('file.txt', 'r+')",
    topic: "File Handling",
    level: "intermediate",
  },
  {
    question: "What does the pass keyword do?",
    options: [
      "Skips iteration",
      "Ends the program",
      "Does nothing",
      "Returns from function",
    ],
    correctAnswer: "Does nothing",
    topic: "Syntax",
    level: "intermediate",
  },
  {
    question: "What is map() used for?",
    options: [
      "Mapping list to dictionary",
      "Applying a function to a sequence",
      "Creating loops",
      "Sorting a list",
    ],
    correctAnswer: "Applying a function to a sequence",
    topic: "Functions",
    level: "intermediate",
  },
  {
    question: "Which module helps in regular expressions?",
    options: ["regex", "re", "match", "search"],
    correctAnswer: "re",
    topic: "Modules",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What does @staticmethod do?",
    options: [
      "Adds a static variable",
      "Creates a class method",
      "Creates a static method",
      "Makes the method private",
    ],
    correctAnswer: "Creates a static method",
    topic: "Decorators",
    level: "advanced",
  },
  {
    question: "Which is used to handle exceptions?",
    options: ["try/except", "catch/throw", "check/raise", "guard/else"],
    correctAnswer: "try/except",
    topic: "Error Handling",
    level: "advanced",
  },
  {
    question: "What will set([1,2,2,3]) return?",
    options: ["{1,2,3}", "[1,2,3]", "(1,2,3)", "{1,2,2,3}"],
    correctAnswer: "{1, 2, 3}",
    topic: "Sets",
    level: "advanced",
  },
  {
    question: "What does **kwargs allow you to do?",
    options: [
      "Pass unlimited positional args",
      "Return multiple values",
      "Pass unlimited keyword args",
      "Create static methods",
    ],
    correctAnswer: "Pass unlimited keyword args",
    topic: "Functions",
    level: "advanced",
  },
  // 💻 Code Editor Qs
  {
    question:
      "Write a Python function that takes a number and returns its square.",
    codeEditor: true,
    correctAnswer: "def square(n):\n    return n * n",
    topic: "Functions",
    level: "advanced",
  },
  {
    question:
      "Write a function that counts the number of vowels in a given string.",
    codeEditor: true,
    correctAnswer:
      "def count_vowels(s):\n    return sum(1 for ch in s if ch.lower() in 'aeiou')",
    topic: "Strings",
    level: "master",
  },

  // 🧠🧠 Prodigy
  {
    question:
      "What is the output of: a = [1,2,3]; b = a; b.append(4); print(a)?",
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
    correctAnswer: "[1, 2, 3, 4]",
    topic: "List References",
    level: "prodigy",
  },
  {
    question: "What is __slots__ used for in a class?",
    options: [
      "Dynamic attribute creation",
      "Restrict attribute creation",
      "Make attributes private",
      "Create static methods",
    ],
    correctAnswer: "Restrict attribute creation",
    topic: "Advanced OOP",
    level: "prodigy",
  },
];
