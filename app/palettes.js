// Paletas de color usadas por la UI.
var PALETAS = [
    {
        nombre:       'ORIGINAL',
        bannerBg:     '#ffff00', bannerBorder:  '#ffee44',
        bannerGlow1:  'rgba(255,255,0,0.6)',   bannerGlow2:  'rgba(255,255,0,0.3)',
        subColor:     '#ff00cc', subGlow:       'rgba(255,0,204,0.5)',
        c1:  '#ffff00', c1Rgb: '255, 255, 0',  c1Bg: '#1a1a00', c1Light: '#ffff88', c1HueDeg:  30,
        c2:  '#00ffcc', c2Rgb: '0, 255, 204',  c2Bg: '#001a15', c2Light: '#88ffee',
        c3:  '#ff00cc', c3Rgb: '255, 0, 204',  c3Bg: '#1a0015', c3Light: '#ff88ee',
        c4:  '#00aaff', c4Rgb: '0, 170, 255',  c4Bg: '#001520', c4Light: '#88ccff'
    },
    {
        nombre:       'NEON MIAMI',
        bannerBg:     '#00ffcc', bannerBorder:  '#00ee99',
        bannerGlow1:  'rgba(0,255,204,0.6)',   bannerGlow2:  'rgba(0,255,204,0.3)',
        subColor:     '#ff00cc', subGlow:       'rgba(255,0,204,0.5)',
        c1:  '#ff00cc', c1Rgb: '255, 0, 204',  c1Bg: '#1a0015', c1Light: '#ff88ee', c1HueDeg: 275,
        c2:  '#00ffcc', c2Rgb: '0, 255, 204',  c2Bg: '#001a15', c2Light: '#88ffee',
        c3:  '#ffff00', c3Rgb: '255, 255, 0',  c3Bg: '#1a1a00', c3Light: '#ffff88',
        c4:  '#ff8800', c4Rgb: '255, 136, 0',  c4Bg: '#1a0e00', c4Light: '#ffbb66'
    },
    {
        nombre:       'SYNTHWAVE',
        bannerBg:     '#ff6600', bannerBorder:  '#ee4400',
        bannerGlow1:  'rgba(255,102,0,0.6)',   bannerGlow2:  'rgba(255,102,0,0.3)',
        subColor:     '#cc44ff', subGlow:       'rgba(204,68,255,0.5)',
        c1:  '#ff6600', c1Rgb: '255, 102, 0',  c1Bg: '#1a0a00', c1Light: '#ffaa66', c1HueDeg:  -6,
        c2:  '#cc44ff', c2Rgb: '204, 68, 255', c2Bg: '#150015', c2Light: '#ee88ff',
        c3:  '#ff2299', c3Rgb: '255, 34, 153', c3Bg: '#1a0010', c3Light: '#ff88cc',
        c4:  '#44ffcc', c4Rgb: '68, 255, 204', c4Bg: '#001a15', c4Light: '#aaffee'
    },
    {
        nombre:       'MATRIX',
        bannerBg:     '#00ff41', bannerBorder:  '#00ee30',
        bannerGlow1:  'rgba(0,255,65,0.6)',    bannerGlow2:  'rgba(0,255,65,0.3)',
        subColor:     '#39ff14', subGlow:       'rgba(57,255,20,0.5)',
        c1:  '#00ff41', c1Rgb: '0, 255, 65',   c1Bg: '#001a05', c1Light: '#88ffaa', c1HueDeg: 104,
        c2:  '#39ff14', c2Rgb: '57, 255, 20',  c2Bg: '#051a00', c2Light: '#99ff88',
        c3:  '#00cc33', c3Rgb: '0, 204, 51',   c3Bg: '#001505', c3Light: '#88ee99',
        c4:  '#88ff00', c4Rgb: '136, 255, 0',  c4Bg: '#0f1a00', c4Light: '#bbff88'
    },
    {
        nombre:       'CYBER TOKYO',
        bannerBg:     '#0066ff', bannerBorder:  '#0044ee',
        bannerGlow1:  'rgba(0,102,255,0.6)',   bannerGlow2:  'rgba(0,102,255,0.3)',
        subColor:     '#00ddff', subGlow:       'rgba(0,221,255,0.5)',
        c1:  '#0066ff', c1Rgb: '0, 102, 255',  c1Bg: '#000f1a', c1Light: '#88aaff', c1HueDeg: 188,
        c2:  '#00ddff', c2Rgb: '0, 221, 255',  c2Bg: '#001a1a', c2Light: '#88eeff',
        c3:  '#9900ff', c3Rgb: '153, 0, 255',  c3Bg: '#0f001a', c3Light: '#cc88ff',
        c4:  '#ff6600', c4Rgb: '255, 102, 0',  c4Bg: '#1a0a00', c4Light: '#ffaa66'
    },
    {
        nombre:       'ARCADE GOLD',
        bannerBg:     '#ffaa00', bannerBorder:  '#ee9900',
        bannerGlow1:  'rgba(255,170,0,0.6)',   bannerGlow2:  'rgba(255,170,0,0.3)',
        subColor:     '#ff6600', subGlow:       'rgba(255,102,0,0.5)',
        c1:  '#ffaa00', c1Rgb: '255, 170, 0',  c1Bg: '#1a1000', c1Light: '#ffcc66', c1HueDeg:  10,
        c2:  '#ff6600', c2Rgb: '255, 102, 0',  c2Bg: '#1a0800', c2Light: '#ffaa66',
        c3:  '#ff2200', c3Rgb: '255, 34, 0',   c3Bg: '#1a0300', c3Light: '#ff8866',
        c4:  '#ffff00', c4Rgb: '255, 255, 0',  c4Bg: '#1a1a00', c4Light: '#ffff88'
    },
    {
        nombre:       'VAPOR DREAM',
        bannerBg:     '#ff77dd', bannerBorder:  '#ee66cc',
        bannerGlow1:  'rgba(255,119,221,0.6)', bannerGlow2:  'rgba(255,119,221,0.3)',
        subColor:     '#aa88ff', subGlow:       'rgba(170,136,255,0.5)',
        c1:  '#ff77dd', c1Rgb: '255, 119, 221', c1Bg: '#1a0018', c1Light: '#ffaaee', c1HueDeg: 288,
        c2:  '#aa88ff', c2Rgb: '170, 136, 255', c2Bg: '#0f0018', c2Light: '#ccaaff',
        c3:  '#77ffcc', c3Rgb: '119, 255, 204', c3Bg: '#001a14', c3Light: '#aaffee',
        c4:  '#ffcc77', c4Rgb: '255, 204, 119', c4Bg: '#1a1500', c4Light: '#ffe0aa'
    },
    {
        nombre:       'NUCLEAR',
        bannerBg:     '#ccff00', bannerBorder:  '#aaee00',
        bannerGlow1:  'rgba(204,255,0,0.6)',   bannerGlow2:  'rgba(204,255,0,0.3)',
        subColor:     '#ff8800', subGlow:       'rgba(255,136,0,0.5)',
        c1:  '#ccff00', c1Rgb: '204, 255, 0',  c1Bg: '#131a00', c1Light: '#eeff88', c1HueDeg:  45,
        c2:  '#ff8800', c2Rgb: '255, 136, 0',  c2Bg: '#1a0c00', c2Light: '#ffbb66',
        c3:  '#ff2200', c3Rgb: '255, 34, 0',   c3Bg: '#1a0300', c3Light: '#ff8866',
        c4:  '#00ffcc', c4Rgb: '0, 255, 204',  c4Bg: '#001a15', c4Light: '#88ffee'
    },
    {
        nombre:       'DEEP SPACE',
        bannerBg:     '#4488ff', bannerBorder:  '#3366ee',
        bannerGlow1:  'rgba(68,136,255,0.6)',  bannerGlow2:  'rgba(68,136,255,0.3)',
        subColor:     '#ffffff', subGlow:       'rgba(255,255,255,0.4)',
        c1:  '#4488ff', c1Rgb: '68, 136, 255', c1Bg: '#000d1a', c1Light: '#88aaff', c1HueDeg: 190,
        c2:  '#8844ff', c2Rgb: '136, 68, 255', c2Bg: '#0a001a', c2Light: '#bb88ff',
        c3:  '#ffffff', c3Rgb: '255, 255, 255', c3Bg: '#1a1a1a', c3Light: '#ffffff',
        c4:  '#ff4488', c4Rgb: '255, 68, 136', c4Bg: '#1a0010', c4Light: '#ff88bb'
    },
    {
        nombre:       'RETRO CANDY',
        bannerBg:     '#ff2233', bannerBorder:  '#ee1122',
        bannerGlow1:  'rgba(255,34,51,0.6)',   bannerGlow2:  'rgba(255,34,51,0.3)',
        subColor:     '#ffee00', subGlow:       'rgba(255,238,0,0.5)',
        c1:  '#ff2233', c1Rgb: '255, 34, 51',  c1Bg: '#1a0003', c1Light: '#ff8899', c1HueDeg: 324,
        c2:  '#2266ff', c2Rgb: '34, 102, 255', c2Bg: '#000d1a', c2Light: '#88aaff',
        c3:  '#ffee00', c3Rgb: '255, 238, 0',  c3Bg: '#1a1a00', c3Light: '#ffff88',
        c4:  '#00ff88', c4Rgb: '0, 255, 136',  c4Bg: '#001a0d', c4Light: '#88ffcc'
    },
    {
        nombre:       'ROSE',
        bannerBg:     '#c96080', bannerBorder:  '#b84d6e',
        bannerGlow1:  'rgba(201,96,128,0.6)',  bannerGlow2:  'rgba(201,96,128,0.3)',
        subColor:     '#f0a0bc', subGlow:       'rgba(240,160,188,0.5)',
        c1:  '#c96080', c1Rgb: '201, 96, 128', c1Bg: '#1a000f', c1Light: '#e08aaa', c1HueDeg: 312,
        c2:  '#9b4468', c2Rgb: '155, 68, 104', c2Bg: '#100008', c2Light: '#c478a0',
        c3:  '#f0a0bc', c3Rgb: '240, 160, 188', c3Bg: '#1a0814', c3Light: '#ffccdd',
        c4:  '#e87090', c4Rgb: '232, 112, 144', c4Bg: '#1a0010', c4Light: '#f0a8bc'
    },
    {
        nombre:       'PASTEL',
        bannerBg:     '#ffb3d9', bannerBorder:  '#eeaacc',
        bannerGlow1:  'rgba(255,179,217,0.6)', bannerGlow2:  'rgba(255,179,217,0.3)',
        subColor:     '#b3d9ff', subGlow:       'rgba(179,217,255,0.5)',
        c1:  '#ff9ec4', c1Rgb: '255, 158, 196', c1Bg: '#1a0a10', c1Light: '#ffc5d9', c1HueDeg: 307,
        c2:  '#9effd6', c2Rgb: '158, 255, 214', c2Bg: '#0a1a0f', c2Light: '#c5ffe8',
        c3:  '#c49eff', c3Rgb: '196, 158, 255', c3Bg: '#100a1a', c3Light: '#d9c5ff',
        c4:  '#ffaa44', c4Rgb: '255, 170, 68',  c4Bg: '#1a1200', c4Light: '#ffd088'
    }
];
