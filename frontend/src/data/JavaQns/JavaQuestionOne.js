export const javaQuestionsOne = [
  // 🔰 Newbie
  {
    question: "Which method is the entry point of any Java program?",
    options: ["start()", "main()", "run()", "execute()"],
    correctAnswer: "main()",
    topic: "Basics",
    level: "newbie",
  },
  {
    question: "What is the correct file extension for a Java file?",
    options: [".jav", ".java", ".js", ".class"],
    correctAnswer: ".java",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "How do you write a single-line comment in Java?",
    options: ["#", "//", "<!-- -->", "/* */"],
    correctAnswer: "//",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "Which keyword is used to create an object in Java?",
    options: ["object", "this", "new", "class"],
    correctAnswer: "new",
    topic: "OOP",
    level: "newbie",
  },
  {
    question: "Which of the following is a valid data type in Java?",
    options: ["number", "digit", "int", "num"],
    correctAnswer: "int",
    topic: "Data Types",
    level: "newbie",
  },

  // 🧑‍💻 Beginner
  {
    question: "Which loop will execute the block at least once?",
    options: ["for", "while", "do-while", "none"],
    correctAnswer: "do-while",
    topic: "Loops",
    level: "beginner",
  },
  {
    question: "How do you create a constant variable in Java?",
    options: ["final", "const", "static", "constant"],
    correctAnswer: "final",
    topic: "Modifiers",
    level: "beginner",
  },
  {
    question: "Which keyword is used to inherit interfaces?",
    options: ["extends", "inherits", "implements", "instanceof"],
    correctAnswer: "implements",
    topic: "Interfaces",
    level: "beginner",
  },
  {
    question: "Which class is used to read input from the user?",
    options: ["Scanner", "Input", "Reader", "System"],
    correctAnswer: "Scanner",
    topic: "Input/Output",
    level: "beginner",
  },
  {
    question: "What is the correct way to declare an array in Java?",
    options: [
      "int arr[] = new int[5];",
      "array arr[5];",
      "int arr = [5];",
      "int arr = new int[];",
    ],
    correctAnswer: "int arr[] = new int[5];",
    topic: "Arrays",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What is the result of `true && false`?",
    options: ["true", "false", "null", "Error"],
    correctAnswer: "false",
    topic: "Operators",
    level: "intermediate",
  },
  {
    question: "What does the `break` statement do in a loop?",
    options: [
      "Ends loop",
      "Skips iteration",
      "Repeats iteration",
      "Exits program",
    ],
    correctAnswer: "Ends loop",
    topic: "Control Flow",
    level: "intermediate",
  },
  {
    question: "Which method compares two strings by value?",
    options: ["==", "equals()", "compare()", "compareTo()"],
    correctAnswer: "equals()",
    topic: "Strings",
    level: "intermediate",
  },
  {
    question: "What does `return` do in a method?",
    options: ["Starts method", "Ends method", "Returns value", "Prints result"],
    correctAnswer: "Returns value",
    topic: "Functions",
    level: "intermediate",
  },
  {
    question: "Which loop is best for traversing an array?",
    options: ["while", "for", "do-while", "enhanced for"],
    correctAnswer: "enhanced for",
    topic: "Loops",
    level: "intermediate",
  },
  {
    question: "Which package is automatically imported in every Java program?",
    options: ["java.io", "java.util", "java.lang", "java.net"],
    correctAnswer: "java.lang",
    topic: "Packages",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "Which class is used for reading files in Java?",
    options: ["Scanner", "BufferedReader", "InputStream", "FileReader"],
    correctAnswer: "BufferedReader",
    topic: "File Handling",
    level: "advanced",
  },
  {
    question: "Which collection class allows key-value mapping?",
    options: ["ArrayList", "Set", "HashMap", "LinkedList"],
    correctAnswer: "HashMap",
    topic: "Collections",
    level: "advanced",
  },
  {
    question: "Which keyword is used for exception handling?",
    options: ["try", "catch", "throw", "All of the above"],
    correctAnswer: "All of the above",
    topic: "Error Handling",
    level: "advanced",
  },
  {
    question: "Which type of class cannot be instantiated?",
    options: ["final", "abstract", "private", "static"],
    correctAnswer: "abstract",
    topic: "OOP",
    level: "advanced",
  },

  // 💻 Code Editor Qs
  {
    question: "Write a Java method that returns the maximum of two numbers.",
    codeEditor: true,
    correctAnswer: "int max(int a, int b) {\n  return a > b ? a : b;\n}",
    topic: "Functions",
    level: "advanced",
  },
  {
    question: "Write a method that reverses a string.",
    codeEditor: true,
    correctAnswer:
      "String reverse(String str) {\n  return new StringBuilder(str).reverse().toString();\n}",
    topic: "Strings",
    level: "master",
  },

  // 🧠🧠 Prodigy
  {
    question:
      'What does the following code print?\n```java\nSystem.out.println(10 + 20 + "30");\n```',
    options: ["102030", "30", "3030", "3030"],
    correctAnswer: "3030",
    topic: "Type Conversion",
    level: "prodigy",
  },
  {
    question: "Which exception is thrown when dividing by 0?",
    options: [
      "NullPointerException",
      "ArithmeticException",
      "IndexOutOfBoundsException",
      "IOException",
    ],
    correctAnswer: "ArithmeticException",
    topic: "Exceptions",
    level: "prodigy",
  },
  {
    question:
      "What is the output of:\n```java\nSystem.out.println(\"A\" + 'B' + 1);\n```",
    options: ["AB1", "A66", "A1", "Error"],
    correctAnswer: "AB1",
    topic: "Operators",
    level: "prodigy",
  },
];
