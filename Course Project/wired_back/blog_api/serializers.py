from rest_framework import serializers
from blog.models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'title', 'img_url', 'created_at', 'author')
        model = Post