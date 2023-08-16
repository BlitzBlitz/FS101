from django.urls import path
from django.views.generic import TemplateView
app_name = 'blog'

urlpatterns = [
    path('', TemplateView.as_view(template_name = "blog/index.html")),
    path('home', TemplateView.as_view(template_name = "blog/index.html")),
]
