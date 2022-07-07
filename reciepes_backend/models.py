from django.db import models


# Create your models here.

class Category(models.Model):
    category = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.category}'


class Recipe(models.Model):
    header = models.CharField(max_length=64)
    content = models.TextField()
    category = models.ManyToManyField(Category)

    def __str__(self):
        return f'{self.header}'
