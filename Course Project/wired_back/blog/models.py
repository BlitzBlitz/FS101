from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
# Create your models here.
class User(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=False)
    favourites = models.ManyToManyField('Post', blank=True, related_name='favourite_posts')

class Post(models.Model):
    title = models.CharField(max_length=100, null=False, unique=True)
    img_url = models.CharField(max_length=150, null=False, unique=True)
    created_at = models.DateTimeField(default=timezone.now())
    author = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='post_author')
