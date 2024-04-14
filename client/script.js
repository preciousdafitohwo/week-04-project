const form = document.getElementById("form");

function sendForm(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const message = event.target.message.value;

    console.log(username);
    console.log(message);
    

fetch("https://week-04-project-2.onrender.com//message",      
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
    const response = await fetch("https://week-04-project-2.onrender.com/messages");  // replaced "http://localhost:8080/message" with the render url
    const messages = await response.json();

    // now displaying them onto the page on the page

    messages.forEach(function (message) {
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const del = document.createElement("button")

        h3.textContent = `${message.name} said:`;
        p.textContent = message.message;
        del.textContent = "Delete message"

        displayMessages.appendChild(h3);
        displayMessages.appendChild(p);
        displayMessages.appendChild(del);
        del.addEventListener("click", function () {deleteMsg(message.id)});
        
    });
}
// a function to delete msg by id

function deleteMsg(id) {
   
fetch("https://week-04-project-2.onrender.com/delete",   //"http://localhost:8080/messages"
{
    method: "DELETE",
    body: JSON.stringify({id: id}),
    headers: {
        "Content-Type": "application/json"
    },
})
};

getMessages();





