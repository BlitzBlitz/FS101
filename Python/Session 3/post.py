class Post: 
    def __init__(self, id, title, img_url, created_at, author):
        self.id = id
        self.title = title
        self.created_at = created_at
        self.img_url = img_url
        self.author = author
    # def __str__(self):
    #     return self.id + " : " + self.title + " : " + self.author_id
    
class User:
    def __init__(self, id, name, surname, email):
        self.id = id
        self.name = name
        self.surname = surname
        self.email = email
    # def __str__(self):
    #     return str(self.id) + " : " + self.name + " : " + self.surname

class Author(User):
    def __init__(self, id, name, surname, email, numberOfPosts, writingGenres ):
        super().__init__(id, name, surname, email)
        self.numberOfPosts = numberOfPosts
        self.writingGenres = writingGenres
    # def __str__(self):
    #     return str(self.id) + " : " + self.name + " : " + str(self.numberOfPosts)


author1 = Author(1, "Robert", "Walker", "rwalker@gmail.com", 12, ["Comedy", "Fiction"])
post1 = Post(1,"Post A", "/img/post1.png", "2020-20-20", author1)

print(author1)
print(post1.author)
print(author1.name)
post1.author.name = "Changed"
print(author1.name)
