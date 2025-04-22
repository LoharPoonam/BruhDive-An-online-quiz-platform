export const csharpQuestionsOne = [
  // 🛧 Noob Mode
  {
    question: "Which keyword declares a method in C#?",
    options: ["def", "function", "method", "void"],
    correctAnswer: "void",
    topic: "Functions",
    level: "newbie",
  },
  {
    question: "Which symbol is used to denote a single-line comment in C#?",
    options: ["//", "#", "--", "/*"],
    correctAnswer: "//",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "Which attribute marks a method as test-only?",
    options: ["[Test]", "[Fact]", "[TestMethod]", "All of the above"],
    correctAnswer: "All of the above",
    topic: "Testing",
    level: "prodigy",
  },
  {
    question: "What does `int` represent in C#?",
    options: ["Decimal value", "Character", "Integer", "Boolean"],
    correctAnswer: "Integer",
    topic: "Data Types",
    level: "newbie",
  },
  {
    question: "Which keyword is used to define a variable?",
    options: ["var", "define", "dim", "let"],
    correctAnswer: "var",
    topic: "Variables",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "What is the purpose of the `break` statement?",
    options: [
      "Skips next iteration",
      "Ends loop or switch",
      "Pauses execution",
      "Exits program",
    ],
    correctAnswer: "Ends loop or switch",
    topic: "Control Flow",
    level: "beginner",
  },
  {
    question: "Which method converts a string to uppercase in C#?",
    options: ["ToCaps()", "ToUpper()", "UpperCase()", "Capitalize()"],
    correctAnswer: "ToUpper()",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "Which data type stores true or false in C#?",
    options: ["bool", "int", "char", "bit"],
    correctAnswer: "bool",
    topic: "Data Types",
    level: "beginner",
  },
  {
    question: "Which keyword is used to handle exceptions?",
    options: ["try", "trap", "check", "guard"],
    correctAnswer: "try",
    topic: "Exception Handling",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a method that adds two integers and returns the result.",
    codeEditor: true,
    correctAnswer: "int Add(int a, int b) {\n  return a + b;\n}",
    topic: "Functions",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What does the `readonly` keyword do?",
    options: [
      "Makes variable global",
      "Allows runtime initialization only",
      "Creates constants",
      "Prevents inheritance",
    ],
    correctAnswer: "Allows runtime initialization only",
    topic: "Fields",
    level: "intermediate",
  },
  {
    question: "Which keyword prevents a class from being inherited?",
    options: ["sealed", "private", "protected", "final"],
    correctAnswer: "sealed",
    topic: "OOP",
    level: "intermediate",
  },
  {
    question: "What is the default value of a string variable?",
    options: ["null", '""', "undefined", "empty"],
    correctAnswer: "null",
    topic: "Variables",
    level: "intermediate",
  },
  {
    question: "Which collection does not allow duplicate elements?",
    options: ["List", "Array", "Dictionary", "HashSet"],
    correctAnswer: "HashSet",
    topic: "Collections",
    level: "intermediate",
  },
  {
    question: "Which method is used to pause thread execution?",
    options: [
      "Thread.Pause()",
      "Thread.Wait()",
      "Thread.Halt()",
      "Thread.Sleep()",
    ],
    correctAnswer: "Thread.Sleep()",
    topic: "Threading",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a method to reverse a string.",
    codeEditor: true,
    correctAnswer:
      "string Reverse(string s) {\n  return new string(s.Reverse().ToArray());\n}",
    topic: "Strings",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "Which class is used to write text files in C#?",
    options: ["TextWriter", "FileWriter", "StreamWriter", "TextFile"],
    correctAnswer: "StreamWriter",
    topic: "File Handling",
    level: "advanced",
  },
  {
    question: "Which modifier is used to hide base class methods?",
    options: ["override", "sealed", "virtual", "new"],
    correctAnswer: "new",
    topic: "Inheritance",
    level: "advanced",
  },
  {
    question: "Which delegate returns a value?",
    options: ["Action", "Func", "Predicate", "VoidDelegate"],
    correctAnswer: "Func",
    topic: "Delegates",
    level: "advanced",
  },
  {
    question: "Which keyword allows asynchronous execution?",
    options: ["await", "async", "run", "defer"],
    correctAnswer: "async",
    topic: "Async",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question:
      "Write an async method that delays for 1 second then returns 'Done'.",
    codeEditor: true,
    correctAnswer:
      'async Task<string> WaitAndReturn() {\n  await Task.Delay(1000);\n  return "Done";\n}',
    topic: "Async",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which C# feature provides read-only computed properties?",
    options: ["Fields", "Constructors", "Expression-bodied members", "Lambdas"],
    correctAnswer: "Expression-bodied members",
    topic: "Properties",
    level: "prodigy",
  },
  {
    question: "What does `yield return` enable in a method?",
    options: [
      "Multithreading",
      "Lazy iteration",
      "Asynchronous calls",
      "Memory allocation",
    ],
    correctAnswer: "Lazy iteration",
    topic: "Iterators",
    level: "prodigy",
  },
  {
    question: "Which LINQ method returns the first match or default value?",
    options: ["FirstOrDefault()", "Select()", "Find()", "Take()"],
    correctAnswer: "FirstOrDefault()",
    topic: "LINQ",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question:
      "Write a LINQ query to get names longer than 3 letters from a list.",
    codeEditor: true,
    correctAnswer:
      "var result = names.Where(name => name.Length > 3).ToList();",
    topic: "LINQ",
    level: "prodigy",
  },
];
