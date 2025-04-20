export const kotlinQuestionsThree = [
  // 🛧 Noob Mode
  {
    question:
      "Which keyword is used to define an immutable variable in Kotlin?",
    options: ["const", "final", "val", "var"],
    correctAnswer: "val",
    topic: "Variables",
    level: "newbie",
  },
  {
    question: "What is the output of: `println(3 + 2 * 2)`?",
    options: ["10", "7", "8", "9"],
    correctAnswer: "7",
    topic: "Operators",
    level: "newbie",
  },
  {
    question: "Which keyword is used to define a function in Kotlin?",
    options: ["function", "fun", "def", "func"],
    correctAnswer: "fun",
    topic: "Functions",
    level: "newbie",
  },
  {
    question: "How do you declare a nullable string in Kotlin?",
    options: [
      "String str?",
      "var str: String?",
      "nullable String str",
      "String? str",
    ],
    correctAnswer: "var str: String?",
    topic: "Null Safety",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which loop checks the condition at the end?",
    options: ["for", "while", "do-while", "repeat"],
    correctAnswer: "do-while",
    topic: "Loops",
    level: "beginner",
  },
  {
    question: "What is the correct syntax to declare an array in Kotlin?",
    options: [
      "val arr = Array()",
      "val arr = arrayOf(1, 2, 3)",
      "array arr()",
      "val arr: []",
    ],
    correctAnswer: "val arr = arrayOf(1, 2, 3)",
    topic: "Arrays",
    level: "beginner",
  },
  {
    question: "Which function returns the last item in a list?",
    options: ["lastItem()", "last()", "end()", "tail()"],
    correctAnswer: "last()",
    topic: "Collections",
    level: "beginner",
  },
  {
    question: "How do you write a multi-line comment in Kotlin?",
    options: ["// comment", "# comment", "/* comment */", "-- comment --"],
    correctAnswer: "/* comment */",
    topic: "Syntax",
    level: "beginner",
  },

  // 💻 Code Editor (Beginner)
  {
    question: "Write a Kotlin function to return the max of two numbers.",
    codeEditor: true,
    correctAnswer:
      "fun max(a: Int, b: Int): Int {\n  return if (a > b) a else b\n}",
    topic: "Logic",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What does `filter()` do in Kotlin collections?",
    options: [
      "Sorts the list",
      "Removes nulls",
      "Returns items that match condition",
      "Reverses items",
    ],
    correctAnswer: "Returns items that match condition",
    topic: "Collections",
    level: "intermediate",
  },
  {
    question: "How do you define an interface in Kotlin?",
    options: ["interface", "implements", "protocol", "trait"],
    correctAnswer: "interface",
    topic: "OOP",
    level: "intermediate",
  },
  {
    question: "Which keyword prevents a class from being subclassed?",
    options: ["open", "private", "final", "sealed"],
    correctAnswer: "final",
    topic: "Classes",
    level: "intermediate",
  },
  {
    question: "Which function returns a sublist?",
    options: ["take()", "slice()", "split()", "cut()"],
    correctAnswer: "slice()",
    topic: "Collections",
    level: "intermediate",
  },

  // 💻 Code Editor (Intermediate)
  {
    question: "Write a function to reverse a string.",
    codeEditor: true,
    correctAnswer:
      "fun reverse(str: String): String {\n  return str.reversed()\n}",
    topic: "Strings",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is a sealed class used for?",
    options: [
      "Limit inheritance to the same file",
      "Declare final methods",
      "Handle exceptions",
      "Define enums",
    ],
    correctAnswer: "Limit inheritance to the same file",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "What is the default visibility modifier in Kotlin?",
    options: ["public", "private", "internal", "protected"],
    correctAnswer: "public",
    topic: "Access Modifiers",
    level: "advanced",
  },
  {
    question: "Which method is used to handle nulls with default values?",
    options: ["!!", "?:", "?=", "orElse"],
    correctAnswer: "?:",
    topic: "Null Safety",
    level: "advanced",
  },
  {
    question: "What does `by lazy {}` mean in Kotlin?",
    options: [
      "Immediate init",
      "Delayed init until use",
      "Companion object",
      "Delegate method",
    ],
    correctAnswer: "Delayed init until use",
    topic: "Delegation",
    level: "advanced",
  },

  // 💻 Code Editor (Advanced)
  {
    question: "Write a function to count vowels in a string.",
    codeEditor: true,
    correctAnswer:
      'fun countVowels(str: String): Int {\n  return str.count { it.lowercaseChar() in "aeiou" }\n}',
    topic: "Strings",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which Kotlin scope function returns the context object?",
    options: ["apply", "let", "run", "also"],
    correctAnswer: "apply",
    topic: "Scope Functions",
    level: "prodigy",
  },
  {
    question: "Which function creates a coroutine in Kotlin?",
    options: ["async{}", "launch{}", "startCoroutine{}", "go{}"],
    correctAnswer: "launch{}",
    topic: "Coroutines",
    level: "prodigy",
  },
  {
    question: "What is a suspend function?",
    options: [
      "Function that throws error",
      "Function that returns null",
      "Function that pauses execution",
      "Function that suspends class",
    ],
    correctAnswer: "Function that pauses execution",
    topic: "Coroutines",
    level: "prodigy",
  },

  // 💻 Code Editor (Prodigy)
  {
    question:
      'Write a suspend function that delays 1 second and returns "Hello".',
    codeEditor: true,
    correctAnswer:
      'suspend fun greet(): String {\n  delay(1000)\n  return "Hello"\n}',
    topic: "Coroutines",
    level: "prodigy",
  },
];
