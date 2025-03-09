document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const messageHistory = document.getElementById("message-history");
    const formMessage = document.getElementById("form-message");

    // Komentāru ielādēšana no LocalStorage
    const loadMessages = () => {
        const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
        savedMessages.forEach((message) => {
            addMessageToHistory(message.name, message.email, message.message);
        });
    };

    // Ziņojuma pievienošana vēsturei
    const addMessageToHistory = (name, email, message) => {
        const messageItem = document.createElement("li");
        messageItem.className = "message-item";
        messageItem.innerHTML = `
            <strong>Vārds:</strong> ${name}<br>
            <strong>E-pasts:</strong> ${email}<br>
            <strong>Ziņa:</strong> ${message}
        `;
        messageHistory.appendChild(messageItem);
    };

    // Ziņojuma saglabāšana LocalStorage
    const saveMessage = (name, email, message) => {
        const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
        savedMessages.push({ name, email, message });
        localStorage.setItem("messages", JSON.stringify(savedMessages));
    };

    // Veidlapas iesniegšanas apstrāde
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Pievienot ziņojumu vēsturei un LocalStorage
        addMessageToHistory(name, email, message);
        saveMessage(name, email, message);

        // Izdzēst veidlapu
        form.reset();

        // Rādīt paziņojumu
        formMessage.textContent = "Ziņa nosūtīta veiksmīgi!";
        formMessage.style.color = "green";

        // Paslēpt paziņojumu pēc 3 sekundēm
        setTimeout(() => {
            formMessage.textContent = "";
        }, 3000);
    });

    // Ziņu ielādēšana lapas ielādes laikā
    loadMessages();
});

