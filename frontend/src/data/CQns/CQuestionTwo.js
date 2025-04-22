export const cQuestionsTwo = [
  // 🛧 Noob Mode
  {
    question: "Which character is used to start a preprocessor directive?",
    options: ["@", "$", "#", "&"],
    correctAnswer: "#",
    topic: "Preprocessor",
    level: "newbie",
  },
  {
    question: "Which operator is used for equality check in C?",
    options: ["==", "=", "!=", "<="],
    correctAnswer: "==",
    topic: "Operators",
    level: "newbie",
  },
  {
    question: "Which keyword is used to create a loop in C?",
    options: ["loop", "iterate", "while", "repeat"],
    correctAnswer: "while",
    topic: "Loops",
    level: "newbie",
  },
  {
    question: "Which keyword is used to return a value from a function?",
    options: ["return", "exit", "yield", "stop"],
    correctAnswer: "return",
    topic: "Functions",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which function reads a string input in C?",
    options: ["gets()", "scanf()", "input()", "cin"],
    correctAnswer: "gets()",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "How many bits are there in 1 byte?",
    options: ["4", "8", "16", "32"],
    correctAnswer: "8",
    topic: "Memory",
    level: "beginner",
  },
  {
    question: "Which function is used to find the length of a string?",
    options: ["strlen()", "length()", "size()", "getlen()"],
    correctAnswer: "strlen()",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "Which data type is used for decimal numbers?",
    options: ["int", "float", "char", "bool"],
    correctAnswer: "float",
    topic: "Data Types",
    level: "beginner",
  },

  // 💻 Code Editor (Beginner)
  {
    question: "Write a C function to find the cube of a number.",
    codeEditor: true,
    correctAnswer: "int cube(int n) {\n  return n * n * n;\n}",
    topic: "Math",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What does `%` operator do in C?",
    options: [
      "Calculates percentage",
      "Finds remainder",
      "Rounds off value",
      "Raises power",
    ],
    correctAnswer: "Finds remainder",
    topic: "Operators",
    level: "intermediate",
  },
  {
    question: "Which function is used to dynamically allocate memory?",
    options: ["malloc()", "calloc()", "alloc()", "realloc()"],
    correctAnswer: "malloc()",
    topic: "Memory",
    level: "intermediate",
  },
  {
    question: "Which header file is needed for string functions?",
    options: ["<stdio.h>", "<string.h>", "<stdlib.h>", "<math.h>"],
    correctAnswer: "<string.h>",
    topic: "Headers",
    level: "intermediate",
  },
  {
    question: "What is the default value of a local variable in C?",
    options: ["0", "null", "garbage", "undefined"],
    correctAnswer: "garbage",
    topic: "Memory",
    level: "intermediate",
  },

  // 💻 Code Editor (Intermediate)
  {
    question: "Write a C program to count the number of vowels in a string.",
    codeEditor: true,
    correctAnswer:
      "int countVowels(char* str) {\n  int count = 0;\n  for (int i = 0; str[i]; i++) {\n    char c = tolower(str[i]);\n    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') count++;\n  }\n  return count;\n}",
    topic: "Strings",
    level: "intermediate",
  },

  {
    question: "Which loop checks the condition after execution?",
    options: ["for", "do-while", "while", "loop"],
    correctAnswer: "do-while",
    topic: "Loops",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is the output of `sizeof(double)` in C (usually)?",
    options: ["4", "8", "2", "10"],
    correctAnswer: "8",
    topic: "Memory",
    level: "advanced",
  },
  {
    question: "Which pointer points to nothing?",
    options: ["wild", "dangling", "NULL", "char*"],
    correctAnswer: "NULL",
    topic: "Pointers",
    level: "advanced",
  },
  {
    question: "Which keyword is used for conditional compilation?",
    options: ["#if", "cond", "#ifdef", "#include"],
    correctAnswer: "#ifdef",
    topic: "Preprocessor",
    level: "advanced",
  },

  // 💻 Code Editor (Advanced)
  {
    question: "Write a function to find the largest element in an array.",
    codeEditor: true,
    correctAnswer:
      "int findMax(int arr[], int size) {\n  int max = arr[0];\n  for (int i = 1; i < size; i++) {\n    if (arr[i] > max) max = arr[i];\n  }\n  return max;\n}",
    topic: "Arrays",
    level: "advanced",
  },

  {
    question: "What does `realloc()` do?",
    options: [
      "Deallocates memory",
      "Modifies pointer type",
      "Changes allocated memory size",
      "Copies memory",
    ],
    correctAnswer: "Changes allocated memory size",
    topic: "Memory",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which function is used to compare two strings?",
    options: ["compare()", "strcmp()", "equal()", "check()"],
    correctAnswer: "strcmp()",
    topic: "Strings",
    level: "prodigy",
  },
  {
    question: "Which pointer is automatically initialized to NULL?",
    options: ["Global pointer", "Local pointer", "All pointers", "Static"],
    correctAnswer: "Global pointer",
    topic: "Pointers",
    level: "prodigy",
  },
  {
    question: "What does `const int* ptr;` mean?",
    options: [
      "Pointer to constant int",
      "Constant pointer to int",
      "Const int and pointer",
      "None of the above",
    ],
    correctAnswer: "Pointer to constant int",
    topic: "Pointers",
    level: "prodigy",
  },

  {
    question: "Which keyword defines a user-defined type in C?",
    options: ["define", "typedef", "alias", "struct"],
    correctAnswer: "typedef",
    topic: "Type Definitions",
    level: "prodigy",
  },
];
