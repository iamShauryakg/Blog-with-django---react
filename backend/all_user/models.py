from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class custom_user(AbstractUser):
    middle_name = models.CharField(max_length=30, blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', default='profile_pics/shark.jpg')
    
    phone_no = models.CharField(max_length=15, blank=True, null=True)
    is_ultra_user = models.BooleanField(default=False)
    is_author = models.BooleanField(default=False)

    def __str__(self):
        return self.username
