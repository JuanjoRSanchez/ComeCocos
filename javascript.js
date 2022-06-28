window.onload = function () {
    var tablero = document.getElementById('tablero');
    let direccion;

    // Ancho de las columnas
    var grid = "25px";
    var gridCompleto = grid;

    // Cantidad de cuadros de la cuadrcula
    var cuadrosHorizontal = 28;
    var cuadrosVertical = 27;


    const comecocos = {
        puntoInicical: '2:10',
        puntosComidos: [],
        estado: 'normal',
        direccion: 'derecha'
    }


    // Representación del tablero
    var c = 0;
    while (c < (cuadrosHorizontal - 1)) {
        gridCompleto += ' ' + grid;
        c++;
    }
    while (c < (cuadrosVertical - 1)) {
        gridCompleto += ' ' + grid;
        c++;
    }
    tablero.style.gridTemplateColumns = gridCompleto;
    for (var i = 1; i <= cuadrosVertical; i++) {
        for (var x = 1; x <= cuadrosHorizontal; x++) {
            var div = document.createElement('div');
            div.setAttribute('id', i + ':' + x);
            div.setAttribute('class', 'cuadro');
            tablero.appendChild(div);
        }
    }

    // Pintar bordes
    let bordes = [
        ///////////////////////////////////
        '1:1', '1:2', '1:3', '1:4', '1:5', '1:6', '1:7', '1:8', '1:9', '1:10',
        '1:11', '1:12', '1:13', '1:14', '1:15', '1:16', '1:17', '1:18', '1:19', '1:20',
        '1:21', '1:22', '1:23', '1:24', '1:25', '1:26', '1:27', '1:28',
        //////////////////
        '2:1', '2:14', '2:15', '2:28',
        /////////////////////////////
        '3:1', '3:3', '3:4', '3:5', '3:6', '3:8', '3:9', '3:10',
        '3:11', '3:12', '3:14', '3:15', '3:17', '3:18', '3:19', '3:20',
        '3:21', '3:23', '3:24', '3:25', '3:26', '3:28',
        /////////////////////////////
        '4:1', '4:3', '4:4', '4:5', '4:6', '4:8', '4:9', '4:10',
        '4:11', '4:12', '4:14', '4:15', '4:17', '4:18', '4:19', '4:20',
        '4:21', '4:23', '4:24', '4:25', '4:26', '4:28',
        //////////////////
        '5:1', '5:28',
        /////////////////
        '6:1', '6:3', '6:4', '6:5', '6:6', '6:8', '6:9',
        '6:11', '6:12', '6:13', '6:14', '6:15', '6:16', '6:17', '6:18', '6:20',
        '6:21', '6:23', '6:24', '6:25', '6:26', '6:28',
        /////////////////
        '7:1', '7:3', '7:4', '7:5', '7:6', '7:8', '7:9',
        '7:11', '7:12', '7:13', '7:14', '7:15', '7:16', '7:17', '7:18', '7:20',
        '7:21', '7:23', '7:24', '7:25', '7:26', '7:28',
        /////////////////
        '8:1', '8:8', '8:9',
        '8:14', '8:15', '8:20', '8:21', '8:28',
        /////////////////////////////
        '9:1', '9:2', '9:3', '9:4', '9:5', '9:6', '9:8', '9:9', '9:10',
        '9:11', '9:12', '9:14', '9:15', '9:17', '9:18', '9:19', '9:20',
        '9:21', '9:23', '9:24', '9:25', '9:26', '9:27', '9:28',
        /////////////////////////////
        '10:1', '10:2', '10:3', '10:4', '10:5', '10:6', '10:8', '10:9', '10:10',
        '10:11', '10:12', '10:14', '10:15', '10:17', '10:18', '10:19', '10:20',
        '10:21', '10:23', '10:24', '10:25', '10:26', '10:27', '10:28',
        /////////////////////////////
        '11:1', '11:2', '11:3', '11:4', '11:5', '11:6', '11:8', '11:9', '11:20',
        '11:21', '11:23', '11:24', '11:25', '11:26', '11:27', '11:28',
        /////////////////
        '12:1', '12:2', '12:3', '12:4', '12:5', '12:6', '12:8', '12:9',
        '12:11', '12:12', '12:13', '12:14', '12:15', '12:16', '12:17', '12:18', '12:20',
        '12:21', '12:23', '12:24', '12:25', '12:26', '12:27', '12:28',
        /////////////////
        '13:1', '13:2', '13:3', '13:4', '13:5', '13:6', '13:8', '13:9',
        '13:11', '13:12', '13:13', '13:14', '13:15', '13:16', '13:17', '13:18', '13:20',
        '13:21', '13:23', '13:24', '13:25', '13:26', '13:27', '13:28',
        //////////////////
        '14:11', '14:12', '14:13', '14:14', '14:15', '14:16', '14:17', '14:18',
        /////////////////----------------------///////////////////////////////13
        '15:1', '15:2', '15:3', '15:4', '15:5', '15:6', '15:8', '15:9',
        '15:11', '15:12', '15:13', '15:14', '15:15', '15:16', '15:17', '15:18', '15:20',
        '15:21', '15:23', '15:24', '15:25', '15:26', '15:27', '15:28',
        /////////////////12
        '16:1', '16:2', '16:3', '16:4', '16:5', '16:6', '16:8', '16:9',
        '16:11', '16:12', '16:13', '16:14', '16:15', '16:16', '16:17', '16:18', '16:20',
        '16:21', '16:23', '16:24', '16:25', '16:26', '16:27', '16:28',
        /////////////////////////////11
        '17:1', '17:2', '17:3', '17:4', '17:5', '17:6', '17:8', '17:9', '17:20',
        '17:21', '17:23', '17:24', '17:25', '17:26', '17:27', '17:28',
        /////////////////////////////10
        '18:1', '18:2', '18:3', '18:4', '18:5', '18:6', '18:8', '18:9', '18:10',
        '18:11', '18:12', '18:14', '18:15', '18:17', '18:18', '18:19', '18:20',
        '18:21', '18:23', '18:24', '18:25', '18:26', '18:27', '18:28',
        /////////////////////////////9
        '19:1', '19:2', '19:3', '19:4', '19:5', '19:6', '19:8', '19:9', '19:10',
        '19:11', '19:12', '19:14', '19:15', '19:17', '19:18', '19:19', '19:20',
        '19:21', '19:23', '19:24', '19:25', '19:26', '19:27', '19:28',
        /////////////////8
        '20:1', '20:8', '20:9',
        '20:14', '20:15', '20:20', '20:21', '20:28',
        /////////////////7
        '21:1', '21:3', '21:4', '21:5', '21:6', '21:8', '21:9',
        '21:11', '21:12', '21:13', '21:14', '21:15', '21:16', '21:17', '21:18', '21:20',
        '21:21', '21:23', '21:24', '21:25', '21:26', '21:28',
        /////////////////6
        '22:1', '22:3', '22:4', '22:5', '22:6', '22:8', '22:9',
        '22:11', '22:12', '22:13', '22:14', '22:15', '22:16', '22:17', '22:18', '22:20',
        '22:21', '22:23', '22:24', '22:25', '22:26', '22:28',
        //////////////////5
        '23:1', '23:28',
        /////////////////////////////4
        '24:1', '24:3', '24:4', '24:5', '24:6', '24:8', '24:9', '24:10',
        '24:11', '24:12', '24:14', '24:15', '24:17', '24:18', '24:19', '24:20',
        '24:21', '24:23', '24:24', '24:25', '24:26', '24:28',
        /////////////////////////////3
        '25:1', '25:3', '25:4', '25:5', '25:6', '25:8', '25:9', '25:10',
        '25:11', '25:12', '25:14', '25:15', '25:17', '25:18', '25:19', '25:20',
        '25:21', '25:23', '25:24', '25:25', '25:26', '25:28',
        //////////////////2
        '26:1', '26:28',
        ///////////////////////////////////1
        '27:1', '27:2', '27:3', '27:4', '27:5', '27:6', '27:7', '27:8', '27:9', '27:10',
        '27:11', '27:12', '27:13', '27:14', '27:15', '27:16', '27:17', '27:18', '27:19', '27:20',
        '27:21', '27:22', '27:23', '27:24', '27:25', '27:26', '27:27', '27:28',


    ]
    var camino = [];
    // 266
    document.getElementById(comecocos.puntoInicical).setAttribute('class', 'comecocosDerecha');
    function mostrarEscenario() {
        for (var i = 0; i < bordes.length; i++) {
            document.getElementById(bordes[i]).setAttribute('class', 'cuadrosOut');
        }
        let divs = document.getElementsByClassName('cuadro');
        for (var x = 0; x < divs.length; x++) {
            let elemento = divs[x];
            if (elemento.getAttribute('class') == 'cuadro') {
                elemento.setAttribute('class', 'caja');
                var id = elemento.getAttribute('id');
                camino.push(id);
            }
        }
        if (comecocos.puntosComidos.length == 265) {
            document.getElementById('mensaje').style.display = 'block';
            document.getElementById('mensaje').innerText = 'Ganaste el juego';
        }
        movimientos();
        mostrarPacman();


    }
    setInterval(mostrarEscenario, 100);

    function mostrarPacman() {
        var pu = document.getElementById(comecocos.puntoInicical);
        if (pu.getAttribute('class') == 'comecocosDerecha' || pu.getAttribute('class') == 'comecocosIzquierda'
            || pu.getAttribute('class') == 'comecocosArriba' || pu.getAttribute('class') == 'comecocosAbajo') {
            pu.setAttribute('class', 'comecocosCerrado');
        } else {
            switch (comecocos.direccion) {
                case 'derecha':
                    pu.setAttribute('class', 'comecocosDerecha');
                    break;
                case 'izquierda':
                    pu.setAttribute('class', 'comecocosIzquierda');
                    break;
                case 'arriba':
                    pu.setAttribute('class', 'comecocosArriba');
                    break;
                case 'abajo':
                    pu.setAttribute('class', 'comecocosAbajo');
                    break;
            }
        }
    }


    // captura de teclado
    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            case "ArrowLeft":
                direccion = 'izquierda';
                break;
            case "ArrowUp":
                direccion = 'arriba';
                break;
            case "ArrowRight":
                direccion = 'derecha';
                break;
            case "ArrowDown":
                direccion = 'abajo';
                break;
        }

    });

    function movimientos() {
        let pos = comecocos.puntoInicical;
        let DX = parseInt(pos.split(':')[1]);
        let DY = parseInt(pos.split(':')[0]);
        let caminoEvaluar;
        switch (direccion) {
            case 'derecha':
                DX = DX + 1;
                caminoEvaluar = DY + ':' + (DX);
                document.getElementById(comecocos.puntoInicical).setAttribute('class', 'comecocosDerecha');
                comecocos.direccion = 'derecha';
                if (document.getElementById(caminoEvaluar).getAttribute('class') == 'caja') {
                    comecocos.puntosComidos.push(caminoEvaluar);
                }
                if (evaluarMovimiento(caminoEvaluar)) {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                    comecocos.puntoInicical = caminoEvaluar;
                }
                break;
            case 'izquierda':
                DX = DX - 1;
                caminoEvaluar = DY + ':' + (DX);
                document.getElementById(comecocos.puntoInicical).setAttribute('class', 'comecocosIzquierda');
                comecocos.direccion = 'izquierda';
                if (document.getElementById(caminoEvaluar).getAttribute('class') == 'caja') {
                    comecocos.puntosComidos.push(caminoEvaluar);
                }
                if (evaluarMovimiento(caminoEvaluar)) {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                    comecocos.puntoInicical = caminoEvaluar;
                }
                break;
            case 'arriba':
                DY = DY - 1;
                caminoEvaluar = DY + ':' + (DX);
                document.getElementById(comecocos.puntoInicical).setAttribute('class', 'comecocosArriba');
                comecocos.direccion = 'arriba';
                if (document.getElementById(caminoEvaluar).getAttribute('class') == 'caja') {
                    comecocos.puntosComidos.push(caminoEvaluar);
                }
                if (evaluarMovimiento(caminoEvaluar)) {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                    comecocos.puntoInicical = caminoEvaluar;
                }
                break;
            case 'abajo':
                DY = DY + 1;
                caminoEvaluar = DY + ':' + (DX);
                document.getElementById(comecocos.puntoInicical).setAttribute('class', 'comecocosAbajo');
                comecocos.direccion = 'abajo';
                if (document.getElementById(caminoEvaluar).getAttribute('class') == 'caja') {
                    comecocos.puntosComidos.push(caminoEvaluar);
                }
                if (evaluarMovimiento(caminoEvaluar)) {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                    comecocos.puntoInicical = caminoEvaluar;

                }
                break;
        }
        var len = comecocos.puntosComidos.length;
        var o = parseInt(len) - 2;
        if (o >= 1) {
            let posicioPasada = comecocos.puntosComidos[o];
            document.getElementById(posicioPasada).setAttribute('class', 'cajaNegra');
        }


    }
    // Evaluar si el mivimiento esta fuera del camino 
    function evaluarMovimiento(posi) {
        if (camino.includes(posi)) {
            return true;
        }
        return false
    }



    // Fantasmas
    let nodosDIAA = [20, 235, 263, 67, 103, 188];
    let nodosDAb = [0, 221, 209, 51, 175, 254];
    let nodosDAr = [151];

    let nodosIAb = [11, 5, 41, 252, 91, 94];
    let nodosIAr = [46, 137, 259, 43, 89];

    let nodosDIAb = [134, 137, 26, 204, 171, 78];
    let nodosDIAr = [231, 122, 185, 109, 159, 54];

    let nodosAAD = [203, 183, 219, 237, 243];
    let nodosAAI = [30, 113, 65, 39, 87];

    let recorrido01 = {
        0: "2:2",
        1: "2:4",
        2: "2:6",
        3: "2:8",
        4: "2:11",
        5: "2:13",
        6: "2:17",
        7: "2:19",
        8: "2:21",
        9: "2:23",
        10: "2:25",
        11: "2:27",
        12: "3:7",
        13: "3:16",
        14: "3:27",
        15: "4:7",
        16: "4:16",
        17: "4:27",
        18: "5:3",
        19: "5:5",
        20: "5:7",
        21: "5:9",
        22: "5:11",
        23: "5:13",
        24: "5:15",
        25: "5:17",
        26: "5:19",
        27: "5:21",
        28: "5:23",
        29: "5:25",
        30: "5:27",
        31: "6:7",
        32: "6:19",
        33: "6:27",
        34: "7:7",
        35: "7:19",
        36: "7:27",
        37: "8:3",
        38: "8:5",
        39: "8:7",
        40: "8:11",
        41: "8:13",
        42: "8:17",
        43: "8:19",
        44: "8:23",
        45: "8:25",
        46: "8:27",
        47: "9:13",
        48: "9:22",
        49: "10:13",
        50: "10:22",
        51: "11:10",
        52: "11:12",
        53: "11:14",
        54: "11:16",
        55: "11:18",
        56: "11:22",
        57: "12:10",
        58: "12:22",
        59: "13:10",
        60: "13:22",
        61: "14:2",
        62: "14:4",
        63: "14:6",
        64: "14:8",
        65: "14:10",
        66: "14:20",
        67: "14:22",
        68: "14:24",
        69: "14:26",
        70: "14:28",
        71: "15:10",
        72: "15:22",
        73: "16:10",
        74: "16:22",
        75: "17:10",
        76: "17:12",
        77: "17:14",
        78: "17:16",
        79: "17:18",
        80: "17:22",
        81: "18:13",
        82: "18:22",
        83: "19:13",
        84: "19:22",
        85: "20:3",
        86: "20:5",
        87: "20:7",
        88: "20:11",
        89: "20:13",
        90: "20:17",
        91: "20:19",
        92: "20:23",
        93: "20:25",
        94: "20:27",
        95: "21:7",
        96: "21:19",
        97: "21:27",
        98: "22:7",
        99: "22:19",
        100: "22:27",
        101: "23:3",
        102: "23:5",
        103: "23:7",
        104: "23:9",
        105: "23:11",
        106: "23:13",
        107: "23:15",
        108: "23:17",
        109: "23:19",
        110: "23:21",
        111: "23:23",
        112: "23:25",
        113: "23:27",
        114: "24:7",
        115: "24:16",
        116: "24:27",
        117: "25:7",
        118: "25:16",
        119: "25:27",
        120: "26:3",
        121: "26:5",
        122: "26:7",
        123: "26:9",
        124: "26:11",
        125: "26:13",
        126: "26:15",
        127: "26:17",
        128: "26:19",
        129: "26:21",
        130: "26:23",
        131: "26:25",
        132: "26:27",
        133: "2:3",
        134: "2:7",
        135: "2:12",
        136: "2:18",
        137: "2:22",
        138: "2:26",
        139: "3:13",
        140: "4:2",
        141: "4:22",
        142: "5:4",
        143: "5:8",
        144: "5:12",
        145: "5:16",
        146: "5:20",
        147: "5:24",
        148: "6:2",
        149: "6:22",
        150: "7:10",
        151: "8:2",
        152: "8:6",
        153: "8:12",
        154: "8:18",
        155: "8:24",
        156: "9:7",
        157: "10:7",
        158: "11:7",
        159: "11:13",
        160: "11:17",
        161: "12:7",
        162: "13:7",
        163: "14:1",
        164: "14:5",
        165: "14:9",
        166: "14:21",
        167: "14:25",
        168: "15:7",
        169: "16:7",
        170: "17:7",
        171: "17:13",
        172: "17:17",
        173: "18:7",
        174: "19:7",
        175: "20:2",
        176: "20:6",
        177: "20:12",
        178: "20:18",
        179: "20:24",
        180: "21:2",
        181: "21:22",
        182: "22:10",
        183: "23:2",
        184: "23:6",
        185: "23:10",
        186: "23:14",
        187: "23:18",
        188: "23:22",
        189: "23:26",
        190: "24:13",
        191: "25:2",
        192: "25:22",
        193: "26:4",
        194: "26:8",
        195: "26:12",
        196: "26:16",
        197: "26:20",
        198: "26:24",
        199: "2:5",
        200: "2:16",
        201: "2:24",
        202: "3:22",
        203: "5:2",
        204: "5:10",
        205: "5:18",
        206: "5:26",
        207: "7:2",
        208: "8:4",
        209: "8:16",
        210: "8:26",
        211: "10:16",
        212: "11:15",
        213: "12:19",
        214: "14:3",
        215: "14:19",
        216: "14:27",
        217: "16:19",
        218: "17:15",
        219: "18:16",
        220: "20:4",
        221: "20:16",
        222: "20:26",
        223: "22:2",
        224: "23:4",
        225: "23:12",
        226: "23:20",
        227: "24:2",
        228: "25:13",
        229: "26:6",
        230: "26:14",
        231: "26:22",
        232: "2:9",
        233: "3:2",
        234: "5:6",
        235: "5:22",
        236: "7:22",
        237: "8:22",
        238: "11:11",
        239: "13:19",
        240: "14:23",
        241: "17:11",
        242: "19:16",
        243: "20:22",
        244: "22:22",
        245: "23:16",
        246: "24:22",
        247: "26:10",
        248: "26:26",
        249: "2:20",
        250: "5:14",
        251: "8:10",
        252: "11:19",
        253: "15:19",
        254: "20:10",
        255: "23:8",
        256: "26:2",
        257: "4:13",
        258: "9:16",
        259: "17:19",
        260: "23:24",
        261: "6:10",
        262: "21:10",
        263: "14:7",
        264: "26:18"
    };

    let recorridoValido = [
        "2:2",
        "2:4",
        "2:6",
        "2:8",
        "2:11",
        "2:13",
        "2:17",
        "2:19",
        "2:21",
        "2:23",
        "2:25",
        "2:27",
        "3:7",
        "3:16",
        "3:27",
        "4:7",
        "4:16",
        "4:27",
        "5:3",
        "5:5",
        "5:7",
        "5:9",
        "5:11",
        "5:13",
        "5:15",
        "5:17",
        "5:19",
        "5:21",
        "5:23",
        "5:25",
        "5:27",
        "6:7",
        "6:19",
        "6:27",
        "7:7",
        "7:19",
        "7:27",
        "8:3",
        "8:5",
        "8:7",
        "8:11",
        "8:13",
        "8:17",
        "8:19",
        "8:23",
        "8:25",
        "8:27",
        "9:13",
        "9:22",
        "10:13",
        "10:22",
        "11:10",
        "11:12",
        "11:14",
        "11:16",
        "11:18",
        "11:22",
        "12:10",
        "12:22",
        "13:10",
        "13:22",
        "14:2",
        "14:4",
        "14:6",
        "14:8",
        "14:10",
        "14:20",
        "14:22",
        "14:24",
        "14:26",
        "14:28",
        "15:10",
        "15:22",
        "16:10",
        "16:22",
        "17:10",
        "17:12",
        "17:14",
        "17:16",
        "17:18",
        "17:22",
        "18:13",
        "18:22",
        "19:13",
        "19:22",
        "20:3",
        "20:5",
        "20:7",
        "20:11",
        "20:13",
        "20:17",
        "20:19",
        "20:23",
        "20:25",
        "20:27",
        "21:7",
        "21:19",
        "21:27",
        "22:7",
        "22:19",
        "22:27",
        "23:3",
        "23:5",
        "23:7",
        "23:9",
        "23:11",
        "23:13",
        "23:15",
        "23:17",
        "23:19",
        "23:21",
        "23:23",
        "23:25",
        "23:27",
        "24:7",
        "24:16",
        "24:27",
        "25:7",
        "25:16",
        "25:27",
        "26:3",
        "26:5",
        "26:7",
        "26:9",
        "26:11",
        "26:13",
        "26:15",
        "26:17",
        "26:19",
        "26:21",
        "26:23",
        "26:25",
        "26:27",
        "2:3",
        "2:7",
        "2:12",
        "2:18",
        "2:22",
        "2:26",
        "3:13",
        "4:2",
        "4:22",
        "5:4",
        "5:8",
        "5:12",
        "5:16",
        "5:20",
        "5:24",
        "6:2",
        "6:22",
        "7:10",
        "8:2",
        "8:6",
        "8:12",
        "8:18",
        "8:24",
        "9:7",
        "10:7",
        "11:7",
        "11:13",
        "11:17",
        "12:7",
        "13:7",
        "14:1",
        "14:5",
        "14:9",
        "14:21",
        "14:25",
        "15:7",
        "16:7",
        "17:7",
        "17:13",
        "17:17",
        "18:7",
        "19:7",
        "20:2",
        "20:6",
        "20:12",
        "20:18",
        "20:24",
        "21:2",
        "21:22",
        "22:10",
        "23:2",
        "23:6",
        "23:10",
        "23:14",
        "23:18",
        "23:22",
        "23:26",
        "24:13",
        "25:2",
        "25:22",
        "26:4",
        "26:8",
        "26:12",
        "26:16",
        "26:20",
        "26:24",
        "2:5",
        "2:16",
        "2:24",
        "3:22",
        "5:2",
        "5:10",
        "5:18",
        "5:26",
        "7:2",
        "8:4",
        "8:16",
        "8:26",
        "10:16",
        "11:15",
        "12:19",
        "14:3",
        "14:19",
        "14:27",
        "16:19",
        "17:15",
        "18:16",
        "20:4",
        "20:16",
        "20:26",
        "22:2",
        "23:4",
        "23:12",
        "23:20",
        "24:2",
        "25:13",
        "26:6",
        "26:14",
        "26:22",
        "2:9",
        "3:2",
        "5:6",
        "5:22",
        "7:22",
        "8:22",
        "11:11",
        "13:19",
        "14:23",
        "17:11",
        "19:16",
        "20:22",
        "22:22",
        "23:16",
        "24:22",
        "26:10",
        "26:26",
        "2:20",
        "5:14",
        "8:10",
        "11:19",
        "15:19",
        "20:10",
        "23:8",
        "26:2",
        "4:13",
        "9:16",
        "17:19",
        "23:24",
        "6:10",
        "21:10",
        "14:7",
        "26:18"
    ];
    var fantasmaNaranja = {
        posicion: '6:4',
        direccion: 'derecha'
    }

    document.getElementById(fantasmaNaranja.posicion).setAttribute('class', 'fantasmaNaranja01');

    function movimientoFantasmaNaranjaBordeante() {
        let pos = fantasmaNaranja.posicion;
        let DX = parseInt(pos.split(':')[1]);
        let DY = parseInt(pos.split(':')[0]);
        let caminoEvaluar;
        switch (fantasmaNaranja.direccion) {
            case 'derecha':
                DX = DX + 1;
                caminoEvaluar = DY + ':' + DX;
                if (evaluarMovimientoFantasma(caminoEvaluar)) {
                    fantasmaNaranja.posicion = caminoEvaluar;
                    document.getElementById(pos).setAttribute('class', 'caja');
                    document.getElementById(caminoEvaluar).setAttribute('class', 'fantasmaNaranja01');
                } else {
                    randomDirecciones('derecha');
                }
                break;
            case 'izquierda':
                DX = DX - 1;
                caminoEvaluar = DY + ':' + (DX);
                if (evaluarMovimientoFantasma(caminoEvaluar)) {
                    fantasmaNaranja.posicion = caminoEvaluar;
                    document.getElementById(pos).setAttribute('class', 'caja');
                    document.getElementById(caminoEvaluar).setAttribute('class', 'fantasmaNaranja01');
                } else {
                    randomDirecciones('izquierda');
                }
                break;
            case 'arriba':
                DY = DY - 1;
                caminoEvaluar = DY + ':' + (DX);
                if (evaluarMovimientoFantasma(caminoEvaluar)) {
                    fantasmaNaranja.posicion = caminoEvaluar;
                    document.getElementById(pos).setAttribute('class', 'caja');
                    document.getElementById(caminoEvaluar).setAttribute('class', 'fantasmaNaranja01');
                } else {
                    randomDirecciones('arriba');
                }
                break;
            case 'abajo':
                DY = DY + 1;
                caminoEvaluar = DY + ':' + (DX);
                if (evaluarMovimientoFantasma(caminoEvaluar)) {
                    fantasmaNaranja.posicion = caminoEvaluar;
                    document.getElementById(pos).setAttribute('class', 'caja');
                    document.getElementById(caminoEvaluar).setAttribute('class', 'fantasmaNaranja01');
                } else {
                    randomDirecciones('abajo');
                }
                break;
        }

        if (document.getElementById(caminoEvaluar).getAttribute('class') == 'fantasmaNaranja01') {
            document.getElementById(caminoEvaluar).setAttribute('class', 'fantasmaNaranja02');
        } else {
            document.getElementById(caminoEvaluar).setAttribute('class', 'fantasmaNaranja01');
        }

    }


    var fantasmaRojo = {
        posicion: '5:5',
        direccion: 'derecha'
    }
    document.getElementById(fantasmaRojo.posicion).setAttribute('class', 'fantasmaRojo01');


    function movimientoFantasmaRojoTotal() {
        let pos = fantasmaRojo.posicion;
        let DX = parseInt(pos.split(':')[1]);
        let DY = parseInt(pos.split(':')[0]);
        let caminoEvaluar;
        switch (fantasmaRojo.direccion) {
            case 'derecha':
                DX = DX + 1;
                caminoEvaluar = DY + ':' + DX;
                if (evaluarMovimientoFantasma(caminoEvaluar)) {
                    console.log('posicion al entrar: ' + fantasmaRojo.posicion);
                    fantasmaRojo.posicion = caminoEvaluar;
                    document.getElementById(pos).setAttribute('class', 'caja');
                    document.getElementById(caminoEvaluar).setAttribute('class', 'fantasmaRojo01');
                    //randomDireccionesTotal(caminoEvaluar);
                    if(randomDireccionesTotal(caminoEvaluar) == false){
                        break;
                    }else{
                        fantasmaRojo.direccion = randomDireccionesTotal(caminoEvaluar);
                    }
                }
                break;
            case 'izquierda':
                DX = DX - 1;
                caminoEvaluar = DY + ':' + (DX);
                if (evaluarMovimientoFantasma(caminoEvaluar)) {
                    fantasmaRojo.posicion = caminoEvaluar;
                    document.getElementById(pos).setAttribute('class', 'caja');
                    document.getElementById(caminoEvaluar).setAttribute('class', 'fantasmaRojo01');
                    //randomDireccionesTotal(caminoEvaluar);
                    if(randomDireccionesTotal(caminoEvaluar) == false){
                        break;
                    }else{
                        fantasmaRojo.direccion = randomDireccionesTotal(caminoEvaluar);
                    }
                }
                break;
            case 'arriba':
                DY = DY - 1;
                caminoEvaluar = DY + ':' + (DX);
                if (evaluarMovimientoFantasma(caminoEvaluar)) {
                    fantasmaRojo.posicion = caminoEvaluar;
                    document.getElementById(pos).setAttribute('class', 'caja');
                    document.getElementById(caminoEvaluar).setAttribute('class', 'fantasmaRojo01');
                    //randomDireccionesTotal(caminoEvaluar);
                    if(randomDireccionesTotal(caminoEvaluar) == false){
                        break;
                    }else{
                        fantasmaRojo.direccion = randomDireccionesTotal(caminoEvaluar);
                    }
                }
                break;
            case 'abajo':
                DY = DY + 1;
                caminoEvaluar = DY + ':' + (DX);
                if (evaluarMovimientoFantasma(caminoEvaluar)) {
                    fantasmaRojo.posicion = caminoEvaluar;
                    document.getElementById(pos).setAttribute('class', 'caja');
                    document.getElementById(caminoEvaluar).setAttribute('class', 'fantasmaRojo01');
                    //randomDireccionesTotal(caminoEvaluar);
                    if(randomDireccionesTotal(caminoEvaluar) == false){
                        break;
                    }else{
                        fantasmaRojo.direccion = randomDireccionesTotal(caminoEvaluar);
                    }
                }
                break;
        }
/*
        if (document.getElementById(caminoEvaluar).getAttribute('class') == 'fantasmaRojo01') {
            document.getElementById(caminoEvaluar).setAttribute('class', 'fantasmaRojo02');
        } else {
            document.getElementById(caminoEvaluar).setAttribute('class', 'fantasmaRojo01');
        }
*/
    }

    // nodos cambio de dirección
    let nodoDIAA = ["5:7", "5:22", "14:7", "14:22", "23:7", "23:22"];
    let nodoDAb = ["2:2", "20:16", "8:16", "11:10", "20:2", "20:10", "14:19"];
    let nodoDAr = ["8:2", "8:10", "26:2", "17:10"];

    let nodoIAb = ["2:27", "2:13", "8:13", "11:19", "20:19", "20:27", "8:13"];
    let nodoIAr = ["8:27", "17:19", "8:19", "20:13", "8:19", "26:27"];

    let nodoDIAb = ["2:7", "2:22", "5:19", "5:10", "17:13", "17:16", "2:7"];
    let nodoDIAr = ["26:22", "26:7", "23:10", "23:19", "11:13", "11:16"];

    let nodoAAD = ["5:2", "23:2", "18:16", "8:22", "20:22", "5:7"];
    let nodoAAI = ["5:27", "23:27", "14:10", "8:7", "20:7"];
    let der = '14:1';
    let izq = '14:28';
