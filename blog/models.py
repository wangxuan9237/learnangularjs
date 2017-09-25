# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(User,related_name="blogs")
    body = models.TextField()
    published = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ("-published",)

    def __str__(self):
        return self.title
