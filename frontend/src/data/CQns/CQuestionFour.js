export const cQuestionsFour = [
  // 🛧 Noob Mode
  {
    question: "Which character is used to include a header file in C?",
    options: ["#", "$", "@", "*"],
    correctAnswer: "#",
    topic: "Preprocessor",
    level: "newbie",
  },
  {
    question: "Which of the following is a correct variable declaration?",
    options: ["int a;", "num = int;", "int = a;", "declare int a;"],
    correctAnswer: "int a;",
    topic: "Variables",
    level: "newbie",
  },
  {
    question:
      "Write a C function to calculate the sum of digits of an integer.",
    codeEditor: true,
    correctAnswer:
      "int sumDigits(int n) {\n  int sum = 0;\n  while (n != 0) {\n    sum += n % 10;\n    n /= 10;\n  }\n  return sum;\n}",
    topic: "Math",
    level: "intermediate",
  },

  {
    question: "What is the escape character for newline in C?",
    options: ["\\n", "\\t", "\\r", "/n"],
    correctAnswer: "\\n",
    topic: "Input/Output",
    level: "newbie",
  },
  {
    question: "Which of these is a valid constant declaration?",
    options: [
      "#define PI 3.14",
      "int PI = constant",
      "float pi();",
      "final float PI = 3.14;",
    ],
    correctAnswer: "#define PI 3.14",
    topic: "Constants",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which data type is used to store single characters?",
    options: ["char", "string", "text", "letter"],
    correctAnswer: "char",
    topic: "Data Types",
    level: "beginner",
  },
  {
    question: "How many bytes does an `int` typically take?",
    options: ["4", "8", "2", "1"],
    correctAnswer: "4",
    topic: "Memory",
    level: "beginner",
  },
  {
    question: "Which function is used to print output to the console?",
    options: ["print()", "output()", "echo()", "printf()"],
    correctAnswer: "printf()",
    topic: "Input/Output",
    level: "beginner",
  },
  {
    question: "Which operator is used for equality check in C?",
    options: ["=", "==", "!=", "<>"],
    correctAnswer: "==",
    topic: "Operators",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a C function to calculate the area of a circle.",
    codeEditor: true,
    correctAnswer:
      "#define PI 3.14\nfloat area(float r) {\n  return PI * r * r;\n}",
    topic: "Math",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What will `int x = 5 / 2;` store in x?",
    options: ["2.5", "2", "3", "2.0"],
    correctAnswer: "2",
    topic: "Type Conversion",
    level: "intermediate",
  },
  {
    question: "Which loop is best used when number of iterations is known?",
    options: ["while", "for", "do-while", "if"],
    correctAnswer: "for",
    topic: "Loops",
    level: "intermediate",
  },
  {
    question: "Which function is used to copy strings in C?",
    options: ["strcpy()", "strcat()", "copystr()", "stringcpy()"],
    correctAnswer: "strcpy()",
    topic: "Strings",
    level: "intermediate",
  },
  {
    question: "How do you declare a pointer to an integer?",
    options: ["int* p;", "*int p;", "ptr<int>;", "&int p;"],
    correctAnswer: "int* p;",
    topic: "Pointers",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a function to count even numbers in an array.",
    codeEditor: true,
    correctAnswer:
      "int countEven(int arr[], int n) {\n  int count = 0;\n  for (int i = 0; i < n; i++) {\n    if (arr[i] % 2 == 0) count++;\n  }\n  return count;\n}",
    topic: "Arrays",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What will `*p = 10;` do if `p` is a pointer to int?",
    options: [
      "Assign 10 to p",
      "Assign 10 to value at address p",
      "Print 10",
      "Error",
    ],
    correctAnswer: "Assign 10 to value at address p",
    topic: "Pointers",
    level: "advanced",
  },
  {
    question: "What does `fclose(fp);` do in C?",
    options: [
      "Flushes input buffer",
      "Closes file pointer",
      "Opens file",
      "Frees memory",
    ],
    correctAnswer: "Closes file pointer",
    topic: "File Handling",
    level: "advanced",
  },
  {
    question: "Which header defines `FILE` and `fopen()`?",
    options: ["<stdlib.h>", "<fileio.h>", "<stdio.h>", "<string.h>"],
    correctAnswer: "<stdio.h>",
    topic: "File Handling",
    level: "advanced",
  },
  {
    question: "What is a segmentation fault?",
    options: [
      "Memory overflow error",
      "Array syntax error",
      "Illegal access of memory",
      "Type mismatch",
    ],
    correctAnswer: "Illegal access of memory",
    topic: "Memory",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question: "Write a function to count words in a string (space-separated).",
    codeEditor: true,
    correctAnswer:
      "int countWords(char str[]) {\n  int count = 0;\n  for (int i = 0; str[i] != '\\0'; i++) {\n    if (str[i] == ' ' && str[i+1] != ' ' && str[i+1] != '\\0') count++;\n  }\n  return count + 1;\n}",
    topic: "Strings",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which operator is used for address-of in C?",
    options: ["*", "&", "#", "@"],
    correctAnswer: "&",
    topic: "Pointers",
    level: "prodigy",
  },
  {
    question: "Which one prevents buffer overflow when copying strings?",
    options: ["strcpy()", "memcpy()", "strncpy()", "gets()"],
    correctAnswer: "strncpy()",
    topic: "Strings",
    level: "prodigy",
  },
  {
    question: "Which is a type-safe way to allocate memory in C?",
    options: ["malloc()", "calloc()", "realloc()", "free()"],
    correctAnswer: "calloc()",
    topic: "Memory",
    level: "prodigy",
  },
  {
    question: "What does `volatile` keyword indicate in C?",
    options: [
      "Variable is constant",
      "Variable can change anytime (e.g., hardware interrupt)",
      "Variable is static",
      "Variable is optimized",
    ],
    correctAnswer: "Variable can change anytime (e.g., hardware interrupt)",
    topic: "Keywords",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question:
      "Write a recursive function to calculate the nth Fibonacci number.",
    codeEditor: true,
    correctAnswer:
      "int fib(int n) {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n}",
    topic: "Recursion",
    level: "prodigy",
  },
];
