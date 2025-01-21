const quizQuestions=[
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question:"What is the result for 6+6?",
        options:["12","16","90","21"],
        correctAnswer:"12"
    },
    {
        question:"JavaScript is known as",
        options:["programming language","Scripting language","library","framework"],
        correctAnswer:"Scripting language"
    },
    {
        question:"Dart used by which company?",
        options:["Amazon","Google","FlipKart","Walmart"],
        correctAnswer:"Google"
    },
    {
        question:"React is a ",
        options:["library","Framework","scripting language","programming language"],
        correctAnswer:"library"
    }
];

let currentIndex=0;
function displayQuestion(){
    if(currentIndex < quizQuestions.length){
        let quizQuestion=quizQuestions[currentIndex];
        document.getElementById("Quiz").innerHTML=`${currentIndex+1}. ${quizQuestion.question}`;
        document.getElementById("option1").innerHTML=`<label><input type="radio" name="options" value="${quizQuestion.options[0]}"></label>${quizQuestion.options[0]}`;
        document.getElementById("option2").innerHTML=`<label><input type="radio" name="options" value="${quizQuestion.options[1]}"></label>${quizQuestion.options[1]}`;
        document.getElementById("option3").innerHTML=`<label><input type="radio" name="options" value="${quizQuestion.options[2]}"></label>${quizQuestion.options[2]}`;
        document.getElementById("option4").innerHTML=`<label><input type="radio" name="options" value="${quizQuestion.options[3]}"></label>${quizQuestion.options[3]}`;
        currentIndex++;
    }
    else{
        document.getElementById("score").innerHTML=`Score : ${score}`;
    }
}



displayQuestion();
let score=0;
function validateAnswer(){
    let select=document.querySelector('input[name="options"]:checked');
    if(select){
        let selection=select.value;
        let ans=quizQuestions[currentIndex-1].correctAnswer;
        if(selection === ans){
            score++;
        }
    }
}
function nextQuestion(){
    validateAnswer();
    displayQuestion();
    
}

