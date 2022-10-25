var fantasmaNaranja = {
    posicion: '5:20',
    direccion: 'izquierda'
}
var fantasmaRojo = {
    posicion: '14:19',
    direccion: 'derecha'
}
var fantasmaAzul = {
    posicion: '2:7',
    direccion: 'derecha'
}
var fantasmaRosa = {
    posicion: '5:11',
    direccion: 'izquierda'
}
function movimientoFantasmaRosaTotal() {
    let pos = fantasmaRosa.posicion;
    let DX = parseInt(pos.split(':')[1]);
    let DY = parseInt(pos.split(':')[0]);
    let caminoEvaluarRosa;
    switch (fantasmaRosa.direccion) {
        case 'derecha':
            DX = DX + 1;
            caminoEvaluarRosa = DY + ':' + DX;
            if (evaluarMovimientoFantasma(caminoEvaluarRosa)) {
                fantasmaRosa.posicion = caminoEvaluarRosa;
                if (document.getElementById(caminoEvaluarRosa).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                document.getElementById(caminoEvaluarRosa).setAttribute('class', 'fantasmaRosa01');
                if (randomDireccionesTotal(caminoEvaluarRosa) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarRosa)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego te comio el fanstasma';
                        setTimeout(M);
                    } else {
                        fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluarRosa);
                    }
                }
            }
            break;
        case 'izquierda':
            DX = DX - 1;
            caminoEvaluarRosa = DY + ':' + (DX);
            if (evaluarMovimientoFantasma(caminoEvaluarRosa)) {
                fantasmaRosa.posicion = caminoEvaluarRosa;
                if (document.getElementById(caminoEvaluarRosa).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                //document.getElementById(pos).setAttribute('class', 'caja');
                document.getElementById(caminoEvaluarRosa).setAttribute('class', 'fantasmaRosa01');
                //randomDireccionesTotal(caminoEvaluarRosa);
                if (randomDireccionesTotal(caminoEvaluarRosa) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarRosa)) {
                        //console.log('hemos tenido un choque');
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego';
                    }
                    fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluarRosa);
                }
            }
            break;
        case 'arriba':
            DY = DY - 1;
            caminoEvaluarRosa = DY + ':' + (DX);
            if (evaluarMovimientoFantasma(caminoEvaluarRosa)) {
                fantasmaRosa.posicion = caminoEvaluarRosa;
                if (document.getElementById(caminoEvaluarRosa).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                //document.getElementById(pos).setAttribute('class', 'caja');
                document.getElementById(caminoEvaluarRosa).setAttribute('class', 'fantasmaRosa01');
                //randomDireccionesTotal(caminoEvaluarRosa);
                if (randomDireccionesTotal(caminoEvaluarRosa) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarRosa)) {
                        console.log('hemos tenido un choque');
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego';
                    }
                    fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluarRosa);
                }
            }
            break;
        case 'abajo':
            DY = DY + 1;
            caminoEvaluarRosa = DY + ':' + (DX);
            if (evaluarMovimientoFantasma(caminoEvaluarRosa)) {
                fantasmaRosa.posicion = caminoEvaluarRosa;
                if (document.getElementById(caminoEvaluarRosa).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                //document.getElementById(pos).setAttribute('class', 'caja');
                document.getElementById(caminoEvaluarRosa).setAttribute('class', 'fantasmaRosa01');
                //randomDireccionesTotal(caminoEvaluarRosa);
                if (randomDireccionesTotal(caminoEvaluarRosa) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarRosa)) {
                        //console.log('hemos tenido un choque');
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego';
                    }
                    fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluarRosa);
                }
            }
            break;
    }

}
function movimientoFantasmaRojoTotal() {
    let pos = fantasmaRojo.posicion;
    let DX = parseInt(pos.split(':')[1]);
    let DY = parseInt(pos.split(':')[0]);
    let caminoEvaluarRojo;
    switch (fantasmaRojo.direccion) {
        case 'derecha':
            DX = DX + 1;
            caminoEvaluarRojo = DY + ':' + DX;
            if (evaluarMovimientoFantasma(caminoEvaluarRojo)) {
                //console.log('posicion al entrar: ' + fantasmaRojo.posicion);
                fantasmaRojo.posicion = caminoEvaluarRojo;
                if (document.getElementById(caminoEvaluarRojo).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                //document.getElementById(pos).setAttribute('class', 'caja');
                document.getElementById(caminoEvaluarRojo).setAttribute('class', 'fantasmaRojo01');
                //randomDireccionesTotal(caminoEvaluarRosa);
                if (randomDireccionesTotal(caminoEvaluarRojo) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarRojo)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego te comio el fanstasma';
                        setTimeout(M);
                    } else {
                        fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluarRojo);
                    }
                }
            }
            break;
        case 'izquierda':
            DX = DX - 1;
            caminoEvaluarRojo = DY + ':' + (DX);
            if (evaluarMovimientoFantasma(caminoEvaluarRojo)) {
                fantasmaRojo.posicion = caminoEvaluarRojo;
                if (document.getElementById(caminoEvaluarRojo).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                //document.getElementById(pos).setAttribute('class', 'caja');
                document.getElementById(caminoEvaluarRojo).setAttribute('class', 'fantasmaRojo01');
                //randomDireccionesTotal(caminoEvaluarRosa);
                if (randomDireccionesTotal(caminoEvaluarRojo) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarRojo)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego te comio el fanstasma';
                        setTimeout(M);
                    } else {
                        fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluarRojo);
                    }
                }
            }
            break;
        case 'arriba':
            DY = DY - 1;
            caminoEvaluarRojo = DY + ':' + (DX);
            if (evaluarMovimientoFantasma(caminoEvaluarRojo)) {
                fantasmaRojo.posicion = caminoEvaluarRojo;
                if (document.getElementById(caminoEvaluarRojo).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                //document.getElementById(pos).setAttribute('class', 'caja');
                document.getElementById(caminoEvaluarRojo).setAttribute('class', 'fantasmaRojo01');
                //randomDireccionesTotal(caminoEvaluarRosa);
                if (randomDireccionesTotal(caminoEvaluarRojo) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarRojo)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego te comio el fanstasma';
                        setTimeout(M);
                    } else {
                        fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluarRojo);
                    }
                }
            }
            break;
        case 'abajo':
            DY = DY + 1;
            caminoEvaluarRojo = DY + ':' + (DX);
            if (evaluarMovimientoFantasma(caminoEvaluarRojo)) {
                fantasmaRojo.posicion = caminoEvaluarRojo;
                if (document.getElementById(caminoEvaluarRojo).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                document.getElementById(caminoEvaluarRojo).setAttribute('class', 'fantasmaRojo01');
                if (randomDireccionesTotal(caminoEvaluarRojo) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarRojo)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego te comio el fanstasma';
                        setTimeout(M);
                    } else {
                        fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluarRojo);
                    }
                }
            }
            break;
    }

}
function movimientoFantasmaNaranjaTotal() {
    let pos = fantasmaNaranja.posicion;
    let DX = parseInt(pos.split(':')[1]);
    let DY = parseInt(pos.split(':')[0]);
    let caminoEvaluarNaranja;
    switch (fantasmaNaranja.direccion) {
        case 'derecha':
            DX = DX + 1;
            caminoEvaluarNaranja = DY + ':' + DX;
            if (evaluarMovimientoFantasma(caminoEvaluarNaranja)) {
                fantasmaNaranja.posicion = caminoEvaluarNaranja;
                if (document.getElementById(caminoEvaluarNaranja).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                document.getElementById(caminoEvaluarNaranja).setAttribute('class', 'fantasmaNaranja01');
                if (randomDireccionesTotal(caminoEvaluarNaranja) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarNaranja)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego te comio el fanstasma';
                        setTimeout(M);
                    } else {
                        fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluarNaranja);
                    }
                }
            }
            break;
        case 'izquierda':
            DX = DX - 1;
            caminoEvaluarNaranja = DY + ':' + (DX);
            if (evaluarMovimientoFantasma(caminoEvaluarNaranja)) {
                fantasmaNaranja.posicion = caminoEvaluarNaranja;
                if (document.getElementById(caminoEvaluarNaranja).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                document.getElementById(caminoEvaluarNaranja).setAttribute('class', 'fantasmaNaranja01');
                if (randomDireccionesTotal(caminoEvaluarNaranja) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarNaranja)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego te comio el fanstasma';
                        setTimeout(M);
                    } else {
                        fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluarNaranja);
                    }
                }
            }
            break;
        case 'arriba':
            DY = DY - 1;
            caminoEvaluarNaranja = DY + ':' + (DX);
            if (evaluarMovimientoFantasma(caminoEvaluarNaranja)) {
                fantasmaNaranja.posicion = caminoEvaluarNaranja;
                if (document.getElementById(caminoEvaluarNaranja).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                document.getElementById(caminoEvaluarNaranja).setAttribute('class', 'fantasmaNaranja01');
                if (randomDireccionesTotal(caminoEvaluarNaranja) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarNaranja)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego te comio el fanstasma';
                        setTimeout(M);
                    } else {
                        fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluarNaranja);
                    }                }
            }
            break;
        case 'abajo':
            DY = DY + 1;
            caminoEvaluarNaranja = DY + ':' + (DX);
            if (evaluarMovimientoFantasma(caminoEvaluarNaranja)) {
                fantasmaNaranja.posicion = caminoEvaluarNaranja;
                if (document.getElementById(caminoEvaluarNaranja).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                document.getElementById(caminoEvaluarNaranja).setAttribute('class', 'fantasmaNaranja01');
                if (randomDireccionesTotal(caminoEvaluarNaranja) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarNaranja)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego te comio el fanstasma';
                        setTimeout(M);
                    } else {
                        fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluarNaranja);
                    }
                }
            }
            break;
    }

}
function movimientoFantasmaAzulTotal() {
    let pos = fantasmaAzul.posicion;
    let DX = parseInt(pos.split(':')[1]);
    let DY = parseInt(pos.split(':')[0]);
    let caminoEvaluarAzul;
    switch (fantasmaAzul.direccion) {
        case 'derecha':
            DX = DX + 1;
            caminoEvaluarAzul = DY + ':' + DX;
            if (evaluarMovimientoFantasma(caminoEvaluarAzul)) {
                fantasmaAzul.posicion = caminoEvaluarAzul;
                if (document.getElementById(caminoEvaluarAzul).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                document.getElementById(caminoEvaluarAzul).setAttribute('class', 'fantasmaAzul01');
                if (randomDireccionesTotal(caminoEvaluarAzul)) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarAzul)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego te comio el fanstasma';
                        setTimeout(M);
                    } else {
                        fantasmaAzul.direccion = randomDireccionesTotal(caminoEvaluarAzul);
                    }
                }
            }
            break;
        case 'izquierda':
            DX = DX - 1;
            caminoEvaluarAzul = DY + ':' + (DX);
            if (evaluarMovimientoFantasma(caminoEvaluarAzul)) {
                fantasmaAzul.posicion = caminoEvaluarAzul;
                if (document.getElementById(caminoEvaluarAzul).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                //document.getElementById(pos).setAttribute('class', 'caja');
                document.getElementById(caminoEvaluarAzul).setAttribute('class', 'fantasmaAzul01');
                //randomDireccionesTotal(caminoEvaluarRosa);
                if (randomDireccionesTotal(caminoEvaluarAzul) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarAzul)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego te comio el fanstasma';
                        setTimeout(M);
                    } else {
                        fantasmaAzul.direccion = randomDireccionesTotal(caminoEvaluarAzul);
                    }
                }
            } else {

            }
            break;
        case 'arriba':
            DY = DY - 1;
            caminoEvaluarAzul = DY + ':' + (DX);
            if (evaluarMovimientoFantasma(caminoEvaluarAzul)) {
                fantasmaAzul.posicion = caminoEvaluarAzul;
                if (document.getElementById(caminoEvaluarAzul).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                //document.getElementById(pos).setAttribute('class', 'caja');
                document.getElementById(caminoEvaluarAzul).setAttribute('class', 'fantasmaAzul01');
                //randomDireccionesTotal(caminoEvaluarRosa);
                if (randomDireccionesTotal(caminoEvaluarAzul) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarAzul)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego te comio el fanstasma';
                        setTimeout(M);
                    } else {
                        fantasmaAzul.direccion = randomDireccionesTotal(caminoEvaluarAzul);
                    }
                }
            } else {

            }
            break;
        case 'abajo':
            DY = DY + 1;
            caminoEvaluarAzul = DY + ':' + (DX);
            if (evaluarMovimientoFantasma(caminoEvaluarAzul)) {
                fantasmaAzul.posicion = caminoEvaluarAzul;
                if (document.getElementById(caminoEvaluarAzul).getAttribute('class') === 'caja') {
                    document.getElementById(pos).setAttribute('class', 'caja');
                } else {
                    document.getElementById(pos).setAttribute('class', 'cajaNegra');
                }
                //document.getElementById(pos).setAttribute('class', 'caja');
                document.getElementById(caminoEvaluarAzul).setAttribute('class', 'fantasmaAzul01');
                //randomDireccionesTotal(caminoEvaluarRosa);
                if (randomDireccionesTotal(caminoEvaluarAzul) == false) {
                    break;
                } else {
                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarAzul)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego te comio el fanstasma';
                        setTimeout(M);
                    } else {
                        fantasmaAzul.direccion = randomDireccionesTotal(caminoEvaluarAzul);
                    }
                }
            } else {

            }
            break;
    }

}
// nodos cambio de dirección
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

