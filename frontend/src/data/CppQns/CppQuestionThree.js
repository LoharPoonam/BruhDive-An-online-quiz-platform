export const cppQuestionsThree = [
  // 🛧 Noob Mode
  {
    question: "Which keyword ends a loop early?",
    options: ["skip", "exit", "end", "break"],
    correctAnswer: "break",
    topic: "Loops",
    level: "newbie",
  },
  {
    question: "Which one is a valid data type in C++?",
    options: ["floaty", "decimal", "float", "real"],
    correctAnswer: "float",
    topic: "Data Types",
    level: "newbie",
  },
  {
    question: "Which operator is used to assign a value?",
    options: ["==", "=", ":=", "->"],
    correctAnswer: "=",
    topic: "Operators",
    level: "newbie",
  },
  {
    question: "Which statement correctly takes input from the user?",
    options: ["cin >>", "cout <<", "scanf", "readln"],
    correctAnswer: "cin >>",
    topic: "Input/Output",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which statement defines a constant value in C++?",
    options: [
      "let pi = 3.14;",
      "define pi 3.14",
      "const double pi = 3.14;",
      "fixed pi = 3.14;",
    ],
    correctAnswer: "const double pi = 3.14;",
    topic: "Constants",
    level: "beginner",
  },
  {
    question: "What is the output of `cout << (true && false);`?",
    options: ["1", "true", "0", "false"],
    correctAnswer: "0",
    topic: "Booleans",
    level: "beginner",
  },
  {
    question: "Which keyword is used to define a structure?",
    options: ["struct", "class", "typedef", "record"],
    correctAnswer: "struct",
    topic: "Structs",
    level: "beginner",
  },
  {
    question: "Which function is used to find the length of a string object?",
    options: ["len()", "length()", "strlen()", "sizeOf()"],
    correctAnswer: "length()",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "Which of these denotes a single character constant?",
    options: ["'a'", '"a"', "a", "`a`"],
    correctAnswer: "'a'",
    topic: "Data Types",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a function that returns the square of an integer.",
    codeEditor: true,
    correctAnswer: "int square(int x) {\n  return x * x;\n}",
    topic: "Functions",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which STL container provides key-value pairs?",
    options: ["vector", "array", "map", "list"],
    correctAnswer: "map",
    topic: "STL",
    level: "intermediate",
  },
  {
    question: "Which of these initializes a dynamic array?",
    options: [
      "int* arr = new int[5];",
      "int arr[] = 5;",
      "int* arr = malloc(5);",
      "array<int> arr(5);",
    ],
    correctAnswer: "int* arr = new int[5];",
    topic: "Memory",
    level: "intermediate",
  },
  {
    question: "Which of the following correctly defines a class in C++?",
    options: [
      "class MyClass { };",
      "MyClass = class { };",
      "new class MyClass { };",
      "define class MyClass { };",
    ],
    correctAnswer: "class MyClass { };",
    topic: "OOP",
    level: "intermediate",
  },
  {
    question:
      "Which statement correctly deletes a dynamically allocated array?",
    options: ["delete arr;", "remove arr;", "free(arr);", "delete[] arr;"],
    correctAnswer: "delete[] arr;",
    topic: "Memory",
    level: "intermediate",
  },
  {
    question: "Which loop type is best when number of iterations is unknown?",
    options: ["for", "while", "do-while", "foreach"],
    correctAnswer: "while",
    topic: "Loops",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a function to count vowels in a string.",
    codeEditor: true,
    correctAnswer:
      'int countVowels(string s) {\n  int count = 0;\n  for (char c : s) {\n    if (strchr("aeiouAEIOU", c)) count++;\n  }\n  return count;\n}',
    topic: "Strings",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "Which keyword is used for inheritance?",
    options: ["inherit", "extends", "super", "public"],
    correctAnswer: "public",
    topic: "Inheritance",
    level: "advanced",
  },
  {
    question: "What is virtual function used for?",
    options: [
      "Memory management",
      "File handling",
      "Dynamic polymorphism",
      "Early binding",
    ],
    correctAnswer: "Dynamic polymorphism",
    topic: "Polymorphism",
    level: "advanced",
  },
  {
    question: "What is the purpose of `friend` keyword in C++?",
    options: [
      "Make a class global",
      "Allow one class to access private members of another",
      "Make methods faster",
      "Share memory space",
    ],
    correctAnswer: "Allow one class to access private members of another",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which C++ feature allows defining functions inline?",
    options: ["inline", "fast", "quick", "macro"],
    correctAnswer: "inline",
    topic: "Functions",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question: "Write a C++ program to swap two numbers using a function.",
    codeEditor: true,
    correctAnswer:
      "void swap(int &a, int &b) {\n  int temp = a;\n  a = b;\n  b = temp;\n}",
    topic: "Functions",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which of the following avoids dangling pointers?",
    options: ["raw pointer", "smart pointer", "void pointer", "wild pointer"],
    correctAnswer: "smart pointer",
    topic: "Memory",
    level: "prodigy",
  },
  {
    question:
      "Which feature allows executing same function for different types?",
    options: ["Overloading", "Encapsulation", "Inheritance", "Templates"],
    correctAnswer: "Templates",
    topic: "Templates",
    level: "prodigy",
  },
  {
    question: "What is the purpose of `static_cast`?",
    options: [
      "Converts string to int",
      "Performs safe type conversion at compile-time",
      "Allocates memory",
      "Casts between unrelated classes",
    ],
    correctAnswer: "Performs safe type conversion at compile-time",
    topic: "Type Casting",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question: "Write a template function to find maximum of two values.",
    codeEditor: true,
    correctAnswer:
      "template <typename T>\nT maxVal(T a, T b) {\n  return (a > b) ? a : b;\n}",
    topic: "Templates",
    level: "prodigy",
  },
];
