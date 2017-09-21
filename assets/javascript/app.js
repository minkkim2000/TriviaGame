
// //Pseuco Code:

// Click "Start button" to start game

// When Click, new box with questions show
//     - on the top of the box is the counter, counting 10 seconds

//         - if user clicks the answer, the answer is stored into user answer array and moves onto next question
//         - if user does not click, an answer "undefined" is stored into user answer array once 10 seconds is up, next question shows

//     - Once all 10 questions are looped,
//         - countdown box .hide();
//         - Results-Box shows
//             - correct: 0;
//             - wrong: 0;
//                 if userAnswer[i] === correctAnswer[j] {
//                     win ++
//                 } else {
//                     wrong ++
//                 }







$( document ).ready(function() {




// Q & A
var questions = [{
            ques: "Question 1?",
            ans: ["111", "222", "333", "444"],
            name: "q1",
            correct: "111",
        },
        {
            ques: "Question 2?",
            ans: ["111", "222", "333", "444"],
            name: "q2",
            correct: "444",
        },
        {
            ques: "How many times was the word f**k used in Pulp Fiction?",
            ans: ["98", "346", "42", "265"],
            name: "q3",
            correct: "265",
        },
        {
            ques: "Question 4?",
            ans: ["111", "222", "333", "444"],
            name: "q4",
            correct: "222",
        },
        {
            ques: "Question 5?",
            ans: ["111", "222", "333", "444"],
            name: "q5",
            correct: "222",
        },
        {
            ques: "Question 6?",
            ans: ["111", "222", "333", "444"],
            name: "q6",
            correct: "333",
        },
        {
            ques: "Question 7?",
            ans: ["111", "222", "333", "444"],
            name: "q7",
            correct: "111",
        },
        {
            ques: "Question 8?",
            ans: ["111", "222", "333", "444"],
            name: "q8",
            correct: "444",
        },
        {
            ques: "Question 9?",
            ans: ["111", "222", "333", "444"],
            name: "q7",
            correct: "111",
        },
        {
            ques: "Question 10?",
            ans: ["111", "222", "333", "444"],
            name: "q10",
            correct: "444",
        }];

var qNo = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"];
var qQ = [];
var qA = [];
var displayQ = [];

// for (var n=0; n < questions.length; i++) {
//     displayQ[n] = [qNo[n], qQ[n], qA[n]];
// }
// console.log(displayQ(n));


for (var i = 0; i < questions.length; i++) {
    qQ.push(questions[i].ques);
}
console.log(qQ);

for (var i = 0; i < questions.length; i++) {
    qA.push(questions[i].ans);
}
console.log(qA);

//Where all the correct answers are stored


var correctAnswerList = [];

for (var i = 0; i < questions.length; i++) {
    correctAnswerList.push(questions[i].correct);
}

console.log(correctAnswerList);




//Where all the user answers are stored
var userAnswerList = [];






// // Timer Stuff
var timeLeft = 11;


function runTimer() {
    stopTime = setInterval(downtime, 1000);
};

function downtime() {
        timeLeft--;
        $("#time-left").html(timeLeft);

        if (timeLeft === 0) {
        stop();
      }
    };

function stop() {
    clearInterval(stopTime);
};
  



// START GAME HERE //
function startgame(){
    $("#results-box").hide();
    $("#time-up-box").hide();
    $("#timer").hide();
    $("#questions-box").hide();
    $("#opening-box").show();
    $("#start-button").on("click", showQuestionBox);
};





//SHOW QUESTIONS BOX//
function showQuestionBox(){
    $("#opening-box").hide();
    $("#questions-box").show();
    $("#timer").show();
    runTimer();
    displayQ();
    displayAns();
    //some function that will display the question and answer options
};

setInterval(displayQ(), 10500);

function displayQ(){
    for (var i = 0; i < questions.length; i++) {
        if (qNo[i] === questions[i].name){
            $("#question").append(questions[i].ques);
        };
    };

};



//figure out how to display this as a list
function displayAns(){
    for (var i = 0; i < questions.length; i++) {
        if (qNo[i] === questions[i].name){
            $("#question").append(questions[i].ans);
        };
    };
};


//============start game

startgame();

});











