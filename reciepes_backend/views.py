from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend


from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer


# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category']
