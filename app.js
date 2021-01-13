const express = require('express');
const app = express();
const socket =  require('socket.io');


app.set('view engine', 'ejs');

app.use(express.static('public'))

//routes

app.use(require('./routes/index'))
app.use(require('./routes/albums'))
app.use(require('./routes/forum'))
app.use(require('./routes/chat'))

//server

let server = app.listen(3000, () => {
    console.log('server running so fresh and so clean (clean) on port Andre 3000')
}
    )


let io = socket(server);

io.on('connection', (socket) => {
        socket.emit('chatMessage', {msg: "Welcome to the chat!"});
        socket.on('msgFromClient', (msgClient) => {
            console.log(msgClient);
        })
    })