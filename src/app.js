//Textos
const resultadoTitulo = document.querySelector(".titleResult");
const resultadoTexto = document.querySelector(".textResult");
const texto = document.querySelector(".textInput");
//imagenes
const imagen = document.querySelector(".image");
const checkIcon = document.querySelector(".checkIcon");
//Botones
const botonEncriptar = document.querySelector(".code");
const botonDesencriptar = document.querySelector(".encode");
const botonCopiar = document.querySelector(".copy");

//claves de encriptacion
const keys = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptar(message) {
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        let encryptedChar = char;
        for (let j = 0; j < keys.length; j++) {
            if (char === keys[j][0]) {
                encryptedChar = keys[j][1];
                break;
            }
        }
        encryptedMessage += encryptedChar;
    }
    return encryptedMessage;
}

function desencriptar(message) {
    let decryptedMessage = message;
    for (let i = 0; i < keys.length; i++) {
        const regex = new RegExp(keys[i][1], 'g');
        decryptedMessage = decryptedMessage.replace(regex, keys[i][0]);
    }
    return decryptedMessage;
}

botonEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let message = texto.value.toLowerCase();
    let messageEn = encriptar(message);
    resultadoTexto.textContent = messageEn;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es: ";
});

botonDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let message = texto.value.toLowerCase();
    let messageD = desencriptar(message);
    resultadoTexto.textContent = messageD;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "Texto: ";
});

botonCopiar.addEventListener("click", () => {
    let textoCopiado = resultadoTexto.textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        checkIcon.classList.remove("hidden");  
        setTimeout(() => {
            checkIcon.classList.add("hidden");  
        }, 2000);
        resultadoTitulo.textContent = "El texto se ha copiado correctamente";
        resultadoTexto.textContent = "";
    });
});
