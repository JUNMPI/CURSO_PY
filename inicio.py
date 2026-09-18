# ============================================================
#  🏆 RETO INTEGRADOR — Caps 1, 2 y 3
#  "Planificador de Viaje"
# ============================================================
#
#  📌 DESCRIPCIÓN:
#     Vas a crear un programa que ayude a planificar un viaje
#     en auto. El usuario ingresa datos y el programa calcula
#     todo lo necesario.
#
#  💬 El programa debe pedir al usuario:
#     1. Su nombre
#     2. El nombre del destino
#     3. La distancia al destino en km
#     4. El rendimiento de su auto (km por litro)
#     5. El precio actual de la gasolina (por litro)
#     6. Cuántos pasajeros van en el auto
#
#  🔢 Cálculos que debes hacer:
#     - litros_necesarios  = distancia / rendimiento
#     - costo_gasolina     = litros_necesarios * precio_litro
#     - costo_por_persona  = costo_gasolina / pasajeros
#     - tiempo_horas       = distancia / 100   (asume 100 km/h)
#     - tiempo_minutos     = tiempo_horas * 60
#
#  📋 Lo que debe imprimir tu programa (usa f-strings):
#
#     ============================================
#     🗺️  RESUMEN DE VIAJE — [NOMBRE DEL USUARIO]
#     ============================================
#     Destino        : [destino]
#     Distancia      : [X] km
#     ─────────────────────────────────────────
#     Gasolina       : [X.XX] litros
#     Costo total    : $[X.XX]
#     Costo/persona  : $[X.XX]
#     ─────────────────────────────────────────
#     Tiempo estimado: [X] horas y [X] minutos
#     ============================================
#     ¡Buen viaje, [nombre]! 🚗💨
#
#  💡 PISTAS:
#     - Usa float() para todos los números que pidas
#     - int() para el número de pasajeros
#     - Para los minutos usa el operador %  y para las
#       horas enteras usa //  (¡los operadores del cap 1!)
#     - Muestra los precios con 2 decimales usando :.2f
#     - Convierte tiempo_horas a horas enteras + minutos:
#         horas_enteras  = int(tiempo_horas)
#         minutos_resto  = int((tiempo_horas % 1) * 60)
#
#  ⭐ BONUS:
#     Al final imprime si el viaje es "corto" (< 2h),
#     "medio" (2-5h) o "largo" (> 5h)
#     usando solo lo que ya sabes (sin if aún... o sí 😄)
#
# ============================================================

# Escribe tu código aquí 👇

nombre = input("Ingrese su nombre: ")
destino = input("Ingrese el destino: ")
distancia= float(input("Ingrese la distancia en km: "))
rendimiento= float(input("Ingrese el rendimiento del auto (km por litro): "))
precio_litro= float(input("Ingrese el precio actual de la gasolina (por litro): "))
pasajeros= int(input("Ingrese el número de pasajeros: "))

litros_necesarios = distancia / rendimiento
costo_gasolina = litros_necesarios * precio_litro
costo_por_persona = costo_gasolina / pasajeros
tiempo_horas = distancia / 100
tiempo_minutos = tiempo_horas * 60

horas_enteras = int(tiempo_horas)
minutos_resto = int((tiempo_horas % 1) * 60)

print("\n" + "=" * 50)
print(f"🗺️  RESUMEN DE VIAJE — {nombre}")
print("=" * 50)
print(f"Destino        : {destino}")
print(f"Destino        : ", destino)
print(f"Distancia      : {distancia} km")
print("-" * 50)
print(f"Gasolina       : {litros_necesarios:.2f} litros")
print(f"Costo total    : ${costo_gasolina:.2f}")
print(f"Costo/persona  : ${costo_por_persona:.2f}")
print("-" * 50)
print(f"Tiempo estimado: {horas_enteras} horas y {minutos_resto} minutos")
print("=" * 50)
print(f"¡Buen viaje, {nombre}! 🚗💨 ")