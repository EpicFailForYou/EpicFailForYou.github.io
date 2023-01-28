const socket = io('http://44.203.44.104:3000/');
//const socket = require('socket.io-client')('http://localhost:3000');
socket.on('connect', () => {
    console.log(`You connected with id: ${socket.id}`);
    socket.emit('sendMessage', "THIS IS MY ANSWER")
})


//User typed in a room code and attemped to join it
function joinRoom() {
    const elem = document.getElementById('roomCode').innerText;
    socket.emit("requestToJoin", elem, message => {
        console.log(message);
    })
}

//Let player know that they cannot join that room
function roomJoinFailed() {

}

//User submitted an answer to be sent to the server
function submitSimpleAnswer() {

}