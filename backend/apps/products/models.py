from django.db import models
from cloudinary.models import CloudinaryField

class Product(models.Model):
    class Meta(object):
        db_table = 'product'

    name = models.CharField(
        'Name', blank=False, null=False, max_length=50
    )
    description = models.CharField(
        'Description', blank=True, null=True, max_length=255
    )
    price = models.FloatField(
        'Price', blank=False, null=False
    )
    image = CloudinaryField(
        "Product Image", blank=True, null=True
    )

    def __str__(self):
        return self.name