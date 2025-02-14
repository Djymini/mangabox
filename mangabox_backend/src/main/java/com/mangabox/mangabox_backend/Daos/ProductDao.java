package com.mangabox.mangabox_backend.Daos;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.mangabox.mangabox_backend.entities.Product;
import com.mangabox.mangabox_backend.exceptions.RessourceNotFoundException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
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
        Gson gson = new Gson();
        String sql = "INSERT INTO product (title, collection, overview, price, author, releaseDate, coverImage, stock, publisher, genres) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, product.getTitle(), product.getCollection(),product.getOverview(), product.getPrice(), product.getAuthor(), product.getReleaseDate(), product.getCoverImage(), product.getStock(), product.getPublisher(), gson.toJson(product.getGenres()));
        String sqlGetId = "SELECT LAST_INSERT_ID()";
        int id = jdbcTemplate.queryForObject(sqlGetId, int.class);

        product.setId(id);
        return product;
    }

    public List<Product> findBySearch(String search) {
        String searchPattern = "%" + search + "%";
        String sql = "SELECT * FROM product WHERE title LIKE ?";
        return jdbcTemplate.query(sql, productRowMapper, searchPattern);
    }


    public List<Product> findWithCritere(int minPrice, int maxPrice, String search, List<String> publisherList, List<String> genresList) {
        // Initialisation de la requête SQL de base
        StringBuilder searchPattern = new StringBuilder("SELECT * FROM product WHERE price > ? AND price < ?");

        // Liste pour stocker les paramètres de la requête SQL
        List<Object> params = new ArrayList<>();
        params.add(minPrice);
        params.add(maxPrice);

        // Ajouter la condition sur le titre de produit
        if (search != null && !search.isEmpty()) {
            searchPattern.append(" AND title LIKE ?");
            params.add("%" + search + "%");
        }

        // Ajouter la condition pour les éditeurs (publishers)
        if (publisherList != null && !publisherList.isEmpty()) {
            searchPattern.append(" AND (");
            for (int i = 0; i < publisherList.size(); i++) {
                searchPattern.append("publisher = ?");
                params.add(publisherList.get(i));
                if (i < publisherList.size() - 1) {
                    searchPattern.append(" OR ");
                }
            }
            searchPattern.append(")");
        }

        // Ajouter la condition pour les genres
        if (genresList != null && !genresList.isEmpty()) {
            for (String genre : genresList) {
                searchPattern.append(" AND JSON_CONTAINS(genres, ?)");
                params.add("\"" + genre + "\"");
            }
        }

        // Affichage de la requête générée (utile pour déboguer)
        System.out.println("Generated query: " + searchPattern.toString());

        // Exécution de la requête avec les paramètres
        return jdbcTemplate.query(searchPattern.toString(), params.toArray(), productRowMapper);
    }




    public Product update(int id, Product product) {
        Gson gson = new Gson();
        if (!productExists(id)) {
            throw new RessourceNotFoundException("Produit avec l'ID : " + id + " n'existe pas");
        }

        String sql = "UPDATE product SET title = ?, collection = ?, overview = ?, price = ?, author = ?, releaseDate = ?, coverImage = ?, stock = ?, publisher = ?, genres = ? WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, product.getTitle(), product.getCollection(), product.getOverview(), product.getPrice(), product.getAuthor(), product.getReleaseDate(), product.getCoverImage(), product.getStock(), product.getPublisher(), gson.toJson(product.getGenres()), id);;

        if (rowsAffected <= 0) {
            throw new RuntimeException("Échec de la mise à jour du produit avec l'ID : " + id);
        }

        return this.findById(id);
    }

    public Product updateForBuy(int id, Product product) {
        Gson gson = new Gson();
        if (!productExists(id)) {
            throw new RessourceNotFoundException("Produit avec l'ID : " + id + " n'existe pas");
        }

        if (!checkStock(id)) {
            throw new RessourceNotFoundException("Plus de stock");
        }

        String sql = "UPDATE product SET title = ?, collection = ?, overview = ?, price = ?, author = ?, releaseDate = ?, coverImage = ?, stock = ?, publisher = ?, genres = ? WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, product.getTitle(), product.getCollection(), product.getOverview(), product.getPrice(), product.getAuthor(), product.getReleaseDate(), product.getCoverImage(), product.getStock(), product.getPublisher(), gson.toJson(product.getGenres()), id);;

        if (rowsAffected <= 0) {
            throw new RessourceNotFoundException("Échec de la mise à jour du produit avec l'ID : " + id);
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

    public boolean checkStock(int id) {
        String checkSql = "SELECT COUNT(*) FROM product WHERE id = ? AND stock > 0";
        int count = jdbcTemplate.queryForObject(checkSql, Integer.class, id);
        return count > 0;
    }
}
