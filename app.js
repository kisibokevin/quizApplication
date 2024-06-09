const questions = [
{
question: "What is JavaScript?",
options: ["A programming language", "A database", "An operating system", "A web browser"],
correct: 0
},
{
question: "Which company developed JavaScript?",
options: ["Microsoft", "Netscape", "Sun Microsystems", "IBM"],
correct: 1
},
{
question: "What is the file extension for JavaScript files?",
options: [".java", ".js", ".javascript", ".jss"],
correct: 1
},
{
question: "Which HTML tag is used to include JavaScript code?",
options: ["script", "javascript", "code", "js"],
correct: 0
},
{
question: "How do you write 'Hello World' in an alert box?",
options: ["alert('Hello World');", "msg('Hello World');", "alertBox('Hello World');", "msgBox('Hello World');"],
correct: 0
},
{
question: "What is a JavaScript variable?",
options: ["A container for storing data", "A function", "A keyword", "A loop"],
correct: 0
},
{
question: "Which keyword is used to declare a variable in JavaScript?",
options: ["var", "let", "const", "All of the above"],
correct: 3
},
{
question: "What is the correct syntax for referring to an external script called 'script.js'?",
options: ["<script href='script.js'>", "<script name='script.js'>", "<script src='script.js'>", "<script link='script.js'>"],
correct: 2
},
{
question: "How do you create a function in JavaScript?",
options: ["function myFunction()", "def myFunction()", "function:myFunction()", "create myFunction()"],
correct: 0
},
{
question: "How do you call a function named 'myFunction'?",
options: ["call function myFunction()", "myFunction()", "call myFunction()", "Call.myFunction()"],
correct: 1
},
{
question: "What is a JavaScript object?",
options: ["A data type", "A collection of properties", "A function", "A variable"],
correct: 1
},
{
question: "How do you access the properties of an object?",
options: ["object.property", "object->property", "object::property", "object[property]"],
correct: 0
},
{
question: "What is 'this' keyword in JavaScript?",
options: ["A reference to the object from where it was called", "A variable", "A function", "A string"],
correct: 0
},
{
question: "What are JavaScript data types?",
options: ["Number, String, Boolean, Object, Undefined", "Number, String, Boolean, Float, Undefined", "Number, Boolean, Null, Undefined, Char", "Number, String, Float, Object, Null"],
correct: 0
},
{
question: "What is an array in JavaScript?",
options: ["A single variable that is used to store different elements", "A function", "A keyword", "A loop"],
correct: 0
},
{
question: "How do you write an array in JavaScript?",
options: ["var colors = 'red', 'green', 'blue'", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = 'red'; 'green'; 'blue'"],
correct: 1
},
{
question: "How do you access the first element in an array?",
options: ["array[0]", "array[1]", "array(first)", "array(1)"],
correct: 0
},
{
question: "What is a loop in JavaScript?",
options: ["A way to perform repeated tasks based on a condition", "A function", "A variable", "A data type"],
correct: 0
},
{
question: "Which loop is used to iterate over properties of an object?",
options: ["for", "for/in", "while", "do/while"],
correct: 1
},
{
question: "How do you write a conditional statement in JavaScript?",
options: ["if (condition) { }", "if condition { }", "if (condition) then { }", "if condition then { }"],
correct: 0
},
{
question: "What is the purpose of the 'break' statement in JavaScript?",
options: ["To stop the execution of a loop", "To define a variable", "To call a function", "To exit a function"],
correct: 0
},
{
question: "What is the purpose of the 'continue' statement in JavaScript?",
options: ["To break the current iteration and continue with the next", "To stop the execution of a loop", "To exit a function", "To define a variable"],
correct: 0
},
{
question: "What is the purpose of the 'return' statement in JavaScript?",
options: ["To exit a function and return a value", "To define a variable", "To call a function", "To stop the execution of a loop"],
correct: 0
},
{
question: "How do you write a comment in JavaScript?",
options: ["// This is a comment", "<!-- This is a comment -->", "'This is a comment'", "# This is a comment"],
correct: 0
},
{
question: "What is the purpose of the 'typeof' operator in JavaScript?",
options: ["To return the data type of a variable", "To define a variable", "To call a function", "To stop the execution of a loop"],
correct: 0
},
{
question: "What is 'null' in JavaScript?",
options: ["A value that represents no value or object", "A data type", "A variable", "A function"],
correct: 0
},
{
question: "What is 'undefined' in JavaScript?",
options: ["A variable that has been declared but not assigned a value", "A data type", "A function", "A string"],
correct: 0
},
{
question: "What is NaN in JavaScript?",
options: ["A value that represents Not-a-Number", "A function", "A variable", "A data type"],
correct: 0
},
{
question: "How do you convert a string to a number in JavaScript?",
options: ["Number()", "String()", "Boolean()", "Object()"],
correct: 0
},
{
question: "What is the purpose of the 'parseInt' function in JavaScript?",
options: ["To parse a string and return an integer", "To parse a string and return a float", "To convert a number to a string", "To parse a number and return a string"],
correct: 0
},
{
question: "What is the purpose of the 'parseFloat' function in JavaScript?",
options: ["To parse a string and return a floating-point number", "To parse a string and return an integer", "To convert a number to a string", "To parse a number and return a string"],
correct: 0
},
{
question: "What is a JavaScript closure?",
options: ["A function having access to the parent scope", "A data type", "A variable", "A loop"],
correct: 0
},
{
question: "What is an IIFE in JavaScript?",
options: ["An Immediately Invoked Function Expression", "An Indexed Interactive Function Example", "An Internal Initialization Function Event", "An Iterative Initialization For Each"],
correct: 0
},
{
question: "What does DOM stand for in JavaScript?",
options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Data Oriented Model"],
correct: 0
},
{
question: "How do you select an element by its ID in JavaScript?",
options: ["document.getElementById('id')", "document.querySelector('#id')", "document.getElementByID('id')", "document.getElementByClass('id')"],
correct: 0
},
{
question: "How do you select elements by their class name in JavaScript?",
options: ["document.getElementsByClassName('class')", "document.querySelector('.class')", "document.getElementByClass('class')", "document.getElementsByClass('class')"],
correct: 0
},
{
question: "How do you select elements by their tag name in JavaScript?",
options: ["document.getElementsByTagName('tag')", "document.querySelector('tag')", "document.getElementByTag('tag')", "document.getElementsByTag('tag')"],
correct: 0
},
{
question: "What is event delegation in JavaScript?",
options: ["A technique of handling events efficiently", "A method of defining variables", "A loop structure", "A way to call functions"],
correct: 0
},
{
question: "What is 'event bubbling' in JavaScript?",
options: ["The event propagation mechanism where the event starts from the target and propagates up to the root", "A method to handle multiple events", "A loop structure", "A way to define functions"],
correct: 0
},
{
question: "What is 'event capturing' in JavaScript?",
options: ["The event propagation mechanism where the event starts from the root and propagates to the target", "A method to handle multiple events", "A loop structure", "A way to define functions"],
correct: 0
},
{
question: "What is JSON?",
options: ["JavaScript Object Notation", "JavaScript Oriented Notation", "Java Source Object Notation", "JavaScript Object Network"],
correct: 0
},
{
question: "How do you parse a JSON string in JavaScript?",
options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toString()"],
correct: 0
},
{
question: "How do you convert a JavaScript object to a JSON string?",
options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toString()"],
correct: 0
},
{
question: "What is AJAX in JavaScript?",
options: ["Asynchronous JavaScript and XML", "Active JavaScript and XML", "Asynchronous Java and XML", "Active Java and XML"],
correct: 0
},
{
question: "What is the purpose of the 'fetch' function in JavaScript?",
options: ["To make HTTP requests", "To fetch elements from the DOM", "To declare variables", "To define functions"],
correct: 0
},
{
question: "What is a promise in JavaScript?",
options: ["An object representing the eventual completion or failure of an asynchronous operation", "A data type", "A loop", "A variable"],
correct: 0
},
{
question: "How do you create a promise in JavaScript?",
options: ["new Promise()", "create Promise()", "Promise.create()", "Promise.new()"],
correct: 0
},
{
question: "What are the states of a JavaScript promise?",
options: ["Pending, Fulfilled, Rejected", "Pending, Completed, Failed", "Started, Completed, Failed", "Pending, Done, Failed"],
correct: 0
},
{
question: "What is 'async' in JavaScript?",
options: ["A keyword to declare asynchronous functions", "A data type", "A loop", "A variable"],
correct: 0
},
{
question: "What is 'await' in JavaScript?",
options: ["A keyword to wait for an asynchronous operation to complete", "A data type", "A loop", "A variable"],
correct: 0
},
{
question: "What is a callback function in JavaScript?",
options: ["A function passed as an argument to another function", "A data type", "A loop", "A variable"],
correct: 0
},
{
question: "What is the difference between '==' and '===' in JavaScript?",
options: ["'==' checks for value equality, '===' checks for value and type equality", "'===' checks for value equality, '==' checks for value and type equality", "'==' checks for type equality, '===' checks for value equality", "There is no difference"],
correct: 0
},
{
question: "What is the use of 'let' in JavaScript?",
options: ["To declare a block-scoped variable", "To declare a function", "To declare a global variable", "To declare a constant"],
correct: 0
},
{
question: "What is the use of 'const' in JavaScript?",
options: ["To declare a block-scoped constant", "To declare a function", "To declare a global variable", "To declare a block-scoped variable"],
correct: 0
},
{
question: "What is 'strict mode' in JavaScript?",
options: ["A way to opt in to a restricted variant of JavaScript", "A data type", "A loop structure", "A method to define variables"],
correct: 0
},
{
question: "How do you enable 'strict mode' in JavaScript?",
options: ["'use strict';", "strict_mode();", "enable_strict();", "set_strict_mode();"],
correct: 0
},
{
question: "What is the use of 'setTimeout' function in JavaScript?",
options: ["To execute a function after a specified delay", "To repeat a function at specified intervals", "To stop the execution of a function", "To declare a variable"],
correct: 0
},
{
question: "What is the use of 'setInterval' function in JavaScript?",
options: ["To repeat a function at specified intervals", "To execute a function after a specified delay", "To stop the execution of a function", "To declare a variable"],
correct: 0
},
{
question: "What is the purpose of 'clearTimeout' function in JavaScript?",
options: ["To stop the execution of a function set by setTimeout", "To repeat a function at specified intervals", "To execute a function after a specified delay", "To declare a variable"],
correct: 0
},
{
question: "What is the purpose of 'clearInterval' function in JavaScript?",
options: ["To stop the execution of a function set by setInterval", "To repeat a function at specified intervals", "To execute a function after a specified delay", "To declare a variable"],
correct: 0
},
{
question: "What is the 'event.preventDefault()' method in JavaScript?",
options: ["To prevent the default action of an event", "To stop the execution of a function", "To declare a variable", "To define a function"],
correct: 0
},
{
question: "What is the 'event.stopPropagation()' method in JavaScript?",
options: ["To stop the event from propagating to parent elements", "To prevent the default action of an event", "To stop the execution of a function", "To declare a variable"],
correct: 0
},
{
question: "What is the 'addEventListener' method in JavaScript?",
options: ["To attach an event handler to an element", "To prevent the default action of an event", "To stop the execution of a function", "To declare a variable"],
correct: 0
},
{
question: "How do you remove an event listener in JavaScript?",
options: ["removeEventListener()", "detachEvent()", "deleteEvent()", "clearEventListener()"],
correct: 0
},
{
question: "What is 'localStorage' in JavaScript?",
options: ["A web storage object to store data locally in the browser", "A variable", "A loop structure", "A method to define functions"],
correct: 0
},
{
question: "What is 'sessionStorage' in JavaScript?",
options: ["A web storage object to store data for one session", "A variable", "A loop structure", "A method to define functions"],
correct: 0
},
{
question: "How do you set an item in 'localStorage'?",
options: ["localStorage.setItem('key', 'value')", "localStorage.storeItem('key', 'value')", "localStorage.addItem('key', 'value')", "localStorage.createItem('key', 'value')"],
correct: 0
},
{
question: "How do you get an item from 'localStorage'?",
options: ["localStorage.getItem('key')", "localStorage.retrieveItem('key')", "localStorage.fetchItem('key')", "localStorage.grabItem('key')"],
correct: 0
},
{
question: "How do you remove an item from 'localStorage'?",
options: ["localStorage.removeItem('key')", "localStorage.deleteItem('key')", "localStorage.clearItem('key')", "localStorage.eraseItem('key')"],
correct: 0
},
{
question: "How do you clear all items from 'localStorage'?",
options: ["localStorage.clear()", "localStorage.deleteAll()", "localStorage.clearItems()", "localStorage.eraseAll()"],
correct: 0
},
{
question: "What is the difference between 'localStorage' and 'sessionStorage'?",
options: ["'localStorage' stores data with no expiration, 'sessionStorage' stores data for one session", "'localStorage' stores data for one session, 'sessionStorage' stores data with no expiration", "There is no difference", "'localStorage' and 'sessionStorage' are the same"],
correct: 0
},
{
question: "What is a JavaScript module?",
options: ["A reusable piece of code that can be imported into other code", "A data type", "A loop structure", "A variable"],
correct: 0
},
{
question: "How do you export a module in JavaScript?",
options: ["export { moduleName }", "module.export { moduleName }", "export.module { moduleName }", "module { moduleName }"],
correct: 0
},
{
question: "How do you import a module in JavaScript?",
options: ["import { moduleName } from 'modulePath'", "module.import { moduleName } from 'modulePath'", "import.module { moduleName } from 'modulePath'", "module { moduleName } from 'modulePath'"],
correct: 0
},
{
question: "What is 'hoisting' in JavaScript?",
options: ["A JavaScript mechanism where variables and function declarations are moved to the top of their scope", "A loop structure", "A variable", "A function"],
correct: 0
},
{
question: "What is the difference between 'var' and 'let' in JavaScript?",
options: ["'var' is function-scoped, 'let' is block-scoped", "'var' is block-scoped, 'let' is function-scoped", "There is no difference", "'var' and 'let' are the same"],
correct: 0
},
{
question: "What is the 'prototype' in JavaScript?",
options: ["An object from which other objects inherit properties", "A variable", "A loop structure", "A function"],
correct: 0
},
{
question: "What is the 'constructor' function in JavaScript?",
options: ["A special function that creates and initializes an object", "A loop structure", "A variable", "A function"],
correct: 0
},
{
question: "What is 'destructuring' in JavaScript?",
options: ["A way to unpack values from arrays or properties from objects", "A data type", "A loop structure", "A variable"],
correct: 0
},
{
question: "What is 'spread operator' in JavaScript?",
options: ["A syntax for expanding an array or object into individual elements", "A loop structure", "A variable", "A function"],
correct: 0
},
{
question: "What is 'template literal' in JavaScript?",
options: ["A way to embed expressions within string literals using backticks", "A data type", "A loop structure", "A variable"],
correct: 0
},
{
question: "What is 'default parameter' in JavaScript?",
options: ["A parameter with a default value if no value is passed", "A data type", "A loop structure", "A variable"],
correct: 0
},
{
question: "What is 'Rest parameter' in JavaScript?",
options: ["A syntax for representing an indefinite number of arguments as an array", "A loop structure", "A variable", "A function"],
correct: 0
},
{
question: "What is 'arrow function' in JavaScript?",
options: ["A concise way to write functions using the '=>' syntax", "A data type", "A loop structure", "A variable"],
correct: 0
},
{
question: "What is 'class' in JavaScript?",
options: ["A blueprint for creating objects with predefined properties and methods", "A data type", "A loop structure", "A variable"],
correct: 0
},
{
question: "What is 'static method' in JavaScript?",
options: ["A method that belongs to the class itself, not instances of the class", "A loop structure", "A variable", "A function"],
correct: 0
},
{
question: "What is 'generator function' in JavaScript?",
options: ["A function that can be paused and resumed using the 'yield' keyword", "A data type", "A loop structure", "A variable"],
correct: 0
},
{
question: "What is 'Map' in JavaScript?",
options: ["A collection of key-value pairs", "A data type", "A loop structure", "A variable"],
correct: 0
},
{
question: "What is 'Set' in JavaScript?",
options: ["A collection of unique values", "A data type", "A loop structure", "A variable"],
correct: 0
},
{
question: "What is 'WeakMap' in JavaScript?",
options: ["A collection of key-value pairs where the keys are weakly referenced", "A data type", "A loop structure", "A variable"],
correct: 0
},
{
question: "What is 'WeakSet' in JavaScript?",
options: ["A collection of unique values where the values are weakly referenced", "A data type", "A loop structure", "A variable"],
correct: 0
},
{
question: "What is 'Proxy' in JavaScript?",
options: ["An object that wraps another object and intercepts operations", "A data type", "A loop structure", "A variable"],
correct: 0
}
];



const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const finishBtn = document.getElementById("finish-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion(currentQuestionIndex);
}


function showQuestionInOneContainer() {

    // this will show all the questions from the array together with the options
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = ''; // Clear previous content

    questions.forEach((q, currentQuestionIndex) => {
        let questionNo = currentQuestionIndex + 1;
        const questionElement = document.createElement('p');
        questionElement.className = 'question';
        questionElement.textContent = questionNo + ". " + q.question;
        questionsContainer.appendChild(questionElement);

        const optionsContainer = document.createElement('ul');
        optionsContainer.className = 'options';
        q.options.forEach((option) => {
            const li = document.createElement('li');
            li.textContent = option;
            li.className = 'option';
            optionsContainer.appendChild(li);
        });
        questionsContainer.appendChild(optionsContainer);
    });
}

function showQuestion(index) {
    // this will display only one question at a time

    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = ''; // Clear previous content

    let questionNumber = currentQuestionIndex + 1;

    const questionElement = document.createElement('p');
    questionElement.className = 'question';
    questionElement.textContent = questionNumber + ". " + questions[currentQuestionIndex].question;
    questionsContainer.appendChild(questionElement);

    const optionsContainer = document.createElement('ul');
    optionsContainer.className = 'options';
    
    questions[currentQuestionIndex].options.forEach((option) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.className = 'option';

        li.addEventListener('click', () => {
            if (li.textContent === questions[currentQuestionIndex].options[questions[currentQuestionIndex].correct]) {
                li.classList.add('correct');
                score++;
            } else {
                li.classList.add('wrong');
            }
        })
        optionsContainer.appendChild(li);
    });
    questionsContainer.appendChild(optionsContainer);

    /** 
     * This line of code is setting the display style property of the prevButton 
     * element to 'none' if the currentQuestionIndex is 0, and to 'block' otherwise.
    */
    prevButton.style.display = currentQuestionIndex === 0 ? 'none' : 'block ';
    finishBtn.style.display = index === questions.length - 1 ? 'block' : 'none';

};

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
    
});


prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
});



startQuiz();