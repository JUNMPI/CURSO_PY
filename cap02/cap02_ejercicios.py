# ============================================================
#  CAPÍTULO 2 — Variables y Tipos de Datos
#  Ejercicio 2.1 — Tarjeta de presentación
# ============================================================
#
#  📌 ENUNCIADO:
#     Define variables con tu propia información personal y
#     muestra una "tarjeta" con todos los datos.
#
#  🗂️ Variables que debes crear:
#     - nombre       → tu nombre (str)
#     - edad         → tu edad en años (int)
#     - altura       → tu altura en metros, ej: 1.75 (float)
#     - es_estudiante → True o False (bool)
#
#  📋 Lo que debe imprimir tu programa:
#     ========================
#     TARJETA DE PRESENTACIÓN
#     ========================
#     Nombre:       Juan
#     Edad:         25 años
#     Altura:       1.75 m
#     Estudiante:   True
#     ========================
#     Tipo de nombre:       <class 'str'>
#     Tipo de edad:         <class 'int'>
#     Tipo de altura:       <class 'float'>
#     Tipo de estudiante:   <class 'bool'>
#
#  💡 PISTAS:
#     - Las cadenas de texto van entre comillas: "Juan" o 'Juan'
#     - Los bool solo pueden ser True o False (con mayúscula)
#     - Puedes usar \t en el print para alinear el texto
#       o simplemente usa espacios para que se vea ordenado
#
# ============================================================

# Escribe tu código aquí 👇

nombre = "junior"
edad = 23
altura = 1.63
es_estudiante = True

print("========================")
print("TARJETA DE PRESENTACIÓN")
print("========================")
print("Nombre:", nombre)
print("Edad:", edad)
print("Altura:", altura)
print("Estudiante:", es_estudiante)
print("========================")
print("Tipo de nombre:", type(nombre))
print("Tipo de edad:", type(edad))
print("Tipo de altura:", type(altura))
print("Tipo de estudiante:", type(es_estudiante))

# ============================================================
#  Ejercicio 2.2 — Intercambio elegante de variables
# ============================================================
#
#  📌 ENUNCIADO:
#     Tienes dos variables con estos valores:
#       a = 10
#       b = 25
#
#     Intercambia sus valores (lo que tiene 'a' pasa a 'b'
#     y lo que tiene 'b' pasa a 'a') en UNA SOLA LÍNEA.
#
#  📋 Lo que debe imprimir tu programa:
#     Antes  →  a = 10  |  b = 25
#     Después →  a = 25  |  b = 10
#
#  🧠 RETO MENTAL:
#     La mayoría de lenguajes necesita una variable auxiliar:
#       temp = a
#       a = b
#       b = temp
#
#     Python tiene una forma MÁS elegante en 1 sola línea.
#     Pista: piensa en asignación múltiple →  x, y = ...
#
# ============================================================

# Escribe tu código aquí 👇

a = 10
b = 25

print("Antes:", a, "|", b)
a,b = b,a
print("despues:", a, "|", b)

# ============================================================
#  Ejercicio 2.3 — Conversión de tipos
# ============================================================
#
#  📌 ENUNCIADO:
#     Tienes estos dos valores guardados como texto (str):
#       texto_numero  = "42"
#       texto_decimal = "3.99"
#
#     El problema: si intentas sumarlos así → "42" + "3.99"
#     Python los CONCATENA como texto en lugar de sumarlos.
#     (Pruébalo si quieres verlo 😄)
#
#  ❓ Tu tarea:
#     1. Convierte texto_numero  al tipo entero   (int)
#     2. Convierte texto_decimal al tipo decimal  (float)
#     3. Súmalos y guarda el resultado en una variable
#     4. Imprime el resultado y su tipo
#
#  📋 Lo que debe imprimir tu programa:
#     Suma: 45.99
#     Tipo del resultado: <class 'float'>
#
#  💡 PISTAS:
#     - Para convertir a entero:  int("42")   → 42
#     - Para convertir a decimal: float("3.99") → 3.99
#     - ¿Por qué el resultado es float y no int?
#       Porque int + float siempre da float en Python
#
# ============================================================

# Escribe tu código aquí 👇

texto_numero = "42"
texto_decimal = "3.99"

texto_numero =int(texto_numero)
texto_decimal = float(texto_decimal)

suma = texto_numero + texto_decimal
print("Suma:", suma)
print("Tipo del resultado:", type(suma))

# ============================================================
#  Ejercicio 2.4 — Adivina el bool ⭐
# ============================================================
#
#  📌 ENUNCIADO:
#     En Python, CUALQUIER valor puede convertirse a bool.
#     La regla es simple:
#       → False: cero, vacío o nada  (0, "", [], None)
#       → True:  cualquier otra cosa
#
#  🧠 RETO MENTAL - Antes de correr el código, escribe en un
#     comentario qué crees que imprimirá cada línea:
#
#       print(bool(0))         # ¿True o False?
#       print(bool(1))         # ¿True o False?
#       print(bool(-5))        # ¿True o False?
#       print(bool(""))        # ¿True o False?
#       print(bool("hola"))    # ¿True o False?
#       print(bool(" "))       # ¿True o False?  ← ojo con este
#       print(bool([]))        # ¿True o False?
#       print(bool([0]))       # ¿True o False?  ← y este
#       print(bool(None))      # ¿True o False?
#
#  📋 Lo que debes hacer:
#     1. Escribe tu predicción como comentario al lado de cada línea
#     2. Corre el código
#     3. Cuenta cuántas acertaste
#
#  Ejemplo:
#     print(bool(0))   # mi predicción: False
#
# ============================================================

# Escribe tu código aquí 👇
# (pon tu predicción como comentario en cada línea)
print(bool(0))  # False
print(bool(1))  # True
print(bool(-5)) # True
print(bool("")) # False
print(bool("hola")) # True
print(bool(" ")) # True
print(bool([])) # False
print(bool([0])) # True
print(bool(None)) # False   
