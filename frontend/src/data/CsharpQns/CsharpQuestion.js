export const csharpQuestions = [
  // 🛧 Noob Mode
  {
    question: "Which keyword is used to define a method in C#?",
    options: ["function", "void", "method", "def"],
    correctAnswer: "void",
    topic: "Methods",
    level: "newbie",
  },
  {
    question: "What is the correct way to declare an integer variable in C#?",
    options: ["int x = 5;", "x int = 5;", "int = 5 x;", "declare int x = 5;"],
    correctAnswer: "int x = 5;",
    topic: "Variables",
    level: "newbie",
  },
  {
    question: "Which attribute marks a method as obsolete?",
    options: ["[Deprecated]", "[Obsolete]", "[Old]", "[Remove]"],
    correctAnswer: "[Obsolete]",
    topic: "Attributes",
    level: "prodigy",
  },
  {
    question: "Which function is used to print output to the console?",
    options: ["print()", "System.out.print()", "Console.WriteLine()", "echo()"],
    correctAnswer: "Console.WriteLine()",
    topic: "Input/Output",
    level: "newbie",
  },
  {
    question: "Which of the following is the entry point of a C# application?",
    options: ["Main()", "Start()", "Init()", "Run()"],
    correctAnswer: "Main()",
    topic: "Execution",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which keyword is used to create a class in C#?",
    options: ["struct", "class", "type", "define"],
    correctAnswer: "class",
    topic: "OOP",
    level: "beginner",
  },
  {
    question: "Which loop will execute at least once?",
    options: ["for", "while", "do-while", "foreach"],
    correctAnswer: "do-while",
    topic: "Loops",
    level: "beginner",
  },
  {
    question: "How do you create an array of integers in C#?",
    options: [
      "int arr();",
      "int[] arr = new int[5];",
      "array int arr;",
      "int arr = []",
    ],
    correctAnswer: "int[] arr = new int[5];",
    topic: "Arrays",
    level: "beginner",
  },
  {
    question: "Which operator is used to compare equality in C#?",
    options: ["=", "==", "!=", "==="],
    correctAnswer: "==",
    topic: "Operators",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question: "Write a C# method that returns the square of a number.",
    codeEditor: true,
    correctAnswer: "int Square(int n) {\n  return n * n;\n}",
    topic: "Methods",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which keyword is used to inherit a class in C#?",
    options: [":", "extends", "inherits", "base"],
    correctAnswer: ":",
    topic: "Inheritance",
    level: "intermediate",
  },
  {
    question: "What is the default access modifier for class members?",
    options: ["private", "public", "protected", "internal"],
    correctAnswer: "private",
    topic: "Access Modifiers",
    level: "intermediate",
  },
  {
    question: "Which collection allows key-value pair storage?",
    options: ["List", "Dictionary", "Array", "Queue"],
    correctAnswer: "Dictionary",
    topic: "Collections",
    level: "intermediate",
  },
  {
    question: "What is the correct way to handle exceptions in C#?",
    options: ["try-catch", "try-except", "if-error", "exception block"],
    correctAnswer: "try-catch",
    topic: "Exception Handling",
    level: "intermediate",
  },
  {
    question: "Which interface is implemented for iteration?",
    options: ["IEnumerator", "IEnumerable", "IIterable", "IWalker"],
    correctAnswer: "IEnumerable",
    topic: "Interfaces",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question: "Write a method to check if a number is even in C#.",
    codeEditor: true,
    correctAnswer: "bool IsEven(int n) {\n  return n % 2 == 0;\n}",
    topic: "Logic",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "Which keyword defines a method that can be overridden?",
    options: ["override", "virtual", "abstract", "sealed"],
    correctAnswer: "virtual",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "What does async/await help with in C#?",
    options: [
      "Memory management",
      "UI design",
      "Asynchronous programming",
      "Debugging",
    ],
    correctAnswer: "Asynchronous programming",
    topic: "Async",
    level: "advanced",
  },
  {
    question: "Which LINQ method filters a collection?",
    options: ["Select", "Where", "OrderBy", "GroupBy"],
    correctAnswer: "Where",
    topic: "LINQ",
    level: "advanced",
  },
  {
    question: "What does the `using` statement ensure?",
    options: [
      "Imports libraries",
      "Executes setup code",
      "Disposes objects",
      "Increases scope",
    ],
    correctAnswer: "Disposes objects",
    topic: "Memory Management",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question: "Write a method using LINQ to return even numbers from a list.",
    codeEditor: true,
    correctAnswer:
      "List<int> GetEvens(List<int> nums) {\n  return nums.Where(n => n % 2 == 0).ToList();\n}",
    topic: "LINQ",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which design pattern ensures a class has only one instance?",
    options: ["Factory", "Observer", "Singleton", "Builder"],
    correctAnswer: "Singleton",
    topic: "Design Patterns",
    level: "prodigy",
  },
  {
    question: "What is the purpose of dependency injection?",
    options: [
      "Improves performance",
      "Increases memory",
      "Provides objects from outside the class",
      "Compiles code faster",
    ],
    correctAnswer: "Provides objects from outside the class",
    topic: "Architecture",
    level: "prodigy",
  },
  {
    question: "Which of these is a delegate in C#?",
    options: ["Func", "Lambda", "Action", "Both Func and Action"],
    correctAnswer: "Both Func and Action",
    topic: "Delegates",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question:
      "Write a C# method using async/await to return a string after 2 seconds.",
    codeEditor: true,
    correctAnswer:
      'async Task<string> DelayedMessage() {\n  await Task.Delay(2000);\n  return "Done";\n}',
    topic: "Async",
    level: "prodigy",
  },
];
