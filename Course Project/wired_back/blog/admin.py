from django.contrib import admin
from .models import Post, User, Tag, PostContent
# Register your models here.

admin.site.register(Post)
admin.site.register(User)
admin.site.register(Tag)
admin.site.register(PostContent)