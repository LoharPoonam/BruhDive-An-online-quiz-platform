export const cppQuestions = [
  // 🛧 Noob Mode
  {
    question: "Which symbol is used to end a statement in C++?",
    options: [";", ".", ":", ","],
    correctAnswer: ";",
    topic: "Syntax",
    level: "newbie",
  },

  {
    question: "Which header file is needed to use `cout`?",
    options: ["<conio.h>", "<iostream>", "<stdio.h>", "<math.h>"],
    correctAnswer: "<iostream>",
    topic: "Input/Output",
    level: "newbie",
  },
  {
    question: "Which operator is used for comparison in C++?",
    options: ["==", "=", ":", "<>"],
    correctAnswer: "==",
    topic: "Operators",
    level: "newbie",
  },
  {
    question: "How do you start the `main` function in C++?",
    options: ["main()", "void main", "int main()", "main"],
    correctAnswer: "int main()",
    topic: "Functions",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "What is the default return type of `main()` in C++?",
    options: ["int", "void", "char", "float"],
    correctAnswer: "int",
    topic: "Functions",
    level: "beginner",
  },
  {
    question: "Which symbol is used for single-line comments in C++?",
    options: ["#", "//", "/*", "--"],
    correctAnswer: "//",
    topic: "Comments",
    level: "beginner",
  },
  {
    question: "Which keyword is used to define a constant?",
    options: ["static", "immutable", "final", "const"],
    correctAnswer: "const",
    topic: "Constants",
    level: "beginner",
  },

  {
    question: "What will `cout << 5 + 3 * 2;` output?",
    options: ["16", "11", "10", "13"],
    correctAnswer: "11",
    topic: "Operators",
    level: "beginner",
  },

  // 💻 Code Editor (random)
  {
    question: "Write a C++ function to check if a number is even.",
    codeEditor: true,
    correctAnswer: "bool isEven(int num) {\n  return num % 2 == 0;\n}",
    topic: "Operators",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which data structure is defined in `<vector>`?",
    options: ["array", "list", "vector", "map"],
    correctAnswer: "vector",
    topic: "STL",
    level: "intermediate",
  },
  {
    question: "Which loop guarantees execution at least once?",
    options: ["for", "while", "do-while", "foreach"],
    correctAnswer: "do-while",
    topic: "Loops",
    level: "intermediate",
  },
  {
    question: "Which keyword is used to define a class?",
    options: ["struct", "object", "class", "type"],
    correctAnswer: "class",
    topic: "OOP",
    level: "intermediate",
  },
  {
    question: "What does `new` keyword do?",
    options: [
      "Creates class",
      "Creates object",
      "Allocates memory",
      "Deletes memory",
    ],
    correctAnswer: "Allocates memory",
    topic: "Memory",
    level: "intermediate",
  },
  {
    question: "Which is the correct way to create a pointer?",
    options: ["int* ptr;", "int ptr;", "*int ptr;", "int &ptr;"],
    correctAnswer: "int* ptr;",
    topic: "Pointers",
    level: "intermediate",
  },

  // 💻 Code Editor (random)
  {
    question: "Write a function to return the maximum of 3 numbers in C++.",
    codeEditor: true,
    correctAnswer:
      "int maxOfThree(int a, int b, int c) {\n  return max(a, max(b, c));\n}",
    topic: "Functions",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is a smart pointer?",
    options: [
      "Pointer to pointer",
      "Pointer with intelligence",
      "Pointer that manages memory",
      "Virtual pointer",
    ],
    correctAnswer: "Pointer that manages memory",
    topic: "Memory Management",
    level: "advanced",
  },
  {
    question: "What does the `this` pointer refer to?",
    options: [
      "Global object",
      "Current object",
      "Parent class",
      "Static object",
    ],
    correctAnswer: "Current object",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which feature allows multiple functions with the same name?",
    options: ["Inheritance", "Encapsulation", "Overloading", "Polymorphism"],
    correctAnswer: "Overloading",
    topic: "Polymorphism",
    level: "advanced",
  },
  {
    question: "What does `try-catch` block handle?",
    options: [
      "Syntax errors",
      "Runtime exceptions",
      "Compile errors",
      "Memory leaks",
    ],
    correctAnswer: "Runtime exceptions",
    topic: "Error Handling",
    level: "advanced",
  },

  // 💻 Code Editor (random)
  {
    question: "Write a function to reverse a string in C++.",
    codeEditor: true,
    correctAnswer:
      "string reverseStr(string str) {\n  reverse(str.begin(), str.end());\n  return str;\n}",
    topic: "Strings",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question:
      "What is the output?\n```cpp\nint a = 10;\ncout << ++a * a--;\n```",
    options: ["100", "110", "121", "Error"],
    correctAnswer: "121",
    topic: "Operators",
    level: "prodigy",
  },
  {
    question: "Which C++11 feature lets you pass functions as parameters?",
    options: ["Lambda", "Macro", "Function pointer", "Inline function"],
    correctAnswer: "Lambda",
    topic: "Modern C++",
    level: "prodigy",
  },

  // 💻 Code Editor (random)
  {
    question: "Write a recursive function to calculate factorial in C++.",
    codeEditor: true,
    correctAnswer:
      "int factorial(int n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}",
    topic: "Recursion",
    level: "prodigy",
  },

  {
    question: "Which is used to avoid memory leaks in modern C++?",
    options: ["delete", "malloc", "smart pointers", "garbage collector"],
    correctAnswer: "smart pointers",
    topic: "Memory",
    level: "prodigy",
  },
  {
    question: "Which STL container does not allow duplicates?",
    options: ["vector", "map", "set", "list"],
    correctAnswer: "set",
    topic: "STL",
    level: "prodigy",
  },
];
