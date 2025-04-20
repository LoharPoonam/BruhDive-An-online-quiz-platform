export const sqlQuestionsTwo = [
  // 🛧 Noob Mode
  {
    question: "Which command is used to view all records in a table?",
    options: ["SELECT ALL", "VIEW *", "SELECT *", "SHOW ALL"],
    correctAnswer: "SELECT *",
    topic: "Basics",
    level: "newbie",
  },
  {
    question: "Which clause is used to filter results?",
    options: ["FILTER", "WHERE", "IF", "LIMIT"],
    correctAnswer: "WHERE",
    topic: "Filtering",
    level: "newbie",
  },
  {
    question:
      "Which SQL command is used to remove all records but keep the table?",
    options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"],
    correctAnswer: "TRUNCATE",
    topic: "DML",
    level: "newbie",
  },
  {
    question: "Which keyword allows you to insert data into a table?",
    options: ["ADD", "APPEND", "INSERT INTO", "PUSH"],
    correctAnswer: "INSERT INTO",
    topic: "DML",
    level: "newbie",
  },

  // 👶 Newbie
  {
    question: "Which clause is used with SELECT to remove duplicate values?",
    options: ["DISTINCT", "UNIQUE", "ONLY", "SEPARATE"],
    correctAnswer: "DISTINCT",
    topic: "Filtering",
    level: "beginner",
  },
  {
    question: "Which SQL keyword is used to rename a table?",
    options: ["MODIFY", "CHANGE", "RENAME TO", "SET NAME"],
    correctAnswer: "RENAME TO",
    topic: "DDL",
    level: "beginner",
  },
  {
    question: "What is the default sorting order for ORDER BY?",
    options: ["Descending", "Ascending", "Random", "Grouped"],
    correctAnswer: "Ascending",
    topic: "Sorting",
    level: "beginner",
  },
  {
    question: "Which of these is a valid numeric data type?",
    options: ["STRING", "NUMTEXT", "INT", "TEXT"],
    correctAnswer: "INT",
    topic: "Data Types",
    level: "beginner",
  },
  {
    question: "Which function returns the total number of rows?",
    options: ["SUM()", "TOTAL()", "COUNT()", "NUMBER()"],
    correctAnswer: "COUNT()",
    topic: "Aggregation",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    question: "Which function returns the average value in a column?",
    options: ["AVG()", "AVERAGE()", "MEAN()", "MID()"],
    correctAnswer: "AVG()",
    topic: "Aggregation",
    level: "intermediate",
  },
  {
    question: "What does the BETWEEN operator do?",
    options: [
      "Matches pattern",
      "Checks range of values",
      "Compares columns",
      "Limits output rows",
    ],
    correctAnswer: "Checks range of values",
    topic: "Operators",
    level: "intermediate",
  },
  {
    question: "Which command removes a specific row from a table?",
    options: ["TRUNCATE", "DELETE", "DROP", "REMOVE"],
    correctAnswer: "DELETE",
    topic: "DML",
    level: "intermediate",
  },
  {
    question: "Which type of join returns only matching rows?",
    options: ["LEFT JOIN", "RIGHT JOIN", "OUTER JOIN", "INNER JOIN"],
    correctAnswer: "INNER JOIN",
    topic: "Joins",
    level: "intermediate",
  },
  {
    question: "Which function returns the current date?",
    options: ["GETDATE()", "TODAY()", "NOW()", "SYSDATE()"],
    correctAnswer: "NOW()",
    topic: "Functions",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    question: "Which constraint ensures all values in a column are different?",
    options: ["NOT NULL", "PRIMARY KEY", "UNIQUE", "FOREIGN KEY"],
    correctAnswer: "UNIQUE",
    topic: "Constraints",
    level: "advanced",
  },
  {
    question: "What does a LEFT JOIN return?",
    options: [
      "Only matching rows",
      "Only unmatched rows",
      "All rows from left table and matched from right",
      "All rows from right table",
    ],
    correctAnswer: "All rows from left table and matched from right",
    topic: "Joins",
    level: "advanced",
  },
  {
    question: "What is the purpose of CHECK constraint?",
    options: [
      "Limits duplicate entries",
      "Ensures a condition is met",
      "Creates primary key",
      "Defines column size",
    ],
    correctAnswer: "Ensures a condition is met",
    topic: "Constraints",
    level: "advanced",
  },
  {
    question: "Which keyword is used to modify an existing table structure?",
    options: ["MODIFY", "ALTER", "RESTRUCTURE", "REFORM"],
    correctAnswer: "ALTER",
    topic: "DDL",
    level: "advanced",
  },
  {
    question: "Which statement creates a stored procedure?",
    options: ["CREATE PROCEDURE", "MAKE FUNCTION", "DEFINE PROC", "NEW PROC"],
    correctAnswer: "CREATE PROCEDURE",
    topic: "Procedures",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    question: "Which clause is used for recursive queries in SQL?",
    options: ["JOIN RECURSIVE", "WITH RECURSIVE", "RECURSE", "LOOP"],
    correctAnswer: "WITH RECURSIVE",
    topic: "CTE",
    level: "prodigy",
  },
  {
    question:
      "Which index type stores sorted data and is fast for range queries?",
    options: ["B-Tree", "Hash", "Heap", "Bitmap"],
    correctAnswer: "B-Tree",
    topic: "Indexes",
    level: "prodigy",
  },
  {
    question: "What is a view in SQL?",
    options: [
      "A duplicate table",
      "Stored result of a query",
      "A backup",
      "A procedure",
    ],
    correctAnswer: "Stored result of a query",
    topic: "Views",
    level: "prodigy",
  },
  {
    question: "Which statement grants access to users?",
    options: ["PERMIT", "ACCESS", "GRANT", "ALLOW"],
    correctAnswer: "GRANT",
    topic: "Security",
    level: "prodigy",
  },
  {
    question: "What is normalization in databases?",
    options: [
      "Compressing data",
      "Removing redundancy",
      "Increasing indexes",
      "Backing up data",
    ],
    correctAnswer: "Removing redundancy",
    topic: "Database Design",
    level: "prodigy",
  },
];
