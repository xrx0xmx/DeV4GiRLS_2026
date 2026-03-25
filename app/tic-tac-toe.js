var TicTacToe = (function () {

    var TAMANO_TABLERO = 9;
    var COMBINACIONES_GANADORAS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    var tablero = [];
    var turno = 'X';

    // ── Elementos del DOM (se cachean en iniciar) ────

    var elementos = {
        celdas: null,
        turnoTexto: null,
        mensaje: null,
        btnReiniciar: null
    };

    // ── Lógica pura (sin DOM) ────────────────────────

    function crearTableroVacio() {
        var nuevo = [];
        for (var i = 0; i < TAMANO_TABLERO; i++) {
            nuevo.push('');
        }
        return nuevo;
    }

    function calcularGanador(estado) {
        for (var i = 0; i < COMBINACIONES_GANADORAS.length; i++) {
            var a = COMBINACIONES_GANADORAS[i][0];
            var b = COMBINACIONES_GANADORAS[i][1];
            var c = COMBINACIONES_GANADORAS[i][2];

            if (estado[a] !== '' && estado[a] === estado[b] && estado[a] === estado[c]) {
                return estado[a];
            }
        }

        var hayEspacios = estado.some(function (celda) {
            return celda === '';
        });

        return hayEspacios ? null : 'empate';
    }

    function siguienteTurno(actual) {
        return actual === 'X' ? 'O' : 'X';
    }

    // ── Renderizado ──────────────────────────────────

    function renderizarCeldas() {
        elementos.celdas.forEach(function (celda) {
            celda.textContent = '';
            celda.disabled = false;
            celda.classList.remove('ttt-celda--x', 'ttt-celda--o');
        });
    }

    function renderizarTurno() {
        elementos.turnoTexto.textContent = turno;
    }

    function renderizarFinDeJuego(resultado) {
        if (resultado === 'empate') {
            elementos.mensaje.textContent = 'EMPATE!';
        } else {
            elementos.mensaje.textContent = 'GANA ' + resultado + '!';
        }

        elementos.celdas.forEach(function (c) {
            c.disabled = true;
        });
        elementos.btnReiniciar.style.display = '';
    }

    // ── Acciones ─────────────────────────────────────

    function reiniciar() {
        tablero = crearTableroVacio();
        turno = 'X';

        renderizarCeldas();
        renderizarTurno();
        elementos.mensaje.textContent = '';
        elementos.btnReiniciar.style.display = 'none';
    }

    function manejarClickCelda(evento) {
        var celda = evento.target;
        var indice = Number(celda.getAttribute('data-celda'));

        if (tablero[indice] !== '') return;

        tablero[indice] = turno;
        celda.textContent = turno;
        celda.classList.add(turno === 'X' ? 'ttt-celda--x' : 'ttt-celda--o');

        var resultado = calcularGanador(tablero);

        if (resultado) {
            renderizarFinDeJuego(resultado);
            return;
        }

        turno = siguienteTurno(turno);
        renderizarTurno();
    }

    // ── Inicialización ───────────────────────────────

    function iniciar() {
        elementos.celdas = document.querySelectorAll('.ttt-celda');
        elementos.turnoTexto = document.getElementById('ttt-turno-texto');
        elementos.mensaje = document.getElementById('ttt-mensaje');
        elementos.btnReiniciar = document.getElementById('ttt-reiniciar');

        elementos.celdas.forEach(function (celda) {
            celda.addEventListener('click', manejarClickCelda);
        });
        elementos.btnReiniciar.addEventListener('click', reiniciar);
    }

    // ── API pública ──────────────────────────────────

    return {
        iniciar: iniciar,
        reiniciar: reiniciar
    };

}());
