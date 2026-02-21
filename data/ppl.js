// Principles of Programming Languages — Question Bank
// Source: CSVTU B.Tech 3rd Sem PYQ Papers (2020-ND, 2021-AM, 2021-ND, 2022-AM, 2022-ND, 2023-AM, 2023-ND, 2024-AM, 2024-ND)
// Course Code: B022313(022) | Branch: CSE | Credits: 3 | Semester: 3rd
// Total questions: 125 | Units: 5
// Backup of previous data: data/ppl.js.bak

const questionDatabase = {

  //
  //  UNIT I — PROGRAM DESIGN
  //
  unit1: {
    name: "PROGRAM DESIGN",
    subtopics: {

      "1.1": {
        name: "Modules & Modularization",
        questions: [
          { id: "Q1.1.1", text: "What are the modules and modularization criteria for a programming language?", frequency: 4, marks: 4, years: ["2021(AM)", "2021(ND)"], priority: "high" },
          { id: "Q1.1.2", text: "Describe modules and modularization criteria in detail.", frequency: 4, marks: 10, years: ["2022(AM)"], priority: "high" },
          { id: "Q1.1.3", text: "Explain module and modularization criteria in brief.", frequency: 4, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q1.1.4", text: "Discuss various modularization criteria for breaking down a program into modules. Provide examples to illustrate your points.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" },
          { id: "Q1.1.5", text: "Define modularity. Explain cohesion with diagram.", frequency: 1, marks: 8, years: ["2023(ND)"], priority: "high" },
          { id: "Q1.1.6", text: "Write about various program designing concepts in detail.", frequency: 1, marks: 8, years: ["2022(ND)"], priority: "medium" },
          { id: "Q1.1.7", text: "Explain fundamentals of design concepts in detail.", frequency: 1, marks: 8, years: ["2023(ND)"], priority: "medium" }
        ]
      },

      "1.2": {
        name: "Design Notation, Pseudo Code & Flowcharts",
        questions: [
          { id: "Q1.2.1", text: "Explain Pseudo code and flow chart with example.", frequency: 2, marks: 8, years: ["2021(ND)", "2023(ND)"], priority: "high" },
          { id: "Q1.2.2", text: "Define pseudo code with example.", frequency: 2, marks: 4, years: ["2024(AM)"], priority: "high" },
          { id: "Q1.2.3", text: "What do you mean by design notation? Explain Pseudo code with example.", frequency: 1, marks: 8, years: ["2023(ND)"], priority: "high" },
          { id: "Q1.2.4", text: "What is Flowchart? Explain flowchart in detail with suitable diagram.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "high" },
          { id: "Q1.2.5", text: "What are structured flow chart decisions? Do they differ from pseudo code?", frequency: 1, marks: 8, years: ["2021(AM)"], priority: "medium" },
          { id: "Q1.2.6", text: "What is structured flowchart? Briefly explain the logic behind each step.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "medium" },
          { id: "Q1.2.7", text: "Write short notes on: Structured flow chart and Decision table.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "medium" }
        ]
      },

      "1.3": {
        name: "Levels of Abstraction & Stepwise Refinement",
        questions: [
          { id: "Q1.3.1", text: "Explain levels of abstraction.", frequency: 2, marks: 8, years: ["2021(AM)", "2021(ND)"], priority: "high" },
          { id: "Q1.3.2", text: "Define abstraction along with its levels.", frequency: 1, marks: 10, years: ["2022(AM)"], priority: "high" },
          { id: "Q1.3.3", text: "Explain the concept of levels of abstraction in program design and illustrate how it contributes to maintainability and flexibility. Provide an example.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" },
          { id: "Q1.3.4", text: "Explain stepwise refinement design technique.", frequency: 1, marks: 8, years: ["2021(ND)"], priority: "medium" },
          { id: "Q1.3.5", text: "Explain: (i) Abstraction (ii) Refinement (iii) Modularity (iv) Software Architecture.", frequency: 1, marks: 8, years: ["2020(ND)"], priority: "medium" },
          { id: "Q1.3.6", text: "What are the design techniques for programming language?", frequency: 2, marks: 8, years: ["2023(AM)", "2024(AM)"], priority: "medium" },
          { id: "Q1.3.7", text: "Compare top-down and bottom-up approaches in program design.", frequency: 1, marks: 4, years: ["2024(ND)"], priority: "medium" }
        ]
      },

      "1.4": {
        name: "DFD & Program Design Techniques",
        questions: [
          { id: "Q1.4.1", text: "Explain DFD: (i) Definition, purpose and symbols used. (ii) Purpose of Level-0 and Level-1 DFD.", frequency: 2, marks: 8, years: ["2020(ND)", "2022(ND)"], priority: "medium" },
          { id: "Q1.4.2", text: "Define external design and explain it in brief.", frequency: 1, marks: 4, years: ["2023(ND)"], priority: "low" },
          { id: "Q1.4.3", text: "What is a Program and Algorithm?", frequency: 1, marks: 4, years: ["2023(AM)"], priority: "low" },
          { id: "Q1.4.4", text: "Describe various program design techniques.", frequency: 1, marks: 8, years: ["2022(ND)"], priority: "medium" }
        ]
      },

      "1.5": {
        name: "Test Plans & Software Testing",
        questions: [
          { id: "Q1.5.1", text: "What are test plans? Also write its types.", frequency: 1, marks: 4, years: ["2021(AM)"], priority: "high" },
          { id: "Q1.5.2", text: "Describe the test plan design guidelines.", frequency: 1, marks: 10, years: ["2022(AM)"], priority: "high" },
          { id: "Q1.5.3", text: "Write short notes on (any two): (i) Unit test (ii) Module test (iii) Sub-system test.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "medium" },
          { id: "Q1.5.4", text: "Define software testing and its types.", frequency: 1, marks: 4, years: ["2022(ND)"], priority: "medium" },
          { id: "Q1.5.5", text: "Explain: (i) Operational Acceptance Testing (ii) Alpha Testing (iii) Beta Testing (iv) Software Maintenance phase.", frequency: 1, marks: 8, years: ["2020(ND)"], priority: "low" }
        ]
      },

      "1.6": {
        name: "Software Development Models",
        questions: [
          { id: "Q1.6.1", text: "(i) Draw the diagram of Waterfall model and Prototyping model. (ii) Compare Waterfall model and Prototyping model.", frequency: 1, marks: 8, years: ["2020(ND)"], priority: "low" },
          { id: "Q1.6.2", text: "(i) Draw the Scrum Development Model. (ii) Explain the components of Scrum Development Model.", frequency: 1, marks: 8, years: ["2020(ND)"], priority: "low" }
        ]
      }

    }
  },

  //
  //  UNIT II — PROGRAMMING LANGUAGE PROCESSORS
  //
  unit2: {
    name: "PROGRAMMING LANGUAGE PROCESSORS",
    subtopics: {

      "2.1": {
        name: "Characteristics & Evolution of Programming Languages",
        questions: [
          { id: "Q2.1.1", text: "What are the characteristics of a good programming language?", frequency: 3, marks: 4, years: ["2021(AM)", "2021(ND)"], priority: "high" },
          { id: "Q2.1.2", text: "Describe the various characteristics of programming languages.", frequency: 3, marks: 10, years: ["2022(AM)"], priority: "high" },
          { id: "Q2.1.3", text: "Write and explain eight characteristics of programming language.", frequency: 3, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q2.1.4", text: "Explain various characteristics of a programming language in detail.", frequency: 3, marks: 8, years: ["2022(ND)"], priority: "high" },
          { id: "Q2.1.5", text: "Discuss the factors influencing the evolution of programming languages.", frequency: 3, marks: 8, years: ["2021(AM)", "2021(ND)", "2022(ND)"], priority: "high" },
          { id: "Q2.1.6", text: "Explain the factors influencing the evaluation of programming languages.", frequency: 3, marks: 8, years: ["2024(ND)"], priority: "high" },
          { id: "Q2.1.7", text: "Discuss the challenges and benefits of developing new programming languages in an existing landscape dominated by established languages.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "medium" },
          { id: "Q2.1.8", text: "Compare major paradigms of programming languages. Also provide an example of each.", frequency: 1, marks: 4, years: ["2024(ND)"], priority: "medium" },
          { id: "Q2.1.9", text: "Describe various desirable features and design issues related with programming language processors.", frequency: 1, marks: 8, years: ["2022(ND)"], priority: "medium" }
        ]
      },

      "2.2": {
        name: "Translators (Compiler, Interpreter, Assembler, Linker, Loader)",
        questions: [
          { id: "Q2.2.1", text: "Explain structure and operations of translators in programming language.", frequency: 3, marks: 8, years: ["2021(ND)", "2024(AM)"], priority: "high" },
          { id: "Q2.2.2", text: "Describe the working principles of translators with an example.", frequency: 3, marks: 10, years: ["2022(AM)"], priority: "high" },
          { id: "Q2.2.3", text: "Draw structure and explain the operation of translator.", frequency: 3, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q2.2.4", text: "Explain the operations of translator in brief.", frequency: 3, marks: 4, years: ["2023(ND)"], priority: "high" },
          { id: "Q2.2.5", text: "Answer the following: (i) What is the need of Assembler? (ii) Compare Compiler and Interpreter.", frequency: 1, marks: 8, years: ["2020(ND)"], priority: "medium" },
          { id: "Q2.2.6", text: "Write short notes on (any two): (i) Translator (ii) Compiler (iii) Linker & Loader.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "medium" }
        ]
      },

      "2.3": {
        name: "Virtual & Simulated Computers",
        questions: [
          { id: "Q2.3.1", text: "What are virtual computers? Also write its advantages.", frequency: 2, marks: 8, years: ["2021(AM)"], priority: "high" },
          { id: "Q2.3.2", text: "Explain virtual computer.", frequency: 2, marks: 4, years: ["2024(AM)"], priority: "high" },
          { id: "Q2.3.3", text: "Write short notes on: (i) Virtual Computer (ii) Simulated Computer.", frequency: 2, marks: 8, years: ["2022(AM)", "2023(ND)"], priority: "high" }
        ]
      },

      "2.4": {
        name: "Syntax & Semantics",
        questions: [
          { id: "Q2.4.1", text: "What is difference between syntax and semantics of programming language?", frequency: 2, marks: 8, years: ["2023(AM)"], priority: "high" },
          { id: "Q2.4.2", text: "Explain syntax and semantics with its types.", frequency: 2, marks: 8, years: ["2024(AM)"], priority: "high" }
        ]
      },

      "2.5": {
        name: "Binding & Binding Times",
        questions: [
          { id: "Q2.5.1", text: "Explain Early binding and late binding in language.", frequency: 2, marks: 8, years: ["2021(ND)"], priority: "high" },
          { id: "Q2.5.2", text: "What do you mean by binding? Explain compile-time and run-time binding in detail.", frequency: 2, marks: 8, years: ["2023(ND)"], priority: "high" },
          { id: "Q2.5.3", text: "Write short notes on: Binding and Binding times.", frequency: 2, marks: 10, years: ["2022(AM)"], priority: "high" },
          { id: "Q2.5.4", text: "Explain briefly about storage management and data binding.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "medium" }
        ]
      },

      "2.6": {
        name: "Storage Management",
        questions: [
          { id: "Q2.6.1", text: "Write short note on: Storage management.", frequency: 2, marks: 8, years: ["2021(AM)"], priority: "high" },
          { id: "Q2.6.2", text: "Explain various storage management techniques and compare them.", frequency: 2, marks: 8, years: ["2022(ND)"], priority: "high" }
        ]
      }

    }
  },

  //
  //  UNIT III — FUNCTIONAL & LOGIC PROGRAMMING
  //
  unit3: {
    name: "FUNCTIONAL & LOGIC PROGRAMMING",
    subtopics: {

      "3.1": {
        name: "Functional Programming",
        questions: [
          { id: "Q3.1.1", text: "What are the applications of functional programming languages?", frequency: 1, marks: 4, years: ["2021(AM)"], priority: "high" },
          { id: "Q3.1.2", text: "Explain Functional programming.", frequency: 2, marks: 8, years: ["2020(ND)", "2021(ND)"], priority: "high" },
          { id: "Q3.1.3", text: "What is functional programming language? Explain its characteristics in brief.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q3.1.4", text: "Explain Imperative programming language.", frequency: 1, marks: 4, years: ["2024(AM)"], priority: "medium" },
          { id: "Q3.1.5", text: "Explain Imperative programming.", frequency: 1, marks: 8, years: ["2021(ND)"], priority: "medium" },
          { id: "Q3.1.6", text: "What is function and pseudo code?", frequency: 1, marks: 4, years: ["2023(AM)"], priority: "low" }
        ]
      },

      "3.2": {
        name: "LISP",
        questions: [
          { id: "Q3.2.1", text: "Explain following about LISP: (i) Executor (ii) Atoms (iii) Lists (iv) Strings.", frequency: 1, marks: 8, years: ["2020(ND)"], priority: "high" },
          { id: "Q3.2.2", text: "Explain the programming structure for LISP.", frequency: 1, marks: 8, years: ["2021(ND)"], priority: "high" },
          { id: "Q3.2.3", text: "What is LISP? Explain the fundamentals of LISP.", frequency: 1, marks: 8, years: ["2023(ND)"], priority: "high" },
          { id: "Q3.2.4", text: "Give detailed description about LISP.", frequency: 1, marks: 8, years: ["2022(ND)"], priority: "high" },
          { id: "Q3.2.5", text: "Explain LISP programming in terms of definition, control structure and functions.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q3.2.6", text: "Discuss the advantages and disadvantages of using LISP for symbolic computing and artificial intelligence applications. Provide specific examples of its use in these domains.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" },
          { id: "Q3.2.7", text: "What is meant by symbolic expression in LISP?", frequency: 1, marks: 4, years: ["2021(ND)"], priority: "medium" },
          { id: "Q3.2.8", text: "LISP began as a pure functional language but gradually acquired more imperative features. Why?", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "medium" },
          { id: "Q3.2.9", text: "How are list functions expressed in SML? Explain with suitable examples.", frequency: 1, marks: 10, years: ["2022(AM)"], priority: "low" },
          { id: "Q3.2.10", text: "Explain Haskell programming language and its features.", frequency: 1, marks: 10, years: ["2022(AM)"], priority: "low" }
        ]
      },

      "3.3": {
        name: "Logic Programming & PROLOG",
        questions: [
          { id: "Q3.3.1", text: "Explain logic programming language in brief.", frequency: 1, marks: 4, years: ["2023(ND)"], priority: "high" },
          { id: "Q3.3.2", text: "How do the control constructs in PROLOG function?", frequency: 2, marks: 8, years: ["2021(AM)", "2023(ND)"], priority: "high" },
          { id: "Q3.3.3", text: "What are Lists? How do they operate?", frequency: 1, marks: 8, years: ["2021(AM)"], priority: "high" },
          { id: "Q3.3.4", text: "Explain different datatypes available in PROLOG programming language.", frequency: 1, marks: 8, years: ["2021(ND)"], priority: "high" },
          { id: "Q3.3.5", text: "Explain the syntax and structure of PROLOG clauses and goals, including the use of variables, predicates, and unification. How do they contribute to logic program execution?", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" },
          { id: "Q3.3.6", text: "Explain following about PROLOG: (i) Variable and Atom (ii) Clause or rule.", frequency: 1, marks: 8, years: ["2020(ND)"], priority: "medium" },
          { id: "Q3.3.7", text: "What is PROLOG? Explain in detail.", frequency: 1, marks: 8, years: ["2022(ND)"], priority: "medium" },
          { id: "Q3.3.8", text: "Explain PROLOG on the basis of lists and operators in brief.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "medium" },
          { id: "Q3.3.9", text: "What is Operators? Explain different types of operators.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "medium" }
        ]
      },

      "3.4": {
        name: "Comparison & Applications of Functional vs Logic PLs",
        questions: [
          { id: "Q3.4.1", text: "Compare: Functional and Logic programming language.", frequency: 3, marks: 8, years: ["2021(AM)", "2023(AM)", "2022(ND)"], priority: "high" },
          { id: "Q3.4.2", text: "Explain comparison & applications of functional and logic programming languages.", frequency: 3, marks: 8, years: ["2023(ND)"], priority: "high" },
          { id: "Q3.4.3", text: "Compare and contrast the main principles of functional and logic programming. Provide one example of each.", frequency: 1, marks: 4, years: ["2024(ND)"], priority: "high" },
          { id: "Q3.4.4", text: "Compare and contrast the expressive power and problem-solving approaches of LISP and PROLOG. In which situations might one language be more suitable than the other?", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "medium" },
          { id: "Q3.4.5", text: "Differentiate between functional and imperative language.", frequency: 1, marks: 10, years: ["2022(AM)"], priority: "medium" },
          { id: "Q3.4.6", text: "Comparison of functional and logical programming language.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "medium" }
        ]
      }

    }
  },

  //
  //  UNIT IV — OOP CONCEPTS-I (C++)
  //
  unit4: {
    name: "OOP CONCEPTS-I (C++)",
    subtopics: {

      "4.1": {
        name: "OOP Fundamentals — Object, Class & Encapsulation",
        questions: [
          { id: "Q4.1.1", text: "Write down various object oriented programming concepts.", frequency: 2, marks: 4, years: ["2020(ND)", "2022(ND)"], priority: "high" },
          { id: "Q4.1.2", text: "Explain the basic concepts of Object Oriented Programming.", frequency: 2, marks: 8, years: ["2023(AM)", "2024(AM)"], priority: "high" },
          { id: "Q4.1.3", text: "Explain the features of object-oriented programming language in detail.", frequency: 1, marks: 8, years: ["2023(ND)"], priority: "high" },
          { id: "Q4.1.4", text: "What do you mean by object? Explain Encapsulation in brief with example.", frequency: 1, marks: 4, years: ["2023(ND)"], priority: "high" },
          { id: "Q4.1.5", text: "Explain the principle of encapsulation and its benefits in protecting data and promoting information hiding within a class.", frequency: 1, marks: 4, years: ["2024(ND)"], priority: "high" },
          { id: "Q4.1.6", text: "Explain following: (i) Abstraction (ii) Polymorphism.", frequency: 1, marks: 4, years: ["2021(ND)"], priority: "medium" },
          { id: "Q4.1.7", text: "Discuss the concept of message passing in object-oriented programming and its role in communication between objects.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "medium" }
        ]
      },

      "4.2": {
        name: "C++ Program Structure & Classes",
        questions: [
          { id: "Q4.2.1", text: "Explain the basic structure of C++ program with an example.", frequency: 2, marks: 10, years: ["2022(AM)"], priority: "high" },
          { id: "Q4.2.2", text: "Explain basic structure of C++ programming with example.", frequency: 2, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q4.2.3", text: "What is the basic structure of C++ program? Write a simple C++ program that demonstrates class and object.", frequency: 1, marks: 8, years: ["2023(ND)"], priority: "high" },
          { id: "Q4.2.4", text: "Write a simple C++ program demonstrating the creation and use of a class with member variables, methods, and constructors. Briefly explain your code.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" },
          { id: "Q4.2.5", text: "Write a C++ program to perform arithmetic operations.", frequency: 1, marks: 10, years: ["2022(AM)"], priority: "medium" },
          { id: "Q4.2.6", text: "Compare compile-time and run-time polymorphism mechanisms in C++. Provide examples of each type and discuss their respective applications.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "medium" }
        ]
      },

      "4.3": {
        name: "Static Members & this Pointer",
        questions: [
          { id: "Q4.3.1", text: "What are static members? Write a C++ program to explain static members.", frequency: 4, marks: 8, years: ["2021(AM)", "2021(ND)", "2022(ND)"], priority: "high" },
          { id: "Q4.3.2", text: "What is a static member? Write a program to demonstrate it.", frequency: 4, marks: 8, years: ["2022(ND)"], priority: "high" },
          { id: "Q4.3.3", text: "What are Static members in a class? Write a program in C++ to demonstrate the use of static members in a class.", frequency: 4, marks: 8, years: ["2020(ND)"], priority: "high" },
          { id: "Q4.3.4", text: "What is this pointer? Demonstrate its use with a C++ program.", frequency: 3, marks: 8, years: ["2021(AM)", "2021(ND)"], priority: "high" },
          { id: "Q4.3.5", text: "Explain this pointer with example.", frequency: 3, marks: 4, years: ["2024(AM)"], priority: "high" },
          { id: "Q4.3.6", text: "Explain const and static keywords with suitable example.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "medium" }
        ]
      },

      "4.4": {
        name: "Pointers vs Reference Variables",
        questions: [
          { id: "Q4.4.1", text: "What are pointers? How do they differ from reference variables?", frequency: 3, marks: 8, years: ["2021(AM)"], priority: "high" },
          { id: "Q4.4.2", text: "Differentiate: Pointers and reference variables.", frequency: 3, marks: 10, years: ["2022(AM)"], priority: "high" },
          { id: "Q4.4.3", text: "What do you mean by pointer? Write a comparison between pointer and reference variable.", frequency: 3, marks: 8, years: ["2023(ND)"], priority: "high" }
        ]
      },

      "4.5": {
        name: "new & delete Operators",
        questions: [
          { id: "Q4.5.1", text: "Compare new and delete operator.", frequency: 4, marks: 4, years: ["2021(AM)", "2023(AM)"], priority: "high" },
          { id: "Q4.5.2", text: "Differentiate: new and delete operators.", frequency: 4, marks: 10, years: ["2022(AM)"], priority: "high" },
          { id: "Q4.5.3", text: "Write a C++ program to demonstrate the use of new and delete operators.", frequency: 4, marks: 8, years: ["2020(ND)", "2022(ND)"], priority: "high" },
          { id: "Q4.5.4", text: "Write short notes on: (i) Nested class (ii) Static member (iii) C++ compiler.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "low" },
          { id: "Q4.5.5", text: "What are Nested classes? Write a program to demonstrate the use of Nested class.", frequency: 1, marks: 8, years: ["2020(ND)"], priority: "low" }
        ]
      },

      "4.6": {
        name: "Inheritance & Polymorphism (C++)",
        questions: [
          { id: "Q4.6.1", text: "Explain inheritance with a C++ program.", frequency: 1, marks: 8, years: ["2022(ND)"], priority: "high" },
          { id: "Q4.6.2", text: "Discuss the different types of inheritance available in C++ with example.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" }
        ]
      }

    }
  },

  //
  //  UNIT V — OOP CONCEPTS-II (C++)
  //
  unit5: {
    name: "OOP CONCEPTS-II (C++)",
    subtopics: {

      "5.1": {
        name: "Constructors & Destructors",
        questions: [
          { id: "Q5.1.1", text: "Explain constructor and destructor in C++.", frequency: 3, marks: 4, years: ["2021(ND)", "2022(ND)"], priority: "high" },
          { id: "Q5.1.2", text: "Define the constructor and explain.", frequency: 3, marks: 4, years: ["2023(ND)"], priority: "high" },
          { id: "Q5.1.3", text: "Write C++ program demonstrating constructor overloading with different parameter types.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" },
          { id: "Q5.1.4", text: "Explain destructor with example.", frequency: 1, marks: 4, years: ["2024(AM)"], priority: "high" },
          { id: "Q5.1.5", text: "Write short notes on: (i) Constructor with types — Explain it. (ii) How the destructor is important?", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "medium" }
        ]
      },

      "5.2": {
        name: "Function & Operator Overloading",
        questions: [
          { id: "Q5.2.1", text: "What do you mean by constructor? Explain function overloading with suitable program.", frequency: 1, marks: 8, years: ["2023(ND)"], priority: "high" },
          { id: "Q5.2.2", text: "Explain operator overloading with suitable example.", frequency: 3, marks: 10, years: ["2022(AM)", "2022(ND)"], priority: "high" },
          { id: "Q5.2.3", text: "What is operator overloading in C++ and its benefits for customizing the behaviour of existing operators for user-defined objects? Provide an example of overloading the ++ operator for adding two complex numbers.", frequency: 1, marks: 8, years: ["2024(ND)"], priority: "high" },
          { id: "Q5.2.4", text: "What is operator overloading? Write a program to overload unary minus operator.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q5.2.5", text: "What is Operators? Explain different types of operators.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "medium" }
        ]
      },

      "5.3": {
        name: "Friend Functions & Classes",
        questions: [
          { id: "Q5.3.1", text: "Explain following: Friend function and Abstract class.", frequency: 1, marks: 8, years: ["2021(ND)"], priority: "high" },
          { id: "Q5.3.2", text: "Explain the Friend function with an example.", frequency: 4, marks: 10, years: ["2022(AM)"], priority: "high" },
          { id: "Q5.3.3", text: "Write a program in C++ to demonstrate the use of a friend function.", frequency: 4, marks: 8, years: ["2022(ND)"], priority: "high" },
          { id: "Q5.3.4", text: "Define friend function. Write a C++ program demonstrating friend function and class.", frequency: 4, marks: 8, years: ["2023(ND)"], priority: "high" },
          { id: "Q5.3.5", text: "What is friend function? Explain its characteristics with suitable example.", frequency: 4, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q5.3.6", text: "What are the friend functions? Write a program to demonstrate the use of a member function of one class as a friend of another class.", frequency: 1, marks: 8, years: ["2023(AM)"], priority: "high" }
        ]
      },

      "5.4": {
        name: "Abstract Classes & Inheritance",
        questions: [
          { id: "Q5.4.1", text: "Which classes are called abstract?", frequency: 2, marks: 4, years: ["2021(AM)"], priority: "high" },
          { id: "Q5.4.2", text: "Explain Abstract class in C++. Write a program to create an Abstract class in C++.", frequency: 2, marks: 8, years: ["2020(ND)"], priority: "high" },
          { id: "Q5.4.3", text: "Write short note on: (i) Abstract class (ii) Inheritance.", frequency: 1, marks: 8, years: ["2023(ND)"], priority: "high" },
          { id: "Q5.4.4", text: "How does a private member of one class be accessed by another class?", frequency: 1, marks: 8, years: ["2021(AM)"], priority: "medium" },
          { id: "Q5.4.5", text: "Explain Hybrid inheritance in C++. Write a program in C++ to demonstrate Hybrid inheritance.", frequency: 1, marks: 8, years: ["2020(ND)"], priority: "medium" }
        ]
      },

      "5.5": {
        name: "Virtual Functions & Dynamic Binding",
        questions: [
          { id: "Q5.5.1", text: "What is Dynamic binding? How does C++ implement it?", frequency: 2, marks: 8, years: ["2021(AM)"], priority: "high" },
          { id: "Q5.5.2", text: "Explain virtual function with example.", frequency: 3, marks: 8, years: ["2021(ND)", "2022(ND)"], priority: "high" },
          { id: "Q5.5.3", text: "Differentiate virtual function and pure virtual function with proper example.", frequency: 1, marks: 8, years: ["2024(AM)"], priority: "high" },
          { id: "Q5.5.4", text: "Build a C++ program showing the use of virtual function.", frequency: 1, marks: 8, years: ["2022(ND)"], priority: "high" }
        ]
      },

      "5.6": {
        name: "Exception Handling",
        questions: [
          { id: "Q5.6.1", text: "What are exceptions? How does C++ language handle exceptions?", frequency: 3, marks: 8, years: ["2021(AM)"], priority: "high" },
          { id: "Q5.6.2", text: "Explain Exception Handling for a class with an example.", frequency: 3, marks: 8, years: ["2021(ND)"], priority: "high" },
          { id: "Q5.6.3", text: "How exceptions are handled in C++? Explain in brief.", frequency: 3, marks: 10, years: ["2022(AM)"], priority: "high" }
        ]
      },

      "5.7": {
        name: "Templates",
        questions: [
          { id: "Q5.7.1", text: "What are Templates? Write the features of templates.", frequency: 1, marks: 4, years: ["2023(AM)"], priority: "medium" },
          { id: "Q5.7.2", text: "Explain function templates with code example in C++.", frequency: 1, marks: 8, years: ["2020(ND)"], priority: "medium" },
          { id: "Q5.7.3", text: "Explain class templates with code example in C++.", frequency: 1, marks: 8, years: ["2020(ND)"], priority: "medium" }
        ]
      }

    }
  }

};
