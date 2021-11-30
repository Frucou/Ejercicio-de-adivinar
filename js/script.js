"use strict";


import { generarAleatorio, limpiarEspaciosEnBlanco, msg } from "./functions.js";

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


/** 
 * Definir una función que muestre información sobre una cadena de texto
 * que se le pasa como argumento. A partir de la cadena que se le pasa, 
 * la función determina si esa cadena está formada sólo por mayúsculas, 
 * sólo por minúsculas o por una mezcla de ambas.
 * 
 * @param {object} e El evento Ej: click, mouseover, dbclick
 */
document.querySelector("#enlace_1").onclick = e => {
    e.preventDefault();
    // const padreElement = e.target.parentElement; // devuelve el padre de un elemento

    /**
     * Función que compara dos caracteres para determinar si está en 
     * mayúscula
     * @param {String} letra Una letra no más
     * @returns {Boolean} True si es mayúscula y false para todo lo demás
     */
    const esMayuscula = (letra) => {
        return letra === letra.toUpperCase();
    }

    const esMinuscula = (letra) => {
        return letra === letra.toLowerCase();
    }

    let mayuscula = false;
    let minuscula = false;
    const texto = prompt("Dame un texto", "Texto");
    // Expresión regular que busca texto alfabetico
    const expReg_abc = /[a-zA-ZÀ-ÿ\u00f1\u00d1çÇ]+/g;
    // Quiero buscar las coincidencias de una cadena. Eje: Xurxo32 --> Xurxo
    let textoAbc = texto.match(expReg_abc);
    textoAbc = textoAbc.join("");
    console.log(textoAbc);
    // Voy a recorrer el texto
    for (let i = 0; i < textoAbc.length; i++) {
        if (esMayuscula(textoAbc[i])) {
            mayuscula = true;
            // break;
        } else { // Es minúscula
            minuscula = true;
        }
    }

    if (mayuscula && minuscula) {
        msg(
            `<br>En la cadena "${texto}" hay mayúsculas y minúsculas.</br>`,
            e.target.parentElement
        );
    } else if (mayuscula) {
        msg(`<br> En la cadena "${texto}" hay mayúsculas.</br>`, e.target.parentElement)
    } else {
        msg(`<br>En la cadena "${texto}" hay minúsculas.</br>`, e.target.parentElement)
    }


}



/**
 * Definir una función que determine si la cadena de texto que se le pasa 
 * como parámetro es un palíndromo, es decir, si se lee de la misma forma
 *  desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo:
 *  "La ruta nos aporto otro paso natural".
 * 
 * @param {object} e El evento Ej: click, mouseover, dbclick
 */
document.querySelector("#enlace_2").onclick = e => {
    e.preventDefault();

    const texto = prompt("Dame una cadena de texto",
        "La ruta nos aporto otro paso natural");

    /**
     * 
     * @param {String} string Cadena de texto para comprobar si es palíndromo
     * 
     */
    const nuevoStr = texto.replace(/[\W_]/g, "").toLowerCase();
    const strVuelta = nuevoStr.split("").reverse().join("");


    // return strVuelta === str ? "es palindromo" : "no es palindromo"
    // console.log(nuevoStr);
    // console.log(strVuelta);


    if (nuevoStr === strVuelta) {
        msg(
            `<br>"${texto}". Es palíndromo</br>`, e.target.parentElement
        );
    } else {
        msg(
            `<br>"${texto}". No es palíndromo</br>`, e.target.parentElement
        );
    }

}


/**
 * Definir el siguiente objeto en JavaScript:
Objeto Persona con las propiedades nombre, edad y género, y el método 
obtDetalles(), que muestra por pantalla las propiedades de la persona.
Crear los objetos y casos de prueba necesarios para comprobar su correcto
 funcionamiento.
 */

import {Persona} from "./Persona.js";

document.querySelector("#enlace_3").onclick = e => {
    e.preventDefault();


    // console.log(typeof Persona); //Devuelve function porque es plantilla
    const p1 = new Persona("Fabián", "Ruiz", "28 años", "Masculino"); // Instanciamos plantilla
    const p2 = new Persona("Xurxo", "González");
    const p3 =  new Persona();

    // msg(`<br>${p1.getDatosCompleto()}</br>`, e.target.parentElement);
    // console.log(p2.getNombreCompleto());
    // console.log(p3.getNombreCompleto());
    p3.setDatos(prompt("Nombres"),prompt("Apellidos"),prompt("Generos"),prompt("Edad"));
    msg(`<br>${p3.getDatosCompleto()}</br>`, e.target.parentElement);

    // const personas = [
    //     {
    //         // Cargamos las propiedades
    //         nombre: "Fabian",
    //         apellidos: "Ruiz",
    //         edad: "28 años",
    //         género: "Masculino",
    //         intereses: ["Programación", "Videojuegos"],
    //         dimeIntereses: function () {
    //             return `Mis intereses son ${this.intereses.join(", ")}`;
    //         }
    //     },
    //     {
    //         // Cargamos las propiedades
    //         nombre: "David",
    //         apellidos: "González",
    //         edad: "38 años",
    //         género: "Masculino",
    //         intereses: ["Electricidad", "Videojuegos"],
    //         dimeIntereses: function () {
    //             return `Mis intereses son ${this.intereses.join(", ")}`;
    //         }
    //     }
    // ]


    // // persona.apellidos = "Ruiz Couselo";
    // // persona.intereses.push("Animales");

    // // console.log(`Me llamo ${persona.nombre} ${persona.apellidos} y ${persona.dimeIntereses().toLocaleLowerCase()}`);
    // // console.log(personas);

    // personas[1].apellidos = "Gaucho"

    // personas.forEach(
    //     (persona) => {
    //         console.log(`Me llamo ${persona.nombre} ${persona.apellidos} y ${persona.dimeIntereses().toLocaleLowerCase()}`);
    //     }
    // );

}



// Eventos

