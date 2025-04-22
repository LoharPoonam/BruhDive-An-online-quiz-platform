export const sqlQuestionsFour = [
  // 🛧 Noob Mode
  {
    // 1
    question: "Which SQL clause sorts the result-set?",
    options: ["GROUP BY", "SORT BY", "ORDER BY", "RANK BY"],
    correctAnswer: "ORDER BY",
    topic: "Sorting",
    level: "newbie",
  },
  {
    // 2
    question: "Which command creates a new table?",
    options: ["CREATE TABLE", "MAKE TABLE", "NEW TABLE", "INIT TABLE"],
    correctAnswer: "CREATE TABLE",
    topic: "DDL",
    level: "newbie",
  },
  {
    // 3
    question: "What symbol is used for comments in SQL?",
    options: ["#", "--", "//", "/* */"],
    correctAnswer: "--",
    topic: "Syntax",
    level: "newbie",
  },
  {
    // 4
    question: "Which keyword returns all records, including duplicates?",
    options: ["UNIQUE", "ALL", "EVERY", "REPEAT"],
    correctAnswer: "ALL",
    topic: "Filtering",
    level: "newbie",
  },

  // 👶 Newbie
  {
    // 5
    question: "Which function finds the minimum value in a column?",
    options: ["MIN()", "LOWEST()", "LEAST()", "BOTTOM()"],
    correctAnswer: "MIN()",
    topic: "Aggregation",
    level: "beginner",
  },
  {
    // 6
    question: "Which SQL clause groups rows that have the same values?",
    options: ["ORDER BY", "GROUP BY", "CLUSTER BY", "PARTITION BY"],
    correctAnswer: "GROUP BY",
    topic: "Grouping",
    level: "beginner",
  },
  {
    // 7
    question: "Which keyword updates existing data in a table?",
    options: ["CHANGE", "MODIFY", "UPDATE", "EDIT"],
    correctAnswer: "UPDATE",
    topic: "DML",
    level: "beginner",
  },
  {
    // 8
    question: "Which data type is used to store text?",
    options: ["VARCHAR", "INT", "NUMERIC", "FLOAT"],
    correctAnswer: "VARCHAR",
    topic: "Data Types",
    level: "beginner",
  },
  {
    // 9
    question: "Which clause filters rows after grouping?",
    options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"],
    correctAnswer: "HAVING",
    topic: "Grouping",
    level: "beginner",
  },

  // 🚀 Intermediate
  {
    // 10
    question: "Which JOIN includes all records from both tables?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL OUTER JOIN"],
    correctAnswer: "FULL OUTER JOIN",
    topic: "Joins",
    level: "intermediate",
  },
  {
    // 11
    question: "Which SQL clause is used to rename a column in the output?",
    options: ["CHANGE", "RENAME", "AS", "SET"],
    correctAnswer: "AS",
    topic: "Aliasing",
    level: "intermediate",
  },
  {
    // 12
    question: "Which function returns the largest value in a column?",
    options: ["LARGEST()", "MAX()", "TOP()", "GREATEST()"],
    correctAnswer: "MAX()",
    topic: "Aggregation",
    level: "intermediate",
  },
  {
    // 13
    question: "Which constraint uniquely identifies each row in a table?",
    options: ["FOREIGN KEY", "PRIMARY KEY", "UNIQUE", "INDEX"],
    correctAnswer: "PRIMARY KEY",
    topic: "Constraints",
    level: "intermediate",
  },
  {
    // 14
    question: "Which keyword adds a new column to an existing table?",
    options: ["INSERT COLUMN", "ADD", "UPDATE", "ALTER"],
    correctAnswer: "ALTER",
    topic: "DDL",
    level: "intermediate",
  },

  // 🧠 Advanced
  {
    // 15
    question: "Which SQL function returns the length of a string?",
    options: ["SIZE()", "LENGTH()", "STRLEN()", "LEN()"],
    correctAnswer: "LENGTH()",
    topic: "Functions",
    level: "advanced",
  },
  {
    // 16
    question: "Which keyword ensures a column can't be left empty?",
    options: ["NOT EMPTY", "NOT NULL", "MANDATORY", "REQUIRED"],
    correctAnswer: "NOT NULL",
    topic: "Constraints",
    level: "advanced",
  },
  {
    // 17
    question: "Which clause allows subqueries in a condition?",
    options: ["IF", "EXISTS", "CHECK", "VERIFY"],
    correctAnswer: "EXISTS",
    topic: "Subqueries",
    level: "advanced",
  },
  {
    // 18
    question: "Which data type is best for storing large text?",
    options: ["VARCHAR", "CHAR", "TEXT", "LONGTEXT"],
    correctAnswer: "TEXT",
    topic: "Data Types",
    level: "advanced",
  },
  {
    // 19
    question: "Which statement removes a table completely?",
    options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
    correctAnswer: "DROP",
    topic: "DDL",
    level: "advanced",
  },

  // 👑 Prodigy
  {
    // 20
    question: "What is a foreign key used for?",
    options: [
      "Uniquely identify records",
      "Reference primary key in another table",
      "Auto-increment ID",
      "Generate backup",
    ],
    correctAnswer: "Reference primary key in another table",
    topic: "Relationships",
    level: "prodigy",
  },
  {
    // 21
    question: "Which SQL keyword returns a limited number of records?",
    options: ["SHOW", "LIMIT", "TOP", "ROWNUM"],
    correctAnswer: "LIMIT",
    topic: "Filtering",
    level: "prodigy",
  },
  {
    // 22
    question: "Which type of subquery returns multiple rows?",
    options: ["Scalar", "Multi-row", "Inline", "Static"],
    correctAnswer: "Multi-row",
    topic: "Subqueries",
    level: "prodigy",
  },
  {
    // 23
    question: "What is the purpose of indexing in SQL?",
    options: [
      "Backup data",
      "Reduce memory usage",
      "Speed up search queries",
      "Sort records",
    ],
    correctAnswer: "Speed up search queries",
    topic: "Performance",
    level: "prodigy",
  },
  {
    // 24
    question: "Which clause allows creating virtual columns in a result?",
    options: ["JOIN", "AS", "WITH", "VIEW"],
    correctAnswer: "AS",
    topic: "Aliasing",
    level: "prodigy",
  },
  {
    // 25
    question: "Which SQL command is used to create an index on a table?",
    options: ["MAKE INDEX", "BUILD INDEX", "CREATE INDEX", "ADD INDEX"],
    correctAnswer: "CREATE INDEX",
    topic: "Performance",
    level: "prodigy",
  },
];
