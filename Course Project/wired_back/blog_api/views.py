from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from blog.models import Post, User
from blog_api.serializers import PostSerializer

class TestView(APIView):

    def get(self,request):
        print("Hello World")
        return Response(status=status.HTTP_200_OK)
    def post(self,request):
        print("Hello World from POST")
        return Response(status=status.HTTP_200_OK)
    #talk to DB
    #return a response

class PostListAPIView(APIView):
    def get(self, request):
        posts = None
        author_id = request.GET.get('author_id')
        favourite_id = request.GET.get('favourites_user_id')
        if(author_id):
            posts = Post.objects.filter(author = author_id)
        elif(favourite_id):
            user = User.objects.get(pk = favourite_id)
            if(user):
                posts = user.favourites
        else:
            posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    
class PostDetailedAPIView(APIView):
    def get(self, pk):
        print(pk)
        post = Post.objects.get(pk=pk)
        serliazie = PostSerializer(post)
        return Response(serliazie.data)


        
  