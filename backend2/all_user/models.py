from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class normal_user(AbstractUser):
    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=30)
    middle_name = models.CharField(max_length=30, blank=True, null=True)
    last_name = models.CharField(max_length=30)
    date_of_birth = models.DateField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='media/profile_pics/', default='media/profile_pic/shark.jpg')
    

class ultra_user(normal_user):
    phone_no = models.IntegerField(max_length=15, blank=True, null=True)
    author = models.BooleanField(default=False)