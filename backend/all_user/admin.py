from django.contrib import admin
from .models import normal_user, ultra_user

# Register your models here.

admin.site.register(normal_user)
admin.site.register(ultra_user)