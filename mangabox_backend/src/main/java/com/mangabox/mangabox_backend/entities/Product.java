package com.mangabox.mangabox_backend.entities;

import java.time.LocalDate;
import java.util.List;

public class Product {
    private int id;
    private String title;
    private String collection;
    private String overview;
    private double price;
    private String author;
    private LocalDate releaseDate;
    private String coverImage;
    private int stock;
    private String publisher;
    private List<String> genres;

    public Product() {}

    public Product(int id, String title, String collection, String overview, double price, String author, LocalDate releaseDate, String coverImage, int stock, String publisher, List<String> genres) {
        this.id = id;
        this.title = title;
        this.collection = collection;
        this.overview = overview;
        this.price = price;
        this.author = author;
        this.releaseDate = releaseDate;
        this.coverImage = coverImage;
        this.stock = stock;
        this.publisher = publisher;
        this.genres = genres;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCollection() {
        return collection;
    }

    public void setCollection(String collection) {
        this.collection = collection;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getCoverImage() {
        return coverImage;
    }

    public void setCoverImage(String coverImage) {
        this.coverImage = coverImage;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public List<String> getGenres() {
        return genres;
    }

    public void setGenres(List<String> genres) {
        this.genres = genres;
    }
}
