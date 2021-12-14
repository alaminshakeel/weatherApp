from django.http import response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from weather.helper import get_weather_api_endpoint
from weather.models import CurrentWeatherData, WeatherForeCastData
from weather.serializer import WeatherForeCastDataSerializer
from weatherapp import settings
import requests
import json

class CurrentWeatherView(APIView):

    def get(self, request):


        if 'city_name' in request.GET:
            city_name = request.GET['city_name']

        if 'resource' in request.GET:
            resource = request.GET['resource']

        try:

            # generating open weather map api end point
            if resource == 'weather':               
                url = get_weather_api_endpoint(resource)+'&q=' + city_name
            elif resource == 'uvi':
                lat = request.GET['lat']
                lon = request.GET['lon']
                url = get_weather_api_endpoint(resource)+'&lat=' + lat + '&lon=' + lon

            response = requests.get(url)

            if response.status_code == 200:

                if isinstance(response.content, bytes):
                    resp = response.content.decode('utf-8')
                else:
                    resp = response.content

                # print(json.loads(resp)['ip'])
                data = json.loads(resp)

                # storing to db for later cache
                CurrentWeatherData.objects.filter(key=resource).delete()
                CurrentWeatherData(key=resource, value=resp).save()

                return Response({
                    'data': data,
                }, status=status.HTTP_200_OK)
                
            return Response({
                    'data': None,
                }, status=status.HTTP_200_OK)
        except:

            # fetching data from db 
            resp = CurrentWeatherData.objects.filter(key=resource).first()

            # serialize
            data = json.loads(resp.value)

            return Response({
                'data': data
            }, status=status.HTTP_200_OK)


class WeatherForeCastView(APIView):

    def get(self, request):

        if 'city_name' in request.GET:
            city_name = request.GET['city_name']

        resource = 'forecast'

        try:

            # generating open weather map api end point
            url = get_weather_api_endpoint(resource)+'&q=' + city_name
           
            response = requests.get(url)

            if response.status_code == 200:

                if isinstance(response.content, bytes):
                    resp = response.content.decode('utf-8')
                else:
                    resp = response.content

                data = json.loads(resp)

                #print(data['list'])
                f_list = []
                for idx, item in enumerate(data['list']):
                    if idx % 8 == 0:
                        f_list.append({
                            'dt_text': item['dt_txt'].split(' ')[0],
                            'icon': "https://openweathermap.org/img/wn/" + item['weather'][0]['icon'] + "@2x.png",
                            'description': item['weather'][0]['description'],
                            'temp': item['main']['temp'],
                            'humidity': item['main']['humidity']
                        }) 

                
                # storing to db for later cache
                WeatherForeCastData.objects.all().delete()
                for idx, item in enumerate(data['list']):
                    if idx % 8 == 0:
                        WeatherForeCastData(
                            dt_text=item['dt_txt'].split(' ')[0],
                            icon="https://openweathermap.org/img/wn/" + item['weather'][0]['icon'] + "@2x.png",
                            description=item['weather'][0]['description'],
                            temp=item['main']['temp'],
                            humidity=item['main']['humidity']
                        ).save()

                return Response({
                    'data': f_list,
                }, status=status.HTTP_200_OK)
                
            return Response({
                    'data': None,
                }, status=status.HTTP_200_OK)
        except:

            # fetching data from db 
            resp = WeatherForeCastData.objects.all()

            # serialize
            data = WeatherForeCastDataSerializer(resp, many=True).data

            return Response({
                'data': data
            }, status=status.HTTP_200_OK)

   