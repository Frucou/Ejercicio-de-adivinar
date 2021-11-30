/**
 * La clase --> plantilla --> abstracto
 */
 export class Persona {//Las clases por convención primera en mayúscula
    /**
     * Método constructor de la clase persona
     * @param {String} nombre El nombre de una persona
     * @param {String} apellido Los apellidos de otro persona
     */
    constructor (nombre = "Sin nombre", apellido = "", edad = "", genero = "") {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._genero = genero;
    }

    getDatosCompleto () {
        return `${this._nombre} ${this._apellido} ${this._edad} ${this._genero}`
    }

    /**
     * Getter que retorna nombre completo
     * @returns {String} Nombre completo de una persona
     */
    getNombreCompleto () {
        return `${this._nombre} ${this._apellido}`;
    }

    /**
     * Getter que devuelve el nombre de una persona
     * @returns {String} nombre
     */
    getNombre(){
        return this._nombre;
    }

/**
 * Setter que modifica el nombre de una persona
 * @param {String} nombre 
 */
    setNombre (nombre) {
        this._nombre = nombre
    }

    setDatos (nombre, apellido="", edad="", genero=""){
        this._nombre = nombre;
        this._apellido = apellido;
        this._genero = genero;
        this._edad = edad;
    }

}