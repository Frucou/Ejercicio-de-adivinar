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
// let guardarEntrada;

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

    let datos = limpiarEspaciosEnBlanco(entrada.value);
    // console.log(datos);
    const numeroPattern = /^\d+$/;

    // console.log(tiradas.value);
    // resultadoAl = Number(resultadoAl);
    // guardarEntrada = Number(entrada);
    // console.log(guardarEntrada);
    // console.log(resultadoAl);
    // console.log(typeof(guardarEntrada));
    // console.log(Number.isNaN(guardarEntrada));

    //  desabilitar el boton a los 10 intentos
    if (numeroPattern.test(datos)) {

        // console.log(datos);
        datos = Number(datos);
        // console.log(datos);

        if (datos === resultadoAl) {
            pre.innerHTML = "Es el numero!!!";
            ganaste = true;
        } else if (datos < resultadoAl) {
            pre.innerHTML = `El numero es mas grande a ${datos}`;
        } else {
            pre.innerHTML = `El numero es mas pequeño a ${datos}`;
        }
    } else {
        pre.innerHTML = `No es un número`
    }
    console.log(resultadoAl)
    // console.log(Number(entrada))

    if (ganaste === true || tirada === 11) {
        btnAdivinar.disabled = true;
        // setTimeout
    }
}


// Eventos

