from django.conf.urls import include
from rest_framework import routers
from django.contrib import admin
from django.urls import path
from todo import views as todo_views
from frontend import urls as frontend_urls

router = routers.DefaultRouter()
router.register(r'todos', todo_views.TodoView, 'todos')

urlpatterns = [
    path('', include(frontend_urls)),
    path('', include('accounts.urls')),
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]