/*
    function randomDireccionesTotal(posic) {
        let num;
        if (nodoDIAA.includes(posic)) {
            num = Math.round(Math.random() * 10);
            console.log('numero random: ' + num)
            if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 3) + 1;
                console.log('numero01 random: ' + num01)
                switch (num01) {
                    case (1):
                        fantasmaRojo.direccion = 'derecha';
                        break;
                    case (2):
                        fantasmaRojo.direccion = 'izquierda';
                        break;
                    case (3):
                        fantasmaRojo.direccion = 'abajo';
                        break;
                    case (4):
                        fantasmaRojo.direccion = 'arriba';
                        break;
                }
            }
        }
        if (nodoDAb.includes(posic)) {
            num = Math.round(Math.random() * 10);
            if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 10) % 2;
                if (num01 == 0) {
                    fantasmaRojo.direccion = 'derecha';
                } else {
                    fantasmaRojo.direccion = 'abajo';
                }
            }
        }
        if (nodoDAr.includes(posic)) {
            num = Math.round(Math.random() * 10);
            if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 10) % 2;
                if (num01 == 0) {
                    fantasmaRojo.direccion = 'derecha';
                } else {
                    fantasmaRojo.direccion = 'arriba';
                }
            }
        }
        if (nodoIAb.includes(posic)) {
            num = Math.round(Math.random() * 10);
            if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 10) % 2;
                if (num01 == 0) {
                    fantasmaRojo.direccion = 'izquierda';
                } else {
                    fantasmaRojo.direccion = 'abajo';
                }
            }
        }
        if (nodoIAr.includes(posic)) {
            num = Math.round(Math.random() * 10);
            if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 10) % 2;
                if (num01 == 0) {
                    fantasmaRojo.direccion = 'izquierda';
                } else {
                    fantasmaRojo.direccion = 'arriba';
                }
            }
        }
        if (nodoDIAb.includes(posic)) {
            num = Math.round(Math.random() * 10);
            if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 2) + 1;
                switch (num01) {
                    case (1):
                        fantasmaRojo.direccion = 'derecha';
                        break;
                    case (2):
                        fantasmaRojo.direccion = 'izquierda';
                        break;
                    case (3):
                        fantasmaRojo.direccion = 'abajo';
                        break;
                }
            }
        }
        if (nodoDIAr.includes(posic)) {
            num = Math.round(Math.random() * 10);
            if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 2) + 1;
                switch (num01) {
                    case (1):
                        fantasmaRojo.direccion = 'derecha';
                        break;
                    case (2):
                        fantasmaRojo.direccion = 'izquierda';
                        break;
                    case (3):
                        fantasmaRojo.direccion = 'arriba';
                        break;
                }
            }
        }
        if (nodoAAD.includes(posic)) {
            num = Math.round(Math.random() * 10);
            if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 2) + 1;
                switch (num01) {
                    case (1):
                        fantasmaRojo.direccion = 'derecha';
                        break;
                    case (2):
                        fantasmaRojo.direccion = 'abajo';
                        break;
                    case (3):
                        fantasmaRojo.direccion = 'arriba';
                        break;
                }
            }
        }
        if (nodoAAI.includes(posic)) {
            num = Math.round(Math.random() * 10);
            if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 2) + 1;
                switch (num01) {
                    case (1):
                        fantasmaRojo.direccion = 'izquierda';
                        break;
                    case (2):
                        fantasmaRojo.direccion = 'abajo';
                        break;
                    case (3):
                        fantasmaRojo.direccion = 'arriba';
                        break;
                }
            }
        }
        if (posic == der) {
            fantasmaRojo.direccion = 'izquierda';
        }
        if (posic == izq) {
            fantasmaRojo.direccion = 'derecha';
        }
    }
*/
    function randomDireccionesTotal(posic) {
        let num;
        if (nodoDIAA.includes(posic)) {
            num = Math.round(Math.random() * 10);
            console.log('numero random: ' + num)
            //if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 3) + 1;
                console.log('numero01 random: ' + num01)
                switch (num01) {
                    case (1):
                        return 'derecha';
                    case (2):
                        return 'izquierda';
                    case (3):
                        return 'abajo';
                    case (4):
                        return 'arriba';
                }
            //}
        }
        if (nodoDAb.includes(posic)) {
            num = Math.round(Math.random() * 10);
           // if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 10) % 2;
                if (num01 == 0) {
                    return 'derecha';
                } else {
                    return 'abajo';
                }
          //  }
        }
        if (nodoDAr.includes(posic)) {
            num = Math.round(Math.random() * 10);
          //  if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 10) % 2;
                if (num01 == 0) {
                    return 'derecha';
                } else {
                    return 'arriba';
                }
           // }
        }
        if (nodoIAb.includes(posic)) {
            num = Math.round(Math.random() * 10);
          //  if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 10) % 2;
                if (num01 == 0) {
                    return 'izquierda';
                } else {
                    return 'abajo';
                }
           // }
        }
        if (nodoIAr.includes(posic)) {
            num = Math.round(Math.random() * 10);
           // if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 10) % 2;
                if (num01 == 0) {
                    return 'izquierda';
                } else {
                    return 'arriba';
                }
          //  }
        }
        if (nodoDIAb.includes(posic)) {
            num = Math.round(Math.random() * 10);
          //  if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 2) + 1;
                switch (num01) {
                    case (1):
                        return 'derecha';
                    case (2):
                        return 'izquierda';
                    case (3):
                        return 'abajo';
                }
           // }
        }
        if (nodoDIAr.includes(posic)) {
            num = Math.round(Math.random() * 10);
          //  if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 2) + 1;
                switch (num01) {
                    case (1):
                        return 'derecha';
                    case (2):
                        return 'izquierda';
                    case (3):
                        return 'arriba';
                }
          //  }
        }
        if (nodoAAD.includes(posic)) {
            num = Math.round(Math.random() * 10);
          //  if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 2) + 1;
                switch (num01) {
                    case (1):
                        return 'derecha';
                    case (2):
                        return 'abajo';
                    case (3):
                        return 'arriba';
                }
          //  }
        }
        if (nodoAAI.includes(posic)) {
            num = Math.round(Math.random() * 10);
         //   if (num % 2 == 0) {
                let num01 = Math.round(Math.random() * 2) + 1;
                switch (num01) {
                    case (1):
                        return 'izquierda';
                    case (2):
                        return 'abajo';
                    case (3):
                        return 'arriba';
                }
          //  }
        }
        if (posic == der) {
            return 'izquierda';
        }
        if (posic == izq) {
            return 'derecha';
        }
        return false;
    }



