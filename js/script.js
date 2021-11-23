"use strict";

// Nodos
const btnGenerar = document.querySelector("#b_generar");
const msgGenerar = document.querySelector("#msg_generar");
const btnAdivinar = document.querySelector("#b_aleatorio");
const entrada = document.querySelector("#aleatorio");
const msgAleatorio = document.querySelector("#msg_aleatorio");
const pre = document.querySelector("#serie_aleatorio");

// Variables 
// esto genera un numero aleatorio al cargar la página
let resultadoAl = null;
let tirada = 1;
let tiradas = [];
let ganaste;

// Funciones
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
 * 
 * @param {String} texto 
 * @returns {String}
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

btnGenerar.onclick = () => {
    let resultadoAl = generarAleatorio(10, 0);
    msgGenerar.innerHTML = `<strong>${resultadoAl}</strong>`;
};

btnAdivinar.onclick = () => {
    tiradas.push(entrada.value);
    msgAleatorio.innerHTML = `Tirada ${tirada} de 10. Tiradas: [${tiradas.join()}]`;
    tirada++;
    if (resultadoAl === null) {
        resultadoAl = generarAleatorio(100, 0);
    }

    // desabilitar el boton a los 10 intentos
    
    
    if (entrada.Number === resultadoAl) {
        pre.innerHTML = "Es el numero!!!";
        ganaste = true;
    } else if (entrada.value < resultadoAl) {
        pre.innerHTML = `El numero es mas grande a ${entrada.value}`;
    } else if (entrada.value > resultadoAl) {
        pre.innerHTML = `El numero es mas pequeño a ${entrada.value}`;
    } else {
        pre.innerHTML = `No es un número`
    }
    console.log(resultadoAl)
    console.log(entrada.value)

    if (ganaste === true || tirada === 11) {
        btnAdivinar.disabled = true;
        // setTimeout
    }
}


// Eventos

