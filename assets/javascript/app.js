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







$(document).ready(function() {

// for (var i = 0; i < questions.length; i++) {

    
// }


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
        }
    ];


    var qNo = ["1. ", "2. ", "3. ", "4. ", "5. ", "6. ", "7. ", "8. ", "9. ", "10. "];
    var qQ = []; //question array by index
    var qA = []; //answer option array by index


    var displayQs = []; //object of arrays of Q + A by index



    for (var i = 0; i < questions.length; i++) {
        qQ.push(questions[i].ques);
    }

    for (var i = 0; i < questions.length; i++) {
        qA.push(questions[i].ans);
    }

    //
    for (var i = 0; i < questions.length; i++) {
        displayQs[i] = [qNo[i], qQ[i], qA[i]];
    }
    console.log(displayQs);

    // console.log(displayQs[1][0]);
    // console.log(displayQs[1][1]);
    // console.log(displayQs[1][2]);













    //Where all the correct answers are stored
    var correctAnswerList = [];

    for (var i = 0; i < questions.length; i++) {
        correctAnswerList.push(questions[i].correct);
    }

    console.log(correctAnswerList);








    //Where all the user answers are stored
    var userAnswerList = [];

    // $().on("click", )
    // whatever answer clicked will be stored into the array 















    // START GAME HERE //
    function startgame() {
        $("#results-box").hide();
        $("#time-up-box").hide();
        $("#timer-counter").hide();
        $("#questions-box").hide();
        $("#opening-box").show();
        $("#start-button").on("click", showQuestionBox);
    };


    


    //SHOW QUESTIONS BOX//
    function showQuestionBox() {
        $("#opening-box").hide();
        $("#questions-box").show();
        $("#timer-counter").show();
        displayQAs();//some function that will display the question and answer options
    };


function displayQAs(){
    // TIMER STUFF
    var counter = 11;
        var countdown = setInterval(timeIt, 1000);
        function timeIt() {
            counter--;
            $("#timer").html("<h2>" + counter + "</h2>");

            if (counter === 0) {
                clearInterval(countdown);
            };
        };

    for (var j = 0; j < questions.length; j++) {
        $("#question").html(displayQs[j][0] + displayQs[j][1]);

        $("#answer-options").append("<ul>" + "</ul>");
        for (var i = 0; i < 4; i++) {
            ("#answer-options").append("<li>" + something + "</li>");
        }

        // $("#answer-options").html();


    };
};



    


    startgame();
});




//============start game

// 