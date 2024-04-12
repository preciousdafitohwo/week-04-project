const form = document.getElementById("form");



function sendForm(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const message = event.target.message.value;

    console.log(username);
    console.log(message);
    

fetch("http://localhost:8080/message",
{
    method: "POST",
    body: JSON.stringify({name: username, message: message}),
    headers: {
        "Content-Type": "application/json"
    },
})
};

form.addEventListener("submit", sendForm);






const displayMessages = document.getElementById("messages-container");

// below to get the messages from the database 

async function getMessages() {
    const response = await fetch("http://localhost:8080/messages");
    const messages = await response.json();
// console.log(messages);
    // now displaying them onto the page in the
    messages.forEach(function (message) {
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const del = document.createElement("button")

        h3.textContent = `${message.name} said:`;
        p.textContent = message.message;
        del.textContent = "Delete message"

        displayMessages.appendChild(h3);
        displayMessages.appendChild(p);
        displayMessages.appendChild(del)
        // del.addEventListener("click" (run this function))
    });
}

getMessages();


