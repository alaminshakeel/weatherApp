from django.db import models

# Create your models here.
class CurrentWeatherData(models.Model):
    key = models.CharField(max_length=255, null=True, blank=True)
    value = models.TextField()