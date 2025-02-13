package com.mangabox.mangabox_backend.controller;

import com.mangabox.mangabox_backend.Daos.OrderCommandDao;
import com.mangabox.mangabox_backend.entities.OrderCommand;
import com.mangabox.mangabox_backend.entities.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderCommandController {
    private final OrderCommandDao orderCommandDao;

    public OrderCommandController(OrderCommandDao orderCommandDao) {
        this.orderCommandDao = orderCommandDao;
    }

    @GetMapping("/all")
    public ResponseEntity<List<OrderCommand>> getAllOrder() {
        return ResponseEntity.ok(orderCommandDao.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderCommand> getOrderById(@PathVariable int id) {
        return ResponseEntity.ok(orderCommandDao.findById(id));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OrderCommand>> getOrderByUserId(@PathVariable int userId) {
        return ResponseEntity.ok(orderCommandDao.findAllByUserId(userId));
    }

    @PostMapping("/{userId}")
    public ResponseEntity<OrderCommand> createOrderCommand(@PathVariable int userId, @RequestBody OrderCommand orderCommand){
        OrderCommand createdOrderCommand = orderCommandDao.save(userId, orderCommand);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrderCommand);
    }
}
