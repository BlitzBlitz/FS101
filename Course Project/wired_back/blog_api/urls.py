from django.urls import path
from blog_api.views import PostListAPIView, PostDetailedAPIView
app_name = 'blog_api'

urlpatterns = [
    path('posts', PostListAPIView.as_view(), name="post_list" ),
    path('posts/<int:pk>', PostDetailedAPIView.as_view(), name="post_list" ),
]
