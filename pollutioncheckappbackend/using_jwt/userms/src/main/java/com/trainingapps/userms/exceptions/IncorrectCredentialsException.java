package com.trainingapps.userms.exceptions;
//Exception for incorrect credentials
public class IncorrectCredentialsException extends Exception{
    public IncorrectCredentialsException(String msg){
        super(msg);
    }
}
