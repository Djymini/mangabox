CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    collection VARCHAR(255) NOT NULL,
    overview TEXT,
    price DECIMAL(10, 2) NOT NULL,
    author VARCHAR(255) NOT NULL,
    releaseDate DATE NOT NULL,
    coverImage VARCHAR(255) NOT NULL,
    stock INT NOT NULL,
    publisher VARCHAR(255) NOT NULL,
    genres JSON NOT NULL
);

--INSERT INTO product (title, collection, overview, price, author, releaseDate, coverImage, stock, publisher, genres)
--VALUES
--    ("Naruto Tome 1", "Naruto", "L'histoire de Naruto Uzumaki, un ninja qui rêve de devenir Hokage.", 6.99, "Masashi Kishimoto", "2000-02-21", "https://www.nautiljon.com/images/manga/00/90/naruto_109.webp?1731141057", 150, "Kana", '["Action", "Aventure", "Shonen"]'),
--    ("One Piece Tome 1", "One Piece", "Luffy, un jeune pirate, part à la recherche du trésor légendaire : le One Piece.", 7.99, "Eiichiro Oda", "1997-07-22", "https://www.nautiljon.com/images/manga_volumes/00/89/98.webp?1706911272", 200, "Glénat", '["Aventure", "Action", "Fantasy"]'),
--    ("Dragon Ball Tome 1", "Dragon Ball", "L'histoire de Son Goku, un jeune garçon qui se lance dans une aventure pour retrouver les Dragon Balls.", 5.99, "Akira Toriyama", "1984-11-04", "https://www.nautiljon.com/images/manga_volumes/00/00/4900.webp?1498323432", 180, "Glénat", '["Action", "Aventure", "Shonen"]'),
--    ("Attack on Titan Tome 1", "Attack on Titan", "L'humanité lutte pour sa survie contre des créatures géantes appelées Titans.", 8.50, "Hajime Isayama", "2009-09-09", "https://www.nautiljon.com/images/manga/00/17/l_attaque_des_titans_1471.webp?1722330528", 130, "Pika Édition", '["Action", "Fantasy", "Drame"]'),
--    ("My Hero Academia Tome 1", "My Hero Academia", "Izuku Midoriya, un garçon sans pouvoirs, rêve de devenir un super-héros.", 6.50, "Kohei Horikoshi", "2014-07-07", "https://www.nautiljon.com/images/manga_volumes/00/69/20696.webp?1713470066", 220, "Ki-oon", '["Action", "Shonen", "Super-héros"]'),
--    ("Fullmetal Alchemist Tome 1", "Fullmetal Alchemist", "Deux frères, Edward et Alphonse, cherchent à retrouver leurs corps après une expérience alchimique ratée.", 7.99, "Hiromu Arakawa", "2001-07-12", "https://www.nautiljon.com/images/manga/00/21/fullmetal_alchemist_12.webp?1730726300", 160, "Kurokawa", '["Action", "Aventure", "Fantasy"]'),
--    ("Demon Slayer Tome 1", "Demon Slayer", "Tanjiro Kamado, un jeune garçon, devient un chasseur de démons pour venger sa famille.", 6.99, "Koyoharu Gotouge", "2016-02-15", "https://www.nautiljon.com/images/manga_volumes/00/71/35417.webp?1612729641", 250, "Panini Manga", '["Action", "Fantasy", "Shonen"]'),
--    ("Bleach Tome 1", "Bleach", "Ichigo Kurosaki, un adolescent capable de voir les fantômes, devient un Shinigami pour protéger les vivants.", 5.99, "Tite Kubo", "2001-08-07", "https://www.nautiljon.com/images/manga_volumes/00/40/104.webp?1605549107", 180, "Glénat", '["Action", "Aventure", "Shonen"]'),
--    ("Tokyo Ghoul Tome 1", "Tokyo Ghoul", "Ken Kaneki, un étudiant, se transforme en demi-ghoul après un accident avec un monstre.", 7.50, "Sui Ishida", "2011-10-17", "https://www.nautiljon.com/images/manga_volumes/00/88/6388.webp?1458135955", 140, "Glénat", '["Horreur", "Action", "Mystère"]'),
--    ("Death Note Tome 1", "Death Note", "Light Yagami découvre un carnet qui permet de tuer toute personne dont il écrit le nom.", 8.00, "Tsugumi Ohba", "2003-12-01", "https://www.nautiljon.com/images/manga/00/81/death_note_18.webp?1716886620", 190, "Kana", '["Mystère", "Psychologique", "Thriller"]'),
--    ("One Punch Man Tome 1", "One Punch Man", "Saitama, un héros ennuyeux, peut battre n'importe quel ennemi en un seul coup.", 6.99, "ONE", "2009-06-14", "https://www.nautiljon.com/images/manga_volumes/00/19/21091.webp?1519213406", 220, "Kurokawa", '["Action", "Comédie", "Super-héros"]'),
--    ("Fairy Tail Tome 1", "Fairy Tail", "Lucy rejoint la guilde des magiciens Fairy Tail et rencontre Natsu et ses compagnons.", 6.50, "Hiro Mashima", "2006-12-15", "https://www.nautiljon.com/images/manga_volumes/00/18/81.webp?1582740146", 180, "Pika Édition", '["Action", "Aventure", "Fantasy"]'),
--    ("Hunter x Hunter Tome 1", "Hunter x Hunter", "Gon Freecss veut devenir un Hunter et retrouver son père disparu.", 7.99, "Yoshihiro Togashi", "1998-03-03", "https://www.nautiljon.com/images/manga_volumes/00/31/2613.webp?1557751980", 200, "Kana", '["Aventure", "Action", "Shonen"]'),
--    ("JoJo's Bizarre Adventure Tome 1", "JoJo's Bizarre Adventure", "L'histoire de la famille Joestar et de leurs combats contre des ennemis surnaturels.", 8.99, "Hirohiko Araki", "1987-01-01", "https://www.nautiljon.com/images/manga_volumes/00/80/mini/8908.webp?10", 150, "Kazé Manga", '["Action", "Aventure", "Fantasy"]'),
--    ("Vinland Saga Tome 1", "Vinland Saga", "Thorfinn, un jeune viking, cherche à venger la mort de son père.", 8.00, "Makoto Yukimura", "2005-04-13", "https://www.nautiljon.com/images/manga_volumes/00/84/mini/248.webp?11558515411", 100, "Kurokawa", '["Action", "Histoire", "Drame"]'),
--    ("Kenshin le vagabond Tome 1", "Kenshin le vagabond", "Un samouraï errant, Kenshin, protège les innocents tout en cherchant la rédemption.", 6.50, "Nobuhiro Watsuki", "1994-09-02", "https://www.nautiljon.com/images/manga_volumes/00/34/mini/643.webp?11566726516", 160, "Kana", '["Action", "Aventure", "Historique"]'),
--    ("Neon Genesis Evangelion Tome 1 - Édition Deluxe", "Neon Genesis Evangelion", "Shinji Ikari rejoint l'organisation NERV pour combattre des entités surnaturelles.", 7.50, "Yoshiyuki Sadamoto", "1995-12-05", "https://www.nautiljon.com/images/manga_volumes/11/17/neon_genesis_evangelion_1_edition_deluxe945371.webp?1652398442", 140, "Glénat", '["Mecha", "Action", "Psychologique"]'),
--    ("Mob Psycho 100 Tome 1", "Mob Psycho 100", "Un adolescent avec des pouvoirs psychiques cherche à vivre une vie normale.", 6.99, "ONE", "2012-04-18", "https://www.nautiljon.com/images/manga/00/65/mini/mob_psycho_100_4356.webp?11718273045", 190, "Kurokawa", '["Comédie", "Action", "Psychologique"]');


CREATE TABLE IF NOT EXISTS orderCommand (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    date DATETIME(0) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);


CREATE TABLE IF NOT EXISTS product_order (
    product_id INT NOT NULL,
    order_id INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    PRIMARY KEY (product_id, order_id),
    FOREIGN KEY (product_id) REFERENCES product(id),
    FOREIGN KEY (order_id) REFERENCES orderCommand(id)
);

