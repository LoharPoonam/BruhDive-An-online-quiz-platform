export const csharpQuestionsFour = [
  // 🛧 Noob Mode
  {
    question: "Which keyword is used to create a constant in C#?",
    options: ["const", "static", "readonly", "define"],
    correctAnswer: "const",
    topic: "Constants",
    level: "newbie",
  },

  {
    question: "Which keyword is used to prevent a class from being inherited?",
    options: ["final", "sealed", "static", "private"],
    correctAnswer: "sealed",
    topic: "OOP",
    level: "beginner",
  },
  {
    question: "Which of the following is the correct way to print to console?",
    options: [
      'Console.log("Hello")',
      'print("Hello")',
      'System.out("Hello")',
      'Console.WriteLine("Hello")',
    ],
    correctAnswer: 'Console.WriteLine("Hello")',
    topic: "Input/Output",
    level: "newbie",
  },
  {
    question: "Which operator is used for equality comparison in C#?",
    options: ["==", "=", "===", "equals"],
    correctAnswer: "==",
    topic: "Operators",
    level: "newbie",
  },
  {
    question: "Which keyword is used to create a class in C#?",
    options: ["struct", "object", "class", "interface"],
    correctAnswer: "class",
    topic: "OOP",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: 'What does `int.Parse("123")` return?',
    options: ["123", '"123"', "Error", "Null"],
    correctAnswer: "123",
    topic: "Type Conversion",
    level: "beginner",
  },
  {
    question:
      "Which access modifier allows members to be accessed from anywhere?",
    options: ["private", "public", "internal", "protected"],
    correctAnswer: "public",
    topic: "Access Modifiers",
    level: "beginner",
  },
  {
    question: "Which loop will always run at least once?",
    options: ["for", "while", "do-while", "foreach"],
    correctAnswer: "do-while",
    topic: "Loops",
    level: "beginner",
  },
  {
    question: "Which of these is a value type?",
    options: ["string", "int", "object", "List"],
    correctAnswer: "int",
    topic: "Data Types",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a method to check if a number is even.",
    codeEditor: true,
    correctAnswer: "bool IsEven(int n) {\n  return n % 2 == 0;\n}",
    topic: "Conditions",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which collection stores key-value pairs?",
    options: ["List", "Array", "Dictionary", "Queue"],
    correctAnswer: "Dictionary",
    topic: "Collections",
    level: "intermediate",
  },
  {
    question: "Which keyword is used to inherit from a base class?",
    options: ["implements", "inherits", "extends", ":"],
    correctAnswer: ":",
    topic: "OOP",
    level: "intermediate",
  },
  {
    question: "Which operator is used for null-coalescing?",
    options: ["??", "?:", "==", "!"],
    correctAnswer: "??",
    topic: "Operators",
    level: "intermediate",
  },
  {
    question: "What is boxing in C#?",
    options: [
      "Converting object to value type",
      "Converting string to integer",
      "Converting value type to object",
      "Converting class to interface",
    ],
    correctAnswer: "Converting value type to object",
    topic: "Type Conversion",
    level: "intermediate",
  },
  {
    question: "Which method is used to convert an int to string?",
    options: ["ToInt()", "ToString()", "Convert()", "Cast()"],
    correctAnswer: "ToString()",
    topic: "Type Conversion",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a method that returns true if a string contains 'hello'.",
    codeEditor: true,
    correctAnswer:
      'bool ContainsHello(string s) {\n  return s.Contains("hello");\n}',
    topic: "Strings",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "Which interface must be implemented to allow sorting?",
    options: ["ICloneable", "ISortable", "IComparable", "IEnumerable"],
    correctAnswer: "IComparable",
    topic: "Interfaces",
    level: "advanced",
  },
  {
    question: "Which C# keyword is used for exception handling?",
    options: ["try", "catch", "throw", "All of the above"],
    correctAnswer: "All of the above",
    topic: "Exception Handling",
    level: "advanced",
  },
  {
    question: "Which type of class cannot be instantiated?",
    options: ["static", "sealed", "abstract", "partial"],
    correctAnswer: "abstract",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which class is used for file read/write operations?",
    options: ["Console", "File", "Directory", "Reader"],
    correctAnswer: "File",
    topic: "File Handling",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question: "Write a method that throws an exception if number < 0.",
    codeEditor: true,
    correctAnswer:
      'void CheckPositive(int n) {\n  if (n < 0) throw new Exception("Negative");\n}',
    topic: "Exception Handling",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which keyword is used to create an anonymous method?",
    options: ["lambda", "delegate", "anonymous", "func"],
    correctAnswer: "delegate",
    topic: "Delegates",
    level: "prodigy",
  },
  {
    question: "Which method executes asynchronously and returns a result?",
    options: ["void", "Func", "Task", "Thread"],
    correctAnswer: "Task",
    topic: "Async",
    level: "prodigy",
  },
  {
    question: "Which of these allows querying collections in C#?",
    options: ["LISP", "LINQ", "SQL", "SELECT"],
    correctAnswer: "LINQ",
    topic: "LINQ",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question: "Write a LINQ expression to get even numbers from a list.",
    codeEditor: true,
    correctAnswer: "var evens = nums.Where(n => n % 2 == 0).ToList();",
    topic: "LINQ",
    level: "prodigy",
  },
];
