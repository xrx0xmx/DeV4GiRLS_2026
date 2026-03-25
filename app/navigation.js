function initNavigation(options) {
    var onStartTicTacToe = options.onStartTicTacToe;
    var onStartSimon = options.onStartSimon;
    var onBack = options.onBack;

    document.querySelector('[data-juego="tic-tac-toe"]').addEventListener('click', onStartTicTacToe);

    document.querySelectorAll('.btn-volver').forEach(function (btn) {
        btn.addEventListener('click', onBack);
    });

    document.querySelector('[data-juego="simon"]').addEventListener('click', onStartSimon);
}
