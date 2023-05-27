
CREATE TABLE author(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    author_name VARCHAR(50) NOT NULL,
    author_sirname VARCHAR(50) NOT NULL
)

INSERT INTO author (author_name, author_sirname) VALUES ('Ben', 'Richardson');
INSERT INTO author (author_name, author_sirname) VALUES ('Tim', 'Burner');
INSERT INTO author (author_name, author_sirname) VALUES ('John', 'Walker');

ALTER TABLE posts ADD CONSTRAINT fk_author_id FOREIGN KEY (author_id) REFERENCES auhtor(id);



CREATE TABLE post_content(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    content MEDIUMTEXT NOT NULL,
    post_id INT, FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

INSERT INTO post_content (content, post_id) VALUES ('Methodically scouring every link on a website for a conference half a world away. Hikvision, the world’s largest security camera manufacturer, was hosting the event—the 2018 AI Cloud World Summit—in its hometown of Hangzhou, a city of about 10 million people not far from Shanghai. Honovich, the founder of a small trade publication that covered video surveillance technology, wanted to find out what the latest Hikvision gear could do.', 1);
INSERT INTO post_content (content, post_id) VALUES ('He zeroed in on one section of the conference agenda titled “Eco-Friendly, Peaceful, Relaxed” and found a description of an AI-powered system installed around Mount Tai, a historically sacred mountain in Shandong. A video showed Hikvision cameras pointed at tourists climbing the thousands of stone steps leading to the famous peak. Piano music played as a narrator explained, in Mandarin with English subtitles, that the cameras were there “to identify all visitors to ensure the safety of all.” The video cut to a shot of a computer screen, and Honovich hit pause. He saw a zoomed-in view of one visitor’s face. Below it was data that the camera’s AI had inferred. Honovich downloaded the video and took screenshots of the computer screen, for safekeeping.', 1);
INSERT INTO post_content (content, post_id) VALUES ('Methodically scouring every link on a website for a conference half a world away. Hikvision, the world’s largest security.', 2);
