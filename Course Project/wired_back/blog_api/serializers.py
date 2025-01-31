from rest_framework import serializers
from blog.models import Post
from blog.models import Tag

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'title', 'img_url', 'created_at', 'author')
        model = Post

class PostSerializer(serializers.ModelSerializer):
    # Use StringRelatedField to represent tags as a list of tag names
    tags = serializers.StringRelatedField(many=True)
    author = serializers.StringRelatedField()

    class Meta:
        model = Post
        fields = '__all__'

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

# class AuthorSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Author
#         fields = '__all__'