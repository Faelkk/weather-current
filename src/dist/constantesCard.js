export default function puxarVariaveis() {
    return {
        formCard: document.querySelector(".form-card"),
        inputCard: document.querySelector(".input-location"),
        cardSearch: document.querySelector(".response-200"),
        spanTemp: document.querySelector(".temperatura"),
        spanDescription: document.querySelector(".descricao"),
        spanUmity: document.getElementById("percentage-umity"),
        spanSpeed: document.getElementById("speed-wind"),
        imgIcon: document.querySelector("#clima"),
        inputLocation: document.querySelector(".input-location"),
    };
}
