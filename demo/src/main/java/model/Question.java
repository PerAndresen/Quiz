package model;

public class Question{
    String question;
    String alternative1;
    String alternative2;
    String alternative3;
    String alternative4;
    String answer;

    public Question
    (String question
    ,String alternative1, 
    String alternative2, 
    String alternative3,
    String answer
    ){
        this.question=question;
        this.alternative1=alternative1;
        this.alternative2=alternative2;
        this.alternative3=alternative3;
        this.answer = answer;
    }
    
    public String getQuestion() {
        return question;
    }
    public void setQuestion(String question) {
        this.question = question;
    }
    public String getAlternative1() {
        return alternative1;
    }
    public void setAlternative1(String alternative1) {
        this.alternative1 = alternative1;
    }
    public String getAlternative2() {
        return alternative2;
    }
    public void setAlternative2(String alternative2) {
        this.alternative2 = alternative2;
    }
    public String getAlternative3() {
        return alternative3;
    }
    public void setAlternative3(String alternative3) {
        this.alternative3 = alternative3;
    }
    public String getAnswer() {
        return answer;
    }
    public void setAnswer(String answer) {
        this.answer = answer;
    }
    

   
}