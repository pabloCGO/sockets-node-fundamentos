var socket = io();

socket.on('connect', function() {
    console.log(`Conectado al servidor`)
});

// escuchar
socket.on('disconnect', function() {
    console.log(`perdimos la conexion con el servidor`)
})

// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Pablo',
    mensaje: 'Hola que hace'
}, function(resp) {
    console.log('respuesta server: ', resp)
})

//Escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})