package model;

import java.util.ArrayList;

public class Questions{
    public ArrayList<Question> questions;

    public Questions(Question question1, Question question2, Question question3){
        questions = new ArrayList<>();
    }

    public ArrayList<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(ArrayList<Question> questions) {
        this.questions = questions;
    }
    public Question getQuestion(int index) {
        return questions.get(index);
    }

}

