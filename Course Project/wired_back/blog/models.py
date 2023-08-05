from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100, null=False, unique=True)
    img_url = models.CharField(max_length=150, null=False, unique=True)
    created_at = models.DateTimeField(default=timezone.now())
    author_id = models.ForeignKey(to=User, on_delete=models.DO_NOTHING)