function evaluarMovimientoFantasma(posi) {
    if (recorridoValido.includes(posi)) {
        return true;
    }
    console.log('false')
    return false
}

function randomDirecciones(dir) {
    let num = Math.round(Math.random() * 3);
    if (dir == 'derecha') {
        switch (num) {
            case (0):
                fantasmaNaranja.direccion = 'izquierda';
                break;
            case (1):
                fantasmaNaranja.direccion = 'izquierda';
                break;
            case (2):
                fantasmaNaranja.direccion = 'abajo';
                break;
            case (3):
                fantasmaNaranja.direccion = 'arriba';
                break;
        }
    }
    if (dir == 'izquierda') {
        switch (num) {
            case (0):
                fantasmaNaranja.direccion = 'derecha';
                break;
            case (1):
                fantasmaNaranja.direccion = 'derecha';
                break;
            case (2):
                fantasmaNaranja.direccion = 'abajo';
                break;
            case (3):
                fantasmaNaranja.direccion = 'arriba';
                break;
        }
    }
    if (dir == 'arriba') {
        switch (num) {
            case (0):
                fantasmaNaranja.direccion = 'derecha';
                break;
            case (1):
                fantasmaNaranja.direccion = 'derecha';
                break;
            case (2):
                fantasmaNaranja.direccion = 'abajo';
                break;
            case (3):
                fantasmaNaranja.direccion = 'izquierda';
                break;

        }
    }
    if (dir == 'abajo') {
        switch (num) {
            case (0):
                fantasmaNaranja.direccion = 'derecha';
                break;
            case (1):
                fantasmaNaranja.direccion = 'derecha';
                break;
            case (2):
                fantasmaNaranja.direccion = 'arriba';
                break;
            case (3):
                fantasmaNaranja.direccion = 'izquierda';
                break;

        }
    }

}

setInterval(movimientoFantasmaRojoTotal, 300);
setInterval(movimientoFantasmaNaranjaBordeante, 300);

}

