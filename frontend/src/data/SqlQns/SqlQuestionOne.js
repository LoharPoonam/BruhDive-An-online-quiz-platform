export const sqlQuestionsOne = [
  // 🛧 Noob Mode
  {
    question: "Which SQL keyword is used to create a table?",
    options: ["NEW", "CREATE", "MAKE", "ADD"],
    correctAnswer: "CREATE",
    topic: "DDL",
    level: "newbie",
  },
  {
    question: "What does `*` mean in a SELECT statement?",
    options: ["Multiply", "All columns", "Primary key", "First column"],
    correctAnswer: "All columns",
    topic: "Basic Queries",
    level: "newbie",
  },
  {
    question: "Which clause limits the number of rows returned?",
    options: ["LIMIT", "TOP", "MAX", "ROWS"],
    correctAnswer: "LIMIT",
    topic: "Filtering",
    level: "newbie",
  },
  {
    question: "What does `NULL` mean in SQL?",
    options: ["0", "Empty string", "No value", "Zero"],
    correctAnswer: "No value",
    topic: "Nulls",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which clause is used to rename a table column in results?",
    options: ["RENAME", "ALIAS", "AS", "LABEL"],
    correctAnswer: "AS",
    topic: "Aliases",
    level: "beginner",
  },
  {
    question: "Which function returns the highest value in a column?",
    options: ["MAX()", "TOP()", "HIGHEST()", "LARGEST()"],
    correctAnswer: "MAX()",
    topic: "Aggregation",
    level: "beginner",
  },
  {
    question: "Which clause is used to sort results in descending order?",
    options: ["ORDER DESC", "SORT DESC", "ORDER BY ... DESC", "DESC ORDER"],
    correctAnswer: "ORDER BY ... DESC",
    topic: "Sorting",
    level: "beginner",
  },
  {
    question: "Which keyword is used to remove a table structure?",
    options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"],
    correctAnswer: "DROP",
    topic: "DDL",
    level: "beginner",
  },
  {
    question: "Which operator checks a value against a list of values?",
    options: ["WITH", "IN", "CHECK", "IS"],
    correctAnswer: "IN",
    topic: "Filtering",
    level: "beginner",
  },

  // 💻 Code Editor
  {
    question:
      "Write an SQL query to get names of employees with salary > 50000.",
    codeEditor: true,
    correctAnswer: "SELECT name FROM employees WHERE salary > 50000;",
    topic: "Filtering",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which join includes unmatched rows from the left table?",
    options: ["RIGHT JOIN", "LEFT JOIN", "FULL JOIN", "INNER JOIN"],
    correctAnswer: "LEFT JOIN",
    topic: "Joins",
    level: "intermediate",
  },
  {
    question:
      "Which SQL clause combines rows with same values into summary rows?",
    options: ["GROUP BY", "UNION", "CLUSTER", "COLLATE"],
    correctAnswer: "GROUP BY",
    topic: "Grouping",
    level: "intermediate",
  },
  {
    question: "What does the `BETWEEN` operator do?",
    options: [
      "Compares exact matches",
      "Checks for nulls",
      "Checks range",
      "Joins tables",
    ],
    correctAnswer: "Checks range",
    topic: "Filtering",
    level: "intermediate",
  },
  {
    question: "Which clause is used to rename an existing table?",
    options: ["RENAME TO", "ALTER TO", "UPDATE NAME", "MODIFY TABLE"],
    correctAnswer: "RENAME TO",
    topic: "DDL",
    level: "intermediate",
  },
  {
    question: "Which keyword is used to combine results of two SELECTs?",
    options: ["JOIN", "MERGE", "UNION", "CONNECT"],
    correctAnswer: "UNION",
    topic: "Set Operations",
    level: "intermediate",
  },

  // 💻 Code Editor
  {
    question:
      "Write an SQL query to find total salary department-wise from `employees`.",
    codeEditor: true,
    correctAnswer:
      "SELECT department, SUM(salary) FROM employees GROUP BY department;",
    topic: "Grouping",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "Which SQL keyword changes the structure of a table?",
    options: ["MODIFY", "CHANGE", "ALTER", "RENAME"],
    correctAnswer: "ALTER",
    topic: "DDL",
    level: "advanced",
  },
  {
    question: "What is the purpose of the `CHECK` constraint?",
    options: [
      "Ensure uniqueness",
      "Check for nulls",
      "Limit values",
      "Create index",
    ],
    correctAnswer: "Limit values",
    topic: "Constraints",
    level: "advanced",
  },
  {
    question:
      "Which SQL statement is used to remove all records but keep structure?",
    options: ["DROP", "TRUNCATE", "DELETE", "ERASE"],
    correctAnswer: "TRUNCATE",
    topic: "Data Manipulation",
    level: "advanced",
  },
  {
    question: "Which statement adds a new column to a table?",
    options: [
      "MODIFY COLUMN",
      "APPEND COLUMN",
      "ALTER TABLE ... ADD",
      "CREATE COLUMN",
    ],
    correctAnswer: "ALTER TABLE ... ADD",
    topic: "DDL",
    level: "advanced",
  },

  // 💻 Code Editor
  {
    question:
      "Write an SQL query to find all employees whose name starts with 'J'.",
    codeEditor: true,
    correctAnswer: "SELECT * FROM employees WHERE name LIKE 'J%';",
    topic: "Pattern Matching",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which keyword creates a new view in SQL?",
    options: ["CREATE VIEW", "VIEW CREATE", "NEW VIEW", "DEFINE VIEW"],
    correctAnswer: "CREATE VIEW",
    topic: "Views",
    level: "prodigy",
  },
  {
    question: "Which SQL clause is used to define window functions?",
    options: ["OVER()", "WITH()", "WINDOW()", "PARTITION()"],
    correctAnswer: "OVER()",
    topic: "Window Functions",
    level: "prodigy",
  },
  {
    question: "What does `RANK() OVER (ORDER BY score DESC)` return?",
    options: [
      "Sum of scores",
      "Group by score",
      "Row number",
      "Ranking of rows",
    ],
    correctAnswer: "Ranking of rows",
    topic: "Window Functions",
    level: "prodigy",
  },

  // 💻 Code Editor
  {
    question: "Write a query to fetch top 3 earning employees.",
    codeEditor: true,
    correctAnswer: "SELECT * FROM employees ORDER BY salary DESC LIMIT 3;",
    topic: "Sorting",
    level: "prodigy",
  },
];
