# 🐍 Ruta de Aprendizaje — Python desde Cero hasta POO

> **Tu objetivo:** Repasar y dominar Python progresivamente, desde lo más básico hasta Programación Orientada a Objetos.
> Cada capítulo tiene ejercicios para que los resuelvas tú. ¡Pídele a Antigravity que te revise cada uno!

---

## 📋 Índice de Capítulos

| #   | Capítulo                                                                     | Temas                                   | Estado       |
| --- | ---------------------------------------------------------------------------- | --------------------------------------- | ------------ |
| 1   | [Operadores y Expresiones](#capítulo-1----operadores-y-expresiones)          | Aritmética, tipos, `print`              | 🔄 En curso  |
| 2   | [Variables y Tipos de Datos](#capítulo-2----variables-y-tipos-de-datos)      | `int`, `float`, `str`, `bool`           | ⏳ Pendiente |
| 3   | [Entrada del Usuario](#capítulo-3----entrada-del-usuario)                    | `input()`, conversión de tipos          | ⏳ Pendiente |
| 4   | [Condicionales](#capítulo-4----condicionales)                                | `if`, `elif`, `else`                    | ⏳ Pendiente |
| 5   | [Bucles](#capítulo-5----bucles)                                              | `for`, `while`, `break`, `continue`     | ⏳ Pendiente |
| 6   | [Funciones](#capítulo-6----funciones)                                        | `def`, parámetros, `return`             | ⏳ Pendiente |
| 7   | [Colecciones](#capítulo-7----colecciones)                                    | Listas, tuplas, diccionarios, sets      | ⏳ Pendiente |
| 8   | [Cadenas de Texto](#capítulo-8----cadenas-de-texto)                          | Métodos de `str`, f-strings, slicing    | ⏳ Pendiente |
| 9   | [Manejo de Errores](#capítulo-9----manejo-de-errores)                        | `try`, `except`, `finally`              | ⏳ Pendiente |
| 10  | [Módulos y Archivos](#capítulo-10----módulos-y-archivos)                     | `import`, leer/escribir ficheros        | ⏳ Pendiente |
| 11  | [POO — Fundamentos](#capítulo-11----poo-fundamentos)                         | Clases, objetos, `__init__`             | ⏳ Pendiente |
| 12  | [POO — Herencia y Polimorfismo](#capítulo-12----poo-herencia-y-polimorfismo) | Herencia, `super()`, override           | ⏳ Pendiente |
| 13  | [POO — Encapsulamiento](#capítulo-13----poo-encapsulamiento-y-avanzado)      | Privado, propiedades, métodos estáticos | ⏳ Pendiente |
| 14  | [Proyecto Final](#capítulo-14----proyecto-final)                             | Sistema completo con POO                | ⏳ Pendiente |

---

## 📗 Capítulo 1 — Operadores y Expresiones

### ✅ Lo que ya sabes (de `inicio.py`)

```python
resul = 3 ** 3 * (13/5 - (2*4))
print("El resultado es:", resul)
print(type(resul))
```

### 🧠 Conceptos clave

| Operador        | Descripción       | Ejemplo                |
| --------------- | ----------------- | ---------------------- |
| `+` `-` `*` `/` | Aritmética básica | `10 / 3` → `3.333`     |
| `//`            | División entera   | `10 // 3` → `3`        |
| `%`             | Módulo (residuo)  | `10 % 3` → `1`         |
| `**`            | Potencia          | `2 ** 8` → `256`       |
| `type()`        | Tipo de dato      | `type(3.14)` → `float` |

### 💪 Ejercicios — Capítulo 1

> Crea el archivo `cap01_ejercicios.py` y resuelve cada uno.

**Ejercicio 1.1 — Área de un círculo**

```
Calcula el área de un círculo con radio = 7.
Fórmula: área = π * r²   (usa 3.14159 como π)
Imprime el resultado y su tipo de dato.
```

**Ejercicio 1.2 — División entera y módulo**

```
Tienes 100 naranjas y quieres repartirlas en cajas de 12.
¿Cuántas cajas completas puedes llenar?
¿Cuántas naranjas sobran?
Imprime ambos resultados con mensajes descriptivos.
```

**Ejercicio 1.3 — Orden de operaciones**

```
Evalúa mentalmente primero, luego comprueba con Python:
  resultado = 2 ** 4 + (10 % 3) * 5 - 8 // 3
Imprime el resultado. ¿Es int o float? Verifícalo con type().
```

**Ejercicio 1.4 — Conversión de temperatura**

```
La temperatura es 98.6°F.
Conviértela a Celsius con: C = (F - 32) * 5 / 9
Imprime: "98.6°F equivalen a X°C"
```

**Ejercicio 1.5 — Reto del auto (★)**

```
Un auto recorre 350 km usando 28 litros de gasolina.
Calcula e imprime:
  1. Kilómetros por litro
  2. Litros por cada 100 km
  3. Costo total si la gasolina vale $22.50 por litro
```

---

## 📘 Capítulo 2 — Variables y Tipos de Datos

### 🧠 Conceptos clave

- Asignación: `nombre = valor`
- Tipos básicos: `int`, `float`, `str`, `bool`
- Conversión: `int()`, `float()`, `str()`, `bool()
- Asignación múltiple: `a, b, c = 1, 2, 3`
- Constantes (convención): `PI = 3.14159`

### 💪 Ejercicios — Capítulo 2

> Crea el archivo `cap02_ejercicios.py`

**Ejercicio 2.1 — Tarjeta de presentación**

```
Define variables: nombre, edad, altura (metros), es_estudiante (bool)
Imprime una tarjeta mostrando cada dato y su tipo con type().
```

**Ejercicio 2.2 — Intercambio elegante**

```
a = 10,  b = 25
Intercambia sus valores en UNA sola línea (sin variable auxiliar).
Imprime los valores antes y después del intercambio.
```

**Ejercicio 2.3 — Conversión de tipos**

```
texto_numero = "42"
texto_decimal = "3.99"
Conviértelos al tipo numérico correcto, súmalos e imprime el resultado y su tipo.
```

**Ejercicio 2.4 — Adivina el bool**

```
Antes de correr el código, predice qué imprimirá cada línea:
  print(bool(0))
  print(bool(1))
  print(bool(""))
  print(bool("hola"))
  print(bool([]))
  print(bool(None))
¿Acertaste todas?
```

---

## 📙 Capítulo 3 — Entrada del Usuario

### 🧠 Conceptos clave

- `input("mensaje")` → siempre devuelve `str`
- Convertir siempre: `int(input(...))`, `float(input(...))`
- f-strings: `f"Hola {nombre}, tienes {edad} años"`
- Formato de decimales: `f"{valor:.2f}"`

### 💪 Ejercicios — Capítulo 3

> Crea el archivo `cap03_ejercicios.py`

**Ejercicio 3.1 — Calculadora básica**

```
Pide dos números al usuario.
Muestra: suma, resta, multiplicación y división entre ellos.
```

**Ejercicio 3.2 — Calculadora de IMC**

```
Pide peso (kg) y altura (m).
Calcula: IMC = peso / altura²
Imprime el resultado con exactamente 2 decimales.
```

**Ejercicio 3.3 — Saludo personalizado**

```
Pide el nombre y el año de nacimiento del usuario.
Calcula su edad aproximada y muestra:
"¡Hola [nombre]! Tienes aproximadamente [edad] años."
Usa f-strings obligatoriamente.
```

---

## 📕 Capítulo 4 — Condicionales

### 🧠 Conceptos clave

- `if` / `elif` / `else`
- Comparaciones: `==` `!=` `<` `>` `<=` `>=`
- Lógica: `and`, `or`, `not`
- Ternario: `valor = x if condición else y`

### 💪 Ejercicios — Capítulo 4

> Crea el archivo `cap04_ejercicios.py`

**Ejercicio 4.1 — Clasificador de calificaciones**

```
Pide una calificación (0-100) e imprime:
  < 60  → Reprobado
  60-69 → Suficiente
  70-79 → Bien
  80-89 → Notable
  90+   → Excelente
```

**Ejercicio 4.2 — Calculadora con menú**

```
Pide dos números y un operador (+, -, *, /).
Realiza la operación con if/elif.
Maneja el caso de división entre cero con un mensaje de error.
```

**Ejercicio 4.3 — Año bisiesto**

```
Pide un año y determina si es bisiesto.
Regla: divisible entre 4, EXCEPTO siglos (÷100),
       A MENOS QUE también sea divisible entre 400.
```

**Ejercicio 4.4 — Clasificador de triángulo (★)**

```
Pide 3 lados y determina si el triángulo es:
  - Inválido  (un lado ≥ suma de los otros dos)
  - Equilátero (los 3 lados iguales)
  - Isósceles  (2 lados iguales)
  - Escaleno   (todos distintos)
```

---

## 📓 Capítulo 5 — Bucles

### 🧠 Conceptos clave

- `for i in range(n)`: repetir n veces
- `for item in colección`: iterar sobre elementos
- `while condición`: repetir mientras sea verdad
- `break`: salir del bucle
- `continue`: saltar a la siguiente iteración
- `enumerate()`: obtener índice + valor

### 💪 Ejercicios — Capítulo 5

> Crea el archivo `cap05_ejercicios.py`

**Ejercicio 5.1 — Tabla de multiplicar**

```
Pide un número y muestra su tabla del 1 al 10.
Formato exacto: "5 x 1 = 5"
```

**Ejercicio 5.2 — FizzBuzz**

```
Del 1 al 50, imprime en cada número:
  "FizzBuzz" si es divisible entre 3 Y 5
  "Fizz"     si es divisible entre 3
  "Buzz"     si es divisible entre 5
  El número  si no cumple ninguna condición
```

**Ejercicio 5.3 — Acumulador interactivo**

```
Pide números uno por uno al usuario.
Cuando escriba "listo", muestra la suma total y el promedio.
```

**Ejercicio 5.4 — Pirámide de asteriscos (★)**

```
Pide un número n y dibuja una pirámide de n filas. Ejemplo n=4:
       *
      ***
     *****
    *******
```

---

## 📔 Capítulo 6 — Funciones

### 🧠 Conceptos clave

- `def nombre(parámetros): ... return valor`
- Parámetros por defecto: `def saludar(nombre="Mundo")`
- `*args`: número variable de argumentos
- `**kwargs`: argumentos nombrados variables
- Lambda: `doble = lambda x: x * 2`
- Scope: variables locales vs globales

### 💪 Ejercicios — Capítulo 6

> Crea el archivo `cap06_ejercicios.py`

**Ejercicio 6.1 — Funciones de área**

```
Crea 3 funciones:
  area_circulo(r)
  area_rectangulo(base, altura)
  area_triangulo(base, altura)
Prueba cada una con al menos 2 valores distintos.
```

**Ejercicio 6.2 — Validador de contraseña**

```
Función es_contrasena_valida(contrasena) → True si cumple TODO:
  - Al menos 8 caracteres
  - Al menos una letra mayúscula
  - Al menos un número
```

**Ejercicio 6.3 — Calculadora funcional**

```
Crea funciones: sumar, restar, multiplicar, dividir.
Luego una función calcular(a, operacion, b) que invoque la correcta.
Ejemplo: calcular(10, "+", 5) → 15
```

---

## 📒 Capítulo 7 — Colecciones

### 🧠 Conceptos clave

| Tipo        | Sintaxis           | Característica            |
| ----------- | ------------------ | ------------------------- |
| Lista       | `[1, 2, 3]`        | Ordenada, mutable         |
| Tupla       | `(1, 2, 3)`        | Ordenada, inmutable       |
| Diccionario | `{"clave": valor}` | Clave-valor               |
| Set         | `{1, 2, 3}`        | Sin duplicados, sin orden |

- Comprensión de listas: `[x**2 for x in range(10)]`

### 💪 Ejercicios — Capítulo 7

> Crea el archivo `cap07_ejercicios.py`

**Ejercicio 7.1 — Lista de compras interactiva**

```
Menú con opciones:
  1 - Agregar producto
  2 - Eliminar producto
  3 - Mostrar lista (ordenada)
  4 - Salir
```

**Ejercicio 7.2 — Estadísticas sin trampa**

```
Lista: [23, 7, 45, 12, 67, 3, 89, 34, 56, 21]
Calcula MANUALMENTE (sin min/max/sum): mínimo, máximo, suma, promedio.
Luego verifica con las funciones built-in.
```

**Ejercicio 7.3 — Agenda de contactos**

```
Diccionario {nombre: teléfono}
Opciones: agregar contacto, buscar por nombre, eliminar, mostrar todos.
```

**Ejercicio 7.4 — Comprensión de listas (en 1 línea cada una)**

```
  a) Lista de cuadrados del 1 al 20
  b) Lista de números pares del 1 al 100
  c) Palabras con más de 4 letras de la frase: "el gato gordo salta sobre la mesa bonita"
```

---

## 📃 Capítulo 8 — Cadenas de Texto

### 🧠 Conceptos clave

- Métodos: `.upper()` `.lower()` `.strip()` `.split()` `.join()` `.replace()`
- Slicing: `texto[inicio:fin:paso]` → `"Python"[::-1]` = `"nohtyP"`
- f-strings avanzados: `f"{precio:.2f}"`, `f"{nombre!u}"`
- `.find()` `.count()` `.startswith()` `.endswith()`

### 💪 Ejercicios — Capítulo 8

> Crea el archivo `cap08_ejercicios.py`

**Ejercicio 8.1 — Detector de palíndromo**

```
Función es_palindromo(texto) que retorne True si la palabra
se lee igual al derecho y al revés.
Debe ignorar mayúsculas y espacios.
Prueba con: "radar", "kayak", "reconocer", "hola"
```

**Ejercicio 8.2 — Contador de palabras**

```
Dada una frase, cuenta cuántas veces aparece cada palabra.
Guarda el resultado en un diccionario e imprímelo ordenado.
```

**Ejercicio 8.3 — Cifrado César (★)**

```
Función cifrar(texto, desplazamiento) que desplace cada letra N posiciones.
Función descifrar(texto, desplazamiento) que revierta el cifrado.
Ejemplo: cifrar("hola", 3) → "krod"
```

---

## ⚠️ Capítulo 9 — Manejo de Errores

### 🧠 Conceptos clave

```python
try:
    # código que puede fallar
except ValueError:
    # si el valor es incorrecto
except ZeroDivisionError:
    # si se divide entre cero
else:
    # si NO hubo error
finally:
    # se ejecuta SIEMPRE
```

- `raise Exception("mensaje")` para lanzar errores propios

### 💪 Ejercicios — Capítulo 9

> Crea el archivo `cap09_ejercicios.py`

**Ejercicio 9.1 — Input seguro**

```
Función pedir_numero(mensaje) que siga pidiendo hasta recibir un número válido.
No debe romperse si el usuario escribe letras o deja el campo vacío.
```

**Ejercicio 9.2 — Calculadora robusta**

```
Toma tu calculadora del capítulo 4 y hazla indestructible:
maneja división entre cero, entradas inválidas y operadores desconocidos.
```

---

## 📁 Capítulo 10 — Módulos y Archivos

### 🧠 Conceptos clave

```python
import math          # módulo matemático
import random        # números aleatorios
import datetime      # fecha y hora

# Leer archivo
with open("datos.txt", "r", encoding="utf-8") as f:
    contenido = f.read()

# Escribir archivo
with open("datos.txt", "w", encoding="utf-8") as f:
    f.write("Hola mundo")
```

### 💪 Ejercicios — Capítulo 10

> Crea el archivo `cap10_ejercicios.py`

**Ejercicio 10.1 — Simulador de dado**

```
Con el módulo random, simula lanzar un dado (1-6) exactamente 1000 veces.
Cuenta cuántas veces salió cada número e imprime los resultados.
```

**Ejercicio 10.2 — Diario personal**

```
Programa con menú:
  1 - Escribir nueva entrada (guarda en diario.txt con fecha y hora)
  2 - Leer todas las entradas
  3 - Salir
```

---

## 🏗️ Capítulo 11 — POO: Fundamentos

### 🧠 Conceptos clave

```python
class Persona:
    def __init__(self, nombre, edad):  # constructor
        self.nombre = nombre           # atributo
        self.edad = edad

    def saludar(self):                 # método
        return f"Hola, soy {self.nombre}"

    def __str__(self):                 # representación texto
        return f"Persona({self.nombre}, {self.edad})"

p = Persona("Ana", 25)   # crear objeto
print(p.saludar())       # llamar método
```

### 💪 Ejercicios — Capítulo 11

> Crea el archivo `cap11_ejercicios.py`

**Ejercicio 11.1 — Clase Persona** _(evolución de tu `Humano.py`)_

```python
# Atributos: nombre, edad, altura
# Métodos:
#   saludar()              → "Hola, soy Ana y tengo 25 años"
#   puede_votar()          → True si edad >= 18
#   descripcion_imc(peso)  → calcula IMC e indica si es normal
#   __str__                → representación completa
```

**Ejercicio 11.2 — Clase CuentaBancaria**

```python
# Atributos: titular, saldo (default = 0)
# Métodos:
#   depositar(cantidad)    → suma al saldo
#   retirar(cantidad)      → resta, pero lanza error si no hay fondos
#   ver_saldo()            → imprime el saldo actual
#   __str__
```

**Ejercicio 11.3 — Clase Calculadora con historial**

```python
# Igual a la del cap 6, pero como clase orientada a objetos
# Guarda cada operación en una lista interna
# Método historial()  → muestra todas las operaciones realizadas
# Método limpiar()    → borra el historial
```

---

## 🧬 Capítulo 12 — POO: Herencia y Polimorfismo

### 🧠 Conceptos clave

```python
class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def hablar(self):
        return "..."

class Perro(Animal):           # hereda de Animal
    def hablar(self):          # override (sobreescribe)
        return f"{self.nombre} dice: ¡Guau!"

class Gato(Animal):
    def hablar(self):
        return f"{self.nombre} dice: ¡Miau!"

animales = [Perro("Rex"), Gato("Luna")]
for a in animales:
    print(a.hablar())          # polimorfismo
```

### 💪 Ejercicios — Capítulo 12

> Crea el archivo `cap12_ejercicios.py`

**Ejercicio 12.1 — Jerarquía de animales**

```python
# Clase base: Animal(nombre)
#   método hablar() → genérico

# Clases hijas:
#   Perro  → hablar() con "¡Guau!"
#   Gato   → hablar() con "¡Miau!"
#   Pájaro → hablar() + método adicional volar()

# Crea una lista con varios animales y llama hablar() en cada uno.
```

**Ejercicio 12.2 — Sistema de empleados (★)**

```python
# Clase base: Empleado(nombre, sueldo_base)
#   método calcular_pago() → retorna sueldo_base

# Clases hijas:
#   EmpleadoPorHoras(nombre, horas, pago_por_hora)
#     calcular_pago() → horas * pago_por_hora

#   EmpleadoConBono(nombre, sueldo_base, bono)
#     calcular_pago() → sueldo_base + bono

#   EmpleadoVentas(nombre, sueldo_base, ventas, comision)
#     calcular_pago() → sueldo_base + ventas * comision

# Imprime el pago de cada tipo de empleado.
```

---

## 🔒 Capítulo 13 — POO: Encapsulamiento y Avanzado

### 🧠 Conceptos clave

```python
class Cuenta:
    def __init__(self, saldo):
        self.__saldo = saldo       # privado con __

    @property
    def saldo(self):               # getter
        return self.__saldo

    @saldo.setter
    def saldo(self, valor):        # setter con validación
        if valor < 0:
            raise ValueError("El saldo no puede ser negativo")
        self.__saldo = valor

    @staticmethod
    def moneda():                  # método estático
        return "MXN"
```

### 💪 Ejercicios — Capítulo 13

> Crea el archivo `cap13_ejercicios.py`

**Ejercicio 13.1 — Clase Temperatura**

```python
# Atributo privado __celsius
# @property celsius       → getter
# @celsius.setter         → valida que no baje de -273.15°C
# @property fahrenheit    → calcula y retorna en °F
# @property kelvin        → calcula y retorna en K
```

**Ejercicio 13.2 — Clase Stack (Pila)**

```python
# Lista privada __items
# push(item)   → agrega al tope
# pop()        → quita y retorna el tope (error si vacía)
# peek()       → mira el tope sin quitar
# is_empty()   → True/False
# __len__()    → tamaño de la pila
# __str__()    → representación visual tipo: [1, 2, 3] ← tope
```

---

## 🏆 Capítulo 14 — Proyecto Final

### 🎯 Sistema de Gestión de Biblioteca

Combina **todo** lo aprendido en un único proyecto funcional:

```
📦 Clases:
  Libro(titulo, autor, isbn, disponible=True)
  Usuario(nombre, id_usuario)
  Prestamo(libro, usuario, fecha)
  Biblioteca(nombre)
    ├── agregar_libro(libro)
    ├── registrar_usuario(usuario)
    ├── prestar_libro(isbn, id_usuario)
    ├── devolver_libro(isbn)
    ├── buscar_libro(termino)        ← por título o autor
    ├── historial_prestamos()
    ├── guardar_datos()              ← persiste en archivo .json
    └── cargar_datos()               ← carga desde archivo .json

🖥️ Interfaz:
  Menú interactivo en consola con todas las opciones.
  Manejo de errores en cada operación.
  Búsqueda parcial (no hace falta escribir el título completo).
```

---

## 🗺️ ¿Cómo usar esta guía?

1. **Lee** los conceptos del capítulo actual
2. **Crea** el archivo `capXX_ejercicios.py` en tu carpeta
3. **Resuelve** los ejercicios tú solo (no copies soluciones)
4. **Pide revisión**: _"Revisa mi cap01_ejercicios.py"_
5. ✅ Cuando domines el capítulo, ¡avanza al siguiente!

> 💡 **Tips para aprovechar al máximo:**
>
> - Di _"Dame una pista del ejercicio 3.2 sin darme la solución"_
> - Di _"Explícame el concepto X con otro ejemplo"_
> - Di _"Ya terminé el cap 5, ¿estoy listo para el 6?"_

---

_Creado el 17 de Septiembre 2026 · ¡Mucho éxito en tu camino Python! 🚀_
