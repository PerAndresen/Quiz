package com.example.demo;
import model.*;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller{  
    
    Question question1= new Question("Hva er hovedstaden i Norge?","Oslo","Stockholm","Berlin","Oslo");
    Question question2= new Question("Hva er Norges høyeste fjell?","Galdhøpiggen","Glittertind","Snøhetta", "Galdhøpiggen");
    Question question3= new Question("Hva er 9+10?","19","21","42", "19");    
    Questions questions= new Questions(question1,question2 ,question3);
    UserOut user1 = new UserOut("Per",10); 
    UserOut user2 = new UserOut("Julius",3);
    Users users = new Users(user1,user2);
    int indexIn = 0;

    @GetMapping("/score/showall")
    public List<UserOut> getScores(){
        return List.of(
            user1,
            user2
        );
    }


    //Ikke i bruk
    @PostMapping("/score/plusOne")
    public int increaseScore(UserOut user){
        int scoreOut = user.getScore()+ 1;
        return scoreOut;
    }

    @GetMapping("/question")
    public List<Question> getQuestion()
    {
        return List.of(
            question1,
            question2,
            question3
        );    
    }

    //Ikke i bruk
    @GetMapping("/question/answer")
    public Boolean answer(@RequestParam String proposedAnswer, @RequestParam int index){
        if(proposedAnswer.equals(questions.getQuestion(index).getAnswer()))
            return true;
        else{
            return false;
        }
    }

}