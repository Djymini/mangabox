package com.mangabox.mangabox_backend.entities;

public class ProductOrder {
    private int product_id;
    private int order_id;
    private int quantity;

    public ProductOrder() {
    }

    public ProductOrder(int product_id, int order_id, int quantity) {
        this.product_id = product_id;
        this.order_id = order_id;
        this.quantity = quantity;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public int getOrder_id() {
        return order_id;
    }

    public void setOrder_id(int order_id) {
        this.order_id = order_id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
