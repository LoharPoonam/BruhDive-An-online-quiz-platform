export const cQuestionsOne = [
  // 🛧 Noob Mode
  {
    question: "Which function is used to read formatted input from stdin?",
    options: ["scanf()", "cin", "input()", "gets()"],
    correctAnswer: "scanf()",
    topic: "Input/Output",
    level: "newbie",
  },
  {
    question: "Which keyword is used to define a constant variable in C?",
    options: ["final", "const", "constant", "static"],
    correctAnswer: "const",
    topic: "Constants",
    level: "newbie",
  },
  {
    question:
      "Which keyword ensures a variable is not optimized and may change unexpectedly?",
    options: ["static", "volatile", "register", "extern"],
    correctAnswer: "volatile",
    topic: "Keywords",
    level: "prodigy",
  },

  {
    question: "Which operator is used to get the address of a variable?",
    options: ["*", "&", "#", "@"],
    correctAnswer: "&",
    topic: "Pointers",
    level: "beginner",
  },

  {
    question: "Which operator is used for modulus in C?",
    options: ["%", "&", "//", "mod"],
    correctAnswer: "%",
    topic: "Operators",
    level: "newbie",
  },
  {
    question: "Which data type is used to store decimal values?",
    options: ["int", "char", "float", "bool"],
    correctAnswer: "float",
    topic: "Data Types",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which function returns the length of a string in C?",
    options: ["len()", "length()", "strlen()", "size()"],
    correctAnswer: "strlen()",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do-while", "repeat"],
    correctAnswer: "do-while",
    topic: "Loops",
    level: "beginner",
  },
  {
    question: "Which character is used to escape a character in C?",
    options: ["\\", "/", "%", "^"],
    correctAnswer: "\\",
    topic: "Syntax",
    level: "beginner",
  },
  {
    question: "Which function allocates memory dynamically?",
    options: ["new", "malloc()", "alloc()", "memalloc()"],
    correctAnswer: "malloc()",
    topic: "Memory",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question:
      "Write a C function to check if a number is positive or negative.",
    codeEditor: true,
    correctAnswer:
      'void checkSign(int n) {\n  if (n >= 0) printf("Positive");\n  else printf("Negative");\n}',
    topic: "Conditions",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which format specifier is used to print a float?",
    options: ["%c", "%d", "%f", "%s"],
    correctAnswer: "%f",
    topic: "Input/Output",
    level: "intermediate",
  },
  {
    question: "What does `sizeof` operator return?",
    options: ["Address", "Length", "Size in bytes", "Type"],
    correctAnswer: "Size in bytes",
    topic: "Operators",
    level: "intermediate",
  },
  {
    question: "Which function is used to copy a string safely?",
    options: ["strcpy()", "strncpy()", "strdup()", "memcpy()"],
    correctAnswer: "strncpy()",
    topic: "Strings",
    level: "intermediate",
  },
  {
    question: "Which of these opens a file for writing in binary mode?",
    options: ['"w"', '"r"', '"wb"', '"a"'],
    correctAnswer: '"wb"',
    topic: "File Handling",
    level: "intermediate",
  },
  {
    question: "Which header file is used for memory allocation functions?",
    options: ["<stdio.h>", "<string.h>", "<stdlib.h>", "<math.h>"],
    correctAnswer: "<stdlib.h>",
    topic: "Headers",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a function to find the factorial of a number using loop.",
    codeEditor: true,
    correctAnswer:
      "int factorial(int n) {\n  int res = 1;\n  for(int i = 1; i <= n; i++) res *= i;\n  return res;\n}",
    topic: "Loops",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What will `*ptr++` do?",
    options: [
      "Dereference then increment pointer",
      "Increment then dereference",
      "Error",
      "Add 1 to the value",
    ],
    correctAnswer: "Dereference then increment pointer",
    topic: "Pointers",
    level: "advanced",
  },
  {
    question: "Which function writes data to a file?",
    options: ["fread()", "fprintf()", "fscanf()", "filewrite()"],
    correctAnswer: "fprintf()",
    topic: "File Handling",
    level: "advanced",
  },
  {
    question: "Which type is used to define enumerated values?",
    options: ["enum", "struct", "int", "typedef"],
    correctAnswer: "enum",
    topic: "Enums",
    level: "advanced",
  },
  {
    question: "What does `void*` mean in C?",
    options: ["Null pointer", "Function pointer", "Generic pointer", "None"],
    correctAnswer: "Generic pointer",
    topic: "Pointers",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question: "Write a function to reverse a string using a loop.",
    codeEditor: true,
    correctAnswer:
      "void reverse(char str[]) {\n  int len = strlen(str);\n  for (int i = 0; i < len / 2; i++) {\n    char temp = str[i];\n    str[i] = str[len - i - 1];\n    str[len - i - 1] = temp;\n  }\n}",
    topic: "Strings",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which of these allows returning multiple values in C?",
    options: ["return", "array", "pointer & reference", "struct"],
    correctAnswer: "struct",
    topic: "Structures",
    level: "prodigy",
  },
  {
    question: "What does `fseek()` do?",
    options: [
      "Flushes output",
      "Closes a file",
      "Sets the file position",
      "Reads input",
    ],
    correctAnswer: "Sets the file position",
    topic: "File Handling",
    level: "prodigy",
  },
  {
    question: "Which of these prevents segmentation faults?",
    options: ["Null check", "int check", "break", "goto"],
    correctAnswer: "Null check",
    topic: "Memory",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question: "Write a recursive function to print numbers from n to 1.",
    codeEditor: true,
    correctAnswer:
      'void printReverse(int n) {\n  if (n == 0) return;\n  printf("%d ", n);\n  printReverse(n - 1);\n}',
    topic: "Recursion",
    level: "prodigy",
  },
];
