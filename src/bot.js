const tmi = require('tmi.js');
const opciones = require('./options');

const cliente = new tmi.client(opciones.opciones);

cliente.connect();

cliente.on('connected', (address, port)=>{
    cliente.action('iamacat95',
        `¡Hola, soy el Santi-bot y estoy listo para trabajar!`)
});