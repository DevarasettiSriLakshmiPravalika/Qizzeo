package com.myProjects.QizzeoBE.Service;

import com.myProjects.QizzeoBE.Models.User;
import com.myProjects.QizzeoBE.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) throws Exception {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new Exception("Email already registered");
        }
        return userRepository.save(user);
    }

    public User login(String email, String password) throws Exception {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user.get();
        } else {
            throw new Exception("Invalid email or password");
        }
    }
}
