var fantasmaNaranja = {
    posicion: '5:20',
    //posicionActual ,
    direccion: 'derecha'
}
var fantasmaRojo = {
    posicion: '2:13',
    //posicionActual ,
    direccion: 'izquierda'
}
var fantasmaAzul = {
    posicion: '5:10',
    //posicionActual ,
    direccion: 'derecha'
}
var fantasmaRosa = {
    posicion: '26:15',
    //posicionActual ,
    direccion: 'izquierda'
}

function movimientoFantasmaRosaTotal(caminos) {
    let pos = fantasmaRosa.posicion;
    let DX = parseInt(pos.split(':')[1]);
    let DY = parseInt(pos.split(':')[0]);
    let caminoEvaluarRosa;
    let color = 'rosa';
    switch (fantasmaRosa.direccion) {
        case 'derecha':
            DX = DX + 1;
            caminoEvaluarRosa = DY + ':' + DX;
            if (!movimiento(caminos, caminoEvaluarRosa, pos, color)) {
                break;
            }
            break;
        case 'izquierda':
            DX = DX - 1;
            caminoEvaluarRosa = DY + ':' + (DX);
            if (!movimiento(caminos, caminoEvaluarRosa, pos, color)) {
                break;
            }
            break;
        case 'arriba':
            DY = DY - 1;
            caminoEvaluarRosa = DY + ':' + (DX);
            if (!movimiento(caminos, caminoEvaluarRosa, pos, color)) {
                break;
            }
            break;
        case 'abajo':
            DY = DY + 1;
            caminoEvaluarRosa = DY + ':' + (DX);
            if (!movimiento(caminos, caminoEvaluarRosa, pos, color)) {
                break;
            }
            break;
        default:
            break;
    }
}

function movimientoFantasmaRojoTotal(caminos) {
    let pos = fantasmaRojo.posicion;
    let DX = parseInt(pos.split(':')[1]);
    let DY = parseInt(pos.split(':')[0]);
    let caminoEvaluarRojo;
    let color = 'rojo';
    switch (fantasmaRojo.direccion) {
        case 'derecha':
            DX = DX + 1;
            caminoEvaluarRojo = DY + ':' + DX;
            if (!movimiento(caminos, caminoEvaluarRojo, pos, color)) {
                break;
            }
            break;
        case 'izquierda':
            DX = DX - 1;
            caminoEvaluarRojo = DY + ':' + (DX);
            if (!movimiento(caminos, caminoEvaluarRojo, pos, color)) {
                break;
            }
            break;
        case 'arriba':
            DY = DY - 1;
            caminoEvaluarRojo = DY + ':' + (DX);
            if (!movimiento(caminos, caminoEvaluarRojo, pos, color)) {
                break;
            }
            break;
        case 'abajo':
            DY = DY + 1;
            caminoEvaluarRojo = DY + ':' + (DX);
            if (!movimiento(caminos, caminoEvaluarRojo, pos, color)) {
                break;
            }
            break;
        default:
            break;
    }

}

function movimientoFantasmaNaranjaTotal(caminos) {
    let pos = fantasmaNaranja.posicion;
    let DX = parseInt(pos.split(':')[1]);
    let DY = parseInt(pos.split(':')[0]);
    let caminoEvaluarNaranja;
    let color = 'naranja';
    switch (fantasmaNaranja.direccion) {
        case 'derecha':
            DX = DX + 1;
            caminoEvaluarNaranja = DY + ':' + DX;
            if (!movimiento(caminos,caminoEvaluarNaranja, pos, color)) {
                break;
            }
            break;
        case 'izquierda':
            DX = DX - 1;
            caminoEvaluarNaranja = DY + ':' + (DX);
            if (!movimiento(caminos,caminoEvaluarNaranja, pos, color)) {
                break;
            }
            break;
        case 'arriba':
            DY = DY - 1;
            caminoEvaluarNaranja = DY + ':' + (DX);
            if (!movimiento(caminos,caminoEvaluarNaranja, pos, color)) {
                break;
            }
            break;
        case 'abajo':
            DY = DY + 1;
            caminoEvaluarNaranja = DY + ':' + (DX);
            if (!movimiento(caminos,caminoEvaluarNaranja, pos, color)) {
                break;
            }
            break;
        default:
            break;
    }
}

function movimientoFantasmaAzulTotal(caminos) {
    let pos = fantasmaAzul.posicion;
    let DX = parseInt(pos.split(':')[1]);
    let DY = parseInt(pos.split(':')[0]);
    let caminoEvaluarAzul;
    let color = 'azul';
    switch (fantasmaAzul.direccion) {
        case 'derecha':
            DX = DX + 1;
            caminoEvaluarAzul = DY + ':' + DX;
            if (!movimiento(caminos,caminoEvaluarAzul, pos, color)) {
                break;
            }
            break;
        case 'izquierda':
            DX = DX - 1;
            caminoEvaluarAzul = DY + ':' + (DX);
            if (!movimiento(caminos,caminoEvaluarAzul, pos, color)) {
                break;
            }
            break;
        case 'arriba':
            DY = DY - 1;
            caminoEvaluarAzul = DY + ':' + (DX);
            if (!movimiento(caminos,caminoEvaluarAzul, pos, color)) {
                break;
            }
            break;
        case 'abajo':
            DY = DY + 1;
            caminoEvaluarAzul = DY + ':' + (DX);
            if (!movimiento(caminos,caminoEvaluarAzul, pos, color)) {
                break;
            }
            break;
    }
}

