SELECT * FROM posts
    JOIN post_tag ON posts.id = post_id
    JOIN tags ON tags.id = tag_id
        WHERE tags.title = 'back-end'
        ORDER BY created_at
        LIMIT 10 OFFSET 0;

SELECT tags.title FROM posts
    JOIN post_tag ON posts.id = post_id
    JOIN tags ON tags.id = tag_id
        WHERE posts.title = 'Post B'
        ORDER BY created_at
        LIMIT 10 OFFSET 0;