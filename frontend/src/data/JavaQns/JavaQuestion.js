export const javaQuestions = [
  // 🔰 Newbie
  {
    question: "Which keyword is used to define a class in Java?",
    options: ["class", "Class", "define", "new"],
    correctAnswer: "class",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "Which symbol ends a Java statement?",
    options: [";", ".", ":", ","],
    correctAnswer: ";",
    topic: "Syntax",
    level: "newbie",
  },
  {
    question: "What is the purpose of the `final` keyword for methods?",
    options: [
      "Makes method static",
      "Prevents method overriding",
      "Allows multiple inheritance",
      "Makes method private",
    ],
    correctAnswer: "Prevents method overriding",
    topic: "Modifiers",
    level: "advanced",
  },
  {
    question:
      'What is the output?\n```java\nSystem.out.println(5 + 2 + "3");\n```',
    options: ["52", "7", "73", "523"],
    correctAnswer: "73",
    topic: "Type Conversion",
    level: "prodigy",
  },
  {
    question: "What is the default value of an `int` in Java?",
    options: ["0", "null", "undefined", "1"],
    correctAnswer: "0",
    topic: "Data Types",
    level: "newbie",
  },
  {
    question: "Which of these is a valid variable name in Java?",
    options: ["1value", "_value", "value#", "@value"],
    correctAnswer: "_value",
    topic: "Variables",
    level: "newbie",
  },
  {
    question: "Which method is used to print output in Java?",
    options: [
      "console.log()",
      "System.print()",
      "System.out.println()",
      "echo()",
    ],
    correctAnswer: "System.out.println()",
    topic: "Input/Output",
    level: "newbie",
  },

  // 🧑‍💻 Beginner
  {
    question:
      "Which access modifier makes a member accessible within the same package?",
    options: ["private", "protected", "default", "public"],
    correctAnswer: "default",
    topic: "Access Modifiers",
    level: "beginner",
  },
  {
    question: "Which loop is best when the number of iterations is known?",
    options: ["while", "for", "do-while", "foreach"],
    correctAnswer: "for",
    topic: "Loops",
    level: "beginner",
  },
  {
    question: "Which operator is used for comparison in Java?",
    options: ["=", "==", "!=", "==="],
    correctAnswer: "==",
    topic: "Operators",
    level: "beginner",
  },
  {
    question: "What is the size of `int` in Java?",
    options: ["4 bytes", "2 bytes", "8 bytes", "1 byte"],
    correctAnswer: "4 bytes",
    topic: "Data Types",
    level: "beginner",
  },
  {
    question: "Which keyword is used to inherit a class?",
    options: ["inherits", "extends", "implements", "super"],
    correctAnswer: "extends",
    topic: "OOP",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "What is method overloading in Java?",
    options: [
      "Same name, different parameters",
      "Different classes",
      "Same name, same parameters",
      "Extending methods from parent",
    ],
    correctAnswer: "Same name, different parameters",
    topic: "OOP",
    level: "intermediate",
  },
  {
    question: "What is the output of `System.out.println(10 / 3);`?",
    options: ["3", "3.33", "3.0", "Error"],
    correctAnswer: "3",
    topic: "Operators",
    level: "intermediate",
  },
  {
    question: "Which of the following is a wrapper class?",
    options: ["int", "Integer", "string", "float"],
    correctAnswer: "Integer",
    topic: "Wrapper Classes",
    level: "intermediate",
  },
  {
    question: "Which of the following is not a Java primitive type?",
    options: ["byte", "short", "String", "boolean"],
    correctAnswer: "String",
    topic: "Data Types",
    level: "intermediate",
  },
  {
    question: "What does `static` keyword mean in Java?",
    options: [
      "Shared among all objects",
      "Object-specific",
      "Immutable",
      "Private by default",
    ],
    correctAnswer: "Shared among all objects",
    topic: "Static",
    level: "intermediate",
  },
  {
    question: "Which keyword is used to prevent inheritance?",
    options: ["static", "final", "private", "abstract"],
    correctAnswer: "final",
    topic: "Modifiers",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is the base class of all classes in Java?",
    options: ["Main", "Object", "Super", "Root"],
    correctAnswer: "Object",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "Which interface must be implemented to sort a custom object?",
    options: ["Serializable", "Runnable", "Comparable", "Iterable"],
    correctAnswer: "Comparable",
    topic: "Interfaces",
    level: "advanced",
  },
  {
    question: "What is the use of `this` keyword in Java?",
    options: [
      "Access static members",
      "Refer current object",
      "Create new object",
      "Destroy object",
    ],
    correctAnswer: "Refer current object",
    topic: "OOP",
    level: "advanced",
  },
  {
    question: "What happens when a constructor has `private` access?",
    options: [
      "Object cannot be created directly",
      "Class is automatically abstract",
      "Class becomes static",
      "Nothing special happens",
    ],
    correctAnswer: "Object cannot be created directly",
    topic: "Constructors",
    level: "advanced",
  },

  // 💻 Code Editor Qs
  {
    question: "Write a Java method to return the factorial of a number.",
    codeEditor: true,
    correctAnswer:
      "int factorial(int n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}",
    topic: "Recursion",
    level: "advanced",
  },
  {
    question: "Write a Java method to check if a number is prime.",
    codeEditor: true,
    correctAnswer:
      "boolean isPrime(int n) {\n  if (n <= 1) return false;\n  for (int i = 2; i <= Math.sqrt(n); i++) {\n    if (n % i == 0) return false;\n  }\n  return true;\n}",
    topic: "Math",
    level: "master",
  },

  // 🧠🧠 Prodigy
  {
    question:
      'What will be the output?\n```java\nSystem.out.println("5" + 3);\n```',
    options: ["53", "8", "Error", "None"],
    correctAnswer: "53",
    topic: "Type Conversion",
    level: "prodigy",
  },
  {
    question:
      "What is the output?\n```java\nint[] arr = new int[3];\nSystem.out.println(arr[0]);\n```",
    options: ["0", "null", "undefined", "Error"],
    correctAnswer: "0",
    topic: "Arrays",
    level: "prodigy",
  },
  {
    question:
      'What will this code print?\n```java\nString a = "hello";\nString b = new String("hello");\nSystem.out.println(a == b);\n```',
    options: ["true", "false", "Error", "hello"],
    correctAnswer: "false",
    topic: "Strings",
    level: "prodigy",
  },
];
