export const cppQuestionsFour = [
  // 🛧 Noob Mode
  {
    question: "Which operator is used for input in C++?",
    options: ["<<", ">>", "<>", "//"],
    correctAnswer: ">>",
    topic: "Input/Output",
    level: "newbie",
  },
  {
    question: "How do you begin a multiline comment in C++?",
    options: ["/*", "//", "#", "comment"],
    correctAnswer: "/*",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "Which is a correct boolean type in C++?",
    options: ["boolean", "bool", "bit", "truth"],
    correctAnswer: "bool",
    topic: "Data Types",
    level: "newbie",
  },
  {
    question: "Which character ends every C++ statement?",
    options: [".", ":", ";", "!"],
    correctAnswer: ";",
    topic: "Syntax",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which function is used to exit a program?",
    options: ["quit()", "return()", "exit()", "stop()"],
    correctAnswer: "exit()",
    topic: "Functions",
    level: "beginner",
  },
  {
    question: "What will this output?\n```cpp\ncout << 2 + 3 * 4;\n```",
    options: ["20", "14", "24", "10"],
    correctAnswer: "14",
    topic: "Operators",
    level: "beginner",
  },
  {
    question: "What is the result of `true || false` in C++?",
    options: ["true", "false", "error", "0"],
    correctAnswer: "true",
    topic: "Booleans",
    level: "beginner",
  },
  {
    question: "What is the result of `10 / 3` in integer division?",
    options: ["3.33", "3", "0", "Error"],
    correctAnswer: "3",
    topic: "Operators",
    level: "beginner",
  },
  {
    question: "Which keyword is used to skip the current iteration of a loop?",
    options: ["pass", "skip", "continue", "end"],
    correctAnswer: "continue",
    topic: "Loops",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a function that returns the cube of a number.",
    codeEditor: true,
    correctAnswer: "int cube(int n) {\n  return n * n * n;\n}",
    topic: "Functions",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which header is used for file handling?",
    options: ["<file.h>", "<fstream>", "<stdio>", "<data.h>"],
    correctAnswer: "<fstream>",
    topic: "File Handling",
    level: "intermediate",
  },
  {
    question: "Which container stores unique elements in sorted order?",
    options: ["vector", "set", "list", "stack"],
    correctAnswer: "set",
    topic: "STL",
    level: "intermediate",
  },
  {
    question: "Which keyword is used to create objects from a class?",
    options: ["new", "create", "object", "instance"],
    correctAnswer: "new",
    topic: "OOP",
    level: "intermediate",
  },
  {
    question: "Which access modifier allows members to be used anywhere?",
    options: ["public", "private", "protected", "global"],
    correctAnswer: "public",
    topic: "OOP",
    level: "intermediate",
  },
  {
    question: "What is the default return type of `main()`?",
    options: ["void", "int", "double", "none"],
    correctAnswer: "int",
    topic: "Functions",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a function to count digits in an integer.",
    codeEditor: true,
    correctAnswer:
      "int countDigits(int n) {\n  int count = 0;\n  while(n) {\n    count++;\n    n /= 10;\n  }\n  return count;\n}",
    topic: "Loops",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "Which of the following is a type of constructor?",
    options: ["basic", "inline", "default", "system"],
    correctAnswer: "default",
    topic: "Constructors",
    level: "advanced",
  },
  {
    question: "What does `const` after a member function mean?",
    options: [
      "Function cannot return const",
      "Function doesn't modify members",
      "Function is private",
      "Function is only used in main",
    ],
    correctAnswer: "Function doesn't modify members",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which of the following allows function overriding?",
    options: ["static", "virtual", "inline", "friend"],
    correctAnswer: "virtual",
    topic: "Polymorphism",
    level: "advanced",
  },
  {
    question: "What happens if `delete` is used on non-dynamic memory?",
    options: [
      "Compiles",
      "Deletes normally",
      "Crashes or undefined behavior",
      "Returns false",
    ],
    correctAnswer: "Crashes or undefined behavior",
    topic: "Memory",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question: "Write a program to calculate power (a^b) using loop.",
    codeEditor: true,
    correctAnswer:
      "int power(int a, int b) {\n  int result = 1;\n  for (int i = 0; i < b; i++) {\n    result *= a;\n  }\n  return result;\n}",
    topic: "Loops",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which keyword restricts access to a class from other files?",
    options: ["static", "private", "protected", "internal"],
    correctAnswer: "private",
    topic: "OOP",
    level: "prodigy",
  },
  {
    question: "Which one is a compile-time polymorphism example?",
    options: [
      "Function Overloading",
      "Virtual Functions",
      "Function Pointers",
      "Templates",
    ],
    correctAnswer: "Function Overloading",
    topic: "Polymorphism",
    level: "prodigy",
  },
  {
    question: "Which function is called automatically when object is created?",
    options: ["main()", "init()", "constructor", "setup()"],
    correctAnswer: "constructor",
    topic: "Constructors",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question: "Write a template function to find the minimum of two values.",
    codeEditor: true,
    correctAnswer:
      "template <typename T>\nT minVal(T a, T b) {\n  return (a < b) ? a : b;\n}",
    topic: "Templates",
    level: "prodigy",
  },
];
