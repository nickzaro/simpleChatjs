// desplegando en el mismo dominio
const socket = io();

// elementos del DOM
let message = document.getElementById('message');
let username=document.getElementById('username');
let send = document.getElementById('send');
let output =document.getElementById('output');
let actions = document.getElementById('actions');

//agregando el evento para el boton
send.addEventListener('click',()=>{
    console.log('que paso');
    socket.emit('chat-message',
    {
        'username':username.value,
        'message':message.value
    })
})