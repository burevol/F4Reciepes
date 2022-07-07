from rest_framework import serializers
from .models import Category, Recipe


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'category']


class RecipeSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True)

    class Meta:
        model = Recipe
        fields = ['id', 'header', 'content', 'category']
