export const javaQuestionsFour = [
  // 🔰 Newbie
  {
    question: "Which keyword is used to define a Java method?",
    options: ["method", "def", "void", "function"],
    correctAnswer: "void",
    topic: "Methods",
    level: "newbie",
  },
  {
    question: "Which of the following is a loop in Java?",
    options: ["repeat", "for", "loop", "iterate"],
    correctAnswer: "for",
    topic: "Loops",
    level: "newbie",
  },
  {
    question: "Which of these is used to store a sequence of characters?",
    options: ["String", "int", "boolean", "float"],
    correctAnswer: "String",
    topic: "Strings",
    level: "newbie",
  },
  {
    question: "Which access modifier makes a class member visible everywhere?",
    options: ["private", "public", "default", "protected"],
    correctAnswer: "public",
    topic: "Access Modifiers",
    level: "newbie",
  },
  {
    question: "Which function is used to read input from the console?",
    options: [
      "System.input()",
      "Scanner.next()",
      "Console.read()",
      "ReadLine()",
    ],
    correctAnswer: "Scanner.next()",
    topic: "Input/Output",
    level: "newbie",
  },

  // 🧑‍💻 Beginner
  {
    question: "What is the correct syntax to declare a float variable?",
    options: [
      "float num = 2.0",
      "float num = 2.0f;",
      "float num = '2.0';",
      "float num = (2.0)",
    ],
    correctAnswer: "float num = 2.0f;",
    topic: "Data Types",
    level: "beginner",
  },
  {
    question: "Which loop checks the condition after executing the loop body?",
    options: ["for", "while", "do-while", "foreach"],
    correctAnswer: "do-while",
    topic: "Loops",
    level: "beginner",
  },
  {
    question: "Which method converts a string to lowercase?",
    options: ["lower()", "toLowerCase()", "toLower()", "str.lowercase()"],
    correctAnswer: "toLowerCase()",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "Which keyword is used to refer to the current object?",
    options: ["self", "this", "object", "current"],
    correctAnswer: "this",
    topic: "OOP",
    level: "beginner",
  },
  {
    question: "What will be the output of `System.out.println('A' + 1);`?",
    options: ["A1", "66", "B", "Error"],
    correctAnswer: "66",
    topic: "Type Conversion",
    level: "beginner",
  },

  // 💻 Code Editor (random)
  {
    question: "Write a Java method to swap two numbers.",
    codeEditor: true,
    correctAnswer:
      'void swap(int a, int b) {\n  int temp = a;\n  a = b;\n  b = temp;\n  System.out.println("a=" + a + " b=" + b);\n}',
    topic: "Basics",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which operator is used for bitwise AND?",
    options: ["&&", "&", "|", "^"],
    correctAnswer: "&",
    topic: "Operators",
    level: "intermediate",
  },
  {
    question: "What is the result of `9 % 4`?",
    options: ["2", "1", "3", "0"],
    correctAnswer: "1",
    topic: "Math",
    level: "intermediate",
  },
  {
    question: "Which of these is not a primitive type in Java?",
    options: ["int", "char", "boolean", "String"],
    correctAnswer: "String",
    topic: "Data Types",
    level: "intermediate",
  },
  {
    question: "Which interface provides a blueprint for a queue in Java?",
    options: ["List", "Queue", "Map", "Deque"],
    correctAnswer: "Queue",
    topic: "Collections",
    level: "intermediate",
  },

  {
    question: "Which exception occurs when dividing by zero in integers?",
    options: [
      "ArithmeticException",
      "NullPointerException",
      "IllegalArgumentException",
      "NumberFormatException",
    ],
    correctAnswer: "ArithmeticException",
    topic: "Exceptions",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question:
      "Which interface is used for implementing functional programming in Java?",
    options: ["Function", "Runnable", "Callable", "Serializable"],
    correctAnswer: "Function",
    topic: "Functional Interfaces",
    level: "advanced",
  },
  {
    question:
      "Which Java 8 feature allows processing collections using pipelines?",
    options: ["Streams", "Lambda", "ForkJoin", "Threads"],
    correctAnswer: "Streams",
    topic: "Streams API",
    level: "advanced",
  },

  // 💻 Code Editor (random)
  {
    question: "Write a method to find the GCD of two numbers.",
    codeEditor: true,
    correctAnswer:
      "int gcd(int a, int b) {\n  while (b != 0) {\n    int temp = b;\n    b = a % b;\n    a = temp;\n  }\n  return a;\n}",
    topic: "Math",
    level: "advanced",
  },

  {
    question: "What is a lambda expression used for?",
    options: [
      "Define anonymous functions",
      "Create classes",
      "Implement interfaces",
      "Throw exceptions",
    ],
    correctAnswer: "Define anonymous functions",
    topic: "Lambda",
    level: "advanced",
  },

  // 🧠🧠 Prodigy
  {
    question:
      'What does this return?\n```java\nSystem.out.println("1" + 2 + 3);\n```',
    options: ["6", "123", "33", "5"],
    correctAnswer: "123",
    topic: "Type Conversion",
    level: "prodigy",
  },
  {
    question: "Which modifier is used for a method that can’t be overridden?",
    options: ["final", "static", "abstract", "sealed"],
    correctAnswer: "final",
    topic: "OOP",
    level: "prodigy",
  },
  {
    question:
      "What will be printed?\n```java\nint x = 5, y = 10;\nSystem.out.println(x+++y);\n```",
    options: ["15", "16", "Error", "14"],
    correctAnswer: "15",
    topic: "Operators",
    level: "prodigy",
  },

  // 💻 Code Editor (random)
  {
    question: "Write a recursive method to calculate power of a number.",
    codeEditor: true,
    correctAnswer:
      "int power(int base, int exp) {\n  if (exp == 0) return 1;\n  return base * power(base, exp - 1);\n}",
    topic: "Recursion",
    level: "prodigy",
  },
];
