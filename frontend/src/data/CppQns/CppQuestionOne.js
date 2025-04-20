export const cppQuestionsOne = [
  // 🛧 Noob Mode

  {
    question: "Which symbol is used to comment a single line in C++?",
    options: ["//", "#", "/*", "<!"],
    correctAnswer: "//",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "Which header is required for `cout` and `cin`?",
    options: ["<string>", "<stdio.h>", "<iostream>", "<console>"],
    correctAnswer: "<iostream>",
    topic: "Headers",
    level: "newbie",
  },
  {
    question: "What does `endl` do in C++?",
    options: [
      "Ends the program",
      "Creates new line",
      "Clears buffer",
      "Deletes a line",
    ],
    correctAnswer: "Creates new line",
    topic: "Output",
    level: "newbie",
  },
  {
    question: "Which of the following is a valid integer constant?",
    options: ["42.0", "3.14", "7", "'A'"],
    correctAnswer: "7",
    topic: "Constants",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which operator is used for multiplication?",
    options: ["x", "*", "×", "mult"],
    correctAnswer: "*",
    topic: "Operators",
    level: "beginner",
  },
  {
    question: "What is the result of: `4 + 5 * 2`?",
    options: ["18", "14", "13", "10"],
    correctAnswer: "14",
    topic: "Operators",
    level: "beginner",
  },
  {
    question: "Which keyword is used to return a value from a function?",
    options: ["send", "exit", "return", "stop"],
    correctAnswer: "return",
    topic: "Functions",
    level: "beginner",
  },
  {
    question: "How to declare an array of 5 integers?",
    options: ["int arr[5];", "array arr[5];", "int arr();", "arr<int>(5);"],
    correctAnswer: "int arr[5];",
    topic: "Arrays",
    level: "beginner",
  },
  {
    question: "What is the index of the first element in a C++ array?",
    options: ["0", "1", "-1", "None"],
    correctAnswer: "0",
    topic: "Arrays",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a function to reverse an integer array in C++.",
    codeEditor: true,
    correctAnswer:
      "void reverseArray(int arr[], int size) {\n  for (int i = 0; i < size / 2; ++i) {\n    int temp = arr[i];\n    arr[i] = arr[size - 1 - i];\n    arr[size - 1 - i] = temp;\n  }\n}",
    topic: "Arrays",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What is the output of `sizeof(char)`?",
    options: ["2", "1", "4", "Depends"],
    correctAnswer: "1",
    topic: "Memory",
    level: "intermediate",
  },
  {
    question: "Which container uses LIFO order?",
    options: ["vector", "queue", "stack", "set"],
    correctAnswer: "stack",
    topic: "STL",
    level: "intermediate",
  },
  {
    question: "Which of the following allows dynamic memory allocation?",
    options: ["int arr[]", "new int[10]", "malloc(10)", "stack_alloc"],
    correctAnswer: "new int[10]",
    topic: "Memory",
    level: "intermediate",
  },
  {
    question: "What does `push_back()` do in a vector?",
    options: [
      "Removes element",
      "Adds element at end",
      "Sorts vector",
      "Clears all elements",
    ],
    correctAnswer: "Adds element at end",
    topic: "STL",
    level: "intermediate",
  },
  {
    question:
      "Which keyword makes class members accessible only within the class?",
    options: ["private", "protected", "public", "internal"],
    correctAnswer: "private",
    topic: "OOP",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a function to find the maximum value in an integer array.",
    codeEditor: true,
    correctAnswer:
      "int findMax(int arr[], int size) {\n  int max = arr[0];\n  for (int i = 1; i < size; ++i) {\n    if (arr[i] > max) max = arr[i];\n  }\n  return max;\n}",
    topic: "Arrays",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "Which STL container does not allow duplicates?",
    options: ["vector", "list", "set", "deque"],
    correctAnswer: "set",
    topic: "STL",
    level: "advanced",
  },
  {
    question: "Which C++ feature supports operator overloading?",
    options: ["Encapsulation", "Inheritance", "Polymorphism", "None"],
    correctAnswer: "Polymorphism",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "What does `this` pointer refer to?",
    options: ["Current object", "Main object", "Parent class", "None"],
    correctAnswer: "Current object",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which C++ version introduced `nullptr`?",
    options: ["C++98", "C++03", "C++11", "C++20"],
    correctAnswer: "C++11",
    topic: "Modern C++",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question: "Write a recursive function to calculate GCD of two numbers.",
    codeEditor: true,
    correctAnswer:
      "int gcd(int a, int b) {\n  if (b == 0) return a;\n  return gcd(b, a % b);\n}",
    topic: "Recursion",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "What is the primary advantage of `unique_ptr`?",
    options: [
      "Multiple ownership",
      "Shared ownership",
      "Automatic deallocation of single-owner object",
      "Cross-thread sharing",
    ],
    correctAnswer: "Automatic deallocation of single-owner object",
    topic: "Smart Pointers",
    level: "prodigy",
  },
  {
    question: "Which casting is safest in C++?",
    options: ["reinterpret_cast", "static_cast", "const_cast", "dynamic_cast"],
    correctAnswer: "dynamic_cast",
    topic: "Type Casting",
    level: "prodigy",
  },
  {
    question: "Which principle hides internal object details?",
    options: ["Abstraction", "Inheritance", "Encapsulation", "Polymorphism"],
    correctAnswer: "Encapsulation",
    topic: "OOP",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question: "Write a C++ template to return absolute value of any number.",
    codeEditor: true,
    correctAnswer:
      "template <typename T>\nT absolute(T x) {\n  return x < 0 ? -x : x;\n}",
    topic: "Templates",
    level: "prodigy",
  },
];
