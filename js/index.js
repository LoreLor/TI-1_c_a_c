




const form = document.getElementById("messageForm");
const confirmatinMesagge = document.getElementById("confirmationMessage");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    confirmatinMesagge.style.display = "flex";

    const name = document.getElementById("name");
    const lastName  = document.getElementById("lastName");
    const message = document.getElementById("message");

    name.value = "";
    lastName.value = "";
    message.value = "";

    setTimeout(() => {
        confirmatinMesagge.style.display = "none";
    }, 3000);

});