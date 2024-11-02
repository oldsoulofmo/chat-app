// create the conncetion to the hub 
const connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

// recieve messages from the hub
// and render them
connection.on("ReceiveMessage", (user,message) => {
    const msg = document.createElement("div");
    msg.textContent = `${user} : ${message}`;
    document.getElementById("messages").appendChild(msg);
})

// starting the connection
connection.start().catch(err => console.error(err.toString()));
// and catch errors
document.getElementById("sendButton").addEventListener("click", (e) => {
    const user = document.getElementById("userInput").value;
    const message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message).catch((error) => console.error(error.toString()));
    e.preventDefault();
});