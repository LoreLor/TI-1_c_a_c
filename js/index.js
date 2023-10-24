const form = document.getElementById("messageForm");
const confirmatinMesagge = document.getElementById("confirmationMessage");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    swal({
        title: "Mensaje enviado satisfactoriamente",
        icon: "success",
        button: "OK",
      });

    const name = document.getElementById("name");
    const lastName  = document.getElementById("lastName");
    const message = document.getElementById("message");

    name.value = "";
    lastName.value = "";
    message.value = "";

});