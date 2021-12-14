from django.http import HttpResponse
from django.shortcuts import render


# Landing page
def index(request): 
  return HttpResponse(render(request, 'main.html'))