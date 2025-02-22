package com.mangabox.mangabox_backend.entities;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;

public class User {
    private int id;

    @Email(message = "L'adresse mail rentrée n'est pas valide")
    private String email;

    @Pattern(regexp = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[=#?!@$%^&*-]).{8,}$", message = "Mot de passe invalide")
    private String password;

    private String role;

    public User() {}

    public User(int id, String email, String password, String role) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public User(String email, String password, String role) {
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
