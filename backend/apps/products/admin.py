from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductModel(admin.ModelAdmin):
    fields = ['name', 'description', 'price', 'image']
    list_filter = []
    list_display = fields
    search_fields = ['name', 'description']