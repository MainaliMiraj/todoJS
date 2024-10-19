const quizQuestions = [
  {
    question: "What is JavaScript?",
    options: [
      "A programming language",
      "A type of coffee",
      "A database",
      "A markup language",
    ],
    answer: "A programming language",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["var x = 5;", "declare x = 5;", "variable x = 5;", "let x := 5;"],
    answer: "var x = 5;",
  },
  {
    question: "What are the different data types in JavaScript?",
    options: [
      "String, Number, Boolean",
      "String, Integer, Float",
      "Text, Number, Boolean",
      "Char, String, Float",
    ],
    answer: "String, Number, Boolean",
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "create function myFunction() {}",
      "function:myFunction() {}",
      "myFunction() {}",
    ],
    answer: "function myFunction() {}",
  },
  {
    question: "What is the difference between let, const, and var?",
    options: [
      "let is block-scoped; const cannot be re-assigned; var is function-scoped.",
      "const is block-scoped; let cannot be re-assigned; var is globally scoped.",
      "All are the same.",
      "var is block-scoped; let is function-scoped; const is globally scoped.",
    ],
    answer:
      "let is block-scoped; const cannot be re-assigned; var is function-scoped.",
  },
  {
    question: "How do you add comments in JavaScript?",
    options: [
      "// this is a comment",
      "/* this is a comment */",
      "// comment",
      "Both options 1 and 2",
    ],
    answer: "Both options 1 and 2",
  },
  {
    question: "What is an array in JavaScript?",
    options: [
      "A collection of items",
      "A single item",
      "A type of function",
      "An object with properties",
    ],
    answer: "A collection of items",
  },
  {
    question: "How do you loop through an array?",
    options: [
      "for (let i of array)",
      "for (let i = 0; i < array.length; i++)",
      "array.forEach()",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What is an object in JavaScript?",
    options: [
      "A collection of key-value pairs",
      "A single value",
      "A function",
      "A type of array",
    ],
    answer: "A collection of key-value pairs",
  },
  {
    question: "How do you access object properties?",
    options: [
      "object.property",
      "object[property]",
      "Both options 1 and 2",
      "object->property",
    ],
    answer: "Both options 1 and 2",
  },
  {
    question: "What is a string in JavaScript?",
    options: [
      "A sequence of characters",
      "A type of number",
      "A collection of arrays",
      "A boolean value",
    ],
    answer: "A sequence of characters",
  },
  {
    question: "How do you concatenate strings?",
    options: [
      "string1 + string2",
      "string1.concat(string2)",
      "Both options 1 and 2",
      "string1 & string2",
    ],
    answer: "Both options 1 and 2",
  },
  {
    question: "What are template literals?",
    options: [
      "Strings wrapped in single quotes",
      "Strings wrapped in double quotes",
      "Strings wrapped in backticks",
      "Strings without quotes",
    ],
    answer: "Strings wrapped in backticks",
  },
  {
    question: "How do you convert a string to a number?",
    options: [
      "Number(string)",
      "parseInt(string)",
      "parseFloat(string)",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What is NaN?",
    options: ["Not a Number", "A type of number", "An error", "A string"],
    answer: "Not a Number",
  },
  {
    question: "What is a callback function?",
    options: [
      "A function passed as an argument to another function",
      "A function that calls itself",
      "A function that returns another function",
      "A function that is called automatically",
    ],
    answer: "A function passed as an argument to another function",
  },
  {
    question: "How do you handle errors in JavaScript?",
    options: ["try...catch", "throw", "return", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What is the purpose of 'this' in JavaScript?",
    options: [
      "To refer to the global object",
      "To refer to the calling object",
      "To refer to the current function",
      "To refer to the current loop",
    ],
    answer: "To refer to the calling object",
  },
  {
    question: "What are arrow functions?",
    options: [
      "A concise way to write functions",
      "A type of loop",
      "A way to declare variables",
      "None of the above",
    ],
    answer: "A concise way to write functions",
  },
  {
    question: "What is the difference between '==' and '==='?",
    options: [
      "'==' checks value; '===' checks value and type",
      "'==' checks type; '===' checks value",
      "They are the same",
      "'==' is for comparison; '===' is for assignment",
    ],
    answer: "'==' checks value; '===' checks value and type",
  },
  {
    question: "How do you use the map() method on an array?",
    options: [
      "array.map(callback)",
      "map(array, callback)",
      "array.map(callback())",
      "map.callback(array)",
    ],
    answer: "array.map(callback)",
  },
  {
    question: "What is event bubbling in the DOM?",
    options: [
      "Events propagate from child to parent",
      "Events propagate from parent to child",
      "Events do not propagate",
      "Events occur randomly",
    ],
    answer: "Events propagate from child to parent",
  },
  {
    question: "How do you add an event listener to an element?",
    options: [
      "element.addEventListener('event', function)",
      "element.on('event', function)",
      "addEventListener(element, 'event', function)",
      "element.addEvent('event', function)",
    ],
    answer: "element.addEventListener('event', function)",
  },
  {
    question: "What is a promise?",
    options: [
      "An object that represents the eventual completion of an asynchronous operation",
      "A type of function",
      "A loop construct",
      "An array method",
    ],
    answer:
      "An object that represents the eventual completion of an asynchronous operation",
  },
  {
    question: "How do you handle asynchronous operations in JavaScript?",
    options: ["Callbacks", "Promises", "Async/Await", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "What is closure in JavaScript?",
    options: [
      "A function that has access to its outer function scope",
      "A type of loop",
      "An event handler",
      "None of the above",
    ],
    answer: "A function that has access to its outer function scope",
  },
  {
    question: "How does 'this' work in different contexts?",
    options: [
      "Depends on how the function is called",
      "Always refers to the global object",
      "Always refers to the function itself",
      "None of the above",
    ],
    answer: "Depends on how the function is called",
  },
  {
    question: "What are JavaScript modules?",
    options: [
      "Files that export and import code",
      "Functions that cannot be reused",
      "Arrays of objects",
      "None of the above",
    ],
    answer: "Files that export and import code",
  },
  {
    question: "What is the prototype chain?",
    options: [
      "A mechanism for inheritance in JavaScript",
      "A type of loop",
      "An array method",
      "None of the above",
    ],
    answer: "A mechanism for inheritance in JavaScript",
  },
  {
    question: "How do you create a class in JavaScript?",
    options: [
      "class MyClass {}",
      "function MyClass() {}",
      "MyClass: function() {}",
      "create class MyClass {}",
    ],
    answer: "class MyClass {}",
  },
  {
    question: "What is the difference between null and undefined?",
    options: [
      "null is an assignment value; undefined means a variable has been declared but not assigned",
      "null is a type; undefined is a value",
      "They are the same",
      "null is a string; undefined is a number",
    ],
    answer:
      "null is an assignment value; undefined means a variable has been declared but not assigned",
  },
  {
    question: "What is the spread operator?",
    options: [
      "Used to expand an iterable into individual elements",
      "A way to merge objects",
      "A type of function",
      "None of the above",
    ],
    answer: "Used to expand an iterable into individual elements",
  },
  {
    question: "How do you implement inheritance in JavaScript?",
    options: [
      "Using prototypes",
      "Using classes",
      "Using Object.create()",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What are higher-order functions?",
    options: [
      "Functions that take other functions as arguments or return them",
      "Functions that cannot be reused",
      "Functions that are defined inside another function",
      "None of the above",
    ],
    answer: "Functions that take other functions as arguments or return them",
  },
  {
    question: "What is the event loop in JavaScript?",
    options: [
      "A mechanism that handles asynchronous operations",
      "A type of loop",
      "An array method",
      "None of the above",
    ],
    answer: "A mechanism that handles asynchronous operations",
  },
  {
    question: "What are generators in JavaScript?",
    options: [
      "Functions that can be paused and resumed",
      "A type of array",
      "A type of loop",
      "None of the above",
    ],
    answer: "Functions that can be paused and resumed",
  },
  {
    question: "How do you use async/await?",
    options: [
      "With promises to handle asynchronous code",
      "To create a loop",
      "To declare variables",
      "None of the above",
    ],
    answer: "With promises to handle asynchronous code",
  },
  {
    question: "What is the Symbol data type?",
    options: [
      "A unique and immutable value",
      "A type of function",
      "A way to define objects",
      "None of the above",
    ],
    answer: "A unique and immutable value",
  },
  {
    question: "How does garbage collection work in JavaScript?",
    options: [
      "Automatically frees up memory by removing unreachable objects",
      "Requires manual intervention",
      "Only happens on specific events",
      "None of the above",
    ],
    answer: "Automatically frees up memory by removing unreachable objects",
  },
  {
    question: "What are WeakMaps and WeakSets?",
    options: [
      "Collections that hold weak references to objects",
      "A type of function",
      "Types of loops",
      "None of the above",
    ],
    answer: "Collections that hold weak references to objects",
  },
  {
    question: "How do you optimize performance in JavaScript applications?",
    options: [
      "Minimize DOM manipulation",
      "Use event delegation",
      "Optimize loops",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "What is functional programming?",
    options: [
      "A programming paradigm that treats computation as the evaluation of mathematical functions",
      "A way to write loops",
      "A type of object",
      "None of the above",
    ],
    answer:
      "A programming paradigm that treats computation as the evaluation of mathematical functions",
  },
  {
    question:
      "What is the difference between deep cloning and shallow cloning?",
    options: [
      "Deep cloning copies nested objects; shallow cloning does not",
      "They are the same",
      "Deep cloning is faster than shallow cloning",
      "None of the above",
    ],
    answer: "Deep cloning copies nested objects; shallow cloning does not",
  },
  {
    question: "What is debouncing?",
    options: [
      "Limiting the rate at which a function is executed",
      "A way to define variables",
      "A type of loop",
      "None of the above",
    ],
    answer: "Limiting the rate at which a function is executed",
  },
  {
    question: "What is throttling?",
    options: [
      "Ensuring a function is only called at most once in a specified amount of time",
      "A way to define variables",
      "A type of loop",
      "None of the above",
    ],
    answer:
      "Ensuring a function is only called at most once in a specified amount of time",
  },
  {
    question: "How do you implement a custom event in JavaScript?",
    options: [
      "Using the Event constructor",
      "Using addEventListener",
      "Using dispatchEvent",
      "All of the above",
    ],
    answer: "All of the above",
  },
];



