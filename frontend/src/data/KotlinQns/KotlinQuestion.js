export const kotlinQuestions = [
  // 🛧 Noob Mode
  {
    question:
      "Which keyword is used to declare a variable that can't be reassigned?",
    options: ["val", "var", "const", "let"],
    correctAnswer: "val",
    topic: "Variables",
    level: "newbie",
  },
  {
    question: "What function is used to print output in Kotlin?",
    options: ["print()", "echo()", "console.log()", "println()"],
    correctAnswer: "println()",
    topic: "Input/Output",
    level: "newbie",
  },
  {
    question: "Write a function to check if a number is prime.",
    codeEditor: true,
    correctAnswer: `fun isPrime(n: Int): Boolean {
    if (n <= 1) return false
    for (i in 2 until n) {
        if (n % i == 0) return false
    }
    return true
}`,
    topic: "Math",
    level: "intermediate", // or "advanced" depending on your difficulty scale
  },
  {
    question: "Which data type is used to represent whole numbers?",
    options: ["Double", "String", "Int", "Boolean"],
    correctAnswer: "Int",
    topic: "Data Types",
    level: "newbie",
  },
  {
    question: "Which keyword is used to define a function?",
    options: ["function", "def", "fun", "method"],
    correctAnswer: "fun",
    topic: "Functions",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "What is the correct way to create a list in Kotlin?",
    options: ["list(1,2,3)", "List[1,2,3]", "listOf(1, 2, 3)", "array(1,2,3)"],
    correctAnswer: "listOf(1, 2, 3)",
    topic: "Collections",
    level: "beginner",
  },
  {
    question: "Which operator checks equality?",
    options: ["==", "=", "===", "!="],
    correctAnswer: "==",
    topic: "Operators",
    level: "beginner",
  },
  {
    question: "Which statement is used for multi-way branching?",
    options: ["if", "switch", "when", "case"],
    correctAnswer: "when",
    topic: "Conditionals",
    level: "beginner",
  },
  {
    question: "Which of these is a valid loop in Kotlin?",
    options: ["for...in", "foreach", "loop", "repeat"],
    correctAnswer: "for...in",
    topic: "Loops",
    level: "beginner",
  },

  // 💻 Code Editor (Beginner)
  {
    question: "Write a function to return the square of a number.",
    codeEditor: true,
    correctAnswer: "fun square(n: Int): Int {\n  return n * n\n}",
    topic: "Functions",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "How do you create a nullable variable of type String?",
    options: [
      "String name?",
      "var name = null",
      "String? name",
      "String name = ?",
    ],
    correctAnswer: "String? name",
    topic: "Null Safety",
    level: "intermediate",
  },
  {
    question: "Which keyword allows a class to be inherited?",
    options: ["open", "public", "extendable", "abstract"],
    correctAnswer: "open",
    topic: "OOP",
    level: "intermediate",
  },
  {
    question: "How do you create an object from a class?",
    options: [
      "val obj = Class()",
      "Class obj = new Class()",
      "object Class",
      "new Class()",
    ],
    correctAnswer: "val obj = Class()",
    topic: "Objects",
    level: "intermediate",
  },
  {
    question: "Which function is used to iterate over a list?",
    options: ["loop()", "iterate()", "forEach()", "runEach()"],
    correctAnswer: "forEach()",
    topic: "Collections",
    level: "intermediate",
  },

  // 💻 Code Editor (Intermediate)
  {
    question: "Write a function that returns the largest number from a list.",
    codeEditor: true,
    correctAnswer:
      "fun maxOfList(nums: List<Int>): Int {\n  return nums.maxOrNull() ?: 0\n}",
    topic: "Collections",
    level: "intermediate",
  },

  {
    question: "What does the Elvis operator `?:` do in Kotlin?",
    options: [
      "Concatenates strings",
      "Provides default if null",
      "Checks reference equality",
      "Performs type casting",
    ],
    correctAnswer: "Provides default if null",
    topic: "Null Safety",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is the output type of `map()` in Kotlin?",
    options: ["List", "Set", "Sequence", "Array"],
    correctAnswer: "List",
    topic: "Collections",
    level: "advanced",
  },
  {
    question: "Which keyword is used for implementing an interface?",
    options: ["use", "with", "implements", "override"],
    correctAnswer: "override",
    topic: "Interfaces",
    level: "advanced",
  },
  {
    question: "What is a `data class` used for?",
    options: [
      "UI layout",
      "Web services",
      "Holding data with auto-generated functions",
      "Creating databases",
    ],
    correctAnswer: "Holding data with auto-generated functions",
    topic: "Classes",
    level: "advanced",
  },
  {
    question: "Which method converts a list to a mutable list?",
    options: ["toList()", "makeMutable()", "toMutableList()", "mutable()"],
    correctAnswer: "toMutableList()",
    topic: "Collections",
    level: "advanced",
  },

  // 💻 Code Editor (Advanced)
  {
    question: "Write a function to reverse a string.",
    codeEditor: true,
    correctAnswer:
      "fun reverse(str: String): String {\n  return str.reversed()\n}",
    topic: "Strings",
    level: "advanced",
  },

  {
    question: "What is `sealed class` in Kotlin?",
    options: [
      "A class with one instance",
      "A class used to restrict subclassing",
      "A class for async",
      "None of the above",
    ],
    correctAnswer: "A class used to restrict subclassing",
    topic: "OOP",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which coroutine builder launches a new coroutine?",
    options: ["start()", "async", "launch", "runBlocking"],
    correctAnswer: "launch",
    topic: "Coroutines",
    level: "prodigy",
  },
  {
    question: "What does `suspend` keyword do in Kotlin?",
    options: [
      "Pauses the app",
      "Marks a function as asynchronous",
      "Declares a lambda",
      "Indicates error",
    ],
    correctAnswer: "Marks a function as asynchronous",
    topic: "Coroutines",
    level: "prodigy",
  },
  {
    question: "What is the purpose of `by lazy {}`?",
    options: [
      "Execute only once when accessed",
      "Start thread",
      "Trigger exception",
      "Auto-import classes",
    ],
    correctAnswer: "Execute only once when accessed",
    topic: "Delegation",
    level: "prodigy",
  },

  // 💻 Code Editor (Prodigy)
  {
    question: "Write a suspend function to return a string after 1 second.",
    codeEditor: true,
    correctAnswer:
      'suspend fun delayedHello(): String {\n  delay(1000)\n  return "Hello"\n}',
    topic: "Coroutines",
    level: "prodigy",
  },
];
