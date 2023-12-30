"""def mayor(a,b):
    if a>b:
        return a
    
    return b

resultado= mayor(8,3)
print("El numero mas grande es", resultado)  
"""

#Cual es el numero mayor de estos tres numero
def mayor(a,b):
    if a>b:
        return a
    
    return b

a=8
b=3
c=15
d=10
resultado1= mayor(a,b)
resultado2= mayor(c,d)
resultado3= mayor(resultado1,resultado2)
print("El numero mas grande es", resultado3)


#Cual es el numero mayor de estos cuatro numero
def mayor(a,b):
    if a>b:
        return a
    
    return b

a=8
b=3
c=15
resultado1= mayor(a,b)
resultado2= mayor(c,resultado1)
print("El numero mas grande es", resultado2)


