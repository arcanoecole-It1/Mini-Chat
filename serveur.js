var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(requete,reponse) {
    reponse.sendFile(__dirname + '/index.html');
})
io.on('connection', function(socket) {
    console.log('Un client est connecté');
    socket.on('disconnect', function() {
        console.log('Un client est déconnecté');
    })
    socket.on ('chat message', function(msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    })
});
http.listen(3000, function(){
    console.log('Serveur connecté sur le port 3000');
})