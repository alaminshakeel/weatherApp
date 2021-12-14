from django.db import models

# Create your models here.
class CurrentWeatherData(models.Model):
    key = models.CharField(max_length=255, null=True, blank=True)
    value = models.TextField()


class WeatherForeCastData(models.Model):
    dt_text = models.CharField(max_length=50, null=False)
    temp = models.CharField(max_length=3, null=False)
    humidity = models.CharField(max_length=3, null=False)
    icon = models.TextField()
    description = models.TextField()