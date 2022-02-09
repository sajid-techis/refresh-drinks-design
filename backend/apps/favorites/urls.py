from django.urls import path
from . import views

urlpatterns = [
    path('', views.FavouriteList.as_view(), name='favourite_list'),
    path('add/', views.FavouriteAdd.as_view(), name='favourite_add'),
    path('delete/', views.FavouriteDelete.as_view(), name='favourite_delete'),

]