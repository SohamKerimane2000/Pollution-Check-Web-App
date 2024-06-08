package  com.trainingapps.userms.exceptions;
// Exception for user not found case
public class UserNotFoundException extends Exception {
    public UserNotFoundException(String msg) {
        super(msg);
    }
}
