from django.db import models

# Create your models here.
class estudiante(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    edad = models.IntegerField()
    correo = models.EmailField()
    carrera = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre +' '+ self.apellido