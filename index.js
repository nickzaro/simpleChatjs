const express = require('express');
const app = express();
const path = require('path');

const socketIO = require('socket.io');

// settings-[por si viene setteado de otro lugar, sino 7777]
app.set('port', process.env.PORT|| 7777);

//static files
app.use(express.static(path.join(__dirname,'/public/')));

//start the server
const server = app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
})

// io contiene al socket listo
const io = socketIO.listen(server);

//hilo y socket para atender clientes
io.on('connection',(socket)=>{
    console.log('new connection: ', socket.id);
    socket.on('chat-message',(data)=>{
        console.log(data);
        
    })

})