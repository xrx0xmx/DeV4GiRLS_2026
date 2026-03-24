# 🧠 MEMORIA — Conceptos ya aprendidos

**Propósito de este archivo:**
Rastrear qué conceptos ya se han cubierto para evitar repeticiones y poder hacer referencias cruzadas en sesiones futuras.

---

## 📅 SESIÓN 1 — Qué vamos a construir (sin código)
**Fecha:** Febrero, Semana 1  
**Estado:** ✅ Completada

### Conceptos fundamentales introducidos

#### 1. Sistema vs. Juego vs. App
**Definiciones establecidas:**
- **Juego**: Una actividad con reglas (ej: Tic Tac Toe, Ahorcado)
- **App**: El programa completo que se instala
- **Sistema**: Cómo están organizadas las partes por dentro

**Comprensión clave:**
- Estas tres palabras NO son sinónimos
- Una app puede contener múltiples juegos
- El sistema es la arquitectura interna

#### 2. Pensamiento de diseño antes de código
**Principio establecido:**
- Diseñar ≠ decorar
- Diseñar = decidir estructura
- "Pensar antes de hacer" no es perder tiempo, es ganar claridad

**Actividad realizada:**
- Dibujo del sistema con cajas y flechas
- Identificación de partes: menú, juegos, navegación

#### 3. Responsabilidades de cada parte
**Concepto introducido:**
Cada parte del sistema tiene una **responsabilidad** (qué hace) y límites claros (qué NO hace).

**Ejemplos trabajados:**
- **Menú principal**: muestra opciones, permite elegir (NO contiene los juegos)
- **Cada juego**: ejecuta sus propias reglas (NO sabe qué otros juegos existen)
- **Sistema de navegación**: cambia entre pantallas (NO juega por ti)

#### 4. Modularidad y escalabilidad
**Pregunta guía establecida:**
> "Si mañana quieres añadir un cuarto juego, ¿tendrías que rehacer todo o solo añadir una pieza nueva?"

**Criterio de buen diseño:**
- Si solo necesitas añadir una pieza → buen diseño modular
- Si hay que rehacerlo todo → diseño acoplado (malo)

#### 5. Comparación con Scratch
**Lo que SÍ se reutiliza:**
- Estados (jugando, ganado, perdido)
- Eventos (clic, tecla)
- Lógica (si... entonces...)

**Lo NUEVO respecto a Scratch:**
- Separación de partes del sistema
- Múltiples juegos en un mismo proyecto
- Organización por responsabilidades

#### 6. Uso responsable de IA (introducción conceptual)
**Establecido (pero NO practicado aún):**
- IA = ayudante, NO arquitecto
- Tú diseñas, ella construye
- No usar IA antes de saber qué quieres

**Ejemplos de uso futuro establecidos:**
✅ Bueno: "Explícame qué diferencia hay entre estos dos diseños"
❌ Malo: "Hazme la app completa"

---

## 🎯 Arquitectura mental establecida

```
APP
│
├── Menú principal
│
├── Motor de juegos (reglas comunes)
│   ├── gestión de estado
│   ├── puntuaciones
│   ├── reinicio
│   └── navegación
│
├── Juego: Tic Tac Toe
│
├── Juego: Ahorcado
│
└── Sistema común
    ├── UI base
    ├── sonidos / estilos
    └── configuración
```

**Estado:** Diagrama conceptual presentado, NO implementado todavía.

---

## 🔑 Vocabulario técnico introducido

| Término | Definición establecida | Contexto de uso |
|---------|------------------------|-----------------|
| **Sistema** | Conjunto de partes que trabajan juntas | Arquitectura general |
| **Responsabilidad** | Qué hace (y qué NO hace) cada parte | Diseño modular |
| **Modularidad** | Partes independientes que se pueden añadir/quitar | Escalabilidad |
| **Navegación** | Cambiar entre pantallas/estados | Flujo de la app |
| **Arquitectura** | Organización interna del sistema | Diseño estructural |

---

## ⚠️ Errores ya identificados (para NO repetir)

### Errores de principiantes cubiertos:
- ❌ "Ya lo haré bonito después" (diseño ≠ decoración)
- ❌ "Empiezo a programar y voy viendo" (receta para caos)
- ❌ "Esto es simple, no necesita diseño" (todo necesita estructura)

### Errores de IA identificados (para vigilar cuando se use):
- ❌ Dar código sin preguntar qué quieres
- ❌ Mezclar todo en un solo archivo
- ❌ No explicar el "por qué" del diseño

---

## 📊 Habilidades desarrolladas hasta ahora

### Pensamiento crítico
- [x] Diferenciar sistema/app/juego
- [x] Identificar responsabilidades de partes
- [x] Cuestionar si un diseño escala

### Diseño
- [x] Dibujar arquitectura con cajas y flechas
- [x] Identificar flujos de navegación
- [x] Listar responsabilidades (qué hace / qué NO hace)

### Comunicación técnica
- [x] Explicar diseño a alguien sin conocimientos técnicos
- [x] Justificar decisiones de diseño

---

## 🚫 Qué NO se ha hecho todavía

- [ ] Escribir código
- [ ] Usar IA para generar nada
- [ ] Implementar ningún juego
- [ ] Crear archivos HTML/CSS/JS
- [ ] Definir el estado de la aplicación (en detalle)
- [ ] Estructurar carpetas
- [ ] Nombrar archivos

**Razón pedagógica:** Primero entender QUÉ, luego CÓMO.

---

## 📝 Preguntas críticas establecidas (sin responder aún)

Estas preguntas se plantearon para reflexión continua:

1. "Si tu app tuviera 10 juegos, ¿tu diseño seguiría funcionando?"
2. "¿Cambiar el color del menú requeriría tocar los juegos?"
3. "¿Archivo gigante o muchos archivos pequeños? ¿Por qué?"
4. "¿Alguien más podría añadir un juego sin romper nada?"

**Estado:** Semillas plantadas, se retomarán cuando sean relevantes.

---

## 🎓 Meta-aprendizajes (aprender a aprender)

### Principios pedagógicos establecidos:
- **Pensamiento > cantidad de código**
- **Por qué > cómo**
- **Diseño > ejecución mecánica**
- **Decisión > receta**

### Frases clave internalizadas:
> "Una app no es un juego grande, es un sistema que contiene varios juegos"

> "La mayoría salta el diseño y se pierde. Tú no"

---

## 🔄 Referencias para próximas sesiones

### Sesión 2 debe construir sobre:
- El dibujo del sistema ya realizado
- Las responsabilidades ya identificadas
- La distinción sistema/app/juego ya clara

### Sesión 2 NO debe:
- Re-explicar qué es un sistema
- Volver a justificar por qué diseñar antes de programar
- Repetir la comparación con Scratch (solo referenciar)

---

## 📌 Estado del proyecto

**Fase actual:** Fase 1 – Pensar antes de programar  
**Progreso:** 1/4 sesiones de Febrero  

**Entregables de Sesión 1:**
- ✅ Dibujo del sistema
- ✅ Lista de responsabilidades
- ✅ Respuesta escrita: "¿Por qué NO es un solo juego grande?"

---

## 🔮 Próximos conceptos a introducir (Sesión 2)

**Tema:** Partes de un sistema  
**Conceptos nuevos esperados:**
- Estado (qué información guarda cada parte)
- Navegación (cómo se comunican las partes)
- Partes comunes vs. específicas
- Arquitectura con más detalle

**Conexión con Sesión 1:**
Profundizar en las partes que ya se dibujaron, dándoles más definición técnica.

---

**Última actualización:** Sesión 1  
**Próxima revisión:** Después de Sesión 2
