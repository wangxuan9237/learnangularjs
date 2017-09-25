from django.conf.urls import url
from . import views
from django.contrib.auth import views as auth_views
urlpatterns = [
         url(r'^login/$',views.user_login,name='user_login'),
         url(r'^logout/$',views.user_logout,name='user_logout'),
]
