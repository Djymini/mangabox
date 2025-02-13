package com.mangabox.mangabox_backend.controller;

import com.mangabox.mangabox_backend.Daos.ProductOrderDao;
import com.mangabox.mangabox_backend.entities.OrderCommand;
import com.mangabox.mangabox_backend.entities.ProductOrder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/productOrder")
public class ProductOrderController {
    private final ProductOrderDao productOrderDao;

    public ProductOrderController(ProductOrderDao productOrderDao) {
        this.productOrderDao = productOrderDao;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ProductOrder>> getAllProductOrder() {
        return ResponseEntity.ok(productOrderDao.findAll());
    }

    @PostMapping
    public ResponseEntity<ProductOrder> addProductOrder(@RequestBody ProductOrder productOrder) {
        ProductOrder createdProductOrder = productOrderDao.save(productOrder);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProductOrder);
    }
}
