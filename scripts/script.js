const navbar = document.querySelector('.navbar');
const mobileNavBar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
    mobileNavBar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});


const form = document.querySelector("#form-contact");
const buttonForm = document.querySelector("#button-form");

const addLoading = () => {
    buttonForm.innerHTML = '<img class="loading" src="./assets/imagens/loading.svg" alt="Icon loading">'; 
};

const removeLoading = () => {
	buttonForm.innerHTML = 'Enviar';
    alert("Mensagem enviada com sucesso!");
};     

const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    const fullDate = new Date().toLocaleString("pt-BR");

    addLoading();

    fetch("https://api.sheetmonkey.io/form/67SRCFWrDbXSpUsXkmcm9n", {

        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ Name: name.value, Email: email.value, Message: message.value, Date: fullDate})
    }).then( () => {
        name.value = "";
        email.value = "";
        message.value = "";

        removeLoading();     
    })
}

form.addEventListener("submit", handleSubmit)