# ============================================================
#  CAPÍTULO 1 — Operadores y Expresiones
#  Ejercicio 1.1 — Área de un círculo  ✅ COMPLETADO
# ============================================================

PI = 3.14159
radio = 7
area = PI * radio ** 2

print("El area del circulo con radio 7 es:", area)
print("Eres un pro eres un genio!!!")
print(type(area))

# ============================================================
#  Ejercicio 1.2 — División entera y módulo
# ============================================================
#
#  📌 ENUNCIADO:
#     Tienes 100 naranjas y quieres repartirlas en cajas de 12.
#
#  ❓ Preguntas a responder con código:
#     1. ¿Cuántas cajas COMPLETAS puedes llenar?
#     2. ¿Cuántas naranjas SOBRAN?
#
#  📋 Lo que debe imprimir tu programa:
#     Cajas completas: X
#     Naranjas sobrantes: X
#
#  💡 PISTAS:
#     - Para cajas completas usa el operador //  (división entera)
#     - Para las sobrantes usa el operador %    (módulo / residuo)
#     - Ejemplo: 10 // 3 = 3  y  10 % 3 = 1
#
# ============================================================

# Escribe tu código aquí 👇

naranjas = 100
cajas = 12
completas = naranjas // cajas
sobrantes = naranjas % cajas


print("cajas completas:", completas)
print("naranjas sobrantes:", sobrantes)

# ============================================================
#  Ejercicio 1.3 — Orden de operaciones
# ============================================================
#
#  📌 ENUNCIADO:
#     Antes de escribir código, intenta calcular mentalmente
#     cuánto vale esta expresión:
#
#       resultado = 2 ** 4 + (10 % 3) * 5 - 8 // 3
#
#  🧠 RETO MENTAL (hazlo en papel o en tu cabeza primero):
#     Paso 1: ¿Cuánto es  2 ** 4   ?
#     Paso 2: ¿Cuánto es  10 % 3   ?
#     Paso 3: ¿Cuánto es  ese resultado * 5  ?
#     Paso 4: ¿Cuánto es  8 // 3   ?
#     Paso 5: Suma y resta todo → ¿cuál es el resultado final?
#
#  📋 Lo que debe imprimir tu programa:
#     Resultado: X
#     Tipo de dato: <class '...'>
#
#  💡 PISTAS - Orden de prioridad en Python (de mayor a menor):
#     1. ()   → paréntesis primero
#     2. **   → potencia
#     3. * / // %  → multiplicación y divisiones
#     4. + -  → suma y resta al final
#
# ============================================================

# Escribe tu código aquí 👇
# (Primero adivina el resultado, luego compruébalo con Python)
resultado = 2 ** 4 + (10 % 3) * 5 - 8 // 3
print("El resultado es:", resultado)
print("El tipo de dato es:", type(resultado))

# ============================================================
#  Ejercicio 1.4 — Conversión de temperatura
# ============================================================
#
#  📌 ENUNCIADO:
#     La temperatura corporal normal es 98.6°F (Fahrenheit).
#     Conviértela a grados Celsius.
#
#  🔢 Fórmula:
#     celsius = (fahrenheit - 32) * 5 / 9
#
#  📋 Lo que debe imprimir tu programa:
#     98.6°F equivalen a 37.0°C
#
#  💡 PISTAS:
#     - Guarda 98.6 en una variable llamada fahrenheit
#     - Aplica la fórmula respetando el orden de operaciones
#     - Los paréntesis son importantes aquí: (fahrenheit - 32)
#     - El resultado debe ser float, ¿por qué?
#
# ============================================================

# Escribe tu código aquí 👇
fahrenheit = 98.6
celsius = (fahrenheit - 32) * 5 / 9
print("98.6°F equivalen a", celsius, "°C")
print("El tipo de dato es:", type(celsius))

# ============================================================
#  Ejercicio 1.5 ⭐ RETO — El viaje en auto
# ============================================================
#
#  📌 ENUNCIADO:
#     Un auto recorre 350 km usando 28 litros de gasolina.
#     El precio de la gasolina es $22.50 por litro.
#
#  ❓ Calcula e imprime los 3 datos siguientes:
#     1. Rendimiento: ¿cuántos km hace por cada litro?
#     2. Consumo:     ¿cuántos litros necesita por cada 100 km?
#     3. Costo:       ¿cuánto costó en total el viaje?
#
#  📋 Lo que debe imprimir tu programa:
#     Rendimiento: X.XX km/litro
#     Consumo:     X.XX litros/100km
#     Costo total: $XXX.XX
#
# ============================================================

# Escribe tu código aquí 👇
distancia = 350
litros = 28
precio_litro = 22.50

rendimineto = distancia / litros
consumo= litros / distancia * 100
costo = litros *precio_litro

print("Rendimiento:", rendimineto, "km/litro")
print("Consumo:", consumo, "litros/100km")
print("Costo total: $",f"{costo:.4f}") 


