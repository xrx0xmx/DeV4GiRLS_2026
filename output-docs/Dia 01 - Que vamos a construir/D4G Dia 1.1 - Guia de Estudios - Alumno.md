# 🎮 Guía del Alumno - Sesión 1
## Qué vamos a construir (sin código)

---

## 👋 Antes de empezar

Esta guía te preparará para la sesión de hoy. Léela con calma antes de ver el vídeo o escuchar el audio. Te ayudará a aprovechar mejor la clase y a tener las ideas claras desde el principio.

**Duración estimada de lectura:** 10-15 minutos

---

## 🎯 ¿Qué vamos a hacer hoy?

Hoy NO vamos a escribir código. Vamos a hacer algo más importante: **pensar y diseñar**.

Al final de esta sesión, tendrás claro que:
- Una app no es "un juego grande"
- Es un **sistema** con varias partes que trabajan juntas
- Antes de programar, hay que **decidir** cómo será ese sistema

### ¿Por qué empezamos así?

La mayoría de la gente salta directamente a programar y luego se pierde. Tú no vas a hacer eso. Vas a pensar primero, programar después.

---

## 🤔 ¿Qué es lo que realmente vamos a construir?

### El proyecto completo

Vas a crear una **app** que contenga varios **mini-juegos**:
- Tic Tac Toe (3 en raya)
- Ahorcado
- Quizás algún otro más adelante

Pero no es "hacer juegos" como en Scratch. Es algo diferente.

### ¿Qué hace esto diferente de Scratch?

| En Scratch | En este proyecto |
|------------|------------------|
| Un proyecto = un juego | Un proyecto = varios juegos |
| Todo mezclado en un sitio | Partes separadas y organizadas |
| Sprites y escenarios juntos | Sistema con módulos independientes |

**Lo que SÍ reutilizamos de Scratch:**
- Pensar en "estados" (jugando, ganado, perdido)
- Eventos (clic, tecla presionada)
- Lógica (si pasa esto, entonces haz aquello)

**Lo NUEVO:**
- Separar las partes del sistema
- Cada parte tiene su "responsabilidad"
- Diseñar antes de construir

---

## 📚 Tres palabras importantes

Hoy vas a aprender a diferenciar tres palabras que mucha gente confunde:

### 1. Juego
Un **juego** es una actividad con reglas.
- Ejemplo: Tic Tac Toe, Ahorcado, Memory

### 2. App
Una **app** es el programa completo que instalas en tu móvil o ordenador.
- Ejemplo: Tu app que contendrá todos los juegos

### 3. Sistema
Un **sistema** es cómo están organizadas las partes por dentro.
- Ejemplo: Menú + juegos + navegación = sistema completo

**Importante:** ¡NO son sinónimos! Una app contiene juegos, y el sistema es cómo funciona todo por dentro.

---

## 🧩 ¿Qué es un sistema?

Piensa en tu mochila:
- No es "un objeto gigante"
- Tiene: cremalleras, bolsillos, correas
- Cada parte tiene una función
- Juntas forman algo útil

**Nuestra app es igual:**
- No es "un archivo enorme de código"
- Tiene: menú, juegos, navegación, puntuaciones
- Cada parte tiene su trabajo
- Juntas forman una app

---

## 🎨 Actividad principal de hoy: DIBUJAR

Sí, has leído bien. Hoy vas a **dibujar** (no programar).

### Tu tarea

Vas a dibujar cómo crees que es esta app por dentro. Solo cajas y flechas.

**Materiales que necesitas:**
- Papel y lápiz (o iPad/tablet)
- Colores (opcional pero ayuda)

### Preguntas que te harás mientras dibujas

1. **Cuando abres la app, ¿qué es lo primero que ves?**
   - Probablemente un menú con opciones

2. **Si eliges Tic Tac Toe, ¿desaparece el menú o sigue ahí?**
   - Piensa en cómo navegarías

3. **Cuando terminas el juego, ¿cómo vuelves al menú?**
   - Tiene que haber un botón o algo

4. **Si la app tiene 3 juegos, ¿comparten algo o cada uno es totalmente diferente?**
   - ¿Qué cosas son comunes?

### Ejemplo de cómo podría verse

```
┌─────────────────────┐
│   MENÚ PRINCIPAL    │
│                     │
│  [Tic Tac Toe]     │
│  [Ahorcado]        │
│  [Otro juego]      │
└─────────────────────┘
         ↓ (clic)
┌─────────────────────┐
│   TIC TAC TOE       │
│                     │
│   [tablero 3x3]     │
│   [botón volver]    │
└─────────────────────┘
```

**No hay una respuesta "correcta".** Lo importante es que **pienses y decidas**.

---

## 🔑 Concepto clave: Responsabilidades

Cada parte de tu sistema tiene que tener clara su **responsabilidad**.

### ¿Qué es una responsabilidad?

Es saber:
- Qué hace esa parte
- Qué **NO** hace esa parte

