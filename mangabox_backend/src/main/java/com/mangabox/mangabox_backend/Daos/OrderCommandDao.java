package com.mangabox.mangabox_backend.Daos;

import com.mangabox.mangabox_backend.entities.OrderCommand;
import com.mangabox.mangabox_backend.exceptions.RessourceNotFoundException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public class OrderCommandDao {
    private final JdbcTemplate jdbcTemplate;

    public OrderCommandDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    private final RowMapper<OrderCommand> orderCommandRowMapper = (rs, _) -> new OrderCommand(
            rs.getInt("id"),
            rs.getInt("user_id"),
            rs.getTimestamp("date").toLocalDateTime()
    );

    public List<OrderCommand> findAll() {
        String sql = "SELECT * FROM orderCommand";
        return jdbcTemplate.query(sql, orderCommandRowMapper);
    }

    public OrderCommand findById(int id) {
        String sql = "SELECT * FROM orderCommand WHERE id = ?";
        return jdbcTemplate.query(sql, orderCommandRowMapper, id)
                .stream()
                .findFirst()
                .orElseThrow(() -> new RessourceNotFoundException("La commande avec l'ID : " + id + " n'existe pas"));
    }

    public List<OrderCommand> findAllById(int id) {
        String sql = "SELECT * FROM orderCommand WHERE id = ?";
        return jdbcTemplate.query(sql, orderCommandRowMapper, id);
    }

    public List<OrderCommand> findAllByUserId(int userId) {
        String sql = "SELECT * FROM orderCommand WHERE user_id = ?";
        return jdbcTemplate.query(sql, orderCommandRowMapper, userId);
    }

    public OrderCommand save(int userID, OrderCommand orderCommand) {
        orderCommand.setUser_id(userID);
        String sql = "INSERT INTO orderCommand (user_id, date) VALUES (?, ?)";
        jdbcTemplate.update(sql, orderCommand.getUser_id(), LocalDateTime.now());

        String sqlGetId = "SELECT LAST_INSERT_ID()";
        int id = jdbcTemplate.queryForObject(sqlGetId, int.class);

        orderCommand.setId(id);
        return orderCommand;
    }

    public int findLastOrder(int userId) {
        String sqlGetId = "SELECT id FROM orderCommand WHERE user_id = ? ORDER BY id DESC LIMIT 1";

        return jdbcTemplate.queryForObject(sqlGetId, Integer.class, userId);
    }


    public boolean delete(int id) {
        String sql = "DELETE FROM orderCommand WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, id);
        return rowsAffected > 0;
    }

    private boolean orderExists(Long id) {
        String checkSql = "SELECT COUNT(*) FROM orderCommand WHERE id = ?";
        int count = jdbcTemplate.queryForObject(checkSql, Integer.class, id);
        return count > 0;
    }
}
