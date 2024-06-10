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
}
];


const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("prev-btn");
const finishBtn = document.getElementById("finish-btn");

let selections = Array(questions.length).fill(null);


function startQuiz() {
    index = 0;
    showQuestion(index);
    
}


function showQuestion(index) {
    // This will display only one question at a time in a div

    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = ''; // Clear previous content

    const questionNumber = index + 1; // Use the provided index

    const questionElement = document.createElement('p');
    questionElement.className = 'question';
    questionElement.textContent = questionNumber + ". " + questions[index].question;
    questionsContainer.appendChild(questionElement);

    const optionsContainer = document.createElement('ul');
    optionsContainer.className = 'options';
    
    questions[index].options.forEach((option, i) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.className = 'option';

        if (selections[index] === i) {
            li.style.backgroundColor = 'black';
            li.style.color = 'white';
        };

        li.addEventListener('click', () => {
            selections[index] = i;

            optionsContainer.querySelectorAll('li').forEach(opt => {
                opt.style.color = '';
                opt.style.backgroundColor = '';
            });

            li.style.backgroundColor = 'blue'; // Change background color
            li.style.color = 'white'; // Change text color
        });
        optionsContainer.appendChild(li);
    });
    questionsContainer.appendChild(optionsContainer);

    // Setting display style for prevButton and finishBtn based on the question index
    prevButton.style.display = index === 0 ? 'none' : 'block';
    finishBtn.style.display = index === questions.length - 1 ? 'block' : 'none';
};


function calculateScore() {
    score = selections.reduce((acc, selectedOption, i) => {
        return acc + (selectedOption === questions[i].correct ? 1 : 0);
    }, 0);

    // Display score
    const totalElement = document.getElementById('total');
    totalElement.textContent = questions.length;

    const statusElement = document.getElementById('status');
    if (score >= questions.length / 2) {
        statusElement.textContent = 'Passed';
    } else {
        statusElement.textContent = 'Failed';
    }

    const scoreElement = document.getElementById('correct');
    scoreElement.textContent = score;

    const wrongElement = document.getElementById('wrong');
    wrongElement.textContent = questions.length - score;  
};


nextButton.addEventListener('click', () => {
    if (index < questions.length - 1) {
        index++;
        showQuestion(index);
    }
    
});


prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
        showQuestion(index);
    }
});

finishBtn.addEventListener('click', calculateScore);

startQuiz();