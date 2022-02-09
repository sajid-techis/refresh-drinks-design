from .models import Favourite
from rest_framework import serializers


class FavouriteSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(allow_null=True)

    class Meta:
        model = Favourite
        fields = '__all__'