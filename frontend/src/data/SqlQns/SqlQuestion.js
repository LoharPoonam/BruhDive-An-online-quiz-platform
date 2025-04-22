export const sqlQuestions = [
  // 🛧 Noob Mode
  {
    question: "Which keyword is used to create a new table?",
    options: ["MAKE TABLE", "NEW TABLE", "CREATE TABLE", "BUILD TABLE"],
    correctAnswer: "CREATE TABLE",
    topic: "DDL",
    level: "newbie",
  },
  {
    question: "Which SQL statement is used to change data in a table?",
    options: ["ALTER", "MODIFY", "UPDATE", "SET"],
    correctAnswer: "UPDATE",
    topic: "DML",
    level: "newbie",
  },
  {
    question: "Which function returns the smallest value?",
    options: ["SMALL()", "LOW()", "MIN()", "LEAST()"],
    correctAnswer: "MIN()",
    topic: "Aggregation",
    level: "newbie",
  },
  {
    question: "Which operator is used to match any value in a list?",
    options: ["IN", "LIKE", "BETWEEN", "MATCH"],
    correctAnswer: "IN",
    topic: "Operators",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Logic",
      "Standard Query Language",
      "System Query Layout",
    ],
    correctAnswer: "Structured Query Language",
    topic: "Basics",
    level: "beginner",
  },
  {
    question: "Which function counts non-null values only?",
    options: ["COUNT()", "COUNT(*)", "COUNT(ALL)", "COUNT(column)"],
    correctAnswer: "COUNT(column)",
    topic: "Aggregation",
    level: "beginner",
  },
  {
    question: "Which clause is used with SELECT for grouped records?",
    options: ["WHERE", "GROUP BY", "JOIN", "ORDER BY"],
    correctAnswer: "GROUP BY",
    topic: "Grouping",
    level: "beginner",
  },
  {
    question: "Which data type stores variable-length text?",
    options: ["TEXT", "STRING", "VARCHAR", "CHAR"],
    correctAnswer: "VARCHAR",
    topic: "Data Types",
    level: "beginner",
  },
  {
    question: "Which keyword is used to remove a table completely?",
    options: ["DELETE TABLE", "REMOVE", "DROP TABLE", "ERASE"],
    correctAnswer: "DROP TABLE",
    topic: "DDL",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which clause is used to filter groups?",
    options: ["WHERE", "HAVING", "ORDER BY", "LIMIT"],
    correctAnswer: "HAVING",
    topic: "Grouping",
    level: "intermediate",
  },
  {
    question: "Which command adds a new column to an existing table?",
    options: [
      "ALTER TABLE ADD COLUMN",
      "UPDATE TABLE",
      "INSERT COLUMN",
      "MODIFY TABLE",
    ],
    correctAnswer: "ALTER TABLE ADD COLUMN",
    topic: "DDL",
    level: "intermediate",
  },
  {
    question: "Which join returns unmatched rows from both tables?",
    options: ["INNER JOIN", "LEFT JOIN", "OUTER JOIN", "FULL JOIN"],
    correctAnswer: "FULL JOIN",
    topic: "Joins",
    level: "intermediate",
  },
  {
    question: "Which function returns the number of characters in a string?",
    options: ["LENGTH()", "SIZE()", "LEN()", "COUNT()"],
    correctAnswer: "LENGTH()",
    topic: "Functions",
    level: "intermediate",
  },
  {
    question: "Which SQL keyword is used to rename a column or table?",
    options: ["RENAME", "ALIAS", "AS", "NAME"],
    correctAnswer: "AS",
    topic: "Aliases",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "What is a subquery?",
    options: [
      "A query with errors",
      "A query inside another query",
      "A function in SQL",
      "A database column",
    ],
    correctAnswer: "A query inside another query",
    topic: "Subqueries",
    level: "advanced",
  },
  {
    question: "What is the purpose of a foreign key?",
    options: [
      "Enforces uniqueness",
      "Links two tables",
      "Stores external data",
      "Deletes duplicates",
    ],
    correctAnswer: "Links two tables",
    topic: "Constraints",
    level: "advanced",
  },
  {
    question: "What does `IS NULL` do?",
    options: [
      "Checks if a value is empty",
      "Checks if a value is 0",
      "Checks if a column is NULL",
      "Deletes NULL values",
    ],
    correctAnswer: "Checks if a column is NULL",
    topic: "Operators",
    level: "advanced",
  },
  {
    question: "Which SQL clause limits the number of returned rows?",
    options: ["TOP", "LIMIT", "RESTRICT", "COUNT"],
    correctAnswer: "LIMIT",
    topic: "Filtering",
    level: "advanced",
  },
  {
    question: "Which join is used when every row must match in both tables?",
    options: ["INNER JOIN", "CROSS JOIN", "RIGHT JOIN", "FULL JOIN"],
    correctAnswer: "INNER JOIN",
    topic: "Joins",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "What is a CTE in SQL?",
    options: [
      "Column Table Expression",
      "Common Table Expression",
      "Custom Table Extension",
      "Current Table Entry",
    ],
    correctAnswer: "Common Table Expression",
    topic: "CTE",
    level: "prodigy",
  },
  {
    question: "What is the use of `RANK()` function?",
    options: [
      "Returns a position based on order",
      "Counts rows",
      "Ranks columns",
      "Creates primary key",
    ],
    correctAnswer: "Returns a position based on order",
    topic: "Window Functions",
    level: "prodigy",
  },
  {
    question: "What does `UNION` do?",
    options: [
      "Appends columns",
      "Removes duplicates between two SELECTs",
      "Creates duplicates",
      "Merges tables permanently",
    ],
    correctAnswer: "Removes duplicates between two SELECTs",
    topic: "Set Operations",
    level: "prodigy",
  },
  {
    question: "Which clause is used to sort query results?",
    options: ["SORT BY", "GROUP BY", "ORDER BY", "RANK"],
    correctAnswer: "ORDER BY",
    topic: "Sorting",
    level: "prodigy",
  },
  {
    question: "Which SQL function rounds a number to the nearest integer?",
    options: ["TRUNC()", "INT()", "ROUND()", "FLOOR()"],
    correctAnswer: "ROUND()",
    topic: "Math Functions",
    level: "prodigy",
  },
];