### Ejemplos

**Menú principal:**
- ✅ Muestra opciones
- ✅ Permite elegir un juego
- ❌ NO contiene los juegos dentro de sí

**Cada juego:**
- ✅ Ejecuta sus propias reglas
- ✅ Sabe cuándo has ganado
- ❌ NO sabe qué otros juegos existen

**Sistema de navegación:**
- ✅ Cambia entre menú y juegos
- ✅ Recuerda dónde estabas
- ❌ NO juega por ti

---

## 💭 Preguntas para pensar

No tienes que responderlas ahora, pero piénsalas:

1. **Si tu app tuviera 10 juegos en lugar de 3, ¿tu diseño seguiría funcionando?**

2. **¿Qué pasaría si quisieras cambiar el color del menú? ¿Tendrías que tocar los juegos?**

3. **¿Es mejor tener un archivo gigante con todo o muchos archivos pequeños? ¿Por qué?**

4. **Si alguien más quisiera añadir un juego a tu app, ¿podría hacerlo sin romper nada?**

Estas preguntas no tienen respuesta "correcta" ahora mismo. Son para que empieces a pensar como una ingeniera.

---

## 🤖 ¿Y la IA?

Seguro que has pensado: "¿Puedo usar ChatGPT o Claude para que me hagan esto?"

### Esta semana: NO

**¿Por qué?**
Si usas IA antes de saber qué quieres, te dará código que funciona pero no entenderás por qué.

### Próximas semanas: SÍ (pero de forma inteligente)

**Ejemplos buenos (cuando llegue el momento):**
- ✅ "Explícame qué diferencia hay entre estos dos diseños"
- ✅ "Dame dos formas distintas de organizar esto"

**Ejemplos malos:**
- ❌ "Hazme la app completa"
- ❌ "Genera el código del menú"

### Regla de oro

> "La IA es un ayudante, no el arquitecto. **Tú diseñas, ella construye**."

---

## 📝 Lo que tienes que hacer HOY

Antes de terminar la sesión, debes tener:

### 1. Un dibujo del sistema
Con:
- Un menú
- Al menos 2 juegos
- Flechas mostrando la navegación

### 2. Una lista escrita
Que diga:
- Qué hace cada parte
- Qué **NO** hace cada parte

### 3. Responder por escrito
"¿Por qué esta app NO es un solo juego grande?"

---

## ⏱️ Distribución del tiempo

La sesión durará 1 hora:
- **15 minutos:** Explicación de conceptos (vídeo/audio)
- **30 minutos:** Tú dibujando y diseñando
- **15 minutos:** Preguntas y repaso

---

## 🚫 Errores que EVITAR

### Errores comunes de principiantes:

❌ **"Ya lo haré bonito después"**
→ El diseño no es decoración, es estructura

❌ **"Empiezo a programar y voy viendo"**
→ Así se hacen sistemas caóticos

❌ **"Esto es muy simple, no necesita diseño"**
→ Incluso cosas simples necesitan estructura

### Lo que la IA hará mal (cuando la uses):

❌ Te dará código sin preguntarte qué quieres
❌ Mezclará todo en un solo archivo
❌ No te explicará **por qué** algo está diseñado así

---

## ✅ Criterio de éxito

Sabrás que lo has hecho bien si:

- Has dibujado un sistema con partes diferenciadas
- Puedes explicar qué hace cada parte
- Entiendes que menú ≠ juego ≠ sistema
- Puedes explicarle tu diseño a alguien que no sabe programar y lo entiende

---

## 🎯 Frase para recordar

> "Hoy no escribirás código, pero harás lo más importante: **decidir qué vas a construir**. La mayoría de la gente salta este paso y luego se pierde. Tú no."

---

## 📖 Después de esta sesión

En la **Sesión 2** profundizaremos en las partes que hayas dibujado hoy. Les daremos más definición técnica y empezaremos a hablar de conceptos como "estado" y "navegación".

Pero todo eso construirá sobre lo que hagas hoy. Por eso es tan importante que lo hagas bien.

---

## 💡 Consejo final

Si en algún momento durante la sesión:
- No entiendes algo → **Pregunta**
- Quieres empezar a programar → **Frena, aún no**
- Te parece aburrido porque "no estás haciendo nada" → **Estás haciendo lo más importante**

Pensar antes de hacer no es perder tiempo. Es **ganar claridad**.

---

## 🎬 Próximos pasos

1. ✅ Lee esta guía (ya lo hiciste)
2. ⏭️ Ve el vídeo o escucha el audio
3. 🎨 Haz tu dibujo del sistema
4. 📝 Escribe las responsabilidades
5. 🤔 Responde la pregunta final

**¡Nos vemos en la sesión!** 🚀

---

**Proyecto:** App de Mini-Juegos  
**Fase:** 1 - Pensar antes de programar  
**Sesión:** 1 de 18  
**Tiempo:** 1 hora
