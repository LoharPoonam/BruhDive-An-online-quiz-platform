export const csharpQuestionsThree = [
  // 🛧 Noob Mode
  {
    question: "Which keyword is used to declare a variable in C#?",
    options: ["let", "dim", "var", "define"],
    correctAnswer: "var",
    topic: "Variables",
    level: "newbie",
  },
  {
    question: "What is the entry point of a C# console program?",
    options: ["Start()", "run()", "Main()", "Execute()"],
    correctAnswer: "Main()",
    topic: "Program Structure",
    level: "newbie",
  },
  {
    question: "Which keyword is used to define a method in C#?",
    options: ["function", "def", "method", "void"],
    correctAnswer: "void",
    topic: "Functions",
    level: "newbie",
  },
  {
    question: "Which symbol is used for single-line comments in C#?",
    options: ["//", "#", "--", "%"],
    correctAnswer: "//",
    topic: "Syntax",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "What is the default value of an uninitialized `int` in a class?",
    options: ["null", "0", "undefined", "NaN"],
    correctAnswer: "0",
    topic: "Variables",
    level: "beginner",
  },
  {
    question: "Which C# type is used to hold multiple values of the same type?",
    options: ["list", "array", "object", "tuple"],
    correctAnswer: "array",
    topic: "Arrays",
    level: "beginner",
  },
  {
    question: "Which loop repeats as long as a condition is true?",
    options: ["for", "if", "while", "switch"],
    correctAnswer: "while",
    topic: "Loops",
    level: "beginner",
  },
  {
    question: "Which of these is a reference type?",
    options: ["int", "float", "double", "string"],
    correctAnswer: "string",
    topic: "Data Types",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a method that returns the square of an integer.",
    codeEditor: true,
    correctAnswer: "int Square(int n) {\n  return n * n;\n}",
    topic: "Math",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which keyword prevents a class from being inherited?",
    options: ["sealed", "final", "static", "lock"],
    correctAnswer: "sealed",
    topic: "OOP",
    level: "intermediate",
  },
  {
    question: "What does `is` keyword check in C#?",
    options: [
      "If object is null",
      "If object type matches",
      "If variable is declared",
      "If method is valid",
    ],
    correctAnswer: "If object type matches",
    topic: "Type Checking",
    level: "intermediate",
  },
  {
    question: "Which type supports key-value pairs?",
    options: ["List", "Stack", "Queue", "Dictionary"],
    correctAnswer: "Dictionary",
    topic: "Collections",
    level: "intermediate",
  },
  {
    question: "What is the base class of all classes in C#?",
    options: ["Base", "Root", "Object", "Core"],
    correctAnswer: "Object",
    topic: "OOP",
    level: "intermediate",
  },
  {
    question: "What does `override` mean in C#?",
    options: [
      "It hides a method",
      "It extends a class",
      "It replaces a virtual method",
      "It creates an interface",
    ],
    correctAnswer: "It replaces a virtual method",
    topic: "Inheritance",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a method to sum all even numbers in an int array.",
    codeEditor: true,
    correctAnswer:
      "int SumEven(int[] arr) {\n  int sum = 0;\n  foreach (int n in arr) {\n    if (n % 2 == 0) sum += n;\n  }\n  return sum;\n}",
    topic: "Arrays",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "Which keyword is used to define an abstract class?",
    options: ["interface", "virtual", "abstract", "base"],
    correctAnswer: "abstract",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which LINQ method filters a sequence?",
    options: ["Select", "Filter", "Where", "Sort"],
    correctAnswer: "Where",
    topic: "LINQ",
    level: "advanced",
  },
  {
    question: "Which operator is used to declare an event?",
    options: ["new", "event", "trigger", "delegate"],
    correctAnswer: "event",
    topic: "Events",
    level: "advanced",
  },
  {
    question: "What is the return type of a lambda expression?",
    options: ["delegate", "function", "anonymous method", "depends on context"],
    correctAnswer: "depends on context",
    topic: "Lambdas",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question: "Write a method that checks if a string is null or empty.",
    codeEditor: true,
    correctAnswer:
      "bool IsNullOrEmpty(string s) {\n  return string.IsNullOrEmpty(s);\n}",
    topic: "Strings",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which feature allows iteration over a collection in C#?",
    options: ["IList", "IEnumerator", "IEnumerable", "IReadable"],
    correctAnswer: "IEnumerable",
    topic: "Interfaces",
    level: "prodigy",
  },
  {
    question: "What is the purpose of the `yield` keyword?",
    options: [
      "To end execution",
      "To return multiple values from a method lazily",
      "To declare readonly field",
      "To throw an exception",
    ],
    correctAnswer: "To return multiple values from a method lazily",
    topic: "Iteration",
    level: "prodigy",
  },
  {
    question: "Which operator checks for null before accessing a member?",
    options: ["?.", "??", "?:", "!"],
    correctAnswer: "?.",
    topic: "Null Safety",
    level: "beginner",
  },
  {
    question: "Which keyword is used for asynchronous methods?",
    options: ["await", "async", "defer", "thread"],
    correctAnswer: "async",
    topic: "Async Programming",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question: "Write an async method that returns Task<int> with value 5.",
    codeEditor: true,
    correctAnswer:
      "async Task<int> ReturnFiveAsync() {\n  await Task.Delay(100);\n  return 5;\n}",
    topic: "Async",
    level: "prodigy",
  },
];
