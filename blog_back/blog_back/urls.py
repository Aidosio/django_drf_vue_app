from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from blog.views import *

from blog import views

blogRoute = routers.SimpleRouter()
blogRoute.register(r"blog", BlogList)

categoryRoute = routers.SimpleRouter()
categoryRoute.register(r"category", CategoryList)

urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('api/v1/', include(blogRoute.urls)),
                  path('api/v1/', include(categoryRoute.urls)),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
