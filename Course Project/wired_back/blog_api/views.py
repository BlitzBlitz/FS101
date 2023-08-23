from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser

from blog.models import Post, User
from blog_api.serializers import PostSerializer


class TestView(APIView):

    def get(self):
        print("Hello World")
        return Response(status=status.HTTP_200_OK)
    def post(self):
        print("Hello World from POST")
        return Response(status=status.HTTP_200_OK)
    #talk to DB
    #return a response

class PostListAPIView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    def get(self, request):
        posts = None
        author_id = request.GET.get('author_id')
        favourite_id = request.GET.get('favourites_user_id')
        limit = request.GET.get('limit')
        offset = request.GET.get('offset')
        if(not limit):
            limit = 5
        else:
            limit = int(limit)
        if(not offset):
            offset = 0
        else:
            offset = int(offset)
        
        if(author_id):
            posts = Post.objects.filter(author = author_id)[offset:offset+limit]
        elif(favourite_id):
            user = User.objects.get(pk = favourite_id)[offset:offset+limit]
            if(user):
                posts = user.favourites
        else:
            posts = Post.objects.all()[offset:offset+limit]
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
class PostDetailedAPIView(APIView):
    def get(self, request, pk):
        try:
            post = Post.objects.get(pk=pk)
            serliazie = PostSerializer(post)
            return Response(serliazie.data)
        except Exception as e:
            return Response(status=status.HTTP_404_NOT_FOUND)
    def put(self, request, pk):
        try:
            post = Post.objects.get(pk = pk)
            serializer = PostSerializer(post,data = request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response( serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Post.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk):
        try:
            post = Post.objects.get(pk=pk)
            post.delete()
            return Response(status=status.HTTP_200_OK)
        except Exception as e:
            return Response(status=status.HTTP_404_NOT_FOUND)

        
  