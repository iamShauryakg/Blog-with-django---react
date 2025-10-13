from django.db import models
from ..all_user.models import ultra_user, normal_user


# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(ultra_user, on_delete=models.CASCADE)
    comments = models.ManyToManyField('Comment', blank=True, related_name='blog_comments')


class Comment(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(normal_user, on_delete=models.CASCADE)