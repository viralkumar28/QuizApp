var questions=[{
    question: "Two straight lines are drawn perpendicular to each other in X-Y plane. If α and β are the acute angles the straight lines make with the X-axis, then α+β is ______.",
    choices:["60","120","180","90"],
    correctAnswer:3
},{
    question: "Select the word that fits the analogy: Cook : Cook :: Fly : _____",
    choices:["Flyer","Flying","Flew","Flighter"],
    correctAnswer:0
},
{
    question: "Raman is confident of speaking English _____ six months as he has been practising regularly_____the last three weeks.",
    choices:["for, in","during, for","for, since","within, for"],
    correctAnswer:3
},
{
    question: "If P = 3, R = 27, T = 243, then Q+S = ______.",
    choices:["80","110","40","90"],
    correctAnswer:3
},
{
    question: "His knowledge of the subject was excellent but his classroom performance was ______.",
    choices:["good","praiseworthy","extremely poor","desirable"],
    correctAnswer:2
},
{
    question: "Which one of the following is used to represent the supporting many-one relationships of a weak entity set in an entity-relationship diagram?",
    choices:["Ovals that contain underlined identifiers","Rectangles with double/bold border","Diamonds with double/bold border","Ovals with double/bold border"],
    correctAnswer:2
},
{
    question: "Ten freiends planned to share equally the cost of buying a gift for their teacher. When two of them decided not to contribute, each of the other friends had to pay Rs 150 more. The cost of the gift was Rs. _____.",
    choices:["12000","666","3000","6000"],
    correctAnswer:3
},
{
    question: "The expenditure on the project _____ as follows; equipment Rs.20 lakhs, salaries Rs.12 lakhs, and contingency Rs.3 lakhs.",
    choices:["break down","break","breaks down","breaks"],
    correctAnswer:2
},
{
    question: "The search engine's business model _____ around the fulcrum of trust.",
    choices:["bursts","revolves","sinks","plays"],
    correctAnswer:1
},
{
    question: "Two cars start at the same time from the same location and go in the same direction. The speed of the first car is 50 Km/h and the speed of the second car is 60 Km/h. The number of hours it takes for the distance between the two cars to be 20 Km is _____.",
    choices:["2","3","1","6"],
    correctAnswer:1
}];
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
$(document).ready(function(){
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".nextButton").on("click",function(){
        if(!quizOver){
            value = $("input[type='radio']:checked").val();
            if(value == undefined){
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            }else{
                $(document).find(".quiZMessage").hide();
                if(value == questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }
                currentQuestion++;
                if(currentQuestion < questions.length){
                    displayCurrentQuestion();
                }else{
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        }else{
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});
function displayCurrentQuestion(){
    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for(i = 0;i < numChoices; i++){
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value='+ i +'name="dyradio" />' + choice + '</li>').appendTo(choiceList);
    }
}
function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore(){
    $(document).find(".quizContainer > .result").text("You Scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}
function hideScore(){
    $(document).find(".result").hide();
}