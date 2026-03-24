
# 🧠 Memoria Operativa — Mini-Juegos App

Optimizada para agentes de IA que trabajan sobre el proyecto.
Conceptos acumulados hasta **Sesión 6**.

---

# Reglas del sistema

1. Diseñar antes de programar
2. Separar responsabilidades
3. Mantener un estado centralizado
4. No mezclar estructura, apariencia y lógica
5. La UI refleja el estado, nunca lo decide
6. IA = asistente, no arquitecto

---

# Arquitectura conceptual

APP
│
├── Menú
├── Navegación
├── Motor de juegos
│
├── Juego: Tic Tac Toe
├── Juego: Ahorcado
│
└── Sistema común
    ├── UI
    ├── estilos
    └── configuración

---

# Separación tecnológica

HTML → estructura  
CSS → apariencia  
JavaScript → lógica  

Archivos principales:

index.html  
styles.css  
estado.js  
app.js  

---

# Estado (State)

El estado es la información que describe cómo está la app en un momento concreto.

Ejemplo:

estado = {
  pantallaActual: "menu",
  juegoActivo: null,
  puntuacion: 0,
  turno: null
}

Reglas:

- vive en un único objeto
- no se duplica
- solo funciones específicas lo modifican

---

# Patrón fundamental del sistema

evento → función → estado cambia → UI se actualiza

---

# Navegación (Sesión 6)

Navegar en la app no significa cargar otra página HTML.
Significa cambiar el estado y actualizar la UI.

Navegar = cambiar estado + actualizar UI

---

# Single Page Application (SPA)

La app funciona como una SPA:

- existe un solo archivo HTML
- JavaScript decide qué pantalla mostrar
- el estado recuerda dónde estamos

---

# Estado de navegación

La propiedad que controla la navegación es:

estado.pantallaActual

Ejemplos:

menu
juego-tic-tac-toe
juego-ahorcado
resultado

---

# Función de navegación

function navegar(pantalla) {
  estado.pantallaActual = pantalla
  actualizarUI()
}

Responsabilidad:

- cambiar el estado
- disparar actualización de la interfaz

Nunca debe:

- iniciar juegos
- modificar puntuaciones
- ejecutar lógica de juego

---

# Renderizado de UI

La UI se actualiza leyendo el estado.

function actualizarUI() {

  ocultar todas las pantallas

  mostrar la pantalla cuyo id coincida con
  estado.pantallaActual

}

Principio:

La UI obedece al estado.

---

# Estructura HTML esperada

<div id="pantalla-menu" class="pantalla"></div>
<div id="pantalla-juego-tic-tac-toe" class="pantalla"></div>
<div id="pantalla-juego-ahorcado" class="pantalla"></div>

Solo una pantalla es visible cada vez.

---

# Flujo completo de navegación

Usuario pulsa botón "Jugar"
↓
evento click
↓
botón llama a navegar('juego-tic-tac-toe')
↓
estado cambia
↓
actualizarUI()
↓
pantalla correcta se muestra

---

# Reglas de navegación

1. Navegar siempre cambia estado primero
2. Después se actualiza la UI
3. La UI nunca cambia el estado directamente
4. Existe una sola función navegar()
5. Cada pantalla tiene un id único

---

# Responsabilidades en JavaScript

Lógica de juego  
- reglas
- validaciones
- victoria/empate

Gestión de estado  
- guardar información global
- modificar estado mediante funciones

Navegación  
- cambiar pantallaActual

Controlador de eventos  
- escuchar al usuario

UI  
- renderizar estado

---

# Antipatrones

Evitar:

- usar window.location
- tener múltiples archivos HTML
- poner lógica en onclick dentro del HTML
- cambiar la UI sin actualizar estado
- tener pantallaActual como variable suelta

---

# Flujo principal de la app

evento → lógica → estado cambia → UI se actualiza

y

navegación → estado → UI

---

# Conceptos consolidados

Sistema  
Responsabilidad  
Estado  
Evento  
UI  
SPA  
Navegación basada en estado

---

# Preparación para la siguiente sesión

Sesión 7: separación de responsabilidades entre UI y lógica.
