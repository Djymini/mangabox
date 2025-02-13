package com.mangabox.mangabox_backend.entities;

import java.time.LocalDate;

public class Order {
    private  int id;
    private int user_id;
    private LocalDate date;

    public Order() {
    }

    public Order(int id, int user_id, LocalDate date) {
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

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
