from django.urls import path
from . import views

urlpatterns = [
    path('blogs/', views.BlogListCreateAPIView.as_view()),
    path('blogs/<int:pk>/', views.BlogDetails.as_view()),
    path('comments/', views.CommentListAPIView.as_view()),
    path('comments/<int:pk>/', views.CommentDetails.as_view()),    
] 