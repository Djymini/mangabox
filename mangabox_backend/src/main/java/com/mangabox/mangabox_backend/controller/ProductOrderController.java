package com.mangabox.mangabox_backend.controller;

import com.mangabox.mangabox_backend.Daos.OrderCommandDao;
import com.mangabox.mangabox_backend.Daos.ProductOrderDao;
import com.mangabox.mangabox_backend.Daos.UserDao;
import com.mangabox.mangabox_backend.entities.OrderCommand;
import com.mangabox.mangabox_backend.entities.ProductOrder;
import com.mangabox.mangabox_backend.security.JwtUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/productOrder")
public class ProductOrderController {
    private final ProductOrderDao productOrderDao;
    private final UserDao userDao;
    private final JwtUtil jwtUtil;
    private final OrderCommandDao orderCommandDao;

    public ProductOrderController(ProductOrderDao productOrderDao, UserDao userDao, JwtUtil jwtUtil, OrderCommandDao orderCommandDao) {
        this.productOrderDao = productOrderDao;
        this.userDao = userDao;
        this.jwtUtil = jwtUtil;
        this.orderCommandDao = orderCommandDao;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ProductOrder>> getAllProductOrder() {
        return ResponseEntity.ok(productOrderDao.findAll());
    }

    @PostMapping
    public ResponseEntity<ProductOrder> getUserByToken(@RequestHeader("Authorization") String authorizationHeader, @RequestBody ProductOrder productOrder) {
        String token = authorizationHeader.substring(7);
        String email = jwtUtil.getEmailFromToken(token);
        int userId = userDao.findIdByEmail(email);
        int orderNumber = orderCommandDao.findLastOrder(userId);
        System.out.println(orderNumber);
        ProductOrder createdProductOrder = productOrderDao.save(new ProductOrder(productOrder.getProduct_id(), orderNumber, productOrder.getQuantity()));
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProductOrder);
    }
}
