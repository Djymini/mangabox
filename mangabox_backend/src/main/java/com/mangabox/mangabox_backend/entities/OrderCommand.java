package com.mangabox.mangabox_backend.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class OrderCommand {
    DateTimeFormatter formatDate = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");

    private  int id;
    private int user_id;
    private LocalDateTime date;

    public OrderCommand() {
    }

    public OrderCommand(int id, int user_id, LocalDateTime date) {
        this.id = id;
        this.user_id = user_id;
        this.date = date;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
