CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) UNIQUE NOT NULL,
    post_desc TEXT (500) NOT NULL,
    img_url VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);  

INSERT INTO posts(title, post_desc, img_url, created_at) VALUES (
    'Post E', 
    'Post E is the last added post that you can find',
    '/assets/images/post4.png',
    '2023-05-21 22:10:10'
);

SELECT title, post_desc FROM posts; 
SELECT * FROM posts LIMIT 3 OFFSET 4;

SELECT * FROM posts WHERE column=value
SELECT * FROM posts WHERE id IN(1,2,4);
SELECT * FROM posts WHERE post_desc LIKE '%can%';

UPDATE posts SET title = 'Post A Updated' WHERE title = 'Post A';
UPDATE posts SET img_url = "/public/assets/post1.png" WHERE id BETWEEN 1 AND 3;
 