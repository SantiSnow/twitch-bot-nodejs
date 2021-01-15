const tmi = require('tmi.js');
const opciones = require('./options');

const cliente = new tmi.client(opciones.opciones);

cliente.connect();

//eventos
cliente.on('connected', (address, port)=>{
    cliente.action('iamacat95',
        `¡Hola, soy el Santi-bot y estoy listo para trabajar!`)
});

cliente.on('chat', (target, ctx, message, self)=>{
    if(self) return

    cliente.say(target, `Bienvenido al chat ${ctx.username}`);
});