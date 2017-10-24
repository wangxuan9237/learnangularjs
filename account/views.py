# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from .forms import LoginForm
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate,login,logout
from django.http import HttpResponse,HttpResponseRedirect,JsonResponse
from django.shortcuts import render
import json

# Create your views here.

#need to be changed
@csrf_exempt
def user_login(request):
    if request.method == "POST":
        received_json_data = json.loads(request.body)
        username = received_json_data["username"]
        password = received_json_data["password"]
        print username
        print password
        user = authenticate(username=username,password=password)
        if user:
            login(request,user)
            return JsonResponse({"login":"0"})
        else:
            return JsonResponse({"login":"1"})

@csrf_exempt
@login_required
def user_logout(request):
    logout(request)
    return JsonResponse({"logout":"0"})
