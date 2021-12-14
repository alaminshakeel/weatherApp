from django.urls import path
from . import views

urlpatterns = [
  path(r'', views.CurrentWeatherView.as_view(), name="current"),
  path(r'forecast/', views.WeatherForeCastView.as_view(), name="forecast"),
]