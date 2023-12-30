"""
Esta funcion es sin parametro"""
def saludarSinParametro():
    print("hola comunidad")

saludarSinParametro()



"""
Esta Funcion es con parametro
"""
def saludarConParametro(nombre):
    print("hola", nombre ,"bienvenido")

saludarConParametro("Juan")
saludarConParametro("Jaime")
saludarConParametro("Jen")

"""Funciones que nos devuelva valores"""

def suma (a,b):
    return a+b
"""HAy varias Forma de hacerlo"""
print(suma(3,4))
# o asi
resultado=suma(2,5)
print(resultado)
"""Pasando una función como parámetro a otra función"""

