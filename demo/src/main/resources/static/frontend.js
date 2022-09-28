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
    $("#popup").click(function(){
        showPopup();
    })
    $("#questionAdd").click(function(){
        let newQuestion = $("#new-question").val();
        let newAlternative1 = $("#new-alternative1").val();
        let newAlternative2 = $("#new-alternative2").val();
        let newAlternative3 = $("#new-alternative3").val();
        let newAnswer = $("#new-answer").val();
        console.log(newQuestion);
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

function showPopup(){
    let popup = window.open("about:question","question","width=200,height=200")
    popup.onload = function() {
        let html = `<div style="font-size:30px">Legg til spørsmål!</div>
                    <form><label for="new-question">Spørsmål</label>
                    <input type="text" id="new-question" name="new-question"><br><br>
                    <label for="new-alternative1">Alternativ1</label>
                    <input type="text" id="new-alternative1" name="new-alternative1"><br><br>
                    <label for="new-alternative2">Alternativ2</label>
                    <input type="text" id="new-alternative2" name="new-alternative2"><br><br>
                    <label for="new-alternative3">Alternativ3</label>
                    <input type="text" id="new-alternative3" name="new-alternative3"><br><br>
                    <label for="new-answer">Answer</label>
                    <input type="text" id="new-answer" name="new-answer"><br><br>
                    </form><br><br>
                    <button id="questionAdd">Legg til spørsmål</button>`
                    ;
        popup.document.body.insertAdjacentHTML('afterbegin', html); 
      };
    
}

