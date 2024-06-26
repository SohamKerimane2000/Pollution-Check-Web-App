package com.trainingapps.userms.controller;

import com.trainingapps.userms.dto.LoginUserRequest;
import com.trainingapps.userms.dto.RegisterRequestDto;
import com.trainingapps.userms.dto.UserDetails;
import com.trainingapps.userms.entity.AppUser;
import com.trainingapps.userms.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

//@CrossOrigin(origins = "*")
@RequestMapping("/users")
@RestController
public class UserController {

    @Autowired
    private IUserService service;

    @GetMapping("/byusername/{username}")
    public UserDetails getUserByUsername(@PathVariable String username) throws Exception {
        UserDetails response = service.findUserDetailsByUsername(username);
        System.out.println(response.toString());
        return response;
    }

    @GetMapping("/all")
    public List<UserDetails> getAllUsers(HttpServletRequest request) throws Exception{
          List<UserDetails> response = service.findAll();
        return response;
    }
    
    @PatchMapping("/{username}")
    public ResponseEntity<UserDetails> updateUserDetails(@PathVariable String username, @RequestBody AppUser updatedData) throws Exception{

    	UserDetails response = service.updateUserData(username,updatedData);
    	
        return ResponseEntity.ok(response);
    }
}
