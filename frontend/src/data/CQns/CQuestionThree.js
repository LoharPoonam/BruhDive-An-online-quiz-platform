export const cQuestionsThree = [
  // 🛧 Noob Mode
  {
    question: "Which keyword is used to define a macro in C?",
    options: ["#define", "macro", "const", "static"],
    correctAnswer: "#define",
    topic: "Preprocessor",
    level: "newbie",
  },
  {
    question: "What does the `sizeof` operator return?",
    options: ["Memory address", "Value of variable", "Size in bytes", "Index"],
    correctAnswer: "Size in bytes",
    topic: "Operators",
    level: "newbie",
  },

  {
    question: "Which operator gets the address of a variable?",
    options: ["*", "&", "#", "@"],
    correctAnswer: "&",
    topic: "Pointers",
    level: "beginner",
  },

  {
    question: "Which format specifier is used for printing an integer?",
    options: ["%c", "%s", "%f", "%d"],
    correctAnswer: "%d",
    topic: "Input/Output",
    level: "newbie",
  },
  {
    question: "What is the value of `4 + 3 * 2` in C?",
    options: ["10", "14", "7", "17"],
    correctAnswer: "10",
    topic: "Operators",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which of these is a valid way to declare a float variable?",
    options: ["float num;", "decimal num;", "int num;", "char num;"],
    correctAnswer: "float num;",
    topic: "Data Types",
    level: "beginner",
  },
  {
    question: "What is the default return type of `main()` in C?",
    options: ["void", "int", "char", "float"],
    correctAnswer: "int",
    topic: "Functions",
    level: "beginner",
  },
  {
    question: "Which operator is used to get the remainder in C?",
    options: ["%", "/", "//", "mod"],
    correctAnswer: "%",
    topic: "Operators",
    level: "beginner",
  },
  {
    question: 'What will `printf("%d", 5 < 10);` print?',
    options: ["5", "10", "1", "0"],
    correctAnswer: "1",
    topic: "Booleans",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a function to check if a number is odd.",
    codeEditor: true,
    correctAnswer: "int isOdd(int n) {\n  return n % 2 != 0;\n}",
    topic: "Functions",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which header file contains the `malloc()` function?",
    options: ["<stdlib.h>", "<stdio.h>", "<math.h>", "<string.h>"],
    correctAnswer: "<stdlib.h>",
    topic: "Memory",
    level: "intermediate",
  },
  {
    question: "Which of these is used to concatenate strings in C?",
    options: ["strcat()", "concat()", "append()", "add()"],
    correctAnswer: "strcat()",
    topic: "Strings",
    level: "intermediate",
  },
  {
    question: "Which function is used to find string length?",
    options: ["strlen()", "length()", "size()", "strsize()"],
    correctAnswer: "strlen()",
    topic: "Strings",
    level: "intermediate",
  },
  {
    question: "How do you free dynamically allocated memory?",
    options: ["delete()", "free()", "remove()", "release()"],
    correctAnswer: "free()",
    topic: "Memory",
    level: "intermediate",
  },
  {
    question: "Which keyword is used for conditional branching?",
    options: ["switch", "if", "else", "All of the above"],
    correctAnswer: "All of the above",
    topic: "Conditions",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a function to calculate the average of an array.",
    codeEditor: true,
    correctAnswer:
      "float average(int arr[], int n) {\n  int sum = 0;\n  for (int i = 0; i < n; i++) sum += arr[i];\n  return (float)sum / n;\n}",
    topic: "Arrays",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is a pointer to a function in C?",
    options: [
      "A function returning a pointer",
      "A variable holding function address",
      "An array of functions",
      "An object reference",
    ],
    correctAnswer: "A variable holding function address",
    topic: "Pointers",
    level: "advanced",
  },
  {
    question: "What does the keyword `static` mean inside a function?",
    options: [
      "Variable is global",
      "Memory is deallocated",
      "Persists between calls",
      "It’s a class member",
    ],
    correctAnswer: "Persists between calls",
    topic: "Storage Class",
    level: "advanced",
  },
  {
    question: "Which function is used to compare strings?",
    options: ["strcmp()", "strcheck()", "compare()", "cmpstr()"],
    correctAnswer: "strcmp()",
    topic: "Strings",
    level: "advanced",
  },
  {
    question: "Which function is used to open a file in C?",
    options: ["file()", "fopen()", "openfile()", "open()"],
    correctAnswer: "fopen()",
    topic: "File Handling",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question: "Write a program to reverse a string using a loop.",
    codeEditor: true,
    correctAnswer:
      "void reverse(char str[]) {\n  int len = strlen(str);\n  for (int i = 0; i < len/2; i++) {\n    char temp = str[i];\n    str[i] = str[len-1-i];\n    str[len-1-i] = temp;\n  }\n}",
    topic: "Strings",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "What will `*(arr + i)` access in a pointer-based array?",
    options: [
      "Value at i-th index",
      "Memory size",
      "Pointer address",
      "Nothing",
    ],
    correctAnswer: "Value at i-th index",
    topic: "Pointers",
    level: "prodigy",
  },
  {
    question: "Which keyword is used to prevent a variable from changing?",
    options: ["const", "final", "immutable", "static"],
    correctAnswer: "const",
    topic: "Constants",
    level: "prodigy",
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
    correctAnswer: "O(log n)",
    topic: "Algorithms",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question: "Write a recursive function to calculate the power of a number.",
    codeEditor: true,
    correctAnswer:
      "int power(int base, int exp) {\n  if (exp == 0) return 1;\n  return base * power(base, exp - 1);\n}",
    topic: "Recursion",
    level: "prodigy",
  },
];
