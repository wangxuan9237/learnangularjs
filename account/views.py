# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .forms import LoginForm
from django.contrib.auth import authenticate,login,logout
from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render

# Create your views here.

def user_login(request):
    if request.method == "GET":
        loginform = LoginForm()
        return render(request,"account/login.html",{"loginform":loginform})
    elif request.method == "POST":
        loginform = LoginForm(request.POST)
        if loginform.is_valid():
            cd = loginform.cleaned_data
            username = cd["username"]
            password = cd["password"]
            user = authenticate(username=username,password=password)
            if user:
                login(request,user)
                return HttpResponseRedirect("/")
            else:
                return HttpResponse("wrong username or password")

def user_logout(request):
    logout(request)
    return HttpResponse("success logout")

