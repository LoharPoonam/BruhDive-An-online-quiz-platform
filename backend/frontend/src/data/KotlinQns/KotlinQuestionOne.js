export const kotlinQuestionsOne = [
  // 🛧 Noob Mode
  {
    question: "Which keyword is used to define a variable in Kotlin?",
    options: ["let", "define", "val", "int"],
    correctAnswer: "val",
    topic: "Variables",
    level: "newbie",
  },
  // 🧠 Advanced
  {
    question:
      "Which scope function executes a block of code and returns the result of the last expression?",
    options: ["run", "apply", "with", "let"],
    correctAnswer: "run",
    topic: "Scope Functions",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question:
      "Which Kotlin feature allows writing DSLs (Domain Specific Languages)?",
    options: [
      "Type Inference",
      "Extension Functions",
      "Lambda with Receiver",
      "Coroutine Builders",
    ],
    correctAnswer: "Lambda with Receiver",
    topic: "Advanced Kotlin",
    level: "prodigy",
  },

  {
    question: "What is the correct syntax to define a function in Kotlin?",
    options: [
      "def myFunc()",
      "function myFunc()",
      "fun myFunc()",
      "fn myFunc()",
    ],
    correctAnswer: "fun myFunc()",
    topic: "Functions",
    level: "newbie",
  },
  {
    question: "Which symbol is used to declare nullable types in Kotlin?",
    options: ["!", "?", "*", "&"],
    correctAnswer: "?",
    topic: "Null Safety",
    level: "newbie",
  },
  {
    question: "How do you print to the console in Kotlin?",
    options: ["print()", "console.log()", "System.out.println()", "println()"],
    correctAnswer: "println()",
    topic: "Input/Output",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which keyword is used for creating a mutable variable?",
    options: ["const", "var", "val", "let"],
    correctAnswer: "var",
    topic: "Variables",
    level: "beginner",
  },
  {
    question: "What is the default visibility modifier in Kotlin?",
    options: ["private", "protected", "internal", "public"],
    correctAnswer: "public",
    topic: "Access Modifiers",
    level: "beginner",
  },
  {
    question: "Which keyword is used to create a data class?",
    options: ["data", "class", "object", "record"],
    correctAnswer: "data",
    topic: "Classes",
    level: "beginner",
  },
  {
    question: "Which loop executes a fixed number of times in Kotlin?",
    options: ["while", "do-while", "for", "loop"],
    correctAnswer: "for",
    topic: "Loops",
    level: "beginner",
  },

  // 💻 Code Editor (Beginner)
  {
    question: "Write a Kotlin function to return the square of a number.",
    codeEditor: true,
    correctAnswer: "fun square(n: Int): Int {\n  return n * n\n}",
    topic: "Functions",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "How do you handle null safety using 'let' in Kotlin?",
    options: [
      "value?.let { ... }",
      "value.let { ... }",
      "if (value) { ... }",
      "value?let { ... }",
    ],
    correctAnswer: "value?.let { ... }",
    topic: "Null Safety",
    level: "intermediate",
  },
  {
    question: "What is the use of the 'when' expression?",
    options: [
      "Looping",
      "Error Handling",
      "Decision Making",
      "Exception Throwing",
    ],
    correctAnswer: "Decision Making",
    topic: "Control Flow",
    level: "intermediate",
  },
  {
    question: "What is an extension function?",
    options: [
      "A subclass function",
      "Function outside main",
      "Function added to an existing class",
      "A library function",
    ],
    correctAnswer: "Function added to an existing class",
    topic: "Functions",
    level: "intermediate",
  },
  {
    question: "Which collection in Kotlin is immutable?",
    options: ["mutableListOf()", "arrayListOf()", "listOf()", "hashMapOf()"],
    correctAnswer: "listOf()",
    topic: "Collections",
    level: "intermediate",
  },

  // 💻 Code Editor (Intermediate)
  {
    question: "Write a function to count vowels in a given string.",
    codeEditor: true,
    correctAnswer:
      'fun countVowels(str: String): Int {\n  val vowels = "aeiouAEIOU"\n  return str.count { it in vowels }\n}',
    topic: "Strings",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is the return type of a function with no return in Kotlin?",
    options: ["null", "Unit", "void", "Nothing"],
    correctAnswer: "Unit",
    topic: "Functions",
    level: "advanced",
  },
  {
    question: "Which interface represents a sequence of elements?",
    options: ["Iterable", "Sequence", "Stream", "Flow"],
    correctAnswer: "Sequence",
    topic: "Collections",
    level: "advanced",
  },
  {
    question: "Which function creates a coroutine in Kotlin?",
    options: ["runBlocking", "launch", "create", "start"],
    correctAnswer: "launch",
    topic: "Coroutines",
    level: "advanced",
  },
  {
    question: "Which keyword is used to create a singleton in Kotlin?",
    options: ["object", "singleton", "class", "static"],
    correctAnswer: "object",
    topic: "OOP",
    level: "advanced",
  },

  // 💻 Code Editor (Advanced)
  {
    question: "Write a suspend function to return a delayed message.",
    codeEditor: true,
    correctAnswer:
      'suspend fun getMessage(): String {\n  delay(1000)\n  return "Hello"\n}',
    topic: "Coroutines",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "What does the 'by lazy' keyword do in Kotlin?",
    options: [
      "Delays function call",
      "Performs recursion",
      "Implements lazy initialization",
      "Runs async task",
    ],
    correctAnswer: "Implements lazy initialization",
    topic: "Delegation",
    level: "prodigy",
  },
  {
    question: "What is the purpose of sealed classes?",
    options: [
      "Inherit multiple classes",
      "Define restricted class hierarchies",
      "Create static classes",
      "Optimize memory",
    ],
    correctAnswer: "Define restricted class hierarchies",
    topic: "OOP",
    level: "prodigy",
  },
  {
    question: "Which Kotlin feature replaces Java's functional interfaces?",
    options: ["Lambdas", "SAM Conversions", "Delegates", "Closures"],
    correctAnswer: "SAM Conversions",
    topic: "Functions",
    level: "prodigy",
  },

  // 💻 Code Editor (Prodigy)
  {
    question:
      "Write a sealed class representing Loading, Success, Error states.",
    codeEditor: true,
    correctAnswer:
      "sealed class Result {\n  object Loading : Result()\n  data class Success(val data: String) : Result()\n  data class Error(val error: String) : Result()\n}",
    topic: "OOP",
    level: "prodigy",
  },
];
