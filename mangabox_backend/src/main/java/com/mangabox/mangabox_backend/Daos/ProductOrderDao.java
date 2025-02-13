package com.mangabox.mangabox_backend.Daos;

import com.mangabox.mangabox_backend.entities.ProductOrder;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductOrderDao {
    private final JdbcTemplate jdbcTemplate;

    public ProductOrderDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    private final RowMapper<ProductOrder> productOrderRowMapper = (rs, _) -> new ProductOrder(
            rs.getInt("product_id"),
            rs.getInt("order_id"),
            rs.getInt("quantity")
    );

    public List<ProductOrder> findByOrderId(int orderId) {
        String sql = "SELECT * FROM movie_list WHERE order_id = ?";
        return jdbcTemplate.query(sql, productOrderRowMapper, orderId);
    }

    public ProductOrder save(ProductOrder productOrder) {
        String sql = "INSERT INTO product_order (product_id, order_id, quantity) VALUES (?, ?, ?)";
        jdbcTemplate.update(sql, productOrder.getProduct_id()), productOrder.getOrder_id(), productOrder.getQuantity());

        return productOrder;
    }

    private boolean productExists(int listId, int movieId) {
        String conditionForCount = "list_id = " + listId + " and movie_id = " + movieId;
        String checkSql = "SELECT COUNT(*) FROM movie_list WHERE ?";
        int count = jdbcTemplate.queryForObject(checkSql, Integer.class, conditionForCount);
        return count > 0;
    }

    public boolean delete(int listId, int movieId) {
        String conditionForDelete = "list_id = " + listId + " and movie_id = " + movieId;
        String sql = "DELETE FROM favorite WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, conditionForDelete);
        return rowsAffected > 0;
    }
}