function movimiento(caminos, caminoEvaluar, pos, color) {
    if (evaluarMovimientoFantasma(caminoEvaluar)) {
        let clase;
        switch (color) {
            case 'rosa':
                fantasmaRosa.posicion = caminoEvaluar;
                clase = 'fantasmaRosa01';
                break;
            case 'rojo':
                fantasmaRojo.posicion = caminoEvaluar;
                clase = 'fantasmaRojo01';
                break;
            case 'azul':
                fantasmaAzul.posicion = caminoEvaluar;
                clase = 'fantasmaAzul01';
                break;
            case 'naranja':
                fantasmaNaranja.posicion = caminoEvaluar;
                clase = 'fantasmaNaranja01';
                break;
            default:
                break;

        }
        let classmovimiento = document.getElementById(caminoEvaluar).getAttribute('class');
         if (classmovimiento === 'comecocos'
            || classmovimiento === 'comecocosCerrado' || classmovimiento === 'comecocosDerecha' || classmovimiento === 'comecocosIzquierda'
            || classmovimiento === 'comecocosArriba' || classmovimiento === 'comecocosAbajo') {
            if (evaluarChoqueFantasmaConPacman(caminoEvaluar)) {
                document.getElementById('mensaje').style.display = 'block';
                document.getElementById('mensajeContenido').innerText = 'Perdiste el juego te atrapó el fantasma';
            }
        }
        if (caminos.includes(pos)) {
            document.getElementById(pos).setAttribute('class', 'caja');
        } else {
            document.getElementById(pos).setAttribute('class', 'cajaNegra');
        }
        document.getElementById(caminoEvaluar).classList.add(clase);
        if (!randomDireccionesTotal(caminoEvaluar)) {
            return false;
        } else {

            if (evaluarChoqueFantasmaConPacman(caminoEvaluar)) {
                document.getElementById('mensaje').style.display = 'block';
                document.getElementById('mensaje').innerText = 'Perdiste el juego te atrapó el fantasma';
            }
            switch (color) {
                case 'rosa':
                    fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluar);
                    break;
                case 'rojo':
                    fantasmaRojo.direccion = randomDireccionesTotal(caminoEvaluar);
                    break;
                case 'azul':
                    fantasmaAzul.direccion = randomDireccionesTotal(caminoEvaluar);
                    break;
                case 'naranja':
                    fantasmaNaranja.direccion = randomDireccionesTotal(caminoEvaluar);
                    break;
            }
        }
    }
}

// 02
function randomDireccionesTotal(posic) {
    let num = 0;
    if (nodoDIAA.includes(posic)) {
        num = Math.round(Math.random() * 10);
        //console.log('numero random: ' + num)
        //if (num % 2 == 0) {
        let num01 = Math.round(Math.random() * 3) + 1;
        //console.log('numero01 random: ' + num01)
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
        return 'derecha';
    }
    if (posic == izq) {
        return 'izquierda';
    }
    return false;
}

function randomDireccionesTotal01(posic) {
    let num;
    if (nodoDIAA.includes(posic)) {
        num = Math.round(Math.random() * 10);
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
        return 'derecha';
    }
    if (posic == izq) {
        return 'izquierda';
    }
    return false;
}

function evaluarMovimientoFantasma(posi) {
    if (recorridoValido.includes(posi)) {
        return true;
    }
    return false
}

function evaluarChoqueFantasmaConPacman(posi) {
    let clas = document.getElementById(posi).getAttribute('class');
    if (clas != 'comecocosDerecha' && clas != 'comecocosIzquierda' && clas != 'comecocosArriba' &&
        clas != 'comecocosAbajo') {
        return false;
    }
    return true;


}

// Array que contiene las posiciones del mapa que contendrán un punto 
let recorridoValido = [
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

// Nodos cambio de dirección
let nodoDIAA = ["5:7", "5:22", "14:7", "14:22", "23:7", "23:22"];
let nodoDAb = ["2:2", "2:16", "8:16", "11:10", "20:2", "20:10", "14:19"];
let nodoDAr = ["8:2", "8:10", "26:2", "17:10", "20:16"];

let nodoIAb = ["2:27", "2:13", "8:13", "11:19", "20:19", "20:27", "8:13"];
let nodoIAr = ["8:27", "17:19", "8:19", "20:13", "8:19", "26:27"];

let nodoDIAb = ["2:7", "2:22", "5:19", "5:10", "17:13", "17:16", "2:7", "23:13", "23:16"];
let nodoDIAr = ["26:22", "26:16", "26:13", "26:7", "23:10", "23:19", "11:13", "11:16", "5:16"];

let nodoAAD = ["5:2", "23:2", "8:22", "20:22", "14:19"];
let nodoAAI = ["5:27", "23:27", "14:10", "8:7", "20:7"];
let der = '14:1';
let izq = '14:28';

