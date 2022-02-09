from django.shortcuts import render
from rest_framework import generics
from .serializers import FavouriteSerializer
from .models import Favourite

# Create your views here.

class FavouriteList(generics.ListAPIView):
    queryset = Favourite.objects.order_by('-created_at').all()
    serializer_class = FavouriteSerializer


class FavouriteAdd(generics.CreateAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer


class FavouriteDelete(generics.DestroyAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer