# 🧠 MEMORIA (Agente IA) — Día 1.1 + Día 1.2

**Objetivo de este archivo:** servir como *memoria operativa* para un agente de IA.  
Contiene **solo** lo que ya se ha aprendido y acordado en **Día 1.1** y **Día 1.2**, para evitar repeticiones y mantener coherencia en las próximas sesiones.

---

## 📌 Invariantes (reglas que NO se deben romper)
- **Diseño antes que código.** Primero estructura, luego implementación.
- **Separación estricta de responsabilidades.** Cada parte hace *su* trabajo y **no** el de otras.
- **Estado por componente.** Cada parte guarda la información que necesita; **no duplicar estado** entre partes.
- **Comunicación explícita.** Las partes “hablan” por canales definidos (no atajos, no globales implícitos).
- **Modularidad = escalabilidad.** Añadir un juego nuevo debe requerir **añadir una pieza**, no rehacer todo.
- **IA = asistente, no arquitecto.** La IA valida y aclara; no se le pide “la app completa” en esta fase.

---

# 📅 DÍA 1.1 — Qué vamos a construir (sin código) ✅

## 1) Vocabulario base (no son sinónimos)
- **Juego:** actividad con reglas (ej: Tic Tac Toe, Ahorcado).
- **App:** el programa completo que se instala/ejecuta.
- **Sistema:** cómo se organizan las partes por dentro (arquitectura interna).
**Regla:** una app puede contener varios juegos; el sistema es la estructura que lo permite.

## 2) Diseño ≠ decoración
- Diseñar = **decidir estructura** (cajas, flechas, responsabilidades).
- “Pensar antes de hacer” evita caos y acelera después.

## 3) Responsabilidades (primer contacto)
- Cada parte del sistema tiene:
  - **Qué hace** (responsabilidad)
  - **Qué NO hace** (límites)
Ejemplos acordados:
- **Menú principal:** muestra opciones y permite elegir (**NO** contiene reglas de juego).
- **Cada juego:** ejecuta sus reglas (**NO** sabe qué otros juegos existen).
- **Navegación:** cambia pantallas (**NO** juega por ti).

## 4) Modularidad y escalabilidad (criterio de buen diseño)
Pregunta guía:
> “Si mañana añades un cuarto juego, ¿rehaces todo o añades una pieza?”
- Solo añadir pieza → diseño modular correcto.
- Rehacer mucho → diseño acoplado (malo).

## 5) Conexión con Scratch (transferencia controlada)
- Se reutiliza mentalmente: **estados**, **eventos**, **lógica condicional**.
- Novedad respecto a Scratch: **separación de partes** y **conexión/comunicación** entre ellas.

## 6) IA (introducción conceptual)
- No pedir código todavía.
- Uso futuro permitido en esta etapa: explicar diferencias de diseño, detectar responsabilidades mal asignadas.

## 7) Arquitectura mental inicial (conceptual)
Estructura dibujada a alto nivel (aún sin implementación):
- Menú principal
- Motor de juegos (cosas comunes)
- Juegos específicos (Tic Tac Toe, Ahorcado)
- Sistema común (UI/sonidos/estilos/config)
- Navegación (flujo entre pantallas)

---

# 📅 DÍA 1.2 — Partes de un sistema ✅

## 1) Qué es una “parte” (definición operativa)
Una parte debe cumplir 3 requisitos:
1. **Responsabilidad específica** (hace 1 cosa bien, con límites claros)
2. **Estado** (información que necesita recordar)
3. **Comunicación** (con quién habla y por qué)

### 3 preguntas obligatorias por parte
- ¿Qué hace?
- ¿Qué guarda?
- ¿Con quién habla?

## 2) Estado (nuevo concepto formal)
**Estado = información que una parte debe recordar para funcionar.**  
Asignación acordada (modelo de referencia):

- **Menú**
  - Guarda: lista de juegos disponibles; selección/foco (si aplica)
  - NO guarda: puntuaciones, estado del último juego, reglas

- **Sistema de Navegación**
  - Guarda: pantalla actual; (opcional) historial para “volver”
  - NO guarda: lógica de juego, reglas, puntuación

- **Motor de Juegos (común)**
  - Hace: gestiona elementos comunes (volver al menú, reiniciar, marco común, estado global)
  - Guarda: puntuación (si existe), estado global (jugando/ganado/perdido), config común (sonido/timer si aplica)
  - NO hace: reglas específicas de cada juego; no “conoce” el detalle interno del tablero/palabra/etc.

- **Juego específico (ej: Tic Tac Toe)**
  - Hace: reglas del juego; validar movimientos; detectar victoria/empate
  - Guarda: tablero; turno; contador de movimientos
  - NO hace: navegación; no conoce menú; no conoce otros juegos

## 3) Comunicación (flujo establecido)
- **Menú → Navegación:** “ir a juego X”
- **Navegación → Motor:** “pantalla activa / iniciar marco común”
- **Motor ↔ Juegos:** el motor inicia/recibe eventos; el juego notifica “gané/perdí/movimiento válido”
Restricción clave:
- Los juegos **no conocen al menú**; para volver se usa Navegación vía Motor.

## 4) Flujo de ejemplo validado (iniciar Tic Tac Toe)
1. Usuario clic en Tic Tac Toe (Menú)
2. Menú dice a Navegación: “cambiar a juego 1”
3. Navegación oculta menú y muestra pantalla de juego
4. Motor inicializa estado común (puntuación/estado global)
5. Juego inicializa estado específico (tablero/turno)
6. UI muestra tablero

**Principio:** cada parte hizo solo su trabajo; nadie invadió responsabilidades.

## 5) Antipatrón formal (bloque gigante)
Se identifica como diseño incorrecto:
- Menú + navegación + juegos + puntuación + UI en un único bloque/archivo sin separación.
Consecuencias aceptadas:
- Cambios rompen cosas no relacionadas
- Añadir juego requiere reescritura
- Bugs se propagan
- IA y humanos se pierden

## 6) IA en esta fase (uso permitido y checks)
**Permitido (esta semana):**
- Validar reparto de responsabilidades
- Validar qué estado va en Motor vs juego
- Simular “qué tocaría” al añadir un tercer juego

**No permitido todavía:**
- Pedir implementación completa
- Frameworks/patrones avanzados (“router”, “event bus”, “state manager”…) sin necesidad
- Sobre-ingeniería

### Señales de respuesta IA incorrecta (rechazar)
- Sugiere que el menú guarda estado de juego o puntuación
- Hace que cada juego conozca el menú para volver
- Introduce 15 componentes o jerarquías complejas
- Usa nombres vagos (“Manager/Handler/Controller”) sin definir responsabilidad
- No justifica el porqué de la estructura

## 7) Criterios de éxito acordados (validación)
- Cada parte tiene **1–3** responsabilidades claras (no 10)
- No hay solapamiento/duplicación de estado
- Comunicación definida (quién llama a quién)
- Puedes eliminar una parte y saber qué rompe
- Puedes explicar el diseño a alguien sin conocimientos técnicos

## 8) Mini-reto acordado (sin código)
Entregables esperados:
1. Tabla por parte: (Qué hace / Qué guarda / Con quién habla / Qué NO hace)
2. Diagrama actualizado
3. Respuesta: por qué separar en partes es mejor que un bloque gigante

---

## ✅ Estado del proyecto tras Día 1.2
- Arquitectura conceptual definida y refinada.
- Responsabilidades delimitadas.
- Estado por componente asignado.
- Comunicación entre partes definida.
- Sin implementación todavía (seguimos “pensar antes de programar”).

---

## 🧾 Vocabulario consolidado (para coherencia)
- **Sistema:** conjunto de partes conectadas con responsabilidades.
- **Parte / Componente:** unidad con responsabilidad + estado + comunicación.
- **Responsabilidad:** lo que hace y lo que NO hace una parte.
- **Estado:** información que un componente recuerda.
- **Comunicación:** mensajes/llamadas entre partes con propósito.
- **Modularidad:** piezas independientes que permiten escalar sin rehacer.
- **Navegación:** mecanismo para cambiar pantallas/estados de UI.
- **Arquitectura:** organización interna del sistema.

---

**Última actualización:** 2026-02-12
