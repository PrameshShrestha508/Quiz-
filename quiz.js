var myQuestions = [

    {
        
        question: "1. ______ is a technology that allows telephone calls to be made over computer networks like the Internet?",
        answers: {
            a: 'VOIP',
            b: 'GSM',
            c: 'Modem'
            
        },
        correctAnswer: 'a'
    },
    {
        question: "2.Which of the following statement is correct?",
        answers: {
            a: '1 MB = 1000 bytes',
            b: '1 MB=2048 bytes',
            c: '1 KB = 1024 bytes'
            
        },
        correctAnswer: 'c'
    },
    {
        question: "3.Who invented Java?",
        answers: {
            a: 'Charles Babbage',
            b: 'James A Gosling',
            c: 'Tim Burners Lee'
            
        },
        correctAnswer: 'b'
    },
    {
        question: "4.Malware is the short form for malicious software and used to refer to:",
        answers: {
            a: 'Spyware',
            b: 'Worm',
            c: ' All of the above'
           
        },
        correctAnswer: 'c'
    },
    {
        question: "5.What is the extension of PDF?",
        answers: {
            a: 'Portable desktop format',
            b: 'Portable document format',
            c: 'Portable desktop file'

        },
        correctAnswer: 'b'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label class="block">'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'green';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total

        resultsContainer.innerHTML = 'You have got' +'&nbsp'+ numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}