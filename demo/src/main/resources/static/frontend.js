var index=0;
var questionsStored={}
var localScore=0;
var localScores={}


$(document).ready(function() {
    getQuestion()
    fetchScores()
    
    $("#nextQuestion").click(function(){
        checkAnswer()
        index+=1;
        if(index>questionsStored.length-1){
            index=questionsStored.length-1
            $("#rightOrWrong").append("    Er ingen flere spørsmål")
        }
        showQuestion(questionsStored[index])
    });
    $("#backQuestion").click(function(){  
        index-=1;
        if(index<0){
            index=0
        }
        showQuestion(questionsStored[index])
    });
    $("#showScore").click(function(){
        let name="User"
        showScore(name,localScore);
    })
});


function getQuestion(){
    console.log("Getting question");
    $.get("/question", function(questions){
        questionsStored=questions;
        showQuestion(questions[0]);
    });
    

}


function checkAnswer(){
    let answer = $("input[type='radio'][name='alternative']:checked").val();
    console.log(answer);
    let answerOut="";
    if(answer == 0){
        answerOut=questionsStored[index].alternative1;
    }
    else if(answer == 1){
        answerOut=questionsStored[index].alternative2;
    }
    else if(answer == 2){
        answerOut=questionsStored[index].alternative3;
    }
    console.log(answerOut);
    if(answerOut ==questionsStored[index].answer){
        $("#rightOrWrong").html("Riktig svar")
        localScore+=1;
    }
    else if(answerOut != questionsStored[index].answer){
        $("#rightOrWrong").html("Feil svar")
    }
    answerOut=""

}

function fetchScores(){
    $.get("/score/showall", function(user){
        console.log(user);
        localScores=user;
        /*
        for (l in localScores){
            showScore(l.name,l.score)
        }*/
        showScore(localScores[0].name,localScores[0].score)
        showScore(localScores[1].name,localScores[1].score)
    });
}

function showScore(name, score){
    let scoreTable="<tr><td>"+name+"</td><td>"+score+"</td></tr>"
    $("#scoreTable").append(scoreTable);
}


function showQuestion(questionOut){
    let ut="";
    let spmNr=index+1
    let questionRow = "<h1>Spørsmål:"+spmNr+"<h1>"+questionOut.question+"<br>";
    let alternatives="<div id='alternatives'> <input type='radio' name='alternative' value='0' id='alternative'><label id='alternative$1'>"+questionOut.alternative1+"</label></input>"+
    "<br>"+
    "<input type='radio' name='alternative' value='1' id='alternative'><label id='alternative2'>"+questionOut.alternative2+"</label></input>"+
    "<br>"+
    "<input type='radio' name='alternative' value='2' id='alternative'/><label id='alternative3'>"+questionOut.alternative3+"</label></input>"+
    +"<br>"
    ut= questionRow + alternatives;
    $("#spmboks").html(ut); 
    console.log(ut);
}

