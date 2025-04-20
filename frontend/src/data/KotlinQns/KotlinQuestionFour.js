export const kotlinQuestionsFour = [
  // 🛧 Noob Mode
  {
    question: "Which data type is used to store a true/false value in Kotlin?",
    options: ["String", "Int", "Boolean", "Char"],
    correctAnswer: "Boolean",
    topic: "Data Types",
    level: "newbie",
  },
  {
    question: "Which symbol is used to start a single-line comment in Kotlin?",
    options: ["#", "//", "--", "/*"],
    correctAnswer: "//",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "Which function is used to output text to the console?",
    options: ["echo()", "System.out.print()", "println()", "write()"],
    correctAnswer: "println()",
    topic: "Input/Output",
    level: "newbie",
  },
  {
    question: "Which keyword declares a mutable variable in Kotlin?",
    options: ["val", "final", "const", "var"],
    correctAnswer: "var",
    topic: "Variables",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "What does the Elvis operator `?:` do?",
    options: [
      "Ends a line",
      "Checks equality",
      "Provides default for null",
      "Reverses a string",
    ],
    correctAnswer: "Provides default for null",
    topic: "Null Safety",
    level: "beginner",
  },
  {
    question: "Which loop is used to repeat code a specific number of times?",
    options: ["while", "repeat", "foreach", "if"],
    correctAnswer: "repeat",
    topic: "Loops",
    level: "beginner",
  },
  {
    question: "What is the correct way to define a list in Kotlin?",
    options: [
      "val list = listOf(1, 2, 3)",
      "val list = [1, 2, 3]",
      "val list = new List()",
      "list = (1,2,3)",
    ],
    correctAnswer: "val list = listOf(1, 2, 3)",
    topic: "Collections",
    level: "beginner",
  },
  {
    question: "Which keyword is used to return a value from a function?",
    options: ["return", "break", "continue", "yield"],
    correctAnswer: "return",
    topic: "Functions",
    level: "beginner",
  },

  // 💻 Code Editor (Beginner)
  {
    question: "Write a Kotlin function to check if a number is odd.",
    codeEditor: true,
    correctAnswer: "fun isOdd(n: Int): Boolean {\n  return n % 2 != 0\n}",
    topic: "Logic",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What is the purpose of the `init` block in a class?",
    options: [
      "Override methods",
      "Static initialization",
      "Primary constructor logic",
      "Error handling",
    ],
    correctAnswer: "Primary constructor logic",
    topic: "Classes",
    level: "intermediate",
  },
  {
    question: "Which function adds an item to a mutable list?",
    options: ["append()", "add()", "push()", "insert()"],
    correctAnswer: "add()",
    topic: "Collections",
    level: "intermediate",
  },
  {
    question: "How do you declare a map in Kotlin?",
    options: [
      "val m = mapOf(1 => 'a')",
      "val m = Map(1, 'a')",
      "val m = mapOf(1 to 'a')",
      "val m = [1: 'a']",
    ],
    correctAnswer: "val m = mapOf(1 to 'a')",
    topic: "Collections",
    level: "intermediate",
  },
  {
    question: "Which interface is used to iterate collections in Kotlin?",
    options: ["Iterable", "Sequence", "Loopable", "Iterator"],
    correctAnswer: "Iterator",
    topic: "Interfaces",
    level: "intermediate",
  },

  // 💻 Code Editor (Intermediate)
  {
    question:
      "Write a function to count how many times a character appears in a string.",
    codeEditor: true,
    correctAnswer:
      "fun countChar(str: String, ch: Char): Int {\n  return str.count { it == ch }\n}",
    topic: "Strings",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is the output type of `map()` on a list?",
    options: ["List", "Array", "Set", "String"],
    correctAnswer: "List",
    topic: "Collections",
    level: "advanced",
  },
  {
    question: "Which class is used to format dates in Kotlin?",
    options: ["DateTime", "DateFormat", "SimpleDateFormat", "LocalDateTime"],
    correctAnswer: "LocalDateTime",
    topic: "Date/Time",
    level: "advanced",
  },
  {
    question: "What is a data class in Kotlin?",
    options: [
      "Class with database access",
      "Class with only static members",
      "Class for storing data with auto-generated methods",
      "None of the above",
    ],
    correctAnswer: "Class for storing data with auto-generated methods",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "What is the result of `null?.length` in Kotlin?",
    options: ["0", "null", "error", "undefined"],
    correctAnswer: "null",
    topic: "Null Safety",
    level: "advanced",
  },

  // 💻 Code Editor (Advanced)
  {
    question:
      "Write a function that returns the factorial of a number using recursion.",
    codeEditor: true,
    correctAnswer:
      "fun factorial(n: Int): Int {\n  return if (n <= 1) 1 else n * factorial(n - 1)\n}",
    topic: "Recursion",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question:
      "Which collection type maintains insertion order and no duplicates?",
    options: ["Set", "LinkedHashSet", "HashMap", "List"],
    correctAnswer: "LinkedHashSet",
    topic: "Collections",
    level: "prodigy",
  },
  {
    question: "Which Kotlin function is used to sort a list by custom logic?",
    options: ["sortBy()", "sort()", "customSort()", "arrangeBy()"],
    correctAnswer: "sortBy()",
    topic: "Collections",
    level: "prodigy",
  },
  {
    question: "What is the purpose of inline functions in Kotlin?",
    options: [
      "Faster file reading",
      "Memory reuse",
      "Avoid function call overhead",
      "Better readability",
    ],
    correctAnswer: "Avoid function call overhead",
    topic: "Performance",
    level: "prodigy",
  },

  // 💻 Code Editor (Prodigy)
  {
    question:
      "Write an inline function that compares two numbers and returns the greater.",
    codeEditor: true,
    correctAnswer:
      "inline fun greater(a: Int, b: Int): Int {\n  return if (a > b) a else b\n}",
    topic: "Inline Functions",
    level: "prodigy",
  },
  // 💻 Code Editor (Intermediate)
  {
    question: "Write a function to find the sum of all even numbers in a list.",
    codeEditor: true,
    correctAnswer: `fun sumOfEvens(numbers: List<Int>): Int {
      return numbers.filter { it % 2 == 0 }.sum()
  }`,
    topic: "Collections",
    level: "intermediate",
  },
];
