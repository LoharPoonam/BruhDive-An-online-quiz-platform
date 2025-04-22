export const cppQuestionsTwo = [
  // 🛧 Noob Mode
  {
    question: "Which keyword is used to declare a function in C++?",
    options: ["func", "function", "void", "def"],
    correctAnswer: "void",
    topic: "Functions",
    level: "newbie",
  },
  {
    question: "Which of these is a correct way to output text in C++?",
    options: ["print()", "System.out()", "cout <<", "echo"],
    correctAnswer: "cout <<",
    topic: "Input/Output",
    level: "newbie",
  },
  {
    question: "What is the value of `5 % 2` in C++?",
    options: ["2", "1", "0", "3"],
    correctAnswer: "1",
    topic: "Operators",
    level: "newbie",
  },
  {
    question: "Which keyword is used to create a loop?",
    options: ["loop", "while", "repeat", "doif"],
    correctAnswer: "while",
    topic: "Loops",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which of the following is used to store true/false in C++?",
    options: ["flag", "truth", "bool", "int"],
    correctAnswer: "bool",
    topic: "Booleans",
    level: "beginner",
  },
  {
    question: "Which operator is used for logical OR?",
    options: ["&", "|", "||", "&&"],
    correctAnswer: "||",
    topic: "Operators",
    level: "beginner",
  },
  {
    question: "What will be the output?\n```cpp\ncout << 10 / 3;\n```",
    options: ["3.33", "3", "3.0", "Error"],
    correctAnswer: "3",
    topic: "Type Conversion",
    level: "beginner",
  },
  {
    question: "What is the size of an `int` in most systems?",
    options: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"],
    correctAnswer: "4 bytes",
    topic: "Memory",
    level: "beginner",
  },
  {
    question: "Which header is required for using `getline()`?",
    options: ["<iostream>", "<cstring>", "<string>", "<fstream>"],
    correctAnswer: "<string>",
    topic: "Strings",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a function to check if a number is prime in C++.",
    codeEditor: true,
    correctAnswer:
      "bool isPrime(int n) {\n  if (n <= 1) return false;\n  for (int i = 2; i <= sqrt(n); i++) {\n    if (n % i == 0) return false;\n  }\n  return true;\n}",
    topic: "Logic",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which keyword prevents modification of a variable?",
    options: ["immutable", "let", "const", "static"],
    correctAnswer: "const",
    topic: "Constants",
    level: "intermediate",
  },
  {
    question: "Which function gets the length of a `string`?",
    options: ["len()", "size()", "length()", "count()"],
    correctAnswer: "length()",
    topic: "Strings",
    level: "intermediate",
  },
  {
    question: "What is `nullptr` in C++?",
    options: ["Pointer to 0", "Null object", "A modern null pointer", "None"],
    correctAnswer: "A modern null pointer",
    topic: "Pointers",
    level: "intermediate",
  },
  {
    question: "Which of these is a C++ container?",
    options: ["tuple", "vector", "slice", "group"],
    correctAnswer: "vector",
    topic: "STL",
    level: "intermediate",
  },
  {
    question: "Which loop uses range-based iteration?",
    options: ["for", "foreach", "range", "auto-for"],
    correctAnswer: "for",
    topic: "Loops",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a function to calculate the sum of an integer array.",
    codeEditor: true,
    correctAnswer:
      "int sumArray(int arr[], int size) {\n  int sum = 0;\n  for (int i = 0; i < size; i++) sum += arr[i];\n  return sum;\n}",
    topic: "Arrays",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What does the `auto` keyword do?",
    options: [
      "Automatically casts types",
      "Automatically allocates memory",
      "Automatically detects variable type",
      "Automatically compiles code",
    ],
    correctAnswer: "Automatically detects variable type",
    topic: "Modern C++",
    level: "advanced",
  },
  {
    question: "Which smart pointer releases memory automatically?",
    options: ["raw pointer", "shared_ptr", "auto_ptr", "malloc"],
    correctAnswer: "shared_ptr",
    topic: "Memory",
    level: "advanced",
  },
  {
    question: "What is function overloading?",
    options: [
      "Multiple functions with same name, different params",
      "Functions calling other functions",
      "Passing functions to other functions",
      "A compile error",
    ],
    correctAnswer: "Multiple functions with same name, different params",
    topic: "Polymorphism",
    level: "advanced",
  },
  {
    question: "Which operator is used to access members of a pointer?",
    options: ["*", "&", ".", "->"],
    correctAnswer: "->",
    topic: "Pointers",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question: "Write a C++ program to find factorial using a loop.",
    codeEditor: true,
    correctAnswer:
      "int factorial(int n) {\n  int result = 1;\n  for (int i = 1; i <= n; i++) result *= i;\n  return result;\n}",
    topic: "Loops",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which of these supports multiple inheritance in C++?",
    options: ["Interfaces", "Abstract class", "Classes", "Structs"],
    correctAnswer: "Classes",
    topic: "OOP",
    level: "prodigy",
  },
  {
    question: "Which function type does not return any value?",
    options: ["void", "int", "null", "None"],
    correctAnswer: "void",
    topic: "Functions",
    level: "prodigy",
  },
  {
    question: "What is the use of `explicit` keyword in constructors?",
    options: [
      "Prevent automatic type conversion",
      "Allow inheritance",
      "Make it public",
      "Make it default",
    ],
    correctAnswer: "Prevent automatic type conversion",
    topic: "Constructors",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question: "Write a recursive function to print Fibonacci up to `n` terms.",
    codeEditor: true,
    correctAnswer:
      "int fib(int n) {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n}",
    topic: "Recursion",
    level: "prodigy",
  },
];
