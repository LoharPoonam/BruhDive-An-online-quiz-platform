export const csharpQuestionsTwo = [
  // 🛧 Noob Mode
  {
    question: "What is the file extension for C# source code files?",
    options: [".cs", ".csharp", ".c#", ".cpp"],
    correctAnswer: ".cs",
    topic: "Basics",
    level: "newbie",
  },
  {
    question: "Which keyword is used to create a new object?",
    options: ["create", "new", "init", "instance"],
    correctAnswer: "new",
    topic: "OOP",
    level: "newbie",
  },
  {
    question: "Which operator checks for null before accessing a member?",
    options: ["?.", "??", "?:", "!"],
    correctAnswer: "?.",
    topic: "Null Safety",
    level: "beginner",
  },
  {
    question: "Which of the following is a valid comment in C#?",
    options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
    correctAnswer: "// comment",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "Which of these is a value type in C#?",
    options: ["int", "string", "object", "class"],
    correctAnswer: "int",
    topic: "Data Types",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which keyword is used to define a constant?",
    options: ["const", "static", "readonly", "define"],
    correctAnswer: "const",
    topic: "Constants",
    level: "beginner",
  },
  {
    question: "Which method converts a string to an integer?",
    options: ["int.Parse()", "ConvertToInt()", "ToInt()", "parse()"],
    correctAnswer: "int.Parse()",
    topic: "Parsing",
    level: "beginner",
  },
  {
    question:
      "Which of these access modifiers allows access within the same class?",
    options: ["public", "private", "protected", "internal"],
    correctAnswer: "private",
    topic: "Access Modifiers",
    level: "beginner",
  },
  {
    question: "Which symbol is used to indicate a nullable type in C#?",
    options: ["!", "*", "?", "~"],
    correctAnswer: "?",
    topic: "Nullables",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a method that returns true if a number is divisible by 5.",
    codeEditor: true,
    correctAnswer: "bool IsDivisibleBy5(int n) {\n  return n % 5 == 0;\n}",
    topic: "Logic",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What is boxing in C#?",
    options: [
      "Converting object to value type",
      "Converting value type to object",
      "Casting to string",
      "Wrapping arrays",
    ],
    correctAnswer: "Converting value type to object",
    topic: "Memory",
    level: "intermediate",
  },
  {
    question:
      "Which collection maintains insertion order and allows duplicates?",
    options: ["List", "Dictionary", "HashSet", "Stack"],
    correctAnswer: "List",
    topic: "Collections",
    level: "intermediate",
  },
  {
    question: "Which method is used to sort a list in C#?",
    options: ["list.sort()", "Sort(list)", "list.Sort()", "SortList()"],
    correctAnswer: "list.Sort()",
    topic: "Collections",
    level: "intermediate",
  },
  {
    question: "Which operator is used for null coalescing?",
    options: ["??", "&&", "??=", "?:"],
    correctAnswer: "??",
    topic: "Operators",
    level: "intermediate",
  },
  {
    question: "What does the 'readonly' keyword do?",
    options: [
      "Makes variable constant",
      "Allows value to be changed only in constructor",
      "Allows reassignment anytime",
      "Declares it globally",
    ],
    correctAnswer: "Allows value to be changed only in constructor",
    topic: "Modifiers",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a method to count how many times 'a' appears in a string.",
    codeEditor: true,
    correctAnswer:
      "int CountA(string s) {\n  int count = 0;\n  foreach (char c in s) {\n    if (c == 'a') count++;\n  }\n  return count;\n}",
    topic: "Strings",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is the main advantage of using interfaces?",
    options: [
      "To store data",
      "To provide default method implementation",
      "To define contracts for classes",
      "To increase performance",
    ],
    correctAnswer: "To define contracts for classes",
    topic: "Interfaces",
    level: "advanced",
  },
  {
    question: "What is a delegate in C#?",
    options: [
      "A pointer to a class",
      "A pointer to a method",
      "A static variable",
      "An event handler",
    ],
    correctAnswer: "A pointer to a method",
    topic: "Delegates",
    level: "advanced",
  },
  {
    question:
      "Which C# keyword ensures code is executed regardless of exceptions?",
    options: ["try", "catch", "finally", "throw"],
    correctAnswer: "finally",
    topic: "Exception Handling",
    level: "advanced",
  },
  {
    question: "What is the purpose of the `params` keyword?",
    options: [
      "To return multiple values",
      "To accept a variable number of arguments",
      "To define optional parameters",
      "To call base class method",
    ],
    correctAnswer: "To accept a variable number of arguments",
    topic: "Methods",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question: "Write a method that reverses a string in C#.",
    codeEditor: true,
    correctAnswer:
      "string ReverseString(string str) {\n  return new string(str.Reverse().ToArray());\n}",
    topic: "Strings",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which of the following supports lazy initialization?",
    options: ["Lazy<T>", "Static", "var", "readonly"],
    correctAnswer: "Lazy<T>",
    topic: "Advanced Features",
    level: "prodigy",
  },
  {
    question: "What is the output type of a LINQ `Select()` query?",
    options: ["IEnumerable", "List", "Array", "Dictionary"],
    correctAnswer: "IEnumerable",
    topic: "LINQ",
    level: "prodigy",
  },
  {
    question: "Which keyword ensures thread safety in concurrent C# code?",
    options: ["lock", "safe", "try", "protect"],
    correctAnswer: "lock",
    topic: "Concurrency",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question: "Write a method using a delegate to add two numbers.",
    codeEditor: true,
    correctAnswer:
      "delegate int Add(int x, int y);\n\nint AddNumbers(int a, int b) {\n  Add adder = (x, y) => x + y;\n  return adder(a, b);\n}",
    topic: "Delegates",
    level: "prodigy",
  },
];
