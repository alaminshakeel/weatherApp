from rest_framework import serializers

from weather.models import CurrentWeatherData
import json

class CurrentWeatherDataSerializer(serializers.ModelSerializer):
    data = serializers.SerializerMethodField()
    
    class Meta:
        model = CurrentWeatherData
        fields = ('data',)

    def get_data(self, obj):
        print(json.loads(obj.value))
        return json.loads(obj.value)

