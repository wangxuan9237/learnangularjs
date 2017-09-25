from rest_framework import serializers
from .models import Blog
from django.contrib.auth.models import User

class BlogSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source="author.username")
    class Meta:
        model = Blog
        fields = ("id","title","author","published","updated")

class BlogDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ("id","title","author","published","updated","body")
