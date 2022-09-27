package model;

public class UserOut{
    String name;
    int score;

    public UserOut(String name, int score){
        this.name = name;
        this.score = score; 
    }
    
    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    
    }
    public Integer getScore() {
        return score;
    }
    public void setScore(int score){
        this.score = score;
    }
    
}
