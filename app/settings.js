function initSettings(options) {
    var palettes = options.palettes;
    var getActiveIndex = options.getActiveIndex;
    var onPaletteSelected = options.onPaletteSelected;

    var btnSettings = document.getElementById('btn-settings');
    var modal = document.getElementById('modal-settings');
    var btnClose = document.getElementById('modal-close');
    var picker = document.getElementById('palette-picker');

    function actualizarSwatches() {
        palettes.forEach(function (_, i) {
            var swatch = picker.querySelector('[data-paleta="' + i + '"]');
            if (swatch) {
                swatch.classList.toggle('activo', i === getActiveIndex());
            }
        });
    }

    function abrirSettings() {
        modal.removeAttribute('hidden');
        actualizarSwatches();
    }

    function cerrarSettings() {
        modal.setAttribute('hidden', '');
    }

    function generarSwatches() {
        palettes.forEach(function (p, i) {
            var btn = document.createElement('button');
            btn.className = 'palette-swatch';
            btn.setAttribute('data-paleta', i);
            btn.setAttribute('aria-label', p.nombre);
            btn.setAttribute('title', p.nombre);
            btn.style.backgroundColor = p.c1;
            btn.style.boxShadow = '0 0 6px ' + p.c1;
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                onPaletteSelected(i, p);
                actualizarSwatches();
            });
            picker.appendChild(btn);
        });
    }

    btnSettings.addEventListener('click', abrirSettings);
    btnClose.addEventListener('click', cerrarSettings);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            cerrarSettings();
        }
    });

    generarSwatches();
    actualizarSwatches();

    return {
        refresh: actualizarSwatches,
        open: abrirSettings,
        close: cerrarSettings
    };
}
