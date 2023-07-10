SELECT * FROM posts 
    JOIN view_post ON post.id = post_id;



SELECT posts.* FROM posts 
    JOIN view_post ON posts.id = post_id
    JOIN users ON users.id = user_id
    WHERE users.id = 3;