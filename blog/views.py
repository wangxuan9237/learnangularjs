# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Blog
from .serializers import BlogSerializer,BlogDetailSerializer
from django.http import JsonResponse,HttpResponse
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

@csrf_exempt
def blog_list(request):
    if request.method == "GET":
        blogs = Blog.objects.all()
        serializers = BlogSerializer(blogs,many=True)
        return JsonResponse(serializers.data,safe=False)
    if request.method == "POST":
        data = JSONParser().parse(request)
        #use BlogDetailSerializer
        serializer = BlogDetailSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors,status=400)

@csrf_exempt
def blog_detail(request,id):
    try:
        blog = Blog.objects.get(id=id)
    except Blog.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == "GET":
        blog = Blog.objects.get(id=id)
        serializers = BlogDetailSerializer(blog)
        return JsonResponse(serializers.data,safe=False)
    if request.method == "PUT":
        data = JSONParser().parse(request)
        serializer = BlogDetailSerializer(blog,data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors,status=400)
    elif request.method == "DELETE":
        blog.delete()
        return HttpResponse(status=204)



def home_page(request):
    return render(request,"index.html")
