from apps.users.serializers import UserSerializer
from .models import Favourite
from rest_framework import serializers


class FavouriteSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Favourite
        fields = '__all__'


class ListFavouriteSerializer(serializers.ModelSerializer):
    user = UserSerializer (many = False, read_only = True)

    class Meta:
        model = Favourite
        fields = '__all__'
        depth = 1
