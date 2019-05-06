// desplegando en el mismo dominio
const socket = io();

// elementos del DOM
let message = document.getElementById('message');
let username = document.getElementById('username');
let send = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

//agregando el evento para el boton
send.addEventListener('click', () => {
    socket.emit('chat-message', {
        'username': username.value,
        'message': message.value
    })
});

socket.on('chat-message', (data) => {
    actions.innerHTML='';
    output.innerHTML += `<p>
    <strong> ${data.username}
    </strong>: ${data.message} </p> `
});

message.addEventListener('keypress',()=>{
    socket.emit('typing-message',username.value);
});

socket.on('typing-message',(name)=>{
    actions.innerHTML = `<p>
    <em> ${name} typing...
    </em> </p> `
})