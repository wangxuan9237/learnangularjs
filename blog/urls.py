from django.conf.urls import url
from . import views

urlpatterns = [
        url(r'^$',views.home_page,name='home_page'),
        url(r'^blogs/$',views.blog_list,name='blogs'),
        url(r'^blogs/(?P<id>[0-9]+)/$',views.blog_detail,name='blog_detail'),
        ]
