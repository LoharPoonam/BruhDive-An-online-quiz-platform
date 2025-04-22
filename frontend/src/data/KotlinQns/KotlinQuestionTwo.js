export const kotlinQuestionsTwo = [
  // 🛧 Noob Mode
  {
    question: "What is the correct file extension for a Kotlin source file?",
    options: [".kt", ".kotlin", ".java", ".kts"],
    correctAnswer: ".kt",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "Which keyword declares a mutable variable in Kotlin?",
    options: ["val", "let", "var", "mutable"],
    correctAnswer: "var",
    topic: "Variables",
    level: "newbie",
  },
  {
    question: "How do you write a single-line comment in Kotlin?",
    options: ["<!-- -->", "// comment", "/* comment */", "# comment"],
    correctAnswer: "// comment",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "Which of the following is a valid Boolean value in Kotlin?",
    options: ["true", "yes", "on", "enabled"],
    correctAnswer: "true",
    topic: "Data Types",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "What does the `!!` operator do in Kotlin?",
    options: [
      "Makes a value nullable",
      "Converts string to int",
      "Forces a non-null value",
      "Handles exceptions",
    ],
    correctAnswer: "Forces a non-null value",
    topic: "Null Safety",
    level: "beginner",
  },
  {
    question: "Which function returns the length of a string?",
    options: ["length()", "len()", "count()", "size"],
    correctAnswer: "length",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "Which keyword is used to define a constant value?",
    options: ["val", "var", "const val", "final val"],
    correctAnswer: "const val",
    topic: "Constants",
    level: "beginner",
  },
  {
    question: "How do you convert a String to an Int?",
    options: ["toInt()", "parseInt()", "int()", "convertToInt()"],
    correctAnswer: "toInt()",
    topic: "Type Conversion",
    level: "beginner",
  },

  // 💻 Code Editor (Beginner)
  {
    question: "Write a Kotlin function that returns true if a number is odd.",
    codeEditor: true,
    correctAnswer: "fun isOdd(n: Int): Boolean {\n  return n % 2 != 0\n}",
    topic: "Logic",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which type of class prevents inheritance?",
    options: ["open", "sealed", "final", "abstract"],
    correctAnswer: "final",
    topic: "Classes",
    level: "intermediate",
  },
  {
    question: "What is the return type of a function that returns nothing?",
    options: ["null", "None", "Void", "Unit"],
    correctAnswer: "Unit",
    topic: "Functions",
    level: "intermediate",
  },
  {
    question: "How do you define a read-only list?",
    options: [
      "val list = listOf(1,2,3)",
      "mutableListOf(1,2,3)",
      "arrayListOf(1,2,3)",
      "setOf(1,2,3)",
    ],
    correctAnswer: "val list = listOf(1,2,3)",
    topic: "Collections",
    level: "intermediate",
  },
  {
    question: "Which loop is used when the number of iterations is known?",
    options: ["while", "repeat", "do-while", "for"],
    correctAnswer: "for",
    topic: "Loops",
    level: "intermediate",
  },

  // 💻 Code Editor (Intermediate)
  {
    question: "Write a function to check if a string contains the letter 'a'.",
    codeEditor: true,
    correctAnswer:
      "fun containsA(str: String): Boolean {\n  return 'a' in str\n}",
    topic: "Strings",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is the purpose of `companion object`?",
    options: [
      "Creates an interface",
      "Defines constants only",
      "Holds static-like members",
      "Creates private variables",
    ],
    correctAnswer: "Holds static-like members",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which function checks if all items match a condition?",
    options: ["filter", "map", "all", "find"],
    correctAnswer: "all",
    topic: "Collections",
    level: "advanced",
  },
  {
    question: "What does `lateinit` mean?",
    options: [
      "Delayed initialization of primitive",
      "Postpone a function call",
      "Non-null var initialized later",
      "Null safety shortcut",
    ],
    correctAnswer: "Non-null var initialized later",
    topic: "Null Safety",
    level: "advanced",
  },
  {
    question: "How do you handle exceptions in Kotlin?",
    options: ["try-catch", "throw-catch", "error block", "handle()"],
    correctAnswer: "try-catch",
    topic: "Exceptions",
    level: "advanced",
  },

  // 💻 Code Editor (Advanced)
  {
    question: "Write a function to find the factorial of a number recursively.",
    codeEditor: true,
    correctAnswer:
      "fun factorial(n: Int): Int {\n  return if (n <= 1) 1 else n * factorial(n - 1)\n}",
    topic: "Recursion",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which Kotlin feature supports functional programming?",
    options: ["Lambda expressions", "for loop", "Object class", "try block"],
    correctAnswer: "Lambda expressions",
    topic: "Functional Programming",
    level: "prodigy",
  },
  {
    question: "What is `flow` used for in Kotlin?",
    options: [
      "UI transitions",
      "Data classes",
      "Asynchronous stream of data",
      "Thread synchronization",
    ],
    correctAnswer: "Asynchronous stream of data",
    topic: "Coroutines",
    level: "prodigy",
  },
  {
    question: "Which class represents an optional value container?",
    options: ["Optional", "Maybe", "Result", "Either"],
    correctAnswer: "Result",
    topic: "Functional Programming",
    level: "prodigy",
  },

  // 💻 Code Editor (Prodigy)
  {
    question: "Write a function using `map` to double all values in a list.",
    codeEditor: true,
    correctAnswer:
      "fun doubleList(nums: List<Int>): List<Int> {\n  return nums.map { it * 2 }\n}",
    topic: "Functional Programming",
    level: "prodigy",
  },
];
