export const fetchQuiz = async () => {
  const BASE_URL =
    import.meta.env.MODE === "development"
      ? "http://localhost:5000"
      : "https://bruhdive-an-online-quiz-platform.onrender.com";

  const url = `${BASE_URL}/api/quiz`;
  console.log(`🔗 Requesting URL: ${url}`);

  const controller = new AbortController();
  let didTimeout = false;
  const timeoutId = setTimeout(() => {
    didTimeout = true;
    controller.abort();
  }, 60000); // 60s timeout

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    const questions = Array.isArray(data) ? data : data.questions || [];

    if (!Array.isArray(questions) || questions.length === 0) {
      throw new Error("API returned invalid or empty quiz data");
    }

    const validData = questions.filter(
      (q) =>
        q &&
        q.question &&
        Array.isArray(q.options) &&
        q.options.length >= 2 &&
        q.answer
    );

    if (validData.length === 0) {
      throw new Error("No valid questions found in API response");
    }

    return validData;
  } catch (apiError) {
    if (didTimeout) {
      console.warn("⏰ API request timed out.");
    }
    console.warn("❌ API not available, using mock data instead:", apiError);

    // 🔁 Your fallback mock questions
    return [
      {
        question: "What does HTML stand for?",
        options: [
          "A) Hyper Text Markup Language",
          "B) Hyperlinks and Text Markup Language",
          "C) Home Tool Markup Language",
          "D) Hypertext Machine Language",
        ],
        answer: "A",
        explanation:
          "HTML is the standard markup language for Web pages. It defines the structure of web content using a series of elements that label content parts.",
        domain: "Web Development",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question: "What is the primary purpose of a firewall?",
        options: [
          "A) To manage network traffic",
          "B) To secure network traffic",
          "C) To monitor network traffic",
          "D) To encrypt network traffic",
        ],
        answer: "B",
        explanation:
          "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
        domain: "Cybersecurity",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question:
          "What is the main difference between a hash table and a linked list?",
        options: [
          "A) Hash tables are faster, linked lists are slower",
          "B) Hash tables are slower, linked lists are faster",
          "C) Hash tables are more memory-efficient, linked lists are less efficient",
          "D) Hash tables are more complex, linked lists are simpler",
        ],
        answer: "A",
        explanation:
          "Hash tables are designed for fast lookups and insertions, while linked lists are optimized for sequential access and efficient insertion/deletion.",
        domain: "Data Structures & Algorithms",
        difficulty: "Medium",
        skill_type: "Theory",
      },
      {
        question: "What is the primary function of a load balancer?",
        options: [
          "A) To distribute network traffic across multiple servers",
          "B) To prioritize network traffic across multiple servers",
          "C) To monitor network traffic across multiple servers",
          "D) To encrypt network traffic across multiple servers",
        ],
        answer: "A",
        explanation:
          "A load balancer is a device or software that distributes incoming network traffic across multiple servers to improve responsiveness, reliability, and scalability.",
        domain: "DevOps / Cloud",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question:
          "What is the main purpose of the Model-View-Controller (MVC) pattern?",
        options: [
          "A) To separate concerns in software development",
          "B) To improve code reusability",
          "C) To enhance user experience",
          "D) To optimize database performance",
        ],
        answer: "A",
        explanation:
          "The Model-View-Controller (MVC) pattern separates an application into three interconnected components, allowing for better organization, maintainability, and scalability.",
        domain: "Software Engineering",
        difficulty: "Medium",
        skill_type: "Theory",
      },
      {
        question: "What is the primary purpose of a database index?",
        options: [
          "A) To improve data retrieval speed",
          "B) To improve data insertion speed",
          "C) To improve data deletion speed",
          "D) To improve data modification speed",
        ],
        answer: "A",
        explanation:
          "A database index is a data structure that improves query performance by providing quick access to specific data records, reducing the time required to locate and retrieve data.",
        domain: "Database Systems",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question:
          "What is the primary purpose of a virtual private network (VPN)?",
        options: [
          "A) To secure internet connections",
          "B) To encrypt email communications",
          "C) To hide IP addresses",
          "D) To provide secure file transfers",
        ],
        answer: "A",
        explanation:
          "A virtual private network (VPN) creates a secure and encrypted connection between two endpoints, allowing users to access network resources remotely while maintaining confidentiality and integrity.",
        domain: "Cybersecurity",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question: "What is the main difference between a stack and a queue?",
        options: [
          "A) A stack is a collection of items, a queue is a single item",
          "B) A stack is a linear data structure, a queue is a non-linear data structure",
          "C) A stack is a last-in, first-out (LIFO) data structure, a queue is a first-in, first-out (FIFO) data structure",
          "D) A stack is a circular buffer, a queue is a linked list",
        ],
        answer: "C",
        explanation:
          "A stack is a LIFO data structure, where the last item added is the first one to be removed, whereas a queue is a FIFO data structure, where the first item added is the first one to be removed.",
        domain: "Data Structures & Algorithms",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question:
          "What is the primary purpose of a containerization platform like Docker?",
        options: [
          "A) To manage virtual machines",
          "B) To manage cloud infrastructure",
          "C) To manage application dependencies",
          "D) To manage containerized applications",
        ],
        answer: "D",
        explanation:
          "Docker is a containerization platform that allows developers to package, ship, and run applications in containers, providing a lightweight and portable way to deploy applications.",
        domain: "DevOps / Cloud",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question: "What is the main purpose of the Singleton pattern?",
        options: [
          "A) To create a new instance of a class each time it is used",
          "B) To ensure that only one instance of a class is created",
          "C) To provide a way to access a shared resource",
          "D) To implement a factory pattern",
        ],
        answer: "B",
        explanation:
          "The Singleton pattern ensures that only one instance of a class is created, providing a global point of access to that instance.",
        domain: "Software Engineering",
        difficulty: "Medium",
        skill_type: "Theory",
      },
      {
        question:
          "What is the primary purpose of a secure socket layer (SSL) certificate?",
        options: [
          "A) To encrypt network traffic",
          "B) To authenticate network traffic",
          "C) To validate network traffic",
          "D) To monitor network traffic",
        ],
        answer: "B",
        explanation:
          "A secure socket layer (SSL) certificate authenticates the identity of a website or server, ensuring that users are connecting to the intended destination and not an imposter.",
        domain: "Cybersecurity",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question: "What is the main purpose of the Observer pattern?",
        options: [
          "A) To provide a way to notify objects of changes",
          "B) To provide a way to request changes from objects",
          "C) To provide a way to communicate between objects",
          "D) To provide a way to synchronize objects",
        ],
        answer: "A",
        explanation:
          "The Observer pattern provides a way to notify objects of changes, allowing them to react to those changes without having a direct reference to the object that triggered the change.",
        domain: "Software Engineering",
        difficulty: "Medium",
        skill_type: "Theory",
      },
      {
        question: "What is the primary purpose of a virtual machine (VM)?",
        options: [
          "A) To run multiple operating systems on a single machine",
          "B) To run a single operating system on a single machine",
          "C) To run a lightweight operating system on a single machine",
          "D) To run a legacy operating system on a modern machine",
        ],
        answer: "A",
        explanation:
          "A virtual machine (VM) allows multiple operating systems to run on a single machine, providing a sandboxed environment for testing, development, and deployment.",
        domain: "DevOps / Cloud",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question: "What is the main purpose of the Factory pattern?",
        options: [
          "A) To create a new instance of a class each time it is used",
          "B) To ensure that only one instance of a class is created",
          "C) To provide a way to create objects without specifying the exact class of object created",
          "D) To provide a way to access a shared resource",
        ],
        answer: "C",
        explanation:
          "The Factory pattern provides a way to create objects without specifying the exact class of object created, allowing for more flexibility and decoupling in software design.",
        domain: "Software Engineering",
        difficulty: "Medium",
        skill_type: "Theory",
      },
      {
        question: "What is the primary purpose of a memory-mapped file?",
        options: [
          "A) To store data in a file",
          "B) To read data from a file",
          "C) To write data to a file",
          "D) To map a file to memory",
        ],
        answer: "D",
        explanation:
          "A memory-mapped file maps a file to memory, allowing programs to access the file's contents as if it were a contiguous block of memory.",
        domain: "Database Systems",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question: "What is the main purpose of the Repository pattern?",
        options: [
          "A) To provide a way to interact with a database",
          "B) To provide a way to encapsulate data access logic",
          "C) To provide a way to decouple data access from business logic",
          "D) To provide a way to implement data caching",
        ],
        answer: "C",
        explanation:
          "The Repository pattern provides a way to decouple data access from business logic, allowing for more flexibility and scalability in software design.",
        domain: "Software Engineering",
        difficulty: "Medium",
        skill_type: "Theory",
      },
      {
        question: "What is the primary purpose of a RESTful API?",
        options: [
          "A) To provide a way to interact with a database",
          "B) To provide a way to encapsulate data access logic",
          "C) To provide a way to expose a web service",
          "D) To provide a way to implement data caching",
        ],
        answer: "C",
        explanation:
          "A RESTful API (Representational State of Resource) provides a way to expose a web service, allowing clients to interact with a server using standard HTTP methods and a uniform interface.",
        domain: "Web Development",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question: "What is the main purpose of the Decorator pattern?",
        options: [
          "A) To extend the behavior of an object",
          "B) To modify the behavior of an object",
          "C) To encapsulate the behavior of an object",
          "D) To decouple the behavior of an object",
        ],
        answer: "A",
        explanation:
          "The Decorator pattern extends the behavior of an object, allowing developers to add new responsibilities to an object without modifying its underlying structure.",
        domain: "Software Engineering",
        difficulty: "Medium",
        skill_type: "Theory",
      },
      {
        question: "What is the primary purpose of a service mesh?",
        options: [
          "A) To manage network traffic",
          "B) To manage application dependencies",
          "C) To manage service communication",
          "D) To manage containerized applications",
        ],
        answer: "C",
        explanation:
          "A service mesh is a network of microservices that communicate with each other, providing a way to manage service communication, traffic management, and observability.",
        domain: "DevOps / Cloud",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question: "What is the main purpose of the Strategy pattern?",
        options: [
          "A) To provide a way to encapsulate a family of algorithms",
          "B) To provide a way to encapsulate a family of data structures",
          "C) To provide a way to encapsulate a family of interfaces",
          "D) To provide a way to encapsulate a family of classes",
        ],
        answer: "A",
        explanation:
          "The Strategy pattern provides a way to encapsulate a family of algorithms, allowing developers to switch between different algorithms without modifying the underlying code.",
        domain: "Software Engineering",
        difficulty: "Medium",
        skill_type: "Theory",
      },
      {
        question:
          "What is the primary purpose of a load balancer in a cloud environment?",
        options: [
          "A) To distribute network traffic across multiple servers",
          "B) To prioritize network traffic across multiple servers",
          "C) To monitor network traffic across multiple servers",
          "D) To encrypt network traffic across multiple servers",
        ],
        answer: "A",
        explanation:
          "A load balancer in a cloud environment distributes incoming network traffic across multiple servers, improving responsiveness, reliability, and scalability.",
        domain: "DevOps / Cloud",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question: "What is the main purpose of the Template Method pattern?",
        options: [
          "A) To provide a way to encapsulate a family of algorithms",
          "B) To provide a way to encapsulate a family of data structures",
          "C) To provide a way to encapsulate a family of interfaces",
          "D) To provide a way to encapsulate a family of classes",
        ],
        answer: "A",
        explanation:
          "The Template Method pattern provides a way to encapsulate a family of algorithms, allowing developers to define a skeleton algorithm and let subclasses fill in the details.",
        domain: "Software Engineering",
        difficulty: "Medium",
        skill_type: "Theory",
      },
      {
        question: "What is the primary purpose of a microkernel?",
        options: [
          "A) To provide a lightweight operating system",
          "B) To provide a robust operating system",
          "C) To provide a secure operating system",
          "D) To provide a scalable operating system",
        ],
        answer: "A",
        explanation:
          "A microkernel is a lightweight operating system that provides a minimal set of services, allowing developers to add custom components and modules to create a customized operating system.",
        domain: "DevOps / Cloud",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question: "What is the main purpose of the Visitor pattern?",
        options: [
          "A) To provide a way to encapsulate a family of algorithms",
          "B) To provide a way to encapsulate a family of data structures",
          "C) To provide a way to encapsulate a family of interfaces",
          "D) To provide a way to encapsulate a family of classes",
        ],
        answer: "B",
        explanation:
          "The Visitor pattern provides a way to encapsulate a family of data structures, allowing developers to add new operations to a class hierarchy without modifying the underlying classes.",
        domain: "Software Engineering",
        difficulty: "Medium",
        skill_type: "Theory",
      },
      {
        question: "What is the primary purpose of a Kubernetes cluster?",
        options: [
          "A) To manage containerized applications",
          "B) To manage virtual machines",
          "C) To manage cloud infrastructure",
          "D) To manage network traffic",
        ],
        answer: "A",
        explanation:
          "A Kubernetes cluster is a managed environment for running containerized applications, providing orchestration, deployment, and scaling capabilities.",
        domain: "DevOps / Cloud",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question: "What is the main purpose of the Adapter pattern?",
        options: [
          "A) To provide a way to encapsulate a family of algorithms",
          "B) To provide a way to encapsulate a family of data structures",
          "C) To provide a way to encapsulate a family of interfaces",
          "D) To provide a way to adapt one interface to another",
        ],
        answer: "D",
        explanation:
          "The Adapter pattern provides a way to adapt one interface to another, allowing developers to integrate different components and systems that were not designed to work together.",
        domain: "Software Engineering",
        difficulty: "Medium",
        skill_type: "Theory",
      },
      {
        question: "What is the primary purpose of a WebAssembly module?",
        options: [
          "A) To provide a way to run JavaScript code in a browser",
          "B) To provide a way to run native code in a browser",
          "C) To provide a way to run machine code in a browser",
          "D) To provide a way to run compiled code in a browser",
        ],
        answer: "D",
        explanation:
          "A WebAssembly module is a compiled binary that can be run in a browser, providing a way to run compiled code in a web environment.",
        domain: "Web Development",
        difficulty: "Easy",
        skill_type: "Theory",
      },
      {
        question: "What is the main purpose of the Observer pattern?",
        options: [
          "A) To provide a way to encapsulate a family of algorithms",
          "B) To provide a way to encapsulate a family of data structures",
          "C) To provide a way to encapsulate a family of interfaces",
          "D) To provide a way to notify objects of changes",
        ],
        answer: "D",
        explanation:
          "The Observer pattern provides a way to notify objects of changes, allowing them to react to those changes without having a direct reference to the object that triggered the change.",
        domain: "Software Engineering",
        difficulty: "Medium",
        skill_type: "Theory",
      },
      {
        question: "What is the primary purpose of a container registry?",
        options: [
          "A) To manage containerized applications",
          "B) To manage virtual machines",
          "C) To manage cloud infrastructure",
          "D) To manage container images",
        ],
        answer: "D",
        explanation:
          "A container registry is a centralized repository for storing and managing container images, providing a way to distribute and share containerized applications.",
        domain: "DevOps / Cloud",
        difficulty: "Easy",
        skill_type: "Theory",
      },
    ];
  } finally {
    console.log("📦 Quiz fetch operation completed");
  }
};
