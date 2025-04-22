export const javaQuestionsTwo = [
  // 🔰 Newbie
  {
    question: "Which keyword is used to stop a loop in Java?",
    options: ["continue", "stop", "exit", "break"],
    correctAnswer: "break",
    topic: "Loops",
    level: "newbie",
  },
  {
    question: "Which data type is used for decimal values?",
    options: ["float", "int", "char", "long"],
    correctAnswer: "float",
    topic: "Data Types",
    level: "newbie",
  },
  {
    question: "What does `char` store in Java?",
    options: ["Decimal", "Character", "Boolean", "Integer"],
    correctAnswer: "Character",
    topic: "Data Types",
    level: "newbie",
  },
  {
    question: "What is the output type of `System.out.println()`?",
    options: ["Error", "Returns void", "Writes to console", "Returns string"],
    correctAnswer: "Writes to console",
    topic: "Output",
    level: "newbie",
  },
  {
    question: "Which keyword defines inheritance in Java?",
    options: ["inherit", "extends", "include", "superclass"],
    correctAnswer: "extends",
    topic: "OOP",
    level: "newbie",
  },

  // 🧑‍💻 Beginner
  {
    question: "What does `null` represent in Java?",
    options: ["Zero", "No value", "Empty string", "Boolean false"],
    correctAnswer: "No value",
    topic: "Memory",
    level: "beginner",
  },
  {
    question: "Which operator checks both condition and value?",
    options: ["==", "equals()", "=", "!="],
    correctAnswer: "==",
    topic: "Operators",
    level: "beginner",
  },
  {
    question: "What is the default value of a boolean in Java?",
    options: ["true", "false", "null", "0"],
    correctAnswer: "false",
    topic: "Booleans",
    level: "beginner",
  },
  {
    question: "Which keyword refers to the parent class in Java?",
    options: ["super", "this", "extends", "base"],
    correctAnswer: "super",
    topic: "Inheritance",
    level: "beginner",
  },
  {
    question: "Which method is used to find the length of a string?",
    options: ["length()", "size()", "getSize()", "count()"],
    correctAnswer: "length()",
    topic: "Strings",
    level: "beginner",
  },

  // 💻 Code Editor (random placement)
  {
    question:
      "Write a method that returns the sum of all elements in an array.",
    codeEditor: true,
    correctAnswer:
      "int sum(int[] arr) {\n  int total = 0;\n  for (int num : arr) total += num;\n  return total;\n}",
    topic: "Arrays",
    level: "intermediate",
  },

  // 🚀 Intermediate
  {
    question: "Which method is used to compare two strings ignoring case?",
    options: ["equals()", "==", "equalsIgnoreCase()", "compareTo()"],
    correctAnswer: "equalsIgnoreCase()",
    topic: "Strings",
    level: "intermediate",
  },
  {
    question: "Which block executes regardless of exceptions?",
    options: ["try", "catch", "finally", "throw"],
    correctAnswer: "finally",
    topic: "Exceptions",
    level: "intermediate",
  },
  {
    question: "Which keyword is used to create a thread in Java?",
    options: ["thread", "start", "new", "Runnable"],
    correctAnswer: "Runnable",
    topic: "Multithreading",
    level: "intermediate",
  },

  // 💻 Code Editor (random placement)
  {
    question: "Write a method that reverses the elements of an integer array.",
    codeEditor: true,
    correctAnswer:
      "void reverse(int[] arr) {\n  int i = 0, j = arr.length - 1;\n  while (i < j) {\n    int temp = arr[i];\n    arr[i] = arr[j];\n    arr[j] = temp;\n    i++;\n    j--;\n  }\n}",
    topic: "Arrays",
    level: "advanced",
  },

  {
    question: "What does the `synchronized` keyword do?",
    options: [
      "Pauses thread",
      "Locks resource for thread safety",
      "Terminates thread",
      "Pauses method",
    ],
    correctAnswer: "Locks resource for thread safety",
    topic: "Multithreading",
    level: "advanced",
  },
  {
    question: "Which type of inheritance is supported in Java?",
    options: ["Multiple", "Multilevel", "Hybrid", "Virtual"],
    correctAnswer: "Multilevel",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which method converts a string to an int?",
    options: ["Integer.convert()", "parseInt()", "toInteger()", "int.parse()"],
    correctAnswer: "parseInt()",
    topic: "Type Conversion",
    level: "intermediate",
  },

  // 💻 Code Editor (random placement)
  {
    question: "Write a method to find the factorial using a loop.",
    codeEditor: true,
    correctAnswer:
      "int factorial(int n) {\n  int result = 1;\n  for (int i = 1; i <= n; i++) {\n    result *= i;\n  }\n  return result;\n}",
    topic: "Loops",
    level: "beginner",
  },

  {
    question: "Which keyword is used for abstraction in Java?",
    options: ["abstract", "interface", "final", "implements"],
    correctAnswer: "abstract",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which collection prevents duplicates?",
    options: ["ArrayList", "List", "HashSet", "Vector"],
    correctAnswer: "HashSet",
    topic: "Collections",
    level: "advanced",
  },

  // 🧠 Prodigy
  {
    question:
      'What is the output?\n```java\nString s = null;\ns += "Java";\nSystem.out.println(s);\n```',
    options: ["nullJava", "Java", "null", "Error"],
    correctAnswer: "nullJava",
    topic: "Strings",
    level: "prodigy",
  },
  {
    question:
      "What is the result?\n```java\nint x = 5;\nSystem.out.println(x++ + ++x);\n```",
    options: ["11", "12", "13", "10"],
    correctAnswer: "12",
    topic: "Operators",
    level: "prodigy",
  },

  // 💻 Code Editor (random placement)
  {
    question: "Write a method to return the largest of three numbers.",
    codeEditor: true,
    correctAnswer:
      "int max(int a, int b, int c) {\n  return Math.max(a, Math.max(b, c));\n}",
    topic: "Math",
    level: "intermediate",
  },

  {
    question: "Which keyword is used to skip the current iteration in a loop?",
    options: ["skip", "return", "continue", "break"],
    correctAnswer: "continue",
    topic: "Control Flow",
    level: "beginner",
  },
];
