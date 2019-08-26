from django.conf.urls import include
from rest_framework import routers
from django.contrib import admin
from django.urls import path
from backend import views as backend_views
from frontend import urls as frontend_urls

router = routers.DefaultRouter()
router.register(r'todos', backend_views.TodoView)

urlpatterns = [
    path('', include(frontend_urls)),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]