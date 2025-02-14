package com.mangabox.mangabox_backend.controller;

import com.mangabox.mangabox_backend.Daos.OrderCommandDao;
import com.mangabox.mangabox_backend.Daos.UserDao;
import com.mangabox.mangabox_backend.entities.OrderCommand;
import com.mangabox.mangabox_backend.entities.Product;
import com.mangabox.mangabox_backend.security.JwtFilter;
import com.mangabox.mangabox_backend.security.JwtUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderCommandController {
    private final OrderCommandDao orderCommandDao;
    private final UserDao userDao;
    private final JwtUtil jwtUtil;

    public OrderCommandController(OrderCommandDao orderCommandDao, UserDao userDao, JwtUtil jwtUtil) {
        this.orderCommandDao = orderCommandDao;
        this.userDao = userDao;
        this.jwtUtil = jwtUtil;
    }

    @GetMapping("/all")
    public ResponseEntity<List<OrderCommand>> getAllOrder() {
        return ResponseEntity.ok(orderCommandDao.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderCommand> getOrderById(@PathVariable int id) {
        return ResponseEntity.ok(orderCommandDao.findById(id));
    }

    @GetMapping("/user")
    public ResponseEntity<List<OrderCommand>> getOrderByToken(@RequestHeader("Authorization") String authorizationHeader) {
        String token = authorizationHeader.substring(7);
        String email = jwtUtil.getEmailFromToken(token);
        int userId = userDao.findIdByEmail(email);
        return ResponseEntity.ok(orderCommandDao.findAllByUserId(userId));
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

    @PostMapping
    public ResponseEntity<OrderCommand> getUserByToken(@RequestHeader("Authorization") String authorizationHeader, @RequestBody OrderCommand orderCommand) {
        String token = authorizationHeader.substring(7);
        String email = jwtUtil.getEmailFromToken(token);
        int userId = userDao.findIdByEmail(email);
        OrderCommand createdOrder = orderCommandDao.save(userId, new OrderCommand(userId, LocalDateTime.now()));
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);
    }
}
