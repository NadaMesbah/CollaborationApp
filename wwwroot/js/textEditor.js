var connection = new signalR.HubConnectionBuilder().withUrl("/hubs/texteditor").build();
connection.start().then(function () {
    document.getElementById("updateButton").addEventListener("click", function (event) {
        var content = document.getElementById("textEditor").value;
        connection.invoke("UpdateDocument", content).catch(function (err) {
            return console.error(err.toString());
        });
        event.preventDefault();
    });
    connection.on("ReceiveUpdate", function (content) {
        document.getElementById("textEditor").value = content;
    });
}).catch(function (err) {
    return console.error(err.toString());
});