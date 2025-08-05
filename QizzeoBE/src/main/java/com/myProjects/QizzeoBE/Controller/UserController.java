package com.myProjects.QizzeoBE.Controller;

import com.myProjects.QizzeoBE.Models.User;
import com.myProjects.QizzeoBE.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Quiz")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/addUD")
    public User register(@RequestBody User user) throws Exception {
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User loginData) throws Exception {
        return userService.login(loginData.getEmail(), loginData.getPassword());
    }
}
