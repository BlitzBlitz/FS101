CREATE TABLE tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL UNIQUE
)

INSERT INTO tags(title) VALUES ('databases');
INSERT INTO tags(title) VALUES ('web');
INSERT INTO tags(title) VALUES ('front-end');
INSERT INTO tags(title) VALUES ('back-end');


CREATE TABLE post_tag(
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    tag_id INT,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
)

SELECT posts.*, tags.title FROM posts
JOIN post_tag ON posts.id = post_id
JOIN tags
ON tags.id = tag_id
WHERE tags.title = 'back-end';


SELECT * FROM posts
JOIN post_tag ON posts.id = post_id
JOIN tags
ON tags.id = tag_id;

