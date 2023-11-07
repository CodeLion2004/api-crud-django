from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from estudiante import views

#genera la rutas automaticamente para nuestro modelo
router = routers.DefaultRouter()
#estudiante es la ruta y view es la respuesta hacia el cliente
router.register(r'estudiante',views.EstudianteView)

#esto se hace para centralizar las rutas y sus vistas 
urlpatterns=[
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title='Estudiante API'))
]



