var Simon = (function () {

    // ── Constantes ────────────────────────────────────────
    var DELAY_ENTRE_FLASHES = 600;   // ms entre cada color de la secuencia
    var DURACION_FLASH      = 400;   // ms que dura el botón iluminado
    var DELAY_INICIO        = 800;   // pausa antes de empezar a mostrar
    var DELAY_SIGUIENTE     = 1000;  // pausa antes del siguiente nivel

    // ── Estado interno ────────────────────────────────────
    var secuencia   = [];
    var pasoJugador = 0;
    var nivel       = 0;
    var bloqueado   = true;  // impide clicks mientras se muestra la secuencia

    // ── DOM cacheado ──────────────────────────────────────
    var elementos = {};

    // ── Inicializar (se llama una sola vez al cargar la app) ──
    function iniciar() {
        elementos.botones  = Array.from(document.querySelectorAll('.simon-boton'));
        elementos.nivel    = document.getElementById('simon-nivel');
        elementos.mensaje  = document.getElementById('simon-mensaje');
        elementos.btnStart = document.getElementById('simon-start');

        elementos.botones.forEach(function (btn, i) {
            btn.addEventListener('click', function () { alClickarBoton(i); });
        });
        elementos.btnStart.addEventListener('click', iniciarJuego);
    }

    // ── Reiniciar (se llama cada vez que el jugador entra al juego) ──
    function reiniciar() {
        secuencia   = [];
        pasoJugador = 0;
        nivel       = 0;
        bloqueado   = true;
        actualizarNivel();
        setMensaje('PULSA START', false);
        mostrarStart(true);
    }

    // ── Flujo principal ───────────────────────────────────
    function iniciarJuego() {
        mostrarStart(false);
        secuencia   = [];
        pasoJugador = 0;
        nivel       = 0;
        siguienteNivel();
    }

    function siguienteNivel() {
        pasoJugador = 0;
        nivel++;
        actualizarNivel();
        secuencia.push(Math.floor(Math.random() * 4));
        bloqueado = true;
        setMensaje('MIRA...', false);
        setTimeout(mostrarSecuencia, DELAY_INICIO);
    }

    // ── Reproducir secuencia ──────────────────────────────
    function mostrarSecuencia() {
        var i = 0;
        function siguiente() {
            if (i >= secuencia.length) {
                bloqueado = false;
                setMensaje('TU TURNO!', false);
                return;
            }
            flashBoton(secuencia[i], function () {
                i++;
                setTimeout(siguiente, DELAY_ENTRE_FLASHES - DURACION_FLASH);
            });
        }
        siguiente();
    }

    function flashBoton(indice, cb) {
        var btn = elementos.botones[indice];
        btn.classList.add('simon-boton--activo');
        setTimeout(function () {
            btn.classList.remove('simon-boton--activo');
            if (cb) cb();
        }, DURACION_FLASH);
    }

    // ── Input del jugador ─────────────────────────────────
    function alClickarBoton(indice) {
        if (bloqueado) return;
        flashBoton(indice, null);

        if (indice !== secuencia[pasoJugador]) {
            gameOver();
            return;
        }

        pasoJugador++;
        if (pasoJugador === secuencia.length) {
            bloqueado = true;
            setMensaje('BIEN! +1', false);
            setTimeout(siguienteNivel, DELAY_SIGUIENTE);
        }
    }

    function gameOver() {
        bloqueado = true;
        setMensaje('GAME OVER! NIVEL ' + nivel, true);
        mostrarStart(true);
    }

    // ── UI helpers ────────────────────────────────────────
    function actualizarNivel() {
        if (elementos.nivel) elementos.nivel.textContent = nivel;
    }

    function setMensaje(texto, esError) {
        if (!elementos.mensaje) return;
        elementos.mensaje.textContent = texto;
        elementos.mensaje.classList.toggle('simon-mensaje--error', esError);
    }

    function mostrarStart(mostrar) {
        if (elementos.btnStart) {
            elementos.btnStart.style.display = mostrar ? '' : 'none';
        }
    }

    return { iniciar: iniciar, reiniciar: reiniciar };
}());
