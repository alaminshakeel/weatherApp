###
#   Common Helper functions
###

from weatherapp import settings


def get_weather_api_endpoint(resource=''):

    return "https://api.openweathermap.org/data/2.5/"+resource+"?appid=" + settings.WEATHER_API_KEY \
        + '&units=imperial' 