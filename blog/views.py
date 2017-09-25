# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Blog
from .serializers import BlogSerializer,BlogDetailSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

@csrf_exempt
def blog_list(request):
    if request.method == "GET":
        blogs = Blog.objects.all()
        serializers = BlogSerializer(blogs,many=True)
        return JsonResponse(serializers.data,safe=False)

@csrf_exempt
def blog_detail(request,id):
    if request.method == "GET":
        blog = Blog.objects.get(id=id)
        serializers = BlogDetailSerializer(blog)
        return JsonResponse(serializers.data,safe=False)

def home_page(request):
    return render(request,"index.html")
