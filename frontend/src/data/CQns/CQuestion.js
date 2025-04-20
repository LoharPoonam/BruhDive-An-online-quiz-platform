export const cQuestions = [
  // 🛧 Noob Mode

  {
    question: "Which function is used to print output in C?",
    options: ["printf()", "echo()", "print()", "cout"],
    correctAnswer: "printf()",
    topic: "Input/Output",
    level: "newbie",
  },
  {
    question: "Which keyword is used to declare an integer?",
    options: ["num", "int", "integer", "var"],
    correctAnswer: "int",
    topic: "Variables",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which operator is used for division in C?",
    options: ["/", "%", "*", "//"],
    correctAnswer: "/",
    topic: "Operators",
    level: "beginner",
  },
  {
    question: 'What is the output of: `printf("%d", 5 + 2 * 3);`?',
    options: ["21", "11", "13", "9"],
    correctAnswer: "11",
    topic: "Operators",
    level: "beginner",
  },
  {
    question: "Which loop runs at least once even if condition is false?",
    options: ["for", "while", "do-while", "foreach"],
    correctAnswer: "do-while",
    topic: "Loops",
    level: "beginner",
  },
  {
    question: "Which format specifier is used to print a float?",
    options: ["%d", "%f", "%c", "%s"],
    correctAnswer: "%f",
    topic: "Input/Output",
    level: "beginner",
  },

  // 💻 Code Editor (Beginner)
  {
    question: "Write a C function to return the square of an integer.",
    codeEditor: true,
    correctAnswer: "int square(int n) {\n  return n * n;\n}",
    topic: "Functions",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What is the purpose of the `break` statement?",
    options: [
      "Skips next line",
      "Terminates loop or switch",
      "Restarts loop",
      "Ends program",
    ],
    correctAnswer: "Terminates loop or switch",
    topic: "Loops",
    level: "intermediate",
  },
  {
    question: "What does `sizeof(int)` typically return?",
    options: ["2", "4", "8", "Depends"],
    correctAnswer: "4",
    topic: "Memory",
    level: "intermediate",
  },
  {
    question: "What is the keyword used to define a macro?",
    options: ["macro", "define", "typedef", "#define"],
    correctAnswer: "#define",
    topic: "Preprocessor",
    level: "intermediate",
  },
  {
    question: "What is the correct syntax to declare a pointer to int?",
    options: ["int* ptr;", "*ptr int;", "pointer int;", "int ptr*;"],
    correctAnswer: "int* ptr;",
    topic: "Pointers",
    level: "intermediate",
  },

  // 💻 Code Editor (Intermediate)
  {
    question: "Write a function in C to check if a number is even.",
    codeEditor: true,
    correctAnswer: "int isEven(int n) {\n  return n % 2 == 0;\n}",
    topic: "Operators",
    level: "intermediate",
  },

  {
    question: "Which header is required to use `printf()`?",
    options: ["<stdio.h>", "<conio.h>", "<math.h>", "<stdlib.h>"],
    correctAnswer: "<stdio.h>",
    topic: "Headers",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "Which function is used to copy strings in C?",
    options: ["strcpy()", "copystr()", "strcat()", "memcpy()"],
    correctAnswer: "strcpy()",
    topic: "Strings",
    level: "advanced",
  },
  {
    question: "Which library function deallocates memory in C?",
    options: ["free()", "delete()", "remove()", "dispose()"],
    correctAnswer: "free()",
    topic: "Memory",
    level: "advanced",
  },

  {
    question: "What is a NULL pointer in C?",
    options: [
      "Pointer to 0",
      "Pointer to random location",
      "Uninitialized pointer",
      "Pointer to void",
    ],
    correctAnswer: "Pointer to 0",
    topic: "Pointers",
    level: "advanced",
  },
  {
    question: "Which function terminates a C program?",
    options: ["stop()", "halt()", "exit()", "end()"],
    correctAnswer: "exit()",
    topic: "Functions",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "What does `*ptr++` do?",
    options: [
      "Increments pointer before dereferencing",
      "Dereferences then increments pointer",
      "Multiplies ptr by 1",
      "Syntax error",
    ],
    correctAnswer: "Dereferences then increments pointer",
    topic: "Pointers",
    level: "prodigy",
  },
  {
    question: "What is the use of `const` keyword?",
    options: [
      "Marks a value unchangeable",
      "Defines global variables",
      "Allocates memory",
      "Creates structure",
    ],
    correctAnswer: "Marks a value unchangeable",
    topic: "Constants",
    level: "prodigy",
  },

  // 💻 Code Editor (Prodigy)
  {
    question: "Write a C function to reverse a string.",
    codeEditor: true,
    correctAnswer:
      "void reverse(char* str) {\n  int len = strlen(str);\n  for(int i = 0; i < len / 2; i++) {\n    char temp = str[i];\n    str[i] = str[len - i - 1];\n    str[len - i - 1] = temp;\n  }\n}",
    topic: "Strings",
    level: "prodigy",
  },
  {
    question: "Which keyword is used to define a structure in C?",
    options: ["struct", "define", "class", "typedef"],
    correctAnswer: "struct",
    topic: "Structures",
    level: "advanced",
  },
];
