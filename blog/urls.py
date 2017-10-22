from django.conf.urls import url,include
from . import views

urlpatterns = [
        url(r'^$',views.home_page,name='home_page'),
        url(r'^blogs$',views.BlogList.as_view(),name='blogs'),
        url(r'^blogs/(?P<id>[0-9]+)$',views.BlogDetail.as_view(),name='blog_detail'),
        ]
