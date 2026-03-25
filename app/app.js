var estado = {
    pantallaActual: 'menu',
    juegoActivo: null
};

var indicePaleta = 0;
var timeoutIndicador;
var settingsUI;

function aplicarPaleta(p) {
    var r = document.documentElement.style;
    r.setProperty('--banner-bg',     p.bannerBg);
    r.setProperty('--banner-border', p.bannerBorder);
    r.setProperty('--banner-glow-1', p.bannerGlow1);
    r.setProperty('--banner-glow-2', p.bannerGlow2);
    r.setProperty('--sub-color',     p.subColor);
    r.setProperty('--sub-glow',      p.subGlow);
    r.setProperty('--c1',            p.c1);
    r.setProperty('--c1-rgb',        p.c1Rgb);
    r.setProperty('--c1-bg',         p.c1Bg);
    r.setProperty('--c1-light',      p.c1Light);
    r.setProperty('--c2',            p.c2);
    r.setProperty('--c2-rgb',        p.c2Rgb);
    r.setProperty('--c2-bg',         p.c2Bg);
    r.setProperty('--c2-light',      p.c2Light);
    r.setProperty('--c3',            p.c3);
    r.setProperty('--c3-rgb',        p.c3Rgb);
    r.setProperty('--c3-bg',         p.c3Bg);
    r.setProperty('--c3-light',      p.c3Light);
    r.setProperty('--c4',            p.c4);
    r.setProperty('--c4-rgb',        p.c4Rgb);
    r.setProperty('--c4-bg',         p.c4Bg);
    r.setProperty('--c4-light',      p.c4Light);

    var emojiMain = document.querySelector('.ttt-emoji-main');
    if (emojiMain) {
        emojiMain.style.filter = 'sepia(1) saturate(8) hue-rotate(' + p.c1HueDeg + 'deg) brightness(1.1)';
    }
}

function mostrarIndicador() {
    var el = document.getElementById('palette-indicator');
    var nombre = document.getElementById('pi-nombre');
    var num = document.getElementById('pi-num');
    var p = PALETAS[indicePaleta];

    nombre.textContent = p.nombre;
    num.textContent = (indicePaleta + 1) + ' / ' + PALETAS.length;

    el.classList.add('visible');
    clearTimeout(timeoutIndicador);
    timeoutIndicador = setTimeout(function () {
        el.classList.remove('visible');
    }, 2000);
}

function cambiarPantalla(nuevaPantalla, juego) {
    estado.pantallaActual = nuevaPantalla;
    estado.juegoActivo = juego;
    actualizarVista();
}

function actualizarVista() {
    var header = document.querySelector('.site-header');
    var menu = document.querySelector('.game-grid');
    var pantallaAhorcado = document.getElementById('pantalla-ahorcado');
    var pantallaTTT = document.getElementById('pantalla-tic-tac-toe');
    var pantallaSimon = document.getElementById('pantalla-simon');

    var esMenu = estado.pantallaActual === 'menu';

    header.style.display = esMenu ? '' : 'none';
    menu.style.display = esMenu ? '' : 'none';
    pantallaAhorcado.style.display = (!esMenu && estado.juegoActivo === 'ahorcado') ? '' : 'none';
    pantallaTTT.style.display = (!esMenu && estado.juegoActivo === 'tic-tac-toe') ? '' : 'none';
    pantallaSimon.style.display = (!esMenu && estado.juegoActivo === 'simon') ? '' : 'none';
}

function setPaletaActiva(indice, paleta) {
    indicePaleta = indice;
    aplicarPaleta(paleta);
    if (settingsUI) {
        settingsUI.refresh();
    }
}

function manejarCambioPaletaConTeclado() {
    indicePaleta = (indicePaleta + 1) % PALETAS.length;
    aplicarPaleta(PALETAS[indicePaleta]);
    if (settingsUI) {
        settingsUI.refresh();
    }
    mostrarIndicador();
}

function iniciar() {
    initNavigation({
        onStartTicTacToe: function () {
            TicTacToe.reiniciar();
            cambiarPantalla('juego', 'tic-tac-toe');
        },
        onStartAhorcado: function () {
            Ahorcado.reiniciar();
            cambiarPantalla('juego', 'ahorcado');
        },
        onStartSimon: function () {
            Simon.reiniciar();
            cambiarPantalla('juego', 'simon');
        },
        onBack: function () {
            cambiarPantalla('menu', null);
        }
    });

    settingsUI = initSettings({
        palettes: PALETAS,
        getActiveIndex: function () {
            return indicePaleta;
        },
        onPaletteSelected: setPaletaActiva
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'r' || e.key === 'R') {
            manejarCambioPaletaConTeclado();
        }
    });

    Ahorcado.iniciar();
    TicTacToe.iniciar();
    Simon.iniciar();
    aplicarPaleta(PALETAS[indicePaleta]);
}

iniciar();
