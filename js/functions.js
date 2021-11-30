
/**
 * Limpia de espacios en blanco un cadena dada por el usuario
 * @param {String} texto Texto no formateado con todos los epsacios del mundo
 * @returns {String} Texto sin espacios en blanco al principio, por el medio y al final
 */
 const limpiarEspaciosEnBlanco = (texto) => {
    const leftPattern = /^\s+/;
    const rightPattern = /\s+$/;
    const middlePattern = /\s+/g; //flag para que lo aplique de forma global y no solo una vez
    texto = texto.replace(leftPattern, "");
    texto = texto.replace(rightPattern, "");
    texto = texto.replace(middlePattern, "");
    return texto;
}


/**
 * Genera un número aleatorio entre dos números
 * @param {Number} max  Número entero. El rango mayor de selección aleatorio
 * @param {Number} min Número entero. El rango menor de selección aleatorio
 * @returns {Number} El número aleatorio entre max y min
 */
 const generarAleatorio = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * @param {String} texto El mensaje a mostrar
 * @param {HTMLElement} padreElemento Nodo padre al que añadir el mensaje
 */
const msg = (texto, padreElemento) => {
    const el = document.querySelector("#msg-temporal-14");
    if(el !== null) {//El nodo existe
        //eliminarlo
        padreElemento.removeChild(el);
    }
    const strongEl = document.createElement("strong");
    strongEl.innerHTML = texto;
    strongEl.id = "msg-temporal-14";
    padreElemento.appendChild(strongEl);
}


export{limpiarEspaciosEnBlanco, generarAleatorio, msg}