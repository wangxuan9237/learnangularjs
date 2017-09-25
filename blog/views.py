# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Blog
from .serializers import BlogSerializer
from rest_framework import generics
from .permissions import CsrfExemptSessionAuthentication,IsOwnerOrReadOnly
from rest_framework import permissions
from rest_framework.authentication import BasicAuthentication
from django.views.decorators.csrf import csrf_exempt
# Create your views here.

class BlogList(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly)
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)
    def perform_create(self,serializer):
        serializer.save(author=self.request.user)


class BlogDetail(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,IsOwnerOrReadOnly)
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)

def home_page(request):
    return render(request,"index.html")
