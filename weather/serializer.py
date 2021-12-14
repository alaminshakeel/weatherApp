from rest_framework import serializers

from weather.models import WeatherForeCastData
import json

class WeatherForeCastDataSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = WeatherForeCastData
        fields = ('dt_text','icon', 'description', 'temp', 'humidity')

