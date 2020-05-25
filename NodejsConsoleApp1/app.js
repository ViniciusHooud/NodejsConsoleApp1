var server = net.createServer(function (socket) {
    guestId++;
    socket.nickname = "Guest" + guestId
    var clientName = socket.nickname;

    console.log(clientName + 'Entrou no chat.');

    socket.write("Bem-Vindo ao chat\n");

    broadcast(clientName, clientName + 'Ingressou.\n');

    socket.on('data', function (data) {
        var message = clientName + '> ' + data.toString();
        broadcast(clientName, message);

    });

    socket.on('end', function () {
        var message = clientName + 'Desconectou\n';

        process.stdout.write(message);

        removeSocket(socket);

        broadcast(clientName, message);
    });

    socket.on('error', function (error) {
        console.log('Erro:', error.message);
    });
});

if (sockets.length === 0) {
    process.stdout.write('Todos abandonaram');
    return;
}
sockets.forEach(function (socket, index, array) {
    if (socket.nickname == from) return;
    socket.write(message);
});

function removeSocket(socket) {
    sockets.splice(sockets.index0f(socket), 1);
};

server.on('erro', function (error) {
    console.log("Estamos com problemas!", error.message);
});

server.listen(port, function () {
    console.log("Server em http://localhost:" + port);
});