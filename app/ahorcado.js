var Ahorcado = (function () {
    var MAX_ERRORES = 6;
    var LETRAS = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
    var PALABRAS = [
        { palabra: 'ORDENADOR', pista: 'Una maquina para programar y jugar' },
        { palabra: 'PROGRAMAR', pista: 'Escribir instrucciones para la maquina' },
        { palabra: 'CARAMELO', pista: 'Algo dulce' },
        { palabra: 'BICICLETA', pista: 'Tiene dos ruedas' },
        { palabra: 'PLANETA', pista: 'Gira alrededor de una estrella' },
        { palabra: 'DRAGON', pista: 'Criatura fantastica' },
        { palabra: 'TECLADO', pista: 'Lo que usas para escribir' },
        { palabra: 'GALAXIA', pista: 'Muchísimas estrellas juntas' },
        { palabra: 'AVENTURA', pista: 'Historia emocionante' },
        { palabra: 'LIBRERIA', pista: 'Lugar con muchos libros' },
        { palabra: 'MURCIELAGO', pista: 'Animal que vuela de noche' },
        { palabra: 'ESTRELLA', pista: 'Brilla en el cielo' }
    ];

    var estado = {
        palabra: '',
        pista: '',
        palabraNormalizada: '',
        usadas: {},
        correctas: {},
        falladas: {},
        errores: 0,
        terminado: false,
        resultado: null
    };

    var dom = {
        pista: null,
        progreso: null,
        palabra: null,
        wrong: null,
        mensaje: null,
        teclado: null,
        btnReiniciar: null,
        partes: []
    };

    var botonesTeclado = {};
    var listenerTecladoRegistrado = false;

    function normalizar(texto) {
        return texto.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    function pantallaVisible() {
        var pantalla = document.getElementById('pantalla-ahorcado');
        return pantalla && pantalla.style.display !== 'none';
    }

    function obtenerLetraDeEvento(e) {
        var tecla = e.key;
        if (tecla === 'Ñ' || tecla === 'ñ') {
            return 'Ñ';
        }

        if (tecla.length !== 1) {
            return null;
        }

        var letra = normalizar(tecla);
        return /^[A-Z]$/.test(letra) ? letra : null;
    }

    function cacheDom() {
        dom.pista = document.getElementById('ahorcado-pista');
        dom.progreso = document.getElementById('ahorcado-progress');
        dom.palabra = document.getElementById('ahorcado-word');
        dom.wrong = document.getElementById('ahorcado-wrong');
        dom.mensaje = document.getElementById('ahorcado-mensaje');
        dom.teclado = document.getElementById('ahorcado-keyboard');
        dom.btnReiniciar = document.getElementById('ahorcado-reiniciar');
        dom.partes = Array.prototype.slice.call(document.querySelectorAll('.ahorcado-figure-part'));
    }

    function generarTeclado() {
        dom.teclado.innerHTML = '';
        botonesTeclado = {};

        LETRAS.forEach(function (letra) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'ahorcado-key';
            btn.textContent = letra;
            btn.setAttribute('aria-label', 'Letra ' + letra);
            btn.addEventListener('click', function () {
                adivinarLetra(letra);
            });
            botonesTeclado[letra] = btn;
            dom.teclado.appendChild(btn);
        });
    }

    function elegirPalabra() {
        var indice = Math.floor(Math.random() * PALABRAS.length);
        return PALABRAS[indice];
    }

    function limpiarEstado() {
        estado.usadas = {};
        estado.correctas = {};
        estado.falladas = {};
        estado.errores = 0;
        estado.terminado = false;
        estado.resultado = null;
    }

    function actualizarPartes() {
        dom.partes.forEach(function (parte, i) {
            parte.style.visibility = i < estado.errores ? 'visible' : 'hidden';
        });
    }

    function actualizarProgreso() {
        dom.progreso.textContent = estado.errores + ' / ' + MAX_ERRORES;
    }

    function actualizarPista() {
        dom.pista.textContent = estado.pista;
    }

    function actualizarPalabra() {
        dom.palabra.innerHTML = '';

        estado.palabra.split('').forEach(function (letra) {
            var span = document.createElement('span');
            if (letra === ' ') {
                span.className = 'ahorcado-letter ahorcado-letter--space';
                span.textContent = '';
            } else {
                span.className = 'ahorcado-letter';
                var clave = normalizar(letra);
                var mostrar = estado.terminado || estado.correctas[clave];
                span.textContent = mostrar ? letra : '';
                if (mostrar) {
                    span.classList.add('ahorcado-letter--revealed');
                }
                if (estado.resultado === 'ganado') {
                    span.classList.add('ahorcado-letter--win');
                }
                if (estado.resultado === 'perdido') {
                    span.classList.add('ahorcado-letter--lose');
                }
            }
            dom.palabra.appendChild(span);
        });
    }

    function actualizarLetrasFalladas() {
        var letras = Object.keys(estado.falladas);
        dom.wrong.textContent = letras.length ? letras.join(' · ') : 'NINGUNA';
    }

    function actualizarTeclado() {
        Object.keys(botonesTeclado).forEach(function (letra) {
            var btn = botonesTeclado[letra];
            var usada = !!estado.usadas[letra];
            btn.disabled = estado.terminado || usada;
            btn.classList.toggle('ahorcado-key--correct', !!estado.correctas[letra]);
            btn.classList.toggle('ahorcado-key--wrong', !!estado.falladas[letra]);
        });
    }

    function actualizarMensaje(texto) {
        dom.mensaje.textContent = texto;
    }

    function comprobarVictoria() {
        var todas = estado.palabraNormalizada.split('').every(function (letraOriginal, i) {
            var letraReal = estado.palabra.charAt(i);
            if (letraReal === ' ') {
                return true;
            }
            return !!estado.correctas[normalizar(letraReal)];
        });

        if (todas) {
            estado.terminado = true;
            estado.resultado = 'ganado';
            actualizarPalabra();
            actualizarTeclado();
            actualizarMensaje('HAS GANADO!');
            return true;
        }

        return false;
    }

    function terminarPartida(perdio) {
        estado.terminado = true;
        estado.resultado = perdio ? 'perdido' : 'ganado';
        actualizarPalabra();
        actualizarTeclado();
        actualizarMensaje(perdio ? 'PERDISTE. ERA: ' + estado.palabra : 'HAS GANADO!');
    }

    function adivinarLetra(letra) {
        if (estado.terminado || estado.usadas[letra]) {
            return;
        }

        estado.usadas[letra] = true;

        if (estado.palabraNormalizada.indexOf(letra) !== -1) {
            estado.correctas[letra] = true;
            actualizarMensaje('BIEN!');
        } else {
            estado.falladas[letra] = true;
            estado.errores++;
            actualizarMensaje('NO ESTA ESA LETRA');
            actualizarPartes();
        }

        actualizarProgreso();
        actualizarLetrasFalladas();
        actualizarPalabra();
        actualizarTeclado();

        if (estado.errores >= MAX_ERRORES) {
            terminarPartida(true);
            return;
        }

        comprobarVictoria();
    }

    function registrarTecladoFisico() {
        if (listenerTecladoRegistrado) {
            return;
        }

        document.addEventListener('keydown', function (e) {
            if (!pantallaVisible()) {
                return;
            }

            var letra = obtenerLetraDeEvento(e);
            if (letra) {
                adivinarLetra(letra);
            }
        });

        listenerTecladoRegistrado = true;
    }

    function reiniciar() {
        var seleccion = elegirPalabra();

        limpiarEstado();
        estado.palabra = seleccion.palabra.toUpperCase();
        estado.pista = seleccion.pista;
        estado.palabraNormalizada = normalizar(estado.palabra);

        actualizarPista();
        actualizarProgreso();
        actualizarPalabra();
        actualizarLetrasFalladas();
        actualizarTeclado();
        actualizarPartes();
        actualizarMensaje('PULSA UNA LETRA');
    }

    function iniciar() {
        cacheDom();
        generarTeclado();
        registrarTecladoFisico();

        dom.btnReiniciar.addEventListener('click', reiniciar);
        reiniciar();
    }

    return {
        iniciar: iniciar,
        reiniciar: reiniciar
    };
}());
