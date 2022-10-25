window.onload = function () {
    var tablero = document.getElementById('tablero');
    let direccion;

    // Ancho de las columnas
    var grid = "25px";
    var gridCompleto = grid;

    // Cantidad de cuadros de la cuadrcula
    var cuadrosHorizontal = 28;
    var cuadrosVertical = 27;

    let velocidad = 200;
    const comecocos = {
        puntoInicical: '20:27',
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

    let camino = [
        "2:2",
        "2:4",
        "2:6",
        "2:8",
        "2:10",
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

    // 266
    document.getElementById(comecocos.puntoInicical).class += ('class', 'jugador');
    document.getElementById(comecocos.puntoInicical).classList.add('class', 'comecocosDerecha');
    function mostrarEscenario() {
        for (var i = 0; i < bordes.length; i++) {
            document.getElementById(bordes[i]).setAttribute('class', 'cuadrosOut');
        }
        let divs = document.getElementsByClassName('cuadro');
        for (var x = 0; x < divs.length; x++) {
            let elemento = divs[x];
            if (elemento.getAttribute('class') == 'cuadro') {
                elemento.setAttribute('class', 'caja');
            }
        }
        evaluarVictoria();
    }


    function reiniciarPartida() {
        location.reload();
    }

    document.getElementsByClassName('btnCerrar_conecta')[0].addEventListener('click', reiniciarPartida);
    /*
    Función que dependiendo de la dirección que lleve Pacman orienta su cuerpo 
    */
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

    function movimientosPacman() {
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
                    restantes(caminoEvaluar);
                }
                if (evaluarMovimiento(caminoEvaluar)) {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                    comecocos.puntoInicical = caminoEvaluar;
                    if (evaluarChoquePacmanConFantasma(comecocos.puntoInicical)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensajeContenido').innerText = 'Perdiste el juego';
                    }
                }
                break;
            case 'izquierda':
                DX = DX - 1;
                caminoEvaluar = DY + ':' + (DX);
                document.getElementById(comecocos.puntoInicical).setAttribute('class', 'comecocosIzquierda');
                comecocos.direccion = 'izquierda';
                if (document.getElementById(caminoEvaluar).getAttribute('class') == 'caja') {
                    comecocos.puntosComidos.push(caminoEvaluar);
                    restantes(caminoEvaluar);

                }
                if (evaluarMovimiento(caminoEvaluar)) {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                    comecocos.puntoInicical = caminoEvaluar;
                    if (evaluarChoquePacmanConFantasma(comecocos.puntoInicical)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensajeContenido').innerText = 'Perdiste el juego';
                    }
                }
                break;
            case 'arriba':
                DY = DY - 1;
                caminoEvaluar = DY + ':' + (DX);
                document.getElementById(comecocos.puntoInicical).setAttribute('class', 'comecocosArriba');
                comecocos.direccion = 'arriba';
                if (document.getElementById(caminoEvaluar).getAttribute('class') == 'caja') {
                    comecocos.puntosComidos.push(caminoEvaluar);
                    restantes(caminoEvaluar);
                }
                if (evaluarMovimiento(caminoEvaluar)) {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                    comecocos.puntoInicical = caminoEvaluar;
                    if (evaluarChoquePacmanConFantasma(comecocos.puntoInicical)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensajeContenido').innerText = 'Perdiste el juego';
                    }
                }
                break;
            case 'abajo':
                DY = DY + 1;
                caminoEvaluar = DY + ':' + (DX);
                document.getElementById(comecocos.puntoInicical).setAttribute('class', 'comecocosAbajo');
                comecocos.direccion = 'abajo';
                if (document.getElementById(caminoEvaluar).getAttribute('class') == 'caja') {
                    comecocos.puntosComidos.push(caminoEvaluar);
                    restantes(caminoEvaluar);
                }
                if (evaluarMovimiento(caminoEvaluar)) {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                    comecocos.puntoInicical = caminoEvaluar;
                    if (evaluarChoquePacmanConFantasma(comecocos.puntoInicical)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensajeContenido').innerText = 'Perdiste el juego';
                    }
                }
                break;
        }
        evaluarVictoria();

    }

    function restantes(posi) {
        console.log(camino.length)

        for (var i = camino.length - 1; i >= 0; i--) {
            if (camino[i] === posi) {
                camino.splice(i, 1);
            }
        }
        console.log(camino.length)
    }

    // Evaluar si el mivimiento esta fuera del camino 
    function evaluarMovimiento(posi) {
        if (recorridoValido.includes(posi)) {
            return true;
        }
        return false
    }

    function evaluarChoquePacmanConFantasma(posi) {
        let clas = document.getElementById(posi).getAttribute('class');
        if (clas != 'caja' && clas != 'cajaNegra') {
            return true;
        }
        return false;
    }

    function evaluarVictoria() {
        let puntosRestantes = document.getElementsByClassName('caja').length;
        if (puntosRestantes === 0) {
            mostrarMensaje();
        }
    }

    function mostrarMensaje() {
        document.getElementById('mensaje').style.display = 'block';
        document.getElementById('mensaje').innerText = 'Has ganado, FELICIDADES!!!';
    }


    function movimientoFantasmasYPacman() {
        movimientoFantasmaRosaTotal(camino);
        movimientoFantasmaRojoTotal(camino);
        movimientoFantasmaNaranjaTotal(camino);
        movimientoFantasmaAzulTotal(camino);

        movimientosPacman();
        mostrarPacman();


    }
    setInterval(mostrarEscenario, velocidad);
    const M = setInterval(movimientoFantasmasYPacman, velocidad);



}