/*
Función que cada vez que el fantasma llega a un cruce del mapa decide de manera aleatoria 
el camino que tomará
*/

// 01
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

/*
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
    */



/*
function movimientoFantasmaRojoTotal() {
let pos = fantasmaRojo.posicion;
let DX = parseInt(pos.split(':')[1]);
let DY = parseInt(pos.split(':')[0]);
let caminoEvaluarRosa;
switch (fantasmaRojo.direccion) {
case 'derecha':
    DX = DX + 1;
    caminoEvaluarRosa = DY + ':' + DX;
    if (evaluarMovimientoFantasma(caminoEvaluarRosa)) {
        console.log('posicion al entrar: ' + fantasmaRojo.posicion);
        fantasmaRojo.posicion = caminoEvaluarRosa;
        document.getElementById(pos).setAttribute('class', 'caja');
        document.getElementById(caminoEvaluarRosa).setAttribute('class', 'fantasmaRojo01');
        //randomDireccionesTotal(caminoEvaluarRosa);
        if (randomDireccionesTotal(caminoEvaluarRosa) == false) {
            break;
        } else {
            fantasmaRojo.direccion = randomDireccionesTotal(caminoEvaluarRosa);
        }
    }
    break;
case 'izquierda':
    DX = DX - 1;
    caminoEvaluarRosa = DY + ':' + (DX);
    if (evaluarMovimientoFantasma(caminoEvaluarRosa)) {
        fantasmaRojo.posicion = caminoEvaluarRosa;
        document.getElementById(pos).setAttribute('class', 'caja');
        document.getElementById(caminoEvaluarRosa).setAttribute('class', 'fantasmaRojo01');
        //randomDireccionesTotal(caminoEvaluarRosa);
        if (randomDireccionesTotal(caminoEvaluarRosa) == false) {
            break;
        } else {
            fantasmaRojo.direccion = randomDireccionesTotal(caminoEvaluarRosa);
        }
    }
    break;
case 'arriba':
    DY = DY - 1;
    caminoEvaluarRosa = DY + ':' + (DX);
    if (evaluarMovimientoFantasma(caminoEvaluarRosa)) {
        fantasmaRojo.posicion = caminoEvaluarRosa;
        document.getElementById(pos).setAttribute('class', 'caja');
        document.getElementById(caminoEvaluarRosa).setAttribute('class', 'fantasmaRojo01');
        //randomDireccionesTotal(caminoEvaluarRosa);
        if (randomDireccionesTotal(caminoEvaluarRosa) == false) {
            break;
        } else {
            fantasmaRojo.direccion = randomDireccionesTotal(caminoEvaluarRosa);
        }
    }
    break;
case 'abajo':
    DY = DY + 1;
    caminoEvaluarRosa = DY + ':' + (DX);
    if (evaluarMovimientoFantasma(caminoEvaluarRosa)) {
        fantasmaRojo.posicion = caminoEvaluarRosa;
        document.getElementById(pos).setAttribute('class', 'caja');
        document.getElementById(caminoEvaluarRosa).setAttribute('class', 'fantasmaRojo01');
        //randomDireccionesTotal(caminoEvaluarRosa);
        if (randomDireccionesTotal(caminoEvaluarRosa) == false) {
            break;
        } else {
            fantasmaRojo.direccion = randomDireccionesTotal(caminoEvaluarRosa);
        }
    }
    break;
}
/*
    if (document.getElementById(caminoEvaluarRosa).getAttribute('class') == 'fantasmaRojo01') {
        document.getElementById(caminoEvaluarRosa).setAttribute('class', 'fantasmaRojo02');
    } else {
        document.getElementById(caminoEvaluarRosa).setAttribute('class', 'fantasmaRojo01');
    }
*/

