export const javaQuestionsThree = [
  // 🔰 Newbie
  {
    question: "Which Java keyword is used to return a value from a method?",
    options: ["output", "return", "break", "send"],
    correctAnswer: "return",
    topic: "Methods",
    level: "newbie",
  },
  {
    question: "What does JVM stand for?",
    options: [
      "Java Virtual Machine",
      "Java Verified Manager",
      "Just Virtual Memory",
      "Java Version Manager",
    ],
    correctAnswer: "Java Virtual Machine",
    topic: "JVM",
    level: "newbie",
  },
  {
    question:
      "Which keyword defines a method that belongs to the class, not the object?",
    options: ["static", "private", "this", "const"],
    correctAnswer: "static",
    topic: "Static Methods",
    level: "newbie",
  },
  {
    question: "Which Java keyword is used to declare a constant?",
    options: ["static", "const", "final", "immutable"],
    correctAnswer: "final",
    topic: "Constants",
    level: "newbie",
  },
  {
    question: "Which of the following is not a valid loop in Java?",
    options: ["for", "repeat", "while", "do-while"],
    correctAnswer: "repeat",
    topic: "Loops",
    level: "newbie",
  },

  // 🧑‍💻 Beginner
  {
    question: "Which method converts a string to uppercase in Java?",
    options: ["toUpper()", "toUpperCase()", "upper()", "uppercase()"],
    correctAnswer: "toUpperCase()",
    topic: "Strings",
    level: "beginner",
  },
  {
    question: "How do you handle checked exceptions in Java?",
    options: ["try-catch", "throws", "both", "none"],
    correctAnswer: "both",
    topic: "Error Handling",
    level: "beginner",
  },
  {
    question: "Which of these types can store 64-bit values?",
    options: ["int", "float", "long", "short"],
    correctAnswer: "long",
    topic: "Data Types",
    level: "beginner",
  },
  {
    question: "Which of these operators is used for logical AND?",
    options: ["&", "&&", "|", "||"],
    correctAnswer: "&&",
    topic: "Operators",
    level: "beginner",
  },
  {
    question: "What is the output of: `System.out.println(3 + 4 * 2);`?",
    options: ["14", "11", "10", "Error"],
    correctAnswer: "11",
    topic: "Operators",
    level: "beginner",
  },

  // 💻 Code Editor (random placement)
  {
    question: "Write a Java method that returns whether a number is even.",
    codeEditor: true,
    correctAnswer: "boolean isEven(int n) {\n  return n % 2 == 0;\n}",
    topic: "Math",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question:
      "Which collection allows duplicate elements and maintains insertion order?",
    options: ["HashSet", "TreeSet", "ArrayList", "LinkedHashSet"],
    correctAnswer: "ArrayList",
    topic: "Collections",
    level: "intermediate",
  },
  {
    question:
      "Which exception is thrown when accessing an invalid array index?",
    options: [
      "ArrayIndexException",
      "IndexOutOfBoundsException",
      "NullPointerException",
      "RuntimeException",
    ],
    correctAnswer: "IndexOutOfBoundsException",
    topic: "Exceptions",
    level: "intermediate",
  },
  {
    question: "What is the result of `Math.pow(2, 3)`?",
    options: ["6", "8", "9", "5"],
    correctAnswer: "8",
    topic: "Math",
    level: "intermediate",
  },

  // 💻 Code Editor (random placement)
  {
    question: "Write a method that counts vowels in a string.",
    codeEditor: true,
    correctAnswer:
      'int countVowels(String str) {\n  int count = 0;\n  for (char c : str.toLowerCase().toCharArray()) {\n    if ("aeiou".indexOf(c) != -1) count++;\n  }\n  return count;\n}',
    topic: "Strings",
    level: "intermediate",
  },

  {
    question: "What is the parent class of all exceptions?",
    options: ["Throwable", "Object", "Exception", "RuntimeException"],
    correctAnswer: "Throwable",
    topic: "Exceptions",
    level: "intermediate",
  },
  {
    question: "Which interface allows objects to be compared in sorting?",
    options: ["Cloneable", "Serializable", "Comparable", "Readable"],
    correctAnswer: "Comparable",
    topic: "Interfaces",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What does `transient` keyword do in Java?",
    options: [
      "Prevents variable from being serialized",
      "Marks method as temporary",
      "Prevents override",
      "None of the above",
    ],
    correctAnswer: "Prevents variable from being serialized",
    topic: "Serialization",
    level: "advanced",
  },
  {
    question: "Which class handles high-precision decimal numbers?",
    options: ["BigDecimal", "Float", "Double", "Math"],
    correctAnswer: "BigDecimal",
    topic: "Math",
    level: "advanced",
  },

  // 💻 Code Editor (random placement)
  {
    question: "Write a method to check if a year is a leap year.",
    codeEditor: true,
    correctAnswer:
      "boolean isLeap(int year) {\n  return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);\n}",
    topic: "Date/Time",
    level: "advanced",
  },

  {
    question: "Which class is used for stack operations?",
    options: ["ArrayList", "LinkedList", "Stack", "Deque"],
    correctAnswer: "Stack",
    topic: "Collections",
    level: "advanced",
  },

  // 🧠🧠 Prodigy
  {
    question:
      'What does this return?\n```java\nSystem.out.println(10 + "" + 5);\n```',
    options: ["105", "15", "10 5", "Error"],
    correctAnswer: "105",
    topic: "Type Conversion",
    level: "prodigy",
  },
  {
    question: "Which keyword restricts method from being overridden?",
    options: ["final", "private", "static", "const"],
    correctAnswer: "final",
    topic: "OOP",
    level: "prodigy",
  },
  {
    question:
      "Which access level allows visibility in all classes across packages?",
    options: ["private", "protected", "default", "public"],
    correctAnswer: "public",
    topic: "Access Modifiers",
    level: "prodigy",
  },
];
