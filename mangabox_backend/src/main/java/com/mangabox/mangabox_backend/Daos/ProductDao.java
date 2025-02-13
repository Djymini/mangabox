package com.mangabox.mangabox_backend.Daos;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mangabox.mangabox_backend.entities.Product;
import com.mangabox.mangabox_backend.exceptions.RessourceNotFoundException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class ProductDao {
    private final JdbcTemplate jdbcTemplate;

    public ProductDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Product> productRowMapper = (rs, _) -> {
        try {
            String jsonGenres = rs.getString("genres");
            ObjectMapper objectMapper = new ObjectMapper();
            List<String> genres = objectMapper.readValue(jsonGenres, List.class);

            return new Product(
                    rs.getInt("id"),
                    rs.getString("title"),
                    rs.getString("collection"),
                    rs.getString("overview"),
                    rs.getDouble("price"),
                    rs.getString("author"),
                    rs.getDate("releaseDate").toLocalDate(),
                    rs.getString("coverImage"),
                    rs.getInt("stock"),
                    rs.getString("publisher"),
                    genres
            );
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    };

    public List<Product> findAll() {
        String sql = "SELECT * FROM product";
        return jdbcTemplate.query(sql, productRowMapper);
    }

    public Product findById(int id) {
        String sql = "SELECT * FROM product WHERE id = ?";
        return jdbcTemplate.query(sql, productRowMapper, id)
                .stream()
                .findFirst()
                .orElseThrow(() -> new RessourceNotFoundException("Produit avec l'ID : " + id + " n'existe pas"));
    }

    public Product save(Product product) {
        String sql = "INSERT INTO product (title, collection, overview, price, author, releaseDate, coverImage, stock, publisher, genres) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, product.getTitle(), product.getCollection(), product.getPrice(), product.getAuthor(), product.getReleaseDate(), product.getCoverImage(), product.getStock(), product.getPublisher(), product.getGenres());

        String sqlGetId = "SELECT LAST_INSERT_ID()";
        int id = jdbcTemplate.queryForObject(sqlGetId, int.class);

        product.setId(id);
        return product;
    }

    public Product update(int id, Product product) {
        if (!productExists(id)) {
            throw new RessourceNotFoundException("Produit avec l'ID : " + id + " n'existe pas");
        }

        String sql = "UPDATE product SET title = ?, collection = ?, overview = ?, price = ?, author = ?, releaseDate = ?, coverImage = ?, stock = ?, publisher = ?, genres = ? WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, product.getTitle(), product.getCollection(), product.getPrice(), product.getAuthor(), product.getReleaseDate(), product.getCoverImage(), product.getStock(), product.getPublisher(), product.getGenres(), id);;

        if (rowsAffected <= 0) {
            throw new RuntimeException("Échec de la mise à jour du produit avec l'ID : " + id);
        }

        return this.findById(id);
    }

    public boolean delete(int id) {
        String sql = "DELETE FROM product WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, id);
        return rowsAffected > 0;
    }

    private boolean productExists(int id) {
        String checkSql = "SELECT COUNT(*) FROM product WHERE id = ?";
        int count = jdbcTemplate.queryForObject(checkSql, Integer.class, id);
        return count > 0;
    }
}
