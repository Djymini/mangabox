package com.mangabox.mangabox_backend.controller;

import com.mangabox.mangabox_backend.Daos.UserDao;
import com.mangabox.mangabox_backend.entities.User;
import com.mangabox.mangabox_backend.security.JwtUtil;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final UserDao userDao;
    private final PasswordEncoder encoder;
    private final JwtUtil jwtUtils;

    public AuthController(AuthenticationManager authenticationManager, UserDao userDao, PasswordEncoder encoder, JwtUtil jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.userDao = userDao;
        this.encoder = encoder;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody User user) {
        boolean userFound = userDao.existsByEmail(user.getEmail());
        if (userFound) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }
        User newUser = new User(user.getEmail(), encoder.encode(user.getPassword()), "USER");
        boolean isUSerSaved = userDao.save(newUser);
        return isUSerSaved ? ResponseEntity.ok("User registered successfully!") : ResponseEntity.badRequest().body("Error: User registration failed!");
    }

    @PostMapping("/login")
    public String authenticateUser(@RequestBody User user) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        user.getEmail(),
                        user.getPassword()
                )
        );
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        return jwtUtils.generateToken(userDetails.getUsername());
    }
}

