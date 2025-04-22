export const sqlQuestionsThree = [
  // 🛧 Noob Mode
  {
    question: "Which keyword is used to insert new data into a table?",
    options: ["APPEND", "INSERT", "ADD", "NEW"],
    correctAnswer: "INSERT",
    topic: "DML",
    level: "newbie",
  },
  {
    question: "Which command is used to retrieve data from a table?",
    options: ["FETCH", "GET", "SELECT", "SHOW"],
    correctAnswer: "SELECT",
    topic: "DML",
    level: "newbie",
  },
  {
    question: "What does the `WHERE` clause do?",
    options: [
      "Selects columns",
      "Filters rows",
      "Sorts results",
      "Joins tables",
    ],
    correctAnswer: "Filters rows",
    topic: "Filtering",
    level: "newbie",
  },
  {
    question: "Which SQL statement is used to delete records?",
    options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
    correctAnswer: "DELETE",
    topic: "DML",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "What does `DISTINCT` do in a SELECT query?",
    options: [
      "Removes NULL values",
      "Returns unique values",
      "Sorts values",
      "Removes duplicates from table",
    ],
    correctAnswer: "Returns unique values",
    topic: "Filtering",
    level: "beginner",
  },
  {
    question: "Which operator is used for pattern matching in SQL?",
    options: ["LIKE", "MATCH", "PATTERN", "FIND"],
    correctAnswer: "LIKE",
    topic: "Pattern Matching",
    level: "beginner",
  },
  {
    question: "Which clause is used to filter grouped records?",
    options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
    correctAnswer: "HAVING",
    topic: "Grouping",
    level: "beginner",
  },
  {
    question: "Which function returns the average value of a column?",
    options: ["TOTAL()", "SUM()", "MEAN()", "AVG()"],
    correctAnswer: "AVG()",
    topic: "Aggregation",
    level: "beginner",
  },
  {
    question: "Which SQL keyword is used to combine multiple conditions?",
    options: ["WITH", "THEN", "AND", "WHEN"],
    correctAnswer: "AND",
    topic: "Conditions",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question:
      "Which JOIN returns rows that have matching values in both tables?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"],
    correctAnswer: "INNER JOIN",
    topic: "Joins",
    level: "intermediate",
  },
  {
    question:
      "Which command removes all rows from a table but keeps the structure?",
    options: ["DROP", "DELETE", "TRUNCATE", "REMOVE"],
    correctAnswer: "TRUNCATE",
    topic: "DML",
    level: "intermediate",
  },
  {
    question: "What is the default sorting order in SQL?",
    options: ["DESC", "RANDOM", "ASC", "NONE"],
    correctAnswer: "ASC",
    topic: "Sorting",
    level: "intermediate",
  },
  {
    question: "What does `IS NULL` check for?",
    options: ["Empty string", "0", "Missing value", "Duplicate"],
    correctAnswer: "Missing value",
    topic: "Nulls",
    level: "intermediate",
  },
  {
    question: "Which function returns the number of records?",
    options: ["SUM()", "COUNT()", "TOTAL()", "LENGTH()"],
    correctAnswer: "COUNT()",
    topic: "Aggregation",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "Which clause is used to rename a table?",
    options: ["RENAME TABLE", "MODIFY", "RENAME TO", "CHANGE NAME"],
    correctAnswer: "RENAME TO",
    topic: "DDL",
    level: "advanced",
  },
  {
    question: "Which keyword enforces unique values in a column?",
    options: ["INDEX", "UNIQUE", "KEY", "CHECK"],
    correctAnswer: "UNIQUE",
    topic: "Constraints",
    level: "advanced",
  },
  {
    question: "Which keyword defines a foreign key relationship?",
    options: ["FOREIGN KEY", "LINK TO", "REFERENCES", "MAP"],
    correctAnswer: "FOREIGN KEY",
    topic: "Relationships",
    level: "advanced",
  },
  {
    question: "Which SQL function returns current date and time?",
    options: ["DATE()", "NOW()", "TIME()", "SYSDATE()"],
    correctAnswer: "NOW()",
    topic: "Date/Time",
    level: "advanced",
  },
  {
    question: "Which constraint prevents null values in a column?",
    options: ["CHECK", "NOT NULL", "UNIQUE", "PRIMARY"],
    correctAnswer: "NOT NULL",
    topic: "Constraints",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which clause is used with `RANK()` or `ROW_NUMBER()`?",
    options: ["PARTITION BY", "GROUP BY", "FILTER BY", "SEPARATE BY"],
    correctAnswer: "PARTITION BY",
    topic: "Window Functions",
    level: "prodigy",
  },
  {
    question: "What is the difference between `UNION` and `UNION ALL`?",
    options: [
      "UNION returns only unique rows, UNION ALL includes duplicates",
      "They are the same",
      "UNION is faster",
      "UNION ALL uses GROUP BY internally",
    ],
    correctAnswer:
      "UNION returns only unique rows, UNION ALL includes duplicates",
    topic: "Set Operations",
    level: "prodigy",
  },
  {
    question: "Which keyword defines a default value for a column?",
    options: ["SET", "DEFAULT", "ASSIGN", "VALUE"],
    correctAnswer: "DEFAULT",
    topic: "Constraints",
    level: "prodigy",
  },
  {
    question: "Which function returns the difference between two dates?",
    options: ["DATEDIFF()", "DATEGAP()", "DURATION()", "DATE_DIFF()"],
    correctAnswer: "DATEDIFF()",
    topic: "Date/Time",
    level: "prodigy",
  },
  {
    question:
      "Which SQL clause is used to define a CTE (Common Table Expression)?",
    options: ["WITH", "DEFINE", "TEMP", "AS CTE"],
    correctAnswer: "WITH",
    topic: "CTE",
    level: "prodigy",
  },
];
