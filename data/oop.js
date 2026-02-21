// Object Oriented Programming with Java — Question Bank
// Source: CSVTU B.Tech 4th Sem PYQ Papers (2021-AM, 2022-AM, 2023-AM, 2024-AM, 2024-ND, 2025-AM)
// Course Code: B022414(022) | Branch: CSE | Credits: 3
// Total questions: 84 | Units: 5
// Backup of previous data: data/oop.js.bak

const questionDatabase = {

  // 
  //  UNIT I — INTRODUCTION & FUNDAMENTALS OF JAVA
  // 
  unit1: {
    name: "INTRODUCTION & FUNDAMENTALS OF JAVA",
    subtopics: {

      "1.1": {
        name: "Java Architecture, JVM & Platform Independence",
        questions: [
          { id: "Q1.1.1", text: "Describe java architecture.", frequency: 1, marks: 4, years: ["2025(AM)"], priority: "high" },
          { id: "Q1.1.2", text: "What is Java Machine (JVM)? Explain its architecture.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "high" },
          { id: "Q1.1.3", text: "What is JVM? Also explain the role of Garbage Collector with suitable program.", frequency: 1, marks: 8, years: ["2021(AM)"], priority: "high" },
          { id: "Q1.1.4", text: "Explain the following: (a) JAVA Architecture (b) JAVA fundamental and background.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "medium" },
          { id: "Q1.1.5", text: "How Java is platform independent?", frequency: 1, marks: 4, years: ["2024(AM)"], priority: "high" },
          { id: "Q1.1.6", text: "Give the name of top class of all the classes in Java and the top package which is the default package.", frequency: 1, marks: 4, years: ["2021(AM)"], priority: "medium" }
        ]
      },

      "1.2": {
        name: "Java Features, Background & Java vs C++",
        questions: [
          { id: "Q1.2.1", text: "Explain the features of Java.", frequency: 1, marks: 8, years: ["2022(AM)"], priority: "high" },
          { id: "Q1.2.2", text: "Compare Java and C++.", frequency: 1, marks: 4, years: ["2022(AM)"], priority: "medium" },
          { id: "Q1.2.3", text: "Give any 4 differences between C++ and Java.", frequency: 1, marks: 4, years: ["2023(AM)"], priority: "medium" },
          { id: "Q1.2.4", text: "Java is not a 100% pure object oriented programming language. Explain with suitable example.", frequency: 2, marks: 8, years: ["2021(AM)", "2024(AM)"], priority: "high" },
          { id: "Q1.2.5", text: "How do you set up the environment in Java?", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "low" }
        ]
      },

      "1.3": {
        name: "Static Members & this Keyword",
        questions: [
          { id: "Q1.3.1", text: "Describe the use of static member in JAVA.", frequency: 1, marks: 4, years: ["2024(ND)"], priority: "high" },
          { id: "Q1.3.2", text: "Explain static members in Java with proper example.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "high" },
          { id: "Q1.3.3", text: "Explain static and this keyword with suitable example.", frequency: 1, marks: 8, years: ["2022(AM)"], priority: "high" },
          { id: "Q1.3.4", text: "Why we use this method and reference? Explain with suitable JAVA program.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "medium" }
        ]
      },

      "1.4": {
        name: "Java Tokens, Variables & Statements",
        questions: [
          { id: "Q1.4.1", text: "Define java token. Explain various statements defined in Java with example.", frequency: 1, marks: 8, years: ["2025(AM)"], priority: "medium" },
          { id: "Q1.4.2", text: "Explain Local, Instance and static variable with suitable example.", frequency: 1, marks: 8, years: ["2025(AM)"], priority: "medium" }
        ]
      },

      "1.5": {
        name: "Constructors",
        questions: [
          { id: "Q1.5.1", text: "Explain Constructors in Java with the help of example.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "high" },
          { id: "Q1.5.2", text: "Define constructor. Explain types of constructor using example.", frequency: 1, marks: 8, years: ["2022(AM)"], priority: "high" },
          { id: "Q1.5.3", text: "Define and describe the role of constructor and also explain copy constructor.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" },
          { id: "Q1.5.4", text: "Write a program to implement a constructor in Java.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q1.5.5", text: "Write a program taking input from user (1 to 3): (i) If input is 1, call the default constructor. (ii) If input is 2, call the constructor with one integer parameter. (iii) If input is 3, call the constructor with one String parameter.", frequency: 1, marks: 8, years: ["2021(AM)"], priority: "medium" }
        ]
      },

      "1.6": {
        name: "Arrays & Console Input",
        questions: [
          { id: "Q1.6.1", text: "How to take reading from console inputs. Explain with example.", frequency: 1, marks: 8, years: ["2025(AM)"], priority: "medium" }
        ]
      }

    }
  },

  // 
  //  UNIT II — OOP CONCEPTS
  // 
  unit2: {
    name: "OOP CONCEPTS (Classes, Inheritance, Exception Handling, Packages)",
    subtopics: {

      "2.1": {
        name: "Concrete Class, Abstract Class & Interface",
        questions: [
          { id: "Q2.1.1", text: "Describe Concrete class.", frequency: 1, marks: 4, years: ["2025(AM)"], priority: "medium" },
          { id: "Q2.1.2", text: "Compare concrete and abstract class.", frequency: 1, marks: 4, years: ["2024(ND)"], priority: "high" },
          { id: "Q2.1.3", text: "What is abstract class? Write a program to implement abstract class in Java.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q2.1.4", text: "Differentiate interface and abstract class.", frequency: 4, marks: 8, years: ["2025(AM)", "2022(AM)", "2021(AM)", "2023(AM)"], priority: "high" },
          { id: "Q2.1.5", text: "Explain Abstract Class and Interface with suitable example.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "high" },
          { id: "Q2.1.6", text: "Explain the following: (i) Inner Class (ii) Method overloading.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "medium" }
        ]
      },

      "2.2": {
        name: "Inheritance, Aggregation & super Keyword",
        questions: [
          { id: "Q2.2.1", text: "Give uses of super in Java.", frequency: 1, marks: 4, years: ["2021(AM)"], priority: "medium" },
          { id: "Q2.2.2", text: "Write a JAVA program to explain super method and reference.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "medium" },
          { id: "Q2.2.3", text: "Find the output of the two following code snippets: (i) A class with try-catch-finally and arithmetic operations. (ii) A class using private methods m1(), m2(), m3() with try-catch-ArithmeticException.", frequency: 1, marks: 8, years: ["2021(AM)"], priority: "low" }
        ]
      },

      "2.3": {
        name: "Method Overloading & Overriding",
        questions: [
          { id: "Q2.3.1", text: "Write down any 4 differences between method overloading and overriding.", frequency: 1, marks: 4, years: ["2023(AM)"], priority: "high" },
          { id: "Q2.3.2", text: "What is the difference between method overloading and overriding?", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q2.3.3", text: "Differentiate between method overloading and method overriding with example.", frequency: 1, marks: 8, years: ["2022(AM)"], priority: "high" }
        ]
      },

      "2.4": {
        name: "Exception Handling (try, catch, throws, finally)",
        questions: [
          { id: "Q2.4.1", text: "Explain checked and unchecked exceptions in Java and demonstrate them using a Java program.", frequency: 1, marks: 8, years: ["2025(AM)"], priority: "high" },
          { id: "Q2.4.2", text: "Explain the use of try, catch, throws and finally with proper example.", frequency: 1, marks: 8, years: ["2025(AM)"], priority: "high" },
          { id: "Q2.4.3", text: "Explain the concept of exception handling with suitable JAVA program.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" },
          { id: "Q2.4.4", text: "Explain Exception-Handling in Java. Give one example for user defined exception.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "high" },
          { id: "Q2.4.5", text: "Demonstrate arithmetic exception in Java.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "medium" },
          { id: "Q2.4.6", text: "Write a program in Java to demonstrate user throw. Also explain checked and unchecked exception.", frequency: 1, marks: 8, years: ["2021(AM)"], priority: "high" },
          { id: "Q2.4.7", text: "Create a user defined exception class which throws an exception when the user inputs marks greater than 100.", frequency: 1, marks: 8, years: ["2022(AM)"], priority: "high" },
          { id: "Q2.4.8", text: "Which one is the master class of exceptions?", frequency: 1, marks: 4, years: ["2021(AM)"], priority: "medium" }
        ]
      },

      "2.5": {
        name: "Singleton Class",
        questions: [
          { id: "Q2.5.1", text: "Discuss about Singleton Class in Java using example.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "medium" },
          { id: "Q2.5.2", text: "What is singleton class in Java?", frequency: 1, marks: 4, years: ["2024(AM)"], priority: "medium" }
        ]
      },

      "2.6": {
        name: "Packages",
        questions: [
          { id: "Q2.6.1", text: "Write a Java Program to demonstrate how packages can be created, imported and used.", frequency: 1, marks: 8, years: ["2022(AM)"], priority: "medium" }
        ]
      }

    }
  },

  // 
  //  UNIT III — STRING, WRAPPER CLASSES, THREADING & I/O
  // 
  unit3: {
    name: "STRING, WRAPPER CLASSES, MULTI-THREADING & JAVA I/O",
    subtopics: {

      "3.1": {
        name: "String, StringBuffer & StringBuilder",
        questions: [
          { id: "Q3.1.1", text: "Differentiate between String and StringBuilder. Briefly explain String class methods.", frequency: 1, marks: 8, years: ["2025(AM)"], priority: "high" },
          { id: "Q3.1.2", text: "Compare String and StringBuilder.", frequency: 1, marks: 4, years: ["2022(AM)"], priority: "high" },
          { id: "Q3.1.3", text: "Explain String and StringBuffer class. What is mutable and immutable in Java?", frequency: 1, marks: 8, years: ["2021(AM)"], priority: "high" },
          { id: "Q3.1.4", text: "What is mutable and immutable in Java? Also explain String and StringBuffer class.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "high" }
        ]
      },

      "3.2": {
        name: "Wrapper Classes",
        questions: [
          { id: "Q3.2.1", text: "What are the different types of wrapper classes in Java?", frequency: 1, marks: 4, years: ["2025(AM)"], priority: "high" },
          { id: "Q3.2.2", text: "What is a wrapper class?", frequency: 1, marks: 4, years: ["2024(AM)"], priority: "high" },
          { id: "Q3.2.3", text: "Define and explain Wrapper class and String class with JAVA program.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" }
        ]
      },

      "3.3": {
        name: "Multi-threading (Thread Creation & Lifecycle)",
        questions: [
          { id: "Q3.3.1", text: "What is multithreading?", frequency: 1, marks: 4, years: ["2023(AM)"], priority: "medium" },
          { id: "Q3.3.2", text: "Explain the life cycle of a thread. In how many ways can a thread be created in Java? Explain with example.", frequency: 1, marks: 8, years: ["2022(AM)"], priority: "high" },
          { id: "Q3.3.3", text: "Write a program to create a thread using Runnable interface.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "high" }
        ]
      },

      "3.4": {
        name: "Thread Synchronization & Thread Class Methods",
        questions: [
          { id: "Q3.4.1", text: "Explain thread synchronization with example.", frequency: 1, marks: 8, years: ["2025(AM)"], priority: "high" },
          { id: "Q3.4.2", text: "What is synchronization in Java? Explain using suitable examples.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "high" },
          { id: "Q3.4.3", text: "Define synchronization. Explain the use of synchronization method with example.", frequency: 1, marks: 8, years: ["2022(AM)"], priority: "high" },
          { id: "Q3.4.4", text: "Describe Thread Synchronization and Thread class methods using suitable example.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" }
        ]
      },

      "3.5": {
        name: "Thread Priority, Lock, Daemon & Inter-Thread Communication",
        questions: [
          { id: "Q3.5.1", text: "Explain the concept of Lock in Java. Also explain Thread Priority.", frequency: 1, marks: 8, years: ["2021(AM)"], priority: "medium" },
          { id: "Q3.5.2", text: "Explain Inter Thread Communication. What is Daemon Thread?", frequency: 1, marks: 8, years: ["2021(AM)"], priority: "medium" }
        ]
      },

      "3.6": {
        name: "Java I/O (InputStream, OutputStream, Reader, Writer)",
        questions: [
          { id: "Q3.6.1", text: "Show the use of InputStream and OutputStream classes.", frequency: 1, marks: 8, years: ["2025(AM)"], priority: "high" },
          { id: "Q3.6.2", text: "Compare the use of InputStream and OutputStream.", frequency: 1, marks: 4, years: ["2024(ND)"], priority: "high" },
          { id: "Q3.6.3", text: "Explain InputStream and OutputStream in detail with suitable example.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q3.6.4", text: "Explain Byte streams and Character streams with suitable Java program.", frequency: 1, marks: 8, years: ["2022(AM)"], priority: "medium" },
          { id: "Q3.6.5", text: "Write a JAVA program to explain the concept of reading and writing data from/to disk.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "medium" },
          { id: "Q3.6.6", text: "Write a program to demonstrate reading and writing to files in Java.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "medium" },
          { id: "Q3.6.7", text: "Explain the following: (i) Reader Class (ii) Writer Class.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "medium" }
        ]
      }

    }
  },

  // 
  //  UNIT IV — AWT, SWING, APPLETS, JDBC & NETWORKING
  // 
  unit4: {
    name: "AWT, SWING, APPLETS, JDBC & JAVA NETWORKING",
    subtopics: {

      "4.1": {
        name: "AWT & Swing Components",
        questions: [
          { id: "Q4.1.1", text: "Write the differences between Swing and AWT components.", frequency: 1, marks: 4, years: ["2022(AM)"], priority: "high" },
          { id: "Q4.1.2", text: "Explain AWT in Java.", frequency: 1, marks: 4, years: ["2023(AM)"], priority: "high" },
          { id: "Q4.1.3", text: "What is AWT?", frequency: 1, marks: 4, years: ["2021(AM)"], priority: "medium" },
          { id: "Q4.1.4", text: "Explain different AWT and SWING tools with suitable example.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" }
        ]
      },

      "4.2": {
        name: "Event Delegation Model & Listeners",
        questions: [
          { id: "Q4.2.1", text: "Explain Event Delegation Model in Java with suitable example.", frequency: 4, marks: 8, years: ["2025(AM)", "2022(AM)", "2023(AM)", "2021(AM)"], priority: "high" },
          { id: "Q4.2.2", text: "Explain the following listeners in Java: (i) ActionListener (ii) ContainerListener (iii) FocusListener (iv) ItemListener.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "medium" },
          { id: "Q4.2.3", text: "Write a JAVA program demonstrating: (ii) ActionListener and ContainerListener.", frequency: 1, marks: 4, years: ["2024(ND)"], priority: "medium" }
        ]
      },

      "4.3": {
        name: "Layout Manager",
        questions: [
          { id: "Q4.3.1", text: "Explain layout manager. Also give example of any one layout.", frequency: 1, marks: 8, years: ["2025(AM)"], priority: "medium" }
        ]
      },

      "4.4": {
        name: "Applets",
        questions: [
          { id: "Q4.4.1", text: "Explain applet tag with all its attributes in detail. Write a program in Java to create a user form.", frequency: 1, marks: 4, years: ["2024(AM)"], priority: "high" },
          { id: "Q4.4.2", text: "Define and describe Applet.", frequency: 1, marks: 4, years: ["2024(ND)"], priority: "high" },
          { id: "Q4.4.3", text: "Explain the life cycle of Applet using diagram.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "high" },
          { id: "Q4.4.4", text: "Write a program to add 2 numbers using Applet.", frequency: 1, marks: 8, years: ["2021(AM)"], priority: "medium" }
        ]
      },

      "4.5": {
        name: "JDBC (Types of Drivers)",
        questions: [
          { id: "Q4.5.1", text: "What is JDBC? Explain the types of Drivers in JDBC (Type 1 to Type 4).", frequency: 4, marks: 8, years: ["2025(AM)", "2022(AM)", "2023(AM)", "2021(AM)"], priority: "high" },
          { id: "Q4.5.2", text: "Write a JAVA program for Type 1 to Type 4 JDBC Drivers.", frequency: 1, marks: 4, years: ["2024(ND)"], priority: "medium" }
        ]
      },

      "4.6": {
        name: "Java Networking (Sockets, RMI, URL)",
        questions: [
          { id: "Q4.6.1", text: "What is RMI?", frequency: 1, marks: 4, years: ["2025(AM)"], priority: "low" },
          { id: "Q4.6.2", text: "Write a JAVA program to explain ServerSocket.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" },
          { id: "Q4.6.3", text: "Explain Server Socket with the help of example.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "high" },
          { id: "Q4.6.4", text: "Define sockets. Write a program to demonstrate simple TCP client-server interaction.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q4.6.5", text: "Write a Java Program to see the port number and protocol name of a given URL.", frequency: 1, marks: 8, years: ["2022(AM)"], priority: "medium" },
          { id: "Q4.6.6", text: "Write a program using InetAddress class and show the utility of URL and URLConnection classes.", frequency: 1, marks: 8, years: ["2021(AM)"], priority: "medium" },
          { id: "Q4.6.7", text: "What is the functioning of whois?", frequency: 1, marks: 4, years: ["2021(AM)"], priority: "low" }
        ]
      }

    }
  },

  // 
  //  UNIT V — COLLECTIONS, GENERICS & JAR
  // 
  unit5: {
    name: "COLLECTIONS FRAMEWORK, GENERICS & JAR",
    subtopics: {

      "5.1": {
        name: "Collections Framework Overview",
        questions: [
          { id: "Q5.1.1", text: "What do you understand by Java Collection Framework?", frequency: 1, marks: 4, years: ["2023(AM)"], priority: "high" },
          { id: "Q5.1.2", text: "Explain the collection framework with suitable examples.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" }
        ]
      },

      "5.2": {
        name: "List Interface (ArrayList, LinkedList, Vector)",
        questions: [
          { id: "Q5.2.1", text: "Describe ArrayList with example.", frequency: 1, marks: 4, years: ["2025(AM)"], priority: "high" },
          { id: "Q5.2.2", text: "What is LinkedList? Give the difference between ArrayList and LinkedList.", frequency: 1, marks: 8, years: ["2025(AM)"], priority: "high" },
          { id: "Q5.2.3", text: "Explain: (i) ArrayList (ii) LinkedList.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "high" },
          { id: "Q5.2.4", text: "Explain the following in nutshell: (i) HashSet (ii) TreeSet (iii) ArrayList (iv) LinkedList.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "high" }
        ]
      },

      "5.3": {
        name: "Set Interface (HashSet, TreeSet)",
        questions: [
          { id: "Q5.3.1", text: "Define HashSet and TreeSet.", frequency: 1, marks: 4, years: ["2022(AM)"], priority: "medium" },
          { id: "Q5.3.2", text: "Write the use of HashSet and Hashtable class.", frequency: 1, marks: 4, years: ["2024(ND)"], priority: "medium" }
        ]
      },

      "5.4": {
        name: "Map Interface (HashMap, Hashtable, TreeMap)",
        questions: [
          { id: "Q5.4.1", text: "Write a program using the concept of HashMap.", frequency: 1, marks: 8, years: ["2022(AM)"], priority: "high" },
          { id: "Q5.4.2", text: "Explain Hashtable class in Java with example.", frequency: 1, marks: 8, years: ["2022(AM)"], priority: "medium" },
          { id: "Q5.4.3", text: "Differentiate between HashMap and Hashtable.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q5.4.4", text: "How do you retrieve all keys present in a HashMap?", frequency: 2, marks: 8, years: ["2021(AM)", "2023(AM)"], priority: "high" }
        ]
      },

      "5.5": {
        name: "Generics in Java",
        questions: [
          { id: "Q5.5.1", text: "Explain Generics class in Java.", frequency: 1, marks: 8, years: ["2025(AM)"], priority: "high" },
          { id: "Q5.5.2", text: "Explain generic using classes and generic types in Java.", frequency: 1, marks: 8, years: ["2022(AM)"], priority: "high" },
          { id: "Q5.5.3", text: "What are generic classes? What is the purpose of generic classes in Java?", frequency: 1, marks: 4, years: ["2024(AM)"], priority: "high" },
          { id: "Q5.5.4", text: "Explain with code the concept of Generic classes and methods.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" }
        ]
      },

      "5.6": {
        name: "Executable JAR Files (Java Archives)",
        questions: [
          { id: "Q5.6.1", text: "What are the steps to creating and running an executable JAR?", frequency: 1, marks: 8, years: ["2025(AM)"], priority: "high" },
          { id: "Q5.6.2", text: "Write a JAVA program to create and execute JAVA Archives (JAR).", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" },
          { id: "Q5.6.3", text: "What is a JAR file? How to create and execute a JAR file in Java.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q5.6.4", text: "Write the steps of creating and running executable JAR files in Java.", frequency: 1, marks: 8, years: ["2021(AM)"], priority: "high" }
        ]
      }

    }
  }

};
