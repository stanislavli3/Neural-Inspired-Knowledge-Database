from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Route for the homepage
    path('api/notes/', views.notes_api, name='notes_api'),  # Route for the notes API
]
