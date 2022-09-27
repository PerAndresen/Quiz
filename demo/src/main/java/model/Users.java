package model;

import java.util.ArrayList;

public class Users{
    public ArrayList <UserOut> users;


    public Users(UserOut user1, UserOut user2){
        users = new ArrayList<>();   
    }

    public ArrayList<UserOut> getUsers(){
        return users;
    }
    public void setUsers(ArrayList<UserOut> users){
        this.users = users;
    }
}