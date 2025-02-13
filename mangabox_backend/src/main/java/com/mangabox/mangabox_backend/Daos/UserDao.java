package com.mangabox.mangabox_backend.Daos;

import com.mangabox.mangabox_backend.entities.User;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDao {
    private final JdbcTemplate jdbcTemplate;

    public UserDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<User> userRowMapper = (rs, _) -> new User(
            rs.getInt("id"),
            rs.getString("email"),
            rs.getString("password"),
            rs.getString("role")
    );

    public List<User> findAll() {
        String sql = "SELECT * FROM user";
        return jdbcTemplate.query(sql, userRowMapper);
    }

    public User findById(int id) {
        String sql = "SELECT * FROM user WHERE id = ?";
        return jdbcTemplate.query(sql, userRowMapper, id)
                .stream()
                .findFirst()
                .orElseThrow(() -> new UserNotFoundException("Utilisateur avec l'ID : " + id + " n'existe pas"));
    }

    public User findByEmail(String email) {
        String sql = "SELECT * FROM user WHERE email = ?";
        return jdbcTemplate.query(sql, userRowMapper, email)
                .stream()
                .findFirst()
                .orElseThrow(() -> new UserNotFoundException("Utilisateur avec l'email : " + email + " n'existe pas"));
    }

    public int findIdByEmail(String email){
        String sql = "SELECT id FROM user where email = ?";
        try {
            return jdbcTemplate.queryForObject(sql, Integer.class, email);
        } catch (EmptyResultDataAccessException e) {
            throw new UserNotFoundException("Il y a aucun Id qui correspond à l'email :" + email);
        }
    }


    public boolean save(User user) {
        String sql = "INSERT INTO `user` (email, password, role) VALUES (?, ?, ?)";
        int rowsAffected = jdbcTemplate.update(sql, user.getEmail(), user.getPassword(), user.getRole());
        return rowsAffected > 0;
    }

    public User update(int id, User user) {
        if (!userExists(id)) {
            throw new UserFoundException("L'utilisateur avec l'ID : " + id + " n'existe pas");
        }

        String sql = "UPDATE user SET email = ?, password = ? WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, user.getEmail(), user.getPassword(), id);

        if (rowsAffected <= 0) {
            throw new UserNotFoundException("Échec de la mise à jour de l'utilisateur avec l'ID : " + id);
        }

        return this.findById(id);
    }

    private boolean userExists(int id) {
        String checkSql = "SELECT COUNT(*) FROM user WHERE id = ?";
        int count = jdbcTemplate.queryForObject(checkSql, Integer.class, id);
        return count > 0;
    }

    public boolean existsByEmail(String email) {
        String sql = "SELECT COUNT(*) FROM user WHERE email = ?";
        return jdbcTemplate.queryForObject(sql, Integer.class, email) > 0;
    }

    public boolean delete(int id) {
        String sql = "DELETE FROM user WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, id);
        return rowsAffected > 0;
    }
}
