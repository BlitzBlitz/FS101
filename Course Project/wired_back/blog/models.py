from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
# Create your models here.
class User(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=False)
    favourites = models.ManyToManyField('Post', blank=True, related_name='favourite_posts')
    viewed_posts = models.ManyToManyField('Post', blank=True, related_name='viewed_posts')

    def __str__(self) -> str:
        return self.user.username

class Post(models.Model):
    title = models.CharField(max_length=100, null=False, unique=True)
    img_url = models.ImageField(upload_to='post_images/', null=True)
    created_at = models.DateTimeField(default=timezone.now())
    author = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='post_author')
    tags = models.ManyToManyField('Tag', blank=True, related_name='posts_tag')

    def __str__(self) -> str:
        return self.title

class Tag(models.Model):
    title = models.CharField(max_length=100, null=False, unique=True)

    def __str__(self) -> str:
        return self.title
    
class PostContent(models.Model):
    paragraph = models.TextField(null=False, blank=False)
    post = models.ForeignKey(Post, on_delete=models.DO_NOTHING)

    def __str__(self) -> str:
        return self.paragraph