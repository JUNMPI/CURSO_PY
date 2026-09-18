# ============================================================
#  CAPÍTULO 3 — Entrada del Usuario
#  Ejercicio 3.1 — Calculadora básica interactiva
# ============================================================
#
#  📌 ENUNCIADO:
#     Crea un programa que le pida al usuario dos números
#     y luego muestre los 4 resultados de operaciones básicas.
#   
#  💬 Lo que debe ver el usuario en pantalla:
#     Ingresa el primer número: _
#     Ingresa el segundo número: _
#
#     --- Resultados ---
#     Suma:           X
#     Resta:          X
#     Multiplicación: X
#     División:       X
#
#  💡 PISTAS CLAVE:
#     - input() SIEMPRE devuelve str, aunque el usuario
#       escriba un número. Debes convertirlo:
#         numero1 = float(input("Ingresa el primer número: "))
#
#     - Usa float en vez de int para que funcione con
#       números decimales también (ej: 3.5)
#
#     - Para la división: ¿qué pasa si el usuario pone 0?
#       No te preocupes por eso aún, lo veremos en el cap 9.
#       Por ahora asume que no dividirá entre cero.
#
#  🧪 Prueba tu programa con:
#     numero1 = 10,  numero2 = 4
#     Resultados esperados: 14.0 | 6.0 | 40.0 | 2.5
#
# ============================================================

# Escribe tu código aquí 👇

numero1 = input("ingresa el primer numero: ")
numero2 = input("ingresa el segundo numero: ")

numero1 = float(numero1)
numero2 = float(numero2)

suma = numero1 + numero2
resta = numero1 - numero2
multiplicacion = numero1 * numero2
division = numero1 / numero2

print("Suma:", suma)
print("Resta:", resta)
print("Multiplicacion:", multiplicacion)
print("Division:", division)

# ============================================================
#  Ejercicio 3.2 — Calculadora de IMC
# ============================================================
#
#  📌 ENUNCIADO:
#     El Índice de Masa Corporal (IMC) es una medida que
#     relaciona el peso y la altura de una persona.
#
#  💬 El programa debe pedir:
#     Tu peso en kilogramos: _
#     Tu altura en metros: _
#
#  🔢 Fórmula:
#     IMC = peso / altura ** 2
#
#  📋 Lo que debe imprimir tu programa:
#     Tu IMC es: XX.XX
#
#  🏷️ BONUS — Agrega también la categoría:
#     IMC < 18.5          → Bajo peso
#     18.5 ≤ IMC < 25.0   → Peso normal  ✅
#     25.0 ≤ IMC < 30.0   → Sobrepeso
#     IMC ≥ 30.0          → Obesidad
#
#     Ejemplo de salida con el bonus:
#     Tu IMC es: 23.18
#     Categoría: Peso normal ✅
#
#  💡 PISTAS:
#     - Usa float() para convertir ambas entradas
#     - El resultado debe mostrarse con 2 decimales: f"{imc:.2f}"
#     - Para el bonus necesitas if/elif/else (ya los viste
#       en la ruta, en el cap 4, pero intenta adelantarte 😄)
#       Si no, muestra solo el número por ahora.
#
# ============================================================

# Escribe tu código aquí 👇

peso = input("Tu peso en kilogramos: ")
altura = input("Tu altura en metros: ")

peso = float(peso)
altura = float(altura)

imc = peso / altura ** 2
print("Tu IMC es: ", f"{imc:.2f}")

if imc < 18.5:
    print("Categoría: Bajo peso")
elif imc < 25.0:
    print("Categoría: Peso normal")
elif imc < 30.0:
    print("Categoría: Sobrepeso")
else:
    print("Categoría: Obesidad")

#RANGO DEPESO SALUDABLE PARA LO QUE INGRESO EL USURIO
peso_minimo = 18.5 * altura ** 2
peso_maximo = 25.0 * altura ** 2

print("Tu rango de peso saludable es entre ", peso_minimo, " y ", peso_maximo, " kilogramos")

# ============================================================
#  Ejercicio 3.3 — Saludo personalizado con f-strings
# ============================================================
#
#  📌 ENUNCIADO:
#     Crea un programa que pida el nombre y año de nacimiento
#     del usuario, calcule su edad y muestre un saludo.
#
#  💬 El programa debe pedir:
#     ¿Cuál es tu nombre? _
#     ¿En qué año naciste? _
#
#  📋 Lo que debe imprimir (OBLIGATORIO usar f-strings):
#     ¡Hola, [nombre]! Tienes aproximadamente [edad] años.
#     Naciste en [año] y estamos en 2026.
#     ¡Que tengas un excelente día, [nombre]! 🎉
#
#  💡 PISTAS:
#     - El año actual es 2026
#     - edad = 2026 - año_nacimiento
#     - El nombre viene como str (no necesita conversión)
#     - El año de nacimiento viene como str → conviértelo a int
#     - f-string:  f"Hola, {nombre}! Tienes {edad} años."
#     - Puedes poner el nombre con mayúscula con: nombre.capitalize()
#
#  🎨 BONUS — Hazlo más vistoso:
#     Agrega una línea de "====" arriba y abajo del saludo
#
# ============================================================

# Escribe tu código aquí 👇

nombre = input("¿Cual es tu nombre?: ")
anio_nacimiento = input("¿En que año naciste?: ")

anio_nacimiento = int(anio_nacimiento)

edad = 2026 - anio_nacimiento


print("="*50)
print(f"""¡Hola, {nombre.capitalize()} Tienes aproximadamente {edad} años.
Naciste en {anio_nacimiento} y estamos en 2026.
¡Que tengas un excelente día, {nombre.capitalize()}! """)
print("="*50)

