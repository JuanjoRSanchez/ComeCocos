function derecha(nuevaPosicion){
    if (evaluarMovimientoFantasma(nuevaPosicion)) {
        fantasmaRosa.posicion = nuevaPosicion;
        let classmovimiento = document.getElementById(nuevaPosicion).getAttribute('class');
        if (classmovimiento === 'caja' ) {
            document.getElementById(pos).setAttribute('class', 'caja');
        } 
        else if (  classmovimiento === 'fantasmaRosa01' || classmovimiento === 'fantasmaRojo01'
        || classmovimiento === 'fantasmaAzul01' || classmovimiento === 'fantasmaNaranja01')
        {

        }
        else {
            document.getElementById(pos).setAttribute('class', 'cajaNegra');
        }
        document.getElementById(caminoEvaluarRosa).setAttribute('class', 'fantasmaRosa01');
        
        if (randomDireccionesTotal(nuevaPosicion) == true) {
            if (evaluarChoqueFantasmaConPacman(nuevaPosicion)) {
                document.getElementById('mensaje').style.display = 'block';
                document.getElementById('mensaje').innerText = 'Perdiste el juego';
            }

            fantasmaRosa.direccion = randomDireccionesTotal(nuevaPosicion);
        }
    }

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
            //let posicionactualRosa = fantasmaRosa.posicion;
            derecha(caminoEvaluarRosa);
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
                document.getElementById(caminoEvaluarRosa).setAttribute('class', 'fantasmaRosa01');
                
                if (randomDireccionesTotal(caminoEvaluarRosa) == false) {
                    break;
                } else {

                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarRosa)) {
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
                document.getElementById(caminoEvaluarRosa).setAttribute('class', 'fantasmaRosa01');
                
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
                document.getElementById(caminoEvaluarRosa).setAttribute('class', 'fantasmaRosa01');

                if (randomDireccionesTotal(caminoEvaluarRosa) == false) {
                    break;
                } else {

                    if (evaluarChoqueFantasmaConPacman(caminoEvaluarRosa)) {
                        document.getElementById('mensaje').style.display = 'block';
                        document.getElementById('mensaje').innerText = 'Perdiste el juego';
                    }

                    fantasmaRosa.direccion = randomDireccionesTotal(caminoEvaluarRosa);
                }
            }
            break;
    }

}