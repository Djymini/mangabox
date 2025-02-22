package com.mangabox.mangabox_backend.controller;

import com.mangabox.mangabox_backend.Daos.UserDao;
import com.mangabox.mangabox_backend.entities.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserDao userDao;

    public UserController(UserDao userDao) {
        this.userDao = userDao;
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userDao.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserbyId(@PathVariable int id) {
        return ResponseEntity.ok(userDao.findById(id));
    }

    @PostMapping
    public void saveUser(@RequestBody User user) {
        userDao.save(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable int id, @RequestBody User user) {
        User updateUser = userDao.update(id, user);
        return ResponseEntity.ok(updateUser);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable int id) {
        if (userDao.delete(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
