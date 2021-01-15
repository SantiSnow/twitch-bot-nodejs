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

    if(message.trim() === "hola"){
        cliente.say(target, `Bienvenido al chat ${ctx.username}`);
    }

    if(message.trim() === "!hola"){
        cliente.say(target, `El bot esta feliz de que alguien lo haya saludado :3`);
    }

    if(message.trim() === "!dice"){
        num = arrojarDado();
        cliente.say(target, `Tiraste un dado y salió ${num}`);
    }

    if(message.trim() === "!dado"){
        num = arrojarDado();
        cliente.say(target, `Tiraste un dado y salió ${num}`);
    }
    
    if(message.trim() === "!game"){
        cliente.say(target, `Ahora mismo estoy jugando...`);
    }


});


function arrojarDado(){
    return Math.round(Math.random()*6) + 1;
}