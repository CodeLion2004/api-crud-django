from rest_framework import viewsets
from .serializer import EstudianteSerializer
from .models import estudiante


class EstudianteView(viewsets.ModelViewSet):
    #aqui definimos que atributos seran convertidos en formato json
    serializer_class = EstudianteSerializer 
    #aqui definimos que atributos estaran disponibles del modelo para el crud
    queryset = estudiante.objects.all() 