from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100, db_index=True)

    def __str__(self):
        return self.name


class Blog(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey('Category', on_delete=models.PROTECT, null=True)
    image = models.ImageField(upload_to='uploads/', blank=True, null=True)
    contend = models.TextField(blank=True)

    def __str__(self):
        return self.name
