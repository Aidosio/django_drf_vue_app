from rest_framework import viewsets

from .models import *
from .serializers import *


class BlogList(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer

class CategoryList(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
