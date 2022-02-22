from django.shortcuts import render
from apps.users.mixins import CustomLoginRequiredMixin
from rest_framework.response import Response
from rest_framework import generics, status
from .serializers import FavouriteSerializer
from .models import Favourite, Product

# Create your views here.

class FavouriteList(generics.ListAPIView):
    queryset = Favourite.objects.order_by('-created_at').all()
    serializer_class = FavouriteSerializer

    def get(self, request, *args, **kwargs):
        self.queryset = Favourite.objects.order_by('-created_at').filter(user_id = request.login_user.id)
        return self.list(request, *args, **kwargs)


class FavouriteAdd(CustomLoginRequiredMixin, generics.CreateAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer

    def post(self, request, *args, **kwargs):
        serializer = FavouriteSerializer()
        serializer.validate(request.data)
        product_id = int(request.data['product'])
        print("home", product_id)
        product = Product.objects.get(id=product_id)

        existed = Favourite.objects.filter(product=product_id, user=request.login_user.id).first()
        print("existed",existed)

        if existed is not None:
            return Response('Home is already Saved', status.HTTP_400_BAD_REQUEST)

        if (product is None):
            return Response('Home not found.', status.HTTP_400_BAD_REQUEST)

        # request.data._mutable = True
        request.data['user'] = request.login_user.id
        request.data['product'] = product.id

        return self.create(request, *args, **kwargs)


class FavouriteDelete(CustomLoginRequiredMixin,generics.DestroyAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer
    lookup_field = 'id'

    def delete(self, request, *args, **kwargs):
        # Get URL Param
        id = self.kwargs['id']

        favourite = Favourite.objects.filter(user_id=request.login_user.id, id=id).first()

        if favourite is None:
            return Response('Favourite not found.', status.HTTP_400_BAD_REQUEST)

        self.destroy(request, *args, **kwargs)
        
        return Response({'message': "Success."})