package com.mangabox.mangabox_backend.controller;

import com.mangabox.mangabox_backend.Daos.ProductDao;
import com.mangabox.mangabox_backend.entities.Product;
import com.mangabox.mangabox_backend.entities.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {
    private final ProductDao productDao;

    public ProductController(ProductDao productDao) {
        this.productDao = productDao;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Product>> getAllProducts() {
        return ResponseEntity.ok(productDao.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable int id) {
        return ResponseEntity.ok(productDao.findById(id));
    }

    @GetMapping("/search")
    public ResponseEntity<List<Product>> getProductsBySearch(@RequestParam String query) {
        return ResponseEntity.ok(productDao.findBySearch(query));
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product createdProduct = productDao.save(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable int id, @RequestBody Product product) {
        Product updatedProduct = productDao.update(id, product);
        return ResponseEntity.ok(updatedProduct);
    }
}
